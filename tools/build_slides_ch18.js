/**
 * Chapter 18 — The Texas Bureaucracy and Sunset Review
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 18", "The Texas Bureaucracy and Sunset Review");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 18", "The Bureaucracy\nand Sunset Review",
    "The Legislature meets 140 days every two years. Somebody has to run the state for the other 590.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 18: THE TEXAS BUREAUCRACY AND SUNSET REVIEW
About 75 minutes with all three discussion pauses.

OPENING (3 min). Ask students to name a law the Legislature passed last session.
Few can. Then ask how many have taken a driver test, received financial aid,
gotten a professional license, had a restaurant inspected, or renewed a vehicle
registration. Every hand goes up.

Those are all bureaucratic encounters. Students interact with agencies constantly
and with the Legislature almost never.

THE FRAME: this is the branch nobody votes for and everybody deals with. It is
also where Texas built an accountability tool the rest of the country copied.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, compress the agency survey and cut one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Verify Sunset figures and agency examples before teaching.", C.GOLD],
    ["\u2696", "Resist both caricatures", "Students arrive thinking bureaucrats are either villains or irrelevant. The notes push toward the structural questions instead.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 18's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

THIS IS THE COURSE'S LAST CHAPTER and it works well as a synthesis. Nearly every
earlier concept reappears: the plural executive, delegation, iron triangles, the
part-time legislature, federalism through delegated programs.

THE TEACHING RISK is that students arrive with a fixed cartoon, either faceless
obstruction or harmless paper shuffling. The honest picture is that agencies
exercise real lawmaking power under delegated authority, which raises genuine
accountability questions that both critics and defenders of government take
seriously.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Explain", "why legislatures delegate authority to agencies."],
    ["Describe", "the fragmented structure of Texas boards and commissions."],
    ["Distinguish", "merit systems from patronage."],
    ["Analyze", "Sunset review and evaluate whether it works."],
    ["Explain", "how agencies make rules and how citizens can participate."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #4 and #5. Objective 4 covers the tool Texas invented and other states
copied. Objective 5 is the one with a practical payoff students can actually use.

If you compress, shorten #2 since the structure repeats Chapter 5's logic.
  `);
}

/* 4 */
{
  const s = k.slide("Why the Legislature hands power away", "Delegation");
  k.figure(s, "tx1_texas_capitol.jpg", 8.5, 1.95, 4.2, 2.15, null);
  s.addText([
    { text: "Bureaucracy ", options: { bold: true, color: C.INK } },
    { text: "is the permanent administrative machinery of government: the agencies, boards, and commissions that carry out what the Legislature decides. In Texas roughly 300,000 people work in state government, and none of them are elected to the jobs they do.", options: { color: C.BODY } },
  ], {
    x: M, y: 1.95, w: 7.6, h: 1.2, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  const why = [
    ["Expertise", "Legislators are generalists. Writing a safety standard for a chemical plant requires specialized knowledge nobody acquires in a 140 day session."],
    ["Time", "Ten thousand bills in 140 days leaves no room to specify every operational detail."],
    ["Continuity", "The Legislature is out of session for twenty of every twenty-four months. Agencies operate continuously."],
    ["Flexibility", "Conditions change between sessions. Rules can be revised without waiting two years for a statute."],
  ];
  let y = 3.25;
  why.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 1.75, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 1.85, y, w: 6.0, h: 0.72, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.8;
  });
  k.defBox(s, M, 6.5, W - M * 2, 0.55, "", "");
  N(s, `
TIMING: 6 minutes.

THE DELEGATION POINT IS THE CHAPTER'S FOUNDATION. A statute saying facilities must
be safe and sanitary hands enormous discretion to whoever writes the rule
defining those words. That is delegation, and it is unavoidable given how
legislatures work.

CONNECT TO CHAPTER 4 EXPLICITLY. Texas chose a part-time legislature. That choice
guarantees a large delegation of authority to agencies, because somebody has to
handle the details and the continuity. Students who see that connection understand
that the size of the bureaucracy is a consequence of the constitutional design,
not an accident.

THE DEMOCRATIC TENSION IS WORTH STATING PLAINLY: unelected officials write rules
carrying the force of law. Defenders answer that they act under authority granted
by elected legislators and are subject to oversight. Critics answer that the
oversight is thin. Both are serious, and the rest of the chapter examines the
tools.
  `);
}

/* 5 */
{
  const s = k.slide("Fragmentation, one level deeper", "Boards and commissions");
  k.figure(s, "tx5_plural_executive.jpg", 8.5, 1.95, 4.2, 2.1, null);
  const forms = [
    ["Elected", "The Railroad Commission and the State Board of Education answer directly to voters, not to the governor."],
    ["Appointed boards", "Most Texas agencies are governed by boards whose members the governor appoints with Senate confirmation, serving staggered six year terms."],
    ["Single administrator", "A few agencies are run by one commissioner, appointed by the governor or by a board."],
    ["Ex officio", "Some boards include officials who serve by virtue of another office they hold."],
  ];
  let y = 1.95;
  forms.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.25, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.35, y, w: 5.5, h: 0.82, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.9;
  });
  k.defBox(s, M, 5.7, W - M * 2, 1.35, "Staggered terms are the quiet mechanism",
    "Because board members serve six year staggered terms, a governor cannot replace a board at once. It also means a long serving governor eventually appoints every member of nearly every board in state government. Appointment power looks weak in one year and enormous across eight. Chapter 5.");
  N(s, `
TIMING: 6 minutes.

THE STAGGERED TERM POINT IS THE MOST IMPORTANT INSIGHT ON THIS SLIDE and it
resolves an apparent contradiction from Chapter 5. The Texas governor is
constitutionally weak, yet a governor serving a decade shapes the entire
administrative state through accumulated appointments. Both statements are true,
and the mechanism is staggered terms plus time.

THE FRAGMENTATION MIRRORS THE PLURAL EXECUTIVE. There is no cabinet, no chain of
command, and no single official accountable for agency performance. Ask students
who they would hold responsible when an agency fails. The honest answer is
genuinely unclear, which is the 1876 design working as intended.

THE SENATE CONFIRMATION ROLE is worth naming as a check, and it is a real one:
the Senate can and occasionally does refuse appointees.
  `);
}

/* 6 */
{
  const s = k.slide("Who does the work", "Merit and patronage");
  const cw = (W - M * 2 - 0.4) / 2;
  const sides = [
    ["MERIT SYSTEM", "Hiring by qualification", [
      "Positions filled through competitive processes",
      "Continuity of expertise across administrations",
      "Protection from political dismissal",
      "Slower to hire and harder to remove poor performers",
    ], C.TEAL],
    ["PATRONAGE", "Hiring by political connection", [
      "Rewards supporters and builds loyalty",
      "Lets elected officials install people who share their agenda",
      "Historically associated with the spoils system",
      "Risks incompetence and turnover with each election",
    ], C.CRIM],
  ];
  sides.forEach(([t, sub, items, col], i) => {
    const x = M + i * (cw + 0.4);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 3.2, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 0.9, rectRadius: 0.08, fill: { color: col } });
    s.addText(t, { x: x + 0.28, y: 2.08, w: cw - 0.56, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.WHITE, valign: "top" });
    s.addText(sub, { x: x + 0.28, y: 2.42, w: cw - 0.56, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: "F0E6D2", valign: "top" });
    s.addText(items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j !== items.length - 1 } })), {
      x: x + 0.28, y: 3.0, w: cw - 0.56, h: 2.0, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 18, paraSpaceAfter: 6, valign: "top",
    });
  });
  k.defBox(s, M, 5.3, W - M * 2, 1.75, "Texas is unusual here",
    "Texas has no comprehensive statewide civil service system covering all state employment. Agencies largely set their own personnel practices within statutory limits, and most state employees are employed at will. Many county offices also operate without formal merit systems. The result varies considerably by agency and by county.");
  N(s, `
TIMING: 6 minutes.

THE TEXAS FACT IN THE BOX SURPRISES STUDENTS who assume government jobs are
uniformly protected. Texas has no single statewide civil service system, and most
state employees serve at will. Practices vary by agency.

PRESENT THE TRADE-OFF HONESTLY. Merit systems deliver continuity and insulation
from political pressure, and they make it harder to remove poor performers.
Patronage delivers responsiveness to elected officials and risks staffing by
loyalty. Every system in between is trying to balance those.

THE HISTORICAL CONTEXT IS WORTH THIRTY SECONDS. The federal move toward merit
hiring followed President Garfield's assassination by a disappointed office seeker
in 1881, which produced the Pendleton Act. That is why the spoils system has the
reputation it does.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Unelected power", [
    "Agencies write rules that carry the force of law, and nobody elects the people who write them. Is that a democratic problem, or is delegation with oversight exactly how a modern state has to work?",
    "A Texas governor is constitutionally weak yet eventually appoints every member of nearly every state board. Does that make the office strong or weak, and over what time horizon?",
    "Most Texas state employees work at will, without civil service protection. Does that make government more responsive to voters or more vulnerable to political pressure?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 IS THE BEST SINGLE CHOICE and it is the central question of administrative
government everywhere. The strongest version of each side: delegation is
unavoidable because legislatures cannot write technical detail, and delegation is
dangerous because the people exercising the power face no voters. Both are true.
The remedies, oversight and Sunset and rulemaking participation, are what the rest
of the chapter covers.

Q2 IS THE BEST SYNTHESIS QUESTION and rewards students who remember Chapter 5.
The answer is that the office is weak in any snapshot and strong across time,
which is a genuinely useful distinction.

Q3 has no clean answer and both framings are accurate descriptions of the same
arrangement.
  `);
}

/* 8 */
{
  const s = k.slide("The tool Texas invented", "Sunset review");
  k.figure(s, "tx4_texas_capitol_interior.jpg", 8.5, 1.95, 4.2, 2.1, null);
  s.addText("Under the Texas Sunset Act of 1977, most state agencies are automatically abolished on a set date unless the Legislature affirmatively votes to continue them. The burden of proof falls on the agency to justify its own existence.", {
    x: M, y: 1.95, w: 7.6, h: 0.95, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const how = [
    ["The cycle", "About 130 agencies are reviewed on a roughly twelve year cycle, a handful each session."],
    ["The commission", "The Sunset Advisory Commission has twelve members: five senators, five representatives, and two public members."],
    ["The process", "Staff conduct an in-depth evaluation, the commission holds public hearings and adopts recommendations, and the Legislature acts."],
    ["The outcomes", "An agency may be continued, continued with changes, consolidated with another, or abolished outright."],
  ];
  let y = 3.05;
  how.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 1.9, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.0, y, w: 5.85, h: 0.74, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.82;
  });
  k.statCallout(s, M, 6.4, W - M * 2, 0.65, "38 states",
    "have adopted some form of sunset review since Texas created it. Colorado was first; Texas built the model others studied.");
  N(s, `
TIMING: 7 minutes. The distinctive Texas contribution.

THE REVERSAL IS THE BIG IDEA. Normally a program continues unless somebody stops
it. Sunset flips the default: the agency ends unless the Legislature acts. That
single change in the default forces a review that would otherwise never happen.

SAY WHY THE DEFAULT MATTERS. Legislative attention is scarce. Without a forcing
mechanism, agencies are examined only after a scandal. Sunset guarantees a serious
look on a schedule regardless of whether anything has gone wrong.

THE PUBLIC MEMBERS are worth naming. Two of the twelve commission members are
private citizens appointed by the lieutenant governor and speaker. That is unusual
in Texas oversight structures.

TEXAS IS THE MODEL OTHERS COPIED, which is a rare case of Texas exporting an
institution rather than importing one. Students find that satisfying and it is
accurate.
  `);
}

/* 9 */
{
  const s = k.slide("Does it work?", "Evaluating Sunset");
  k.twoSides(s, 1.95,
    "The case that it works", [
      "Dozens of agencies have been abolished or consolidated since 1977",
      "The Commission reports savings and revenue gains far exceeding the cost of running the process",
      "Review happens on schedule rather than only after a scandal",
      "Public hearings create a formal moment for citizens and affected groups to be heard",
    ],
    "The case that it falls short", [
      "The overwhelming majority of agencies are continued, so abolition is rare",
      "Legislators reviewing agencies receive campaign contributions from the industries those agencies regulate",
      "Twelve years is long enough for problems to persist between reviews",
      "Recommendations can be weakened or ignored when the Legislature acts on them",
    ], 2.85);
  k.defBox(s, M, 5.05, W - M * 2, 2.0, "A fair reading",
    "The Sunset Commission reports that roughly 95 agencies have been abolished or consolidated and that the process has produced savings and revenue gains many times its operating cost. It is also true that most agencies are continued, which supporters read as evidence that most agencies are justified and critics read as evidence the process is not stringent. Both readings use the same number.");
  N(s, `
TIMING: 7 minutes.

THE CLOSING BOX IS THE MOST VALUABLE THING ON THIS SLIDE because it teaches a
transferable skill: the same statistic supports opposite conclusions depending on
the standard you apply. If you expect most agencies to be justified, a high
continuation rate is success. If you expect systematic waste, it is failure. The
number does not settle it.

VERIFY THE FIGURES before teaching. The Commission publishes updated totals each
biennium, including the abolition count and the reported return ratio.

THE CONTRIBUTIONS CRITICISM IS DOCUMENTED rather than alleged, and it connects
directly to Chapter 11. Legislators who sit on the commission reviewing an agency
may receive contributions from the regulated industry. Whether that changes
outcomes is contested; that the structure exists is not.

Present both columns without a verdict.
  `);
}

/* 10 */
{
  const s = k.slide("How agencies make law", "Rulemaking");
  k.figure(s, "tx12_policy_process.jpg", 8.5, 1.95, 4.2, 2.1, null);
  k.timeline(s, 1.95, [
    ["1", "Proposed rule published", "The agency publishes the proposed rule in the Texas Register, the state's official journal of agency action."],
    ["2", "Public comment", "A comment period follows, usually at least thirty days. Anyone may comment, and agencies must respond to significant comments."],
    ["3", "Adoption", "The agency adopts, revises, or withdraws the rule, and adopted rules enter the Texas Administrative Code with the force of law."],
  ], 2.45);
  k.defBox(s, M, 4.55, W - M * 2, 1.35, "This is the highest leverage civic act in Texas",
    "Almost all comments on proposed rules come from regulated industry and organized groups. Individual citizens rarely comment. An informed comment from an affected Texan is unusual enough that it gets read, and the agency must respond to it.");
  s.addText([
    { text: "A worked example. ", options: { bold: true, color: C.INK } },
    { text: "The Legislature passes a statute saying childcare facilities must maintain safe staffing ratios. It does not say what the ratio is. The agency writes a rule specifying one adult per four infants. That number, not the statute, is the law a childcare center actually follows, and it was written by people nobody elected, through a process anyone could have joined.", options: { color: C.BODY } },
  ], {
    x: M, y: 6.05, w: W - M * 2, h: 1.0, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 7 minutes. The most practically useful slide in the chapter.

THE WORKED EXAMPLE IS THE TEACHING TOOL. Run it slowly. The statute says safe.
The rule says one to four. A center staffing one to five is breaking the law, and
that law was written by an agency. Students grasp delegation immediately once they
see a specific number appear from nowhere.

THE LEVERAGE POINT IS THE ACTION ITEM. The Texas Register is public and free.
Comment periods are open to anyone. Almost nobody outside regulated industry
participates. A nurse commenting on a nursing rule, or a childcare worker on a
childcare rule, carries weight precisely because it is rare.

CONNECT TO CHAPTER 11: this is where organized groups exercise influence between
sessions, with almost no competition from the public.

If you assign Texas In Action, the rulemaking comment activity pairs directly with
this slide.
  `);
}

/* 11 */
{
  const s = k.slide("The agencies that shape daily life", "Who does what");
  const agencies = [
    ["TEA", "Texas Education Agency. Administers school funding, accountability ratings, and educator certification.", C.INK],
    ["HHSC", "Health and Human Services Commission. Runs Medicaid, CHIP, SNAP eligibility, and facility licensing.", C.TEAL],
    ["DPS", "Department of Public Safety. State police, driver licensing, and the state's criminal records systems.", C.CRIM],
    ["TxDOT", "Department of Transportation. Builds and maintains the state highway system.", C.GOLD],
    ["TDCJ", "Department of Criminal Justice. Prisons, state jails, parole, and community supervision. Chapter 13.", C.MUTE],
    ["TCEQ", "Commission on Environmental Quality. Air and water permitting and enforcement. Chapter 17.", C.TEAL],
    ["TDLR", "Department of Licensing and Regulation. Licenses dozens of occupations, from electricians to barbers.", C.GOLD],
  ];
  let y = 1.88;
  agencies.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: W - M * 2, h: 0.62, rectRadius: 0.05, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.13, h: 0.62, rectRadius: 0.05, fill: { color: col } });
    s.addText(t, { x: M + 0.32, y: y + 0.16, w: 1.1, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 1.55, y: y + 0.16, w: W - M * 2 - 1.85, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, valign: "top" });
    y += 0.66;
  });
  s.addText("Occupational licensing deserves a note: roughly one in five American workers needs a license to do their job. That is a bureaucratic decision with direct effects on who can earn a living.", {
    x: M, y: 6.55, w: W - M * 2, h: 0.45, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12, italic: true, color: C.INK, lineSpacing: 16, valign: "top",
  });
  N(s, `
TIMING: 6 minutes. Candidate to compress in a 50 minute class.

DO NOT READ THE LIST. Ask instead: which of these have you personally dealt with?
DPS gets the most hands, usually for a driver license. Then ask which one affects
them most, and the answer is often TEA or HHSC, agencies they have never thought
about.

OCCUPATIONAL LICENSING IS THE BEST DISCUSSION HOOK on this slide and it scrambles
partisan alignment. Licensing protects consumers from unqualified practitioners
and raises barriers to entry for people trying to start a career, especially those
with criminal records. Reform coalitions have included both economic
conservatives and civil rights advocates.

CONNECT TO CHAPTER 13: licensing restrictions on people with convictions are a
collateral consequence that outlasts a sentence.
  `);
}

/* 12 */
{
  const s = k.slide("How anyone holds them accountable", "Oversight and transparency");
  k.figure(s, "tx7_school_district.jpg", 8.5, 1.95, 4.2, 2.1, null);
  const tools = [
    ["Legislative oversight", "Committees hold hearings, and the Legislature controls every agency's appropriation. The budget is the sharpest tool."],
    ["Sunset review", "The scheduled, structural review that forces justification on a cycle."],
    ["State Auditor", "Conducts financial and performance audits and publishes them publicly."],
    ["Public Information Act", "Any Texan may request agency records. The Attorney General resolves disputes over withholding."],
    ["Open Meetings Act", "Governmental bodies must meet publicly with posted notice, with limited exceptions for closed session."],
    ["Courts", "Agency actions can be challenged as exceeding statutory authority or as procedurally improper."],
  ];
  let y = 1.95;
  tools.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.45, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.55, y, w: 5.3, h: 0.74, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.8;
  });
  k.defBox(s, M, 6.8, W - M * 2, 0.25, "", "");
  N(s, `
TIMING: 6 minutes.

THE APPROPRIATION IS THE REAL LEVER. Committees can hold hearings all day, but the
budget is what agencies respond to. Connect to Chapter 14.

THE PUBLIC INFORMATION ACT IS THE PRACTICAL TOOL for students, and most do not
know it exists. Any Texan, with no special standing, may request records from a
state agency or a local government. There is no requirement to explain why. Tell
them directly.

CONNECT TO CHAPTER 15: this is how journalism holds agencies accountable, and the
decline of local reporting means fewer people are filing these requests in much of
Texas.

ASK: "Which of these tools does an ordinary citizen actually control?" The honest
answer is the Public Information Act, the Open Meetings Act, and rulemaking
comments. The rest require an institution.
  `);
}

/* 13 */
{
  const s = k.discussion("Pause and think", "Accountability and the whole course", [
    "Sunset continues the large majority of agencies it reviews. Supporters call that evidence most agencies are justified; critics call it evidence the review is not stringent. What standard would let you decide between those readings?",
    "Almost all comments on proposed rules come from regulated industry. Is that a failure of citizens, a failure of design, or simply the free rider problem from Chapter 11 showing up again?",
    "You have now studied every part of Texas government. Which single change would most improve accountability to ordinary Texans, and what would it cost?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. Q3 is the course's closing question.

Q1 IS THE BEST ANALYTICAL QUESTION and it teaches something transferable about
evidence: a statistic is meaningless without a prior expectation. Push students to
state what continuation rate they would expect if the process were working well.
Most have never been asked to specify a standard before looking at a number.

Q3 IS THE CAPSTONE. Save time for it if you are teaching this as the last chapter.
Students propose things like a full-time legislature, appointed judges, a unified
executive, higher pay for legislators, or consolidated election dates. Require them
to name the cost, because every one of those has a real one, and the 1876 framers
had reasons for each choice they made.

This question works well as a final written assignment.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 18 in the Trailblazer Trek: 8 sections, 1,405 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh expertise and efficiency against democratic accountability.", C.GOLD],
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
    "Outcome 4 (knowledge of the branches of government) and Outcome 8 are primary. Outcome 7 is supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

IF THIS IS YOUR LAST CHAPTER, the third discussion question makes an excellent
final writing prompt. It requires students to synthesize the whole course and to
name a cost, which prevents the answer from being a wish list.

A CONCRETE ASSIGNMENT: have students find one proposed rule currently open for
comment in the Texas Register and draft a comment on it. Most will never have
known this was possible, and a few will actually file.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["Sunset", "Texas Sunset Advisory Commission publishes every staff report, commission decision, and its cumulative savings figures. sunset.texas.gov"],
    ["Rulemaking", "Texas Register carries all proposed and adopted rules, and the Texas Administrative Code holds the current rules. sos.texas.gov"],
    ["Audits", "Texas State Auditor's Office publishes financial and performance audits of state agencies. sao.texas.gov"],
    ["Open government", "Texas Attorney General publishes plain language handbooks on the Public Information Act and the Open Meetings Act. texasattorneygeneral.gov"],
    ["The agencies", "Texas.gov links to every state agency, and each posts its rules, board members, and meeting notices."],
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

A SUNSET STAFF REPORT is one of the best primary documents in this course. They
are readable, specific, and unsparing, and they show students what genuine
government self-examination looks like. Pick an agency your students care about
and assign ten pages.

The Texas Register is the other essential link. Showing students a live comment
period converts an abstract lesson into an action they could take this week.
  `);
}

/* 16 */
{
  const s = k.closing("The last question",
    "\u201CNow that you know how it works,\nwhat will you do with that?\u201D",
    "Texas government is more open than almost anyone believes and less watched than almost anyone assumes. The gap between those two facts is where a citizen still matters.");
  N(s, `
CLOSING: 3 to 5 minutes. This is the last slide of the course.

THE CLOSING ARGUMENT OF THE WHOLE TREK. Across eighteen chapters the same pattern
recurred: hearings are open and unattended, filings are public and unread,
comment periods are available and unused, local races are uncontested. The
constraint on Texas democracy is attention far more than access.

That is a hopeful conclusion rather than a cynical one, and it is the honest one.
A student who shows up to a commissioners court meeting, comments on a rule,
protests an appraisal, or files for a precinct chair seat has more leverage than
almost anyone in the room believes.

A GOOD FINAL EXIT TICKET: "Name one specific thing you now know how to do that you
did not know how to do in January."

Then thank them. They finished a course that is required by statute and treated it
as more than a requirement.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 18 - The Texas Bureaucracy and Sunset Review (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
