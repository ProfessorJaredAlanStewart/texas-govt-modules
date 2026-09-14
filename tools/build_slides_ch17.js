/**
 * Chapter 17 — Energy, Water, and the Environment
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 17", "Energy, Water, and the Environment");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 17", "Energy, Water,\nand Environment",
    "Texas built its own power grid so Washington could not regulate it. In February 2021, Texans found out what that meant.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 17: ENERGY, WATER, AND THE ENVIRONMENT
About 75 minutes with all three discussion pauses.

OPENING (3 min). Ask how many students remember February 2021. In most Texas
classrooms nearly every hand goes up, and many have vivid memories: no heat, no
water, boiling snow, days in the dark.

Then say the number: 246 confirmed deaths by the state's official count, with
some independent estimates considerably higher, and more than 4.5 million
customers without power.

HANDLE THIS WITH CARE. Some students lost family members. Do not ask anyone to
share. State the facts, explain the system, and let the material carry the weight.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, compress the water law section and cut one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Verify grid and water figures each session before teaching.", C.GOLD],
    ["\u2696", "Uri is personal here", "Students in your room lived it and some lost family. State facts, explain the system, and do not solicit stories.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 17's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

THIS CHAPTER IS THE BEST CASE STUDY IN THE COURSE because it makes every abstract
idea concrete. Federalism, regulatory agencies, the plural executive, the biennial
session, interest groups, and the tragedy of the commons all appear in a story
students personally lived.

TEACH IT AS SYSTEMS, NOT BLAME. The grid failure had multiple causes across
multiple actors. Students arrive with a villain already selected, and the villain
differs by student. The analytical payoff is seeing how a system fails rather than
picking a culprit.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Explain", "why Texas operates its own electric grid and what that means legally."],
    ["Analyze", "Winter Storm Uri as a systems failure and evaluate the response."],
    ["Describe", "the role of oil, gas, and renewables in the Texas economy and grid."],
    ["Explain", "the rule of capture and why Texas groundwater law is unusual."],
    ["Evaluate", "the trade-offs in Texas energy and environmental policy."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #1 and #4. Objective 1 is the federalism choice that defines Texas
energy policy. Objective 4 is the legal doctrine students find hardest to believe
is real.

Objective 2 is where the class discussion lives.
  `);
}

/* 4 */
{
  const s = k.slide("The grid Texas built to stay separate", "ERCOT and the island");
  k.figure(s, "tx7_texas_city_skyline.jpg", 8.5, 1.95, 4.2, 2.15, null);
  s.addText("The continental United States runs on three grids: the Eastern Interconnection, the Western Interconnection, and Texas. The Electric Reliability Council of Texas manages roughly ninety percent of the state's electric load.", {
    x: M, y: 1.95, w: 7.6, h: 0.9, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const pts = [
    ["Why it is separate", "Because the grid does not cross state lines in a way that triggers federal jurisdiction, ERCOT largely falls outside Federal Energy Regulatory Commission regulation of interstate transmission."],
    ["Who oversees it", "The Public Utility Commission of Texas, whose three commissioners are appointed by the governor, oversees ERCOT. The Legislature sets the statutory framework."],
    ["The trade", "Independence from federal regulation, and very limited ability to import power from neighboring states during a crisis."],
  ];
  let y = 3.0;
  pts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.25, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.35, y, w: 5.5, h: 1.0, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.08;
  });
  k.defBox(s, M, 6.23, W - M * 2, 0.82, "The federalism point",
    "This is Chapter 3 made physical. Texas accepted a real operational cost in exchange for regulatory independence, and that trade was deliberate rather than accidental.");
  N(s, `
TIMING: 7 minutes.

THE FEDERALISM CONNECTION IS THE INTELLECTUAL CORE. Texas structured its grid so
that it would not be subject to federal regulation of interstate transmission.
That is a sovereignty choice with an engineering consequence: limited ability to
import power when Texas generation fails.

SAY THE TRADE NEUTRALLY. Defenders argue state control allowed Texas to build a
competitive market and add generation faster than federally regulated regions.
Critics argue isolation removed a safety margin. Both are describing the same
design.

THE OVERSIGHT CHAIN MATTERS for Chapter 18. ERCOT is a nonprofit corporation
overseen by a commission appointed by the governor. Ask students who a voter
holds accountable for grid performance. The answer is genuinely indirect, which is
the plural executive problem appearing again.

VERIFY current interconnection projects before teaching; there have been proposals
to add limited external ties.
  `);
}

/* 5 */
{
  const s = k.slide("February 2021", "Winter Storm Uri");
  k.statCallout(s, M, 1.9, W - M * 2, 1.0, "246",
    "confirmed deaths by the state's official count, with some independent estimates considerably higher. More than 4.5 million customers lost power, many for days.");
  const chain = [
    ["1", "Extreme cold across the whole state", "Demand surged to winter records while temperatures fell far below design assumptions statewide, so no region could help another."],
    ["2", "Generation failed across fuel types", "Natural gas, coal, wind, and nuclear units all went offline. Gas was the largest single share of the lost capacity."],
    ["3", "The fuel supply froze too", "Wellheads, gathering lines, and processing equipment froze, so gas plants could not get fuel even when the plants themselves ran."],
    ["4", "Almost nowhere to import from", "Because ERCOT is largely isolated, Texas could not draw meaningfully on neighboring grids."],
    ["5", "Rolling outages became sustained", "Operators shed load to prevent a total collapse that could have taken weeks to restore."],
  ];
  let y = 3.1;
  chain.forEach(([n, t, d]) => {
    s.addShape(pres.ShapeType.ellipse, { x: M, y: y + 0.04, w: 0.4, h: 0.4, fill: { color: C.CRIM } });
    s.addText(n, { x: M, y: y + 0.04, w: 0.4, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    s.addText(t, { x: M + 0.58, y, w: 2.9, h: 0.36, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 3.6, y, w: W - M * 2 - 3.6, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.78;
  });
  N(s, `
TIMING: 8 minutes. The most important slide in the chapter.

TEACH IT AS A CHAIN, NOT A CULPRIT. Every link had to fail for the outcome to
occur. Students arrive with a single villain selected, usually wind turbines or
fossil fuel companies depending on what they heard, and the evidence does not
support either simple story.

THE FUEL SUPPLY POINT IS THE ONE MOST OFTEN MISSED. Even gas plants that could
run could not get gas, because wellheads and processing equipment froze. That is
why weatherizing power plants alone would not have solved it, and why later
legislation addressed the gas supply chain separately.

ON PROPORTIONS, BE PRECISE: all fuel types failed, and gas represented the largest
share of lost capacity simply because gas is the largest share of Texas
generation. Say that clearly; it defuses the politicized version in both
directions.

THE STATEWIDE SCOPE mattered. Normally an operator moves power from an unaffected
region. There was no unaffected region.
  `);
}

/* 6 */
{
  const s = k.slide("What the Legislature did next", "The response");
  k.figure(s, "tx12_environment_texas.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const resp = [
    ["Senate Bill 3, 2021", "Required weatherization of generation and of critical parts of the gas supply chain, with penalties, and created the Texas Electricity Supply Chain Map to identify critical facilities."],
    ["Senate Bill 2, 2021", "Restructured the ERCOT board, requiring members to live in Texas and adding governance changes after board resignations."],
    ["Texas Energy Fund", "Approved by voters in 2023, it provides low interest loans and grants to build and upgrade dispatchable generation."],
    ["Did it work?", "The grid held during a January 2026 winter storm, which supporters cite as evidence the reforms worked. Critics note that no single storm tests every failure mode."],
  ];
  let y = 1.95;
  resp.forEach(([t, d], i) => {
    const last = i === resp.length - 1;
    s.addText(t, { x: M, y, w: 2.35, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: last ? C.INK : C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.45, y, w: 5.4, h: 1.02, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.1;
  });
  N(s, `
TIMING: 6 minutes. Verify currency before teaching.

THE TIMING POINT IS WORTH NAMING. Uri hit in February 2021 while the Legislature
was in session. Had it struck in an even-numbered year, there would have been no
legislature to respond without a special session. Connect that back to Chapter 4
explicitly; it is the clearest illustration of what a biennial legislature means
in a crisis.

THE EVALUATION QUESTION IS GENUINELY OPEN. The grid performed well during a
January 2026 storm. That is real evidence. It is also true that a system can
survive one stress test and fail a different one. Present both and do not declare
the question settled.

THE GOVERNANCE CHANGES connect to Chapter 18: who sits on a board, where they
live, and who appoints them are accountability questions, not technical details.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Independence and its price", [
    "Texas built a separate grid to stay outside federal regulation, accepting limited ability to import power. Was that trade worth it, and would you answer differently in 2019 than in 2021?",
    "Every fuel type failed during Uri, yet public argument focused on single culprits. Why are systems failures so hard to discuss honestly, and what does that suggest about how we assign blame in politics?",
    "The grid held during a later storm. What evidence would actually tell you whether the reforms worked, rather than whether Texas got a milder test?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q2 IS THE BEST SINGLE CHOICE and the most transferable. Systems failures resist
narrative because stories need agents. The honest account involves five
interacting failures and no single villain, which satisfies nobody politically.
Students who see that become better analysts of every disaster they encounter
afterward.

Q3 IS THE BEST SCIENTIFIC THINKING QUESTION IN THE COURSE. It asks students to
specify what would count as evidence before knowing the answer. Push for
specifics: how cold, how long, how widespread, and which failure modes were
actually exercised.

Q1 is the federalism question and works especially well if you taught Chapter 3.
The hindsight framing is deliberate and honest.
  `);
}

/* 8 */
{
  const s = k.slide("The industry that built modern Texas", "Oil and gas");
  k.figure(s, "tx1_spindletop.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const og = [
    ["Scale", "Texas leads the nation in both crude oil and natural gas production, with the Permian Basin the largest producing region in the country."],
    ["Revenue", "Severance taxes on production fund state government and fill the Rainy Day Fund. When prices fall, state revenue falls with them. Chapter 14."],
    ["Regulation", "The Railroad Commission of Texas, three elected members, regulates oil and gas production. It has not regulated railroads for decades."],
    ["Volatility", "The 1980s bust devastated the Texas economy and led directly to the creation of the Economic Stabilization Fund in 1988."],
  ];
  let y = 1.95;
  og.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 1.85, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 1.95, y, w: 5.9, h: 0.94, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.02;
  });
  k.defBox(s, M, 6.1, W - M * 2, 0.95, "The name is not a joke, it is a lesson",
    "The Railroad Commission regulates oil and gas, not railroads. Voters elect three commissioners to an office whose name describes none of its duties, and turnout in those races is low. Accountability is difficult when the ballot itself is misleading. Chapters 8 and 18.");
  N(s, `
TIMING: 6 minutes.

THE RAILROAD COMMISSION NAME IS THE BEST TEACHING MOMENT and it is not trivia.
An office with real regulatory power over the state's largest industry carries a
name that tells voters nothing about what it does. Proposals to rename it have
repeatedly failed. Ask students how a voter is supposed to hold accountable an
official whose job they cannot identify from the ballot.

THE VOLATILITY POINT connects to Chapter 14 directly. Energy prices drive
severance revenue, severance revenue fills the Rainy Day Fund, and the fund exists
because the 1980s bust taught Texas what volatility costs.

DO NOT EDITORIALIZE about the industry. Its economic centrality to Texas is a
fact, and students hold varied views about its future. Present scale, revenue,
regulation, and volatility as the structure.
  `);
}

/* 9 */
{
  const s = k.slide("The other thing Texas leads the nation in", "Renewables and storage");
  s.addText("Texas produces more wind power than any other state, has rapidly expanded utility-scale solar, and has added battery storage faster than almost anywhere. The same state that leads in oil and gas leads in renewables.", {
    x: M, y: 1.9, w: W - M * 2, h: 0.75, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const pts = [
    ["Why it happened here", "Excellent wind and solar resources, vast open land, a streamlined interconnection process, and CREZ transmission lines built with bipartisan support to carry West Texas wind to cities.", C.TEAL],
    ["Dispatchable and intermittent", "Gas, coal, and nuclear can be dispatched on demand. Wind and solar depend on conditions. Batteries increasingly bridge the gap, particularly during evening peaks.", C.GOLD],
    ["Data centers and demand", "Rapid growth in data centers and electrification is driving load growth that ERCOT projects will continue, which raises the stakes for both generation and transmission planning.", C.CRIM],
  ];
  let y = 2.8;
  pts.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: W - M * 2, h: 1.25, rectRadius: 0.06, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.14, h: 1.25, rectRadius: 0.06, fill: { color: col } });
    s.addText(t, { x: M + 0.34, y: y + 0.14, w: 4.0, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.34, y: y + 0.46, w: W - M * 2 - 0.68, h: 0.68, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.33;
  });
  N(s, `
TIMING: 6 minutes.

THE DUAL IDENTITY IS THE POINT. Texas leads in fossil fuels and in wind, and
students who expect energy politics to sort cleanly find this genuinely
surprising. Economics, land, and resource quality drove renewable growth here more
than ideology did.

CREZ IS THE UNDERRATED STORY. Texas built billions of dollars of transmission
lines to carry West Texas wind to population centers, approved with bipartisan
support well before renewables were politically polarized. It is a rare example of
long-horizon infrastructure planning by a legislature that meets 140 days every
two years.

THE DISPATCHABLE DISTINCTION is the vocabulary students need to follow any grid
debate. Teach it plainly and without loading it: dispatchable means available on
command, intermittent means conditions-dependent, and storage changes the
calculation.

VERIFY LOAD GROWTH PROJECTIONS before teaching; ERCOT updates them frequently.
  `);
}

/* 10 */
{
  const s = k.slide("The law students find hardest to believe", "The rule of capture");
  k.figure(s, "tx12_policy_process.jpg", 8.5, 1.95, 4.2, 2.1, null);
  k.card(s, M, 1.95, 7.6, 2.45, "The rule of capture", "GROUNDWATER · SINCE 1904",
    "A landowner may pump as much groundwater from beneath their property as they can put to use, even if doing so drains a neighbor's well.",
    "Texas courts adopted this in 1904 and have declined to overturn it, leaving change to the Legislature. It is sometimes called the law of the biggest pump.");
  const water = [
    ["Surface water is different", "Rivers and streams belong to the state and are allocated by permit. Groundwater is governed by the rule of capture."],
    ["Groundwater districts", "Local conservation districts may regulate pumping within their boundaries, which softens the rule but does not replace it."],
    ["The commons problem", "Groundwater is a classic common good: hard to exclude users, and every gallon pumped is unavailable to everyone else. Chapter 12."],
  ];
  let y = 4.58;
  water.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.55, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.65, y, w: W - M * 2 - 2.65, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.81;
  });
  N(s, `
TIMING: 7 minutes.

STUDENTS DO NOT BELIEVE THIS IS REAL until you say it twice. Under the rule of
capture, a landowner may pump groundwater without liability to a neighbor whose
well goes dry. Texas is unusual among western states in retaining it.

THE PROPERTY RIGHTS DEFENSE IS SERIOUS and should be stated. Groundwater rights
are treated as real property, and courts have held that restricting them can raise
takings questions. That is why the Legislature, not the judiciary, has been left
to address the problem.

THE COMMONS CONNECTION IS THE ANALYTICAL PAYOFF. This is the tragedy of the
commons from Chapter 12 operating in Texas law. Each individual acts rationally by
pumping; collectively the aquifer depletes.

THE OGALLALA is the concrete example. It irrigates the High Plains and is
declining in parts of the region faster than it recharges, which has real
consequences for agriculture and for the towns that depend on it.
  `);
}

/* 11 */
{
  const s = k.slide("Paying for water before the crisis", "Planning and Proposition 4");
  const pts = [
    ["Regional planning", "The Texas Water Development Board coordinates sixteen regional planning groups that produce a state water plan every five years, projecting supply and demand fifty years out."],
    ["The gap", "State water plans have consistently projected that without new supply and infrastructure, Texas would face serious shortages during drought, with substantial economic losses."],
    ["Aging systems", "Many Texas water systems lose a significant share of treated water to leaks before it reaches a tap, and small rural systems often lack the capital to replace lines."],
    ["Proposition 4, 2025", "Voters approved dedicating up to $1 billion a year of existing sales tax revenue to the Texas Water Fund for twenty years, passing with roughly 71 percent support."],
  ];
  let y = 1.95;
  pts.forEach(([t, d], i) => {
    const last = i === pts.length - 1;
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: W - M * 2, h: 1.18, rectRadius: 0.06, fill: { color: C.WHITE }, line: { color: last ? C.GOLD : C.LINE, width: last ? 2 : 1 } });
    s.addText(t, { x: M + 0.28, y: y + 0.14, w: 4.2, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: last ? C.GOLD : C.INK, valign: "top" });
    s.addText(d, { x: M + 0.28, y: y + 0.46, w: W - M * 2 - 0.56, h: 0.62, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.19;
  });
  s.addText("Seventy-one percent approval is unusual in Texas politics. Water is one of the few issues where the coalition is not partisan.", {
    x: M, y: 6.62, w: W - M * 2, h: 0.42, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, italic: true, color: C.INK, valign: "top",
  });
  N(s, `
TIMING: 6 minutes.

THE 71 PERCENT NUMBER IS THE STORY. In a state where most issues split sharply,
water funding drew support across the political spectrum. Ask students why. The
usual answer is that water scarcity is concrete, visible, and affects agriculture,
cities, and industry alike, so the coalition is broad.

CONNECT TO CHAPTER 2. This is policy made by constitutional amendment because the
Texas Constitution restricts in detail. Other states would do this by statute.
Texas held an election.

THE FIFTY YEAR PLANNING HORIZON is worth noting as a counterexample to the usual
critique of the biennial legislature. Texas does long-range water planning
reasonably well; the harder part has been funding it.

VERIFY implementation details before teaching, since the fund is new.
  `);
}

/* 12 */
{
  const s = k.slide("Who decides what is clean enough", "Environmental regulation");
  k.twoSides(s, 1.95,
    "The case for state primacy", [
      "The TCEQ knows Texas geography, industry, and weather better than a federal agency does",
      "Texas has reduced some major pollutants substantially while growing its economy and population",
      "Federal rules can impose uniform standards poorly suited to regional conditions",
      "Delegated authority already lets Texas administer federal programs under state rules",
    ],
    "The case for stronger federal standards", [
      "Air and water cross state lines, so one state's choices affect its neighbors",
      "Texas has repeatedly sued to block federal air quality and emissions rules",
      "Some Texas regions have persistently failed to meet federal ozone standards",
      "A state competing for industry may face pressure to keep standards low",
    ], 2.9);
  k.defBox(s, M, 5.15, W - M * 2, 1.9, "How the system actually works",
    "The federal government sets standards under laws like the Clean Air Act and the Clean Water Act. The Texas Commission on Environmental Quality administers most of those programs under authority delegated by the EPA, writing and enforcing the rules that regulated facilities follow. Both levels are involved in nearly every environmental decision in Texas, which is Chapter 3 in operation.");
  N(s, `
TIMING: 7 minutes. Contested; present both columns evenhandedly.

THE DELEGATED AUTHORITY STRUCTURE IS THE KEY FACT and it resolves a lot of
confusion. Students think of this as Texas versus the EPA. In practice the EPA
sets standards and Texas administers most programs. Conflict arises over
particular standards, not over the basic arrangement.

THE INTERSTATE POINT IS THE STRONGEST ARGUMENT for federal involvement and it is
a genuine externality problem: air does not stop at the Red River. Present it as
the analytical case rather than as a political one.

THE TCEQ IS A SUNSET AGENCY, which connects directly to Chapter 18. Its
performance has been reviewed, and reviews have raised questions about enforcement
levels. That is documented rather than alleged.

DO NOT DECLARE A WINNER. Both columns contain accurate claims.
  `);
}

/* 13 */
{
  const s = k.discussion("Pause and think", "Commons, trade-offs, and time horizons", [
    "The rule of capture lets a landowner pump groundwater even if a neighbor's well goes dry. It is defended as a property right and criticized as a tragedy of the commons. Can both be true, and how would you resolve it?",
    "Water funding passed with 71 percent support while energy and environmental questions split Texans sharply. What makes an issue capable of building that kind of coalition?",
    "Texas plans water supply fifty years ahead while its Legislature meets 140 days every two years. Which problems does a government like this handle well, and which does it handle badly?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes.

Q1 IS THE BEST SINGLE CHOICE because both characterizations are accurate and the
tension is real rather than rhetorical. Groundwater is property under Texas law
and a shared resource in physical fact. Any solution has to reckon with both, which
is why groundwater districts exist as a partial compromise.

Q3 IS THE STRONGEST COURSE-WIDE QUESTION and a good one for the final weeks. Texas
handles slow, broadly shared, capital-intensive problems like water planning
reasonably well when a consensus exists. It handles fast-moving crises poorly,
because the Legislature is usually not in session. That is a structural
observation students can support with Uri, the water plan, and Chapter 4.

Q2 is the quiet one and pairs well with Chapter 15 on agenda setting.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 17 in the Trailblazer Trek: 8 sections, 1,435 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh independence, reliability, and cost.", C.GOLD],
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
    "Outcome 8 (issues, policies, and political culture of Texas) is primary. Outcomes 2 and 7 are supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

THIS IS THE BEST CAPSTONE CASE STUDY IN THE COURSE. If you assign a synthesis
paper, ask students to explain Uri using at least four concepts from earlier
chapters: federalism, the plural executive, the biennial session, regulatory
agencies, and interest groups all apply.

A GOOD LOCAL ASSIGNMENT: have students find their own regional water planning
group's projections for their county. The data is public and the fifty-year
outlook is often striking.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The grid", "ERCOT publishes real-time grid conditions, seasonal assessments, and load forecasts. ercot.com"],
    ["Utility regulation", "Public Utility Commission of Texas, for rules, rulemaking dockets, and ERCOT oversight. puc.texas.gov"],
    ["Oil and gas", "Railroad Commission of Texas, for production data and regulatory filings. rrc.texas.gov"],
    ["Water", "Texas Water Development Board, for the state water plan, regional plans, and the Texas Water Fund. twdb.texas.gov"],
    ["Environment", "Texas Commission on Environmental Quality, for permits, enforcement records, and air quality monitoring. tceq.texas.gov"],
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

THE ERCOT REAL-TIME DASHBOARD is the single best live teaching tool in this
course. Project it during class and show students current demand, the fuel mix
generating right now, and the reserve margin. It turns an abstract argument about
energy policy into a number moving on screen.

The state water plan is long but its executive summary is readable and the county
level projections make the scarcity argument concrete.
  `);
}

/* 16 */
{
  const s = k.closing("The question to leave with",
    "\u201CWhat are we willing to pay\nto avoid the next one?\u201D",
    "Reliability, water, and clean air are all purchased in advance or paid for afterward at a much higher price. February 2021 was the invoice.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The chapter's honest conclusion. Infrastructure is always paid for, either as
prevention or as disaster. The political difficulty is that prevention costs money
now for a benefit that is invisible when it works.

Good exit ticket: "Name one thing Texas should invest in now to avoid a larger
cost later, and say who would object and why."

Preview Chapter 18: the last chapter covers the people who actually carry all of
this out, the agencies that write the rules and run the programs, and the unusual
Texas tool built to keep them accountable.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 17 - Energy Water and the Environment (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
