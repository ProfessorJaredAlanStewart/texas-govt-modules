/**
 * Chapter 5 — The Texas Plural Executive
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 5", "The Texas Plural Executive");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 5", "The Plural\nExecutive",
    "Texas has a governor. Texas does not have a chief executive. Those are not the same thing.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 5: THE TEXAS PLURAL EXECUTIVE
About 70 minutes with both discussion pauses.

OPENING (3 min). Ask: "If the governor of Texas wanted to fire the attorney
general, could he?" Most students say yes. The answer is no. The attorney general
is elected separately by the same voters and answers to them, not to the
governor.

Then ask the same about the comptroller, the land commissioner, and the
agriculture commissioner. Same answer each time. That is the chapter in one
exchange: Texas deliberately refused to put one person in charge of the executive
branch.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 70 minutes with both pauses. For a 50 minute class, compress the individual offices into the overview slide.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely.", C.GOLD],
    ["\u2696", "Verify officeholders", "Statewide offices change through elections, appointments, and vacancies. Confirm current names before teaching.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 5's seven sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

VERIFY NAMES BEFORE CLASS. The comptroller's office in particular turned over
several times in a short period recently. Nothing undermines credibility faster
than naming the wrong officeholder to a room where someone follows state politics.

If students have done Chapter 1 or 2, the Davis material will be familiar.
Compress it and spend the time on the governor's actual powers and the
interplay slide, which is where the analysis is.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Explain", "what a plural executive is and why Texas has one."],
    ["Describe", "the Texas governor's formal powers and their limits."],
    ["Distinguish", "formal power from informal power in the governorship."],
    ["Identify", "the separately elected executive officials and what each does."],
    ["Evaluate", "whether fragmenting executive power improves or weakens accountability."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #3 and #5. Objective 3 explains why weak governors can still be
effective, which students find counterintuitive. Objective 5 is the values
question the whole chapter builds toward.
  `);
}

/* 4 */
{
  const s = k.slide("Why Texas refused to put one person in charge", "The Davis inheritance");
  k.figure(s, "tx5_ej_davis.jpg", M, 1.95, 3.6, 2.8,
    "Governor E. J. Davis, 1870 to 1874.");
  s.addText([
    { text: "Most states concentrate executive authority in a governor who appoints and can dismiss the heads of major agencies. Texas does the opposite, and did it deliberately. ", options: { color: C.BODY } },
    { text: "The 1876 framers had just watched Governor Davis use a four year term, control of appointments, authority over voter registration, and a state police force. Their answer was to break the executive branch into pieces that no one person could hold.", options: { bold: true, color: C.INK } },
  ], {
    x: 4.5, y: 1.95, w: W - M - 4.5, h: 2.0, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  k.defBox(s, 4.5, 4.1, W - M - 4.5, 1.7, "Plural executive, defined",
    "An executive branch in which power is divided among several officials who are elected independently of one another, rather than concentrated in a single chief executive. Each answers to the voters directly. None answers to the governor.");
  s.addText("The trade the framers made: a governor who cannot become a tyrant, and also cannot fully govern. Texas has lived inside that trade ever since.", {
    x: M, y: 6.1, w: W - M * 2, h: 0.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, italic: true, color: C.INK, lineSpacing: 18, valign: "top",
  });
  N(s, `
TIMING: 6 minutes.

IF YOU TAUGHT CHAPTER 1 OR 2, this is review. Move fast and get to the
consequence.

THE COMPARISON THAT LANDS: the president appoints the entire cabinet and can
dismiss any of them. The governor of Texas appoints the secretary of state and
essentially no other principal executive officer. Everyone else was elected by the
same voters who elected the governor, and often ran against the governor's
positions.

ASK: "What happens when the governor and the attorney general disagree about
whether to defend a state law in court?" The honest answer is that it becomes a
public fight with no internal resolution, because neither can overrule the other.
That has happened in Texas and in other plural-executive states.

The closing line is the thesis. Write it on the board.
  `);
}

/* 5 */
{
  const s = k.slide("What the governor can actually do", "Formal powers");
  k.figure(s, "tx5_veto_pen.jpg", 8.5, 1.95, 4.2, 2.3, null);
  const powers = [
    ["Veto", "Reject a bill outright. An override requires two-thirds of each chamber, which is rare, especially after a session ends."],
    ["Line-item veto", "Strike individual spending items from an appropriations bill without killing the whole bill. This applies only to spending."],
    ["Special sessions", "Call the Legislature back for up to 30 days, and set the agenda. Lawmakers may consider only what the governor lists."],
    ["Appointments", "Name thousands of people to boards, commissions, and university regencies over a full term, subject to Senate confirmation."],
    ["Clemency", "Grant pardons, commutations, and reprieves, but generally only on the written recommendation of the Board of Pardons and Paroles."],
  ];
  let y = 1.95;
  powers.forEach(([t, d]) => {
    s.addText(t, { x: M, y: y + 0.02, w: 2.1, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.GOLD });
    s.addText(d, { x: M + 2.2, y, w: 5.4, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16 });
    y += 0.84;
  });
  k.defBox(s, M, 6.12, W - M * 2, 0.82, "Notice the pattern",
    "Most of these are powers to STOP things. The Texas governor is far better equipped to block than to build, which is exactly what the 1876 framers intended.");
  N(s, `
TIMING: 7 minutes.

THE PATTERN BOX IS THE ANALYTICAL POINT. Veto, line-item veto, and refusing to
call a session are all negative powers. Appointment is the main positive power,
and it works slowly, over years.

THE POST-SESSION VETO is worth explaining. Because the Legislature adjourns and
does not return for twenty months, a veto issued after adjournment cannot be
overridden. There is no practical check on it at all. Students find this
surprising and it is one of the strongest tools the office holds.

NO POCKET VETO IN TEXAS. Unlike the president, a Texas governor who ignores a
bill lets it become law. Inaction favors passage here.

CLEMENCY IS DELIBERATELY CONSTRAINED. The governor cannot simply pardon someone.
The Board of Pardons and Paroles must recommend it first. The governor may
independently grant only a single thirty-day reprieve. That restriction is
another piece of the 1876 design.
  `);
}

/* 6 */
{
  const s = k.slide("The officials the governor cannot fire", "The plural executive");
  k.figure(s, "tx5_plural_executive.jpg", 8.6, 1.95, 4.1, 2.2, null);
  const offices = [
    ["Lieutenant Governor", "Elected statewide. Presides over the Senate and controls its committees and calendar. Widely considered the most powerful office in Texas."],
    ["Attorney General", "The state's lawyer. Represents Texas in court, issues formal legal opinions, and decides which suits to bring or defend."],
    ["Comptroller", "Chief financial officer. Collects taxes and issues the biennial revenue estimate that caps what the Legislature may spend."],
    ["Land Commissioner", "Runs the General Land Office, manages state lands and the Permanent School Fund, and administers the Alamo."],
    ["Agriculture Commissioner", "Regulates agriculture, inspects weights and measures, and administers school nutrition programs."],
  ];
  let y = 1.95;
  offices.forEach(([t, d]) => {
    s.addText(t, { x: M, y: y + 0.02, w: 2.6, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.GOLD });
    s.addText(d, { x: M + 2.7, y, w: 5.1, h: 0.82, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16 });
    y += 0.84;
  });
  k.defBox(s, M, 6.12, W - M * 2, 0.82, "Also elected, and often overlooked",
    "The three-member Railroad Commission, which regulates oil and gas rather than railroads, and the fifteen-member State Board of Education, which sets curriculum standards and approves textbooks.");
  N(s, `
TIMING: 7 minutes. Verify every name before class.

DO NOT JUST READ THE LIST. Pick the two that matter most and explain why.

THE COMPTROLLER'S REVENUE ESTIMATE is the quiet power students never expect. The
Legislature cannot appropriate more than the comptroller certifies will be
available. One elected official, by issuing a forecast, sets a hard ceiling on
what the entire Legislature may spend. Forward reference to Chapter 14.

THE ATTORNEY GENERAL decides which lawsuits Texas brings and which state laws it
defends. That is enormous discretion, exercised by someone the governor cannot
direct.

THE RAILROAD COMMISSION NAME is the best trivia in the course and it makes a real
point: most voters do not know what the office does, which weakens accountability
in races almost nobody researches. Chapters 17 and 18 return to it.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Fragmented power", [
    "Texas divided executive authority so no single official could dominate. Does that make government more accountable to voters, because each officer faces the electorate, or less accountable, because no one can be held responsible for an outcome?",
    "The comptroller's revenue estimate sets a ceiling the entire Legislature cannot exceed. Should one elected official hold that much fiscal power, and what would a better arrangement look like?",
    "Most voters cannot say what the Railroad Commission regulates. What does it mean to elect officials whose jobs the electorate does not understand?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Q1 IS THE CENTRAL QUESTION OF THE CHAPTER. Both answers are serious. Direct
election of each officer is genuinely more democratic in one sense. Diffusion of
blame is genuinely less accountable in another. Push students to notice that
"accountability" is doing two different jobs in that sentence.

Q3 is the sleeper and produces good discussion. It also sets up Chapters 8 and 9
on low-information voting. If nobody knows what an office does, what exactly is
an election for it measuring? Party label, usually, which is an honest answer
rather than a cynical one.

A fair follow-up: would appointing these officers be better? Then who appoints,
and who checks the appointer?
  `);
}

/* 8 */
{
  const s = k.slide("Where the real leverage is", "The interplay with the Legislature");
  k.figure(s, "tx5_lbb_budget.jpg", 8.45, 1.95, 4.25, 2.3, null);
  s.addText("Because the governor is formally weak and much of the executive is elected separately, real leverage runs through channels other than command.", {
    x: M, y: 1.95, w: 7.55, h: 0.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const levers = [
    ["The budget", "The Legislative Budget Board drafts the state budget, and the governor plays no part in writing it. The line-item veto is the governor's entry point, and it comes at the end."],
    ["Agency rulemaking", "Agencies fill in statutory detail through rules that carry the force of law. Boards the governor appointed over years shape that output. Chapter 18."],
    ["Attorney General opinions", "A formal opinion interpreting state law carries real weight and can settle a dispute without legislation."],
    ["The special session", "Calling one, and defining its agenda, is how a governor forces the Legislature to confront a chosen issue."],
  ];
  let y = 2.7;
  levers.forEach(([t, d]) => {
    s.addText(t, { x: M, y: y + 0.02, w: 2.3, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.TEAL });
    s.addText(d, { x: M + 2.4, y, w: 5.35, h: 0.9, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16 });
    y += 0.98;
  });
  N(s, `
TIMING: 6 minutes.

THE LESSON: in Texas, power flows through process rather than hierarchy. A
student who understands that will read state politics far better than one who
looks only at who holds which title.

THE BUDGET POINT SURPRISES STUDENTS. The governor does not write the Texas budget.
The Legislative Budget Board does, working within the comptroller's revenue
estimate. The governor's influence arrives at the end, through the line-item veto,
which is a blunt instrument applied to someone else's document.

CONNECT FORWARD: the appointment power looks weak in any single year and
enormous across eight or ten. A long-serving governor eventually shapes nearly
every board in state government, which means the bureaucracy chapter is partly a
story about accumulated appointments.
  `);
}

/* 9 */
{
  const s = k.slide("Why weak governors can still be strong", "Informal powers");
  k.figure(s, "tx5_bush_informal.jpg", M, 1.95, 4.6, 2.6, null);
  const informal = [
    ["Persuasion", "Private negotiation with legislative leaders, often more decisive than any public act."],
    ["Party leadership", "Influence over primaries, endorsements, and fundraising shapes how legislators calculate risk."],
    ["Media attention", "The governor is the single most visible official in Texas and can set the public agenda by choosing what to talk about."],
    ["The prestige of the office", "Access, symbolism, and the ability to convene people who would not otherwise meet."],
  ];
  let y = 1.95;
  informal.forEach(([t, d]) => {
    s.addText(t, { x: 5.4, y: y + 0.02, w: 2.6, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.GOLD });
    s.addText(d, { x: 8.1, y, w: W - M - 8.1, h: 0.85, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16 });
    y += 0.80;
  });
  k.defBox(s, M, 5.3, W - M * 2, 1.5, "Two governors, same constitution",
    "George W. Bush built a working relationship with Democratic Lieutenant Governor Bob Bullock and passed much of his agenda in a divided Capitol. Other governors holding identical formal powers accomplished far less. The constitution sets the floor and the ceiling; the officeholder decides where in between the office actually operates.");
  N(s, `
TIMING: 6 minutes.

THIS IS THE COUNTERINTUITIVE SLIDE AND THE ONE WORTH PROTECTING IF YOU RUN SHORT.
Students leave Chapter 5 believing the Texas governor is powerless. That is wrong,
and the Bush and Bullock example is the cleanest correction available.

THE ARGUMENT: formal power is the same for everyone who holds the office. What
varies is skill at persuasion, relationships, timing, and public attention. Two
governors with identical constitutional authority produce very different records.

A GOOD QUESTION: "Is it a problem that so much depends on personality rather than
structure?" There is no clean answer. A system that depends on skill rewards
skill; it also produces inconsistent governance.

Since 1994 Texas has had three governors, all Republicans: Bush, Perry, and
Abbott. Perry's long tenure is the clearest illustration of appointment power
compounding over time.
  `);
}

/* 10 */
{
  const s = k.discussion("Pause and think", "Design, skill, and accountability", [
    "If a governor's effectiveness depends this heavily on personal skill rather than formal authority, is that a strength of the Texas system or a weakness?",
    "A veto issued after the Legislature adjourns cannot be overridden for twenty months. Is that an acceptable feature of a part-time legislature, or a gap that should be closed?",
    "Would Texas be governed better with a single strong governor who appoints the executive branch, as the federal government does? Name the strongest objection to your answer.",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes.

Q3 IS THE CHAPTER'S CULMINATING QUESTION and the best of the three. It forces
students to weigh efficiency against the specific danger the 1876 framers feared.
Require the objection to their own answer; that requirement is what turns
preference into analysis.

Q2 is narrow and concrete, which works well for students who struggle with
abstraction. The post-adjournment veto is a genuine structural gap, and the fix
would be either a longer session or a mandated veto session. Both have costs.

If the discussion stalls on Q1, make it concrete: ask whether they would rather
have a highly skilled governor they disagree with, or an unskilled one they
support. The answers are revealing.
  `);
}

/* 11 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 5 in the Trailblazer Trek: 7 sections, 1,600 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh fragmented power against accountability.", C.GOLD],
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

A GOOD PAIRED ASSIGNMENT: have students pick one statewide office other than
governor, find the current officeholder, and report one decision that officer made
in the past year. Most students have never heard of the land commissioner and are
surprised to learn the office runs the Alamo and the Permanent School Fund.
  `);
}

/* 12 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The constitution", "Texas Constitution, Article IV, the Executive Department. statutes.capitol.texas.gov"],
    ["The offices", "Official sites for the Governor, Attorney General, Comptroller, General Land Office, and Department of Agriculture carry current duties and officeholders."],
    ["The budget", "Legislative Budget Board and the Comptroller's biennial revenue estimate. lbb.texas.gov and comptroller.texas.gov"],
    ["Clemency", "Texas Board of Pardons and Paroles publishes its recommendation process and statistics."],
    ["History", "Handbook of Texas Online, Texas State Historical Association. Entries on E. J. Davis, the governorship, and individual officeholders."],
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

THE COMPTROLLER'S BIENNIAL REVENUE ESTIMATE is worth showing live if you have a
projector. It is the document that caps what the Legislature may spend, and
students who see it understand the office's power immediately in a way no
description achieves.
  `);
}

/* 13 */
{
  const s = k.closing("The question to leave with",
    "\u201CIf no one is in charge,\nwho do you hold responsible?\u201D",
    "Texas answered that question in 1876 by deciding the danger of one person in charge was worse. Every election since has tested the answer.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

This is the chapter's honest tension. Fragmenting power protects against abuse
and dissolves responsibility. Both are true at once, and the framers accepted the
second to prevent the first.

Good exit ticket: "A state agency performs badly. Under the Texas plural
executive, who is responsible, and how would a voter hold them accountable?"
Students usually discover that the answer is genuinely unclear, which is the
point.

Preview Chapter 6: the Legislature is fragmented, the executive is fragmented.
The judiciary is next, and Texas made an unusual choice there too by putting
judges on the ballot.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 05 - The Plural Executive (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
