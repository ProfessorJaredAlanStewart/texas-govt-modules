/**
 * Chapter 16 — Civil Liberties and Civil Rights in Texas
 * Trailblazer Trek lecture deck (GOVT 2306)
 *
 * Design goals, in priority order:
 *  1. Teachable cold. Every slide carries speaker notes with talking points,
 *     timing, and a discussion prompt, so a colleague can teach it without prep.
 *  2. Editable. Real text boxes and shapes, no flattened images of slides.
 *  3. Neutral on contested questions. Both sides get parallel treatment.
 *  4. Matches the module, so slides and homework reinforce each other.
 */
const pptx = require("pptxgenjs");
const pres = new pptx();

pres.layout = "LAYOUT_WIDE";            // 13.333 x 7.5
pres.author = "Tarrant County College";
pres.company = "Tarrant County College";
pres.title = "Ch 16 — Civil Liberties and Civil Rights in Texas";

// ── Palette: constitutional / documentary, tied to the course brand ──
const INK   = "002B5C";   // dominant navy
const PARCH = "F7F3EA";   // parchment light background
const GOLD  = "B07D2B";   // burnished accent
const TEAL  = "00788A";   // course secondary
const CRIM  = "98002E";   // sparing emphasis
const WHITE = "FFFFFF";
const BODY  = "1F2933";
const MUTE  = "5A6673";

const H = "Cambria";      // safe serif header
const B = "Calibri";      // safe sans body

const W = 13.333, HT = 7.5;
const M = 0.65;           // margin

let n = 0;
const notes = (s, t) => s.addNotes(t.trim());

// ───────────────────────── helpers ─────────────────────────
function darkSlide() {
  const s = pres.addSlide();
  s.background = { color: INK };
  return s;
}
function lightSlide(title, kicker) {
  const s = pres.addSlide();
  s.background = { color: PARCH };
  if (kicker) {
    s.addText(kicker.toUpperCase(), {
      x: M, y: 0.36, w: 8, h: 0.28, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 11, bold: true, color: GOLD, charSpacing: 2,
    });
  }
  if (title) {
    s.addText(title, {
      x: M, y: kicker ? 0.66 : 0.5, w: W - M * 2 - 1.0, h: 0.85, isTextBox: true, margin: 0,
      fontFace: H, fontSize: 32, bold: true, color: INK,
    });
  }
  n += 1;
  s.addText(String(n), {
    x: W - M - 0.5, y: HT - 0.62, w: 0.5, h: 0.3, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 10, color: MUTE, align: "right",
  });
  return s;
}
// Icon-in-circle motif (repeated across the deck)
function circle(s, x, y, glyph, fill) {
  s.addShape(pres.ShapeType.ellipse, {
    x, y, w: 0.52, h: 0.52, fill: { color: fill || TEAL },
  });
  s.addText(glyph, {
    x, y, w: 0.52, h: 0.52, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 19, color: WHITE, align: "center", valign: "middle",
  });
}
// Landmark-case card — the deck's signature repeated element
function caseCard(s, x, y, w, h, name, year, holding, why) {
  s.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.08,
    fill: { color: WHITE },
    line: { color: "E0D7C6", width: 1 },
    shadow: { type: "outer", angle: 90, blur: 8, offset: 2, color: "B9AE9A", opacity: 0.35 },
  });
  s.addText(name, {
    x: x + 0.28, y: y + 0.18, w: w - 0.56, h: 0.38, isTextBox: true, margin: 0,
    fontFace: H, fontSize: 18, bold: true, italic: true, color: INK,
  });
  s.addText(year, {
    x: x + 0.28, y: y + 0.56, w: w - 0.56, h: 0.26, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 11, bold: true, color: GOLD, charSpacing: 1,
  });
  s.addText([
    { text: "Held: ", options: { bold: true, color: INK } },
    { text: holding, options: { color: BODY } },
  ], {
    x: x + 0.28, y: y + 0.88, w: w - 0.56, h: 0.9, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, lineSpacing: 18,
  });
  if (why) {
    s.addText([
      { text: "Why it matters: ", options: { bold: true, color: TEAL } },
      { text: why, options: { color: MUTE } },
    ], {
      x: x + 0.28, y: y + h - 1.0, w: w - 0.56, h: 0.85, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12, italic: true, lineSpacing: 16,
    });
  }
}
// Two-sided debate block — used for every contested question
function twoSides(s, y, leftTitle, leftPts, rightTitle, rightPts, h) {
  const cw = (W - M * 2 - 0.4) / 2;
  const boxH = h || 2.55;
  [[M, leftTitle, leftPts, TEAL], [M + cw + 0.4, rightTitle, rightPts, CRIM]].forEach(
    ([x, t, pts, col]) => {
      s.addShape(pres.ShapeType.roundRect, {
        x, y, w: cw, h: boxH, rectRadius: 0.07,
        fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 },
      });
      s.addText(t, {
        x: x + 0.26, y: y + 0.18, w: cw - 0.52, h: 0.36, isTextBox: true, margin: 0,
        fontFace: B, fontSize: 14, bold: true, color: col,
      });
      s.addText(pts.map((p, i) => ({
        text: p, options: { bullet: true, breakLine: i !== pts.length - 1 },
      })), {
        x: x + 0.26, y: y + 0.62, w: cw - 0.52, h: boxH - 0.82, isTextBox: true, margin: 0,
        fontFace: B, fontSize: 12.5, color: BODY, lineSpacing: 16, paraSpaceAfter: 6,
      });
    });
}


// Critical-thinking pause — deliberately styled unlike the content slides so the
// class registers a change of mode. Instructors can drop these without breaking
// anything around them.
function discussionSlide(kicker, title, questions) {
  const s = darkSlide();
  n += 1;
  s.addText(kicker.toUpperCase(), {
    x: M, y: 0.62, w: 9, h: 0.3, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12, bold: true, color: GOLD, charSpacing: 2.5,
  });
  s.addText(title, {
    x: M, y: 1.0, w: W - M * 2, h: 0.75, isTextBox: true, margin: 0,
    fontFace: H, fontSize: 31, bold: true, color: WHITE,
  });
  let y = 2.15;
  questions.forEach((q, i) => {
    s.addShape(pres.ShapeType.ellipse, { x: M, y: y + 0.13, w: 0.5, h: 0.5, fill: { color: GOLD } });
    s.addText(String(i + 1), {
      x: M, y: y + 0.13, w: 0.5, h: 0.5, isTextBox: true, margin: 0,
      fontFace: H, fontSize: 18, bold: true, color: INK, align: "center", valign: "middle",
    });
    s.addText(q, {
      x: M + 0.85, y, w: W - M * 2 - 0.85, h: 1.2, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 16, color: WHITE, lineSpacing: 23,
    });
    y += 1.42;
  });
  s.addText(String(n), {
    x: W - M - 0.5, y: HT - 0.62, w: 0.5, h: 0.3, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 10, color: "6E8099", align: "right",
  });
  return s;
}

/* ══════════════════ 1. TITLE ══════════════════ */
{
  const s = darkSlide();
  s.addText("CHAPTER 16", {
    x: M, y: 2.15, w: 9, h: 0.34, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13, bold: true, color: GOLD, charSpacing: 3,
  });
  s.addText("Civil Liberties and\nCivil Rights in Texas", {
    x: M, y: 2.6, w: 9.4, h: 1.9, isTextBox: true, margin: 0,
    fontFace: H, fontSize: 42, bold: true, color: WHITE, lineSpacing: 46,
  });
  s.addText("Freedom from government. Equal treatment by government.\nWhy the difference decides the case.", {
    x: M, y: 4.6, w: 9.4, h: 0.9, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 16, color: "C3D0E0", lineSpacing: 24,
  });
  s.addShape(pres.ShapeType.rect, { x: M, y: 5.75, w: 1.1, h: 0.035, fill: { color: GOLD } });
  s.addText("GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College", {
    x: M, y: 6.0, w: 10, h: 0.3, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 11.5, color: "8FA3BC",
  });
  notes(s, `
CHAPTER 16 — CIVIL LIBERTIES AND CIVIL RIGHTS IN TEXAS
Full deck runs about 70 minutes with two discussion breaks; see the "How to use
this deck" slide for shorter versions.

OPENING (2 min). Ask before showing anything else: "Name a right you have."
Students almost always name liberties — speech, religion, guns. Note that, then
ask: "Is the right to be treated equally by your government on that list?" That
gap IS the chapter. Write both words on the board and leave them there.

Why Texas: this state generated an unusual share of the nation's landmark rights
cases. Students are often surprised that flag burning, the end of the white
primary, and the modern right to privacy all started here.
  `);
}

/* ══════════════════ 2. HOW TO USE (faculty) ══════════════════ */
{
  const s = lightSlide("How to use this deck", "For the instructor — delete before class");
  const rows = [
    ["\u23F1", "Timing", "Full deck ~80 min with all three discussion pauses. For a 50-min class, keep one pause and cut the limits-on-speech and sources slides.", TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, delete freely — nothing is a flattened image.", GOLD],
    ["\u2696", "Neutral by design", "Contested questions appear as paired panels, never labeled by party. Three gold \u201CPause and think\u201D slides carry 2\u20133 discussion questions each \u2014 use one question, not all three.", CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 16's eight sections, so lecture and homework reinforce each other. Assessment items are in TEST-BANK.md Part A.", INK],
  ];
  let y = 1.85;
  rows.forEach(([g, t, d, c]) => {
    circle(s, M, y, g, c);
    s.addText(t, {
      x: M + 0.75, y: y - 0.03, w: 3.0, h: 0.34, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 14.5, bold: true, color: INK,
    });
    s.addText(d, {
      x: M + 3.65, y: y - 0.05, w: W - M - 3.65 - M, h: 0.95, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, color: BODY, lineSpacing: 16,
    });
    y += 1.16;
  });
  notes(s, `
INSTRUCTOR-ONLY SLIDE — delete it before projecting.

Everything in this deck is editable. If you disagree with a framing, change it;
nothing here is locked or rendered as an image.

A note on the two-panel slides: the panels are never labeled with a party name.
That is deliberate. Students should evaluate the argument rather than sort it by
team. If you are asked "which side is right," the honest answer is that this is
a course in how the system works, not a verdict.
  `);
}

/* ══════════════════ 3. OBJECTIVES ══════════════════ */
{
  const s = lightSlide("Where we're going", "Learning objectives");
  const obj = [
    ["Distinguish", "civil liberties from civil rights — and explain why the difference decides how a case is argued."],
    ["Explain", "how federal rights reach Texas through the Fourteenth Amendment and selective incorporation."],
    ["Identify", "the landmark cases Texas gave the nation, from Smith v. Allwright to Lawrence v. Texas."],
    ["Apply", "the three levels of scrutiny to a current equal-protection dispute."],
    ["Evaluate", "the responsibilities that keep rights alive in practice."],
  ];
  let y = 1.9;
  obj.forEach(([verb, rest], i) => {
    s.addShape(pres.ShapeType.ellipse, { x: M, y, w: 0.38, h: 0.38, fill: { color: INK } });
    s.addText(String(i + 1), {
      x: M, y, w: 0.38, h: 0.38, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 13, bold: true, color: WHITE, align: "center", valign: "middle",
    });
    s.addText([
      { text: verb + "  ", options: { bold: true, color: GOLD } },
      { text: rest, options: { color: BODY } },
    ], {
      x: M + 0.62, y: y - 0.06, w: W - M * 2 - 0.62, h: 0.55, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 14.5, lineSpacing: 19,
    });
    y += 0.88;
  });
  notes(s, `
TIMING: 1 minute. Don't read these aloud line by line — students tune out.

Point at #1 and #4 only. Those are the two things they will actually be assessed
on and the two they most often get wrong. Everything else supports them.

Objective 4 (levels of scrutiny) is the single most transferable idea in the
chapter. If a student remembers one framework from this unit, make it that one.
  `);
}

/* ══════════════════ 4. THE CORE DISTINCTION ══════════════════ */
{
  const s = lightSlide("Two words that are not synonyms", "The core distinction");
  const cw = (W - M * 2 - 0.45) / 2;
  // Left: liberties
  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 1.85, w: cw, h: 3.6, rectRadius: 0.08,
    fill: { color: INK }, line: { color: INK, width: 1 },
  });
  s.addText("CIVIL LIBERTIES", {
    x: M + 0.32, y: 2.12, w: cw - 0.64, h: 0.34, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, bold: true, color: GOLD, charSpacing: 2,
  });
  s.addText("Freedom FROM government", {
    x: M + 0.32, y: 2.5, w: cw - 0.64, h: 0.45, isTextBox: true, margin: 0,
    fontFace: H, fontSize: 22, bold: true, color: WHITE,
  });
  s.addText("Limits on what the state may do to you.", {
    x: M + 0.32, y: 3.02, w: cw - 0.64, h: 0.4, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: "C3D0E0",
  });
  s.addText([
    { text: "Speech, press, assembly", options: { bullet: true, breakLine: true } },
    { text: "Religious worship", options: { bullet: true, breakLine: true } },
    { text: "Privacy in personal life", options: { bullet: true, breakLine: true } },
    { text: "Fair treatment in court", options: { bullet: true } },
  ], {
    x: M + 0.32, y: 3.55, w: cw - 0.64, h: 1.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13, color: WHITE, lineSpacing: 18, paraSpaceAfter: 5,
  });
  // Right: rights
  s.addShape(pres.ShapeType.roundRect, {
    x: M + cw + 0.45, y: 1.85, w: cw, h: 3.6, rectRadius: 0.08,
    fill: { color: WHITE }, line: { color: GOLD, width: 2 },
  });
  s.addText("CIVIL RIGHTS", {
    x: M + cw + 0.77, y: 2.12, w: cw - 0.64, h: 0.34, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, bold: true, color: GOLD, charSpacing: 2,
  });
  s.addText("Equal treatment BY government", {
    x: M + cw + 0.77, y: 2.5, w: cw - 0.64, h: 0.45, isTextBox: true, margin: 0,
    fontFace: H, fontSize: 22, bold: true, color: INK,
  });
  s.addText("Promises the state won't single you out.", {
    x: M + cw + 0.77, y: 3.02, w: cw - 0.64, h: 0.4, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: MUTE,
  });
  s.addText([
    { text: "Protection from discrimination", options: { bullet: true, breakLine: true } },
    { text: "Equal access to the ballot", options: { bullet: true, breakLine: true } },
    { text: "Equal access to schools", options: { bullet: true, breakLine: true } },
    { text: "Equal service from the state", options: { bullet: true } },
  ], {
    x: M + cw + 0.77, y: 3.55, w: cw - 0.64, h: 1.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13, color: BODY, lineSpacing: 18, paraSpaceAfter: 5,
  });
  s.addText([
    { text: "The test that works every time:  ", options: { bold: true, color: INK } },
    { text: "\u201CThe government did something to me it had no power to do\u201D = liberties.   \u201CThe government treated me worse than others like me\u201D = rights.", options: { color: BODY } },
  ], {
    x: M, y: 5.72, w: W - M * 2, h: 0.75, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, italic: true, lineSpacing: 19,
  });
  notes(s, `
TIMING: 6 minutes. This is the highest-value slide in the deck.

Teach the test at the bottom, not the lists. Students memorize lists and then
misapply them; the two sentences transfer.

WORKED EXAMPLE — put it on the board:
A city bans all protests within 500 feet of city hall.
  → LIBERTIES claim. The city had no power to silence peaceful assembly.
Now change one fact: the city permits some groups to march and denies others
because of their message or their members' ethnicity.
  → RIGHTS claim. Same ordinance, unequal application.

COMMON MISCONCEPTION: students think liberties are "in the Bill of Rights" and
rights are "civil rights era." Not so — both appear in both places. The
distinction is about what government is being accused of, not where the text sits.

COLD CALL: "You're denied a business permit. What do you need to know before you
can tell me which kind of claim you have?" (Answer: whether others got one.)
  `);
}

/* ══════════════════ 5. WHY TEXAS ══════════════════ */
{
  const s = lightSlide("Why so many landmark cases start here", "Texas and the national record");
  s.addImage({ path: "images/tx3_supreme_court.jpg", x: 7.75, y: 1.8, w: 4.95, h: 3.3, rounding: false });
  s.addText("Photo: U.S. Supreme Court", {
    x: 7.75, y: 5.15, w: 4.95, h: 0.26, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 9.5, color: MUTE, italic: true,
  });
  const bul = [
    "Size and diversity — a huge, fast-growing state with large Black, Mexican American, and immigrant communities generated more disputes.",
    "A tradition of limited government and local control meant state laws regularly tested federal limits.",
    "Individual Texans willing to carry a case all the way up — a dentist, a mail carrier, a defendant, sixteen families.",
  ];
  s.addText(bul.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i !== bul.length - 1 } })), {
    x: M, y: 1.95, w: 6.7, h: 2.5, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 14, color: BODY, lineSpacing: 20, paraSpaceAfter: 10,
  });
  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 4.75, w: 6.7, h: 1.5, rectRadius: 0.07,
    fill: { color: INK },
  });
  s.addText("7", {
    x: M + 0.3, y: 4.95, w: 0.8, h: 1.0, isTextBox: true, margin: 0,
    fontFace: H, fontSize: 52, bold: true, color: GOLD, align: "center", valign: "middle",
  });
  s.addText("landmark U.S. Supreme Court cases in this chapter began in Texas — on speech, voting, schools, ethnicity, privacy, immigration, and admissions.", {
    x: M + 1.2, y: 4.95, w: 5.3, h: 1.1, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13, color: WHITE, lineSpacing: 17, valign: "middle",
  });
  notes(s, `
TIMING: 3 minutes.

The point is not Texas pride — it's that constitutional law is made by ordinary
people with specific grievances, not by philosophers.

Preview the seven so students hear the names early: Johnson (flag burning),
Smith v. Allwright (white primary), Sweatt (UT law school), Hernandez (juries),
Lawrence (privacy), Plyler (school access), Fisher (admissions).

If you want a hook: ask which of those they've heard of. Most will know flag
burning and none will know Hernandez. That asymmetry is worth naming out loud —
whose rights cases get remembered is itself a question worth asking.
  `);
}

/* ══════════════════ 6. TEXAS BILL OF RIGHTS ══════════════════ */
{
  const s = lightSlide("Texas put its Bill of Rights first", "Article I");
  s.addImage({ path: "images/tx2_texas_constitutions.jpg", x: M, y: 1.85, w: 4.5, h: 3.0 });
  s.addText("Texas has had seven constitutions. The 1876 document opens with rights — before it describes a single power.", {
    x: M, y: 4.95, w: 4.5, h: 0.7, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 11.5, color: MUTE, italic: true, lineSpacing: 15,
  });
  const facts = [
    ["Placement", "The U.S. Bill of Rights arrived in 1791 as ten amendments. Texas put rights in Article I — first, before any grant of power."],
    ["Reason", "The framers of 1876 had just lived through Reconstruction and Governor E. J. Davis. They stated the limits up front."],
    ["Force", "Section 29: everything in Article I is \u201Cexcepted out of the general powers of government,\u201D and any contrary law \u201Cshall be void.\u201D"],
  ];
  let y = 1.95;
  facts.forEach(([t, d]) => {
    s.addText(t.toUpperCase(), {
      x: 5.55, y, w: 7.1, h: 0.3, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 11, bold: true, color: GOLD, charSpacing: 1.5,
    });
    s.addText(d, {
      x: 5.55, y: y + 0.3, w: 7.1, h: 0.95, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 13.5, color: BODY, lineSpacing: 18,
    });
    y += 1.35;
  });
  notes(s, `
TIMING: 4 minutes.

The placement is the lesson. Ask: "Why would you put limits on government BEFORE
you describe the government?" Answer: because you don't trust it — and Texans in
1876 had a specific reason not to.

Connect back to Chapter 2. This is the same Davis reaction that produced the weak
governor, the part-time legislature, and elected judges. One historical grievance
shaped the whole document.

Section 29 is worth reading aloud. Most state constitutions don't say this so
bluntly. Rights here are not favors the legislature grants — they are boundaries
it cannot cross.
  `);
}

/* ══════════════════ 7. TEXAS ERA ══════════════════ */
{
  const s = lightSlide("A guarantee the nation never adopted", "Article I, Section 3a");
  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 1.9, w: W - M * 2, h: 1.5, rectRadius: 0.08,
    fill: { color: WHITE }, line: { color: GOLD, width: 2 },
  });
  s.addText("\u201CEquality under the law shall not be denied or abridged because of sex, race, color, creed, or national origin.\u201D", {
    x: M + 0.4, y: 2.1, w: W - M * 2 - 0.8, h: 0.75, isTextBox: true, margin: 0,
    fontFace: H, fontSize: 19, italic: true, color: INK, lineSpacing: 26,
  });
  s.addText("Texas Constitution, Article I, Section 3a — adopted by Texas voters in 1972", {
    x: M + 0.4, y: 2.92, w: W - M * 2 - 0.8, h: 0.3, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 11.5, color: GOLD, bold: true,
  });
  const cols = [
    ["Federal ERA", "Proposed by Congress in 1972. Never ratified by enough states. Never became part of the U.S. Constitution.", CRIM],
    ["Texas ERA", "Approved by Texas voters the same year. In force ever since.", TEAL],
    ["The difference", "Texas names five protected categories. The federal proposal addressed sex alone.", INK],
  ];
  const cw = (W - M * 2 - 0.7) / 3;
  cols.forEach(([t, d, c], i) => {
    const x = M + i * (cw + 0.35);
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 3.75, w: cw, h: 1.85, rectRadius: 0.07, fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 },
    });
    s.addText(t, {
      x: x + 0.24, y: 3.95, w: cw - 0.48, h: 0.34, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 14, bold: true, color: c,
    });
    s.addText(d, {
      x: x + 0.24, y: 4.34, w: cw - 0.48, h: 1.15, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, color: BODY, lineSpacing: 17,
    });
  });
  s.addText("This is the clearest case of Texas protecting more than the federal floor requires.", {
    x: M, y: 5.9, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, italic: true, color: INK,
  });
  notes(s, `
TIMING: 4 minutes.

This surprises students, and the surprise is pedagogically useful. Many arrive
believing Texas is uniformly less protective of rights than the federal
government. Here is a documented counterexample.

ASK: "If the federal ERA had passed, would this Texas provision matter?" Yes —
it covers more categories.

Set up the next slide: if Texas can protect MORE, can it protect LESS? That is
the floor-and-ceiling idea, and it is the structural key to the whole chapter.
  `);
}

/* ══════════════════ 8. FLOOR AND CEILING ══════════════════ */
{
  const s = lightSlide("Federal floor, state ceiling", "How the two constitutions fit");
  // ceiling
  s.addShape(pres.ShapeType.rect, { x: 2.2, y: 2.0, w: 8.9, h: 0.16, fill: { color: GOLD } });
  s.addText("STATE CEILING — Texas may protect MORE", {
    x: 2.2, y: 1.62, w: 8.9, h: 0.34, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13, bold: true, color: GOLD,
  });
  // space between
  s.addShape(pres.ShapeType.roundRect, {
    x: 2.2, y: 2.42, w: 8.9, h: 2.15, rectRadius: 0.07,
    fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 },
  });
  s.addText("Texas operates in here", {
    x: 2.45, y: 2.62, w: 8.4, h: 0.34, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13, bold: true, color: INK,
  });
  s.addText([
    { text: "Texas courts read Article I independently of federal law", options: { bullet: true, breakLine: true } },
    { text: "Texas bans imprisonment for debt; guarantees \u201Copen courts\u201D", options: { bullet: true, breakLine: true } },
    { text: "A Texan whose federal claim fails may still win under the Texas Constitution — lawyers here plead both", options: { bullet: true } },
  ], {
    x: 2.45, y: 3.02, w: 8.4, h: 1.4, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13, color: BODY, lineSpacing: 18, paraSpaceAfter: 6,
  });
  // floor
  s.addShape(pres.ShapeType.rect, { x: 2.2, y: 4.85, w: 8.9, h: 0.16, fill: { color: INK } });
  s.addText("FEDERAL FLOOR — no state may go BELOW", {
    x: 2.2, y: 5.08, w: 8.9, h: 0.34, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13, bold: true, color: INK,
  });
  s.addText("The U.S. Constitution, as interpreted by the Supreme Court, sets a minimum every American holds in every state.", {
    x: 2.2, y: 5.42, w: 8.9, h: 0.4, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, color: MUTE,
  });
  s.addText("Think of rights as a building.", {
    x: M, y: 6.2, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, italic: true, color: INK,
  });
  notes(s, `
TIMING: 4 minutes. Draw this on the board as you talk — it lands better built
live than shown finished.

THE ONE-SENTENCE VERSION: the U.S. Constitution is a floor, not a ceiling.

Two consequences students should be able to state back:
  1. When the Supreme Court NARROWS a federal right, Texans do not automatically
     lose it — Texas courts may still protect it under Article I.
  2. When the Supreme Court EXPANDS a federal right, Texas must comply even if
     state law says otherwise.

This is also a practical point: Texas attorneys routinely plead both
constitutions. If a student is headed to law school or paralegal work, this is
the slide that matters professionally.
  `);
}

/* ══════════════════ 9. INCORPORATION ══════════════════ */
{
  const s = lightSlide("How federal rights reached Texas", "The Fourteenth Amendment");
  s.addText("For the first eighty years, the Bill of Rights did not apply to the states at all. A state could censor a newspaper and the federal Constitution had nothing to say about it.", {
    x: M, y: 1.85, w: W - M * 2, h: 0.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 14, color: BODY, lineSpacing: 19,
  });
  const steps = [
    ["1833", "Barron v. Baltimore", "Bill of Rights binds only the federal government. Texans look to their state constitution."],
    ["1868", "Fourteenth Amendment", "No STATE shall deprive any person of liberty without due process, nor deny equal protection."],
    ["1925+", "Selective incorporation", "The Court applies the Bill of Rights to the states one provision at a time — speech 1925, religion 1940s, criminal rights 1960s, arms 2010."],
  ];
  const cw = (W - M * 2 - 0.7) / 3;
  steps.forEach(([yr, t, d], i) => {
    const x = M + i * (cw + 0.35);
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.7, w: cw, h: 2.4, rectRadius: 0.07,
      fill: { color: i === 2 ? INK : WHITE }, line: { color: i === 2 ? INK : "E0D7C6", width: i === 2 ? 1 : 1 },
    });
    s.addText(yr, {
      x: x + 0.26, y: 2.92, w: cw - 0.52, h: 0.4, isTextBox: true, margin: 0,
      fontFace: H, fontSize: 24, bold: true, color: GOLD,
    });
    s.addText(t, {
      x: x + 0.26, y: 3.36, w: cw - 0.52, h: 0.5, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 14, bold: true, color: i === 2 ? WHITE : INK,
    });
    s.addText(d, {
      x: x + 0.26, y: 3.9, w: cw - 0.52, h: 1.05, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12, color: i === 2 ? "C3D0E0" : BODY, lineSpacing: 16,
    });
    if (i < 2) {
      s.addShape(pres.ShapeType.rightArrow, {
        x: x + cw + 0.05, y: 3.72, w: 0.25, h: 0.28, fill: { color: GOLD },
      });
    }
  });
  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 5.4, w: W - M * 2, h: 1.0, rectRadius: 0.07, fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 },
  });
  s.addText([
    { text: "Due Process  ", options: { bold: true, color: TEAL } },
    { text: "carries liberties to the states.    ", options: { color: BODY } },
    { text: "Equal Protection  ", options: { bold: true, color: GOLD } },
    { text: "forbids unequal treatment. Almost every case in this chapter rests on one clause or the other.", options: { color: BODY } },
  ], {
    x: M + 0.32, y: 5.62, w: W - M * 2 - 0.64, h: 0.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, lineSpacing: 19,
  });
  notes(s, `
TIMING: 5 minutes.

THE FACT THAT SURPRISES THEM: for 80 years the Bill of Rights did not restrain
Texas at all. Say it plainly and let it sit.

"Selective" is the word to emphasize — not all at once, one right at a time,
across a century. Two provisions still are NOT incorporated: the Fifth
Amendment's grand jury requirement and the Seventh Amendment's civil jury right.
That is why Texas can structure those matters its own way.

TIE IT TOGETHER: every time a headline says "a federal judge struck down a Texas
law under the First Amendment," incorporation is the reason a federal amendment
reached a state law at all.

The bottom bar is the takeaway to repeat: due process = liberties engine,
equal protection = rights engine.
  `);
}

/* ══════════════════ 10. TEXAS v JOHNSON ══════════════════ */
{
  const s = lightSlide("Protection doesn't depend on approval", "Expression — Dallas, 1984");
  caseCard(s, M, 1.85, 6.35, 3.5, "Texas v. Johnson", "DECIDED 1989 · 5–4",
    "Burning the American flag in political protest is expressive conduct protected by the First Amendment.",
    "Government may not prohibit expression simply because society finds the idea offensive or disagreeable.");
  s.addImage({ path: "images/tx11_first_amendment.jpg", x: 7.35, y: 1.85, w: 5.35, h: 2.5 });
  s.addText([
    { text: "The facts. ", options: { bold: true, color: INK } },
    { text: "During the 1984 Republican National Convention in Dallas, Gregory Lee Johnson burned a flag in protest. No one was hurt. He was convicted under a Texas law against desecrating a venerated object: one year in jail, $2,000 fine.", options: { color: BODY } },
  ], {
    x: 7.35, y: 4.5, w: 5.35, h: 1.5, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, lineSpacing: 17,
  });
  s.addShape(pres.ShapeType.roundRect, {
    x: M, y: 5.55, w: 6.35, h: 0.95, rectRadius: 0.07, fill: { color: INK },
  });
  s.addText("Congress responded with a federal flag-protection law. The Court struck that down too, the next year.", {
    x: M + 0.28, y: 5.72, w: 6.35 - 0.56, h: 0.65, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, color: WHITE, lineSpacing: 17,
  });
  notes(s, `
TIMING: 5 minutes.

Brennan's line is worth putting on the board verbatim: "If there is a bedrock
principle underlying the First Amendment, it is that the government may not
prohibit the expression of an idea simply because society finds the idea itself
offensive or disagreeable."

The 5–4 split matters. This was not an easy or unanimous case, and the dissent
(Rehnquist) made a serious argument about the flag's unique status as a national
symbol. Present that as a real position, not a foil.

WHAT STUDENTS GET WRONG: they think this case says flag burning is a good idea,
or that the Court approved of Johnson. It says neither. It says the state lacked
power to punish him for the idea he expressed.

BRIDGE TO THE NEXT SLIDE: if this principle protects speech many find deeply offensive,
what are its limits? Not everything is protected.
  `);
}

/* ══════════════════ 11. LIMITS ON SPEECH ══════════════════ */
{
  const s = lightSlide("Broad, but not absolute", "The limits");
  const items = [
    ["\u26A0", "Incitement", "Speech directed to producing imminent lawless action"],
    ["\u203C", "True threats", "Serious expressions of intent to commit violence"],
    ["\u2696", "Defamation", "False statements of fact that damage reputation"],
    ["\u2716", "Obscenity", "As narrowly defined by the Court"],
    ["\u23F1", "Time, place, manner", "Content-neutral rules — a parade permit is fine"],
  ];
  const cw = (W - M * 2 - 0.6) / 3;
  items.forEach(([g, t, d], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = M + col * (cw + 0.3), y = 1.95 + row * 2.0;
    s.addShape(pres.ShapeType.roundRect, {
      x, y, w: cw, h: 1.75, rectRadius: 0.07, fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 },
    });
    circle(s, x + 0.26, y + 0.24, g, i === 4 ? TEAL : CRIM);
    s.addText(t, {
      x: x + 0.9, y: y + 0.3, w: cw - 1.15, h: 0.38, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 14.5, bold: true, color: INK,
    });
    s.addText(d, {
      x: x + 0.26, y: y + 0.92, w: cw - 0.52, h: 0.7, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12, color: BODY, lineSpacing: 16,
    });
  });
  s.addShape(pres.ShapeType.roundRect, {
    x: M + 2 * (cw + 0.3), y: 3.95, w: cw, h: 1.75, rectRadius: 0.07, fill: { color: INK },
  });
  s.addText("What government generally may NOT do", {
    x: M + 2 * (cw + 0.3) + 0.26, y: 4.18, w: cw - 0.52, h: 0.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, bold: true, color: GOLD, lineSpacing: 18,
  });
  s.addText("Silence speech because of its viewpoint.", {
    x: M + 2 * (cw + 0.3) + 0.26, y: 4.8, w: cw - 0.52, h: 0.7, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13, color: WHITE, lineSpacing: 17,
  });
  notes(s, `
TIMING: 3 minutes. Move briskly — this is a reference slide, not a discussion one.

The distinction that does all the work: regulating the TIME, PLACE, or MANNER of
speech is generally fine; regulating the VIEWPOINT is generally not. A city can
require a parade permit. It cannot grant permits only to parades it agrees with.

COMMON MISCONCEPTION: "hate speech is illegal." In the United States it generally
is not, unless it crosses into incitement, true threats, or harassment. Students
often find this genuinely surprising, and some find it troubling — that reaction
is worth acknowledging rather than brushing past. Many other democracies draw
this line differently.
  `);
}

/* ══════════════════ 12. RELIGION CLAUSES ══════════════════ */
{
  const s = lightSlide("Two clauses that pull against each other", "Religion");
  const cw = (W - M * 2 - 0.45) / 2;
  s.addShape(pres.ShapeType.roundRect, { x: M, y: 1.9, w: cw, h: 2.2, rectRadius: 0.07, fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 } });
  circle(s, M + 0.28, 2.12, "\u26EA", INK);
  s.addText("Establishment Clause", { x: M + 0.92, y: 2.18, w: cw - 1.2, h: 0.38, isTextBox: true, margin: 0, fontFace: B, fontSize: 15, bold: true, color: INK });
  s.addText("Government may not establish or endorse religion. No official church, no state-sponsored worship.", { x: M + 0.28, y: 2.82, w: cw - 0.56, h: 1.1, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, color: BODY, lineSpacing: 18 });
  s.addShape(pres.ShapeType.roundRect, { x: M + cw + 0.45, y: 1.9, w: cw, h: 2.2, rectRadius: 0.07, fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 } });
  circle(s, M + cw + 0.73, 2.12, "\u271D", GOLD);
  s.addText("Free Exercise Clause", { x: M + cw + 1.37, y: 2.18, w: cw - 1.2, h: 0.38, isTextBox: true, margin: 0, fontFace: B, fontSize: 15, bold: true, color: INK });
  s.addText("Government may not interfere with individuals practicing their faith. Texas Article I, Section 6 protects worship and bars religious tests for office.", { x: M + cw + 0.73, y: 2.82, w: cw - 0.56, h: 1.1, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, color: BODY, lineSpacing: 18 });
  s.addShape(pres.ShapeType.roundRect, { x: M, y: 4.35, w: W - M * 2, h: 1.95, rectRadius: 0.07, fill: { color: INK } });
  s.addText("Where they collide", { x: M + 0.32, y: 4.55, w: 6, h: 0.36, isTextBox: true, margin: 0, fontFace: B, fontSize: 14, bold: true, color: GOLD });
  s.addText([
    { text: "A public school lets a student group pray on campus. Accommodating free exercise, or establishing religion?", options: { bullet: true, breakLine: true } },
    { text: "The state exempts religious objectors from a general law. Protecting free exercise, or favoring religion?", options: { bullet: true } },
  ], { x: M + 0.32, y: 4.95, w: W - M * 2 - 0.64, h: 1.2, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, color: WHITE, lineSpacing: 18, paraSpaceAfter: 6 });
  notes(s, `
TIMING: 4 minutes.

Both clauses are in the same sentence of the First Amendment, and they can point
in opposite directions. That tension is the entire subject — not a flaw in the
Constitution but a genuine difficulty.

DOCTRINAL SHIFT WORTH NAMING: for decades courts used the three-part Lemon test
for Establishment Clause questions. In recent years the Supreme Court has moved
toward asking whether a practice fits the nation's history and traditions. That
shift is not academic — it is why the next slide's case came out the way it did
at the appellate level.

Keep your own view out of it here. Students in a Texas classroom hold sincere and
opposing positions on exactly this question, and several are watching to see
whether the room is safe for theirs.
  `);
}

/* ══════════════════ 13. SB 10 — CONTESTED, LIVE ══════════════════ */
{
  const s = lightSlide("A dispute still unfolding", "Ten Commandments in Texas classrooms");
  s.addText("Senate Bill 10 (2025) requires every Texas public-school classroom to display a specified version of the Ten Commandments. House 82–46, Senate 20–11; signed by the governor.", {
    x: M, y: 1.82, w: W - M * 2, h: 0.55, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: BODY, lineSpacing: 18,
  });
  twoSides(s, 2.5,
    "The case for the law", [
      "The Commandments are a documented foundation of Western law and American legal tradition",
      "A passive wall display coerces no one to believe or participate",
      "Recent Supreme Court doctrine favors practices rooted in history and tradition",
    ],
    "The case against", [
      "Mandating one faith's scripture in every classroom pressures children of other faiths and of none",
      "It intrudes on parents' right to direct their children's religious upbringing",
      "Stone v. Graham (1980) struck down a nearly identical Kentucky law",
    ], 2.35);
  // timeline
  const tl = [["Aug 2025", "District judge blocks the law for the districts sued"],
              ["Apr 2026", "Full Fifth Circuit reverses, 9–8, upholding the law"],
              ["Now", "Families have asked the U.S. Supreme Court to take the case"]];
  const tw = (W - M * 2 - 0.6) / 3;
  tl.forEach(([d, t], i) => {
    const x = M + i * (tw + 0.3);
    s.addShape(pres.ShapeType.roundRect, { x, y: 5.15, w: tw, h: 1.15, rectRadius: 0.06, fill: { color: i === 2 ? GOLD : WHITE }, line: { color: "E0D7C6", width: 1 } });
    s.addText(d, { x: x + 0.22, y: 5.28, w: tw - 0.44, h: 0.28, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, bold: true, color: i === 2 ? WHITE : GOLD });
    s.addText(t, { x: x + 0.22, y: 5.56, w: tw - 0.44, h: 0.65, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: i === 2 ? WHITE : BODY, lineSpacing: 15 });
  });
  notes(s, `
TIMING: 7 minutes including discussion. This is the deck's main discussion slide.

⚠ CHECK CURRENCY BEFORE TEACHING. This litigation was live as of the 2026–27
academic year. Confirm the current posture before class — a Supreme Court grant,
denial, or ruling would change the last box. The module and this deck are
reviewed each legislative session.

HOW TO RUN THE DISCUSSION (this works better than open debate):
  1. Ask students to argue the side they DISAGREE with, in pairs, for 3 minutes.
  2. Then ask: "What was the strongest point you had to make?"
This lowers the temperature and produces better reasoning than asking people to
defend what they already believe.

DO NOT share your own view. In a Texas classroom you will have devout students
and non-religious students in the same room, and both are entitled to a
class that takes their position seriously.

THE ANALYTICAL POINT, which is the actual learning objective: the Establishment
Clause is being redefined in real time. The 9–8 appellate split tells you this is
genuinely unsettled law, not a case with an obvious answer.
  `);
}

/* ══════════════ 13b. CRITICAL THINKING — EXPRESSION ══════════════ */
{
  const s = discussionSlide("Pause and think", "Expression, religion, and the limits of tolerance", [
    "Texas v. Johnson protected speech many Americans found deeply offensive. Is there any expression you would give government the power to punish \u2014 and who would you trust to draw that line?",
    "The Establishment and Free Exercise Clauses can point in opposite directions. When a school accommodates one student\u2019s faith, when does accommodation become endorsement?",
    "Both sides of the Ten Commandments dispute claim to be protecting children. What evidence would actually settle which is right?",
  ]);
  notes(s, `
CRITICAL-THINKING PAUSE — 5 to 8 minutes. Optional; cut it if you are short on
time, since nothing later depends on it.

HOW TO RUN IT: pick ONE question rather than all three. Give students 90 seconds
to write an answer before anyone speaks — written-first produces far better
discussion than cold open debate, and it gives quieter students a foothold.

Q1 is the strongest for a general class. Most students will initially say "no
limits," then immediately propose one when pressed on threats or harassment.
That self-contradiction is the lesson: everyone draws a line; the argument is
about where and who decides.

Q2 rewards students who read the module. There is no clean answer, and saying so
is honest.

Q3 is the one to use if the room is tense — it redirects from belief to evidence,
which lowers the temperature without dodging the question.

Do not resolve these. The point is that students can hold the tension.
  `);
}

/* ══════════════════ 14. SECTION BREAK — RIGHTS ══════════════════ */
{
  const s = darkSlide();
  n += 1;
  s.addText("PART TWO", { x: M, y: 2.5, w: 8, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: GOLD, charSpacing: 3 });
  s.addText("The long struggle\nfor civil rights", { x: M, y: 2.95, w: 9.5, h: 1.6, isTextBox: true, margin: 0, fontFace: H, fontSize: 38, bold: true, color: WHITE, lineSpacing: 42 });
  s.addText("Freedom on paper in 1865. Equal citizenship took a century more — and three Texans who refused to wait.", { x: M, y: 4.75, w: 9.5, h: 0.8, isTextBox: true, margin: 0, fontFace: B, fontSize: 15, color: "C3D0E0", lineSpacing: 22 });
  notes(s, `
TRANSITION SLIDE — 1 minute, or a natural break point if you split this across
two class meetings.

Reset the frame here: everything before this slide was about LIBERTIES —
government power over individuals. Everything after is about RIGHTS — equal
treatment. Say that explicitly; students lose the thread otherwise.

If you are teaching this in one 50-minute session, this is where to stop and pick
up next time.
  `);
}

/* ══════════════════ 15. JUNETEENTH → JIM CROW ══════════════════ */
{
  const s = lightSlide("Freedom on paper, then a century of resistance", "From emancipation to Jim Crow");
  s.addImage({ path: "images/tx1_juneteenth.jpg", x: M, y: 1.85, w: 5.0, h: 3.2 });
  s.addText("Juneteenth — June 19, 1865, Galveston", { x: M, y: 5.15, w: 5.0, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11, color: MUTE, italic: true });
  const rows = [
    ["1865", "General Granger reaches Galveston and announces that all enslaved Texans are free. Now a state and federal holiday."],
    ["1876+", "After Reconstruction ends, Texas builds Jim Crow — segregation by law in schools, transit, and public accommodations."],
    ["1902", "A poll tax prices poor Black, Mexican American, and white Texans out of voting."],
    ["Ongoing", "The Democratic primary — the only election that mattered in a one-party state — bars Black Texans entirely."],
  ];
  let y = 1.9;
  rows.forEach(([d, t]) => {
    s.addText(d, { x: 5.95, y, w: 1.3, h: 0.3, isTextBox: true, margin: 0, fontFace: H, fontSize: 16, bold: true, color: GOLD });
    s.addText(t, { x: 7.35, y: y - 0.02, w: W - M - 7.35, h: 0.85, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: BODY, lineSpacing: 17 });
    y += 0.92;
  });
  s.addShape(pres.ShapeType.roundRect, { x: 5.95, y: 5.55, w: W - M - 5.95, h: 0.8, rectRadius: 0.06, fill: { color: INK } });
  s.addText("The white primary made Black votes meaningless. That is what the next case attacked.", { x: 6.2, y: 5.72, w: W - M - 6.45, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: WHITE, lineSpacing: 17 });
  notes(s, `
TIMING: 4 minutes.

The sequence is the point: legal freedom in 1865 did not produce equal
citizenship. Ask why not — students usually name violence and social custom, and
miss the LEGAL machinery. Push them toward the poll tax and the white primary.

WHY THE WHITE PRIMARY WAS SO EFFECTIVE: in a one-party state the Democratic
primary decided every office. The November election was a formality. Excluding
Black voters from the primary excluded them from the only contest that mattered
— while technically leaving them "the vote."

Juneteenth is worth a moment. Many students celebrate it without knowing it
originates in Galveston, or that it marks enforcement rather than the
Emancipation Proclamation itself.
  `);
}

/* ══════════════════ 16. THREE CASES ══════════════════ */
{
  const s = lightSlide("Three Texans who changed the country", "Landmark cases");
  const cards = [
    ["Smith v. Allwright", "1944 · 8–1", "A party running the decisive election performs a public function and may not discriminate by race.", "Dr. Lonnie Smith, a Houston dentist, was turned away from the 1940 primary. Thurgood Marshall argued it. Struck down white primaries across the South."],
    ["Sweatt v. Painter", "1950 · unanimous", "A hastily built separate law school could not be equal to UT Law in faculty, reputation, or standing.", "Heman Sweatt, a Houston mail carrier, applied to UT Law. Direct stepping stone to Brown v. Board four years later."],
    ["Hernandez v. Texas", "1954 · unanimous", "Equal protection covers any group treated as \u201Ca class apart\u201D — not only Black and white citizens.", "Jackson County had seated no juror of Mexican descent in 25 years. First case argued by Mexican American attorneys at the Court. Decided two weeks before Brown."],
  ];
  const cw = (W - M * 2 - 0.6) / 3;
  cards.forEach(([nm, yr, held, why], i) => {
    caseCard(s, M + i * (cw + 0.3), 1.95, cw, 3.55, nm, yr, held, why);
  });
  notes(s, `
TIMING: 10 minutes — the heart of the chapter. Roughly 3 minutes per case.

Teach these as PEOPLE, not citations. A dentist. A mail carrier. A defendant.
None held office. None had power. Each changed the law for millions.

SMITH: Texas had defended the white primary for two decades, and in 1935 the
Court had ALLOWED it, reasoning a party was a private club. Smith reversed that.
Note the young Thurgood Marshall — future Justice — arguing it.

SWEATT: the state's response to a qualified Black applicant was to invent a
separate law school in rented rooms. Vinson's reasoning — that a school cannot be
equal in faculty, reputation, and alumni standing — is what made Brown possible.

HERNANDEZ: the one students have never heard of, and the one with the widest
reach today. Warren's "class apart" logic protects every ethnic group in America.
Argued by Gus Garcia and Carlos Cadena with LULAC and the American GI Forum.
Ask why this case is so much less famous than Brown — it is a good question with
no comfortable answer.
  `);
}

/* ══════════════ 16b. CRITICAL THINKING — THE STRUGGLE ══════════════ */
{
  const s = discussionSlide("Pause and think", "How rights actually get won", [
    "A dentist, a mail carrier, and a criminal defendant changed federal law. What does that suggest about how constitutional change actually happens \u2014 and what it costs the people who start it?",
    "Hernandez v. Texas protects every ethnic group in America, yet almost no one has heard of it. Why do some rights cases become famous and others disappear?",
    "Texas ended the white primary in 1944 and the poll tax in the 1960s. Which barriers to equal citizenship, if any, do you think a future course will describe as obvious in hindsight?",
  ]);
  notes(s, `
CRITICAL-THINKING PAUSE — 5 to 8 minutes.

Q1 connects the whole chapter. Push past "ordinary people can make a difference"
to the harder part: Smith, Sweatt, and Hernandez took real personal risk, waited
years, and needed organizations (NAACP, LULAC, the American GI Forum) behind
them. Individual courage was necessary but not sufficient.

Q2 is the sharpest question on this slide and the one students remember. Possible
answers: which groups had access to national media, which cases produced a single
memorable phrase, whose history gets taught. There is no comfortable answer, and
you should not supply one.

Q3 asks for prediction, which students enjoy and which surfaces their actual
views without requiring them to defend a partisan label. Accept a wide range of
answers; the analytical move is asking them WHY they expect hindsight to shift.
  `);
}

/* ══════════════════ 17. LEVELS OF SCRUTINY ══════════════════ */
{
  const s = lightSlide("The framework behind every equal-protection case", "Levels of scrutiny");
  const tiers = [
    ["STRICT SCRUTINY", "Race, national origin, fundamental rights", "Government needs a COMPELLING interest and a NARROWLY TAILORED law", "Almost nothing survives", CRIM],
    ["INTERMEDIATE", "Sex", "An IMPORTANT interest, SUBSTANTIALLY related", "Sometimes survives", GOLD],
    ["RATIONAL BASIS", "Everything else — age, income, occupation", "Any LEGITIMATE purpose, rationally related", "Almost always survives", TEAL],
  ];
  let y = 1.9;
  tiers.forEach(([t, applies, test, outcome, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: W - M * 2, h: 1.4, rectRadius: 0.07, fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 2.75, h: 1.4, rectRadius: 0.07, fill: { color: col } });
    s.addText(t, { x: M + 0.2, y: y + 0.28, w: 2.35, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: WHITE, lineSpacing: 17 });
    s.addText(applies, { x: M + 0.2, y: y + 0.82, w: 2.35, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 10.5, color: WHITE });
    s.addText(test, { x: M + 3.0, y: y + 0.3, w: 6.3, h: 0.8, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, color: BODY, lineSpacing: 18 });
    s.addText(outcome, { x: 9.6, y: y + 0.45, w: W - M - 9.6, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, italic: true, color: col });
    y += 1.55;
  });
  s.addText("Where a classification lands on this scale often decides the case before the facts are argued.", {
    x: M, y: 6.55, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, italic: true, color: INK,
  });
  notes(s, `
TIMING: 6 minutes. If students remember ONE framework from this course, make it
this one. It transfers to every rights dispute they will read about for the rest
of their lives.

THE KEY INSIGHT — say it directly: the level of scrutiny usually determines the
outcome. Strict scrutiny is nearly fatal to a law. Rational basis is nearly
always survivable. So the real fight in most modern cases is not "is this
discrimination?" but "which tier applies?"

TEXAS WRINKLE: the Texas ERA names sex, race, color, creed, and national origin
explicitly, so a state claim can rest on text rather than judicial interpretation.

QUICK PRACTICE — put one on the board and cold call:
  "A Texas law gives a property tax break to homeowners over 65." → rational
  basis (age), and it survives.
  "A city hires only men as firefighters." → intermediate scrutiny, and it fails.
  "A university considers race in admissions." → strict scrutiny. (Bridge to
  Fisher and the 2023 decision.)
  `);
}

/* ══════════════════ 18. PLYLER ══════════════════ */
{
  const s = lightSlide("Every person within the state's jurisdiction", "Equal protection and schools");
  caseCard(s, M, 1.85, 6.35, 3.3, "Plyler v. Doe", "DECIDED 1982 · 5–4",
    "Texas may not deny undocumented children a free public education.",
    "The Equal Protection Clause protects every PERSON within a state's jurisdiction, not only citizens.");
  s.addImage({ path: "images/tx12_immigration.jpg", x: 7.35, y: 1.85, w: 5.35, h: 2.4 });
  s.addText("The children had done nothing wrong; denying them school would create a permanent underclass; Texas showed no substantial interest served by the law.", {
    x: 7.35, y: 4.4, w: 5.35, h: 0.9, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: BODY, lineSpacing: 17,
  });
  s.addShape(pres.ShapeType.roundRect, { x: M, y: 5.4, w: W - M * 2, h: 1.05, rectRadius: 0.07, fill: { color: INK } });
  s.addText([
    { text: "Still the law today. ", options: { bold: true, color: GOLD } },
    { text: "Every Texas public school enrolls children without asking about immigration status. The broader question of state versus federal authority over immigration remains actively contested in the courts.", options: { color: WHITE } },
  ], { x: M + 0.32, y: 5.6, w: W - M * 2 - 0.64, h: 0.7, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, lineSpacing: 17 });
  notes(s, `
TIMING: 4 minutes.

THE TEXTUAL HOOK: the Fourteenth Amendment says "any PERSON," not "any citizen."
Have a student read the clause aloud and find that word. It does a lot of work.

Another 5–4 case. The dissent argued this was a policy judgment for legislatures
rather than courts — worth presenting fairly.

CURRENCY NOTE: state authority over immigration is actively litigated, including
Texas's SB 4 (2023). Check the posture before teaching if you plan to go beyond
Plyler itself.

This is a slide where students may have personal stakes. Teach the holding and
the reasoning; you do not need to invite disclosure, and you should not.
  `);
}

/* ══════════════════ 19. CURRENT DEBATES ══════════════════ */
{
  const s = lightSlide("Where the argument is now", "Live equal-protection questions");
  const q = [
    ["\u2611", "Voting", "SB 1 (2021) ended drive-through and 24-hour voting, added mail-ballot ID, expanded poll watchers.", "Integrity and public confidence vs. access for elderly, disabled, and low-income voters"],
    ["\u2696", "Admissions", "Fisher upheld UT's program in 2016; the Court ended race-conscious admissions nationwide in 2023. SB 17 closed DEI offices.", "A colorblind Constitution vs. remedying documented past discrimination"],
    ["\u2691", "Immigration", "SB 4 (2023) made unlawful entry a state crime; challenged as conflicting with federal authority.", "A border state's self-protection vs. federal supremacy and profiling risk"],
    ["\u26A5", "Sex and gender", "2023 laws on transition care for minors and school sports; a 2025 law defining sex for state records.", "Protecting minors, women's sports, parental rights vs. discrimination against transgender Texans"],
  ];
  let y = 1.8;
  q.forEach(([g, t, facts, tension], i) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: W - M * 2, h: 1.08, rectRadius: 0.06, fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 } });
    circle(s, M + 0.22, y + 0.28, g, [TEAL, GOLD, INK, CRIM][i]);
    s.addText(t, { x: M + 0.88, y: y + 0.32, w: 1.85, h: 0.36, isTextBox: true, margin: 0, fontFace: B, fontSize: 14, bold: true, color: INK });
    s.addText(facts, { x: M + 2.8, y: y + 0.14, w: 5.15, h: 0.9, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: BODY, lineSpacing: 15 });
    s.addText(tension, { x: M + 8.15, y: y + 0.14, w: W - M - 8.15 - M - 0.05, h: 0.9, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, italic: true, color: MUTE, lineSpacing: 15 });
    y += 1.18;
  });
  s.addText("Each row states the dispute, not a verdict. Ask which level of scrutiny applies — that is the analytical question.", {
    x: M, y: 6.55, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, italic: true, color: INK,
  });
  notes(s, `
TIMING: 8 minutes with discussion.

⚠ CURRENCY: every row here moves. Verify status before teaching; these were
accurate as of the 2026–27 year.

HOW TO TEACH THIS WITHOUT IT BECOMING A FIGHT: do not ask "what do you think
about transgender athletes." Ask the analytical question instead: "Which level of
scrutiny should apply to this classification, and why?" That keeps the
conversation inside the framework you just taught and produces better argument.

The third column is deliberately written as a TENSION, not a position. Both halves
of each phrase are held sincerely by large numbers of Texans.

If a student asks your opinion, a fair answer: "My job is to make sure you can
argue either side well enough that the other side would recognize itself. Then
you decide."

ASSESSMENT TIE-IN: Chapter 16's reflection prompt asks students to state the
strongest case on each side before giving their own view. Several TEST-BANK
Part A items assess the scrutiny framework rather than any position.
  `);
}

/* ══════════════ 19b. CRITICAL THINKING — APPLYING THE FRAMEWORK ══════════════ */
{
  const s = discussionSlide("Pause and think", "Apply the framework, not your priors", [
    "Pick any dispute from the previous slide. Which level of scrutiny should apply to that classification, and what is the strongest argument for the tier you did NOT choose?",
    "Texas can protect more than the federal floor requires. Should rights vary from state to state at all, or should they be uniform nationwide?",
    "When the Supreme Court narrows a federal right, Texas courts may still protect it under Article I. Is that a healthy safety valve, or does it let a state substitute its judgment for the nation\u2019s?",
  ]);
  notes(s, `
CRITICAL-THINKING PAUSE — 6 to 10 minutes. This is the most assessment-aligned
of the three; Q1 mirrors the format of several TEST-BANK Part A items and the
Chapter 16 reflection prompt.

Q1 IS THE ONE TO USE IF YOU ONLY USE ONE. Requiring the strongest argument for
the tier they rejected is what separates analysis from opinion, and it is
exactly what the module's reflection asks for.

Q2 and Q3 are federalism questions wearing a rights costume. Students who took
Chapter 3 seriously will notice; point it out if no one does.

WATCH FOR: students answering Q2 based on whether they like current Texas policy
rather than on the structural question. Redirect by asking whether their answer
would change if the policies were reversed. That single follow-up does more
analytical work than anything else on this slide.
  `);
}

/* ══════════════════ 20. RESPONSIBILITIES ══════════════════ */
{
  const s = lightSlide("Rights are not self-enforcing", "The citizen's side of the bargain");
  s.addImage({ path: "images/tx8_i_voted.jpg", x: 8.55, y: 1.9, w: 4.15, h: 2.6 });
  const items = [
    ["Vote", "In every election, including the local and primary contests that decide most of what government does."],
    ["Serve", "Jury duty is the one place ordinary citizens directly exercise state power. Hernandez was about exactly this."],
    ["Defend rights you dislike", "A government that can silence a flag burner can silence you. Free speech for the cause you oppose is what protects the cause you love."],
    ["Stay informed", "From sources that challenge as well as confirm what you already believe."],
  ];
  let y = 1.9;
  items.forEach(([t, d], i) => {
    s.addShape(pres.ShapeType.ellipse, { x: M, y, w: 0.34, h: 0.34, fill: { color: GOLD } });
    s.addText(String(i + 1), { x: M, y, w: 0.34, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, bold: true, color: WHITE, align: "center", valign: "middle" });
    s.addText(t, { x: M + 0.55, y: y - 0.04, w: 7.5, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 14.5, bold: true, color: INK });
    s.addText(d, { x: M + 0.55, y: y + 0.32, w: 7.5, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: BODY, lineSpacing: 17 });
    y += 1.13;
  });
  s.addShape(pres.ShapeType.roundRect, { x: M, y: 6.0, w: W - M * 2, h: 0.85, rectRadius: 0.07, fill: { color: INK } });
  s.addText("Every landmark case in this chapter began with one Texan who knew their rights and was willing to act.", {
    x: M + 0.32, y: 6.18, w: W - M * 2 - 0.64, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 14, italic: true, color: WHITE,
  });
  notes(s, `
TIMING: 4 minutes. This is the chapter's closing argument and it satisfies ACGM
Outcome 7 (rights AND responsibilities) — do not skip it for time.

ITEM 3 IS THE HARD ONE and the most important. Ask directly: "Is there a liberty
you would deny to people you strongly oppose?" Let the discomfort sit. Then:
"What would that cost you if the majority changed its mind about your group?"

Connect back to Johnson. The principle that protected a flag burner in Dallas is
the same principle that protects a protest you support.

CLOSING LINE that works: "The next landmark case hasn't been filed yet. It will
start the same way all of these did — with one person who knew their rights."
  `);
}

/* ══════════════════ 21. ASSESSMENT / WHAT'S NEXT ══════════════════ */
{
  const s = lightSlide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 16 in the Trailblazer Trek — 8 sections, 1,495 points. Students submit the Completion Report.", TEAL],
    ["\u270E", "Written reflection", "Each section requires 50+ words in the student's own words. Section 7 asks for the strongest case on BOTH sides of a current debate.", GOLD],
    ["\u2611", "Assessment", "TEST-BANK.md Part A has 5 unseen items for this chapter, tagged to ACGM outcomes. Parts B and C are practice only — students have seen those.", CRIM],
  ];
  const cw = (W - M * 2 - 0.7) / 3;
  cols.forEach(([g, t, d, c], i) => {
    const x = M + i * (cw + 0.35);
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.0, w: cw, h: 3.0, rectRadius: 0.07, fill: { color: WHITE }, line: { color: "E0D7C6", width: 1 } });
    circle(s, x + 0.28, 2.25, g, c);
    s.addText(t, { x: x + 0.28, y: 2.95, w: cw - 0.56, h: 0.6, isTextBox: true, margin: 0, fontFace: B, fontSize: 15, bold: true, color: INK, lineSpacing: 19 });
    s.addText(d, { x: x + 0.28, y: 3.6, w: cw - 0.56, h: 1.25, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: BODY, lineSpacing: 16 });
  });
  s.addShape(pres.ShapeType.roundRect, { x: M, y: 5.3, w: W - M * 2, h: 1.1, rectRadius: 0.07, fill: { color: PARCH }, line: { color: GOLD, width: 1.5 } });
  s.addText([
    { text: "ACGM outcomes assessed by this chapter:  ", options: { bold: true, color: INK } },
    { text: "Outcome 7 (rights and responsibilities of citizens) — primary.   Outcomes 1 and 3 — supporting.   See ALIGNMENT.md.", options: { color: BODY } },
  ], { x: M + 0.32, y: 5.55, w: W - M * 2 - 0.64, h: 0.7, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, lineSpacing: 18 });
  notes(s, `
INSTRUCTOR SLIDE — keep it or delete it depending on whether you want students to
see the assessment plan. Many instructors do show it; transparency about what is
graded reduces anxiety and email.

If you assign the module as homework BEFORE lecture, this deck works as
consolidation and you can cut slides 4 and 9 (they will have the basics).
If you lecture FIRST, keep everything — the module then serves as review.

The Completion Report carries a tamper-evident integrity hash, so it is usable as
a graded artifact. Reflections are included in full in the report.
  `);
}

/* ══════════════════ 22. SOURCES ══════════════════ */
{
  const s = lightSlide("Sources and further reading", "References");
  const refs = [
    ["Primary law", "Texas Constitution, Article I (Bill of Rights) — statutes.capitol.texas.gov   ·   U.S. Constitution, First and Fourteenth Amendments — archives.gov"],
    ["The cases", "Opinions and oral argument audio for Johnson, Smith, Sweatt, Hernandez, Lawrence, Plyler, and Fisher — oyez.org"],
    ["Texas history", "Handbook of Texas Online (Texas State Historical Association) — entries on Juneteenth, the white primary, LULAC, the American GI Forum, Heman Sweatt, and Barbara Jordan"],
    ["Openly licensed text", "OpenStax, American Government 3e (CC BY 4.0) — chapters on civil liberties and civil rights"],
    ["Images", "Wikimedia Commons, public domain, as credited in the module"],
  ];
  let y = 1.9;
  refs.forEach(([t, d]) => {
    s.addText(t.toUpperCase(), { x: M, y, w: 2.5, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11, bold: true, color: GOLD, charSpacing: 1.2 });
    s.addText(d, { x: M + 2.6, y: y - 0.03, w: W - M - 2.6 - M, h: 0.8, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: BODY, lineSpacing: 17 });
    y += 0.92;
  });
  s.addText("This deck is licensed CC BY 4.0. Adopt it, adapt it, share it — attribution appreciated.", {
    x: M, y: 6.45, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, italic: true, color: MUTE,
  });
  notes(s, `
Leave this slide up during questions so students can photograph it.

Oyez is the single best resource to point students toward — free, and the oral
argument audio makes these cases feel like arguments between real people rather
than settled text. Smith v. Allwright with a young Thurgood Marshall is
especially worth assigning.

The Handbook of Texas is free but NOT openly licensed. Link to it; do not copy
entries into your own materials.
  `);
}

/* ══════════════════ 23. CLOSING ══════════════════ */
{
  const s = darkSlide();
  n += 1;
  s.addText("The question to leave with", { x: M, y: 2.3, w: 9, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: GOLD, charSpacing: 2 });
  s.addText("\u201CIs there a liberty you would\ndeny to people you oppose?\u201D", { x: M, y: 2.85, w: 11, h: 1.7, isTextBox: true, margin: 0, fontFace: H, fontSize: 34, bold: true, color: WHITE, lineSpacing: 42 });
  s.addShape(pres.ShapeType.rect, { x: M, y: 4.85, w: 1.1, h: 0.035, fill: { color: GOLD } });
  s.addText("And what would that cost you if the majority changed its mind about your group?", { x: M, y: 5.15, w: 11, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 15, color: "C3D0E0" });
  notes(s, `
CLOSING — 2 minutes, or use as the exit-ticket prompt.

Let the question sit without answering it. Silence is fine here.

If you want a written exit ticket: "Answer the question on the screen in three
sentences." It maps directly onto the Chapter 16 reflection prompt, so students
arrive at the module already having thought about it.

If you have time, end on the Section 8 line from the module: every landmark case
in this chapter started with one Texan who knew their rights and acted. The next
one hasn't been filed yet.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 16 - Civil Liberties and Civil Rights (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
