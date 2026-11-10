#!/usr/bin/env python3
"""Section-flow and reflection-restore patch for the Trailblazer Trek chapters.

Idempotent. Run from the repo root:  python3 tools/patch_section_flow.py .

What it does to each "Chapter *.html":
  1. Layout (chapters whose sections end in a .nav-buttons row): the reflection
     box and "Complete Section" come first; "Back to Home" moves down beside
     "Next Section" / "View Report", and those two buttons finish the section
     before navigating, so the 50-point completion bonus cannot be skipped.
  2. Gate: every reveal card and knowledge check that counts toward a section's
     max must be done before the section can be completed (the "-upd" items
     added in content updates were scored but not required).
  3. Reflection guard: unsubmitted drafts are auto-saved, submitted reflections
     reappear (locked) after a resume, and the completion report always prints
     the Student Reflections block no matter which button opens it.
"""
import glob, os, re, sys

LAYOUT = re.compile(
    r'<div class="nav-buttons">\s*'
    r'<button class="nav-button" onclick="navigateToHome\(\)">← Back to Home</button>\s*'
    r'(?P<extra>.*?)'
    r'(?P<finish><div class="reflection-box" id="reflection-section(?P<n>\d+)">.*?'
    r'<div class="section-gate-msg" id="sectionGate(?P=n)"[^>]*></div>)\s*'
    r'<button class="nav-button" onclick="(?P<oc>navigateToSection\(\d+\)|generateReport\(\))">(?P<label>[^<]*)</button>\s*'
    r'</div>', re.S)

CSS = '''        .section-finish { margin-top: 2rem; text-align: center; }
        .section-finish .reflection-box { text-align: left; }
'''
CSS_ANCHOR = '        .nav-buttons {\n            display: flex;'

GUARD = r'''<!-- Trek reflection guard: keep drafts, restore saved reflections, finish sections from the bottom buttons -->
<script id="trek-reflection-guard">
(function () {
    'use strict';
    if (typeof gameState === 'undefined' || !gameState) { return; }

    // The completion report prints the Student Reflections block no matter
    // which button opens it.
    if (typeof window.generateReport === 'function' && !window.generateReport.__trekWrapped) {
        var baseReport = window.generateReport;
        window.generateReport = function () {
            var out = baseReport.apply(this, arguments);
            try { if (typeof window.renderReflectionReport === 'function') { window.renderReflectionReport(); } } catch (e) {}
            return out;
        };
        window.generateReport.__trekWrapped = true;
    }

    // "Next Section" and "View Report" finish the current section first. If
    // cards, knowledge checks, or the reflection are missing, the existing
    // gate message says so and the student stays put.
    function done(n) {
        var d = gameState.sectionsCompleted || [];
        return d.indexOf(n) !== -1 || d.indexOf(String(n)) !== -1;
    }
    function finish(n) {
        if (!done(n) && typeof completeSection === 'function') { completeSection(n); }
        return done(n);
    }
    window.goNextSection = function (n) { if (finish(n)) { navigateToSection(n + 1); } };
    window.finishAndReport = function (n) { if (finish(n)) { window.generateReport(); } };

    function boxes(fn) {
        Array.prototype.forEach.call(document.querySelectorAll('textarea[id^="reflectionInput"]'), function (ta) {
            fn(ta, ta.id.replace('reflectionInput', ''));
        });
    }
    // Drafts ride along in gameState, so the existing auto-save keeps them.
    boxes(function (ta, n) {
        ta.addEventListener('input', function () {
            if (!gameState.reflectionDrafts || typeof gameState.reflectionDrafts !== 'object') { gameState.reflectionDrafts = {}; }
            gameState.reflectionDrafts[n] = ta.value;
        });
    });
    // After a resume, put the text back on screen and show what was credited.
    function sync() {
        var refs = gameState.reflections || {}, drafts = gameState.reflectionDrafts || {};
        boxes(function (ta, n) {
            var r = refs['reflection' + n];
            var btn = document.getElementById('reflectionSubmit' + n);
            var fb = document.getElementById('reflectionFeedback' + n);
            if (r && r.credited) {
                ta.value = r.text || '';
                ta.classList.add('locked'); ta.readOnly = true;
                if (btn) { btn.textContent = 'Saved ✓'; btn.disabled = true; }
                if (fb && !fb.innerHTML) {
                    fb.className = 'reflection-feedback show success'; fb.style.display = 'block';
                    fb.innerHTML = '&#10003; Reflection saved (+25 points). It will appear on your completion report.';
                }
            } else if (drafts[n] && !ta.value) {
                ta.value = drafts[n];
            }
            if (typeof updateReflectionCount === 'function') { try { updateReflectionCount(n); } catch (e) {} }
        });
    }
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', sync); } else { sync(); }
    window.addEventListener('load', sync);
})();
</script>
'''
GUARD_ANCHOR = '<!-- Trek save guard:'
LOCK_OLD = "input.classList.add('locked'); submitBtn.textContent"
LOCK_NEW = "input.classList.add('locked'); input.readOnly=true; submitBtn.textContent"


def layout(m):
    n = m.group('n')
    oc = 'finishAndReport(%s)' % n if m.group('oc').startswith('generateReport') else 'goNextSection(%s)' % n
    extra = m.group('extra').strip()
    extra = ('<div class="section-extra">\n                ' + extra + '\n            </div>\n            ') if extra else ''
    return (extra + '<div class="section-finish">\n                ' + m.group('finish') + '\n            </div>\n'
            '            <div class="nav-buttons">\n'
            '                <button class="nav-button" onclick="navigateToHome()">← Back to Home</button>\n'
            '                <button class="nav-button" onclick="%s">%s</button>\n'
            '            </div>' % (oc, m.group('label')))


def section_items(s):
    """{section number: (card ids, question ids)} as they appear in the markup."""
    marks = [(int(m.group(1)), m.start()) for m in re.finditer(r'<div[^>]*\bid="section(\d+)"', s)]
    out = {}
    for i, (n, pos) in enumerate(marks):
        end = marks[i + 1][1] if i + 1 < len(marks) else len(s)
        seg = s[pos:end]
        cards = list(dict.fromkeys(re.findall(r"revealCard\(this,\s*'([^']+)'", seg)))
        qs = list(dict.fromkeys(re.findall(r"handleAnswer\(this,\s*(?:true|false),\s*'([^']+)'", seg)))
        out[n] = (cards, qs)
    return out


def sync_gate(s, notes):
    body_end = s.find('// Game State')
    items = section_items(s[:body_end] if body_end != -1 else s)
    def fix(m):
        n = int(m.group(1))
        if n not in items: return m.group(0)
        cards, qs = items[n]
        have_c = re.findall(r"'([^']+)'", m.group(2)); have_q = re.findall(r"'([^']+)'", m.group(3))
        if sorted(have_c) == sorted(cards) and sorted(have_q) == sorted(qs): return m.group(0)
        notes.append('gate S%d +%s' % (n, sorted(set(cards + qs) - set(have_c + have_q))))
        q = lambda xs: ','.join("'%s'" % x for x in xs)
        return "'%d': { cards: [%s], questions: [%s]" % (n, q(cards), q(qs))
    return re.sub(r"'(\d+)':\s*\{\s*cards:\s*\[([^\]]*)\],\s*questions:\s*\[([^\]]*)\]", fix, s)


def patch(s):
    notes = []
    s, k = LAYOUT.subn(layout, s)
    if k:
        notes.append('layout x%d' % k)
    if 'class="section-finish"' in s and '.section-finish {' not in s:
        assert s.count(CSS_ANCHOR) == 1, 'CSS anchor'
        s = s.replace(CSS_ANCHOR, CSS + CSS_ANCHOR)
    if LOCK_OLD in s:
        s = s.replace(LOCK_OLD, LOCK_NEW); notes.append('lock')
    s = sync_gate(s, notes)
    if 'id="trek-reflection-guard"' not in s:
        assert s.count(GUARD_ANCHOR) == 1, 'guard anchor'
        s = s.replace(GUARD_ANCHOR, GUARD + GUARD_ANCHOR); notes.append('guard')
    return s, notes


def main(root):
    files = sorted(glob.glob(os.path.join(root, 'Chapter *.html')), key=lambda p: int(re.search(r'Chapter (\d+)', p).group(1)))
    for f in files:
        s = open(f, encoding='utf-8').read()
        new, notes = patch(s)
        if new != s:
            open(f, 'w', encoding='utf-8', newline='').write(new)
        print('%-12s %s' % (re.search(r'Chapter \d+', f).group(0), ', '.join(notes) or 'no change'))


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else '.')
