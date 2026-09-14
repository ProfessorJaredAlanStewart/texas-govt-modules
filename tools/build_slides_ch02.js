/**
 * Chapter 2 — The Texas Constitution
 * Seven constitutions, the 1876 design, and separation of powers.
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 2", "The Texas Constitution");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 TITLE */
{
  const s = k.titleSlide("Chapter 2", "The Texas\nConstitution",
    "Seven constitutions in fifty-two years. The one Texas kept was written to make a strong government impossible.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 2: THE TEXAS CONSTITUTION
About 70 minutes with both discussion pauses. See "How to use this deck" for a
50 minute version.

OPENING (2 min). Ask: "How long is the U.S. Constitution?" Most students guess
too high. It runs roughly 7,500 words including amendments. Then ask about the
Texas Constitution. It runs past 86,000 words with over 500 amendments. Let the
gap sit, then ask why a state document would need eleven times the text of the
one that governs the whole country.

That question is the chapter. The answer is that the U.S. Constitution grants
powers broadly and trusts interpretation, while the Texas Constitution restricts
in detail and trusts almost no one.
  `);
}

/* 2 HOW TO USE */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 70 minutes with both discussion pauses. For a 50 minute class, compress the seven constitutions into the timeline slide and cut the amendment-process detail.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely.", C.GOLD],
    ["\u2696", "The through line", "Everything here builds to one idea: the 1876 constitution is a reaction to Governor E. J. Davis. Chapters 4, 5, 6, and 18 all inherit it.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 2's six sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

This chapter is the keystone of the course. If students leave understanding that
Texas government was deliberately built weak, and why, then the Legislature, the
plural executive, the courts, and the bureaucracy all become explicable rather
than arbitrary.

If your class already did Chapter 1, the Davis material will be familiar. Move
faster through the history and spend the time on the 1876 design and separation
of powers.
  `);
}

/* 3 OBJECTIVES */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Trace", "the seven constitutions Texas has lived under and what each was responding to."],
    ["Explain", "why the 1876 framers built a deliberately weak government."],
    ["Describe", "how the Texas Constitution is amended, and why it happens so often."],
    ["Analyze", "separation of powers and checks and balances under Article II."],
    ["Compare", "the Texas and U.S. Constitutions in structure and philosophy."],
  ]);
  N(s, `
TIMING: 1 minute. Do not read them aloud.

Point at #2 and #4. Objective 2 explains the entire structure of Texas
government. Objective 4 is the ACGM outcome this chapter now carries as primary
coverage.

Objectives 1 and 3 are supporting detail. If you run short, compress them.
  `);
}

/* 4 SEVEN CONSTITUTIONS */
{
  const s = k.slide("Seven constitutions in fifty-two years", "The constitutional journey");
  k.figure(s, "tx2_texas_constitutions.jpg", 8.35, 1.95, 4.35, 2.7, null);
  const list = [
    ["1824", "Mexican federal constitution. Texas is joined to Coahuila as one state."],
    ["1827", "Coahuila y Tejas state constitution. Texans are a minority in their own state government."],
    ["1836", "Republic of Texas. An independent nation modeled on the United States."],
    ["1845", "Statehood. Widely admired for its clarity and restraint."],
    ["1861", "Confederate. The 1845 document with slavery and secession written in."],
    ["1866", "Presidential Reconstruction. Rejected by Congress as insufficient."],
    ["1869", "Congressional Reconstruction. Centralized power under Governor Davis."],
    ["1876", "The reaction. Still in force today."],
  ];
  let y = 1.95;
  list.forEach(([yr, d], i) => {
    const last = i === list.length - 1;
    s.addText(yr, {
      x: M, y: y + 0.02, w: 0.85, h: 0.3, isTextBox: true, margin: 0,
      fontFace: "Cambria", fontSize: 15, bold: true, color: last ? C.CRIM : C.GOLD, valign: "top",
    });
    s.addText(d, {
      x: M + 0.95, y, w: 6.6, h: 0.58, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, bold: last, color: last ? C.INK : C.BODY, lineSpacing: 16, valign: "top",
    });
    y += 0.6;
  });
  N(s, `
TIMING: 6 minutes. Do not narrate all eight. Pick three and move.

THE THREE THAT MATTER:
  1836, because an independent nation had to invent a government from scratch.
  1869, because it centralized power and produced Davis.
  1876, because Texas still lives inside it.

THE PATTERN TO NAME: each constitution is a reaction to the previous one. 1861
adds what 1845 lacked for the Confederacy. 1866 tries to satisfy Washington and
fails. 1869 imposes what Congress wanted. 1876 tears out everything 1869 built.
Texas constitutional history is a pendulum, not a progression.

Students often ask why Texas did not just amend. Partly because each change was a
regime change, not a policy adjustment. Rewriting was the point.
  `);
}

/* 5 MEXICAN ERA */
{
  const s = k.slide("Governed from somewhere else", "The Mexican era, 1824 to 1835");
  k.figure(s, "tx2_mexican_constitution.jpg", M, 1.95, 5.3, 3.0, null);
  s.addText([
    { text: "The 1824 Mexican constitution ", options: { bold: true, color: C.INK } },
    { text: "created a federal republic and left Texas too thinly populated to be its own state. It was joined to Coahuila, and the 1827 constitution of Coahuila y Tejas gave Texas a small minority of the seats in a legislature that met far to the south, conducted business in Spanish, and rarely prioritized Texan concerns.", options: { color: C.BODY } },
  ], {
    x: 6.3, y: 1.95, w: W - M - 6.3, h: 1.8, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  s.addText([
    { text: "Then it got worse. ", options: { bold: true, color: C.INK } },
    { text: "In 1835 Santa Anna dissolved the federal system entirely and replaced it with centralized rule from Mexico City. Settlers who had come expecting local self-government lost even the limited voice they had.", options: { color: C.BODY } },
  ], {
    x: 6.3, y: 3.8, w: W - M - 6.3, h: 1.3, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  k.defBox(s, M, 5.2, W - M * 2, 1.2, "The grievance that outlives the era",
    "Being governed by a distant capital that does not share your interests is the complaint that produced the Texas Revolution. It reappears in Texas politics for the next two centuries, aimed at Washington instead of Mexico City.");
  N(s, `
TIMING: 5 minutes.

THE POINT IS NOT THE DOCUMENTS. It is the experience of being a political
minority governed from a distant capital. That experience shaped what Texans
wanted from every constitution they wrote afterward: local control, limited
central authority, and suspicion of officials you cannot see.

Tie it forward explicitly. When students reach federalism in Chapter 3 and hear
Texas politicians object to federal overreach, they are hearing an argument with
roots in Saltillo and Mexico City.

WORTH SAYING: Tejano Texans participated in the revolution and several signed the
Texas Declaration of Independence. This was not simply Anglo settlers against
Mexicans.
  `);
}

/* 6 REPUBLIC AND STATEHOOD */
{
  const s = k.slide("Writing a country, then joining one", "1836 and 1845");
  const cw = (W - M * 2 - 0.4) / 2;
  s.addShape(pres.ShapeType.roundRect, { x: M, y: 1.95, w: cw, h: 3.0, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
  s.addText("1836", { x: M + 0.3, y: 2.15, w: cw - 0.6, h: 0.5, isTextBox: true, margin: 0, fontFace: "Cambria", fontSize: 26, bold: true, color: C.GOLD });
  s.addText("Republic of Texas", { x: M + 0.3, y: 2.65, w: cw - 0.6, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 15, bold: true, color: C.INK });
  s.addText([
    { text: "Written in about two weeks while the Mexican army advanced. Borrowed heavily from the United States: three branches, a bill of rights, a president. It also protected slavery explicitly and barred free Black people from residing in Texas without congressional consent.", options: { color: C.BODY } },
  ], { x: M + 0.3, y: 3.1, w: cw - 0.6, h: 1.7, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, lineSpacing: 17 });
  s.addShape(pres.ShapeType.roundRect, { x: M + cw + 0.4, y: 1.95, w: cw, h: 3.0, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
  s.addText("1845", { x: M + cw + 0.7, y: 2.15, w: cw - 0.6, h: 0.5, isTextBox: true, margin: 0, fontFace: "Cambria", fontSize: 26, bold: true, color: C.GOLD });
  s.addText("Statehood", { x: M + cw + 0.7, y: 2.65, w: cw - 0.6, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 15, bold: true, color: C.INK });
  s.addText([
    { text: "Often called the best constitution Texas ever had. Short, clear, and restrained. It protected homesteads from creditors and recognized community property, both durable Texas contributions. Texas also kept its public lands, which no other annexed territory did.", options: { color: C.BODY } },
  ], { x: M + cw + 0.7, y: 3.1, w: cw - 0.6, h: 1.7, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, lineSpacing: 17 });
  k.figure(s, "tx2_republic_texas.jpg", M, 5.15, 5.0, 1.5, null);
  s.addText([
    { text: "Why keeping the public lands still matters: ", options: { bold: true, color: C.INK } },
    { text: "those lands became the Permanent School Fund and the Permanent University Fund. Oil and gas royalties from them support Texas public education and the UT and A&M systems to this day. Chapter 14 follows the money.", options: { color: C.BODY } },
  ], {
    x: 5.85, y: 5.2, w: W - M - 5.85, h: 1.4, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 6 minutes.

THE 1845 DOCUMENT DESERVES ITS REPUTATION. It is short, readable, and restrained,
which makes the contrast with 1876 sharper. Ask students to hold that comparison.

TWO LASTING CONTRIBUTIONS students should remember: the homestead exemption,
which protects a family home from most creditors and is unusually strong in
Texas, and community property, inherited from Spanish and Mexican law rather than
English common law. Texas legal distinctiveness is not all Anglo.

THE PUBLIC LANDS POINT IS THE ONE TO EMPHASIZE. Texas entered the Union as an
independent republic and kept its land. That single negotiating outcome funds the
Permanent School Fund and the Permanent University Fund today. Forward reference
to Chapter 14.

BE HONEST about the 1836 document's slavery provisions. Stating what it said is
not editorializing.
  `);
}

/* 7 CIVIL WAR AND RECONSTRUCTION */
{
  const s = k.slide("Three constitutions in eight years", "Civil War and Reconstruction, 1861 to 1869");
  k.timeline(s, 1.95, [
    ["1861", "Confederate", "The 1845 constitution with secession recognized and slavery entrenched. Emancipation is prohibited."],
    ["1866", "Presidential", "Written under Andrew Johnson's lenient terms. Abolishes slavery but denies Black Texans the vote and equal rights. Congress rejects it."],
    ["1869", "Congressional", "Written under federal military oversight. Grants Black male suffrage, creates public schools, and centralizes power in the governor."],
  ], 2.6);
  k.figure(s, "tx2_reconstruction.jpg", M, 4.85, 5.2, 1.65, null);
  k.defBox(s, 6.1, 4.85, W - M - 6.1, 1.65, "Why 1869 mattered so much",
    "It gave the governor a four year term, control of appointments, authority over voter registration, and a state police force. Those powers went to E. J. Davis, and the reaction against how he used them produced the constitution Texas still has.");
  N(s, `
TIMING: 6 minutes.

THE SEQUENCE TELLS THE STORY. 1861 writes the Confederacy in. 1866 is Texas
trying to rejoin the Union on the cheapest possible terms and being told no. 1869
is Congress dictating terms.

DO NOT SKIP WHAT 1869 ACHIEVED. It established public schools in Texas for the
first time and enfranchised Black men. Students who only hear "Reconstruction
was resented" miss that the resentment attached to real expansions of democracy
as well as to centralized power. Both are true and both belong in the account.

The centralization is the mechanical point that matters for the next slide. Four
year term, appointment power, control of registration, and a state police force
are the specific powers the 1876 framers stripped out.
  `);
}

/* 8 DISCUSSION A */
{
  const s = k.discussion("Pause and think", "Rewriting the rules", [
    "Texas replaced its constitution seven times in fifty-two years, each time reacting against the last. Is frequent constitutional rewriting a sign of a healthy democracy adapting, or an unstable one failing to settle its basic questions?",
    "The 1869 constitution centralized power, created public schools, and enfranchised Black men. How should a state remember a government that expanded democracy and concentrated power at the same time?",
    "The 1845 constitution is widely considered the best Texas ever had, and it lasted sixteen years. What does that suggest about what makes a constitution durable?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE question. Give 90 seconds of writing before discussion.

Q1 is the best general choice. Push students past "change is good" toward the
cost: a constitution that keeps getting rewritten provides no stable expectations,
and every rewrite is won by whoever holds power at that moment.

Q2 is the hardest and the most valuable. It refuses the comfortable version in
either direction. Expect discomfort and let it stand. The honest answer is that
both things happened and a mature civic memory holds both.

Q3 sets up the 1876 comparison nicely. Students usually land on brevity and
restraint, which is exactly what 1876 abandoned.
  `);
}

/* 9 THE 1876 CONSTITUTION */
{
  const s = k.slide("Built to make another Davis impossible", "The Constitution of 1876");
  k.figure(s, "tx2_1876_convention.jpg", 8.3, 1.95, 4.4, 2.55, null);
  const design = [
    ["Weak governor", "Short term, limited appointment power, almost no removal power."],
    ["Plural executive", "Attorney general, comptroller, land commissioner, and agriculture commissioner all elected separately."],
    ["Part-time legislature", "140 days every two years, with low pay."],
    ["Elected judges", "The judiciary answers to voters, not to whoever appoints."],
    ["Restricted, not granted", "The document limits in detail rather than granting power broadly, so change usually requires amendment."],
  ];
  let y = 1.95;
  design.forEach(([t, d]) => {
    s.addText(t, {
      x: M, y: y + 0.02, w: 2.6, h: 0.32, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 13.5, bold: true, color: C.GOLD, valign: "top",
    });
    s.addText(d, {
      x: M + 2.7, y, w: 4.9, h: 0.75, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 16, valign: "top",
    });
    y += 0.82;
  });
  k.defBox(s, M, 5.15, W - M * 2, 1.25, "Article I comes first, on purpose",
    "The Bill of Rights opens the document, before any description of government power. Section 29 declares that everything in it is excepted out of the general powers of government and that any contrary law shall be void. Rights are stated as boundaries, not as grants.");
  N(s, `
TIMING: 8 minutes. The most important slide in the chapter.

THE ARGUMENT: every item on this list is a specific answer to a specific Davis
power. He had a long term, so they shortened it. He appointed local officials, so
they made them elected. He had a state police force, so they abolished it. He
controlled registration, so they stripped that out.

THE DEEPEST STRUCTURAL POINT, and the one students find hardest: the U.S.
Constitution GRANTS powers and leaves the details to interpretation. The Texas
Constitution RESTRICTS in detail. That is why Texas needs an amendment for things
other states handle by statute, and why the document has grown past 86,000 words
with more than 500 amendments.

ASK: "What is the cost of a government designed to be weak?" Let them work toward
it. Answers include slow response to crisis, diffuse accountability, and power
flowing to whoever can navigate the fragmentation, usually organized interests.
Forward reference to Chapter 11.
  `);
}

/* 10 AMENDMENTS */
{
  const s = k.slide("Why Texans vote on constitutional amendments", "The amendment process");
  k.figure(s, "tx2_texas_ballot.jpg", 8.35, 1.95, 4.35, 2.5, null);
  k.timeline(s, 1.95, [
    ["Step 1", "Two-thirds of each chamber", "Both the House and Senate must approve by a two-thirds vote of all members elected."],
    ["Step 2", "Voters decide", "A simple majority of those voting. The governor has no role and cannot veto."],
  ], 2.5);
  k.statCallout(s, M, 4.75, 7.5, 1.3, "500+",
    "amendments adopted since 1876, out of nearly 700 proposed. The document now runs past 86,000 words, about eleven times the length of the U.S. Constitution.");
  s.addText("Because the constitution restricts in detail, ordinary policy changes often require amending it. That is the cause, not carelessness.", {
    x: M, y: 6.25, w: 7.5, h: 0.55, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, italic: true, color: C.INK, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 5 minutes. Candidate to compress in a 50 minute class.

THE GOVERNOR HAS NO ROLE. Students assume a veto applies. It does not. Amendments
go straight from the Legislature to the voters.

WHY SO MANY AMENDMENTS: this is the payoff of the previous slide. Because the
document restricts rather than grants, routine adjustments need constitutional
change. Other states pass a statute; Texas holds an election.

MAKE IT CONCRETE AND CURRENT. In 2025 Texans voted on amendments including
raising the homestead exemption to \$140,000, dedicating up to \$1 billion a year
to water infrastructure, and banning several new taxes. Those are policy
decisions made by constitutional amendment.

CIVIC POINT WORTH MAKING: amendment elections are usually held in odd-numbered
November years with very low turnout. A small, motivated electorate is rewriting
the state's founding document. Connect to Chapter 8.
  `);
}

/* 11 SEPARATION OF POWERS */
{
  const s = k.slide("Article II, stated more bluntly than Washington does", "Separation of powers");
  s.addText("The U.S. Constitution never uses the phrase. It simply assigns power to three branches. Texas devotes an entire article to the rule, and forbids anyone in one department from exercising power belonging to another except where the constitution expressly permits it.", {
    x: M, y: 1.9, w: W - M * 2, h: 0.7, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 14, color: C.BODY, lineSpacing: 19, valign: "top",
  });
  const checks = [
    ["\u2696", "Legislature checks", "Writes the statutes, appropriates every dollar, overrides vetoes by two-thirds, confirms appointments, and impeaches.", C.TEAL],
    ["\u270D", "Executive checks", "Vetoes bills, strikes individual spending items by line-item veto, calls special sessions and sets their agenda, and appoints thousands of officials.", C.GOLD],
    ["\u2691", "Judiciary checks", "Strikes down statutes and executive actions that violate the Texas or U.S. Constitution, and interprets what ambiguous statutes mean.", C.CRIM],
  ];
  k.rows(s, 2.75, checks, { labelW: 2.5, rowH: 1.1 });
  k.defBox(s, M, 5.98, W - M * 2, 0.98, "Where the clean lines blur",
    "The lieutenant governor is elected as an executive officer yet presides over the Senate and controls its committees and calendar. Article II permits express exceptions, and this is the largest one.");
  N(s, `
TIMING: 7 minutes. This section carries the chapter's primary ACGM outcome.

TEACH THE DISTINCTION FIRST. Separation of powers divides the functions.
Checks and balances deliberately let each branch reach into another. A veto is an
executive hand in legislating; confirmation is a legislative hand in appointing.
The first keeps branches apart, the second connects them on purpose.

TEXAS GOES FURTHER THAN THE FEDERAL MODEL in three ways worth naming: the
executive itself is fragmented into a plural executive, judges are elected rather
than appointed, and the legislature is deliberately part-time. Power here is not
merely separated. It is scattered.

THE LIEUTENANT GOVERNOR EXAMPLE IS THE BEST ONE on this slide. An official elected
on the executive ballot runs the Senate. Ask students whether that is a violation
of Article II or an express exception. The answer is the second, which teaches
them to read for exceptions rather than assume clean rules.
  `);
}

/* 12 TEXAS VS US */
{
  const s = k.slide("Two constitutions, two philosophies", "Texas and the United States compared");
  const rows = [
    ["Length", "About 7,500 words", "More than 86,000 words"],
    ["Amendments", "27 in over 230 years", "More than 500 since 1876"],
    ["Approach", "Grants powers broadly, trusts interpretation", "Restricts in detail, trusts almost no one"],
    ["Bill of Rights", "Added afterward as ten amendments", "Article I, placed first, before any power"],
    ["Executive", "One president who appoints the cabinet", "Plural executive of separately elected officials"],
    ["Judges", "Appointed for life", "Elected in partisan elections"],
  ];
  const hy = 1.95, rowH = 0.72;
  // header
  s.addShape(pres.ShapeType.rect, { x: M, y: hy, w: W - M * 2, h: 0.5, fill: { color: C.INK } });
  [["", 2.4], ["United States", 4.6], ["Texas", 4.6]].forEach(([t, w], i) => {
    const x = M + (i === 0 ? 0 : i === 1 ? 2.4 : 7.0);
    if (t) s.addText(t, {
      x: x + 0.2, y: hy + 0.08, w: w - 0.4, h: 0.34, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 13, bold: true, color: C.GOLD, valign: "top",
    });
  });
  rows.forEach(([label, us, tx], i) => {
    const y = hy + 0.5 + i * rowH;
    s.addShape(pres.ShapeType.rect, {
      x: M, y, w: W - M * 2, h: rowH, fill: { color: i % 2 ? "FFFFFF" : "FAF7F0" },
      line: { color: C.LINE, width: 0.5 },
    });
    s.addText(label, { x: M + 0.2, y: y + 0.16, w: 2.2, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK });
    s.addText(us, { x: M + 2.6, y: y + 0.12, w: 4.2, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 15 });
    s.addText(tx, { x: M + 7.2, y: y + 0.12, w: 4.4, h: 0.5, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 15 });
  });
  N(s, `
TIMING: 5 minutes. Good slide to leave up while students take notes.

THE ROW THAT EXPLAINS ALL THE OTHERS is "Approach." Grant versus restrict is the
philosophical difference, and length, amendment count, and detail all follow
from it.

ASK: "Which design do you prefer, and what does your answer assume about
government?" A student who trusts government to act in good faith prefers the
federal model. A student who does not prefers the Texas model. That is a real
values disagreement, not a knowledge gap, and it is worth naming as such.

DO NOT LET "longer means worse" go unchallenged. The Texas approach has a
coherent defense: it keeps decisions with voters rather than with officials and
judges. Present it fairly even if students find it inefficient.
  `);
}

/* 13 DISCUSSION B */
{
  const s = k.discussion("Pause and think", "Design choices and their costs", [
    "The 1876 framers built a government designed to be weak. What problems does a weak state government handle badly, and is that an acceptable price for the protection it offers?",
    "Texas requires a constitutional amendment for changes other states make by statute, and amendment elections draw very low turnout. Who actually decides in that system?",
    "Would you rather live under a constitution that grants power broadly and trusts interpretation, or one that restricts in detail and trusts almost no one? What does your answer assume?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE ONE TO USE IF YOU USE ONLY ONE. It forces a genuine trade-off. Concrete
prompts if students stall: a power grid failure in February, a pandemic, a
hurricane. A legislature that is out of session for twenty months cannot respond
without the governor calling it back.

Q2 is a quiet but sharp question. The honest answer is that a small, motivated,
usually older and more organized electorate decides. That is not a partisan
observation, it is a turnout fact, and it sets up Chapter 8.

Q3 is the values question underneath the whole chapter. There is no correct
answer and you should not supply one. What you can insist on is that students
name the assumption their preference rests on.
  `);
}

/* 14 WHAT NEXT */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 2 in the Trailblazer Trek: 6 sections, 1,620 points, including the new separation of powers section.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. The Section 6 prompt asks students to weigh protection against accountability in the Texas design.", C.GOLD],
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
    "Outcome 1 (origin and development of the Texas constitution) and Outcome 3 (separation of powers and checks and balances) are both primary. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

This chapter carries two primary ACGM outcomes, more than any other in the
course. If your department is documenting outcome coverage for assessment, this
is the chapter to sample.

SEQUENCING: if students complete the module first, cut the seven-constitutions
narrative and spend the time on the 1876 design and separation of powers.
  `);
}

/* 15 SOURCES */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The document itself", "Texas Constitution, full text with all amendments, at statutes.capitol.texas.gov. Article I is short and written for citizens rather than lawyers."],
    ["Constitutional history", "Handbook of Texas Online, Texas State Historical Association. Entries on the Constitutional Convention of 1875, the constitutions of 1861, 1866, and 1869, and E. J. Davis."],
    ["Amendments", "Texas Legislative Council publishes an analysis of every proposed amendment before each election, written in plain language."],
    ["Comparison", "National Conference of State Legislatures maintains comparative data on state constitutions, length, and amendment rates."],
    ["Openly licensed text", "OpenStax, American Government 3e (CC BY 4.0), the base text this module adapts."],
    ["Images", "Wikimedia Commons, public domain, as credited in the module."],
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

THE BEST ASSIGNMENT from this chapter is the Texas Legislative Council's analysis
of a recent amendment election. It is free, short, plain-language, and shows
students what they are actually voting on. Pair it with the ballot language for
the same amendment and ask which one they could have understood in a voting
booth.

Article I is genuinely readable. Assigning it directly is more effective than
summarizing it.
  `);
}

/* 16 CLOSING */
{
  const s = k.closing("The question to leave with",
    "\u201CWhat is the cost of a government\nbuilt to be weak?\u201D",
    "Texans have been paying it, and collecting on it, since 1876. Every chapter that follows is a payment or a collection.");
  N(s, `
CLOSING: 2 minutes, or use as the exit ticket.

The 1876 framers made a trade: less capacity in exchange for less danger. That
trade is still in force, and students will spend the rest of this course watching
it play out.

Good exit ticket: "Name one thing the Texas government does well because it is
weak, and one thing it does badly for the same reason."

Then preview Chapter 3: if Texas distrusts concentrated power in Austin, what does
it think about concentrated power in Washington?
  `);
}

pres.writeFile({ fileName: "slides/Chapter 02 - The Texas Constitution (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
