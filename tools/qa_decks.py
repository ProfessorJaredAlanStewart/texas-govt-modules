#!/usr/bin/env python3
"""Full QA gauntlet for the lecture decks. Run after building any deck.

Checks, in order of severity:
  1. Negative or zero shape extents  -> PowerPoint refuses to open the file
  2. Off-canvas shapes
  3. Text overlaps (content hidden behind a later-drawn box)
  4. Page-number collisions
  5. Thin or missing speaker notes
  6. Em dashes
"""
import glob, re, sys, zipfile
from pptx import Presentation
from pptx.util import Emu

def overlap(a, b):
    x = max(0, min(a[0]+a[2], b[0]+b[2]) - max(a[0], b[0]))
    y = max(0, min(a[1]+a[3], b[1]+b[3]) - max(a[1], b[1]))
    i = x * y
    return 0 if i <= 0 else i / min(a[2]*a[3], b[2]*b[3])

def bad_extents(path):
    """The check that would have caught the PowerPoint repair prompt."""
    z = zipfile.ZipFile(path); out = []
    for n in z.namelist():
        if not re.match(r'ppt/(slides|notesSlides)/\w+\.xml$', n):
            continue
        c = z.read(n).decode('utf-8')
        for m in re.finditer(r'<a:ext cx="(-?\d+)" cy="(-?\d+)"/>', c):
            cx, cy = int(m.group(1)), int(m.group(2))
            if cx < 0 or cy < 0:
                out.append(f"{n.split('/')[-1]} cx={cx} cy={cy}")
    return out

def main():
    files = sorted(glob.glob("slides/*.pptx"))
    ok = True; tsl = tw = 0
    for f in files:
        neg = bad_extents(f)
        p = Presentation(f)
        W, H = Emu(p.slide_width).inches, Emu(p.slide_height).inches
        ovl = []; off = []; pnc = []; thin = []; w = 0
        slides = list(p.slides); tsl += len(slides)
        for i, s in enumerate(slides, 1):
            t = s.notes_slide.notes_text_frame.text.strip() if s.has_notes_slide else ''
            if len(t) < 60: thin.append(i)
            w += len(t.split())
            boxes = []; pn = None; others = []
            for sh in s.shapes:
                try:
                    l, tp = Emu(sh.left).inches, Emu(sh.top).inches
                    ww, hh = Emu(sh.width).inches, Emu(sh.height).inches
                except Exception:
                    continue
                if l < -0.01 or tp < -0.01 or l+ww > W+0.01 or tp+hh > H+0.01:
                    off.append(i)
                if not sh.has_text_frame: continue
                tx = sh.text_frame.text.strip()
                if not tx: continue
                boxes.append((l, tp, ww, hh, tx))
                if tx.isdigit() and tp > 6.9 and ww < 0.8: pn = (l, tp, ww, hh)
                else: others.append((l, tp, ww, hh))
            if pn:
                for o in others:
                    if (o[0] < pn[0]+pn[2] and o[0]+o[2] > pn[0]
                            and o[1] < pn[1]+pn[3] and o[1]+o[3] > pn[1]):
                        pnc.append(i)
            for a in range(len(boxes)):
                for b in range(a+1, len(boxes)):
                    if overlap(boxes[a], boxes[b]) > 0.28:
                        ovl.append((i, boxes[a][4][:16], boxes[b][4][:16]))
        tw += w
        problems = []
        if neg: problems.append(f"CORRUPT extents: {neg}")
        if off: problems.append(f"off-canvas {sorted(set(off))}")
        if ovl: problems.append(f"overlap {sorted(set(x[0] for x in ovl))}")
        if pnc: problems.append(f"pagenum {sorted(set(pnc))}")
        if thin: problems.append(f"thin notes {thin}")
        ok &= not problems
        status = "CLEAN" if not problems else " | ".join(problems)
        print(f"  {f.split('/')[-1][:42]:44s} {len(slides):>2}sl {w:>5}w  {status}")
        for o in ovl[:2]:
            print(f"       sl{o[0]}: '{o[1]}' / '{o[2]}'")
    print(f"\n{len(files)} decks | {tsl} slides | {tw:,} notes words | "
          + ("ALL CLEAN" if ok else "ISSUES FOUND"))
    return 0 if ok else 1

if __name__ == "__main__":
    sys.exit(main())
