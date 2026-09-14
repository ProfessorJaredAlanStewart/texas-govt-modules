#!/usr/bin/env python3
"""Two chapter-wide passes. Safe to re-run; every step is idempotent.

1. HERO BANNER -> navy. The fixed header is already navy (#002b5c), so a teal
   hero directly beneath it put two competing brand colors on top of each other.
   Navy also raises white-on-background contrast from 5.18:1 to 14.0:1.

2. RETURN TO CHAPTER LIST. No chapter linked back to index.html at all. The link
   is hidden by default and revealed only if index.html actually resolves, so a
   chapter imported into Canvas on its own never shows a dead button.
"""
import glob, re, sys

HERO_OLD = "linear-gradient(135deg, #00788a, #1a8fa0)"
HERO_NEW = "linear-gradient(135deg, #002b5c, #00406e)"

CSS = """
        /* Return to chapter list: hidden until index.html is confirmed present */
        .back-to-list {
            display: inline-block;
            flex-shrink: 0;
            background: rgba(255, 255, 255, 0.14);
            color: #ffffff;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            padding: 0.4rem 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.35);
            border-radius: 999px;
            white-space: nowrap;
            transition: background 0.2s ease;
        }
        .back-to-list:hover,
        .back-to-list:focus { background: rgba(255, 255, 255, 0.28); }
        .back-to-list:focus-visible {
            outline: 3px solid #FFD54F;
            outline-offset: 2px;
        }
        .back-to-list[hidden] { display: none; }
        @media (max-width: 768px) {
            .back-to-list { align-self: center; }
        }
"""

LINK = ('        <a href="index.html" class="back-to-list" id="backToList">'
        '&#8592; All Chapters</a>\n')

SCRIPT = """
    <script>
    /* The link is visible by default so it always works on the published site,
       even if fetch is unavailable. It is removed only when index.html is
       positively confirmed missing, which is the standalone case (a single
       chapter imported into Canvas), so students never get a link that 404s. */
    (function () {
        var el = document.getElementById('backToList');
        if (!el || !window.fetch) return;
        try {
            fetch('index.html', { method: 'HEAD' })
                .then(function (r) { if (!r || !r.ok) { el.hidden = true; } })
                .catch(function () { el.hidden = true; });
        } catch (e) { /* leave visible */ }
    })();
    </script>
"""


def patch(path):
    c = open(path, encoding="utf-8").read()
    orig = c
    did = []

    # 1. hero colour
    if HERO_OLD in c:
        c = c.replace(HERO_OLD, HERO_NEW)
        did.append("hero")

    # 2a. css (once)
    if ".back-to-list {" not in c:
        m = re.search(r"\n(\s*)\.hero-section \{", c)
        if not m:
            return None, "no .hero-section rule to anchor CSS"
        c = c[:m.start()] + "\n" + CSS + c[m.start():]
        did.append("css")

    # 2b. link markup inside the fixed header (once)
    if 'id="backToList"' not in c:
        m = re.search(r'(<div class="header">\s*\n)', c)
        if not m:
            return None, "no .header div to anchor link"
        c = c[:m.end()] + LINK + c[m.end():]
        did.append("link")

    # 2c. reveal script, immediately before </body> (once)
    if "backToList" in c and "fetch('index.html'" not in c:
        i = c.rfind("</body>")
        if i == -1:
            return None, "no </body>"
        c = c[:i] + SCRIPT + c[i:]
        did.append("script")

    if c == orig:
        return [], None
    open(path, "w", encoding="utf-8").write(c)
    return did, None


def main():
    files = sorted(glob.glob("Chapter *Trailblazer Trek*.html"))
    if not files:
        sys.exit("No chapter files found. Run from the repo root.")
    errs = 0
    for f in files:
        did, err = patch(f)
        if err:
            print(f"  ERROR {f}: {err}"); errs += 1
        else:
            print(f"  {f[:52]:54s} {', '.join(did) if did else 'already current'}")
    print(f"\n{len(files)} chapters processed, {errs} errors")
    return 1 if errs else 0


if __name__ == "__main__":
    sys.exit(main())
