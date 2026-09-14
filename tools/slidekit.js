/**
 * slidekit.js
 * Shared design system for Trailblazer Trek lecture decks.
 *
 * Every chapter deck requires this module so the palette, type scale, motifs
 * and QA-relevant geometry stay identical across the set. Change it here and
 * every deck inherits the change on rebuild.
 *
 * House rules baked in:
 *   - No em dashes anywhere in slide text or speaker notes.
 *   - No decorative accent bars or stripes.
 *   - Slide titles are large (40pt) because students use them as note headings.
 *   - Every slide carries substantive speaker notes.
 *   - Contested questions get paired panels that are never labeled by party.
 */
const pptxgen = require("pptxgenjs");

// Palette: documentary rather than generic corporate blue.
const C = {
  INK:   "002B5C",  // dominant navy, ties to the course brand
  PARCH: "F7F3EA",  // parchment, light slides
  GOLD:  "B07D2B",  // burnished accent
  TEAL:  "00788A",  // course secondary
  CRIM:  "98002E",  // sparing emphasis
  WHITE: "FFFFFF",
  BODY:  "1F2933",
  MUTE:  "5A6673",
  LINE:  "E0D7C6",
  PALE:  "C3D0E0",  // subdued text on dark
};

const F = { H: "Cambria", B: "Calibri" };   // safe fonts: true-to-width in QA, ship with Office
const W = 13.333, HT = 7.5, M = 0.65;       // canvas and margin

// Type scale. Titles are deliberately large.
const T = { title: 50, section: 44, slide: 40, discuss: 38, closing: 40,
            cardName: 18, lead: 16, body: 13.5, small: 12, tiny: 10.5 };

function newDeck(chapterLabel, chapterTitle) {
  const p = new pptxgen();
  p.layout = "LAYOUT_WIDE";
  p.author = "Tarrant County College";
  p.company = "Tarrant County College";
  p.title = `${chapterLabel}: ${chapterTitle}`;
  return p;
}

function makeKit(pres) {
  const kit = { n: 0 };

  kit.notes = (s, t) => s.addNotes(t.trim());

  kit.dark = function () {
    const s = pres.addSlide();
    s.background = { color: C.INK };
    return s;
  };

  kit.pageNum = function (s, color) {
    kit.n += 1;
    s.addText(String(kit.n), {
      x: W - M - 0.5, y: HT - 0.4, w: 0.5, h: 0.26, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 10, color: color || C.MUTE, align: "right",
    });
  };

  // Standard content slide. Kicker is a small gold eyebrow above a large title.
  kit.slide = function (title, kicker) {
    const s = pres.addSlide();
    s.background = { color: C.PARCH };
    if (kicker) {
      s.addText(kicker.toUpperCase(), {
        x: M, y: 0.36, w: 9.5, h: 0.28, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: 11, bold: true, color: C.GOLD, charSpacing: 2,
      });
    }
    s.addText(title, {
      x: M, y: kicker ? 0.60 : 0.46, w: W - M * 2 - 0.5, h: 1.1, isTextBox: true, margin: 0,
      fontFace: F.H, fontSize: T.slide, bold: true, color: C.INK,
    });
    kit.pageNum(s);
    return s;
  };

  kit.titleSlide = function (chapterLabel, title, subtitle, footer, icons) {
    const s = kit.dark();
    s.addText(chapterLabel.toUpperCase(), {
      x: M, y: 2.15, w: 9, h: 0.34, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 13, bold: true, color: C.GOLD, charSpacing: 3,
    });
    s.addText(title, {
      x: M, y: 2.6, w: 11.2, h: 2.0, isTextBox: true, margin: 0,
      fontFace: F.H, fontSize: T.title, bold: true, color: C.WHITE, lineSpacing: 56,
    });
    s.addText(subtitle, {
      x: M, y: 4.85, w: 10.5, h: 0.9, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: T.lead, color: C.PALE, lineSpacing: 24,
    });
    s.addText(footer, {
      x: M, y: 6.05, w: 11, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 11.5, color: "8FA3BC",
    });
    return s;
  };

  kit.sectionBreak = function (label, title, blurb) {
    const s = kit.dark();
    kit.n += 1;
    s.addText(label.toUpperCase(), {
      x: M, y: 2.5, w: 8, h: 0.34, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 13, bold: true, color: C.GOLD, charSpacing: 3,
    });
    s.addText(title, {
      x: M, y: 2.95, w: 11, h: 1.7, isTextBox: true, margin: 0,
      fontFace: F.H, fontSize: T.section, bold: true, color: C.WHITE, lineSpacing: 50,
    });
    s.addText(blurb, {
      x: M, y: 4.85, w: 10.5, h: 0.85, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 15, color: C.PALE, lineSpacing: 22,
    });
    return s;
  };

  kit.closing = function (kicker, question, follow) {
    const s = kit.dark();
    kit.n += 1;
    s.addText(kicker, {
      x: M, y: 2.3, w: 9, h: 0.4, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 13, bold: true, color: C.GOLD, charSpacing: 2,
    });
    s.addText(question, {
      x: M, y: 2.85, w: 11.4, h: 1.9, isTextBox: true, margin: 0,
      fontFace: F.H, fontSize: T.closing, bold: true, color: C.WHITE, lineSpacing: 48,
    });
    s.addText(follow, {
      x: M, y: 5.1, w: 11.4, h: 0.6, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 15, color: C.PALE, lineSpacing: 21,
    });
    return s;
  };

  // Icon in a filled circle. The deck's repeated visual motif.
  kit.circle = function (s, x, y, glyph, fill, size) {
    const d = size || 0.52;
    s.addShape(pres.ShapeType.ellipse, { x, y, w: d, h: d, fill: { color: fill || C.TEAL } });
    s.addText(glyph, {
      x, y, w: d, h: d, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: d > 0.45 ? 19 : 15, color: C.WHITE,
      align: "center", valign: "middle",
    });
  };

  kit.figure = function (s, src, x, y, w, h, caption) {
    s.addImage({ path: `images/${src}`, x, y, w, h });
    if (caption) {
      s.addText(caption, {
        x, y: y + h + 0.1, w, h: 0.35, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: 10.5, color: C.MUTE, italic: true, lineSpacing: 14,
      });
    }
  };

  // Card for a landmark case, a key concept, or a defined term.
  kit.card = function (s, x, y, w, h, name, meta, lead, why) {
    s.addShape(pres.ShapeType.roundRect, {
      x, y, w, h, rectRadius: 0.08,
      fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 },
      shadow: { type: "outer", angle: 90, blur: 8, offset: 2, color: "B9AE9A", opacity: 0.35 },
    });
    s.addText(name, {
      x: x + 0.28, y: y + 0.18, w: w - 0.56, h: 0.4, isTextBox: true, margin: 0,
      fontFace: F.H, fontSize: T.cardName, bold: true, color: C.INK,
    });
    if (meta) {
      s.addText(meta, {
        x: x + 0.28, y: y + 0.58, w: w - 0.56, h: 0.26, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: 11, bold: true, color: C.GOLD, charSpacing: 1,
      });
    }
    s.addText(lead, {
      x: x + 0.28, y: y + (meta ? 0.9 : 0.66), w: w - 0.56,
      h: Math.max(0.5, h - (meta ? 0.9 : 0.66) - (why ? 1.12 : 0.2)), isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: T.body, color: C.BODY, lineSpacing: 18,
    });
    if (why) {
      s.addText([
        { text: "Why it matters: ", options: { bold: true, color: C.TEAL } },
        { text: why, options: { color: C.MUTE } },
      ], {
        x: x + 0.28, y: y + h - 1.05, w: w - 0.56, h: 0.9, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: T.small, italic: true, lineSpacing: 16,
      });
    }
  };

  // Paired panels for a contested question. Never labeled by party.
  kit.twoSides = function (s, y, leftTitle, leftPts, rightTitle, rightPts, h) {
    const cw = (W - M * 2 - 0.4) / 2, boxH = h || 2.5;
    [[M, leftTitle, leftPts, C.TEAL], [M + cw + 0.4, rightTitle, rightPts, C.CRIM]]
      .forEach(([x, t, pts, col]) => {
        s.addShape(pres.ShapeType.roundRect, {
          x, y, w: cw, h: boxH, rectRadius: 0.07,
          fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 },
        });
        s.addText(t, {
          x: x + 0.26, y: y + 0.18, w: cw - 0.52, h: 0.36, isTextBox: true, margin: 0,
          fontFace: F.B, fontSize: 14, bold: true, color: col,
        });
        s.addText(pts.map((p, i) => ({
          text: p, options: { bullet: true, breakLine: i !== pts.length - 1 },
        })), {
          x: x + 0.26, y: y + 0.62, w: cw - 0.52, h: boxH - 0.82, isTextBox: true, margin: 0,
          fontFace: F.B, fontSize: 12.5, color: C.BODY, lineSpacing: 16, paraSpaceAfter: 6,
        });
      });
  };

  // Stacked rows of icon, label, detail.
  kit.rows = function (s, y, items, opts) {
    const o = opts || {};
    const rowH = o.rowH || 1.16, gap = o.gap || 0.1;
    const labelW = o.labelW || 2.6;
    items.forEach(([glyph, label, detail, col], i) => {
      const ry = y + i * (rowH + gap);
      s.addShape(pres.ShapeType.roundRect, {
        x: M, y: ry, w: W - M * 2, h: rowH, rectRadius: 0.06,
        fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 },
      });
      kit.circle(s, M + 0.22, ry + (rowH - 0.5) / 2, glyph, col || C.TEAL, 0.5);
      s.addText(label, {
        x: M + 0.88, y: ry + 0.3, w: labelW, h: 0.4, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: 14, bold: true, color: C.INK,
      });
      s.addText(detail, {
        x: M + 0.88 + labelW + 0.2, y: ry + 0.16, w: W - M * 2 - labelW - 1.3, h: rowH - 0.3,
        isTextBox: true, margin: 0, fontFace: F.B, fontSize: 12.5, color: C.BODY, lineSpacing: 16,
      });
    });
    return y + items.length * (rowH + gap);
  };

  // Timeline of 3 to 4 steps, last one emphasized.
  kit.timeline = function (s, y, steps, h) {
    const cw = (W - M * 2 - 0.3 * (steps.length - 1)) / steps.length;
    const boxH = h || 2.3;
    steps.forEach(([when, what, detail], i) => {
      const x = M + i * (cw + 0.3), last = i === steps.length - 1;
      s.addShape(pres.ShapeType.roundRect, {
        x, y, w: cw, h: boxH, rectRadius: 0.07,
        fill: { color: last ? C.INK : C.WHITE },
        line: { color: last ? C.INK : C.LINE, width: 1 },
      });
      s.addText(when, {
        x: x + 0.24, y: y + 0.22, w: cw - 0.48, h: 0.42, isTextBox: true, margin: 0,
        fontFace: F.H, fontSize: 22, bold: true, color: C.GOLD,
      });
      s.addText(what, {
        x: x + 0.24, y: y + 0.68, w: cw - 0.48, h: 0.5, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: 13.5, bold: true, color: last ? C.WHITE : C.INK, lineSpacing: 17,
      });
      if (detail) {
        s.addText(detail, {
          x: x + 0.24, y: y + 1.2, w: cw - 0.48, h: boxH - 1.35, isTextBox: true, margin: 0,
          fontFace: F.B, fontSize: 12, color: last ? C.PALE : C.BODY, lineSpacing: 16,
        });
      }
    });
  };

  // Large number with a short explanation. For figures worth landing.
  kit.statCallout = function (s, x, y, w, h, stat, text) {
    s.addShape(pres.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.07, fill: { color: C.INK } });
    s.addText(stat, {
      x: x + 0.25, y: y + 0.12, w: 2.2, h: h - 0.24, isTextBox: true, margin: 0,
      fontFace: F.H, fontSize: 46, bold: true, color: C.GOLD, align: "center", valign: "middle",
    });
    s.addText(text, {
      x: x + 2.6, y: y + 0.12, w: w - 2.85, h: h - 0.24, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 13, color: C.WHITE, lineSpacing: 17, valign: "middle",
    });
  };

  kit.defBox = function (s, x, y, w, h, term, body) {
    s.addShape(pres.ShapeType.roundRect, {
      x, y, w, h, rectRadius: 0.07, fill: { color: C.WHITE }, line: { color: C.GOLD, width: 1.5 },
    });
    s.addText(term, {
      x: x + 0.3, y: y + 0.18, w: w - 0.6, h: 0.36, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 14, bold: true, color: C.GOLD,
    });
    s.addText(body, {
      x: x + 0.3, y: y + 0.58, w: w - 0.6, h: h - 0.78, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: T.small + 0.5, color: C.BODY, lineSpacing: 17,
    });
  };

  // Critical thinking pause. Styled unlike content slides so the class
  // registers a change of mode. Always 2 or 3 questions.
  kit.discussion = function (kicker, title, questions) {
    const s = kit.dark();
    kit.n += 1;
    s.addText(kicker.toUpperCase(), {
      x: M, y: 0.62, w: 9, h: 0.3, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 12, bold: true, color: C.GOLD, charSpacing: 2.5,
    });
    s.addText(title, {
      x: M, y: 0.95, w: W - M * 2, h: 1.0, isTextBox: true, margin: 0,
      fontFace: F.H, fontSize: T.discuss, bold: true, color: C.WHITE,
    });
    let y = 2.25;
    questions.forEach((q, i) => {
      s.addShape(pres.ShapeType.ellipse, { x: M, y: y + 0.13, w: 0.5, h: 0.5, fill: { color: C.GOLD } });
      s.addText(String(i + 1), {
        x: M, y: y + 0.13, w: 0.5, h: 0.5, isTextBox: true, margin: 0,
        fontFace: F.H, fontSize: 18, bold: true, color: C.INK, align: "center", valign: "middle",
      });
      s.addText(q, {
        x: M + 0.85, y, w: W - M * 2 - 0.85, h: 1.2, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: T.lead, color: C.WHITE, lineSpacing: 23,
      });
      y += 1.42;
    });
    s.addText(String(kit.n), {
      x: W - M - 0.5, y: HT - 0.4, w: 0.5, h: 0.26, isTextBox: true, margin: 0,
      fontFace: F.B, fontSize: 10, color: "6E8099", align: "right",
    });
    return s;
  };

  // Instructor-facing slide, marked for deletion before class.
  kit.howToUse = function (rows) {
    const s = kit.slide("How to use this deck", "For the instructor: delete before class");
    let y = 1.95;
    rows.forEach(([g, t, d, col]) => {
      kit.circle(s, M, y, g, col);
      s.addText(t, {
        x: M + 0.75, y: y - 0.03, w: 3.0, h: 0.34, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: 14.5, bold: true, color: C.INK,
      });
      s.addText(d, {
        x: M + 3.65, y: y - 0.05, w: W - M - 3.65 - M, h: 0.95, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: 12.5, color: C.BODY, lineSpacing: 16,
      });
      y += 1.16;
    });
    return s;
  };

  kit.objectives = function (title, kicker, objs) {
    const s = kit.slide(title, kicker);
    let y = 2.0;
    objs.forEach(([verb, rest], i) => {
      s.addShape(pres.ShapeType.ellipse, { x: M, y, w: 0.38, h: 0.38, fill: { color: C.INK } });
      s.addText(String(i + 1), {
        x: M, y, w: 0.38, h: 0.38, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle",
      });
      s.addText([
        { text: verb + "  ", options: { bold: true, color: C.GOLD } },
        { text: rest, options: { color: C.BODY } },
      ], {
        x: M + 0.62, y: y - 0.06, w: W - M * 2 - 0.62, h: 0.6, isTextBox: true, margin: 0,
        fontFace: F.B, fontSize: 14.5, lineSpacing: 19,
      });
      y += 0.9;
    });
    return s;
  };

  return kit;
}

module.exports = { pptxgen, newDeck, makeKit, C, F, T, W, HT, M };
