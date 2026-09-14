/**
 * Chapter 9 — Elections and Campaigns
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 9", "Elections and Campaigns");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 9", "Elections and\nCampaigns",
    "How candidates get on the ballot, how they reach thirty-one million people, and who pays for it.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 9: ELECTIONS AND CAMPAIGNS
About 75 minutes with all three discussion pauses.

OPENING (2 min). Ask what a statewide campaign in Texas costs. Students guess
low, usually hundreds of thousands. Competitive statewide races here run into the
tens of millions, because Texas has some of the most expensive media markets in
the country and a candidate has to reach twenty of them.

Then ask the follow-up that frames the chapter: "Where does that money come
from, and what does it buy?"

DISTINGUISH THIS CHAPTER FROM CHAPTER 8. That one was about voters. This one is
about candidates and the machinery they use to reach them.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, cut the campaign techniques slide and one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Swap in a current Texas race your students know.", C.GOLD],
    ["\u2696", "Money is contested", "Citizens United is argued sincerely as free speech and as corruption risk. The notes give you both cases.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 9's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

THE BEST WAY TO TEACH THIS CHAPTER is to anchor it in one real race your students
have heard of, ideally a recent Texas statewide or congressional contest. Pull
the actual fundraising totals from the Texas Ethics Commission or the FEC and use
that race as the running example across every slide.

The campaign finance material is where the politics lives. Present Citizens
United as a genuine constitutional argument, not as a villain origin story.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Identify", "the types of elections Texas holds and when each occurs."],
    ["Compare", "open, closed, and top-two primary systems."],
    ["Describe", "how a candidate gets on the ballot in Texas."],
    ["Analyze", "campaign strategy, media, and the role of money."],
    ["Explain", "the Electoral College and what it means for Texas."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #2 and #4. Objective 2 is the comparative question that shows up in
assessment. Objective 4 carries the chapter's argument.

Objective 5 matters more than students expect. Texas now casts forty electoral
votes, second only to California, and most students do not know the number
changed after the 2020 census.
  `);
}

/* 4 */
{
  const s = k.slide("Four kinds of elections, one long cycle", "Types of elections");
  k.figure(s, "tx9_election_day.jpg", 8.5, 1.95, 4.2, 2.35, null);
  const types = [
    ["Primary", "March of even years. Voters choose each party's nominee. A majority is required to win."],
    ["Runoff", "May, between the top two finishers when nobody clears fifty percent. Turnout drops sharply."],
    ["General", "November of even years. Fills the office. A plurality wins, so no runoff is needed."],
    ["Special", "Any time, to fill a vacancy or decide a measure. Often decided by very few voters."],
  ];
  let y = 1.95;
  types.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 1.75, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.GOLD, valign: "top" });
    s.addText(d, { x: M + 1.85, y, w: 5.95, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top" });
    y += 0.88;
  });
  k.defBox(s, M, 5.6, W - M * 2, 1.35, "Why Texas elects statewide officials in midterm years",
    "Governor, lieutenant governor, attorney general, and comptroller are chosen in even years without a presidential race, such as 2022 and 2026. Separating state races from the presidential contest was meant to keep state issues from being swamped by national ones. The effect is that state officials are chosen in the lower turnout election.");
  N(s, `
TIMING: 6 minutes.

THE MAJORITY RULE IN PRIMARIES matters and students miss it. A primary requires
more than fifty percent. A general election needs only a plurality. That is why
Texas holds runoffs after primaries but never after general elections.

THE MIDTERM TIMING POINT IS THE ANALYTICAL ONE. Texas deliberately elects its
governor in non-presidential years. The stated rationale was insulating state
politics from national tides. The consequence is that the officials with the most
direct authority over Texans are chosen when the fewest Texans vote. Both things
are true; ask students which matters more.

RUNOFF TURNOUT IS OFTEN A FRACTION of the primary that preceded it, which means a
nominee can be selected by a very small slice of the electorate. Connect to
Chapter 8.
  `);
}

/* 5 */
{
  const s = k.slide("Who gets to vote in a party's primary", "Primary systems");
  k.figure(s, "tx9_primary_voters.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const systems = [
    ["Open primary", "Any registered voter may vote in one party's primary without registering with that party. Texas uses this system.", C.TEAL],
    ["Closed primary", "Only voters registered with the party may participate. Common in states with party registration.", C.GOLD],
    ["Top-two or jungle", "All candidates appear on one ballot regardless of party. The two highest finishers advance, even if they share a party. Used in California and Louisiana.", C.CRIM],
  ];
  let y = 1.95;
  systems.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.6, h: 1.15, rectRadius: 0.07, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.14, h: 1.15, rectRadius: 0.07, fill: { color: col } });
    s.addText(t, { x: M + 0.34, y: y + 0.14, w: 7.0, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.34, y: y + 0.48, w: 7.0, h: 0.58, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.25;
  });
  k.defBox(s, M, 5.75, W - M * 2, 1.2, "Two terms worth knowing",
    "Crossover voting is participating in the other party's primary because its race is more competitive or more consequential. Raiding is the deliberate attempt to nominate a weaker opponent. Open primaries make both possible, which is the main argument against them.");
  N(s, `
TIMING: 6 minutes.

TEXAS HAS NO PARTY REGISTRATION. Students frequently believe they are registered
as one party or the other. They are not. You choose at the polls, and you may
vote in only one party's primary per cycle.

THE STRATEGIC CONSEQUENCE IS REAL IN TEXAS. In much of the state the Republican
primary effectively decides the general election, so some Democratic-leaning
voters vote in it to have any influence at all. That is crossover voting, and it
is legal. Whether it is legitimate is the argument.

TOP-TWO IS WORTH EXPLAINING because the outcome surprises students: in a heavily
one-party area, the November ballot can end up with two candidates from the same
party. Supporters say this moderates candidates. Critics say it can shut a party
out of the general election entirely.

THE WHITE PRIMARY CONNECTION: the argument that a party is a private association
choosing its own nominees is the same argument Texas used to defend the white
primary until Smith v. Allwright rejected it. Worth naming.
  `);
}

/* 6 */
{
  const s = k.slide("Getting on the ballot", "Becoming a candidate");
  k.figure(s, "tx9_campaign_signs.jpg", 8.5, 1.95, 4.2, 2.3, null);
  const steps = [
    ["1", "Meet the qualifications", "Age, citizenship, and residency requirements vary by office and are set in the constitution or statute."],
    ["2", "File and pay", "File an application with the party or the appropriate authority and pay a filing fee, or submit a petition of signatures instead."],
    ["3", "Win the primary", "A majority is required. If nobody clears fifty percent, the top two meet in a May runoff."],
    ["4", "Build a campaign", "Raise money, hire staff or recruit volunteers, and build name recognition across a very large state."],
    ["5", "Win the general", "A plurality wins in November. No runoff follows."],
  ];
  let y = 1.95;
  steps.forEach(([n, t, d]) => {
    s.addShape(pres.ShapeType.ellipse, { x: M, y: y + 0.06, w: 0.42, h: 0.42, fill: { color: C.INK } });
    s.addText(n, { x: M, y: y + 0.06, w: 0.42, h: 0.42, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    s.addText(t, { x: M + 0.6, y, w: 2.3, h: 0.36, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.INK, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 3.0, y, w: 4.8, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.82;
  });
  k.defBox(s, M, 6.18, W - M * 2, 0.85, "Filing fees are lower than students expect",
    "Local offices often cost a modest fee, or nothing if a candidate gathers signatures instead. The barrier to running for a school board or city council seat is usually time and visibility rather than money. Many Texas local races draw no opponent at all.");
  N(s, `
TIMING: 6 minutes.

THE FILING FEE POINT IS THE EMPOWERING ONE and it corrects a real misconception.
Students assume running for office requires wealth. For statewide office, largely
true. For a school board or city council seat, the fee is modest and a petition
alternative exists. The obstacle is time, visibility, and the fact that most
people do not know the seat exists.

CONNECT TO CHAPTER 7 AND 8: many Texas local races are uncontested. If nobody
files, a seat with taxing authority is filled by default. A student in this room
could run.

INCUMBENCY IS THE STRUCTURAL ADVANTAGE to name here: name recognition, donor
networks, staff, media access, and in legislative races the franking privilege.
Challengers start far behind, which is why most incumbents win.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Nominations and access", [
    "In much of Texas, one party's primary effectively decides the general election. Should voters from the other party be able to participate in it, and what does your answer say about what a primary is for?",
    "Texas elects its governor in non-presidential years, deliberately, to separate state issues from national tides. Given that this also means lower turnout, was the trade worth it?",
    "Filing fees for local office are modest, yet many Texas local races draw a single candidate. If money is not the barrier, what is?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 IS THE SHARPEST because it forces students to define what a primary is. If a
primary is a private party function, outsiders should be excluded. If it is a
publicly funded election that determines who governs, exclusion is harder to
justify. Both positions have real defenders and the answer determines the rule.

Q3 IS THE MOST PRACTICAL and the most likely to change a student's behavior.
Likely answers: time, childcare, fear of public exposure, not knowing the seat
exists, and not seeing anyone like themselves in the role. All are real, and none
is money.
  `);
}

/* 8 */
{
  const s = k.slide("Reaching thirty-one million people", "Campaign strategy");
  k.figure(s, "tx9_tv_debate.jpg", 8.5, 1.95, 4.2, 2.2, null);
  s.addText("Texas is the hardest state in the country to campaign in. It spans twenty media markets, two time zones' worth of driving, and an electorate larger than most countries.", {
    x: M, y: 1.95, w: 7.6, h: 0.7, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const strat = [
    ["Name recognition", "The first and hardest task. A candidate nobody has heard of cannot win, regardless of qualifications."],
    ["Targeting", "Campaigns use voter files and data to identify likely supporters and persuadable voters, then spend accordingly."],
    ["Mobilization versus persuasion", "Turning out existing supporters is cheaper than changing minds. Most modern campaigns spend more on the former."],
    ["Message discipline", "Saying the same thing repeatedly, because most voters encounter a campaign only briefly and incidentally."],
  ];
  let y = 2.75;
  strat.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.5, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.6, y, w: 5.2, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.8;
  });
  k.defBox(s, M, 6.1, W - M * 2, 1.0, "The 1960 lesson that still holds",
    "In the first televised presidential debate, viewers who watched thought Kennedy won while radio listeners were far more evenly split. Presentation can matter as much as argument, and every campaign since has been built on that assumption.");
  N(s, `
TIMING: 6 minutes.

THE SCALE POINT IS SPECIFIC TO TEXAS and worth dwelling on. Twenty media markets
means a statewide ad buy is enormously expensive. Driving from El Paso to
Texarkana takes longer than driving across several states. Retail campaigning
does not scale here, which pushes everything toward paid media and therefore
toward money.

MOBILIZATION VERSUS PERSUASION is the modern strategic shift. As the electorate
has polarized, fewer voters are genuinely persuadable, so campaigns increasingly
spend on turning out people who already agree. That has consequences for how
campaigns talk and who they ignore.

THE KENNEDY AND NIXON EXAMPLE lands every time. If you have five minutes, the
contrast between the viewing and listening audiences is worth describing in
detail.
  `);
}

/* 9 */
{
  const s = k.slide("From handbills to microtargeting", "Campaign techniques and media");
  k.timeline(s, 1.95, [
    ["1828", "Print", "The Coffin Handbill attacked Andrew Jackson's record. Negative campaigning is as old as campaigning."],
    ["1930s", "Radio", "Candidates speak directly into homes for the first time, without a newspaper in between."],
    ["1960", "Television", "Image becomes inseparable from message. Ad buys become the dominant campaign expense."],
    ["Now", "Digital", "Social media, data targeting, and small dollar online fundraising reach voters individually and cheaply."],
  ], 2.5);
  const issues = [
    ["Negative advertising", "Effective at suppressing an opponent's support, and consistently unpopular with voters who say they dislike it."],
    ["Microtargeting", "Different messages to different voters, which raises the question of whether a campaign has one public position or many."],
    ["Small dollar fundraising", "Online giving lowered the barrier for challengers and increased the incentive for confrontational messaging that drives donations."],
  ];
  let y = 4.65;
  issues.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.6, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.7, y, w: W - M * 2 - 2.7, h: 0.68, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.74;
  });
  N(s, `
TIMING: 6 minutes. Candidate to compress in a 50 minute class.

THE 1828 EXAMPLE MATTERS because students believe negative campaigning is new and
a sign of decline. It is not. The Coffin Handbill accused Jackson of executing
militiamen and was as vicious as anything today. What has changed is speed and
volume, not tone.

MICROTARGETING IS THE GENUINELY NEW PROBLEM. When a campaign shows different
messages to different voters, no one sees the whole campaign, and the press
cannot easily hold it accountable for contradictions. That is a democratic
question without a settled answer.

SMALL DOLLAR FUNDRAISING CUTS BOTH WAYS and that is worth naming. It reduced
dependence on large donors, which reformers wanted. It also rewards outrage,
because anger drives giving. Both effects are real.
  `);
}

/* 10 */
{
  const s = k.slide("Forty electoral votes", "The Electoral College");
  k.figure(s, "tx9_electoral_map.jpg", 8.4, 1.95, 4.3, 2.35, null);
  s.addText("Presidents are chosen by electors, not by the national popular vote. Each state receives electors equal to its total congressional delegation. After the 2020 census Texas gained two seats, giving it 38 representatives, 2 senators, and 40 electoral votes.", {
    x: M, y: 1.95, w: 7.5, h: 1.0, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  k.statCallout(s, M, 3.1, 7.5, 1.1, "40",
    "electoral votes, second only to California. Texas is one of the largest prizes in any presidential election.");
  const pts = [
    ["Winner take all", "Texas awards all forty electoral votes to the statewide winner, as do most states."],
    ["Faithless electors", "An elector who votes differently from the state's popular winner. Seven did so nationally in 2016, including two from Texas."],
    ["The Texas paradox", "Texas holds enormous electoral weight and receives comparatively little campaign attention, because the statewide outcome has been predictable."],
  ];
  let y = 4.4;
  pts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.5, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.6, y, w: W - M * 2 - 2.6, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.78;
  });
  N(s, `
TIMING: 6 minutes.

THE NUMBER CHANGED and most students do not know it. Texas had 38 electoral votes
before the 2020 census and has 40 now. Growth translates directly into
presidential weight.

THE TEXAS PARADOX IS THE ANALYTICAL POINT. Texas is the second largest prize and
sees relatively few general election campaign visits, because winner take all
means a predictable state gets ignored. A competitive Texas would reshape
presidential campaigning nationally. Whether that happens is an open empirical
question, and Chapter 10 takes it up.

ASK: "Does the Electoral College serve Texas voters well?" Both answers are
defensible. It gives Texas outsized formal weight. It also means most Texans
never see a presidential candidate campaign for their vote.
  `);
}

/* 11 */
{
  const s = k.slide("A century of trying to limit money", "Campaign finance");
  k.figure(s, "tx9_campaign_fundraiser.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const tl = [
    ["1907", "Tillman Act", "Bars corporations from contributing directly to federal candidates."],
    ["1971 and 1974", "FECA", "Requires disclosure of contributions and spending, sets limits, and creates the Federal Election Commission."],
    ["1976", "Buckley v. Valeo", "Spending money on political speech is protected expression, so limits on a candidate's own spending fall while contribution limits stand."],
    ["2002", "McCain Feingold", "Restricts soft money and requires candidates to state on camera that they approve an ad."],
    ["2010", "Citizens United", "Independent political spending by corporations and unions is protected speech, which opens the way to Super PACs."],
  ];
  let y = 1.95;
  tl.forEach(([yr, t, d]) => {
    s.addText(yr, { x: M, y, w: 1.15, h: 0.3, isTextBox: true, margin: 0, fontFace: "Cambria", fontSize: 14, bold: true, color: C.GOLD, valign: "top" });
    s.addText(t, { x: M + 1.25, y, w: 1.95, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 3.3, y, w: 4.5, h: 0.75, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.BODY, lineSpacing: 15, valign: "top" });
    y += 0.79;
  });
  k.defBox(s, M, 6.0, W - M * 2, 0.95, "Texas has no contribution limits for state races",
    "Unlike federal elections, Texas sets no dollar cap on individual contributions to most state candidates. It relies on disclosure through the Texas Ethics Commission instead. Judicial races are the main exception, capped under the Judicial Campaign Fairness Act.");
  N(s, `
TIMING: 7 minutes.

THE TEXAS POINT IN THE BOX IS THE ONE STUDENTS SHOULD REMEMBER. Federal races
have contribution limits. Texas state races largely do not. A single donor can
give a Texas candidate an amount that would be illegal many times over in a
congressional race. The state's chosen safeguard is disclosure rather than
limits.

PRESENT THAT NEUTRALLY. Defenders argue disclosure respects free speech while
letting voters judge. Critics argue disclosure without limits simply documents
influence rather than restraining it. Both are serious positions.

BUCKLEY IS THE HINGE CASE and worth explaining: the Court distinguished spending,
which it treated as speech, from contributions, which it allowed limits on
because of corruption risk. Every later case works within that distinction,
including Citizens United.
  `);
}

/* 12 */
{
  const s = k.slide("Two ways to read the same decision", "Citizens United and Super PACs");
  k.twoSides(s, 1.95,
    "Speech that should not be restricted", [
      "Political speech is core First Amendment activity and spending money is how speech reaches an audience",
      "Government deciding which groups may speak about candidates is dangerous in itself",
      "Independent spending is not a contribution to a candidate, so the corruption risk is lower",
      "Unions, nonprofits, and advocacy groups benefit from the same protection as corporations",
    ],
    "Influence that should be limited", [
      "Unlimited independent spending lets the wealthiest voices dominate the information voters receive",
      "The line between independent and coordinated spending is difficult to police in practice",
      "Some spending flows through groups that do not disclose donors, so voters cannot evaluate the source",
      "Candidates know who funded the advertising that helped them, whether or not they coordinated",
    ], 2.9);
  k.defBox(s, M, 5.1, W - M * 2, 1.85, "What a Super PAC may and may not do",
    "A Super PAC may raise and spend unlimited amounts supporting or opposing candidates. It may not contribute to a candidate's campaign or coordinate strategy with it. That distinction is what the Supreme Court relied on in holding the arrangement constitutional, and it is also the part critics consider hardest to enforce. Both observations are accurate.");
  N(s, `
TIMING: 8 minutes with discussion. The most contested slide in the chapter.

PRESENT CITIZENS UNITED AS A CONSTITUTIONAL ARGUMENT, not a scandal. The majority
reasoned that political speech cannot be restricted based on the speaker's
corporate identity. Reasonable people, including four dissenting justices, found
that unpersuasive. Both views deserve a fair hearing in a government classroom.

THE COORDINATION LINE IS WHERE THE ARGUMENT ACTUALLY LIVES. The whole legal
structure depends on independent spending being genuinely independent. Supporters
say the rule is enforceable. Critics say former staff running a Super PAC for a
candidate they used to work for makes the line nearly meaningless. That is an
empirical dispute, not just a values dispute.

A GOOD ANALYTICAL QUESTION: "If you wanted to limit money in politics without
violating the First Amendment as the Court has interpreted it, what could you
actually do?" Answers include disclosure requirements, public financing, and
constitutional amendment. Each has costs.
  `);
}

/* 13 */
{
  const s = k.discussion("Pause and think", "Money, attention, and influence", [
    "Texas sets no limit on contributions to most state candidates and relies on disclosure instead. Is knowing who gave enough, or does the amount itself need a ceiling?",
    "Campaigns increasingly show different messages to different voters. If no one sees the whole campaign, how can voters hold a candidate accountable for what it said?",
    "A competitive Texas would transform presidential campaigning nationally. Does the Electoral College serve Texas voters well as things stand, or would a national popular vote serve them better?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE BEST SINGLE CHOICE for a Texas classroom because it is about Texas law
rather than federal doctrine, and because the disclosure-versus-limits framing
avoids a pure partisan split. Ask what a voter is supposed to do with disclosure
information. Most never look at it, which is a real objection to disclosure as a
remedy.

Q2 is the most forward-looking question in the course and it has no settled
answer anywhere. Push past "it should be illegal" to what a rule would actually
require: an archive of all ads? Uniform public messaging? Both have costs.

Q3 works well if you have already done Chapter 3, since it is partly a federalism
question.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 9 in the Trailblazer Trek: 8 sections, 1,635 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh free speech against the influence of money.", C.GOLD],
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
    "Outcome 6 (the state and local election process) is primary. Outcome 5 is supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

THE BEST ASSIGNMENT in this chapter: have students look up a Texas candidate on
the Texas Ethics Commission site and identify the three largest contributors.
It takes ten minutes, it is public record, and it makes campaign finance concrete
in a way no lecture does.

If you prefer a federal race, the FEC database does the same thing and is easier
to search.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["Texas campaign money", "Texas Ethics Commission publishes contribution and expenditure reports for state candidates and PACs. ethics.state.tx.us"],
    ["Federal campaign money", "Federal Election Commission carries searchable data for congressional and presidential races. fec.gov"],
    ["Elections administration", "Texas Secretary of State elections division, for dates, procedures, and official results. sos.texas.gov/elections"],
    ["The cases", "Buckley v. Valeo (1976) and Citizens United v. FEC (2010), with opinions and oral argument audio, at oyez.org"],
    ["Independent analysis", "OpenSecrets tracks outside spending and Super PAC activity by race."],
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

THE ETHICS COMMISSION DATABASE IS THE CENTERPIECE RESOURCE for this chapter.
Project it and look up a legislator your students know. Seeing actual donor names
and amounts on screen does more than any argument about campaign finance.

Oyez has oral argument audio for Citizens United. Hearing the justices press both
sides makes it clear this was a hard constitutional question rather than an
obvious one.
  `);
}

/* 16 */
{
  const s = k.closing("The question to leave with",
    "\u201CWho paid to put that message\nin front of you?\u201D",
    "In Texas the answer is usually public record, and almost nobody looks it up. The information exists. The attention does not.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The point mirrors Chapter 7's closing. The system is far more transparent than
students assume, and far less examined. Contribution reports are public and
searchable. The barrier is attention.

Good exit ticket: "Look up one Texas candidate on the Ethics Commission site and
name their largest contributor."

Preview Chapter 10: candidates do not run alone. They run under a party label
that organizes the whole system, and Texas has changed which label dominates more
dramatically than almost any other state.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 09 - Elections and Campaigns (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
