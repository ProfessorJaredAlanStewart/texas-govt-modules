/**
 * Chapter 12 — Public Policy in Texas
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 12", "Public Policy in Texas");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 12", "Public Policy\nin Texas",
    "Everything the state chooses to do, and everything it chooses not to. Both are policy.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 12: PUBLIC POLICY IN TEXAS
About 75 minutes with all three discussion pauses.

OPENING (3 min). Ask students to name a way state policy touched them this week.
They usually start with nothing, then produce a flood: tuition, the speed limit,
a driver license, a vaccination record, SNAP, financial aid, minimum wage,
whether their pharmacy could fill a prescription.

THE SUBTITLE IS THE FRAME. Declining to act is a policy choice with consequences.
Texas declining Medicaid expansion is a decision, not an absence of one. Establish
that early and the whole chapter reads differently.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, teach the process and pick two policy areas rather than four.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Swap in whichever policy areas fit your course.", C.GOLD],
    ["\u2696", "Every area here is contested", "Education, health, energy, and guns are all live arguments. Each appears as paired panels with no verdict.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 12's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

THIS IS THE MOST POLITICALLY CHARGED CHAPTER IN THE COURSE. Vouchers, Medicaid,
guns, and energy all appear, and students hold strong views on each.

The structure is deliberate: teach the analytical framework first, then apply it
to contested areas. Students who have the framework argue about evidence and
trade-offs. Students who do not argue about teams.

If you are short on time, cut policy areas rather than the framework.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Define", "public policy and explain why inaction is also a choice."],
    ["Distinguish", "public, private, common, and toll goods."],
    ["Classify", "policies as distributive, regulatory, or redistributive."],
    ["Trace", "the stages of the policy-making process."],
    ["Analyze", "major Texas policy areas and the trade-offs in each."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #2 and #4. Objective 2 explains why markets underprovide some things and
government steps in, which is the economic foundation of the whole chapter.
Objective 4 is the process model that shows up in assessment.

Objective 5 is where the class discussion lives, but it only works if 2 and 4
land first.
  `);
}

/* 4 */
{
  const s = k.slide("What government chooses to do", "Defining public policy");
  k.figure(s, "tx12_policy_process.jpg", 8.5, 1.95, 4.2, 2.2, null);
  s.addText([
    { text: "Public policy ", options: { bold: true, color: C.INK } },
    { text: "is the set of choices government makes in response to a problem, expressed through laws, budgets, regulations, and court decisions. It includes what government does and, just as consequentially, what it declines to do.", options: { color: C.BODY } },
  ], {
    x: M, y: 1.95, w: 7.6, h: 1.2, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  const levels = [
    ["Laws", "Statutes passed by the Legislature and signed or allowed to become law."],
    ["Budgets", "Where the money goes. The clearest statement of actual priorities."],
    ["Regulations", "Agency rules with the force of law, filling in statutory detail. Chapter 18."],
    ["Court decisions", "Judicial interpretation that can expand, limit, or invalidate policy."],
  ];
  let y = 3.25;
  levels.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 1.8, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, valign: "top" });
    s.addText(d, { x: M + 1.9, y, w: 5.95, h: 0.6, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.68;
  });
  k.defBox(s, M, 6.05, W - M * 2, 1.0, "Inaction is a decision",
    "Texas declining to expand Medicaid is a policy choice with measurable consequences for who has coverage. Declining to adopt statewide emissions targets is a choice. A course in government has to treat non-decisions as seriously as decisions.");
  N(s, `
TIMING: 6 minutes.

THE BUDGET LINE IS THE ONE TO EMPHASIZE. Every government says education is a
priority. The budget shows what the priority actually is. Tell students that when
they want to know what a government values, read the appropriations bill rather
than the press release. Connect to Chapter 14.

THE INACTION POINT IS THE CHAPTER'S FRAMING and it matters analytically, not
politically. Declining to act produces outcomes just as acting does. That is true
whether the non-decision is one a student favors or opposes, and saying so
neutrally models the whole chapter.

GOOD QUICK EXERCISE: name a problem the Legislature considered last session and
did not act on. Ask what happened as a result. Something always did.
  `);
}

/* 5 */
{
  const s = k.slide("Why some things need government", "Types of goods");
  const goods = [
    ["PUBLIC GOODS", "Non-excludable, non-rivalrous", "National defense, clean air, flood control. You cannot keep anyone out, and one person's use does not reduce another's, so markets underprovide them.", C.INK],
    ["PRIVATE GOODS", "Excludable, rivalrous", "Food, clothing, cars. Markets handle these well because sellers can charge and use is exclusive.", C.TEAL],
    ["COMMON GOODS", "Non-excludable, rivalrous", "Groundwater, fisheries, public grazing. Hard to exclude anyone, and use depletes the supply. This is where the tragedy of the commons appears. Chapter 17.", C.GOLD],
    ["TOLL GOODS", "Excludable, non-rivalrous", "Toll roads, cable service, a state park. You can charge admission, and one more user costs almost nothing until capacity is reached.", C.CRIM],
  ];
  let y = 1.95;
  goods.forEach(([t, sub, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: W - M * 2, h: 1.12, rectRadius: 0.06, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 2.9, h: 1.12, rectRadius: 0.06, fill: { color: col } });
    s.addText(t, { x: M + 0.22, y: y + 0.2, w: 2.5, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.WHITE, valign: "top" });
    s.addText(sub, { x: M + 0.22, y: y + 0.56, w: 2.5, h: 0.42, isTextBox: true, margin: 0, fontFace: B, fontSize: 10.5, color: "F0E6D2", lineSpacing: 13, valign: "top" });
    s.addText(d, { x: M + 3.12, y: y + 0.2, w: W - M * 2 - 3.35, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.2;
  });
  N(s, `
TIMING: 7 minutes. The economic foundation of the chapter.

TEACH THE TWO DIMENSIONS FIRST, then the four boxes follow. Excludable means you
can keep non-payers out. Rivalrous means one person's use reduces what is left.
Draw a two-by-two on the board and let students place examples.

THE PUBLIC GOODS ARGUMENT is why government exists in economic terms. No company
can sell you clean air, because it cannot exclude non-payers. So either government
provides it or nobody does.

COMMON GOODS SET UP CHAPTER 17. Groundwater under the rule of capture is a
textbook common good: hard to exclude, and every gallon pumped is gone for
everyone else. That is the tragedy of the commons, and Texas water law is a live
example.

A GOOD CHALLENGE: ask where public education fits. Students argue, and the honest
answer is that it has features of several categories, which is exactly why it is
contested.
  `);
}

/* 6 */
{
  const s = k.slide("Who benefits, who pays", "Lowi's policy typology");
  const cw = (W - M * 2 - 0.6) / 3;
  const types = [
    ["DISTRIBUTIVE", "Concentrated benefits, dispersed costs", "Highway projects, agricultural subsidies, research grants. Popular, because the beneficiaries notice and the payers do not.", C.TEAL],
    ["REGULATORY", "Limits behavior to protect others", "Environmental rules, occupational licensing, safety standards. Creates identifiable winners and losers.", C.GOLD],
    ["REDISTRIBUTIVE", "Shifts resources between groups", "Progressive taxation, Medicaid, welfare programs. The most politically contested category.", C.CRIM],
  ];
  types.forEach(([t, sub, d, col], i) => {
    const x = M + i * (cw + 0.3);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 3.1, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 1.0, rectRadius: 0.08, fill: { color: col } });
    s.addText(t, { x: x + 0.24, y: 2.08, w: cw - 0.48, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.WHITE, valign: "top" });
    s.addText(sub, { x: x + 0.24, y: 2.4, w: cw - 0.48, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 10.5, color: "F0E6D2", lineSpacing: 13, valign: "top" });
    s.addText(d, { x: x + 0.24, y: 3.1, w: cw - 0.48, h: 1.8, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 17, valign: "top" });
  });
  k.defBox(s, M, 5.25, W - M * 2, 1.7, "Why the category predicts the politics",
    "Distributive policy is easy to pass because those who gain are organized and those who pay barely notice a few cents. Redistributive policy is hard because both sides know exactly what they are getting and losing. If you can classify a proposal, you can usually predict how hard the fight will be.");
  N(s, `
TIMING: 6 minutes.

THE PREDICTIVE POINT IS THE PAYOFF. Lowi's typology is not just labeling; it
forecasts the politics. Ask students to classify something in the news and predict
the difficulty of passage. They are usually right.

DISTRIBUTIVE POLICY IS THE ONE STUDENTS UNDERESTIMATE. A highway project in one
district costs every taxpayer a tiny amount and delivers a large visible benefit
to a few. Nobody organizes against a cost they cannot feel. That asymmetry
explains a great deal of legislative behavior and connects directly to Chapter 11.

CATEGORIES BLUR AT THE EDGES and that is fine to admit. School vouchers can be
described as distributive by supporters and redistributive by opponents. The
disagreement about classification is itself part of the political fight, which is
a sophisticated point worth naming.
  `);
}

/* 7 */
{
  const s = k.slide("How a problem becomes a policy", "The policy-making process");
  k.timeline(s, 1.95, [
    ["1", "Agenda setting", "A problem gains attention and becomes something government might act on. Media, crises, and organized groups all shape what reaches the agenda."],
    ["2", "Formulation", "Proposals are drafted. Legislators, agencies, think tanks, and interest groups all supply language."],
    ["3", "Adoption", "The Legislature passes it, the governor signs or vetoes, or an agency adopts a rule."],
  ], 2.5);
  k.timeline(s, 4.6, [
    ["4", "Implementation", "Agencies carry it out. This is where policy meets reality and where much of the real decision-making happens. Chapter 18."],
    ["5", "Evaluation", "Did it work? The Legislative Budget Board, the State Auditor, Sunset review, and outside researchers all assess results."],
    ["6", "Change or termination", "Policies are revised, expanded, defunded, or ended. Most are revised rather than repealed."],
  ], 2.35);
  N(s, `
TIMING: 7 minutes.

AGENDA SETTING IS THE MOST IMPORTANT AND LEAST OBVIOUS STAGE. Most problems never
reach the agenda at all. Getting an issue considered is often harder than winning
the vote once it is. Connect to Chapters 11 and 15: organized groups and media
attention are the main routes onto the agenda.

IMPLEMENTATION IS WHERE STUDENTS ARE MOST SURPRISED. A statute that says
facilities must be safe and sanitary delegates enormous discretion to an agency.
The rule the agency writes is the policy people actually live under. Forward
reference to Chapter 18.

THE TEXAS TIMING CONSTRAINT is worth naming: with a 140 day biennial session,
adoption windows are narrow and evaluation often happens between sessions. A
policy that fails in year one may run unchanged for two years.

DO NOT PRESENT THIS AS A TIDY CYCLE. Real policy loops, stalls, and skips stages.
Say so.
  `);
}

/* 8 */
{
  const s = k.discussion("Pause and think", "Framework before politics", [
    "Texas declining to expand Medicaid is a policy choice with measurable effects. What obligation does a government have to justify inaction, compared to action?",
    "Distributive policy passes easily because costs are spread thin and benefits are concentrated. Is that a defect in democracy or simply how attention works?",
    "Most problems never reach the policy agenda at all. Who decides what gets considered, and how would you get an issue onto that list?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 IS THE BEST SINGLE CHOICE and it works precisely because it is framed
analytically rather than as a referendum on Medicaid. The interesting version:
should a legislature have to explain a decision not to act the way it explains a
decision to act?

Q2 connects Lowi to Chapter 11. The honest answer is both: it is how attention
works, and it produces a systematic tilt toward organized beneficiaries.

Q3 is the most practical and pairs with Texas In Action if you assign it. Routes
onto the agenda include organized advocacy, media coverage, a focusing crisis,
litigation, and a legislator who cares.
  `);
}

/* 9 */
{
  const s = k.slide("The biggest line in the budget", "Education policy");
  k.figure(s, "tx12_education_funding.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const facts = [
    ["How schools are funded", "A mix of local property taxes and state aid, distributed through the Foundation School Program. The basic allotment per student is set by the Legislature."],
    ["Recapture", "Districts with high property wealth send a share of local revenue to the state for redistribution. Critics call it Robin Hood; defenders call it the constitutional requirement of an efficient system."],
    ["Recent changes", "House Bill 3 in 2019 raised the basic allotment and cut tax rates. House Bill 2 in 2025 raised it further, to roughly $6,215 per student."],
    ["Education Savings Accounts", "Senate Bill 2 in 2025 created the state's first program letting families use public funds toward private schooling, after years of failed attempts."],
  ];
  let y = 1.95;
  facts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.5, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.6, y, w: 5.25, h: 0.92, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.0;
  });
  k.twoSides(s, 5.9,
    "The case for school choice", [
      "Funding should follow the student, not the building",
      "Families in struggling schools deserve options now",
    ],
    "The case against", [
      "Public dollars leave public schools that must serve every child",
      "Rural districts often have no private alternative at all",
    ], 1.15);
  N(s, `
TIMING: 8 minutes. Verify figures before teaching; the allotment changes by
session.

TEACH THE FUNDING MECHANICS FIRST. Students are surprised that school funding
depends heavily on local property wealth, and that the state's share and the local
share move inversely. When property values rise, state aid often falls.

RECAPTURE IS THE MOST MISUNDERSTOOD PIECE and deserves a careful, neutral
explanation. It exists because the Texas Supreme Court repeatedly held that the
constitution requires an efficient system, and wide disparities between
property-rich and property-poor districts failed that test. Whether the current
mechanism is the right remedy is genuinely argued.

THE ESA FIGHT SPLIT REPUBLICANS FOR YEARS, with many rural members opposing
because their districts have no private schools. That detail is worth including
because it shows students the issue does not sort neatly by party.

Present both panels without editorializing.
  `);
}

/* 10 */
{
  const s = k.slide("Coverage, cost, and a decision not made", "Health and social policy");
  k.figure(s, "tx12_healthcare_texas.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const facts = [
    ["Medicaid and CHIP", "Jointly funded by the state and federal government and administered by the Health and Human Services Commission. Together they are among the largest items in the state budget."],
    ["Expansion declined", "The Affordable Care Act offered federal funds to cover more low income adults. The Supreme Court made expansion optional in 2012, and Texas declined."],
    ["The coverage gap", "Adults who earn too much for traditional Texas Medicaid and too little for marketplace subsidies often qualify for neither. Texas has consistently had the highest uninsured rate in the country."],
    ["Safety net programs", "SNAP, TANF, and WIC provide food and cash assistance, with eligibility set within federal rules."],
  ];
  let y = 1.95;
  facts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.4, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.5, y, w: 5.35, h: 0.98, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.05;
  });
  k.twoSides(s, 6.15,
    "The case against expansion", [
      "Long-term state cost and dependence on federal funding that Congress can change",
    ],
    "The case for expansion", [
      "Federal funds cover most of the cost, and uncompensated care shifts expense to local taxpayers anyway",
    ], 0.9);
  N(s, `
TIMING: 7 minutes.

THE COVERAGE GAP IS THE CONCEPT TO TEACH CAREFULLY because it is genuinely
counterintuitive. A person can earn too much for Medicaid and too little for
subsidized marketplace coverage, and therefore qualify for nothing. That outcome
was not intended by the ACA's drafters; it results from the Court making expansion
optional while leaving subsidies keyed to an assumption of expansion.

STATE BOTH CASES FAIRLY. The fiscal argument against expansion is serious: the
federal match has changed before and the state would carry a permanent obligation.
The argument for it is also serious: uncompensated care does not disappear, it
shifts to hospital districts and local property taxpayers, which connects to
Chapter 7.

THIS IS A SLIDE WHERE STUDENTS MAY HAVE PERSONAL STAKES. Teach the policy; do not
invite disclosure.
  `);
}

/* 11 */
{
  const s = k.slide("Two more areas where Texas has chosen", "Energy and public safety policy");
  const cw = (W - M * 2 - 0.4) / 2;
  s.addShape(pres.ShapeType.roundRect, { x: M, y: 1.95, w: cw, h: 4.3, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
  s.addText("ENERGY AND ENVIRONMENT", { x: M + 0.28, y: 2.12, w: cw - 0.56, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, bold: true, color: C.TEAL, charSpacing: 1.2, valign: "top" });
  s.addText([
    { text: "Texas leads the nation in oil and gas production and in wind power at the same time. It runs its own grid through ERCOT, largely outside federal regulation. After Winter Storm Uri in 2021 the Legislature mandated weatherization and created the Texas Energy Fund. The state regulates air and water through the TCEQ under authority delegated by the EPA, and has repeatedly litigated against federal environmental rules.\n\nChapter 17 covers this in depth, including water law and the 2025 water fund.", options: { color: C.BODY } },
  ], { x: M + 0.28, y: 2.5, w: cw - 0.56, h: 3.6, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top" });
  s.addShape(pres.ShapeType.roundRect, { x: M + cw + 0.4, y: 1.95, w: cw, h: 4.3, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
  s.addText("GUNS AND PUBLIC SAFETY", { x: M + cw + 0.68, y: 2.12, w: cw - 0.56, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, bold: true, color: C.CRIM, charSpacing: 1.2, valign: "top" });
  s.addText([
    { text: "House Bill 1927 in 2021 established permitless carry, letting most adults 21 and over carry a handgun in public without a license. Campus carry, adopted in 2015, allows licensed carry in most areas of public university campuses.\n\nSupporters argue these laws restore a constitutional right and that licensing burdened lawful owners. Opponents argue that removing training and background requirements raises risk for the public and for law enforcement. Both positions are widely held in Texas.\n\nChapter 16 covers the constitutional dimension.", options: { color: C.BODY } },
  ], { x: M + cw + 0.68, y: 2.5, w: cw - 0.56, h: 3.6, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top" });
  N(s, `
TIMING: 7 minutes. Both halves are contested; stay descriptive.

THE ENERGY HALF is deliberately brief because Chapter 17 covers it properly. The
point to land here is that Texas holds two identities at once: the largest fossil
fuel producer and the largest wind producer. Students who expect energy politics to
sort neatly find that surprising.

THE GUNS HALF needs care. Both sides are represented in any Texas classroom and
both arguments are stated here in their own terms. Do not editorialize and do not
invite students to share personal experiences with firearms.

IF DISCUSSION STARTS, redirect to the policy question rather than the cultural
one: what evidence would tell us whether permitless carry changed outcomes? That
is answerable in principle and keeps the room analytical.
  `);
}

/* 12 */
{
  const s = k.slide("How policy actually changes", "Influencing policy decisions");
  k.figure(s, "tx12_poverty_safety_net.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const routes = [
    ["Elections", "Change who makes the decision. Slow, but the most fundamental route."],
    ["Lobbying and testimony", "Change what current officeholders do. Committee hearings are open to anyone. Chapter 11."],
    ["Litigation", "Courts can invalidate or compel policy. Texas school finance was reshaped by decades of lawsuits."],
    ["Agency rulemaking", "Comment on proposed rules in the Texas Register. Few individuals do, which makes each comment weigh more. Chapter 18."],
    ["Constitutional amendment", "Texas routes many policy questions to the ballot. In 2025 voters decided on water funding, homestead exemptions, and bail."],
    ["Local government", "Cities, counties, and districts make policy directly, in meetings almost nobody attends. Chapter 7."],
  ];
  let y = 1.95;
  routes.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.55, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.65, y, w: 5.2, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.78;
  });
  N(s, `
TIMING: 6 minutes.

THE LITIGATION ROUTE DESERVES EMPHASIS in a Texas course. School finance in this
state was reshaped far more by the Edgewood line of cases than by any single
legislative session. When a legislature will not act, courts sometimes become the
route, and that is true for plaintiffs across the political spectrum.

THE AMENDMENT ROUTE IS DISTINCTIVELY TEXAN. Because the constitution restricts in
detail, policy questions other states settle by statute come to Texas voters
directly. Connect back to Chapter 2.

THE RULEMAKING ROUTE IS THE MOST UNDERUSED and the highest leverage per unit of
effort. Agencies must respond to significant comments, and almost all comments come
from regulated industry. One informed comment from an affected individual stands
out.
  `);
}

/* 13 */
{
  const s = k.discussion("Pause and think", "Trade-offs and evidence", [
    "Texas has among the lowest tax burdens and the highest uninsured rate in the country. Are those two facts connected, and if so, is the trade one you would make?",
    "Education Savings Accounts split Texas Republicans for years, with many rural members opposing because their districts have no private schools. What does that tell you about how policy interests actually form?",
    "Pick any policy in this chapter. What evidence would persuade you that you were wrong about it?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE BEST SINGLE CHOICE because it forces an honest trade-off rather than a
slogan. Both facts are true. Whether they are causally linked is genuinely
debated, and even if they are, whether the trade is worth it is a value judgment.
Insist students separate the empirical question from the value question.

Q2 IS THE SUBTLEST and the most useful for a Texas classroom. Geography shaped the
voucher fight more than party did. Students who see that stop explaining every
policy outcome by partisanship.

Q3 IS THE ONE TO USE IF THE ROOM IS TENSE. It redirects from position to
evidence, and a student who cannot answer it has learned something real about the
difference between a conviction and a conclusion.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 12 in the Trailblazer Trek: 8 sections, 1,605 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to state the strongest case on both sides before giving their own view.", C.GOLD],
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
    "Outcome 8 (issues, policies, and political culture of Texas) is primary. Outcome 2 is supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

A STRONG ASSIGNMENT for this chapter: have students pick one bill from the last
session, classify it using Lowi's typology, and predict from that classification
how contested its passage was. Then check the actual vote on Texas Legislature
Online. The framework usually predicts well, and when it does not, the exception
is interesting.

Because policy figures change every session, verify the numbers on the education
and health slides before teaching.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The budget", "Legislative Budget Board publishes the appropriations bill and fiscal analyses, the clearest statement of actual priorities. lbb.texas.gov"],
    ["Education", "Texas Education Agency for funding formulas and accountability data. tea.texas.gov"],
    ["Health", "Texas Health and Human Services Commission for Medicaid, CHIP, and eligibility rules. hhs.texas.gov"],
    ["Bills and votes", "Texas Legislature Online carries every bill, its history, and recorded votes. capitol.texas.gov"],
    ["Nonpartisan analysis", "Texas 2036 and the Texas Comptroller publish data-driven analyses of long-term state policy challenges."],
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

THE APPROPRIATIONS BILL IS THE BEST PRIMARY SOURCE in this chapter, and it is
free. Project the summary tables and ask students to rank the state's priorities
by dollars. The answer usually differs from what they expected, in both
directions.

Texas 2036 is a useful nonpartisan source for long-run data on education, health,
water, and workforce.
  `);
}

/* 16 */
{
  const s = k.closing("The question to leave with",
    "\u201CWho benefits, who pays,\nand who decided?\u201D",
    "Every policy in this chapter answers those three questions. Learn to ask them and you can analyze a policy you have never seen before.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

These three questions are the transferable skill of the chapter. They work on any
policy, in any state, at any level, including ones invented after this course
ends.

Good exit ticket: "Pick any policy from the news this week and answer the three
questions on the screen."

Preview Chapter 13: one policy area large enough to need its own chapter, where
the state exercises its most serious power over individuals.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 12 - Public Policy (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
