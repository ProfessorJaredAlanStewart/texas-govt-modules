/**
 * Chapter 1 — Introduction to Texas
 * History, the six flags, and political culture.
 * Built on tools/slidekit.js so the design matches every other chapter deck.
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");

const pres = newDeck("Chapter 1", "Introduction to Texas");
const k = makeKit(pres);
const N = k.notes;

/* 1. TITLE */
{
  const s = k.titleSlide("Chapter 1", "Introduction\nto Texas",
    "Six flags, one revolution, a civil war, an oil boom, and a state that keeps rewriting itself.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 1: INTRODUCTION TO TEXAS
Full deck runs about 75 minutes with all three discussion pauses. See the "How
to use this deck" slide for a 50 minute version.

OPENING (2 min). Before any slide, ask: "What makes Texas different from other
states?" Take four or five answers and write them on the board. You will get
size, independence, oil, cowboys, maybe politics. Leave the list up. At the end
of class, return to it and ask which answers came from history rather than
myth. That frame carries the whole chapter.

WHY THIS CHAPTER MATTERS: students often treat Texas identity as a personality
trait. This chapter argues it is the residue of specific events. Six different
governments, a war for independence, a civil war, Reconstruction, and an oil
strike each left something behind in how Texas governs itself today.
  `);
}

/* 2. HOW TO USE */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three discussion pauses. For a 50 minute class, keep one pause and cut the Mexican-American War and Reconstruction detail slides.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely. Nothing is a flattened image.", C.GOLD],
    ["\u2696", "Handling the hard parts", "Slavery, secession, and Reconstruction are covered directly and without editorializing. Notes flag where students commonly arrive with misconceptions.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 1's nine sections, so lecture and homework reinforce each other. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete it before projecting.

This chapter carries more potential friction than its title suggests. Slavery,
secession, Juneteenth, Reconstruction, and Confederate memory all appear. The
approach throughout is to state what happened, cite the record, and let students
draw conclusions. The notes tell you where students typically arrive with
inherited misinformation, particularly on the causes of secession.

If your students have already completed the module, you can cut the narrative
slides and spend the time on political culture and demographics, which is where
the analytical payoff is.
  `);
}

/* 3. OBJECTIVES */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Identify", "the six nations whose flags have flown over Texas, and what each left behind."],
    ["Explain", "how independence, statehood, secession, and Reconstruction shaped Texas government."],
    ["Describe", "the oil boom's effect on the Texas economy and political power."],
    ["Analyze", "Texas demographics today and the shift to a majority-minority state."],
    ["Apply", "Elazar's typology of political culture to Texas."],
  ]);
  N(s, `
TIMING: 1 minute. Do not read these aloud line by line.

Point at #4 and #5. Those are the two that get assessed and the two that do
analytical work. Objectives 1 through 3 are the narrative that makes 4 and 5
make sense.

If you are short on time at any point in this chapter, protect the last two
sections. A student who knows the six flags but cannot explain Texas political
culture has missed the point of the chapter.
  `);
}

/* 4. SIX FLAGS */
{
  const s = k.slide("Six nations, one piece of ground", "Six Flags Over Texas");
  k.figure(s, "tx1_six_flags.jpg", 7.5, 1.9, 5.2, 2.9,
    "The six flags that have flown over Texas. The theme park took its name from the slogan, not the other way around.");
  const flags = [
    ["Spain", "1519 to 1821. Missions, presidios, and the land-grant system."],
    ["France", "1685 to 1690. A brief, failed colony at Fort St. Louis."],
    ["Mexico", "1821 to 1836. Empresario land grants brought Anglo settlers in large numbers."],
    ["Republic of Texas", "1836 to 1845. An independent nation with its own president, army, and debt."],
    ["Confederate States", "1861 to 1865. Secession, war, and defeat."],
    ["United States", "1845 to 1861, and 1865 to today."],
  ];
  let y = 1.95;
  flags.forEach(([nm, d]) => {
    s.addText(nm, {
      x: M, y: y + 0.02, w: 2.3, h: 0.3, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 13.5, bold: true, color: C.GOLD, valign: "top",
    });
    s.addText(d, {
      x: M + 2.35, y, w: 4.0, h: 0.68, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 12.5, color: C.BODY, lineSpacing: 16, valign: "top",
    });
    y += 0.78;
  });
  N(s, `
TIMING: 6 minutes.

THE POINT IS NOT THE LIST. It is that Texas spent three centuries changing
hands, and that each government left institutions behind. Spanish land law still
shapes Texas water and mineral rights. Mexican law brought the empresario system
that populated Texas with Anglo settlers who then rebelled. The Republic period
left a memory of independent nationhood that nothing else in the United States
quite matches.

COMMON MISCONCEPTION: students think "Six Flags Over Texas" is named after the
amusement park. It is the reverse. The park opened in 1961 and took the existing
slogan, which refers to the six sovereign governments.

The French claim is thin and worth saying so. La Salle's colony lasted about
five years, was a disaster, and ended in mutiny and disease. It is included by
tradition more than by significance.

COLD CALL: "Which of these six governments still shapes Texas law today?" Push
toward Spain and Mexico, which students rarely name.
  `);
}

/* 5. INDEPENDENCE */
{
  const s = k.slide("Why Texas rebelled", "Independence, 1835 to 1836");
  k.figure(s, "tx1_alamo.jpg", 7.6, 1.9, 5.1, 2.85,
    "The Alamo, San Antonio. The defenders lost, and the defeat became the rallying cry for the revolution that followed.");
  s.addText([
    { text: "Mexico invited the settlers.  ", options: { bold: true, color: C.INK } },
    { text: "After independence from Spain in 1821, Mexico used ", options: { color: C.BODY } },
    { text: "empresarios", options: { bold: true, color: C.INK } },
    { text: " such as Stephen F. Austin to recruit colonists to a thinly populated frontier. Land was cheap and the terms were generous.", options: { color: C.BODY } },
  ], {
    x: M, y: 1.95, w: 6.65, h: 1.2, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  s.addText([
    { text: "Then the terms changed.  ", options: { bold: true, color: C.INK } },
    { text: "Mexico restricted further immigration, moved to enforce customs duties, and in 1835 Santa Anna replaced the federalist constitution with centralized rule. Settlers who had come expecting local autonomy lost it. Slavery was also a live issue, since Mexico had moved against it and the settlers' cotton economy depended on it.", options: { color: C.BODY } },
  ], {
    x: M, y: 3.15, w: 6.65, h: 1.7, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  k.statCallout(s, M, 5.0, 6.65, 1.35, "1836",
    "Independence declared March 2. The Alamo falls March 6. Santa Anna is defeated at San Jacinto on April 21, after a battle lasting about 18 minutes.");
  N(s, `
TIMING: 7 minutes.

TEACH THE CAUSES HONESTLY. Texas independence is usually taught as a story about
liberty against tyranny. That is part of it: Santa Anna did dissolve the
federalist constitution, and settlers did lose the local autonomy they were
promised. But slavery was also a genuine cause. Mexico had moved against slavery,
and the settlers' cotton economy depended on it. Historians treat both as real.
Present both and let students weigh them.

WHY THE ALAMO MATTERS DESPITE BEING A DEFEAT: it bought time, and it produced
the rallying cry. San Jacinto, six weeks later, is the battle that actually won
independence, and it lasted under twenty minutes.

WATCH FOR: students who have absorbed a purely heroic version of this story, and
students who have absorbed a purely cynical one. Both are incomplete. The
instructive move is to ask what each version leaves out.
  `);
}

/* 6. STATEHOOD AND THE WAR */
{
  const s = k.slide("From republic to state to war", "Annexation and the Mexican-American War");
  k.timeline(s, 1.95, [
    ["1836", "Republic of Texas", "Nine years as an independent nation with its own currency, army, and mounting debt."],
    ["1845", "Annexation", "Texas joins the United States. Mexico had never recognized independence and treats annexation as an act of war."],
    ["1846", "War", "Fighting begins over the disputed border between the Nueces and the Rio Grande."],
    ["1848", "Cession", "The Treaty of Guadalupe Hidalgo transfers vast territory, including present-day California, Nevada, Utah, and Arizona."],
  ], 2.45);
  k.figure(s, "tx1_mexican_american_war.jpg", M, 4.7, 5.6, 2.1, null);
  s.addText([
    { text: "Manifest Destiny", options: { bold: true, color: C.INK } },
    { text: " was the belief that the United States was destined to expand across the continent. It supplied the justification for the war and, to its critics then and since, for a war of conquest against a weaker neighbor. The ", options: { color: C.BODY } },
    { text: "Mexican Cession", options: { bold: true, color: C.INK } },
    { text: " reshaped the map of North America and reopened the national fight over whether slavery would expand into new territory.", options: { color: C.BODY } },
  ], {
    x: 6.5, y: 4.75, w: W - M - 6.5, h: 2.0, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 13, lineSpacing: 18, valign: "top",
  });
  N(s, `
TIMING: 6 minutes. This is a candidate to cut in a 50 minute class.

THE CAUSAL CHAIN IS THE LESSON: Texas independence leads to annexation, which
leads to war, which produces the Mexican Cession, which reopens the national
argument over slavery in the territories, which contributes to the Civil War.
Texas is not a side story in American history here. It is a hinge.

The border dispute is worth one sentence: Texas claimed the Rio Grande, Mexico
said the Nueces. Polk sent troops into the disputed strip. Whether that was
defense or provocation was contested at the time, including by a young
congressman named Abraham Lincoln.

Mention that Mexican residents of the ceded territory became United States
residents by treaty, and that Tejano families in Texas long predate Anglo
settlement. That sets up the demographics section later.
  `);
}

/* 7. CIVIL WAR AND RECONSTRUCTION */
{
  const s = k.slide("Secession, defeat, and Reconstruction", "1861 to 1874");
  const rows = [
    ["\u2691", "1861", "Texas adopts an Ordinance of Secession by a vote of 166 to 8 and joins the Confederacy. Governor Sam Houston refuses to swear loyalty and is removed from office.", C.CRIM],
    ["\u2696", "1865", "On June 19, Union General Gordon Granger arrives in Galveston and announces that all enslaved Texans are free. The date becomes Juneteenth.", C.GOLD],
    ["\u2692", "1866 to 1869", "Three constitutions in four years as Texas is rewritten first by former Confederates, then under congressional Reconstruction.", C.TEAL],
    ["\u265C", "1870 to 1874", "Governor E. J. Davis leads a centralized Reconstruction government. The backlash reshapes Texas government permanently.", C.INK],
  ];
  k.rows(s, 1.95, rows, { labelW: 1.9 });
  s.addText("Every structural oddity you will study in Chapter 2 and Chapter 5 traces back to the last row of this slide.", {
    x: M, y: 6.55, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 13, italic: true, color: C.INK, valign: "top",
  });
  N(s, `
TIMING: 8 minutes. The most important slide in the chapter for everything that
follows.

ON THE CAUSE OF SECESSION: Texas published a declaration of causes in 1861. It
is explicit about slavery and white supremacy as reasons for leaving the Union.
If a student raises states' rights, the fair and accurate response is to ask
what right the declaration itself names. Point them to the document rather than
arguing. It is short and available online.

SAM HOUSTON is the human story here. The hero of San Jacinto and a former
president of the Republic opposed secession, refused the loyalty oath, and was
removed. Students find this genuinely surprising.

JUNETEENTH: emphasize that this marks enforcement in Texas, not the Emancipation
Proclamation itself, which had been issued two and a half years earlier. The gap
is the point. A right that is not enforced is not yet a right, which connects
directly to Chapter 16.

THE DAVIS BACKLASH is the through line of this course. Hold it for the next
slide.
  `);
}

/* 8. E.J. DAVIS */
{
  const s = k.slide("One governor, a century of consequences", "Governor E. J. Davis, 1870 to 1874");
  k.card(s, M, 1.95, 6.3, 2.65, "Edmund J. Davis", "REPUBLICAN GOVERNOR, 1870 TO 1874",
    "A Southern Unionist and Union Army general who governed Texas during congressional Reconstruction.",
    "His administration centralized power in ways the 1876 framers then designed the current constitution to prevent.");
  const what = [
    "A state police force answering to the governor",
    "State control of voter registration",
    "Appointment power over many local offices",
    "Authority to declare martial law",
  ];
  s.addText("What his government did", {
    x: 7.3, y: 1.95, w: 5.4, h: 0.36, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 14, bold: true, color: C.INK, valign: "top",
  });
  s.addText(what.map((t, i) => ({ text: t, options: { bullet: true, breakLine: i !== what.length - 1 } })), {
    x: 7.3, y: 2.4, w: 5.4, h: 1.6, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 13, color: C.BODY, lineSpacing: 19, paraSpaceAfter: 6, valign: "top",
  });
  k.defBox(s, M, 4.9, W - M * 2, 1.5, "The reaction that built modern Texas government",
    "When Democrats regained control, they wrote a constitution designed to make another Davis impossible: a weak governor, a plural executive of separately elected officials, a legislature meeting only 140 days every two years, elected judges, and a long document requiring voter approval to change. Texas still governs itself inside that reaction today.");
  N(s, `
TIMING: 6 minutes. This is the single most consequential slide in Chapter 1 for
the rest of the course.

THE ARGUMENT TO MAKE: almost every structural feature students will complain
about later in this course, the weak governor, the part-time legislature, the
fragmented executive, the elected judiciary, is a deliberate answer to Davis.
Once they see that, Chapters 2, 4, 5, and 18 stop feeling arbitrary.

BE CAREFUL AND BE ACCURATE. Davis is a contested figure. He was a Unionist who
opposed secession, he supported public education and civil rights for freedmen,
and his state police included Black officers, which was itself a source of white
opposition. He also centralized power aggressively and the 1873 election that
removed him was surrounded by disputes. Traditional Texas accounts painted him
as a tyrant; more recent scholarship is more mixed. Give students the actions and
both readings rather than a verdict.

FORWARD REFERENCE: tell students explicitly that they will meet this backlash
again in Chapter 2 (the constitution), Chapter 5 (the plural executive), and
Chapter 18 (boards and commissions).
  `);
}

/* 9. DISCUSSION A */
{
  const s = k.discussion("Pause and think", "History as design", [
    "Texas built its current government to prevent one man from governing the way E. J. Davis did. Is designing institutions around a past abuse wise caution, or does it leave a state poorly equipped for problems the framers never imagined?",
    "The 1861 declaration of causes states its reasons plainly, yet the causes of secession are still argued today. Why do societies disagree about documented history, and what should a citizen do about that?",
    "Juneteenth marks the enforcement of a freedom that legally existed two and a half years earlier. What does that gap suggest about the difference between having a right and holding one?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional. Nothing later depends on it.

Use ONE question, not all three. Give students 90 seconds to write before anyone
speaks.

Q1 is the best general choice and it previews the whole course. Students usually
start by defending the caution, then notice the cost when you ask how a
140 day legislature handles a power grid failure or a pandemic.

Q2 is the one to use if your class has already surfaced disagreement about
secession. It redirects from "who is right" to "why do we disagree," which is a
more productive question and keeps the room civil. The honest answer involves
how history gets taught, family memory, and monuments.

Q3 connects to Chapter 16 and is the most reflective of the three. Good written
exit ticket.
  `);
}

/* 10. OIL BOOM */
{
  const s = k.slide("The day Texas changed", "The oil boom");
  k.figure(s, "tx1_spindletop.jpg", M, 1.95, 5.3, 3.1,
    "Spindletop, near Beaumont, January 1901. The gusher blew for nine days before it was capped.");
  s.addText([
    { text: "Before 1901, Texas was a poor, rural, agricultural state whose economy ran on cotton and cattle. The Spindletop gusher changed that in a decade. Oil brought capital, industry, railroads, refineries, and cities. It also brought a new political force. ", options: { color: C.BODY } },
    { text: "Oil money shaped Texas politics, funded its universities through the Permanent University Fund, and still fills the Rainy Day Fund through severance taxes.", options: { bold: true, color: C.INK } },
  ], {
    x: 6.3, y: 1.95, w: W - M - 6.3, h: 2.2, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  k.statCallout(s, 6.3, 4.3, W - M - 6.3, 1.3, "42%",
    "of United States crude oil production comes from Texas today. Energy revenue still links oil prices to school funding and highway budgets.");
  s.addText("Chapter 14 traces where that money goes. Chapter 17 traces what it costs.", {
    x: 6.3, y: 5.75, w: W - M - 6.3, h: 0.4, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 12.5, italic: true, color: C.MUTE, valign: "top",
  });
  N(s, `
TIMING: 5 minutes.

THE TRANSFORMATION IS THE POINT. In 1900 Texas was poor, rural, and agricultural.
Within a generation it had industry, cities, and capital. Very few states have a
single datable event that does this much.

CONNECT FORWARD, because students should see the course as one argument rather
than fifteen topics:
  Chapter 5: the Railroad Commission regulates oil and gas, not railroads.
  Chapter 14: severance taxes fill the Rainy Day Fund; royalties fund the
              Permanent School Fund and the Permanent University Fund.
  Chapter 17: the grid, the environment, and the energy transition.

ASK: "If school funding depends on oil prices, what happens to schools when oil
crashes?" That question does real work and sets up the finance chapter.
  `);
}

/* 11. DEMOGRAPHICS */
{
  const s = k.slide("Who Texans are now", "Demographics");
  k.figure(s, "tx1_dallas_skyline.jpg", 7.55, 1.95, 5.15, 2.75, null);
  const facts = [
    ["\u25B2", "Growth", "Roughly 31.3 million people as of 2024, up from 29.1 million in 2020. Frequently the largest numeric gain of any state.", C.TEAL],
    ["\u2302", "Urban", "Four of the fifteen largest cities in the United States are in Texas. Growth is concentrated in Houston, Dallas-Fort Worth, San Antonio, and Austin.", C.GOLD],
    ["\u2696", "Majority-minority", "Texas lost its white majority in 2004. Since about 2022, Hispanic Texans have been the largest group, roughly 40 percent, about even with non-Hispanic white Texans.", C.CRIM],
  ];
  let y = 1.95;
  facts.forEach(([g, t, d, col]) => {
    k.circle(s, M, y, g, col, 0.44);
    s.addText(t, {
      x: M + 0.62, y: y - 0.04, w: 6.5, h: 0.34, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 14.5, bold: true, color: C.INK, valign: "top",
    });
    s.addText(d, {
      x: M + 0.62, y: y + 0.32, w: 6.5, h: 0.95, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top",
    });
    y += 1.42;
  });
  k.defBox(s, M, 5.15, W - M * 2, 1.25, "A caution worth teaching",
    "Demographic change does not translate mechanically into political change. Texas has grown more diverse for two decades while remaining Republican statewide, and Republicans made notable gains among Hispanic voters in recent elections. Chapter 10 examines why the relationship is looser than headlines suggest.");
  N(s, `
TIMING: 5 minutes.

THE HEADLINE FACT: Texas has no racial or ethnic majority and has not since 2004.
Many students do not know this, including students who are themselves part of the
plurality.

THE CAUTION MATTERS AS MUCH AS THE FACT. There is a widespread assumption that a
growing Hispanic population automatically shifts a state toward Democrats. Texas
is the standing counterexample. Saying this plainly is not a political statement;
it is what the returns show, and it protects students from a lazy inference.

Tejano families predate Anglo settlement in Texas, which is worth repeating here
after the annexation slide. "Hispanic Texan" is not a synonym for "recent
arrival."

GOOD DATA EXERCISE if you have a projector and five minutes: pull up the Texas
Demographic Center projections and ask students what the state looks like in
2050, then ask what would have to be true politically for that to matter.
  `);
}

/* 12. POLITICAL CULTURE */
{
  const s = k.slide("Why Texans expect what they expect", "Political culture");
  s.addText("Political scientist Daniel Elazar argued in 1966 that American states carry distinct political cultures, meaning shared assumptions about what government is for and who should take part.", {
    x: M, y: 1.9, w: W - M * 2, h: 0.6, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 14, color: C.BODY, lineSpacing: 19, valign: "top",
  });
  const cults = [
    ["MORALISTIC", "Government is a positive force that should advance the common good. Participation is a civic duty.", "Minimal presence in Texas", C.MUTE],
    ["INDIVIDUALISTIC", "Government is a practical marketplace. It exists to serve private and economic interests, not to improve people.", "Strong in Texas", C.TEAL],
    ["TRADITIONALISTIC", "Government preserves the existing social order and is properly led by established elites. Participation is expected of some, not all.", "Strong in Texas", C.GOLD],
  ];
  let y = 2.65;
  cults.forEach(([t, d, tag, col]) => {
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: W - M * 2, h: 1.15, rectRadius: 0.07,
      fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 },
    });
    s.addShape(pres.ShapeType.roundRect, {
      x: M, y, w: 2.9, h: 1.15, rectRadius: 0.07, fill: { color: col },
    });
    s.addText(t, {
      x: M + 0.2, y: y + 0.24, w: 2.5, h: 0.36, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 13.5, bold: true, color: C.WHITE, valign: "top",
    });
    s.addText(tag, {
      x: M + 0.2, y: y + 0.64, w: 2.5, h: 0.3, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 10.5, color: C.WHITE, valign: "top",
    });
    s.addText(d, {
      x: M + 3.15, y: y + 0.24, w: W - M * 2 - 3.45, h: 0.75, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 13, color: C.BODY, lineSpacing: 18, valign: "top",
    });
    y += 1.27;
  });
  s.addText("Texas is usually classified as a blend of the traditionalistic and individualistic types.", {
    x: M, y: 6.5, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 13.5, italic: true, bold: true, color: C.INK, valign: "top",
  });
  N(s, `
TIMING: 7 minutes. This is the analytical payoff of the chapter and the idea
students should carry into every later unit.

MAKE IT CONCRETE, or it stays abstract. Work one example out loud:
  Low taxes and light regulation: individualistic.
  A part-time legislature paying \$7,200 a year, which effectively limits who can
  serve: traditionalistic.
  Among the lowest voter turnout in the country: traditionalistic, where
  participation is expected of some rather than all.

BE FAIR TO THE FRAMEWORK AND ITS CRITICS. Elazar published this in 1966. It is a
generalization, it can flatten real variation, and urban Texas today looks
different from the model. Say so. A student who can name the limits of a
framework understands it better than one who just applies it.

ASK: "Does this describe the Texas you live in?" Students from Austin, rural East
Texas, and the Rio Grande Valley will answer differently, and that disagreement
is itself the lesson.
  `);
}

/* 13. DISCUSSION B */
{
  const s = k.discussion("Pause and think", "Culture, change, and what counts as evidence", [
    "Elazar classified Texas as traditionalistic and individualistic in 1966. What evidence from Texas today would support that description, and what evidence would challenge it?",
    "Texas has been majority-minority since 2004 and remains Republican statewide. What does that tell you about the relationship between demographics and political outcomes?",
    "If political culture is learned rather than inherited, what institutions teach it, and what would it take to change it?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest of the three in this
chapter.

Q1 IS THE ONE TO USE IF YOU USE ONLY ONE. Requiring evidence on both sides is
what separates analysis from assertion, and it mirrors the Chapter 1 reflection
prompt and several TEST-BANK Part A items.

Q2 forces precision about causation. Expect answers about turnout, candidate
quality, issue priorities, and the fact that ethnic groups are not political
blocs. All of those are better than "demographics are destiny."

Q3 is the most abstract and the best for a strong class. Likely answers: family,
schools, churches, media, workplaces, and the design of government itself, which
teaches people whether participation matters.

WATCH FOR students treating "political culture" as a compliment or an insult
rather than a description. Redirect to evidence every time.
  `);
}

/* 14. SYNTHESIS */
{
  const s = k.slide("What the history actually explains", "Putting it together");
  const links = [
    ["\u2696", "Weak governor", "The reaction to Governor Davis produced a deliberately fragmented executive. Chapter 5.", C.INK],
    ["\u23F1", "140 day sessions", "The same reaction limited the Legislature to a short biennial session. Chapter 4.", C.TEAL],
    ["\u2691", "Elected judges", "Distrust of appointed power made the judiciary answerable to voters. Chapter 6.", C.GOLD],
    ["\u26FD", "Oil and the budget", "Spindletop linked school funding and highways to energy prices. Chapters 14 and 17.", C.CRIM],
  ];
  k.rows(s, 1.95, links, { labelW: 2.7 });
  s.addText("Texas government is not a random collection of quirks. It is a set of answers to problems Texans actually had.", {
    x: M, y: 6.55, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 13.5, italic: true, color: C.INK, valign: "top",
  });
  N(s, `
TIMING: 4 minutes. Do not skip this slide for time. It is what makes the rest of
the course cohere.

THE ARGUMENT: students often experience a government course as a list of
institutions to memorize. This slide says that each institutional feature is an
answer to a historical problem. Once they have that, later chapters become
explanations rather than trivia.

Return to the board list from the very beginning of class. Ask which of their
original answers about "what makes Texas different" now look like history rather
than myth, and which ones still stand.

CLOSING LINE that works: "For the rest of this course, whenever something about
Texas government seems strange, ask what happened that made someone want it that
way."
  `);
}

/* 15. WHAT STUDENTS DO NEXT */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 1 in the Trailblazer Trek: 9 sections, 1,505 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words in the student's own words. The Section 9 prompt asks whether Elazar's description still fits Texas.", C.GOLD],
    ["\u2611", "Assessment", "TEST-BANK.md Part A has 5 unseen items for this chapter, tagged to ACGM outcomes. Parts B and C are practice only, since students have seen those.", C.CRIM],
  ];
  const cw = (W - M * 2 - 0.7) / 3;
  cols.forEach(([g, t, d, col], i) => {
    const x = M + i * (cw + 0.35);
    s.addShape(pres.ShapeType.roundRect, {
      x, y: 2.0, w: cw, h: 3.0, rectRadius: 0.07,
      fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 },
    });
    k.circle(s, x + 0.28, 2.25, g, col);
    s.addText(t, {
      x: x + 0.28, y: 2.95, w: cw - 0.56, h: 0.6, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 15, bold: true, color: C.INK, lineSpacing: 19, valign: "top",
    });
    s.addText(d, {
      x: x + 0.28, y: 3.6, w: cw - 0.56, h: 1.25, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top",
    });
  });
  k.defBox(s, M, 5.3, W - M * 2, 1.1, "ACGM outcomes assessed by this chapter",
    "Outcome 8 (issues, policies, and political culture of Texas) is primary. Outcomes 1 and 7 are supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete depending on whether you want students to see
the assessment plan. Many instructors show it, since transparency about grading
reduces anxiety and email.

SEQUENCING: if students complete the module before lecture, cut the narrative
slides and spend the time on political culture and demographics. If you lecture
first, keep everything and let the module serve as review.

The Completion Report carries a tamper-evident integrity hash and includes the
full text of each reflection, so it works as a graded artifact.
  `);
}

/* 16. SOURCES */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["Texas history", "Handbook of Texas Online, Texas State Historical Association. Entries on Six Flags Over Texas, empresarios, the Alamo, San Jacinto, Juneteenth, E. J. Davis, and Spindletop. tshaonline.org/handbook"],
    ["Primary documents", "Texas Declaration of Independence (1836) and the Declaration of Causes for secession (1861), both available through the Texas State Library and Archives Commission."],
    ["Demographics", "Texas Demographic Center and the United States Census Bureau. demographics.texas.gov and census.gov"],
    ["Political culture", "Daniel J. Elazar, American Federalism: A View from the States (1966), the source of the three cultures typology."],
    ["Openly licensed text", "OpenStax, American Government 3e (CC BY 4.0), the base text this module adapts."],
    ["Images", "Wikimedia Commons, public domain, as credited in the module."],
  ];
  let y = 1.95;
  refs.forEach(([t, d]) => {
    s.addText(t.toUpperCase(), {
      x: M, y, w: 2.5, h: 0.3, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 11, bold: true, color: C.GOLD, charSpacing: 1.2, valign: "top",
    });
    s.addText(d, {
      x: M + 2.6, y: y - 0.03, w: W - M - 2.6 - M, h: 0.78, isTextBox: true, margin: 0,
      fontFace: "Calibri", fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top",
    });
    y += 0.78;
  });
  s.addText("This deck is licensed CC BY 4.0. Adopt it, adapt it, share it. Attribution appreciated.", {
    x: M, y: 6.5, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0,
    fontFace: "Calibri", fontSize: 12.5, italic: true, color: C.MUTE, valign: "top",
  });
  N(s, `
Leave this up during questions so students can photograph it.

THE TWO PRIMARY DOCUMENTS ARE THE MOST USEFUL ASSIGNMENT in this chapter. Both
are short. Assigning the 1861 declaration of causes does more to settle
classroom disagreement about secession than any lecture, because students read
the reasons in the framers' own words.

The Handbook of Texas is free but not openly licensed. Link to it rather than
copying entries into your own materials.
  `);
}

/* 17. CLOSING */
{
  const s = k.closing("The question to leave with",
    "\u201CWhat happened here that\nmade someone want it this way?\u201D",
    "Ask it every time something about Texas government seems strange. It has an answer more often than you would expect.");
  N(s, `
CLOSING: 2 minutes, or use as the exit ticket.

This question is the habit of mind the whole course is trying to build. Texas
government has real oddities: a governor who cannot fire most of the executive
branch, a legislature that meets 140 days every two years, judges who run in
partisan elections. None of it is accidental.

If you want a written exit ticket: "Name one feature of Texas government you
find strange, and predict what historical problem it was meant to solve." They
will check their predictions in Chapters 2 through 6.

Then return to the board list from the opening and close the loop.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 01 - Introduction to Texas (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
