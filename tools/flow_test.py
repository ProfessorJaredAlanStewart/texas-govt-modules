#!/usr/bin/env python3
"""Browser regression test for the Trek chapters (needs: pip install playwright, a Chrome/Chromium).

  python3 tools/flow_test.py .            # all chapters
  python3 tools/flow_test.py . 11 13      # selected chapters
  CHROME=/path/to/chrome python3 tools/flow_test.py .

For every chapter it plays a perfect run the way students do (following the
bottom buttons where a section has "Next Section" / "View Report", otherwise
"Complete Section") and checks:
  - the report shows 100% and every section complete
  - every reflection prints on the report, including when the report is opened
    from the last section
  - the gate blocks leaving a section whose reflection is missing
  - after a reload + resume, submitted reflections reappear locked, points are
    not double counted, and an unsubmitted draft is still in its box
"""
import glob, os, re, sys, urllib.parse
from playwright.sync_api import sync_playwright

TEXT = ("Part time legislators lean on outside experts for technical information they could never gather alone, and that is a "
        "real service to representative government. The trouble starts when only well funded players can afford a constant "
        "presence in Austin while ordinary residents show up once a session, so the surrounding conditions matter more than the "
        "practice itself in my view of Texas politics today.")
WAIT_SAVE = 5600


def play(browser, path):
    fails, url = [], 'file://' + urllib.parse.quote(os.path.abspath(path))
    ctx = browser.new_context(viewport={'width': 1280, 'height': 1000}); pg = ctx.new_page(); errs = []
    pg.on('dialog', lambda d: d.accept()); pg.on('pageerror', lambda e: errs.append(str(e)[:160]))

    def pace():
        o = pg.query_selector('#pacingWarningOverlay')
        if o and o.is_visible(): pg.click('#pacingWarningBox button')

    def do_items(n):
        for x in pg.query_selector_all('#section%d [onclick*="revealCard"]' % n): x.click()
        for q in pg.query_selector_all('#section%d .kc-option[onclick*="handleAnswer(this, true"]' % n): q.click()

    pg.goto(url); pg.fill('#studentName', 'Test Student'); pg.evaluate('startAdventure()')
    secs = pg.evaluate("[...document.querySelectorAll('.page[id^=section]')].map(e=>+e.id.replace('section','')).filter(n=>n>0).sort((a,b)=>a-b)")
    used_nav = 0
    pg.evaluate('navigateToSection(%d)' % secs[0])
    for i, n in enumerate(secs):
        if not pg.is_visible('#section%d' % n): pg.evaluate('navigateToSection(%d)' % n)
        do_items(n)
        nav = pg.query_selector('#section%d .nav-buttons .nav-button[onclick*="goNextSection"], #section%d .nav-buttons .nav-button[onclick*="finishAndReport"]' % (n, n))
        if i == 0:   # gate: cannot finish without the reflection
            (nav or pg.query_selector('#section%d [onclick*="completeSection(%d)"]' % (n, n))).click(); pg.wait_for_timeout(150)
            if pg.evaluate('gameState.sectionsCompleted.length') != 0 or not pg.is_visible('#section%d' % n):
                fails.append('gate did not hold without reflection')
        pg.fill('#reflectionInput%d' % n, TEXT); pg.click('#reflectionSubmit%d' % n); pace()
        if nav: nav.click(); used_nav += 1
        else: pg.click('#section%d [onclick*="completeSection(%d)"]' % (n, n))
        pg.wait_for_timeout(120); pace()
    if not pg.is_visible('#reportPage'):
        pg.locator('#homePage [onclick*="generateReport"] >> visible=true').first.click()
    pg.wait_for_timeout(1300)
    total = len(secs)
    grade = pg.inner_text('#gradePercentage').strip()
    done = pg.evaluate('gameState.sectionsCompleted.length')
    printed = pg.evaluate("document.querySelectorAll('#studentReflectionsReport > div[style*=border-left]').length")
    missing = pg.evaluate("(document.getElementById('reportPage').innerText.match(/No reflection submitted/g)||[]).length")
    if grade != '100%': fails.append('grade %s' % grade)
    if done != total: fails.append('sections %d/%d' % (done, total))
    if printed != total or missing: fails.append('reflections on report %d/%d (missing %d)' % (printed, total, missing))
    pts = pg.evaluate('gameState.totalPoints')

    # resume
    pg.wait_for_timeout(WAIT_SAVE); pg.reload(); pg.wait_for_timeout(900)
    r = pg.evaluate("({pts:gameState.totalPoints, n:[...document.querySelectorAll('textarea[id^=reflectionInput]')].filter(t=>t.value.length>50&&t.readOnly).length,"
                    "dis:[...document.querySelectorAll('[id^=reflectionSubmit]')].filter(b=>b.disabled).length})")
    if r['pts'] != pts: fails.append('points changed on resume %s->%s' % (pts, r['pts']))
    if r['n'] != total or r['dis'] != total: fails.append('reflections restored %d/%d locked %d' % (r['n'], total, r['dis']))
    pg.locator('#homePage [onclick*="generateReport"] >> visible=true').first.click(); pg.wait_for_timeout(1000)
    if pg.inner_text('#gradePercentage').strip() != '100%': fails.append('grade after resume ' + pg.inner_text('#gradePercentage'))
    ctx.close()

    # draft survives a reload
    c2 = browser.new_context(); p2 = c2.new_page(); p2.on('dialog', lambda d: d.accept()); p2.on('pageerror', lambda e: errs.append(str(e)[:160]))
    p2.goto(url); p2.fill('#studentName', 'Draft Tester'); p2.evaluate('startAdventure()'); p2.evaluate('navigateToSection(%d)' % secs[0])
    p2.click('#section%d [onclick*="revealCard"]' % secs[0])
    p2.click('#reflectionInput%d' % secs[0]); p2.keyboard.type('An unfinished draft typed by hand.')
    p2.wait_for_timeout(WAIT_SAVE); p2.reload(); p2.wait_for_timeout(900)
    if p2.evaluate("document.getElementById('reflectionInput%d').value" % secs[0]) != 'An unfinished draft typed by hand.': fails.append('draft lost on reload')
    c2.close()
    if errs: fails.append('page errors %s' % errs[:2])
    return total, used_nav, pts, fails


def main():
    root = sys.argv[1] if len(sys.argv) > 1 else '.'
    only = set(sys.argv[2:])
    files = sorted(glob.glob(os.path.join(root, 'Chapter *.html')), key=lambda p: int(re.search(r'Chapter (\d+)', p).group(1)))
    bad = 0
    with sync_playwright() as p:
        kw = {'args': ['--no-sandbox']}
        if os.environ.get('CHROME'): kw['executable_path'] = os.environ['CHROME']
        b = p.chromium.launch(**kw)
        for f in files:
            ch = re.search(r'Chapter (\d+)', f).group(1)
            if only and ch not in only: continue
            try:
                total, nav, pts, fails = play(b, f)
            except Exception as e:  # a crash is a failure, keep going
                total, nav, pts, fails = '?', '?', '?', ['crashed: %s' % str(e).splitlines()[0][:160]]
            bad += bool(fails)
            print('Chapter %-3s sections %-2s bottom-nav %-2s points %-5s %s' % (ch, total, nav, pts, 'PASS' if not fails else 'FAIL: ' + '; '.join(fails)), flush=True)
        b.close()
    print('\n%s' % ('All chapters pass.' if not bad else '%d chapter(s) failing.' % bad))
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
