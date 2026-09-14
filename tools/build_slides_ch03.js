/**
 * Chapter 3 — Federalism
 * Division of powers, the constitutional clauses, the money, and the evolution.
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 3", "Federalism");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 TITLE */
{
  const s = k.titleSlide("Chapter 3", "Federalism",
    "Two governments, one citizen, the same piece of ground. Who decides what, and who pays for it.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 3: FEDERALISM
About 70 minutes with both discussion pauses.

OPENING (3 min). Ask students to list every government that has authority over
them right now. Push until they get past "the government." The answer is roughly
five: federal, state, county, city, and at least one special district, usually a
school district. Most students have never counted.

Then ask: "Which of those can arrest you? Which can tax your house? Which sets
your curriculum?" The confusion in the room IS federalism. Nobody designed this
to be simple; it was negotiated.

THE FRAME FOR THE CHAPTER: federalism is not a topic students will find
interesting on its own. It becomes interesting when it is about who wins a fight.
Keep returning to real conflicts.
  `);
}

/* 2 HOW TO USE */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 70 minutes with both pauses. For a 50 minute class, compress the finance section into the stat callout and cut one discussion slide.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely.", C.GOLD],
    ["\u2696", "Keep it concrete", "Federalism goes abstract fast. The notes supply a current Texas conflict for nearly every concept. Use them.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 3's five sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

THE TEACHING RISK IN THIS CHAPTER is abstraction. Enumerated, reserved, and
concurrent powers are forgettable as a list and memorable as a fight. Every time
you introduce a term, attach it to a dispute students have heard of: immigration
enforcement, marijuana, abortion, environmental rules, disaster relief.

Be careful to present those disputes as disputes. Texas versus Washington is
politically charged in both directions, and your class contains students on
every side of it.
  `);
}

/* 3 OBJECTIVES */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Define", "federalism and distinguish it from separation of powers."],
    ["Distinguish", "enumerated, reserved, and concurrent powers."],
    ["Explain", "the supremacy, full faith and credit, and privileges and immunities clauses."],
    ["Trace", "the evolution from dual to cooperative to new federalism."],
    ["Analyze", "how federal money shapes state policy in Texas."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #1 and #5. Objective 1 is the distinction students most often blur, and
Objective 5 is where federalism stops being a civics term and starts being about
power.

If you have to cut, compress #4. The three eras matter less than the mechanism of
money.
  `);
}

/* 4 WHAT FEDERALISM IS */
{
  const s = k.slide("Two governments, the same citizen", "Federalism defined");
  k.figure(s, "tx3_us_capitol_texas_capitol.jpg", 7.55, 1.95, 5.15, 2.65, null);
  s.addText([
    { text: "Federalism ", options: { bold: true, color: C.INK } },
    { text: "divides authority between a national government and the subnational governments of the fifty states. Each level has its own sphere, its own elected officials, and the power to act directly on the same people.", options: { color: C.BODY } },
  ], {
    x: M, y: 1.95, w: 6.6, h: 1.25, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 14, lineSpacing: 19, valign: "top",
  });
  s.addText("A Texan is governed at once by Austin and Washington, pays taxes to both, and answers to the laws of both. Because their responsibilities overlap, the two levels must constantly cooperate and just as often compete.", {
    x: M, y: 3.25, w: 6.6, h: 1.1, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 19, valign: "top",
  });
  k.defBox(s, M, 4.5, 6.6, 1.9, "Do not confuse these two",
    "Federalism divides power between LEVELS of government: national, state, local. Separation of powers divides it among BRANCHES at the same level: legislative, executive, judicial. Students mix these constantly on exams. A question about Congress versus the president is separation of powers. A question about Texas versus Washington is federalism.");
  N(s, `
TIMING: 5 minutes.

THE DEFINITION BOX IS THE POINT OF THIS SLIDE. This confusion costs students exam
points every semester. Say it, write it on the board, and come back to it.

A CLEAN TEST: if the fight is between a legislature and an executive, it is
separation of powers. If it is between Austin and Washington, or between Austin
and a city, it is federalism.

THE CONTRAST WORTH DRAWING: in a unitary system, which most countries use, local
governments are administrative arms of the center and can be reorganized or
abolished at will. That is actually how Texas treats its own cities and counties,
which is Chapter 7. Texas is a federal partner to Washington and a unitary
sovereign over its own localities. That asymmetry surprises students and is worth
naming here.
  `);
}

/* 5 THE POWERS */
{
  const s = k.slide("Who gets which powers", "Enumerated, reserved, concurrent");
  const cols = [
    ["ENUMERATED", "National government", ["Coin money", "Declare war", "Regulate interstate commerce", "Conduct foreign policy", "Raise and maintain armed forces"], C.INK],
    ["RESERVED", "State governments", ["Education", "Public health and safety", "Marriage and family law", "Elections", "Creating local governments"], C.TEAL],
    ["CONCURRENT", "Both", ["Tax", "Borrow money", "Build roads", "Make and enforce laws", "Establish courts"], C.GOLD],
  ];
  const cw = (W - M * 2 - 0.6) / 3;
  cols.forEach(([t, who, items, col], i) => {
    const x = M + i * (cw + 0.3);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 3.5, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 0.95, rectRadius: 0.08, fill: { color: col } });
    s.addText(t, { x: x + 0.24, y: 2.1, w: cw - 0.48, h: 0.34, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.WHITE });
    s.addText(who, { x: x + 0.24, y: 2.46, w: cw - 0.48, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: "F0E6D2" });
    s.addText(items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j !== items.length - 1 } })), {
      x: x + 0.24, y: 3.05, w: cw - 0.48, h: 2.25, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 18, paraSpaceAfter: 6, valign: "top",
    });
  });
  k.defBox(s, M, 5.65, W - M * 2, 0.95, "The Tenth Amendment does the work",
    "Powers not delegated to the United States, nor prohibited to the states, are reserved to the states or to the people. That single sentence is the constitutional basis for most state authority, and the text most often cited in Texas challenges to federal action.");
  N(s, `
TIMING: 6 minutes.

DO NOT READ THE LISTS ALOUD. Students can read. Instead, work the edges, because
the edges are where every real dispute lives.

TRY THESE OUT LOUD:
  "Who regulates marijuana?" Reserved to states, except federal law still
  classifies it as a controlled substance, so growers cannot use national banks.
  Both answers are correct, which is the lesson.
  "Who controls elections?" States run them, but the Constitution and federal
  voting-rights law constrain how. Chapter 8.
  "Who handles a hurricane?" Concurrent, and the coordination failures in real
  disasters come straight from that overlap.

THE TENTH AMENDMENT is the sentence Texas officials cite most often in litigation
against federal action. Students should be able to quote its logic even if not its
words.
  `);
}

/* 6 THE CLAUSES */
{
  const s = k.slide("The clauses that hold it together", "Constitutional glue");
  const rows = [
    ["\u2696", "Supremacy", "Valid federal law is the supreme law of the land. When federal and state law conflict, federal wins, but only if the federal law is within the powers the Constitution grants.", C.INK],
    ["\u2709", "Full faith and credit", "Each state must recognize the public acts, records, and court judgments of the others. A Texas driver's license, adoption decree, or court ruling is honored elsewhere.", C.TEAL],
    ["\u26D6", "Privileges and immunities", "A state may not discriminate against citizens of other states in basic matters such as court access and property. Limited distinctions, like out-of-state tuition, remain allowed.", C.GOLD],
  ];
  k.rows(s, 1.95, rows, { labelW: 2.85, rowH: 1.3 });
  k.defBox(s, M, 5.95, W - M * 2, 1.0, "The limit students miss",
    "Supremacy is not unlimited. Washington cannot override the states on matters the Constitution leaves to them. Every serious federalism case turns on whether the federal government was acting inside its granted powers in the first place.");
  N(s, `
TIMING: 6 minutes.

SUPREMACY IS THE ONE STUDENTS OVERSTATE. They hear "federal law wins" and stop.
The conditional matters: federal law wins only when Congress was acting within its
constitutional authority. That is precisely what Texas argues about when it sues
the federal government, and what other states argue when they sue a different
administration. The structure is the same regardless of who is in power, which is
worth saying plainly to a politically mixed room.

FULL FAITH AND CREDIT has an obvious classroom example: your license works in
Oklahoma. It also sat at the center of the national argument over recognizing
marriages performed in other states, which is a good bridge to Chapter 16.

PRIVILEGES AND IMMUNITIES lands best through tuition. Every student in the room
either pays in-state or knows someone who does not.
  `);
}

/* 7 THE MONEY */
{
  const s = k.slide("Money is the most powerful tool of federalism", "Fiscal federalism");
  k.figure(s, "tx3_irs_building.jpg", 8.4, 1.95, 4.3, 2.4, null);
  s.addText("The federal government raises far more revenue than states can, then sends much of it back with conditions attached. That transfer is how Washington shapes policy in areas the Constitution reserves to the states.", {
    x: M, y: 1.95, w: 7.5, h: 0.85, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 14, color: C.BODY, lineSpacing: 19, valign: "top",
  });
  const grants = [
    ["Categorical grant", "Money for a narrow purpose with detailed strings. Most federal aid works this way.", C.INK],
    ["Block grant", "Money for a broad purpose with few restrictions. States prefer these; Washington gives up control.", C.TEAL],
    ["Unfunded mandate", "A federal requirement with no money attached. States object to these across party lines.", C.CRIM],
  ];
  let y = 2.88;
  grants.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.5, h: 0.88, rectRadius: 0.06, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addText(t, { x: M + 0.26, y: y + 0.13, w: 2.5, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: col });
    s.addText(d, { x: M + 0.26, y: y + 0.45, w: 7.0, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 15 });
    y += 0.96;
  });
  k.statCallout(s, M, 5.85, W - M * 2, 0.9, "~1/3",
    "of the Texas state budget comes from federal funds. Texas both depends on that money and regularly litigates against the conditions attached to it.");
  N(s, `
TIMING: 7 minutes. The most important section in the chapter.

THE MECHANISM TO TEACH: the federal government cannot order Texas to set a
drinking age or a speed limit. Those are reserved powers. What it can do is
attach conditions to highway money. States are technically free to refuse, and
functionally never do. That is how Washington legislates in areas it does not
control.

THE TENSION IS REAL AND WORTH STATING NEUTRALLY. Texas receives roughly a third of
its budget from Washington while frequently suing over federal requirements.
Critics call that inconsistent. Defenders answer that accepting money is not
consent to unlimited conditions, and that the same argument gets made by states of
both parties depending on who holds the White House. Both positions are
serious.

MEDICAID IS THE SHARPEST TEXAS EXAMPLE and connects to Chapters 12 and 14. The
2012 Supreme Court decision made expansion optional, Texas declined, and that
choice is a federalism decision with direct consequences for who has health
coverage.
  `);
}

/* 8 DISCUSSION A */
{
  const s = k.discussion("Pause and think", "Who should decide?", [
    "Washington cannot set a state drinking age directly, but it can withhold highway money until states comply. Is that legitimate persuasion or coercion dressed up as a grant?",
    "Texas receives roughly a third of its budget from the federal government and regularly sues over federal requirements. Is that inconsistent, or is accepting money different from consenting to conditions?",
    "Pick one policy area: immigration, environmental rules, education, or health care. Who should decide, Austin or Washington, and what principle are you using to answer?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 is the cleanest analytical question on the slide, and it has real legal
content. The Supreme Court has said conditions can become unconstitutionally
coercive at some point. Where that line sits is genuinely unsettled.

Q3 is the one that produces the best discussion and the most heat. Manage it by
insisting on the PRINCIPLE rather than the preference. A student who says
Washington should decide immigration and Austin should decide education needs to
articulate why the two differ. Often they cannot, and discovering that is the
learning.

WATCH FOR: students whose answer to "who should decide" tracks exactly which
level currently agrees with them. Name that pattern gently and ask whether their
principle would survive a change in administration.
  `);
}

/* 9 EVOLUTION */
{
  const s = k.slide("The balance has moved, repeatedly", "Dual to cooperative to new federalism");
  k.timeline(s, 1.95, [
    ["1789 to 1930s", "Dual federalism", "The layer cake. National and state governments operate in separate spheres, each supreme in its own domain. Courts police the boundary."],
    ["1930s to 1970s", "Cooperative federalism", "The marble cake. The New Deal and Great Society blend the levels through jointly funded, jointly administered programs."],
    ["1970s to now", "New federalism", "A partial return of authority to states through block grants and reduced regulation. The pendulum has not swung cleanly."],
  ], 2.6);
  const imgs = [["tx3_fdr_new_deal.jpg", 6.05], ["tx3_reagan.jpg", 9.6]];
  imgs.forEach(([f, x]) => k.figure(s, f, x, 4.75, 3.1, 1.6, null));
  s.addText([
    { text: "Two Supreme Court moments bracket the shift. ", options: { bold: true, color: C.INK } },
    { text: "In 1895, U.S. v. E. C. Knight held that manufacturing was not interstate commerce and lay beyond federal reach. In 1937, NLRB v. Jones and Laughlin Steel reversed course and read the commerce clause broadly enough to let Washington regulate almost anything economic.", options: { color: C.BODY } },
  ], {
    x: M, y: 4.8, w: 5.25, h: 1.75, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 6 minutes. Candidate to compress if you are behind.

THE CAKE METAPHORS ARE USEFUL AND STUDENTS REMEMBER THEM. Layer cake means
distinct separated layers. Marble cake means swirled together and inseparable.
Draw both on the board in ten seconds.

WHAT ACTUALLY DRIVES THE SHIFTS is crisis and money. The Depression made a
national response unavoidable. The Second World War and the Great Society
expanded the pattern. The reaction that followed was partly ideological and partly
fiscal.

DO NOT PRESENT THIS AS PROGRESS TOWARD A CORRECT ANSWER. It is a pendulum, and
which direction counts as improvement is a value judgment. After September 11 the
federal government recentralized authority in homeland security even during the
new federalism era. The trend line is not clean.
  `);
}

/* 10 THE COURT CASES */
{
  const s = k.slide("Two cases that built national power", "The Marshall Court");
  k.card(s, M, 1.95, 5.9, 3.15, "McCulloch v. Maryland", "1819 · UNANIMOUS",
    "Congress may charter a national bank under the necessary and proper clause, and a state may not tax a federal institution.",
    "Established implied powers and national supremacy. Marshall wrote that the power to tax involves the power to destroy.");
  k.card(s, 6.85, 1.95, 5.9, 3.15, "Gibbons v. Ogden", "1824 · UNANIMOUS",
    "Interstate commerce means more than buying and selling goods. It includes navigation and commercial intercourse across state lines.",
    "Gave Congress the broad commerce power that underwrites most modern federal regulation.");
  k.figure(s, "tx3_supreme_court.jpg", M, 5.3, 4.2, 1.35, null);
  s.addText([
    { text: "Then the Civil War settled what courts could not. ", options: { bold: true, color: C.INK } },
    { text: "Southern states claimed a right to secede. The war ended that claim permanently, and the Fourteenth and Fifteenth Amendments extended federal protection of individual rights against the states. Chapter 16 picks this up.", options: { color: C.BODY } },
  ], {
    x: 5.35, y: 5.35, w: W - M - 5.35, h: 1.3, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 6 minutes.

BOTH CASES WERE UNANIMOUS, which surprises students who assume constitutional law
is always contested. Marshall's court was building a nation and knew it.

MCCULLOCH IN ONE SENTENCE: the Constitution does not mention a bank, but Congress
may create one because the necessary and proper clause lets it choose the means
to carry out powers it does have. That is the birth of implied powers.

GIBBONS IN ONE SENTENCE: "commerce" is broad, so federal authority over it is
broad. Nearly every modern federal regulation of the economy traces to this
reading.

THE CIVIL WAR POINT MATTERS: the deepest federalism question, whether a state may
leave, was not answered by a court. It was answered by a war. That is worth one
sober sentence, not a flourish.
  `);
}

/* 11 TEXAS AND WASHINGTON TODAY */
{
  const s = k.slide("Where Texas and Washington collide now", "Federalism in practice");
  k.figure(s, "tx3_texas_legislature.jpg", 8.5, 1.95, 4.2, 2.3, null);
  const fights = [
    ["Immigration", "Texas has tested the limits of state enforcement authority, including a 2023 law making unlawful entry a state crime. Courts have weighed it against federal primacy over immigration."],
    ["Health care", "Texas declined the Affordable Care Act's Medicaid expansion, a choice the Supreme Court made optional in 2012. Chapters 12 and 14."],
    ["Environment", "Texas has repeatedly litigated against federal air quality and emissions rules administered through delegated authority. Chapter 17."],
    ["Marijuana", "Reserved to the states in practice, yet still a federally controlled substance, which keeps the industry out of national banking."],
  ];
  let y = 1.95;
  fights.forEach(([t, d]) => {
    s.addText(t, { x: M, y: y + 0.02, w: 1.9, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.GOLD });
    s.addText(d, { x: M + 2.0, y, w: 5.7, h: 1.0, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16 });
    y += 1.02;
  });
  k.defBox(s, M, 6.22, W - M * 2, 0.78, "The pattern worth noticing",
    "States sue the federal government far more when the other party holds the White House. This is a structural feature of American federalism, not a Texas quirk, and it runs in both directions.");
  N(s, `
TIMING: 6 minutes.

CHECK CURRENCY BEFORE TEACHING. Immigration litigation in particular moves fast.
Confirm the posture of any case you plan to discuss.

THE CLOSING BOX IS THE MOST IMPORTANT LINE ON THIS SLIDE. State attorneys general
of both parties sue Washington far more when the opposing party holds the
presidency. California sued repeatedly during one administration; Texas during
another. Naming that pattern plainly does two things: it is accurate, and it
signals to every student in the room that this class is not keeping score for a
team.

If a student asks which side is right in a specific case, the honest answer is
that the legal question is usually whether Congress acted within its granted
powers, and that reasonable judges have disagreed.
  `);
}

/* 12 DISCUSSION B */
{
  const s = k.discussion("Pause and think", "The federal bargain", [
    "Federalism lets states act as laboratories, testing policies the whole country might adopt. It also means your rights and services depend on which state you live in. Which matters more to you, and why?",
    "The Supreme Court has suggested federal funding conditions can become unconstitutionally coercive. Where would you draw that line, and how would you know it had been crossed?",
    "States sue Washington far more when the opposing party holds the presidency. What does that tell you about whether federalism arguments are about principle, power, or both?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes.

Q1 IS THE BEST GENERAL CHOICE. It forces the real trade-off. Laboratory
federalism produced both innovations students admire and disparities they find
unjust, often in the same policy area. Concrete version: a person with the same
income and same illness has different health coverage in Texas than in a
neighboring state. Is that federalism working or failing?

Q3 IS THE SHARPEST QUESTION IN THIS CHAPTER and works well precisely because it
implicates everyone. The mature answer is "both," and getting students to say
"both" with evidence rather than cynicism is the goal. Principle and interest
usually travel together, which does not make the principle fake.

Do not let this become a session on which party is hypocritical. Redirect to the
structural question: what would it look like for a state to hold a consistent
federalism principle across administrations?
  `);
}

/* 13 WHAT NEXT */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 3 in the Trailblazer Trek: 5 sections, 1,410 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh national uniformity against state discretion.", C.GOLD],
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
    "Outcome 2 (state and local political systems and their relationship with the federal government) is primary. Outcome 3 is supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

This chapter carries the primary coverage for ACGM Outcome 2, which is the
outcome most explicitly about intergovernmental relations. If your department
samples for outcome assessment, the Chapter 3 reflections are a good source.

SEQUENCING NOTE: Chapter 3 works better after Chapter 2 than before it. Students
who understand why Texas distrusts concentrated power in Austin grasp its posture
toward Washington much faster.
  `);
}

/* 14 SOURCES */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The text", "U.S. Constitution, Article I (enumerated powers and the necessary and proper clause), Article IV (full faith and credit, privileges and immunities), Article VI (supremacy), and the Tenth Amendment. archives.gov"],
    ["The cases", "McCulloch v. Maryland (1819) and Gibbons v. Ogden (1824), with opinions and oral argument where available, at oyez.org"],
    ["The money", "Texas Comptroller and the Legislative Budget Board publish the federal share of the state budget every biennium."],
    ["Comparative data", "National Conference of State Legislatures tracks federal mandates, grant conditions, and state litigation against federal agencies."],
    ["Openly licensed text", "OpenStax, American Government 3e (CC BY 4.0), chapter on federalism."],
    ["Images", "Wikimedia Commons, public domain, as credited in the module."],
  ];
  let y = 1.95;
  refs.forEach(([t, d]) => {
    s.addText(t.toUpperCase(), { x: M, y, w: 2.6, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11, bold: true, color: C.GOLD, charSpacing: 1.2 });
    s.addText(d, { x: M + 2.7, y: y - 0.03, w: W - M - 2.7 - M, h: 0.85, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17 });
    y += 0.85;
  });
  s.addText("This deck is licensed CC BY 4.0. Adopt it, adapt it, share it. Attribution appreciated.", {
    x: M, y: 6.55, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, italic: true, color: C.MUTE,
  });
  N(s, `
Leave this up during questions.

THE BEST SINGLE ASSIGNMENT from this chapter is the Comptroller's breakdown of
federal funds in the state budget. It turns an abstract argument about
intergovernmental relations into a number students can see, and it pairs well
with Chapter 14.

Oyez has audio for Gibbons and summaries for McCulloch. Hearing lawyers argue
about the meaning of "commerce" makes the abstraction concrete.
  `);
}

/* 15 CLOSING */
{
  const s = k.closing("The question to leave with",
    "\u201CWho should decide,\nand who should pay?\u201D",
    "Almost every federalism fight is one of those two questions wearing a costume. Ask which one you are actually arguing about.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

This is the durable takeaway. Strip away the constitutional vocabulary and nearly
every federalism dispute reduces to who decides and who pays. Often the two come
apart, which is exactly what an unfunded mandate is.

Good exit ticket: "Name a current policy dispute and identify whether it is
really about who decides, who pays, or both."

Then preview Chapter 4: having established what Texas government may do, the next
question is who actually does it. Start with the branch that writes the laws and
meets 140 days every two years.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 03 - Federalism (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
