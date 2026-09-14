/**
 * Chapter 6 — The Texas Court System
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 6", "The Texas Court System");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 6", "The Texas\nCourt System",
    "Two supreme courts, a thousand trial courts, and judges who run for office with campaign money.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 6: THE TEXAS COURT SYSTEM
About 75 minutes with all three discussion pauses.

OPENING (2 min). Ask: "How many supreme courts does the United States have?" One.
"How many does Texas have?" Two. Let the confusion sit for a moment.

Texas is one of only two states, with Oklahoma, that splits its highest court in
half: one for civil cases, one for criminal. Almost nobody outside Texas and
Oklahoma does this, and most Texans do not know it.

That oddity is the hook. The deeper story is judicial selection, which is where
this chapter's real argument lives.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, cut the civil process slide and one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely.", C.GOLD],
    ["\u2696", "The live argument", "Judicial selection is genuinely contested in Texas, with reform proposals from both parties. The notes give you both cases.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 6's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

The structural material in this chapter is dry on its own. It comes alive when
students realize the design decisions have consequences they can feel: which
court hears your case, whether your judge raised money from the lawyer arguing
in front of you, and whether a straight-ticket sweep can replace an entire
county's bench in one night.

Prioritize the selection material. It is the part students argue about and the
part that carries the chapter's analytical weight.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Identify", "the sources of law in Texas and how they rank."],
    ["Describe", "the structure of the Texas court system from municipal courts up."],
    ["Explain", "why Texas has two courts of last resort and what each handles."],
    ["Distinguish", "the civil and criminal justice processes."],
    ["Evaluate", "partisan judicial election against the alternatives."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #3 and #5. Objective 3 is the fact that makes Texas distinctive.
Objective 5 is the argument the chapter builds toward and the one that shows up
in reflections and exam items.

If you must compress, move quickly through #1 and #4.
  `);
}

/* 4 */
{
  const s = k.slide("Where law comes from, and which wins", "Sources and hierarchy");
  k.figure(s, "tx6_law_books.jpg", 8.5, 1.95, 4.2, 2.4, null);
  const sources = [
    ["U.S. Constitution", "The supreme law. Nothing below it may conflict with it.", C.INK],
    ["Federal statutes and treaties", "Valid federal law within Congress's granted powers.", C.INK],
    ["Texas Constitution", "Binds all Texas government, and may protect more than the federal floor.", C.TEAL],
    ["Texas statutes", "Laws passed by the Legislature and codified in the Texas codes.", C.TEAL],
    ["Administrative rules", "Agency rules carrying the force of law. Chapter 18.", C.GOLD],
    ["Local ordinances", "City and county rules, valid only where state law permits.", C.GOLD],
  ];
  let y = 1.95;
  sources.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.6, h: 0.66, rectRadius: 0.05, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.14, h: 0.66, rectRadius: 0.05, fill: { color: col } });
    s.addText(t, { x: M + 0.35, y: y + 0.06, w: 2.75, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.35, y: y + 0.34, w: 7.0, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.BODY, valign: "top" });
    y += 0.74;
  });
  k.defBox(s, M, 6.35, W - M * 2, 0.72, "Common law still matters",
    "Alongside written law, Texas courts follow precedent under stare decisis. A prior appellate decision binds lower courts in similar cases, which is why a single ruling can change outcomes statewide.");
  N(s, `
TIMING: 5 minutes.

DO NOT READ THE PYRAMID ALOUD. Ask instead: "A Fort Worth ordinance conflicts
with a Texas statute. Which wins?" Then walk up the ladder with two or three more
examples. Students learn hierarchy by applying it, not by hearing it.

STARE DECISIS IS THE CONCEPT THEY UNDERESTIMATE. Much of what governs a case is
not in any statute; it is in accumulated appellate decisions. That is why lawyers
research cases rather than just reading the code.

TEXAS WRINKLE worth naming: because Texas courts interpret the Texas Constitution
independently, a Texan can lose a federal claim and still win a state one.
Connect back to Chapter 2 and forward to Chapter 16.
  `);
}

/* 5 */
{
  const s = k.slide("A system built in layers", "Structure of the Texas courts");
  k.figure(s, "tx6_texas_courthouse.jpg", 8.55, 1.95, 4.15, 2.3, null);
  const levels = [
    ["Two high courts", "Texas Supreme Court (civil) and Court of Criminal Appeals (criminal). Nine members each, elected statewide."],
    ["Courts of appeals", "Fourteen regional courts, plus a statewide Fifteenth Court of Appeals created in 2023 and operating since September 2024 for certain civil cases involving the state."],
    ["District courts", "The main trial courts. Felonies, divorce, land title, and larger civil disputes."],
    ["County-level courts", "Constitutional county courts, statutory county courts at law, and probate courts. Misdemeanors and smaller civil matters."],
    ["Justice and municipal courts", "Traffic, small claims, and Class C misdemeanors. The courts most Texans actually encounter."],
  ];
  let y = 1.95;
  levels.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.55, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.GOLD, lineSpacing: 17, valign: "top" });
    s.addText(d, { x: M + 2.65, y, w: 5.15, h: 0.9, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top" });
    y += 0.88;
  });
  k.statCallout(s, M, 6.45, W - M * 2, 0.6, "2,700+",
    "courts operate in Texas, one of the most complex judicial structures in the country. Jurisdictions overlap, and which court hears a case is not always obvious.");
  N(s, `
TIMING: 6 minutes.

THE HONEST FRAMING: this structure is genuinely confusing, and that is a real
criticism rather than a student failing. Overlapping jurisdiction means two
different courts may both be able to hear the same case. Reform commissions have
recommended simplification for decades and the Legislature has not acted.

THE FIFTEENTH COURT OF APPEALS IS NEW and worth flagging as current. It hears
certain civil cases involving the state and its agencies, statewide. Supporters
described it as specialization; critics described it as forum selection. Present
both.

THE LEVEL THAT MATTERS MOST TO STUDENTS is the bottom one. Nearly every Texan who
ever sees a courtroom sees a justice or municipal court, usually over a traffic
ticket. Ask how many have been in one. The hands go up.
  `);
}

/* 6 */
{
  const s = k.slide("Two courts of last resort", "The bifurcated high courts");
  k.figure(s, "tx6_two_high_courts.jpg", 8.55, 1.95, 4.15, 2.2, null);
  const cw = 3.75;
  const courts = [
    ["Texas Supreme Court", "CIVIL", "Contracts, injury, family law, land, business disputes, and the constitutionality of statutes in civil matters.", C.TEAL],
    ["Court of Criminal Appeals", "CRIMINAL", "All criminal appeals, including automatic review of every death sentence in Texas.", C.CRIM],
  ];
  courts.forEach(([t, tag, d, col], i) => {
    const x = M + i * (cw + 0.3);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 2.55, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addText(tag, { x: x + 0.26, y: 2.12, w: cw - 0.52, h: 0.28, isTextBox: true, margin: 0, fontFace: B, fontSize: 10.5, bold: true, color: col, charSpacing: 1.5, valign: "top" });
    s.addText(t, { x: x + 0.26, y: 2.42, w: cw - 0.52, h: 0.7, isTextBox: true, margin: 0, fontFace: "Cambria", fontSize: 17, bold: true, color: C.INK, lineSpacing: 22, valign: "top" });
    s.addText("Nine members, elected statewide in partisan elections to six year terms.", { x: x + 0.26, y: 3.15, w: cw - 0.52, h: 0.55, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.MUTE, lineSpacing: 15, valign: "top" });
    s.addText(d, { x: x + 0.26, y: 3.7, w: cw - 0.52, h: 0.7, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
  });
  k.defBox(s, M, 4.75, 7.85, 1.05, "Only two states do this",
    "Texas and Oklahoma are the only states that split the highest court by subject matter. Every other state has a single supreme court that hears both civil and criminal appeals.");
  s.addText([
    { text: "The case for it: ", options: { bold: true, color: C.TEAL } },
    { text: "specialization and a manageable caseload in a very large state.   ", options: { color: C.BODY } },
    { text: "The case against: ", options: { bold: true, color: C.CRIM } },
    { text: "no single court speaks for Texas law, the two can diverge on shared questions, and voters must learn two sets of judicial races.", options: { color: C.BODY } },
  ], {
    x: M, y: 5.95, w: W - M * 2, h: 1.0, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 6 minutes.

THE FACT STUDENTS REMEMBER: two supreme courts, and only Oklahoma does the same.

THE DEATH PENALTY POINT deserves emphasis. Every death sentence in Texas gets
automatic review by the Court of Criminal Appeals. Given Texas leads the nation
in executions, that makes this court one of the most consequential judicial
bodies in the country, and almost no voter can name a single member. Connect to
Chapter 13.

ASK: "What happens when the two courts read the same constitutional provision
differently?" There is no higher state court to resolve it. The only route above
is the U.S. Supreme Court, and only on a federal question. Students find this
genuinely strange, which is the correct reaction.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Structure and access", [
    "Texas runs more than two thousand courts with overlapping jurisdiction, and reform commissions have recommended simplification for decades without result. Who benefits from a complicated court structure, and who is harmed by it?",
    "Only Texas and Oklahoma split the highest court by subject matter. Is specialization worth having no single court that speaks for state law?",
    "Most Texans who see a courtroom see a justice or municipal court, often without a lawyer. Does a system designed around lawyers serve people who cannot afford one?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 has a real answer worth reaching: complexity advantages repeat players who
know the system, meaning lawyers, insurers, and institutions. It disadvantages
one-time participants. That is a structural observation, not a conspiracy.

Q3 is the most concrete and lands hardest with community college students, many
of whom have appeared in a JP or municipal court over a ticket or an eviction.
Handle it respectfully and do not ask anyone to disclose.

Q2 sets up the selection discussion nicely if you are running all three pauses.
  `);
}

/* 8 */
{
  const s = k.slide("Trial courts decide facts", "Trial courts");
  k.figure(s, "tx6_jp_court.jpg", M, 1.95, 4.8, 2.5,
    "A justice of the peace courtroom. Texas has more than eight hundred JP courts.");
  const rows = [
    ["District courts", "Felonies, divorce and family matters, land title, and civil disputes above a dollar threshold. One judge, elected in the district."],
    ["County courts", "Constitutional county courts and statutory courts at law. Class A and B misdemeanors, probate, appeals from JP courts."],
    ["Justice of the peace", "Class C misdemeanors, small claims, evictions, and truancy. No law degree is required to serve."],
    ["Municipal courts", "City ordinance violations and Class C misdemeanors within city limits. Traffic tickets live here."],
  ];
  let y = 1.95;
  rows.forEach(([t, d]) => {
    s.addText(t, { x: 5.75, y, w: 2.3, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.GOLD, valign: "top" });
    s.addText(d, { x: 8.15, y, w: W - M - 8.15, h: 1.05, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.15;
  });
  k.defBox(s, M, 5.05, 4.8, 1.6, "A fact worth pausing on",
    "Texas does not require a justice of the peace to be a lawyer. JPs handle evictions, small claims, and truancy, and in many counties they also conduct inquests. Supporters value local knowledge and accessibility. Critics question decisions of real consequence made without legal training.");
  N(s, `
TIMING: 6 minutes.

THE NON-LAWYER JP IS THE TEACHING MOMENT on this slide. Students assume every
judge is a lawyer. In Texas, justices of the peace need not be, and they preside
over evictions, which can put a family out of a home, and truancy, which can put
a student in the system.

PRESENT BOTH SIDES. Defenders argue that JP courts are deliberately accessible,
local, informal, and inexpensive, and that requiring law degrees would close
courts in rural counties. Critics argue that consequences do not scale with
formality. Both are serious.

ASK: "Should the judge who can evict you be required to have a law degree?" It
is a clean question with no easy answer.
  `);
}

/* 9 */
{
  const s = k.slide("Appellate courts review process", "Appellate courts");
  k.figure(s, "tx6_civil_trial.jpg", 8.5, 1.95, 4.2, 2.3, null);
  s.addText("An appeal is not a second trial. There is no new evidence, no new witnesses, and no jury. The appellate court reviews the record to decide whether the law was applied correctly and the process was fair.", {
    x: M, y: 1.95, w: 7.6, h: 0.8, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const outcomes = [
    ["Affirm", "The lower court's decision stands.", C.TEAL],
    ["Reverse", "The decision is overturned.", C.CRIM],
    ["Remand", "The case returns to the lower court for further proceedings.", C.GOLD],
  ];
  let x = M;
  const cwo = (7.6 - 0.5) / 3;
  outcomes.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.9, w: cwo, h: 1.35, rectRadius: 0.07, fill: { color: C.WHITE }, line: { color: col, width: 2 } });
    s.addText(t, { x: x + 0.22, y: 3.06, w: cwo - 0.44, h: 0.36, isTextBox: true, margin: 0, fontFace: B, fontSize: 14, bold: true, color: col, valign: "top" });
    s.addText(d, { x: x + 0.22, y: 3.45, w: cwo - 0.44, h: 0.7, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    x += cwo + 0.25;
  });
  k.defBox(s, M, 4.45, 7.6, 1.25, "Why appellate decisions reach beyond one case",
    "Courts of appeals sit in panels of three. Their published decisions set precedent binding lower courts, so a single appeal can change how the law works across an entire region of Texas.");
  s.addText("Fourteen regional courts of appeals, plus the statewide Fifteenth Court of Appeals operating since September 2024 for certain civil matters involving the state.", {
    x: M, y: 5.9, w: 7.6, h: 0.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, italic: true, color: C.INK, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 5 minutes.

THE MISCONCEPTION TO KILL: students believe an appeal is a do-over. It is not.
No new evidence, no witnesses, no jury. The question is whether the trial court
applied the law correctly.

A USEFUL ILLUSTRATION: if a jury believed the wrong witness, that is generally
not appealable. If the judge admitted evidence the law excludes, that is.
Appeals are about process, not about who deserved to win.

THE PRECEDENT POINT connects back to stare decisis. One appeal decided in a
three-judge panel can bind every trial court in that region, which is how
appellate courts make law without a legislature.
  `);
}

/* 10 */
{
  const s = k.slide("Two different processes, two different standards", "Civil and criminal justice");
  const cw2 = (W - M * 2 - 0.4) / 2;
  const sides = [
    ["CIVIL", "A dispute between parties", [
      "Brought by a plaintiff, not the state",
      "Preponderance of the evidence",
      "Remedy is usually money or an order",
      "No right to appointed counsel",
      "Most cases settle before trial",
    ], C.TEAL],
    ["CRIMINAL", "The state prosecutes an offense", [
      "Brought by the state against a defendant",
      "Beyond a reasonable doubt",
      "Penalty may include fines or confinement",
      "Right to counsel under Gideon v. Wainwright",
      "Most cases end in plea bargains",
    ], C.CRIM],
  ];
  sides.forEach(([t, sub, items, col], i) => {
    const x = M + i * (cw2 + 0.4);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw2, h: 3.55, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw2, h: 0.9, rectRadius: 0.08, fill: { color: col } });
    s.addText(t, { x: x + 0.28, y: 2.08, w: cw2 - 0.56, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.WHITE, valign: "top" });
    s.addText(sub, { x: x + 0.28, y: 2.44, w: cw2 - 0.56, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: "F0E6D2", valign: "top" });
    s.addText(items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j !== items.length - 1 } })), {
      x: x + 0.28, y: 3.0, w: cw2 - 0.56, h: 2.35, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 18, paraSpaceAfter: 6, valign: "top",
    });
  });
  k.figure(s, "tx6_criminal_justice.jpg", M, 5.75, 3.4, 1.15, null);
  s.addText([
    { text: "The same act can be both. ", options: { bold: true, color: C.INK } },
    { text: "A person acquitted in a criminal trial can still lose a civil suit over the same conduct, because the standard of proof is lower. That is not double jeopardy, since the state is not prosecuting twice.", options: { color: C.BODY } },
  ], {
    x: 4.35, y: 5.8, w: W - M - 4.35, h: 1.1, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 6 minutes. Candidate to compress in a 50 minute class.

THE STANDARD OF PROOF IS THE KEY CONTRAST. Beyond a reasonable doubt is
deliberately demanding because the state is taking liberty. Preponderance, more
likely than not, is the civil standard.

THE CLOSING POINT IS THE ONE STUDENTS FIND MOST INTERESTING: acquittal in a
criminal case does not prevent a civil judgment for the same conduct. Students
often name a famous case here. Let them, then make the analytical point: different
parties, different standards, no double jeopardy.

NOTE THE ASYMMETRY IN COUNSEL. Criminal defendants have a right to an appointed
lawyer. Civil litigants, including tenants facing eviction, generally do not.
Chapter 13 takes up how well Texas meets the criminal obligation.
  `);
}

/* 11 */
{
  const s = k.slide("Texas elects nearly all of its judges", "Judicial selection");
  k.figure(s, "tx6_judicial_election.jpg", 8.5, 1.95, 4.2, 2.35, null);
  s.addText("From municipal benches to both high courts, Texas judges run in partisan elections, raise campaign money, and appear on the ballot with party labels. Only a handful of states do this for nearly every judicial office.", {
    x: M, y: 1.95, w: 7.6, h: 0.85, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const methods = [
    ["Partisan election", "Texas. Judges run with party labels and raise money.", C.CRIM],
    ["Nonpartisan election", "Ballot without party labels.", C.GOLD],
    ["Gubernatorial or legislative appointment", "Chosen by elected officials, sometimes with confirmation.", C.TEAL],
    ["Missouri Plan", "A nominating commission recommends, the governor appoints, and voters later decide retention.", C.INK],
  ];
  let y = 2.95;
  methods.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.6, h: 0.82, rectRadius: 0.06, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.13, h: 0.82, rectRadius: 0.06, fill: { color: col } });
    s.addText(t, { x: M + 0.32, y: y + 0.1, w: 4.0, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.32, y: y + 0.42, w: 7.0, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.BODY, valign: "top" });
    y += 0.9;
  });
  N(s, `
TIMING: 6 minutes. The setup for the chapter's central argument.

STATE THE FACT PLAINLY: a Texas judge is a candidate. That means fundraising,
yard signs, party primaries, and a party label next to the name on the ballot.

THE UNCOMFORTABLE DETAIL worth naming: much judicial campaign money comes from
lawyers and firms who appear before those judges. Texas adopted the Judicial
Campaign Fairness Act to cap contributions, and the practice continues within
those limits. Nobody claims a quid pro quo; the concern is the appearance and the
structural pressure.

SET UP THE NEXT SLIDE: ask students how they voted in judicial races, or how they
would. Most admit they used party label or skipped the races entirely. That
admission is the honest starting point for the debate.
  `);
}

/* 12 */
{
  const s = k.slide("The argument Texas keeps having", "Reforming judicial selection");
  k.twoSides(s, 1.95,
    "The case for electing judges", [
      "Judges exercise real power and should answer to the people who live under their rulings",
      "Appointment moves the decision to insiders and political patrons rather than voters",
      "Elections allow removal without impeachment",
      "Party label gives low-information voters a usable signal about judicial philosophy",
    ],
    "The case for changing the system", [
      "Campaign money often comes from lawyers who appear before the judge",
      "Straight-ticket sweeps can replace experienced judges for reasons unrelated to their work",
      "Most voters cannot name a single judicial candidate or evaluate their record",
      "Qualified lawyers may decline to run rather than raise money and campaign",
    ], 2.75);
  k.defBox(s, M, 4.95, W - M * 2, 1.6, "Reform efforts have been bipartisan and unsuccessful",
    "Texas chief justices of both parties have called for change, and a bipartisan commission studied the question and reported to the Legislature. Proposals have included nonpartisan ballots, merit selection with retention elections, and appointment with confirmation. None has passed. Meanwhile Texas has repeatedly seen county benches turn over wholesale in a single election, in both directions depending on the year.");
  N(s, `
TIMING: 8 minutes with discussion. This is the heart of the chapter.

DO NOT TAKE A SIDE. Both columns contain serious arguments held by serious
people, including judges.

THE STRAIGHT-TICKET SWEEP is the most concrete example and it cuts both ways,
which is exactly why it is useful. Harris County and Dallas County have each seen
entire benches replaced in a single election, in different directions in
different years. A judge with twenty years of experience can lose to an unknown
because of the top of the ticket. Whether that is accountability or arbitrariness
is the question.

TEXAS ENDED STRAIGHT-TICKET VOTING for its ballots, which changed the mechanism
somewhat but not the underlying dynamic of partisan judicial races.

HOW TO RUN IT: ask students to argue the side they disagree with, in pairs, for
three minutes. It produces better reasoning and lowers the temperature.
  `);
}

/* 13 */
{
  const s = k.discussion("Pause and think", "Choosing the people who judge you", [
    "Should judges be accountable to voters in the same way legislators are, or does judging require a different kind of independence?",
    "If most voters cannot name a judicial candidate, what is a judicial election actually measuring, and is that a reason to change the system or to improve voter information?",
    "Texas chief justices of both parties have called for reform and nothing has passed. Who benefits from keeping partisan judicial elections, and why might reform be so hard?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE BEST SINGLE CHOICE. It surfaces the real distinction: legislators are
supposed to represent majority preference, while judges are supposed to apply law
even when it is unpopular. Those are different jobs, which is why the selection
question is genuinely hard rather than obvious.

Q2 produces an honest moment. Ask for a show of hands: who has voted in a
judicial race? Who could name the candidates afterward? The answer is the
question.

Q3 is the most sophisticated. Likely answers: parties that currently benefit,
lawyers with established relationships, and incumbents. Also inertia, since
constitutional change requires a two-thirds vote and a statewide election. Push
students past "politicians are corrupt" toward the structural obstacles.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 6 in the Trailblazer Trek: 8 sections, 1,815 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh judicial accountability against independence.", C.GOLD],
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
    "Outcome 4 (knowledge of the legislative, executive, and judicial branches) is primary. Outcome 3 is supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

A STRONG PAIRED ASSIGNMENT: have students look up the judges on their own county
ballot from the last election, then try to find any information about those
candidates beyond party affiliation. Most discover how little is available. That
exercise makes the selection debate personal in a way lecture cannot.

The Texas Judicial Branch site publishes court structure charts and annual
caseload statistics, both usable for a data exercise.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The constitution", "Texas Constitution, Article V, the Judicial Department. statutes.capitol.texas.gov"],
    ["The courts", "Texas Judicial Branch publishes the court structure chart, opinions, and annual caseload statistics. txcourts.gov"],
    ["Court administration", "Office of Court Administration annual statistical reports, including case volumes by court level."],
    ["Judicial selection", "The Texas Commission on Judicial Selection reported to the Legislature on alternatives to partisan election."],
    ["Campaign finance", "Texas Ethics Commission carries judicial campaign contribution reports and the limits under the Judicial Campaign Fairness Act."],
    ["Openly licensed text", "OpenStax and OER Texas Government resources, CC BY 4.0, the base this module adapts."],
  ];
  let y = 1.95;
  refs.forEach(([t, d]) => {
    s.addText(t.toUpperCase(), { x: M, y, w: 2.6, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11, bold: true, color: C.GOLD, charSpacing: 1.2, valign: "top" });
    s.addText(d, { x: M + 2.7, y: y - 0.03, w: W - M - 2.7 - M, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top" });
    y += 0.78;
  });
  s.addText("This deck is licensed CC BY 4.0. Adopt it, adapt it, share it. Attribution appreciated.", {
    x: M, y: 6.5, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, italic: true, color: C.MUTE, valign: "top",
  });
  N(s, `
Leave this up during questions.

THE ETHICS COMMISSION DATABASE is the most striking resource here. Students can
look up who funded a specific judge's campaign. Doing that once does more to
explain the reform debate than any lecture, and it is public record.
  `);
}

/* 16 */
{
  const s = k.closing("The question to leave with",
    "\u201CShould the person who judges you\nhave had to campaign for the job?\u201D",
    "Texas says yes. Most of the world says no. Neither answer is obviously right, and Texas keeps revisiting the question.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

Let the question sit. Students who arrived certain that electing judges is
obviously democratic, or obviously corrupt, should leave less certain and better
armed.

Good exit ticket: "Pick a selection method other than the one Texas uses.
Describe its single biggest weakness."

Preview Chapter 7: we have covered the three branches of state government. Now
the level of government closest to students, the one that picks up their trash,
polices their streets, and sets their property tax bill.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 06 - The Texas Court System (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
