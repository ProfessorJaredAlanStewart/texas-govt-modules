/**
 * Chapter 4 — The Texas Legislature
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 4", "The Texas Legislature");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 4", "The Texas\nLegislature",
    "One hundred forty days every two years, at six hundred dollars a month, to govern thirty-one million people.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 4: THE TEXAS LEGISLATURE
About 70 minutes with both discussion pauses.

OPENING (2 min). Put two numbers on the board before anything else: 140 and
\$7,200. Ask what job those numbers could possibly describe. Then reveal that
they describe the body that writes every law governing thirty-one million
Texans.

The reaction in the room is the hook for the whole chapter. Everything here
follows from the 1876 decision that a legislature meeting rarely and paid poorly
is safer than one meeting often and paid well.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 70 minutes with both pauses. For a 50 minute class, cut the qualifications slide and one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely.", C.GOLD],
    ["\u2696", "Redistricting is live", "The 2025 mid-decade redraw and its litigation move fast. Verify the current posture before teaching that slide.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 4's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

The redistricting material is the part most likely to go stale and the part most
likely to generate heat. Both sides of that argument are represented on the
slide, and the notes tell you to present the dispute rather than a verdict.

If students have done the module, compress the structure and qualifications
material and spend the time on redistricting and the legislative process.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Describe", "the structure of the Texas Legislature and who leads each chamber."],
    ["Explain", "why sessions are short and biennial, and what that does to lawmaking."],
    ["Trace", "how a bill becomes law in Texas and where most bills die."],
    ["Analyze", "redistricting, including the 2025 mid-decade redraw."],
    ["Evaluate", "the citizen-legislature model and who it allows to serve."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #2 and #5. Those two carry the chapter's argument: the design choices
about time and pay determine who can serve and what can pass.

Objective 3 is the mechanical one students most often see on exams.
  `);
}

/* 4 */
{
  const s = k.slide("Two chambers, two very different leaders", "Structure");
  const cw = (W - M * 2 - 0.4) / 2;
  const chambers = [
    ["TEXAS HOUSE", "150 members", "2 year terms", "Led by the Speaker, elected by the members themselves", "Currently Dustin Burrows of Lubbock", C.INK],
    ["TEXAS SENATE", "31 members", "4 year terms", "Presided over by the Lieutenant Governor, elected statewide by voters", "Currently Dan Patrick", C.TEAL],
  ];
  chambers.forEach(([t, size, term, lead, who, col], i) => {
    const x = M + i * (cw + 0.4);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 2.9, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 0.65, rectRadius: 0.08, fill: { color: col } });
    s.addText(t, { x: x + 0.28, y: 2.08, w: cw - 0.56, h: 0.38, isTextBox: true, margin: 0, fontFace: B, fontSize: 14, bold: true, color: C.WHITE });
    s.addText(size + "   ·   " + term, { x: x + 0.28, y: 2.78, w: cw - 0.56, h: 0.34, isTextBox: true, margin: 0, fontFace: "Cambria", fontSize: 17, bold: true, color: C.GOLD });
    s.addText(lead, { x: x + 0.28, y: 3.22, w: cw - 0.56, h: 0.75, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, color: C.BODY, lineSpacing: 18 });
    s.addText(who, { x: x + 0.28, y: 4.05, w: cw - 0.56, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, italic: true, color: C.MUTE });
  });
  k.defBox(s, M, 5.05, W - M * 2, 1.5, "The asymmetry that decides everything",
    "The Speaker is chosen by the 150 House members, so the job depends on holding their confidence. The Lieutenant Governor is elected statewide by voters and owes the Senate nothing. That officer controls committee assignments, bill referral, and the Senate calendar, which is why many observers call the Lieutenant Governor the most powerful official in Texas government.");
  N(s, `
TIMING: 6 minutes.

THE DEFINITION BOX IS THE SLIDE. Everything else is memorization; this is the
insight.

WALK THE LOGIC: a Speaker who loses the confidence of the House loses the job, so
the Speaker must build coalitions inside the chamber. The Lieutenant Governor
cannot be removed by senators at all, holds statewide electoral legitimacy, and
controls what reaches the floor. That combination is unusual among the states.

ASK: "Who has more power, the governor or the lieutenant governor?" Let them
argue. The honest answer is that it depends on the officeholders, but the
structural advantage sits with the lieutenant governor because of control over
the calendar. Forward reference to Chapter 5.

CURRENCY: verify the current officeholders before class.
  `);
}

/* 5 */
{
  const s = k.slide("One hundred forty days, every other year", "Sessions");
  k.figure(s, "tx4_texas_capitol_interior.jpg", 8.3, 1.95, 4.4, 2.6, null);
  const facts = [
    ["Regular session", "140 days, beginning the second Tuesday of January in odd-numbered years. That is the only time the Legislature meets on its own authority."],
    ["Special session", "Up to 30 days, and only the governor may call one. The governor also sets the agenda, so the Legislature may consider only what the governor lists."],
    ["The consequence", "Roughly twenty months of every twenty-four, Texas has no sitting legislature. A crisis arriving in March of an even year waits, unless the governor acts."],
  ];
  let y = 1.95;
  facts.forEach(([t, d]) => {
    s.addText(t, { x: M, y: y + 0.02, w: 7.4, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 14, bold: true, color: C.GOLD });
    s.addText(d, { x: M, y: y + 0.38, w: 7.4, h: 0.85, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, color: C.BODY, lineSpacing: 18 });
    y += 1.35;
  });
  k.statCallout(s, M, 5.95, W - M * 2, 1.0, "10,000+",
    "bills and resolutions filed in a typical regular session. Roughly one in five becomes law. The calendar itself kills most legislation.");
  N(s, `
TIMING: 6 minutes.

THE SPECIAL SESSION POWER IS THE HIDDEN STORY. Students focus on 140 days and
miss that the governor controls both whether the Legislature returns and what it
may discuss. That is one of the strongest tools a constitutionally weak governor
holds, and it is agenda power rather than veto power.

THE DEADLINE EFFECT: because time is the scarcest resource, the end of session
produces a bottleneck. Bills die by running out of clock rather than by losing
votes. A committee chair who simply declines to schedule a hearing has killed a
bill without anyone casting a vote. That is worth stating plainly, because
students assume legislation fails through defeat.

ASK: "Who benefits from a legislature that meets rarely?" Push toward the honest
answer: whoever likes current policy, and whoever is organized enough to work a
compressed calendar. Forward reference to Chapter 11.
  `);
}

/* 6 */
{
  const s = k.slide("Drawing the lines that pick the voters", "Redistricting");
  k.figure(s, "tx4_redistricting_map.jpg", 8.35, 1.95, 4.35, 2.35, null);
  s.addText("Every ten years after the census, the Legislature redraws district lines for the Texas House, the Texas Senate, the State Board of Education, and the state's congressional seats. If it fails, the Legislative Redistricting Board, a five-member body of state officials, draws the state maps.", {
    x: M, y: 1.95, w: 7.45, h: 1.05, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const terms = [
    ["Cracking", "Splitting a group's voters across many districts so they cannot form a majority anywhere."],
    ["Packing", "Concentrating a group's voters into as few districts as possible to limit their influence elsewhere."],
    ["Majority-minority district", "A district drawn so a minority group forms a majority, sometimes required to comply with the Voting Rights Act."],
  ];
  let y = 3.15;
  terms.forEach(([t, d]) => {
    s.addText(t, { x: M, y: y + 0.02, w: 2.5, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.GOLD });
    s.addText(d, { x: M + 2.6, y, w: 4.85, h: 0.62, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16 });
    y += 0.72;
  });
  k.defBox(s, M, 5.5, W - M * 2, 1.45, "2025: a mid-decade redraw",
    "In August 2025, years ahead of the usual schedule, the Legislature passed a new congressional map after a quorum break by House Democrats. Supporters called it a lawful exercise of legislative authority and an accurate reflection of the state's voters. Opponents called it a partisan gerrymander that diluted minority voting strength, and litigation followed. Verify the current status before teaching this.");
  N(s, `
TIMING: 8 minutes. The most contested slide in the chapter.

CHECK CURRENCY FIRST. The 2025 map and its litigation were moving as of the
2026-27 year. Confirm where it stands before class.

TEACH THE MECHANICS BEFORE THE POLITICS. Cracking and packing are neutral
techniques that either party uses when it holds the pen. Students who learn the
techniques can evaluate any map, including maps drawn by the party they favor.

THE QUORUM BREAK is worth explaining as a procedural tool, not a stunt. The Texas
Constitution requires two-thirds of members present to conduct business, so
absent members can halt proceedings. Both parties have used it in Texas history.

HOW TO KEEP THIS CIVIL: ask the analytical question rather than the partisan one.
"What would a fair map look like, and who should draw it?" produces better
discussion than "was this map fair." Options worth naming: legislatures,
independent commissions, courts, or algorithms. Every option has a real
objection.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Time, money, and who gets to serve", [
    "Texas pays legislators $7,200 a year and asks them to serve 140 days every two years. Who can realistically take that job, and whose interests are likely to be underrepresented as a result?",
    "A committee chair can kill a bill by never scheduling a hearing, with no vote recorded. Is that an efficient filter on ten thousand bills, or an accountability problem?",
    "Who should draw legislative districts: the legislature, an independent commission, or a court? Name the strongest objection to your own answer.",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 IS THE BEST GENERAL CHOICE and produces the most honest discussion. Students
usually arrive at retirees, the independently wealthy, lawyers, business owners
with flexible schedules, and people whose employers benefit from having them in
Austin. Then ask who is missing: hourly workers, single parents, people without
savings. That is a structural observation, not a partisan one.

Q3 works well because every option has a genuine flaw. Legislatures are
self-interested. Commissions are unelected. Courts are accused of judicial
overreach whichever way they rule. Requiring students to name the objection to
their own answer is what makes this analysis instead of preference.
  `);
}

/* 8 */
{
  const s = k.slide("Where ten thousand bills go to die", "How a bill becomes law");
  const steps = [
    ["1", "Filed and referred", "A member files the bill. The Speaker or Lieutenant Governor refers it to a committee, and that choice alone can decide its fate."],
    ["2", "Committee", "Most bills die here, often without a hearing. Committees hold hearings, take public testimony, amend, and vote."],
    ["3", "Calendar", "Even a bill that passes committee must be scheduled. In the Senate, the intent calendar and the historic blocker bill practice made scheduling a powerful gatekeeping tool."],
    ["4", "Floor", "Second reading brings debate and amendment. Third reading brings final passage."],
    ["5", "The other chamber", "The whole process repeats. Different versions go to a conference committee."],
    ["6", "The governor", "Sign, veto, or allow it to become law unsigned. A line-item veto applies to spending bills."],
  ];
  let y = 1.86;
  steps.forEach(([n, t, d]) => {
    s.addShape(pres.ShapeType.ellipse, { x: M, y: y + 0.04, w: 0.42, h: 0.42, fill: { color: C.INK } });
    s.addText(n, { x: M, y: y + 0.04, w: 0.42, h: 0.42, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    s.addText(t, { x: M + 0.62, y: y, w: 2.5, h: 0.36, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.INK, lineSpacing: 16 });
    s.addText(d, { x: M + 3.25, y, w: W - M * 2 - 3.25, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16 });
    y += 0.76;
  });
  s.addText("Notice how many steps are gatekeeping rather than voting. In Texas, controlling the calendar is often more decisive than controlling the votes.", {
    x: M, y: 6.5, w: W - M * 2, h: 0.42, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, italic: true, color: C.INK, valign: "top",
  });
  N(s, `
TIMING: 7 minutes.

DO NOT NARRATE ALL SIX STEPS EVENLY. Spend your time on steps 2 and 3, because
that is where bills actually die and where power actually sits.

THE CLOSING LINE IS THE LESSON. Students expect legislation to fail by losing a
vote. In practice most bills die because someone with agenda control declined to
move them. Referral, hearing, and calendar are all gatekeeping decisions made by
a small number of people.

THE BLOCKER BILL is worth explaining if you have time. The Senate historically
placed a bill at the top of the calendar with no intention of passing it, so that
taking up any other bill required a supermajority to suspend the rules. The
threshold has changed over time, but the effect was to give the presiding officer
and a determined minority enormous leverage.

GOOD EXERCISE: pick a bill from the last session on Texas Legislature Online and
walk its actual history. Students are surprised how visible the record is.
  `);
}

/* 9 */
{
  const s = k.slide("Who serves, and what they are paid", "Compensation and composition");
  k.figure(s, "tx4_citizen_legislature.jpg", M, 1.95, 4.9, 2.5, null);
  k.statCallout(s, 5.6, 1.95, W - M - 5.6, 1.2, "$7,200",
    "per year, a figure fixed in the constitution, plus a per diem of $267 a day while in session.");
  s.addText([
    { text: "The citizen-legislature model ", options: { bold: true, color: C.INK } },
    { text: "assumes members hold other jobs and return home to live under the laws they pass. Supporters argue this keeps government close to ordinary life and prevents a professional political class. Critics argue it guarantees that only certain kinds of people can serve, and that a part-time legislature facing full-time lobbyists is outmatched on expertise.", options: { color: C.BODY } },
  ], {
    x: 5.6, y: 3.3, w: W - M - 5.6, h: 1.9, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top",
  });
  k.defBox(s, M, 4.7, W - M * 2, 1.9, "The 89th Legislature, 2025",
    "House: 88 Republicans and 62 Democrats. Senate: 20 Republicans and 11 Democrats. Women hold 61 of the 181 seats, about 34 percent, up from 27 percent four years earlier. The average age is about 55. The body remains less demographically representative than the state it governs, though the gap has narrowed.");
  N(s, `
TIMING: 6 minutes.

THE PAY IS CONSTITUTIONAL, which means raising it requires a statewide vote.
Texans have declined. Ask why voters would refuse to pay their own
representatives more. The honest answers include distrust of politicians and a
genuine preference for amateurs over professionals.

THE PER DIEM IS THE PART STUDENTS MISS. At \$267 a day across a 140 day session,
per diem far exceeds salary. A legislator earns roughly \$44,580 in a
regular-session year, which changes the picture from the headline \$7,200.

ON COMPOSITION, STAY DESCRIPTIVE. Report the numbers and let students draw
conclusions. The women's share rising from 27 to 34 percent in four years is a
real and fast change worth noting in both directions: it is progress, and 34
percent is still well below half.

CONNECT TO THE LOBBYING CHAPTER: a part-time legislature with small staffs relies
heavily on outside expertise. That is not corruption, it is capacity. Chapter 11
takes it up.
  `);
}

/* 10 */
{
  const s = k.discussion("Pause and think", "Design and consequence", [
    "The 1876 framers made the Legislature part-time on purpose, to keep it weak. Given what Texas faces now, thirty-one million people, a separate power grid, and a fast-growing economy, is that design still defensible?",
    "Texas legislators are paid a constitutionally fixed salary that voters must approve raising, and voters have refused. What does that tell you about how Texans view their own representatives?",
    "A part-time legislature with small staffs depends on lobbyists for technical expertise. Is that a corruption problem, a capacity problem, or both, and what would you change?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes.

Q1 IS THE STRONGEST and connects the whole course. Give students the February 2021
grid failure as a concrete case: the Legislature was in session then, which is
lucky. Ask what would have happened in an even-numbered year.

Q3 is the most sophisticated question and the best setup for Chapter 11. Push
students past "lobbyists are bad." The structural problem is that someone must
supply technical detail on ten thousand bills, and the state has chosen not to
fund that capacity internally. The people who fill the gap have interests. That
is a design consequence, not a conspiracy.

WATCH FOR: students treating the citizen legislature as obviously good or
obviously foolish. Both readings have serious defenders, and the notes on the
compensation slide give you the arguments for each.
  `);
}

/* 11 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 4 in the Trailblazer Trek: 8 sections, 1,985 points, one of the longest chapters in the course.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh the citizen-legislature model against its costs.", C.GOLD],
    ["\u2611", "Assessment", "TEST-BANK.md Part A has 5 unseen items for this chapter, tagged to ACGM outcomes. Parts B and C are practice only.", C.CRIM],
  ];
  const cw = (W - M * 2 - 0.7) / 3;
  cols.forEach(([g, t, d, col], i) => {
    const x = M + i * (cw + 0.35);
    s.addShape(pres.ShapeType.roundRect, { x, y: 2.0, w: cw, h: 3.0, rectRadius: 0.07, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    k.circle(s, x + 0.28, 2.25, g, col);
    s.addText(t, { x: x + 0.28, y: 2.95, w: cw - 0.56, h: 0.6, isTextBox: true, margin: 0, fontFace: B, fontSize: 15, bold: true, color: C.INK, lineSpacing: 19 });
    s.addText(d, { x: x + 0.28, y: 3.6, w: cw - 0.56, h: 1.25, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16 });
  });
  k.defBox(s, M, 5.3, W - M * 2, 1.1, "ACGM outcomes assessed by this chapter",
    "Outcome 4 (knowledge of the legislative, executive, and judicial branches) is primary. Outcome 3 is supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

Chapter 4 is one of the longest modules in the course at 1,985 points. If you
assign it as homework, warn students it runs closer to 60 minutes than 45.

A GOOD PAIRED ASSIGNMENT: have students look up their own state representative
and senator on Texas Legislature Online, find one bill that member filed last
session, and report what happened to it. Most bills died in committee, which makes
the lesson land personally.
  `);
}

/* 12 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The institution", "Texas Legislature Online carries every bill, its full history, committee assignments, and member pages. capitol.texas.gov"],
    ["The constitution", "Texas Constitution, Article III, the Legislative Department. statutes.capitol.texas.gov"],
    ["Compensation", "Texas Ethics Commission sets and publishes the legislative per diem. ethics.state.tx.us"],
    ["Composition data", "Legislative Reference Library of Texas publishes membership statistics by party, gender, and age for each legislature."],
    ["Redistricting", "Texas Legislative Council redistricting resources, including current and historical maps."],
    ["Openly licensed text", "OpenStax and OER Texas Government resources, CC BY 4.0, the base this module adapts."],
  ];
  let y = 1.95;
  refs.forEach(([t, d]) => {
    s.addText(t.toUpperCase(), { x: M, y, w: 2.6, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11, bold: true, color: C.GOLD, charSpacing: 1.2 });
    s.addText(d, { x: M + 2.7, y: y - 0.03, w: W - M - 2.7 - M, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17 });
    y += 0.78;
  });
  s.addText("This deck is licensed CC BY 4.0. Adopt it, adapt it, share it. Attribution appreciated.", {
    x: M, y: 6.5, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, italic: true, color: C.MUTE,
  });
  N(s, `
Leave this up during questions.

TEXAS LEGISLATURE ONLINE IS THE BEST TEACHING TOOL in this chapter and it is
free. Every bill's full history is public: who filed it, which committee got it,
whether a hearing happened, every vote. Project it live and trace one bill in
five minutes. Students who have only heard that government is opaque are usually
startled by how much is visible.
  `);
}

/* 13 */
{
  const s = k.closing("The question to leave with",
    "\u201CWho benefits from a legislature\nthat meets rarely?\u201D",
    "Ask it whenever you hear that Texas government is inefficient. Inefficiency is sometimes an accident, and sometimes a design.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The answer students usually reach: whoever is satisfied with current policy, and
whoever is organized enough to work a compressed calendar. Both answers are
accurate and neither is partisan, since which party benefits changes with who
holds power.

Good exit ticket: "Name one advantage and one cost of the 140 day session, then
say which matters more to you and why."

Preview Chapter 5: if the Legislature is deliberately weak, and the governor is
deliberately weak, then who actually runs Texas?
  `);
}

pres.writeFile({ fileName: "slides/Chapter 04 - The Texas Legislature (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
