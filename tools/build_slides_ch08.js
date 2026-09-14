/**
 * Chapter 8 — Voting and Political Participation
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 8", "Voting and Political Participation");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 8", "Voting and\nParticipation",
    "Texas fought for a century to open the ballot. Then it became one of the states least likely to use it.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 8: VOTING AND POLITICAL PARTICIPATION
About 75 minutes with all three discussion pauses.

OPENING (3 min). Ask for a show of hands, no judgment attached: who voted in the
last presidential election? Then the last midterm. Then the last city or school
board election. The hands drop steadily.

Then say plainly that this is normal. Texas turnout is among the lowest in the
country, and the pattern in this room matches the state.

THE FRAME: this chapter holds two facts that sit uneasily together. Texans died
to win the vote, and most Texans do not use it. Do not resolve that tension
early. Let the chapter build it.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, cut the decision-making slide and one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely.", C.GOLD],
    ["\u2696", "Election law is contested", "Voter ID and SB 1 are argued in good faith on both sides. The notes give you both cases and tell you not to referee.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 8's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

THIS CHAPTER CARRIES REAL POLITICAL CHARGE. Voter identification and SB 1 are
argued sincerely from both directions, and your room contains students who have
been told opposite things about both.

The approach throughout: state what the law requires, state what each side
argues, cite what courts have found, and let students weigh it. Do not referee.

The registration and turnout material is factual and uncontroversial, and it is
where most of the learning happens. Protect that time.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Explain", "how to register and vote in Texas and what the law requires."],
    ["Identify", "the kinds of elections Texans vote in and how often."],
    ["Trace", "the long struggle to open the ballot in Texas."],
    ["Analyze", "why Texas turnout is persistently low."],
    ["Describe", "forms of participation beyond voting."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #1 and #4. Objective 1 is the practically useful one, and many students
in the room are not registered. Objective 4 is the analytical core.

Objective 3 carries the civil rights history that also appears in Chapter 16.
If you teach both, cross-reference them explicitly.
  `);
}

/* 4 */
{
  const s = k.slide("What Texas requires before you vote", "Registration");
  k.figure(s, "tx8_voter_registration.jpg", 8.5, 1.95, 4.2, 2.35, null);
  const reqs = [
    ["Who may register", "A United States citizen, a resident of the county, at least 17 years and 10 months old, not finally convicted of a felony unless the sentence is fully completed, and not declared mentally incapacitated by a court."],
    ["The deadline", "Thirty days before the election. Texas has no same-day registration and no automatic registration."],
    ["How", "Paper application by mail or in person. Texas does not offer full online voter registration."],
    ["At the polls", "One of seven accepted photo IDs. Voters who cannot reasonably obtain one may sign a declaration and present an alternative document."],
  ];
  let y = 1.95;
  reqs.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 1.95, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.05, y, w: 5.75, h: 1.05, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top" });
    y += 1.05;
  });
  k.defBox(s, M, 6.25, W - M * 2, 0.8, "A free ID exists, and few people know it",
    "Texans who lack an accepted photo ID can obtain an Election Identification Certificate at no cost from the Department of Public Safety. Both sides of the ID debate agree it is underused. Tell your students it exists.");
  N(s, `
TIMING: 6 minutes. The most practically useful slide in the course.

TREAT THIS AS SERVICE, NOT JUST CONTENT. Some students in the room are not
registered, and several will turn 18 this term. The 17 years and 10 months rule
means a student can register before their birthday, which almost nobody knows.

TEXAS IS AN OUTLIER ON THREE COUNTS worth stating neutrally: no same-day
registration, no automatic registration, and no full online registration. Roughly
half the states offer at least one. That is a factual comparison, not an
argument.

THE ELECTION IDENTIFICATION CERTIFICATE is genuinely underused and both sides of
the ID debate say so. Supporters of ID laws want it publicized because it answers
the access objection. Critics want it publicized because it helps voters. Tell
students it is free at DPS.

Have the registration deadline for your next election on the board.
  `);
}

/* 5 */
{
  const s = k.slide("Texans vote more often than almost anyone", "Types of elections");
  k.figure(s, "tx8_primary_election.jpg", 8.5, 1.95, 4.2, 2.3, null);
  const kinds = [
    ["Primary", "March of even years. Parties choose nominees. Texas uses an open primary, so any registered voter may participate in one party's contest."],
    ["Runoff", "May, when no primary candidate wins a majority. Turnout is typically a fraction of the primary."],
    ["General", "November of even years. Fills offices. The highest turnout election."],
    ["Constitutional amendment", "November of odd years. Voters rewrite the Texas Constitution with very low turnout."],
    ["Local", "Often May, on their own dates. City, school board, and special district seats."],
    ["Special", "Whenever a vacancy occurs or a specific measure requires a vote."],
  ];
  let y = 1.95;
  kinds.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.1, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.2, y, w: 5.6, h: 0.7, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.70;
  });
  k.defBox(s, M, 6.2, W - M * 2, 0.8, "Early voting is the norm here",
    "Texas opens in-person early voting from the seventeenth day before Election Day through the fourth day before it. A majority of Texas ballots are now cast before Election Day, which is not true in every state.");
  N(s, `
TIMING: 6 minutes.

THE POINT STUDENTS MISS: Texans are asked to vote far more often than citizens of
most democracies, because of primaries, runoffs, amendment elections, and local
elections on separate dates. Frequent elections spread turnout thin.

ASK: "Which of these elections decides the most about your daily life?" The
answer is usually the ones with the lowest turnout, local and amendment
elections. That inversion is the chapter's recurring theme.

THE OPEN PRIMARY IS WORTH A MOMENT. Texans do not register by party. You choose
at the polls which primary to vote in, and you may vote in only one per cycle.
Students often think Texas has party registration. It does not.

EARLY VOTING IS GENUINELY CONVENIENT and worth naming, because students often
assume Texas offers nothing. The dispute in the next slides is about specific
provisions, not about early voting itself.
  `);
}

/* 6 */
{
  const s = k.slide("A century of exclusion, then a century of law", "History of voting rights");
  k.figure(s, "tx8_voting_rights.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const tl = [
    ["1902", "Poll tax", "Texas adopts a fee to vote, pricing out poor Black, Mexican American, and white Texans."],
    ["1923", "White primary", "State law bars Black voters from the Democratic primary, the only election that mattered in a one-party state."],
    ["1944", "Smith v. Allwright", "A Houston dentist, represented by Thurgood Marshall, wins at the Supreme Court. White primaries fall across the South."],
    ["1964 to 1966", "Poll tax ends", "The Twenty-Fourth Amendment bars it federally, and Harper v. Virginia Board of Elections ends it in state elections."],
    ["1965", "Voting Rights Act", "Federal law bars racially discriminatory election practices. Texas becomes subject to federal preclearance."],
    ["2013", "Shelby County v. Holder", "The Supreme Court strikes the coverage formula. Preclearance no longer applies, and Texas may change election law without prior federal approval."],
  ];
  let y = 1.95;
  tl.forEach(([yr, t, d]) => {
    s.addText(yr, { x: M, y, w: 0.95, h: 0.3, isTextBox: true, margin: 0, fontFace: "Cambria", fontSize: 14, bold: true, color: C.GOLD, valign: "top" });
    s.addText(t, { x: M + 1.05, y, w: 2.05, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 3.2, y, w: 4.6, h: 0.7, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.BODY, lineSpacing: 15, valign: "top" });
    y += 0.75;
  });
  N(s, `
TIMING: 7 minutes.

THE WHITE PRIMARY IS THE MECHANISM TO EXPLAIN CAREFULLY. In a one-party state the
Democratic primary decided every office. The November election was a formality.
Excluding Black voters from the primary excluded them from the only contest that
mattered, while technically leaving them the vote. That is a sophisticated form
of disenfranchisement and students should see how it worked.

SMITH V. ALLWRIGHT connects directly to Chapter 16. Same case, different frame:
here it is voting rights, there it is equal protection. Cross-reference it.

SHELBY COUNTY IS THE PIVOT to the modern debate. Say what it did in neutral
terms: it struck down the formula determining which jurisdictions needed federal
approval before changing election law. Supporters called the formula outdated.
Critics said removing it invited restrictive changes. Both reactions were
immediate and sincere.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Access and integrity", [
    "Texas spent a century dismantling barriers to the ballot. When a new election rule is proposed today, what evidence should decide whether it protects integrity or restricts access?",
    "The white primary technically left Black Texans the vote while removing all its value. What does that history teach about judging election rules by their stated purpose versus their effect?",
    "Texas asks voters to the polls many times in a two year cycle. Does voting more often strengthen democracy or dilute participation?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 IS THE BEST CHOICE and it is deliberately framed around evidence rather than
allegiance. Push students toward specifics: what data would show a rule burdens
voters? What data would show fraud it prevents? Both are empirical questions with
real, contested literatures.

Q2 is the sharpest analytical question in the chapter. The white primary's stated
purpose was party autonomy; its effect was exclusion. Students who grasp the
purpose-versus-effect distinction can analyze any election law, including ones
they favor.

DO NOT LET Q1 become a partisan sorting exercise. If it drifts, return to the
question: what evidence would change your mind?
  `);
}

/* 8 */
{
  const s = k.slide("How voters actually decide", "Voter decision making");
  k.figure(s, "tx8_ballot_choices.jpg", 8.5, 1.95, 4.2, 2.25, null);
  s.addText("A Texas ballot can run to dozens of races, many for offices voters have never heard of. Nobody researches all of them. Voters use heuristics, mental shortcuts that stand in for exhaustive analysis.", {
    x: M, y: 1.95, w: 7.6, h: 0.85, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const h = [
    ["Party identification", "The single strongest predictor of a vote. A reasonable proxy for how a candidate is likely to govern.", C.TEAL],
    ["Retrospective voting", "Judging by past performance, often the state of the economy.", C.GOLD],
    ["Prospective voting", "Choosing based on what a candidate promises to do.", C.GOLD],
    ["Pocketbook voting", "Voting according to one's own financial situation.", C.GOLD],
    ["Incumbency", "Name recognition alone moves votes, especially in low-information races.", C.CRIM],
  ];
  let y = 2.95;
  h.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.6, h: 0.7, rectRadius: 0.05, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.13, h: 0.7, rectRadius: 0.05, fill: { color: col } });
    s.addText(t, { x: M + 0.32, y: y + 0.07, w: 2.5, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.32, y: y + 0.37, w: 7.0, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.BODY, valign: "top" });
    y += 0.72;
  });
  s.addText("Heuristics are a rational response to limited time, not a failure of citizenship. The question is which shortcuts track how someone will actually govern.", {
    x: M, y: 6.52, w: W - M * 2, h: 0.5, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, italic: true, color: C.INK, valign: "top",
  });
  N(s, `
TIMING: 6 minutes. Candidate to compress in a 50 minute class.

LEAD WITH THE ARITHMETIC. A Texas general election ballot can carry forty or more
races. Researching each one properly would take hours. Nobody does it. That is
not apathy, it is arithmetic.

DEFEND HEURISTICS BEFORE CRITIQUING THEM. Party label is genuinely informative
about how someone will vote on most issues. Incumbency tells you someone has done
the job. These shortcuts carry real information.

THEN MAKE THE CRITIQUE: some shortcuts track governing behavior and some do not.
Ballot order, name familiarity, and how a name sounds all measurably move votes in
low-information races. Texas judicial races are the classic example, which
connects back to Chapter 6.

GOOD IN-CLASS MOMENT: ask how students voted in judicial or county races, or
would. Most admit party label or skipping. That honesty is the lesson.
  `);
}

/* 9 */
{
  const s = k.slide("Near the bottom, consistently", "Turnout");
  k.figure(s, "tx8_empty_polling.jpg", 8.5, 1.95, 4.2, 2.3, null);
  s.addText("Texas turnout ranks among the lowest in the nation across election types. The pattern holds in presidential years, midterms, and especially in local and amendment elections.", {
    x: M, y: 1.95, w: 7.6, h: 0.8, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const causes = [
    ["A young population", "Texas is younger than the national average, and young people vote least in every state."],
    ["A large noncitizen population", "Raw population comparisons overstate the gap. Turnout among the voting-eligible population is the better measure."],
    ["Low political efficacy", "Many Texans doubt their vote changes outcomes, and in statewide races that have not been close, that belief is not irrational."],
    ["One-party dominance", "When statewide outcomes feel settled, both parties' voters have less reason to turn out."],
    ["Procedural friction", "No same-day or automatic registration, a thirty day deadline, and an ID requirement each add small costs."],
  ];
  let y = 2.9;
  causes.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.55, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.65, y, w: 5.15, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.78;
  });
  N(s, `
TIMING: 7 minutes.

TEACH THE MEASUREMENT POINT FIRST, because it is where careless analysis goes
wrong. Turnout as a share of total population makes Texas look worse than turnout
as a share of the voting-eligible population, because Texas has a large noncitizen
population. Honest comparisons use the voting-eligible population. Say this
plainly; it is a methods lesson that transfers.

THE EFFICACY POINT DESERVES RESPECT, not scolding. A voter in a statewide race
decided by double digits who concludes their vote will not change the outcome is
reasoning correctly about that race. The counterargument is that primaries and
local races are frequently close, and those are exactly the ones people skip.

DO NOT MORALIZE. Students who do not vote are in the room. The productive framing
is structural: these are the causes, here is what would change them, here is what
each change would cost.
  `);
}

/* 10 */
{
  const s = k.slide("Two ways to read the same rules", "The election law debate");
  s.addText("Senate Bill 1, passed in 2021, ended drive-through and 24 hour voting, added identification requirements for mail ballots, expanded the role of partisan poll watchers, and regulated assistance to voters.", {
    x: M, y: 1.9, w: W - M * 2, h: 0.7, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  k.twoSides(s, 2.75,
    "The case for the law", [
      "Uniform statewide rules prevent counties from improvising procedures",
      "Identification requirements for mail ballots close a channel with weaker verification",
      "Poll watcher access makes the process observable by both parties",
      "Public confidence in elections is itself a legitimate goal",
    ],
    "The case against", [
      "Mail ballot rejections rose sharply after the new identification rules took effect",
      "Provisions fell hardest on elderly, disabled, and low income voters and on large urban counties",
      "Documented in-person fraud in Texas has been rare",
      "Expanded poll watcher access raises concerns about voter intimidation",
    ], 2.7);
  k.defBox(s, M, 5.65, W - M * 2, 1.3, "Where it stands",
    "Federal courts have upheld some provisions of SB 1 and struck down others, and litigation has continued. Earlier Texas voter identification laws were also found by federal courts to burden minority voters, and the Legislature revised the law in 2017 to add alternatives for voters who cannot reasonably obtain photo ID. Verify the current posture before teaching.");
  N(s, `
TIMING: 8 minutes with discussion. The most contested slide in the chapter.

CHECK CURRENCY BEFORE CLASS. This litigation has been active for years.

DO NOT REFEREE. Both columns contain claims supported by evidence. The mail
ballot rejection increase is documented. The rarity of prosecuted in-person fraud
is documented. Whether the trade is worth it is a value judgment about how to
weigh access against confidence, and reasonable Texans weigh it differently.

A USEFUL ANALYTICAL MOVE: ask what each side would accept as evidence they were
wrong. Students who can answer that for their own position are doing real
thinking. Students who cannot have discovered something about themselves.

IF A STUDENT ASKS YOUR VIEW: "My job is to make sure you can argue either side
well enough that the other side would recognize itself. Then you decide."
  `);
}

/* 11 */
{
  const s = k.slide("What would actually raise turnout", "Increasing participation");
  const options = [
    ["\u270E", "Automatic registration", "Register eligible citizens through driver license data unless they opt out. Used in many states. Texas does not.", C.TEAL],
    ["\u23F1", "Same-day registration", "Register and vote on the same day. Associated with higher turnout. Texas does not allow it.", C.TEAL],
    ["\u2611", "Online registration", "Full online registration, available in most states. Texas offers only limited online updates.", C.GOLD],
    ["\u2691", "Consolidated election dates", "Moving local elections to November would raise their turnout, at the cost of longer ballots and less local focus.", C.GOLD],
    ["\u26D6", "Compulsory voting", "Required by law in Australia, with a small fine. Turnout exceeds ninety percent. No United States jurisdiction does this.", C.CRIM],
  ];
  k.rows(s, 1.9, options, { labelW: 2.85, rowH: 0.85, gap: 0.06 });
  s.addText("Every option has a cost. Easier registration raises administrative burden and, critics argue, risk. Consolidated dates bury local races on a long ballot. Compulsory voting trades liberty for participation.", {
    x: M, y: 6.45, w: W - M * 2, h: 0.5, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12, italic: true, color: C.INK, lineSpacing: 16, valign: "top",
  });
  N(s, `
TIMING: 6 minutes.

PRESENT THESE AS OPTIONS WITH TRADE-OFFS, not as a reform agenda. Each has real
objections, and the closing line names them.

THE MOST INTERESTING ONE FOR DISCUSSION is consolidated election dates, because
it scrambles the usual alignment. Moving school board elections to November would
raise turnout substantially. It would also bury those races at the bottom of a
very long ballot and let national politics drive local outcomes. People who want
higher turnout and people who want informed local voting end up on opposite
sides.

COMPULSORY VOTING is worth thirty seconds because it clarifies what students
actually value. Ask: "Would you accept a small fine for not voting?" The room
usually splits hard, and the objection is about liberty rather than turnout,
which is a useful thing to surface.
  `);
}

/* 12 */
{
  const s = k.slide("Voting is not the only lever", "Participation beyond the ballot");
  k.figure(s, "tx8_political_rally.jpg", 8.5, 1.95, 4.2, 2.3, null);
  const forms = [
    ["Contacting officials", "A phone call or email to a legislative office is counted and reported. Volume matters, especially on low-profile bills."],
    ["Public testimony", "Legislative committees and local boards take public comment. Anyone may sign up and speak."],
    ["Organizing and donating", "Joining or funding a group multiplies individual effort. Chapter 11."],
    ["Protest and assembly", "Protected by the First Amendment and the Texas Bill of Rights. Chapter 16."],
    ["Litigation", "Roe v. Wade and Dobbs both began as lawsuits. Courts are a participation channel when legislatures will not move."],
    ["Running for office", "Thousands of local seats appear on Texas ballots, and many draw no opponent at all."],
  ];
  let y = 1.95;
  forms.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.4, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.5, y, w: 5.3, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.72;
  });
  k.defBox(s, M, 6.3, W - M * 2, 0.72, "The unopposed race problem",
    "Many Texas local offices draw a single candidate. Where nobody files, there is effectively no election, and a seat with real taxing authority is filled by default.");
  N(s, `
TIMING: 6 minutes.

THE MOST EMPOWERING SLIDE IN THE CHAPTER. Students who feel their vote does not
matter statewide can still see channels where a single person measurably counts.

PUBLIC TESTIMONY IS THE UNDERUSED ONE. Anyone can sign up and speak at a Texas
legislative committee hearing. Most students have no idea this is open to them
without an invitation or a lawyer.

THE UNOPPOSED RACE POINT IS THE STRONGEST CLOSING ARGUMENT. Ask students to look
up their last local ballot and count how many races had one candidate. In many
Texas jurisdictions it is most of them. A seat with taxing authority filled by
default is a democratic failure that no voter turnout campaign can fix.

PAIRS DIRECTLY with Texas In Action activities if you assign them.
  `);
}

/* 13 */
{
  const s = k.discussion("Pause and think", "Why people do and do not participate", [
    "A voter in a statewide race decided by fifteen points concludes their vote will not change the outcome. Are they wrong, and what is the strongest argument for voting anyway?",
    "Local and amendment elections decide the most about daily life and draw the fewest voters. Is that a failure of citizens, a failure of election design, or both?",
    "Many Texas local races are uncontested. What does it mean for democracy when the problem is not who wins but that nobody ran?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE BEST SINGLE CHOICE because it takes non-voters seriously rather than
lecturing them. The honest answer: in that specific race they are right, and the
strongest counterarguments are that primaries and local races are often close,
that margins themselves carry information, and that the habit of voting is what
makes future competitiveness possible.

Q3 is the sleeper and the most original. Turnout campaigns assume the problem is
voters. Uncontested races mean the problem is candidates. Ask what stops people
from running: time, money, visibility, and the fact that most people do not know
these seats exist.

Do not let Q2 become scolding. Design contributes as much as citizenship.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 8 in the Trailblazer Trek: 8 sections, 1,685 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh ballot access against election integrity.", C.GOLD],
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
    "Outcome 6 (the state and local election process) is primary. Outcomes 5 and 7 are supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

THE HIGHEST-VALUE THING YOU CAN DO in this chapter takes five minutes: put the
registration deadline for the next election on the screen and tell students where
to get a form. Several will act on it.

A GOOD ASSIGNMENT: have students look up their own county's turnout in the last
local election and compare it to the last presidential election. The gap is
usually startling and it is public data.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["Register and vote", "Texas Secretary of State elections division carries registration forms, ID rules, deadlines, and official results. sos.texas.gov/elections"],
    ["Your county", "Your county clerk or elections administrator posts polling locations, early voting sites, and sample ballots."],
    ["Turnout data", "United States Elections Project publishes turnout by state using the voting-eligible population, the honest comparison. electproject.org"],
    ["The constitution", "Texas Constitution, Article VI on suffrage. statutes.capitol.texas.gov"],
    ["Voting rights history", "Handbook of Texas Online on the poll tax, the white primary, and Smith v. Allwright. tshaonline.org/handbook"],
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
Leave this up during questions so students can photograph it.

THE UNITED STATES ELECTIONS PROJECT is the source to trust for turnout
comparisons because it uses the voting-eligible population rather than raw
population. Using the wrong denominator is the most common error in public
arguments about Texas turnout, in both directions.
  `);
}

/* 16 */
{
  const s = k.closing("The question to leave with",
    "\u201CWhich election on your ballot\ndecides the most about your life?\u201D",
    "For most Texans the honest answer is one of the ones they skip. That inversion is the central problem of participation in this state.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The inversion is the takeaway. Attention flows to presidential races, which are
least likely to be decided by any individual vote and least likely to change a
student's daily life. The races that set property tax rates, run schools, and
decide who prosecutes crimes draw a fraction of the turnout.

Good exit ticket: "Name the next election you are eligible to vote in, the
registration deadline, and one office on that ballot."

Preview Chapter 9: now that we know who votes and why, the next question is how
candidates reach them, and what it costs.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 08 - Voting and Political Participation (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
