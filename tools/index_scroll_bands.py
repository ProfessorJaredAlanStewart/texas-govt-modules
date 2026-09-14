#!/usr/bin/env python3
"""Give each section of the Texas index page its own full-width tonal band,
so the sections read as distinct zones as you scroll.

Same approach as jaredalanstewart.com: a base tint per section plus two soft
radial washes in a brand hue, so the colour shifts rather than just striping.

Every band is LIGHT. The page's body copy is --text-primary (#212121) and the
cards inside are white, so a dark band would have meant inverting text colour
across deeply nested markup and re-checking contrast on every card, link and
table. Keeping the bands light means the palette changes and nothing else has
to, and contrast stays above 12:1 throughout.

Structurally: the sections are consecutive siblings inside one max-width
.container, so a contained element can't paint to the viewport edge. Rather
than fake it with 100vw (which overflows by the scrollbar width), the script
closes the container after the nav tabs and gives each section its own
full-width <section class="band"> with the container nested inside.

Safe to re-run.
"""
import re, sys

F = "index.html"

# (element id, band class, base tint, wash 1, wash 2)
BANDS = [
    ("chapters",        "band-chapters",  "#f7f3ea",
     "rgba(0,43,92,0.05)",   "rgba(176,125,43,0.07)"),
    ("instructorTools", "band-tools",     "#eaf3f5",
     "rgba(0,120,138,0.10)", "rgba(0,43,92,0.05)"),
    ("howto",           "band-howto",     "#f5f7fa",
     "rgba(0,43,92,0.07)",   "rgba(0,120,138,0.06)"),
    ("scoring",         "band-scoring",   "#fbf6e7",
     "rgba(176,125,43,0.10)","rgba(0,43,92,0.04)"),
    ("submit",          "band-submit",    "#f4eff1",
     "rgba(152,0,46,0.07)",  "rgba(0,43,92,0.05)"),
    ("tips",            "band-tips",      "#eef5e6",
     "rgba(141,198,63,0.14)","rgba(0,120,138,0.05)"),
    ("faq",             "band-faq",       "#f2f4f8",
     "rgba(0,43,92,0.06)",   "rgba(176,125,43,0.05)"),
]

CSS_HEAD = """
        /* ── SCROLL BANDS ──
           Each section gets a full-width tint so the page reads as distinct
           zones while scrolling. All bands are light, so the existing dark
           body copy keeps its contrast everywhere. */
        .band {
            padding: 3.25rem 0;
            position: relative;
        }
        .band > .container {
            padding-top: 0;
            padding-bottom: 0;
        }
        /* The colour change is the divider; this hairline just crisps the seam. */
        .band + .band { border-top: 1px solid rgba(0, 43, 92, 0.07); }
        .band :where(#chapters, #howto, #scoring, #submit, #tips, #faq,
                     .instructor-tools) { margin-top: 0; }
        @media (max-width: 768px) {
            .band { padding: 2.25rem 0; }
        }
        @media (prefers-reduced-motion: no-preference) {
            .band { scroll-margin-top: 1rem; }
        }
"""


def band_css(cls, base, w1, w2):
    return f"""        .{cls} {{
            background:
                radial-gradient(ellipse at 85% 6%, {w1} 0%, transparent 52%),
                radial-gradient(ellipse at 8% 94%, {w2} 0%, transparent 46%),
                {base};
        }}
"""


def main():
    c = open(F, encoding="utf-8").read()

    if ".band > .container" in c:
        print("  bands already present; nothing to do")
        return 0

    # Locate each section's opening tag.
    starts = []
    for sid, cls, *_ in BANDS:
        m = re.search(r'[ \t]*<div [^>]*id="%s"[^>]*>' % re.escape(sid), c)
        if not m:
            print(f"  ERROR: section #{sid} not found"); return 1
        starts.append((m.start(), m.end(), sid, cls))
    starts.sort()

    # Each section runs until the next one begins; the last ends at the
    # container's closing tag.
    end_marker = '    </div><!-- end container -->'
    tail = c.find(end_marker)
    if tail == -1:
        print("  ERROR: container end marker not found"); return 1

    # Rebuild from the back so earlier offsets stay valid.
    out = c
    for i in range(len(starts) - 1, -1, -1):
        s, _, sid, cls = starts[i]
        e = starts[i + 1][0] if i + 1 < len(starts) else tail
        body = out[s:e]
        wrapped = (
            f'    <section class="band {cls}">\n'
            f'      <div class="container">\n'
            f'{body.rstrip()}\n'
            f'      </div>\n'
            f'    </section>\n\n'
        )
        out = out[:s] + wrapped + out[e:]

    # The original container now only needs to hold the nav tabs, so close it
    # before the first band and drop its old closing tag at the end.
    first = out.find('    <section class="band ')
    out = out[:first] + '    </div><!-- end nav container -->\n\n' + out[first:]
    out = out.replace('\n' + end_marker, '', 1)

    # Inline margin-top pushed sections apart; band padding handles spacing now,
    # and leaving it would open body-coloured gaps between the bands.
    out = re.sub(r'(<div id="(?:howto|scoring|submit|tips|faq)")'
                 r' style="margin-top:3rem;"', r'\1', out)

    # Styles, anchored before the section-title block.
    css = CSS_HEAD + "".join(band_css(cls, b, w1, w2)
                             for _, cls, b, w1, w2 in BANDS)
    anchor = "        /* ── SECTION TITLES ── */"
    if anchor not in out:
        print("  ERROR: CSS anchor not found"); return 1
    out = out.replace(anchor, css + "\n" + anchor, 1)

    open(F, "w", encoding="utf-8").write(out)
    print(f"  wrapped {len(BANDS)} sections in scroll bands")
    return 0


if __name__ == "__main__":
    sys.exit(main())
