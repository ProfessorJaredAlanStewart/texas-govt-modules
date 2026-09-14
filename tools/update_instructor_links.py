#!/usr/bin/env python3
"""Regenerate the lecture-deck download links on instructors.html.

The link list is built from whatever is actually in slides/, so the page cannot
drift out of sync as decks are added. Run this after building any new deck.

Markers in instructors.html delimit the generated region:
    <!-- SLIDE-LINKS-START --> ... <!-- SLIDE-LINKS-END -->
"""
import glob, os, re, urllib.parse, sys

START = "<!-- SLIDE-LINKS-START -->"
END = "<!-- SLIDE-LINKS-END -->"
PAGE = "instructors.html"


def decks():
    out = []
    for p in glob.glob("slides/*.pptx"):
        base = os.path.basename(p)
        m = re.match(r"Chapter (\d+)", base)
        if not m:
            continue
        out.append((int(m.group(1)), p))
    return sorted(out)


def build_links(found):
    lines = []
    for num, path in found:
        href = urllib.parse.quote(path)
        lines.append(f'          <a class="dl" href="{href}">Ch {num} &darr;</a>')
    return "\n".join(lines)


def build_blurb(found, total=18):
    n = len(found)
    if n >= total:
        return ("Editable PowerPoint for every chapter. Each slide carries speaker notes with "
                "timing, board work, common student misconceptions, cold-call prompts, and "
                "built-in discussion questions, so a colleague can teach a chapter without prep.")
    return (f"Editable PowerPoint. Each slide carries speaker notes with timing, board work, "
            f"common student misconceptions, cold-call prompts, and built-in discussion "
            f"questions, so a colleague can teach a chapter without prep. "
            f"<strong>{n} of {total} chapters</strong> released so far; the rest are in progress.")


def main():
    if not os.path.exists(PAGE):
        sys.exit(f"{PAGE} not found. Run from the repo root.")
    found = decks()
    if not found:
        sys.exit("No decks found in slides/.")

    c = open(PAGE, encoding="utf-8").read()

    # First run: wrap the existing hand-written links in markers.
    if START not in c:
        m = re.search(r'(<td>\s*\n)((?:\s*<a class="dl" href="slides/[^\n]*\n)+)(\s*</td>)', c)
        if not m:
            sys.exit("Could not locate the slide link block to wrap. Add the markers by hand.")
        c = c[:m.start(2)] + f"{START}\n{START}-PLACEHOLDER\n{END}\n" + c[m.end(2):]
        c = c.replace(f"{START}-PLACEHOLDER\n", "")

    # Replace the generated region.
    c = re.sub(re.escape(START) + r".*?" + re.escape(END),
               START + "\n" + build_links(found) + "\n          " + END, c, flags=re.S)

    # Keep the description honest about how many are released.
    c = re.sub(r'(<th scope="row">Lecture slide decks</th>\s*\n\s*<td>).*?(</td>)',
               lambda m: m.group(1) + build_blurb(found) + m.group(2), c, flags=re.S)

    open(PAGE, "w", encoding="utf-8").write(c)
    print(f"instructors.html updated: {len(found)} decks linked "
          f"({', '.join('Ch ' + str(n) for n, _ in found)})")

    missing = [p for _, p in found if not os.path.exists(p)]
    if missing:
        print("  WARNING, linked file missing:", missing)


if __name__ == "__main__":
    main()
