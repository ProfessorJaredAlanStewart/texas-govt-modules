/**
 * Chapter 14 — Financing State Government
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 14", "Financing State Government");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 14", "Financing State\nGovernment",
    "No income tax, a constitutional balanced budget, and thirty-one million people to serve. The arithmetic has to work somehow.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 14: FINANCING STATE GOVERNMENT
About 75 minutes with all three discussion pauses.

OPENING (3 min). Ask students how much they paid in Texas state income tax last
year. The answer is zero. Then ask whether that means Texas taxes them lightly.

Most say yes. The honest answer is more complicated: Texas relies on sales tax
and local property tax instead, and where the burden lands depends heavily on
income. That complication is the chapter.

THE FRAME: this is the chapter where every other chapter gets priced. Schools,
prisons, highways, Medicaid, and the courts all show up as line items here.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, compress the budget process and cut one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Verify dollar figures each biennium before teaching.", C.GOLD],
    ["\u2696", "Regressivity is the live argument", "Whether Texas taxes fairly is genuinely contested. Both cases appear in parallel with no verdict.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 14's five sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

VERIFY THE NUMBERS. Budget totals, the Rainy Day Fund balance, and revenue shares
change every biennium. The structure is stable; the figures are not. The
Comptroller's Biennial Revenue Estimate is the authoritative source.

THE TEACHING RISK is that finance feels abstract and dull. The fix is to keep
returning to the two things students can see: a receipt with sales tax on it and
a property tax statement. Everything else follows from those.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Identify", "the major sources of Texas state revenue."],
    ["Explain", "where the money goes and why education and health dominate."],
    ["Describe", "the biennial budget process and the comptroller's revenue estimate."],
    ["Distinguish", "regressive from progressive taxation and apply it to Texas."],
    ["Evaluate", "the trade-offs in a low tax, low service model."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #3 and #4. Objective 3 contains the constitutional constraint that
shapes everything, and Objective 4 is the analytical tool students need for the
final discussion.

If you compress, shorten #1 by pointing at the chart rather than narrating it.
  `);
}

/* 4 */
{
  const s = k.slide("Where the money comes from", "Revenue sources");
  k.figure(s, "tx14_sales_tax.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const rev = [
    ["Sales tax", "The largest single state source. A 6.25 percent state rate, with local add-ons bringing the combined rate as high as 8.25 percent."],
    ["Federal funds", "Roughly a third of all state revenue, largely for Medicaid, highways, and education. Chapter 3."],
    ["Franchise tax", "A tax on business margin, sometimes called the margins tax. Many small businesses fall below the threshold."],
    ["Severance taxes", "Levied on oil and natural gas production. Volatile, because they track energy prices."],
    ["Motor vehicle and fuel taxes", "Sales tax on vehicles plus a per gallon fuel tax that funds highways and schools."],
    ["Fees, lottery, and other", "Licenses, tuition, court fees, and the lottery, which is a small share of the total."],
  ];
  let y = 1.95;
  rev.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.55, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.65, y, w: 5.2, h: 0.74, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.8;
  });
  N(s, `
TIMING: 7 minutes.

THE HEADLINE: Texas has no personal income tax, and since 2019 a constitutional
amendment requires a statewide vote to create one. That is not merely a policy
choice anymore; it is entrenched.

THE LOTTERY IS THE BIGGEST MISCONCEPTION in this chapter. Students believe it
funds public education substantially. It contributes a small share of the
education budget, roughly in the low single digits as a percentage. Say the number
plainly, because the belief is widespread and wrong.

SEVERANCE TAX VOLATILITY explains a lot of Texas budget history. When oil prices
collapse, state revenue collapses with them, which is exactly why the Rainy Day
Fund exists. The 1980s oil bust is the formative example.

FEDERAL FUNDS AT ROUGHLY A THIRD is worth connecting back to Chapter 3. A state
that frequently litigates against Washington also depends on it for a third of its
budget.
  `);
}

/* 5 */
{
  const s = k.slide("Where the money goes", "State spending");
  k.figure(s, "tx14_state_budget.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const spend = [
    ["Education", "Public schools through the Foundation School Program, plus higher education. The largest category in the state budget.", C.INK],
    ["Health and human services", "Medicaid and CHIP dominate. The second largest category, and the fastest growing.", C.TEAL],
    ["Business and economic development", "Highways and transportation, funded largely by fuel taxes and federal dollars.", C.GOLD],
    ["Public safety and criminal justice", "TDCJ, DPS, and the courts. Chapters 6 and 13.", C.CRIM],
    ["General government and other", "The comparatively small cost of running the state's administrative machinery.", C.MUTE],
  ];
  let y = 1.95;
  spend.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.6, h: 0.82, rectRadius: 0.05, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.13, h: 0.82, rectRadius: 0.05, fill: { color: col } });
    s.addText(t, { x: M + 0.32, y: y + 0.1, w: 4.0, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.32, y: y + 0.4, w: 7.0, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.BODY, valign: "top" });
    y += 0.9;
  });
  N(s, `
TIMING: 6 minutes.

TWO CATEGORIES DOMINATE. Education and health and human services together account
for the large majority of state spending. Everything students argue about in
politics competes for what is left.

THE BUDGET IS THE PRIORITY STATEMENT. Repeat the line from Chapter 12: when you
want to know what a government values, read the appropriations bill rather than
the speeches.

MEDICAID GROWTH IS THE STRUCTURAL PRESSURE worth naming. It grows faster than
other categories because of caseload, medical inflation, and an aging population,
which squeezes everything else in every biennium. That is true regardless of who
holds office.

ASK: "If you had to cut five percent, where would you take it?" Students quickly
discover there are only two places large enough to matter, and both are politically
protected.
  `);
}

/* 6 */
{
  const s = k.slide("How Texas writes a two year budget", "The budget process");
  k.timeline(s, 1.95, [
    ["Step 1", "Revenue estimate", "The comptroller issues the Biennial Revenue Estimate before the session. The Legislature may not appropriate more than that figure."],
    ["Step 2", "Agencies request", "State agencies submit requests. The Legislative Budget Board and the Governor's Office of Budget and Policy review them."],
    ["Step 3", "The Legislature acts", "The LBB drafts the appropriations bill. House and Senate pass versions, and a conference committee reconciles them."],
  ], 2.55);
  k.timeline(s, 4.65, [
    ["Step 4", "Certification", "The comptroller must certify that the budget is within available revenue before it can take effect."],
    ["Step 5", "The governor", "Signs, or strikes individual spending items by line-item veto. The governor does not write the budget. Chapter 5."],
  ], 2.3);
  N(s, `
TIMING: 7 minutes.

THE PAY-AS-YOU-GO LIMIT IS THE CONSTITUTIONAL HEART of Texas finance. Article III
requires a balanced budget, and the comptroller's estimate sets the ceiling. Texas
cannot deficit spend for operations the way the federal government does.

THE COMPTROLLER'S POWER IS THE POINT STUDENTS MISS. One elected official, by
issuing a forecast, caps what 181 legislators may spend. If the estimate is
conservative, programs go unfunded. If it is optimistic, certification can fail.
That is enormous discretion held by an office most voters cannot name. Connect
back to Chapter 5.

THE GOVERNOR DOES NOT WRITE THE BUDGET. The LBB does. The governor's entry point
is the line-item veto at the end, applied to someone else's document.

THE BIENNIAL PROBLEM: Texas budgets two years ahead based on a forecast. A
recession, a pandemic, or an oil price collapse in between is absorbed by the
Rainy Day Fund or by a special session.
  `);
}

/* 7 */
{
  const s = k.slide("The savings account and the spending limit", "Two constitutional guardrails");
  k.figure(s, "tx14_rainy_day_fund.jpg", 8.5, 1.95, 4.2, 2.2, null);
  k.card(s, M, 1.95, 7.6, 2.45, "The Economic Stabilization Fund", "THE RAINY DAY FUND",
    "Created in 1988 after the oil bust, funded primarily by oil and gas severance tax collections above a 1987 benchmark.",
    "It has grown to one of the largest state reserves in the country. Spending from it generally requires a supermajority, which makes it politically hard to touch.");
  const limits = [
    ["Pay as you go", "Article III requires that appropriations stay within the comptroller's revenue estimate. No operating deficits."],
    ["The spending limit", "Growth in appropriations from certain state tax revenue is tied to estimated economic growth, and exceeding it requires a legislative vote."],
    ["Debt limits", "Texas restricts how much general obligation debt the state may carry relative to revenue."],
  ];
  let y = 4.6;
  limits.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.35, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.45, y, w: W - M * 2 - 2.45, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.8;
  });
  N(s, `
TIMING: 6 minutes.

THE RAINY DAY FUND ARGUMENT IS GENUINELY TWO-SIDED and worth presenting as such.
One view: a large reserve protects the state from the volatility that comes with
an energy economy, and it protects the bond rating. The other view: money sitting
unspent while schools, water systems, and mental health services go underfunded is
a cost, not a virtue. Both positions have serious adherents in both parties.

VERIFY THE BALANCE before teaching. It moves substantially between biennia.

THE 1988 ORIGIN STORY makes the fund make sense. The oil bust of the 1980s
devastated Texas revenue, and the fund was the institutional response to that
experience. Connect back to the severance tax volatility on slide 4.

THE SUPERMAJORITY REQUIREMENT is why the fund is easier to fill than to spend.
That was the design intent and it has worked as intended.
  `);
}

/* 8 */
{
  const s = k.discussion("Pause and think", "Constraints and choices", [
    "The comptroller's revenue estimate caps what the entire Legislature may spend. Should one elected official hold that much power over the budget, and what would a better arrangement look like?",
    "Texas budgets two years in advance and requires a supermajority to spend its reserves. Does that discipline protect the state, or does it leave real needs unmet while money sits idle?",
    "Texas voters amended the constitution in 2019 to require a statewide vote before any income tax could be created. Is entrenching a tax policy in the constitution wise, or does it tie the hands of future Texans facing circumstances we cannot foresee?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q3 IS THE BEST SINGLE CHOICE because it is a constitutional design question
rather than a tax preference question, which keeps the room analytical. The same
logic applies to any policy locked into a constitution: it protects a current
majority's decision against future majorities. Students can evaluate that
structure without agreeing about income taxes.

Q1 connects to Chapter 5 and works well if students remember the plural executive.

Q2 is the sharpest fiscal question. Push for specifics: what would you spend it
on, and what happens in the next downturn if you do?
  `);
}

/* 9 */
{
  const s = k.slide("Who actually bears the burden", "Regressive and progressive taxes");
  k.figure(s, "tx14_no_income_tax.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const defs = [
    ["Progressive", "Takes a larger percentage of income as income rises. The federal income tax is the standard example.", C.TEAL],
    ["Proportional", "Takes the same percentage from everyone, regardless of income. Sometimes called a flat tax.", C.GOLD],
    ["Regressive", "Takes a larger percentage of income from lower earners. Sales taxes work this way, because people with lower incomes spend a larger share of what they earn.", C.CRIM],
  ];
  let y = 1.95;
  defs.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.6, h: 1.05, rectRadius: 0.06, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.14, h: 1.05, rectRadius: 0.06, fill: { color: col } });
    s.addText(t, { x: M + 0.34, y: y + 0.13, w: 3.0, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.34, y: y + 0.45, w: 7.0, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.15;
  });
  k.defBox(s, M, 5.5, W - M * 2, 1.5, "Why this matters for Texas",
    "Texas relies on sales tax and local property tax rather than an income tax. Studies of state tax systems consistently find that this combination takes a larger share of income from lower earning households than from higher earning ones. That finding is about the structure of the taxes, not about anyone's intent.");
  N(s, `
TIMING: 7 minutes. The analytical core of the chapter.

WORK A CONCRETE EXAMPLE and the concept lands immediately. Two Texans buy the same
\$30,000 truck and pay identical sales tax. For someone earning \$40,000 that tax
is a large share of income. For someone earning \$400,000 it is a rounding error.
Same dollars, very different burden.

SAY THE FINDING CAREFULLY. Analyses of state tax systems consistently classify
Texas as regressive in structure. That is a measurement of who pays what share of
income, not an accusation. Groceries and medicine are exempt from Texas sales tax
specifically to soften this effect, which is worth mentioning as a real
mitigation.

PROPERTY TAX IS THE OTHER HALF and it is where most Texans feel taxation. Renters
pay it indirectly through rent. Students often do not realize that.

SET UP THE NEXT SLIDE. This is the evidence; the argument about whether the trade
is worth it comes next.
  `);
}

/* 10 */
{
  const s = k.slide("Two readings of the Texas model", "Low tax, low service");
  k.twoSides(s, 1.95,
    "The case for the Texas model", [
      "Low taxes attract employers and residents, and Texas has led the nation in job and population growth",
      "No income tax lets people keep what they earn and decide for themselves how to spend it",
      "A balanced budget requirement and large reserves protect the state's finances and its bond rating",
      "Consumption taxes are partly voluntary, and groceries and medicine are exempt",
    ],
    "The case against", [
      "The tax structure takes a larger share of income from lower earning households",
      "Texas ranks low nationally in per pupil education spending and has the highest uninsured rate",
      "Sales and severance revenue swing sharply with the economy and with energy prices",
      "Costs shift to local property taxpayers, which is why property tax relief keeps returning to the ballot",
    ], 3.0);
  k.defBox(s, M, 5.15, W - M * 2, 1.85, "What both sides agree on",
    "Texas has chosen a low tax, low service model, and that choice produces real consequences in both directions. Growth and affordability are genuine, and so are the outcomes in coverage and school funding. The disagreement is about whether the trade is worth it, which is a value judgment rather than a factual dispute.");
  N(s, `
TIMING: 8 minutes with discussion. Handle evenhandedly.

THE CLOSING BOX IS THE MOST USEFUL THING ON THIS SLIDE. Both columns contain
accurate claims. The factual record is largely agreed; the disagreement is about
how to weigh growth and affordability against public service levels. Naming that
distinction is what separates a government class from an argument.

THE PROPERTY TAX POINT deserves emphasis because it is where the model becomes
visible to ordinary Texans. Limiting state taxes pushes funding responsibility
toward local property taxes, which is why property tax relief has appeared on the
ballot repeatedly, including the homestead exemption increase voters approved in
2025.

IF STUDENTS PUSH FOR YOUR OPINION: "Both columns are true. Which matters more to
you is exactly the question Texas voters decide, and I am not going to decide it
for you."
  `);
}

/* 11 */
{
  const s = k.slide("The money you actually see", "Property tax and local finance");
  k.figure(s, "tx14_property_tax.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const pts = [
    ["Local, not state", "Texas has no state property tax. Every dollar is levied by cities, counties, school districts, and special districts. Chapter 7."],
    ["Appraisal districts", "A county appraisal district sets the value. The taxing entities set the rates. Two different decisions by two different bodies."],
    ["Homestead exemption", "Reduces the taxable value of a primary residence. Voters raised the school district exemption to $140,000 in 2025."],
    ["The school finance link", "Because schools rely on local property wealth, recapture redistributes from property-rich to property-poor districts. Chapter 12."],
    ["Protest rights", "Property owners may challenge an appraisal before the appraisal review board. The process is public and underused."],
  ];
  let y = 1.95;
  pts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.35, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.45, y, w: 5.4, h: 0.84, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.92;
  });
  N(s, `
TIMING: 6 minutes.

THIS IS THE MOST PRACTICALLY USEFUL SLIDE IN THE CHAPTER. Every student either
pays property tax or pays it through rent.

THE TWO-DECISION POINT IS THE ONE PEOPLE GET WRONG. The appraisal district sets
value. The city, county, school district, and college district each set a rate.
When a tax bill rises, the cause could be either, and people often direct
complaints to the wrong body.

THE PROTEST RIGHT IS REAL AND UNDERUSED. Anyone may protest an appraisal, the
hearing is free, and many protests succeed at least partly. Telling students this
is concrete civic service.

BRING A SAMPLE TAX BILL if you can. Seeing five taxing entities on one statement
does more than any explanation, and it ties Chapters 7, 12, and 14 together in a
single document.
  `);
}

/* 12 */
{
  const s = k.discussion("Pause and think", "Paying for what we want", [
    "Texas has among the lowest state tax burdens and among the highest local property taxes. Has the state genuinely kept taxes low, or shifted where they are collected?",
    "Studies find the Texas tax structure takes a larger share of income from lower earning households. Is that an acceptable cost of having no income tax, and who should decide?",
    "If you had to raise state revenue by ten percent, where would you get it, and who would object?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE BEST SINGLE CHOICE. It is empirically answerable and it cuts against
easy talking points in both directions. Texas state taxes are genuinely low, and
Texas property taxes are genuinely high. Whether the total burden is low depends
on the household. That is a real analytical finding, not a partisan claim.

Q3 IS THE BEST EXERCISE if you want students doing the work rather than
debating. Every option has an organized opponent: raising sales tax hits lower
earners, raising the franchise tax draws business opposition, an income tax now
requires a statewide vote, and cutting exemptions creates identifiable losers.
Students discover why budgets are hard.

Q2 is the values question and should not be resolved by you.
  `);
}

/* 13 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 14 in the Trailblazer Trek: 5 sections, 1,245 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh the low tax, low service trade-off.", C.GOLD],
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

THE BEST ASSIGNMENT: have students find their own county appraisal district site,
look up a sample property, and list every taxing entity on it. It takes fifteen
minutes and connects Chapters 7, 12, and 14 in one concrete artifact.

Verify all dollar figures against the current Biennial Revenue Estimate before
teaching. The structure is stable; the numbers are not.
  `);
}

/* 14 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["Revenue", "Texas Comptroller publishes the Biennial Revenue Estimate and monthly revenue data, the authoritative source for this chapter. comptroller.texas.gov"],
    ["The budget", "Legislative Budget Board publishes the appropriations bill, fiscal notes, and summaries of the budget by article. lbb.texas.gov"],
    ["Property tax", "Your county appraisal district posts values, rates, exemptions, and the protest process."],
    ["Comparative data", "Census Bureau state government finance data and the Tax Foundation allow state-by-state comparison of tax burden and structure."],
    ["Analysis", "Every Texan and the Texas Public Policy Foundation publish fiscal analyses from different perspectives. Reading both is a useful exercise."],
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

READING TWO ANALYSES OF THE SAME BUDGET from organizations with different
perspectives is one of the most effective critical thinking exercises available in
this course. Both cite real numbers. They emphasize different ones. Students learn
more from that comparison than from any lecture on bias.
  `);
}

/* 15 */
{
  const s = k.closing("The question to leave with",
    "\u201CLow taxes compared to what,\nand paid by whom?\u201D",
    "Both halves of that question have answers, and they are not the same answer for every Texan.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The question resists slogans in both directions. Texas state taxes are low. Texas
property taxes are not. Burden depends on income and on whether you own property.
All of that is measurable, and none of it settles the value question.

Good exit ticket: "Name one thing Texas does well because taxes are low, and one
thing it does poorly for the same reason."

Preview Chapter 15: we have covered institutions, participation, policy, and
money. The last question is how Texans learn about any of it.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 14 - Financing State Government (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
