/**
 * Chapter 13 — The Criminal Justice System in Texas
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 13", "The Criminal Justice System");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 13", "The Criminal\nJustice System",
    "The most serious power a state holds over a person. Texas uses it more than any other.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 13: THE CRIMINAL JUSTICE SYSTEM IN TEXAS
About 75 minutes with all three discussion pauses.

OPENING (2 min). Say plainly what this chapter is about: the power to take
someone's liberty, and in Texas, their life. Every other power in this course is
smaller than this one.

A NOTE ON THE ROOM. In any Texas classroom some students have been arrested, some
have family in prison, some work in law enforcement or corrections, and some have
been victims of crime. Teach the system accurately, do not solicit personal
stories, and do not treat any group in that list as hypothetical.

Set that tone in the first two minutes and the rest of the chapter goes better.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, cut the victims' rights slide and one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely.", C.GOLD],
    ["\u2696", "Handle with care", "Students in your room have lived parts of this. Teach the system, not personal stories, and never call on anyone to share.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 13's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

TWO CAUTIONS.

First, personal exposure. Do not ask students whether they have been arrested,
incarcerated, or victimized. If a student volunteers something, receive it
briefly and return to the material. The Completion Report reflections are a
better channel for anything personal.

Second, the death penalty section draws strong reactions in both directions. Both
cases are presented in parallel and the notes tell you not to referee. Students on
each side should leave feeling their position was stated fairly.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Classify", "criminal offenses in Texas by category and penalty range."],
    ["Explain", "the rights of the accused under the Fifth, Sixth, and Eighth Amendments."],
    ["Describe", "how indigent defense works in Texas and where it is criticized."],
    ["Analyze", "the bail debate, including the 2025 constitutional amendment."],
    ["Evaluate", "the death penalty and the record of exonerations in Texas."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #2 and #3. Objective 2 is the constitutional core and appears throughout
the test bank. Objective 3 is where Texas practice most diverges from the
constitutional promise, which makes it the analytically richest part of the
chapter.
  `);
}

/* 4 */
{
  const s = k.slide("How Texas sorts offenses", "Classifying crimes");
  k.figure(s, "tx13_police_texas.jpg", 8.55, 1.95, 4.15, 2.1, null);
  const rows = [
    ["Class C misdemeanor", "Fine up to $500, no jail. Traffic tickets and most minor offenses. Heard in justice or municipal court."],
    ["Class B misdemeanor", "Up to 180 days in county jail and a fine up to $2,000."],
    ["Class A misdemeanor", "Up to one year in county jail and a fine up to $4,000."],
    ["State jail felony", "180 days to 2 years in a state jail facility."],
    ["Third, second, first degree felony", "2 to 10 years, 2 to 20 years, and 5 to 99 years or life, respectively."],
    ["Capital felony", "Life without parole, or death."],
  ];
  let y = 1.95;
  rows.forEach(([t, d], i) => {
    const last = i === rows.length - 1;
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.65, h: 0.7, rectRadius: 0.05, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.13, h: 0.7, rectRadius: 0.05, fill: { color: last ? C.CRIM : C.TEAL } });
    s.addText(t, { x: M + 0.32, y: y + 0.07, w: 3.1, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.32, y: y + 0.37, w: 7.1, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.BODY, valign: "top" });
    y += 0.78;
  });
  N(s, `
TIMING: 6 minutes.

THE CLASS C DISTINCTION IS THE MOST PRACTICALLY USEFUL. It carries no jail time,
only a fine, and it is where nearly every student who has encountered the system
encountered it. It is also the level where people most often appear without a
lawyer.

THE CONSEQUENCE STUDENTS UNDERESTIMATE: a conviction record, even at the
misdemeanor level, can affect employment, housing, and professional licensing long
after the sentence ends. The formal penalty is often not the largest cost.

STATE JAIL FELONIES were created in 1993 for lower-level property and drug
offenses, with the idea of separating them from the prison population. Whether
that worked as intended is debated, and it is a good example of a policy designed
for one purpose producing mixed results.
  `);
}

/* 5 */
{
  const s = k.slide("From arrest to disposition", "The criminal process");
  k.timeline(s, 1.95, [
    ["1", "Arrest and charge", "Police arrest with a warrant or on probable cause. A prosecutor decides what charge to file, or whether to file at all."],
    ["2", "Magistration and bail", "Within 48 hours the accused appears before a magistrate, is informed of rights, and bail is set."],
    ["3", "Grand jury or information", "Felonies generally require a grand jury indictment. Misdemeanors proceed on an information."],
  ], 2.45);
  k.timeline(s, 4.55, [
    ["4", "Pretrial", "Motions, discovery, and plea negotiation. The overwhelming majority of cases end here."],
    ["5", "Trial", "If no plea is reached, a jury or judge hears the case. The state must prove guilt beyond a reasonable doubt."],
    ["6", "Sentencing and appeal", "Punishment is assessed by the judge or, in Texas, by the jury if the defendant elects. Appeals go to a court of appeals and then the Court of Criminal Appeals."],
  ], 2.35);
  N(s, `
TIMING: 7 minutes.

THE PLEA BARGAIN POINT IS THE MOST IMPORTANT FACT IN THE CHAPTER. The
overwhelming majority of criminal cases in Texas and nationally end in a plea, not
a trial. Everything students have absorbed from television is the rare exception.

SAY WHY THAT MATTERS: if almost every case is resolved by negotiation, then
prosecutorial charging decisions and bail status shape outcomes more than juries
do. That reframes where power actually sits in the system.

TEXAS JURY SENTENCING IS UNUSUAL and worth naming. In most states judges impose
sentences. In Texas a defendant may elect to have the jury assess punishment. That
choice is strategic and it is distinctive.

PROSECUTORIAL DISCRETION deserves a sentence: the decision to charge, to charge
at what level, or to decline is largely unreviewable, and district attorneys are
elected. Connect to Chapters 6 and 7.
  `);
}

/* 6 */
{
  const s = k.slide("The right to a lawyer, in practice", "Indigent defense");
  k.figure(s, "tx13_courtroom_criminal.jpg", 8.5, 1.95, 4.2, 2.15, null);
  k.card(s, M, 1.95, 7.6, 2.45, "Gideon v. Wainwright", "1963 · UNANIMOUS",
    "A state must provide an attorney to a criminal defendant who cannot afford one.",
    "The right to counsel is meaningless if only the wealthy can exercise it. Gideon made the promise universal.");
  const issues = [
    ["How Texas delivers it", "Mostly through appointed private attorneys paid by the county, with public defender offices in only some counties. The Texas Indigent Defense Commission sets standards and provides grants."],
    ["The structural criticism", "In many counties judges select appointed counsel and set their pay, while also managing case flow. Critics identify an inherent conflict; defenders note judges know which attorneys are competent."],
    ["The caseload problem", "Appointed attorneys often carry heavy caseloads at modest compensation, which limits time per client."],
  ];
  let y = 4.58;
  issues.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.6, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.7, y, w: W - M * 2 - 2.7, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.81;
  });
  N(s, `
TIMING: 7 minutes.

GIDEON IS THE PROMISE; the rest of the slide is the practice. That gap is the
analytical structure of this chapter and it recurs in bail and in the death
penalty.

THE JUDICIAL APPOINTMENT CRITICISM IS REAL AND SERIOUS, and it has been raised by
courts, commissions, and the State Bar rather than only by advocates. Present the
defense fairly too: judges see these attorneys work and are positioned to know who
is competent, and many counties are too small to support a public defender office.

CONNECT TO CHAPTER 6. Texas judges are elected and must raise money. If the same
judge appoints defense counsel and sets their fees, the structural concern
compounds.

DO NOT CLAIM A CONCLUSION about how well Texas meets its Gideon obligation.
Present the structure, the criticism, and the defense, and let students weigh it.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Promise and practice", [
    "Gideon guarantees a lawyer to anyone who cannot afford one. What would have to be true for that guarantee to be real rather than formal, and how would you measure whether Texas meets it?",
    "The overwhelming majority of criminal cases end in a plea bargain rather than a trial. If that is how the system actually works, where does the power to decide outcomes really sit?",
    "A Class C misdemeanor carries no jail time, yet a conviction can affect employment and housing for years. Should penalties be measured by the sentence or by the consequences?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 IS THE BEST SINGLE CHOICE and it is a measurement question as much as a values
question. Push students toward concrete indicators: caseloads, time per client,
compensation, how early counsel is appointed. A student who proposes a measurable
standard has done real analytical work.

Q2 has a specific answer worth reaching: prosecutors. Charging decisions and plea
offers shape outcomes more than juries do, and district attorneys are elected
officials most voters cannot name. That connects the chapter to Chapters 7 and 8.

Q3 is the most immediately relevant to students' lives and the least politically
charged. It also introduces collateral consequences, which the formal penalty
structure does not capture.
  `);
}

/* 8 */
{
  const s = k.slide("Rights that attach before trial", "The Fifth Amendment");
  k.figure(s, "tx13_bail_reform.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const rights = [
    ["Self-incrimination", "No person may be compelled to be a witness against themselves. This is the basis of the right to remain silent."],
    ["Miranda warnings", "Miranda v. Arizona (1966) requires that a person in custody be informed of the right to silence and to counsel before interrogation."],
    ["Double jeopardy", "No one may be tried twice for the same offense by the same sovereign after an acquittal."],
    ["Due process", "The state must follow fair procedures before depriving anyone of life, liberty, or property."],
    ["Grand jury", "Felony charges in Texas generally proceed by indictment. Notably, the federal grand jury requirement is one of the few provisions never incorporated against the states."],
  ];
  let y = 1.95;
  rights.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.3, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.4, y, w: 5.45, h: 0.82, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.9;
  });
  N(s, `
TIMING: 6 minutes.

THE MISCONCEPTION TO CORRECT: students believe police must read Miranda rights at
the moment of arrest. The requirement attaches to custodial interrogation, not to
arrest itself. An officer who arrests someone and asks no questions has violated
nothing.

THE GRAND JURY POINT connects back to Chapter 16 and incorporation. The Fifth
Amendment's grand jury clause is one of the few provisions never applied to the
states, which is why states structure that stage differently. Texas requires
indictment for felonies as a matter of its own constitution.

DOUBLE JEOPARDY has a limit worth naming: separate sovereigns. A person acquitted
in state court can still face federal charges for the same conduct, because Texas
and the United States are different sovereigns. Students find this surprising.
  `);
}

/* 9 */
{
  const s = k.slide("Rights at trial and in punishment", "The Sixth and Eighth Amendments");
  const cw = (W - M * 2 - 0.4) / 2;
  const sides = [
    ["SIXTH AMENDMENT", "Rights at trial", [
      "Speedy and public trial",
      "Impartial jury of the community",
      "Notice of the charges",
      "Confront the witnesses against you",
      "Compel witnesses in your favor",
      "Assistance of counsel",
    ], C.TEAL],
    ["EIGHTH AMENDMENT", "Limits on punishment", [
      "No excessive bail",
      "No excessive fines",
      "No cruel and unusual punishment",
      "Standards judged against evolving norms of decency",
      "Basis for limits on executing people with intellectual disability or who were under 18",
    ], C.CRIM],
  ];
  sides.forEach(([t, sub, items, col], i) => {
    const x = M + i * (cw + 0.4);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 3.6, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 0.9, rectRadius: 0.08, fill: { color: col } });
    s.addText(t, { x: x + 0.28, y: 2.08, w: cw - 0.56, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.WHITE, valign: "top" });
    s.addText(sub, { x: x + 0.28, y: 2.42, w: cw - 0.56, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: "F0E6D2", valign: "top" });
    s.addText(items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j !== items.length - 1 } })), {
      x: x + 0.28, y: 3.0, w: cw - 0.56, h: 2.4, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, paraSpaceAfter: 5, valign: "top",
    });
  });
  k.defBox(s, M, 5.7, W - M * 2, 1.3, "The jury Texas actually seats",
    "An impartial jury means a jury drawn from a fair cross section of the community, not a jury guaranteed to include people like the defendant. Hernandez v. Texas in 1954 established that systematically excluding a group from jury service violates equal protection. Chapter 16 covers that case.");
  N(s, `
TIMING: 6 minutes.

CONFRONTATION IS THE RIGHT STUDENTS KNOW LEAST and it does real work: the state
generally cannot convict on a statement from someone the defense never gets to
cross-examine.

EVOLVING STANDARDS OF DECENCY is the doctrine to explain under the Eighth
Amendment. What counts as cruel and unusual is not fixed at 1791; the Court reads
it against current norms. That is why executing people with intellectual
disability and people who were under eighteen at the time of the offense are now
barred, and both of those lines were drawn within the last quarter century.

THE HERNANDEZ CONNECTION is worth making explicitly if you teach Chapter 16.
Jackson County had seated no juror of Mexican descent in twenty-five years, and
that case is where the Sixth Amendment's jury guarantee meets the Fourteenth
Amendment's equality guarantee.
  `);
}

/* 10 */
{
  const s = k.slide("Who waits in jail before trial", "Bail");
  s.addText("Bail is meant to ensure a defendant returns to court, not to punish someone who has not been convicted. In practice, whether a person can pay determines whether they wait for trial at home or in jail.", {
    x: M, y: 1.9, w: W - M * 2, h: 0.7, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  k.twoSides(s, 2.75,
    "The case for bail reform", [
      "People who have not been convicted are jailed because they cannot pay, not because they are dangerous",
      "Even a few days in jail can cost a job, housing, or custody",
      "Detained defendants plead guilty at higher rates, including some who are innocent",
      "Wealth, rather than risk, determines who waits in a cell",
    ],
    "The case for tightening bail", [
      "Some defendants released before trial commit serious new offenses",
      "Judges need clear authority to detain those accused of violent crimes",
      "Victims and communities bear the risk of release decisions",
      "Public confidence in the courts depends on visible accountability",
    ], 2.5);
  k.defBox(s, M, 5.45, W - M * 2, 1.55, "Proposition 3, approved in 2025",
    "Texas voters amended the constitution to require judges to deny bail to defendants accused of certain serious violent offenses. Supporters described it as closing a gap that allowed dangerous releases. Opponents argued it expands pretrial detention without addressing why people who pose no danger remain jailed for inability to pay. Both concerns can be true at once.");
  N(s, `
TIMING: 8 minutes with discussion. The most contested slide in the chapter.

TEACH THE PURPOSE OF BAIL FIRST because it clarifies both sides. Bail is
constitutionally about appearance at trial, not punishment. Once students hold
that, both critiques become sharper: detaining the poor who pose no risk fails the
purpose, and releasing someone genuinely dangerous also fails it.

THE PLEA RATE FINDING deserves emphasis because it links back to slide 5.
Defendants held before trial plead guilty at higher rates, and the reasons include
pressure to resolve the case and get out. That is a documented pattern, and it
means bail status shapes outcomes.

PROPOSITION 3 PASSED WITH BROAD SUPPORT. Say so, and also state the objection
fairly. Verify the current implementation status before teaching.

DO NOT REFEREE. Students with family in jail and students who have been victims
are both in the room.
  `);
}

/* 11 */
{
  const s = k.slide("The most serious power", "The death penalty in Texas");
  k.figure(s, "tx13_death_penalty.jpg", 8.5, 1.95, 4.2, 2.1, null);
  k.statCallout(s, M, 1.95, 7.6, 1.05, "600+",
    "executions in Texas since 1982, more than any other state and a large share of the national total.");
  const facts = [
    ["How it works", "A capital felony conviction leads to a separate punishment phase. The jury must find future dangerousness and weigh mitigating evidence. The only alternatives are death or life without parole."],
    ["Automatic review", "Every death sentence is automatically reviewed by the Texas Court of Criminal Appeals. Chapter 6."],
    ["Exonerations", "Texas also leads in exonerations. The Timothy Cole Act compensates the wrongfully convicted, and DNA testing has overturned convictions."],
  ];
  let y = 3.2;
  facts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.1, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.2, y, w: 5.65, h: 0.92, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.0;
  });
  k.twoSides(s, 6.2,
    "Arguments in support", [
      "Proportional justice for the most severe crimes, and finality for victims' families",
    ],
    "Arguments against", [
      "Irreversible error, documented exonerations, and disparities in who receives it",
    ], 0.85);
  N(s, `
TIMING: 8 minutes. Handle carefully and state both cases fairly.

THE JUXTAPOSITION IS THE LESSON: Texas leads the nation in executions and also in
exonerations. Both are documented. Put them side by side and let students sit with
it rather than resolving it for them.

FUTURE DANGEROUSNESS is the element that distinguishes Texas capital sentencing.
The jury must predict whether the defendant would pose a continuing threat. Ask
students how confident anyone can be about predicting future behavior. That is a
real evidentiary question that has drawn serious scholarly criticism from across
the spectrum.

THE TIMOTHY COLE STORY is worth two minutes if you have them. Cole died in prison
before DNA evidence cleared him of a rape he did not commit, and Texas named its
compensation statute after him. It makes the exoneration point concrete without
requiring a position on capital punishment.

DO NOT SHARE YOUR OWN VIEW. This is the single most values-laden issue in the
course.
  `);
}

/* 12 */
{
  const s = k.slide("What happens after sentencing", "Corrections and reentry");
  k.figure(s, "tx13_texas_prison.jpg", 8.5, 1.95, 4.2, 2.1, null);
  const parts = [
    ["TDCJ", "The Texas Department of Criminal Justice runs state prisons, state jails, parole supervision, and community supervision, under a nine-member board appointed by the governor."],
    ["Probation", "Community supervision imposed instead of incarceration, with conditions. Violating them can send a person to prison."],
    ["Parole", "Supervised release before a sentence ends, decided by the Board of Pardons and Paroles rather than by a judge."],
    ["Reentry", "Roughly nine of every ten people in Texas prisons will be released. What happens after release determines whether the system reduces crime or recycles it."],
  ];
  let y = 1.95;
  parts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 1.9, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.0, y, w: 5.85, h: 0.92, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.0;
  });
  k.defBox(s, M, 6.05, W - M * 2, 1.0, "A Texas reform with bipartisan support",
    "Beginning in 2007, Texas expanded treatment, diversion, and probation capacity instead of building projected new prisons. The state later closed several facilities. The approach drew support from conservatives focused on cost and from reformers focused on outcomes, and other states have copied it.");
  N(s, `
TIMING: 6 minutes.

THE REENTRY NUMBER IS THE MOST IMPORTANT FACT ON THIS SLIDE. Nearly everyone in
prison comes home. That reframes corrections policy from a question about
punishment to a question about what kind of neighbor returns.

THE 2007 REFORM IS WORTH TEACHING because it complicates the story students carry
about Texas and incarceration. Facing projections requiring billions in new prison
construction, the state invested in treatment and diversion instead, and later
closed units. It was championed by conservative legislators on cost and
effectiveness grounds and supported by reform advocates. That bipartisan
convergence is unusual and real.

COLLATERAL CONSEQUENCES connect back to slide 4: occupational licensing barriers,
housing restrictions, and employment screening continue after a sentence ends.
Chapter 18 covers the licensing side.
  `);
}

/* 13 */
{
  const s = k.discussion("Pause and think", "Justice, error, and purpose", [
    "Texas leads the nation in executions and in exonerations. How should a state weigh the possibility of irreversible error against the case for capital punishment?",
    "Bail is constitutionally about ensuring a defendant returns to court, not about punishment. Given that, what would a bail system designed only for that purpose look like?",
    "Nine of every ten people in Texas prisons will be released. Should the primary goal of corrections be punishment, deterrence, incapacitation, or rehabilitation, and how would you know if it was working?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q3 IS THE BEST SINGLE CHOICE for a mixed room because it is analytically rich
without being a referendum on capital punishment. The four purposes genuinely
conflict: a sentence that maximizes incapacitation may undermine rehabilitation.
Ask which purpose Texas policy currently prioritizes, judged by where the money
goes. Connect to Chapter 12.

Q1 IS THE HARDEST and the most likely to generate heat. If you use it, the
protocol that works is having students argue the side they disagree with in pairs
for three minutes first. It lowers the temperature and produces better reasoning.

Q2 is the most constructive of the three. Students usually converge on risk
assessment rather than wealth, then discover that risk prediction has its own
serious problems. That discovery is the learning.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 13 in the Trailblazer Trek: 8 sections, 1,760 points, one of the longest in the course.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh the rights of the accused against public safety.", C.GOLD],
    ["\u2611", "Assessment", "TEST-BANK.md Part A has 5 unseen items for this chapter, tagged to ACGM outcomes. Parts B and C are practice only.", C.CRIM],
  ];
  const cw3 = (W - M * 2 - 0.7) / 3;
  cols.forEach(([g, t, d, col], i) => {
    const x = M + i * (cw3 + 0.35);
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.0, w: cw3, h: 3.0, rectRadius: 0.07, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    k.circle(s, x + 0.28, 2.25, g, col);
    s.addText(t, { x: x + 0.28, y: 2.95, w: cw3 - 0.56, h: 0.6, isTextBox: true, margin: 0, fontFace: B, fontSize: 15, bold: true, color: C.INK, lineSpacing: 19, valign: "top" });
    s.addText(d, { x: x + 0.28, y: 3.6, w: cw3 - 0.56, h: 1.25, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
  });
  k.defBox(s, M, 5.3, W - M * 2, 1.1, "ACGM outcomes assessed by this chapter",
    "Outcome 7 (rights and responsibilities of citizens) and Outcomes 4 and 8 are all addressed here. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

A CAUTION ON ASSIGNMENTS. Avoid anything that asks students to write about
personal experience with the criminal justice system. Some will, unprompted, and
that is their choice, but do not build it into the assignment.

A GOOD ALTERNATIVE: have students read one exoneration case from the National
Registry of Exonerations and identify which stage of the process failed. It is
analytical rather than personal, and it makes the error question concrete.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["Texas law", "Texas Penal Code for offense classifications and the Code of Criminal Procedure for process. statutes.capitol.texas.gov"],
    ["Corrections", "Texas Department of Criminal Justice publishes population, parole, and supervision statistics. tdcj.texas.gov"],
    ["Indigent defense", "Texas Indigent Defense Commission reports on county-by-county defense systems and standards. tidc.texas.gov"],
    ["Capital punishment", "TDCJ maintains execution records, and the Death Penalty Information Center compiles national comparative data."],
    ["Exonerations", "National Registry of Exonerations documents wrongful convictions by state and by cause."],
    ["Openly licensed text", "OpenStax and OER Texas Government resources, CC BY 4.0, the base this module adapts."],
  ];
  let y = 1.95;
  refs.forEach(([t, d]) => {
    s.addText(t.toUpperCase(), { x: M, y, w: 2.7, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11, bold: true, color: C.GOLD, charSpacing: 1.2, valign: "top" });
    s.addText(d, { x: M + 2.8, y: y - 0.03, w: W - M - 2.8 - M, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top" });
    y += 0.78;
  });
  s.addText("This deck is licensed CC BY 4.0. Adopt it, adapt it, share it. Attribution appreciated.", {
    x: M, y: 6.5, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, italic: true, color: C.MUTE, valign: "top",
  });
  N(s, `
Leave this up during questions.

THE NATIONAL REGISTRY OF EXONERATIONS is the most powerful teaching resource
here. Each entry describes what went wrong: mistaken identification, false
confession, official misconduct, flawed forensics. Students who read two or three
understand the error question far better than any statistic conveys.

The Texas Indigent Defense Commission reports are the best source for the
county-by-county variation in how the Gideon right is actually delivered.
  `);
}

/* 16 */
{
  const s = k.closing("The question to leave with",
    "\u201CWould this system look fair\nif you did not know your place in it?\u201D",
    "Defendant, victim, juror, officer, taxpayer. A system worth defending should look defensible from every one of those seats.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The question is a version of Rawls's veil of ignorance, though you need not name
it. It works because it asks students to evaluate the system without knowing
whether they would enter it as the accused, the victim, or the taxpayer paying for
it.

Good exit ticket: "Pick one part of the Texas criminal justice system and name a
change that would make it more defensible from every seat."

Preview Chapter 14: every part of this system costs money. The next chapter
follows the dollars and asks who pays for all of it.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 13 - The Criminal Justice System (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
