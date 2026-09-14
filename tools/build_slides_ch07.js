/**
 * Chapter 7 — Local Government in Texas
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 7", "Local Government in Texas");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 7", "Local\nGovernment",
    "The government that picks up your trash, polices your street, and sets your property tax bill. Also the one you are least likely to vote for.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 7: LOCAL GOVERNMENT IN TEXAS
About 75 minutes with all three discussion pauses.

OPENING (3 min). Ask students to name their mayor. Then their county judge. Then
a single member of their school board. Then anyone on a water district or
hospital district board.

The room goes quiet fast, usually by question two. That silence is the chapter.
These are the governments with the most direct daily effect on students' lives
and the lowest turnout in their elections.

Do not shame anyone. Most Texans cannot answer either. Use it as the honest
starting point for why local government is worth a class period.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, compress county officials into the overview and cut one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Swap my Tarrant County and Fort Worth examples for your own community.", C.GOLD],
    ["\u2696", "Preemption is contested", "The state and city conflict is politically live in both directions. The notes give you both cases.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 7's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

LOCALIZE THIS DECK. It is the chapter where local examples matter most. Replace
Fort Worth and Tarrant County with your own city and county, and pull one real
agenda item from a recent council or commissioners court meeting. Ten minutes of
prep transforms the class.

The preemption material is genuinely contested and maps onto an urban and rural
divide rather than a simple partisan one. Present both sides.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Explain", "why local governments in Texas have only the power the state grants them."],
    ["Distinguish", "general law cities from home rule cities."],
    ["Compare", "council-manager and strong-mayor forms of city government."],
    ["Describe", "county structure and the commissioners court."],
    ["Analyze", "special districts and why they operate largely unnoticed."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #1 and #5. Objective 1 is the legal foundation students most often get
wrong, since they assume cities have independent authority. Objective 5 is the
surprise of the chapter.

If you compress anything, compress #4.
  `);
}

/* 4 */
{
  const s = k.slide("Local government exists because the state says so", "The legal relationship");
  k.figure(s, "tx7_three_flags.jpg", 8.45, 1.95, 4.25, 2.3, null);
  s.addText([
    { text: "Federalism divides power between the national government and the states, and both are sovereign. ", options: { color: C.BODY } },
    { text: "Local governments are different. They are creatures of the state.", options: { bold: true, color: C.INK } },
    { text: " Texas creates them, defines what they may do, and could reorganize or abolish them. Cities and counties have no independent constitutional standing against the state.", options: { color: C.BODY } },
  ], {
    x: M, y: 1.95, w: 7.55, h: 1.5, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  k.defBox(s, M, 3.6, 7.55, 1.5, "Dillon's Rule",
    "The traditional principle that local governments possess only the powers expressly granted by the state, those necessarily implied by a granted power, and those essential to the purpose of the government. Anything doubtful is resolved against the local government.");
  k.statCallout(s, M, 5.3, W - M * 2, 1.05, "5,300+",
    "units of local government operate in Texas: 254 counties, more than 1,200 cities, over 1,000 school districts, and thousands of special districts.");
  s.addText("Texas is a federal partner to Washington and a unitary sovereign over its own cities. That asymmetry explains most of this chapter.", {
    x: M, y: 6.5, w: W - M * 2, h: 0.45, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, italic: true, color: C.INK, valign: "top",
  });
  N(s, `
TIMING: 6 minutes.

THE CLOSING LINE IS THE CONCEPTUAL PAYOFF and connects directly to Chapter 3.
Texas insists on its sovereignty against Washington and exercises unitary
authority over its own cities. Students who notice that asymmetry understand both
chapters better. Note also that it is not hypocrisy in a legal sense: the
Constitution makes states sovereign and says nothing about cities.

DILLON'S RULE IS THE VOCABULARY TO OWN. When a city asks whether it may do
something, the default answer under Dillon's Rule is no unless the state said
yes. Home rule, on the next slide, flips that default for larger cities.

THE 5,300 FIGURE surprises students every time. Ask how many governments they
think they live under. Most guess two or three. The real answer is usually five
or six.
  `);
}

/* 5 */
{
  const s = k.slide("Two kinds of Texas cities", "General law and home rule");
  const cw = (W - M * 2 - 0.4) / 2;
  const kinds = [
    ["GENERAL LAW CITY", "Under 5,000 population", [
      "May exercise only powers the state expressly grants",
      "Structure and authority set by state statute",
      "Most Texas cities, by count",
      "Dillon's Rule applies in full",
    ], C.TEAL],
    ["HOME RULE CITY", "Over 5,000, by adopting a charter", [
      "May do anything not prohibited by state law or the constitution",
      "Writes and amends its own charter by local vote",
      "Most Texans, by population, live in one",
      "May adopt initiative, referendum, and recall",
    ], C.GOLD],
  ];
  kinds.forEach(([t, sub, items, col], i) => {
    const x = M + i * (cw + 0.4);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 3.3, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 0.92, rectRadius: 0.08, fill: { color: col } });
    s.addText(t, { x: x + 0.28, y: 2.08, w: cw - 0.56, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.WHITE, valign: "top" });
    s.addText(sub, { x: x + 0.28, y: 2.44, w: cw - 0.56, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: "F0E6D2", valign: "top" });
    s.addText(items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j !== items.length - 1 } })), {
      x: x + 0.28, y: 3.02, w: cw - 0.56, h: 2.1, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 18, paraSpaceAfter: 7, valign: "top",
    });
  });
  k.defBox(s, M, 5.45, W - M * 2, 1.45, "The distinction that matters",
    "A general law city asks whether the state gave it permission. A home rule city asks whether the state took the power away. Same question, opposite default, and it decides what a city can attempt without going to Austin first.");
  N(s, `
TIMING: 6 minutes.

THE DEFAULT IS THE WHOLE LESSON. Write both questions on the board side by side.
General law: did the state say I may? Home rule: did the state say I may not?

FIVE THOUSAND IS THE THRESHOLD, and adopting a charter requires a local election.
A city that crosses 5,000 does not become home rule automatically; voters must
choose it.

INITIATIVE, REFERENDUM, AND RECALL exist in Texas only at the local level, and
only in home rule cities. Texas has no statewide initiative process, unlike
California. Students often assume they could petition a state law onto the
ballot. They cannot. That is worth stating clearly and connects to Chapter 8.

LOCALIZE: name your own city and say which kind it is.
  `);
}

/* 6 */
{
  const s = k.slide("Who actually runs a Texas city", "Municipal structure");
  k.figure(s, "tx7_city_council.jpg", 8.5, 1.95, 4.2, 2.3, null);
  const forms = [
    ["Council-manager", "An elected council sets policy and hires a professional city manager to run daily operations. The mayor presides but has limited independent executive power. The most common form in Texas, including Fort Worth, Dallas, and Austin."],
    ["Strong mayor", "An elected mayor holds real executive authority over departments, the budget, and the agenda. Houston is the large Texas example."],
  ];
  let y = 1.95;
  forms.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 7.6, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 14, bold: true, color: C.GOLD, valign: "top" });
    s.addText(d, { x: M, y: y + 0.36, w: 7.6, h: 1.0, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top" });
    y += 1.5;
  });
  k.twoSides(s, 4.95,
    "At-large council elections", [
      "Members elected citywide, accountable to the whole city",
      "Criticized for making it harder for geographically concentrated minority communities to elect candidates of choice",
    ],
    "Single-member districts", [
      "Each member elected from one part of town, closer to constituents",
      "Criticized for producing a turf mentality where members prioritize their own district over the city",
    ], 1.75);
  N(s, `
TIMING: 6 minutes.

THE COUNCIL-MANAGER FORM IS THE TEXAS NORM and it surprises students, who assume
mayors run cities. In most Texas cities the mayor is one vote on a council and
the manager runs the organization.

ASK: "Who is more accountable, an elected mayor you can vote out, or a hired
manager you cannot?" Real trade-off. The manager brings professional expertise
and continuity. The mayor brings direct accountability. Cities have chosen
differently.

THE AT-LARGE VERSUS DISTRICT DEBATE has genuine civil rights history behind it.
At-large systems were challenged under the Voting Rights Act in numerous Texas
cities because they could dilute minority voting strength. Many cities moved to
single-member districts or hybrid systems as a result. Connect to Chapter 16.

LOCALIZE: pull up your own city council's structure and say which system it uses.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Power closest to home", [
    "Texas cities have only the authority the state allows, yet cities deliver the services residents notice most. Should cities have independent constitutional standing the way states do?",
    "Most Texas cities hire a professional manager rather than empowering an elected mayor. Does that make city government more competent, less democratic, or both?",
    "You can name your governor. Can you name your city council member? What does that gap suggest about where attention goes and where power actually operates?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q3 IS THE BEST OPENER because it is personal and non-partisan. The honest answer
is that attention follows media coverage, and media coverage follows scale and
conflict. Local government is consequential and boring, which is a dangerous
combination for accountability.

Q1 is the structural question. Some states do give cities constitutional home
rule protection. Texas gives statutory home rule that the Legislature can narrow,
which sets up the preemption slide.

Q2 produces good disagreement. Students who value expertise and students who
value accountability will split, and both are defensible.
  `);
}

/* 8 */
{
  const s = k.slide("The county is the state's local arm", "County government");
  k.figure(s, "tx7_texas_county_map.jpg", 8.5, 1.95, 4.2, 2.25, null);
  s.addText("All 254 Texas counties share the same structure, whether they serve 64 people or 4.8 million. Counties are general law units: they administer state functions such as courts, jails, records, roads, and elections, and they cannot pass ordinances the way home rule cities can.", {
    x: M, y: 1.95, w: 7.6, h: 1.15, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  k.defBox(s, M, 3.25, 7.6, 1.5, "The commissioners court",
    "The governing body of a Texas county, made up of the county judge, elected countywide, and four county commissioners elected from precincts. Despite the name it is an administrative body, not a court, though in smaller counties the county judge also hears certain cases.");
  const facts = [
    ["Same structure for every county", "Loving County with about 64 residents and Harris County with 4.8 million operate under identical rules."],
    ["No ordinance power", "Counties generally cannot regulate the way cities do, which limits their response to growth in unincorporated areas."],
    ["Road building by precinct", "Each commissioner has historically overseen roads in their own precinct, which critics call inefficient and defenders call responsive."],
  ];
  let y = 4.95;
  facts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 3.0, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 3.15, y, w: W - M * 2 - 3.15, h: 0.62, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.68;
  });
  N(s, `
TIMING: 6 minutes.

THE ONE-SIZE-FITS-ALL PROBLEM is the analytical point. Loving County and Harris
County have the same governing structure. Ask whether that makes sense. It is
hard to defend on the merits, and the reason it persists is constitutional:
changing it requires amending Article IX and a statewide vote.

THE NAME CONFUSION IS WORTH CLEARING UP IMMEDIATELY. The commissioners court is
not a court. The county judge is often not a lawyer. Both names are historical
holdovers that confuse everyone who encounters them.

UNINCORPORATED AREAS are the practical consequence students can see. Because
counties lack ordinance power, development just outside city limits often
proceeds with minimal regulation. In fast-growing metro areas this produces real
disputes over drainage, roads, and utilities.
  `);
}

/* 9 */
{
  const s = k.slide("A county full of separately elected officials", "County officials");
  k.figure(s, "tx7_commissioners_court.jpg", 8.55, 1.95, 4.15, 2.2, null);
  const officials = [
    ["County judge", "Presides over the commissioners court, handles budget and administration, leads emergency management, and in smaller counties hears certain cases."],
    ["Commissioners", "Four, elected by precinct. Set the budget and tax rate with the judge and oversee roads in their precincts."],
    ["Sheriff", "Chief law enforcement officer, runs the county jail, and provides bailiffs."],
    ["District and county attorneys", "Prosecute criminal cases and advise county government."],
    ["County and district clerks", "Keep records. The county clerk is the chief election officer in most counties."],
    ["Tax assessor-collector", "Collects property taxes and, in most counties, serves as voter registrar."],
  ];
  let y = 1.95;
  officials.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.4, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.5, y, w: 5.35, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.72;
  });
  k.defBox(s, M, 6.25, W - M * 2, 0.82, "The same design, one level down",
    "County government mirrors the state's plural executive. Nobody is in charge, every officer answers to voters directly, and the county judge cannot direct the sheriff or the clerk. The 1876 logic runs all the way down.");
  N(s, `
TIMING: 6 minutes. Candidate to compress in a 50 minute class.

THE CLOSING BOX IS THE POINT. Do not let students memorize six offices without
seeing the pattern. Counties replicate the plural executive: fragmented power, no
chain of command, every official independently elected.

TWO OFFICES DESERVE SPECIAL MENTION because of Chapter 8. The county clerk runs
elections in most counties, and the tax assessor-collector serves as voter
registrar. Those are the officials who decide, in practice, how easy it is to
register and vote in a given county, and almost nobody votes in those races.

PATRONAGE: many county offices still operate without merit hiring systems.
Chapter 18 returns to this.
  `);
}

/* 10 */
{
  const s = k.slide("The governments nobody watches", "Special districts");
  k.figure(s, "tx7_school_district.jpg", 8.5, 1.95, 4.2, 2.35, null);
  s.addText("A special district is a unit of local government created for a single purpose. Texas has thousands of them, more than its cities and counties combined, and they tax, borrow, and set policy with almost no public attention.", {
    x: M, y: 1.95, w: 7.6, h: 0.9, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const types = [
    ["School districts", "More than 1,000 independent districts, each governed by an elected board of trustees that hires a superintendent and sets a tax rate."],
    ["Municipal utility districts", "MUDs finance water and sewer service for new development through bonds repaid by property taxes."],
    ["Hospital and health districts", "Operate public hospitals and clinics, often the safety net provider in a county."],
    ["Community college districts", "Including this one, governed by an elected board with taxing authority."],
    ["Others", "Water, drainage, flood control, transit, emergency services, library, and appraisal districts."],
  ];
  let y = 2.95;
  types.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.5, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.6, y, w: 5.25, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.68;
  });
  k.defBox(s, M, 6.25, W - M * 2, 0.82, "Why this matters more than it sounds",
    "Special districts levy a large share of the property taxes Texans pay, and their elections are held on dates almost nobody marks. A seat can be decided by a few dozen votes. This is the lowest-attention, highest-leverage arena in Texas government.");
  N(s, `
TIMING: 7 minutes. The most surprising slide in the chapter.

LEAD WITH THE TAX BILL. Ask students, or their parents, to look at an actual
property tax statement. It lists several taxing entities: city, county, school
district, college district, hospital district, MUD. Most people have never read
it line by line. That single document makes special districts real.

THE COMMUNITY COLLEGE POINT IS THE BEST ONE IN THE ROOM. Your students attend an
institution governed by an elected board with taxing authority. Ask if anyone can
name a trustee. Almost no one can, and they are directly affected by that board's
decisions on tuition and programs.

MUDS ARE THE ONE TO EXPLAIN CAREFULLY. A developer can petition to create a MUD,
which issues bonds to pay for water and sewer infrastructure, repaid through
property taxes on the homes built there. Buyers often do not realize the tax rate
until after purchase. Defenders say MUDs make housing possible at the edge of
metros. Critics point to the disclosure problem and the debt.

THE LEVERAGE POINT connects to Chapters 8 and 18: where turnout is lowest,
individual participation counts for most.
  `);
}

/* 11 */
{
  const s = k.slide("When Austin overrules city hall", "Preemption");
  k.figure(s, "tx7_fort_worth_city_hall.jpg", 8.5, 1.95, 4.2, 2.2, null);
  s.addText("Because cities are creatures of the state, the Legislature can override local ordinances. As Texas cities have grown more urban and more liberal while the Legislature has remained conservative, preemption has become one of the sharpest conflicts in state politics.", {
    x: M, y: 1.95, w: 7.6, h: 1.0, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  k.twoSides(s, 3.1,
    "The case for state preemption", [
      "A single statewide standard is simpler for businesses operating in many cities",
      "A patchwork of local rules creates confusion and compliance costs",
      "Cities are state subdivisions, so the Legislature is acting within its clear authority",
      "State law protects residents from overreaching local regulation",
    ],
    "The case for local control", [
      "Texas political culture has long championed local control and government closest to the people",
      "Cities face problems the Legislature does not, and it meets only 140 days every two years",
      "Local officials are directly accountable to the residents affected",
      "Broad preemption can strip cities of tools before any problem appears",
    ], 2.6);
  s.addText("Notice that both sides invoke Texas principles. This is not a simple partisan fight; it is a genuine argument about which level should decide.", {
    x: M, y: 5.9, w: W - M * 2, h: 0.5, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, italic: true, color: C.INK, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 7 minutes with discussion.

THE IRONY IS THE TEACHING MOMENT, and you can name it without taking a side.
Texas political culture prizes local control and resists distant authority. In
the Texas and Washington relationship, Austin makes the local control argument.
In the Austin and city relationship, Austin makes the uniformity argument. The
same officials can hold both positions consistently only if the principle is
about the specific constitutional relationship rather than about localism as
such. Let students work that out.

KEEP IT STRUCTURAL. Ask: "Is your answer about who should decide, or about
whether you like the policy in question?" That question does more work than any
example, and it applies to students on every side.

The closing line matters. Both columns cite real Texas values.
  `);
}

/* 12 */
{
  const s = k.discussion("Pause and think", "Which level should decide?", [
    "Texas prizes local control against Washington and limits local control against its own cities. Is there a consistent principle that supports both positions, or is the principle really about which level you currently agree with?",
    "Special districts levy a large share of your property taxes, and their elections draw almost no voters. Is that a failure of citizens, a failure of design, or both?",
    "You live under roughly five or six governments. If you could abolish one layer of Texas local government, which would you pick, and what would you lose?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE BEST SINGLE CHOICE and it is genuinely hard. There IS a consistent
principle available: states are constitutional sovereigns and cities are state
subdivisions, so the two relationships are legally different. Students who find
that principle have done real work. Students who conclude it is about preference
have also made a defensible argument. Either way they must reason.

Q2 has no comfortable answer. Design and citizenship both contribute. Elections
held on obscure dates with no media coverage make participation costly, and
citizens still choose not to pay that cost.

Q3 is a good closing exercise. Students usually target special districts, then
discover those districts run their schools and hospitals. The lesson is that
consolidation has costs.
  `);
}

/* 13 */
{
  const s = k.slide("Where a citizen actually has leverage", "Getting involved");
  const places = [
    ["\u2691", "City council", "Meets regularly, posts agendas in advance, and takes public comment. A three minute comment is a formal part of the record.", C.TEAL],
    ["\u2696", "Commissioners court", "Sets the county budget and property tax rate in open session. Fewer people attend than almost any other public meeting.", C.GOLD],
    ["\u270E", "School and district boards", "Elected, with taxing authority, and often decided by a few hundred votes or fewer.", C.CRIM],
    ["\u2611", "Local elections", "Frequently held on their own dates with single-digit turnout. Your vote carries the most weight here by a wide margin.", C.INK],
  ];
  k.rows(s, 1.95, places, { labelW: 2.85, rowH: 1.0, gap: 0.08 });
  k.defBox(s, M, 6.23, W - M * 2, 0.82, "The arithmetic of attention",
    "A statewide race is decided by millions of votes. A school board seat can be decided by a few dozen. The same hour of civic effort is worth far more locally, which is exactly backwards from where most people spend their attention.");
  N(s, `
TIMING: 5 minutes.

THIS SLIDE SATISFIES the civic engagement side of the course and pairs directly
with Texas In Action activities if you assign them.

THE ARITHMETIC IS THE ARGUMENT. Do it on the board. A statewide race: millions of
votes, your share is vanishing. A school board race in a low-turnout May election:
a few hundred votes, your vote and the five friends you bring are measurable.

MAKE IT CONCRETE: pull up your own city's council agenda for the next meeting
and read one item aloud. Students are usually startled that it is public, posted
in advance, and open to comment.

A GOOD ASSIGNMENT: attend one local public meeting and write a page on what
happened. It is the single most effective civic engagement assignment in this
course, and the Texas In Action menu includes it.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 7 in the Trailblazer Trek: 8 sections, 1,745 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh local control against statewide uniformity.", C.GOLD],
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
    "Outcome 2 (state and local political systems and their relationship with the federal government) is primary. Outcome 8 is supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

THE HIGHEST-VALUE ASSIGNMENT in this chapter is attending one local public
meeting, city council, commissioners court, or a school board, and writing a
short reflection. Students consistently report it as the moment government
stopped feeling abstract.

If you use Texas In Action, the commissioners court activity pairs directly with
this chapter.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The constitution", "Texas Constitution, Article IX on counties and Article XI on municipal corporations. statutes.capitol.texas.gov"],
    ["Cities", "Texas Municipal League publishes guidance on home rule, general law cities, and current preemption legislation. tml.org"],
    ["Counties", "Texas Association of Counties explains county structure and the duties of each elected office. county.org"],
    ["Special districts", "Texas Comptroller maintains data on special purpose districts, their debt, and their tax rates. comptroller.texas.gov"],
    ["Your own government", "Your city, county, and school district post agendas, budgets, and tax rates online. These are the best classroom sources available."],
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

THE BEST SOURCE IN THIS CHAPTER IS A PROPERTY TAX BILL. Every taxing entity is
listed with its rate. Bring a redacted one, or pull a sample from your county
appraisal district, and walk the lines. Students see the five governments they
live under in one document.

Your own city and county websites beat any textbook for this chapter. Use them.
  `);
}

/* 16 */
{
  const s = k.closing("The question to leave with",
    "\u201CWho decided that,\nand when did they meet?\u201D",
    "Almost every local decision was made in a public meeting, posted in advance, that almost nobody attended. The door was open. That is the good news and the problem at once.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The point is not that local government is secretive. It is that local government
is almost entirely open and almost entirely unwatched. Agendas are posted,
meetings are public, budgets are online. The barrier is attention, not access.

Good exit ticket: "Find the next meeting date and agenda for one local government
that taxes you. Name one item on it."

Preview Chapter 8: we have now covered who governs Texas at every level. Next,
the mechanism that is supposed to connect those governments to the people, and
why fewer Texans use it than in almost any other state.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 07 - Local Government (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
