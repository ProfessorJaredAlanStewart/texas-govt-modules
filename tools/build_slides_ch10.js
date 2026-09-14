/**
 * Chapter 10 — Political Parties in Texas
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 10", "Political Parties in Texas");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 10", "Political\nParties",
    "Texas voted Democratic for a century, then Republican for a generation. Almost nobody moved.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 10: POLITICAL PARTIES IN TEXAS
About 75 minutes with all three discussion pauses.

OPENING (3 min). Tell students that from Reconstruction until the 1990s, Texas
was one of the most reliably Democratic states in the country, and that today it
is one of the most reliably Republican. Ask what happened.

Students almost always say people changed their minds. Mostly they did not. The
parties changed what they stood for, and voters sorted themselves accordingly.
That distinction is the chapter.

THE SUBTITLE IS THE THESIS. Hold it until the realignment slide, then return to
it.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, compress the party organization slide and cut one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely.", C.GOLD],
    ["\u2696", "Stay descriptive", "This chapter names what each party currently stands for. The notes describe positions without endorsing them and warn where students may hear bias.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 10's seven sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

THE RISK IN THIS CHAPTER is that any description of what a party stands for can
sound like endorsement or attack depending on the listener. The approach
throughout is to state each party's own stated positions in its own framing, cite
platforms rather than opponents' characterizations, and avoid evaluative
adjectives.

If you teach in a politically mixed room, and in Texas you do, say early that
your job is accurate description rather than advocacy. Students relax, and
participation improves.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Explain", "what parties do and why Madison expected factions to be inevitable."],
    ["Trace", "the realignment that turned Texas from Democratic to Republican."],
    ["Distinguish", "party identification from political ideology."],
    ["Describe", "how Texas parties are organized from precinct to state convention."],
    ["Analyze", "why third parties rarely win yet still shape the debate."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #2 and #3. Objective 2 is the historical argument. Objective 3 is the
conceptual distinction students most often collapse, and it shows up in
assessment.

If you compress, shorten #4.
  `);
}

/* 4 */
{
  const s = k.slide("What parties actually do", "The functions of parties");
  k.figure(s, "tx10_party_symbols.png", 8.6, 1.95, 4.1, 2.0, null);
  const fns = [
    ["Recruit and nominate", "Find candidates and choose nominees through primaries and conventions."],
    ["Organize the electorate", "Give voters a usable shortcut. Party label is the single strongest predictor of a vote."],
    ["Write a platform", "State positions so voters and officeholders know what the label means."],
    ["Coordinate in government", "Organize chambers, assign leadership, and move legislation as a bloc."],
    ["Mobilize turnout", "Identify supporters and get them to the polls."],
  ];
  let y = 1.95;
  fns.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.4, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.5, y, w: 5.35, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.8;
  });
  k.defBox(s, M, 6.05, W - M * 2, 1.0, "Madison saw this coming",
    "In Federalist No. 10, Madison argued that factions arise inevitably from liberty and unequal interests. His remedy was not to suppress them but to let many compete so none could dominate. Parties are the largest and most organized factions in American politics.");
  N(s, `
TIMING: 5 minutes.

START WITH THE MADISON POINT because it reframes parties as a feature rather than
a defect. Students often arrive believing parties are a corruption of democracy.
Madison's argument is that any free society produces organized interests, and the
question is how to manage them rather than whether to have them.

THE SHORTCUT FUNCTION connects to Chapter 8. Party label carries real information
about how someone will govern, which is why it dominates voting behavior. That is
rational, not lazy.

ASK: "If parties disappeared tomorrow, what would replace them?" Answers usually
point toward personality, wealth, and celebrity, which is a useful argument for
why parties, whatever their flaws, do work worth doing.
  `);
}

/* 5 */
{
  const s = k.slide("A century of one-party rule", "Texas party history, 1870s to 1950s");
  k.figure(s, "tx10_texas_party_history.jpg", 8.5, 1.95, 4.2, 2.25, null);
  s.addText("After Reconstruction ended, Texas became a one-party Democratic state and stayed that way for roughly a century. The consequences ran deeper than which label won.", {
    x: M, y: 1.95, w: 7.6, h: 0.7, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const pts = [
    ["The primary was the election", "Winning the Democratic primary meant winning the office. The November general election was a formality."],
    ["Exclusion had leverage", "Because the primary decided everything, barring Black voters from it through the white primary removed their voice entirely. Chapters 8 and 16."],
    ["Factions replaced parties", "With no Republican opposition, conservative and liberal Democrats fought each other. The real contest was inside one party."],
    ["Republicans held pockets", "Party strength survived mainly in the German Hill Country and, until the realignment, among Black Texans who associated the party with Lincoln."],
  ];
  let y = 2.8;
  pts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.6, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.7, y, w: 5.15, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.86;
  });
  N(s, `
TIMING: 6 minutes.

THE MECHANISM STUDENTS MISS: in a one-party state, the primary is the real
election. That single fact explains why the white primary was such an effective
tool of exclusion, and why Smith v. Allwright mattered so much. Cross-reference
Chapters 8 and 16 explicitly.

THE FACTION POINT IS WORTH TIME. One-party dominance does not end political
conflict; it relocates it inside the party. Texas Democrats spent decades divided
between conservative and liberal wings, and that internal fight is where the
realignment began.

NORRIS WRIGHT CUNEY is worth naming if you have a minute: a Black Texan who led
the state Republican Party in the late nineteenth century, when that party was
the political home of Black voters. It complicates the simple story students
carry about which party stood where.
  `);
}

/* 6 */
{
  const s = k.slide("How a state flips without anyone moving", "Realignment");
  k.timeline(s, 1.95, [
    ["1952", "Shivercrats", "Democratic Governor Allan Shivers backs Republican Eisenhower. Conservative Texas Democrats begin voting Republican for president while staying Democratic locally."],
    ["1960s", "National divergence", "The national Democratic Party embraces civil rights legislation. Conservative white southern voters begin reconsidering their party attachment."],
    ["1978 to 1994", "Statewide breakthrough", "Bill Clements wins the governorship in 1978, the first Republican since Reconstruction. George W. Bush wins in 1994, and Republicans consolidate statewide control."],
  ], 2.7);
  k.defBox(s, M, 4.95, W - M * 2, 2.0, "The distinction that matters",
    "Most Texans did not change their political beliefs. The parties changed what they stood for nationally, and voters re-sorted to match. A conservative Texan in 1950 and a conservative Texan in 2000 may hold similar views while wearing different labels. Political scientists call this realignment: a durable shift in which groups attach to which party, rather than a change in what those groups believe.");
  N(s, `
TIMING: 7 minutes. The central argument of the chapter.

TEACH THE DISTINCTION CAREFULLY because it is the difference between an
explanation and a caricature. Voters did not wake up with new convictions. The
national parties took different positions, particularly on civil rights and later
on cultural issues, and voters sorted to the party that matched what they already
believed.

THE SPLIT-TICKET PERIOD IS THE EVIDENCE. For decades Texans voted Republican for
president and Democratic for governor, sheriff, and county judge. That pattern is
exactly what you would expect if the national parties had moved but local
attachments had not yet caught up. It took roughly forty years to complete.

BE EVENHANDED ABOUT CAUSES. Civil rights realignment is well documented in the
scholarship. So are economic change, suburbanization, migration from other
states, and religious mobilization. Historians weigh these differently. Present
the range rather than a single cause.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Loyalty, belief, and change", [
    "Texas went from solidly Democratic to solidly Republican in roughly forty years, and political scientists say most voters' beliefs did not change. What does that suggest about what a party label actually measures?",
    "In one-party Texas, the primary was the real election and the general election was a formality. Are there places in Texas today where that is still effectively true, and what does it mean for voters in the other party?",
    "Norris Wright Cuney led Texas Republicans when that party was the political home of Black Texans. How should we think about party history when the parties themselves have changed so much?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 IS THE BEST SINGLE CHOICE. The productive answer is that a party label
measures a coalition at a moment in time, not a fixed philosophy. That insight
protects students from anachronism in both directions.

Q2 IS THE MOST IMMEDIATELY RELEVANT. In much of Texas one party's primary
effectively decides the office, which is why crossover voting happens and why
turnout in the dominant party's primary matters so much. Connect to Chapter 9.

Q3 is the historically richest and helps students resist the instinct to project
today's coalitions backward. Handle it descriptively.
  `);
}

/* 8 */
{
  const s = k.slide("Identification is not the same as ideology", "Party ID and ideology");
  k.figure(s, "tx10_political_spectrum.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const cw = 3.7;
  s.addShape(pres.ShapeType.roundRect, { x: M, y: 1.95, w: cw, h: 2.35, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.TEAL, width: 2 } });
  s.addText("PARTY IDENTIFICATION", { x: M + 0.26, y: 2.12, w: cw - 0.52, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, bold: true, color: C.TEAL, charSpacing: 1.2, valign: "top" });
  s.addText("A psychological attachment to a party, usually formed early through family and community and often held for life. It is closer to a social identity than a policy calculation.", { x: M + 0.26, y: 2.5, w: cw - 0.52, h: 1.6, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top" });
  s.addShape(pres.ShapeType.roundRect, { x: M + cw + 0.3, y: 1.95, w: cw, h: 2.35, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.GOLD, width: 2 } });
  s.addText("IDEOLOGY", { x: M + cw + 0.56, y: 2.12, w: cw - 0.52, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, bold: true, color: C.GOLD, charSpacing: 1.2, valign: "top" });
  s.addText("A coherent set of beliefs about the proper role of government. Liberal, conservative, libertarian, and populist are ideological labels, not party names.", { x: M + cw + 0.56, y: 2.5, w: cw - 0.52, h: 1.6, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top" });
  k.defBox(s, M, 4.5, W - M * 2, 1.35, "Why the distinction matters",
    "The two often align but not always. Conservative Democrats and moderate Republicans have both been common in Texas. A voter can hold conservative views and identify as a Democrat because of family, union membership, or community, which is exactly the pattern that made the realignment slow.");
  s.addText("Polarization describes what happens when identification and ideology line up more tightly over time, leaving fewer voters in the middle and making compromise harder.", {
    x: M, y: 6.0, w: W - M * 2, h: 0.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, italic: true, color: C.INK, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 6 minutes.

THIS IS THE MOST TESTABLE DISTINCTION in the chapter and students collapse it
constantly. Party identification is who you feel you are. Ideology is what you
believe government should do. They correlate; they are not the same.

THE HISTORICAL PAYOFF: conservative Democrats dominated Texas for decades. If
identification and ideology were identical, that category could not exist. It did,
in large numbers, and it explains why realignment took forty years rather than one
election.

POLARIZATION, DEFINED PRECISELY, is the tightening of that correlation. Fewer
conservative Democrats, fewer liberal Republicans, more predictable voting. State
it as a measured phenomenon rather than a complaint, and note that scholars
disagree about its causes.
  `);
}

/* 9 */
{
  const s = k.slide("Parties are built from the precinct up", "Texas party organization");
  k.figure(s, "tx10_precinct_chair.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const org = [
    ["Precinct convention", "Held after the primary. Neighbors gather, propose resolutions, and select delegates to the county or senatorial district convention."],
    ["County or district convention", "Adopts resolutions and selects delegates to the state convention."],
    ["State convention", "Held biennially. Certifies nominees, adopts the platform, and elects state party leadership."],
  ];
  let y = 1.95;
  org.forEach(([t, d], i) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.6, h: 1.0, rectRadius: 0.06, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    k.circle(s, M + 0.22, y + 0.25, String(i + 1), C.INK, 0.5);
    s.addText(t, { x: M + 0.88, y: y + 0.12, w: 2.6, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.INK, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 3.6, y: y + 0.12, w: 3.85, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.BODY, lineSpacing: 15, valign: "top" });
    y += 1.1;
  });
  k.defBox(s, M, 5.35, W - M * 2, 1.6, "Temporary and permanent organization",
    "The conventions above are the temporary organization: they meet, act, and dissolve. The permanent organization is the standing structure of precinct chairs, county chairs, and the state executive committee, elected by voters in the primary. Precinct chair races are often uncontested, which means a motivated person can take one with very few votes.");
  N(s, `
TIMING: 6 minutes. Candidate to compress in a 50 minute class.

THE PRACTICAL POINT IS THE LAST SENTENCE. Precinct chair positions frequently go
unfilled or unopposed. A student who wants actual influence inside a party can
often get a seat at the table with a handful of votes, and from there send
resolutions upward. This is the most concrete civic-engagement opportunity in the
chapter.

THE PLATFORM PROCESS IS WORTH EXPLAINING because students assume party platforms
descend from somewhere. They are built from resolutions passed at precinct
conventions, amended at county and district level, and adopted at the state
convention. Ordinary members write them.

DISTINGUISH TEMPORARY FROM PERMANENT clearly; it is a common exam item.
  `);
}

/* 10 */
{
  const s = k.slide("Where the parties stand today", "Platforms and coalitions");
  k.twoSides(s, 1.95,
    "Texas Republicans generally emphasize", [
      "Lower taxes and limited regulation of business",
      "Restrictive immigration enforcement and border security",
      "Support for oil and gas production alongside an all-of-the-above energy stance",
      "Restrictions on abortion and expanded school choice",
      "Strong support for gun rights under the Second Amendment",
    ],
    "Texas Democrats generally emphasize", [
      "Expanded access to health coverage, including Medicaid expansion",
      "Increased public school funding and opposition to voucher programs",
      "Expanded ballot access and opposition to recent election law changes",
      "Abortion rights and expanded civil rights protections",
      "Stronger environmental regulation and clean energy investment",
    ], 3.0);
  k.defBox(s, M, 5.15, W - M * 2, 1.8, "Read this carefully",
    "These are summaries of positions each party states in its own platform, not evaluations of them. Both parties contain internal disagreement, and individual candidates depart from the platform regularly. A platform describes a coalition's general direction, not a binding contract, and no officeholder is required to follow it.");
  N(s, `
TIMING: 7 minutes. Handle with care and stay descriptive.

SAY THE CAVEAT OUT LOUD before you walk the columns: these are each party's own
stated positions, drawn from their platforms, described in their own framing.
This is not a scorecard.

AVOID EVALUATIVE LANGUAGE entirely. Do not say a position is extreme, sensible,
popular, or out of touch. Students will supply their own judgments and that is
their job, not yours.

NAME THE INTERNAL DIVISIONS, because it makes the description more accurate and
lowers the temperature. Both Texas parties contain real factions: business
Republicans and movement conservatives, and moderate and progressive Democrats.
The vouchers fight in recent sessions split Republicans, with rural members
opposing. That is a useful example precisely because it complicates the neat
picture.

IF A STUDENT ASKS WHICH PARTY IS RIGHT: "That is what the rest of your life is
for. My job is to make sure you can describe both accurately."
  `);
}

/* 11 */
{
  const s = k.slide("Why third parties rarely win", "Third parties in Texas");
  k.figure(s, "tx10_third_party.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const why = [
    ["Winner take all", "Texas awards offices to whoever gets the most votes. A party with fifteen percent everywhere wins nothing, unlike in proportional systems."],
    ["Ballot access", "Reaching the ballot requires petition signatures or a prior vote threshold, which consumes resources before campaigning begins."],
    ["The wasted vote concern", "Voters who prefer a third party often vote for a major party candidate to avoid helping the one they like least."],
    ["Absorption", "When a third party idea gains traction, a major party frequently adopts it, which removes the reason to defect."],
  ];
  let y = 1.95;
  why.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.35, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.45, y, w: 5.4, h: 0.8, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.88;
  });
  k.defBox(s, M, 5.6, W - M * 2, 1.35, "They still matter",
    "The Libertarian and Green parties appear on Texas ballots and rarely win, yet third parties historically push ideas into the mainstream and can change outcomes in close races. Movements can also work inside a major party rather than outside it, which is what the Tea Party did after 2009 and what other movements have done since.");
  N(s, `
TIMING: 6 minutes.

WINNER TAKE ALL IS THE STRUCTURAL ANSWER and it is worth contrasting with
proportional representation. In many democracies a party with fifteen percent of
the vote gets roughly fifteen percent of the seats. In Texas it gets nothing.
That single rule, not voter preference, explains most of the two-party dominance.

THE ABSORPTION POINT IS THE MOST INTERESTING. Third parties in American history
have often lost elections while winning arguments. Ideas from minor parties have
repeatedly been adopted by major ones once they showed electoral appeal.

THE TEA PARTY EXAMPLE shows the alternative strategy: rather than forming a new
party and facing ballot access barriers, a movement can contest primaries inside
an existing party. That is generally the more effective route in a winner take
all system, and movements across the spectrum have used it.
  `);
}

/* 12 */
{
  const s = k.slide("How nominees actually get chosen", "Candidate and delegate selection");
  k.figure(s, "tx10_delegates.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const steps = [
    ["Primary", "Texas voters choose nominees in March. Texas uses an open primary, so any registered voter may participate in one party's contest."],
    ["Runoff", "If nobody wins a majority, the top two meet in May. Runoff turnout is typically a small fraction of the primary."],
    ["Delegates", "Presidential contests also allocate delegates to the national convention, based on primary results under each party's rules."],
    ["Convention", "Delegates selected through the precinct and county process attend the state convention, which adopts the platform and elects leadership."],
  ];
  let y = 1.95;
  steps.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 1.8, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 1.9, y, w: 5.95, h: 0.8, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.88;
  });
  k.defBox(s, M, 5.6, W - M * 2, 1.35, "The Texas Two-Step, now retired",
    "Texas Democrats once used a hybrid in which voters both cast a primary ballot and attended an evening caucus, with delegates allocated from each. It drew national attention in the 2008 presidential race and was criticized as confusing and as favoring voters who could attend an evening meeting. The party abandoned it in 2015.");
  N(s, `
TIMING: 5 minutes.

THE TWO-STEP IS WORTH KEEPING even though it is retired, because it teaches a
general lesson: rules about how and when people participate determine who
participates. A caucus held at seven in the evening favors people who do not work
nights, lack caregiving duties, and have transportation.

CONNECT TO CHAPTER 9. Runoff turnout is often a fraction of primary turnout,
which means a nominee can be chosen by a very small share of the electorate, and
in one-party areas that nominee effectively wins the office.

DELEGATE RULES DIFFER BY PARTY and change between cycles. If a student asks a
specific allocation question, the honest answer is to check the party's current
rules rather than guess.
  `);
}

/* 13 */
{
  const s = k.discussion("Pause and think", "Parties, competition, and choice", [
    "Texas has been dominated by one party for nearly all of its modern history, first Democrats and now Republicans. Does one-party dominance harm democracy, or does the real competition simply move inside the dominant party's primary?",
    "Winner take all rules, not voter preference, are the main reason third parties fail. Should Texas consider proportional or ranked systems, and what would be lost?",
    "Party platforms are written by ordinary members at precinct conventions almost nobody attends. Is that a democratic strength or a weakness?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE BEST SINGLE CHOICE and it is genuinely two-sided. The competition-moves-
inside answer is analytically respectable: in a one-party area, the primary is
where the real choice happens. The counterargument is that primary electorates are
small, unrepresentative, and skew toward the most committed, so the effective
electorate shrinks dramatically.

Q2 works well if students have seen ranked-choice voting in the news. Name the
trade-offs honestly: proportional systems produce more parties and more coalition
bargaining, which some see as representation and others as instability.

Q3 has a nice twist. The platform process is radically open, and almost nobody
uses it. That is the same pattern as Chapters 7 and 8: access without attention.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 10 in the Trailblazer Trek: 7 sections, 1,430 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to evaluate one-party dominance and the limits of demographic prediction.", C.GOLD],
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
    "Outcome 5 (the role of public opinion, interest groups, and political parties) is primary. Outcome 8 is supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

A GOOD PAIRED ASSIGNMENT: have students read one plank from each party's current
Texas platform on the same issue and summarize both accurately, without
evaluation. It is harder than it sounds and it builds exactly the skill the
course is after.

The module's Section 3 reflection asks students to weigh whether demographic
change produces partisan change, which is the argument this chapter refuses to
settle.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The parties", "Republican Party of Texas and Texas Democratic Party publish their current platforms and organizational rules. texasgop.org and texasdemocrats.org"],
    ["Election data", "Texas Secretary of State elections division carries primary, runoff, and general election results by county. sos.texas.gov/elections"],
    ["Party history", "Handbook of Texas Online on the Shivercrats, the white primary, Norris Wright Cuney, and Texas party realignment. tshaonline.org/handbook"],
    ["Public opinion", "The Texas Politics Project at the University of Texas publishes regular polling on party identification and ideology. texaspolitics.utexas.edu"],
    ["The classic argument", "James Madison, Federalist No. 10, on why factions are inevitable in a free society."],
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

ASSIGNING THE ACTUAL PLATFORMS is the single best way to keep this chapter
descriptive. Students who read the documents themselves stop relying on what they
have been told each party believes.

The Texas Politics Project polling is free, Texas-specific, and updated regularly.
It is the best source for current party identification numbers in this state.
  `);
}

/* 16 */
{
  const s = k.closing("The question to leave with",
    "\u201CDid the voters change,\nor did the parties?\u201D",
    "In Texas the answer is mostly the second. Remember that the next time someone describes a state as having flipped.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The realignment insight is the most transferable idea in this chapter. It applies
to every claim about a state or group flipping, and it guards against the lazy
story that people simply changed their minds.

Good exit ticket: "Explain in three sentences how Texas went from Democratic to
Republican without most voters changing their beliefs."

Preview Chapter 11: parties are one way organized groups shape government. The
next chapter covers the other way, the one that operates between elections and
draws far less attention.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 10 - Political Parties (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
