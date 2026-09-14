/**
 * Chapter 15 — Public Opinion and the Media
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 15", "Public Opinion and the Media");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 15", "Public Opinion\nand the Media",
    "Where your political views came from, how anyone claims to measure them, and who decides what you hear about.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 15: PUBLIC OPINION AND THE MEDIA
About 75 minutes with all three discussion pauses.

OPENING (3 min). Ask students where their political opinions came from. Most say
they thought it through themselves. Then ask how many hold views close to their
parents'. The hands tell a different story.

Nobody arrives at political beliefs from nowhere. Family, school, religion, peers,
workplace, and media all shape them before anyone consciously decides anything.
That is political socialization, and it is the honest starting point.

BE GENTLE HERE. The point is not that students are unthinking. It is that all of
us, including the instructor, were shaped before we chose.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, compress the polling problems slide and cut one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Substitute current polls and local outlets your students know.", C.GOLD],
    ["\u2696", "Media bias is contested", "Students arrive certain the media is biased and disagree about which direction. The notes handle that directly.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 15's six sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

THE MEDIA BIAS CONVERSATION is the one that can go sideways. Students on both
sides arrive certain the press is biased against their side. The productive move
is to distinguish types of bias, selection, framing, tone, ownership, and ask what
evidence would demonstrate each. That converts a loyalty test into an analytical
exercise.

THE POLLING MATERIAL is quietly the most valuable part of this chapter. Students
will read polls for the rest of their lives and most have never been taught how
to evaluate one.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Explain", "political socialization and the agents that shape opinion."],
    ["Describe", "how polls are conducted and what a margin of error means."],
    ["Identify", "common problems in polling, from sampling to question wording."],
    ["Analyze", "the Texas media landscape and how it has changed."],
    ["Evaluate", "claims about media bias using specific categories rather than impressions."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #2 and #5. Objective 2 is the practical literacy skill. Objective 5 is
the one students think they already have and mostly do not.

If you compress, shorten #1, since the discussion pause covers it.
  `);
}

/* 4 */
{
  const s = k.slide("Where political views come from", "Political socialization");
  k.figure(s, "tx15_political_socialization.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const agents = [
    ["Family", "The strongest single influence. Party identification is often absorbed before anyone can explain it. Chapter 10."],
    ["Education", "Schools transmit civic norms, historical narratives, and habits of participation, including this course."],
    ["Religion", "Congregations shape views on many issues and function as networks for civic mobilization."],
    ["Peers and workplace", "Influence grows with age as people encounter views outside the household."],
    ["Media", "Supplies information and, just as importantly, decides which issues seem to matter."],
    ["Major events", "A generation shaped by a war, a recession, or a pandemic can carry that imprint for life."],
  ];
  let y = 1.95;
  agents.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.2, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.3, y, w: 5.55, h: 0.74, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.8;
  });
  N(s, `
TIMING: 6 minutes.

FAMILY IS THE STRONGEST AGENT and the research on this is consistent. Party
identification transmits across generations at high rates. Say it plainly and
without judgment.

THE GENERATIONAL EFFECT IS WORTH A MOMENT. People who came of age during the
Depression, during Vietnam, after September 11, or during the 2020 pandemic carry
distinct imprints. Ask students what event they think will define their own
generation politically. The answers are revealing and the question is
non-partisan.

A CAUTION: do not let this become determinism. Socialization shapes starting
points, not destinations. People do change their views, particularly through
education, migration, and new social networks. Students who hear only the
determinist version draw the wrong conclusion.
  `);
}

/* 5 */
{
  const s = k.slide("How anyone claims to know what Texans think", "Measuring public opinion");
  k.figure(s, "tx15_public_opinion.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const terms = [
    ["Random sample", "Every member of the population has an equal chance of selection. This is what allows a sample of about a thousand to represent millions."],
    ["Margin of error", "The range within which the true value likely falls. A result of 52 percent with a margin of error of 3 points means roughly 49 to 55."],
    ["Weighting", "Adjusting results so the sample matches the population on age, region, education, and other characteristics."],
    ["Likely voter screen", "An attempt to identify who will actually vote. The screen a pollster chooses can move a result by several points."],
  ];
  let y = 1.95;
  terms.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.35, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.45, y, w: 5.4, h: 0.88, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.96;
  });
  k.defBox(s, M, 5.8, W - M * 2, 1.25, "The rule that makes polls readable",
    "If two candidates are separated by less than the margin of error, the poll does not show a leader. It shows a tie. Reporting that ignores this is the single most common polling error students will encounter for the rest of their lives.");
  N(s, `
TIMING: 7 minutes. The most practically useful slide in the chapter.

THE MARGIN OF ERROR RULE IS THE TAKEAWAY. Write an example on the board: candidate
A at 48, candidate B at 45, margin of error 3 points. Headlines will say A leads.
The honest reading is that the race is within the margin and either could be
ahead. Students should leave able to apply this automatically.

THE RANDOM SAMPLE POINT IS COUNTERINTUITIVE and worth explaining. Students do not
believe a thousand people can represent thirty-one million. The key is randomness,
not size. A biased sample of a million is worse than a random sample of a thousand.

MENTION THE STRAW POLL FAILURE if you have time: the 1936 Literary Digest poll
surveyed millions and got the election badly wrong because its sample came from
car and telephone owners during the Depression. Size did not save it.

LIKELY VOTER SCREENS explain why reputable pollsters differ on the same race. It
is a judgment call about who turns out, and it is where much of the disagreement
lives.
  `);
}

/* 6 */
{
  const s = k.slide("Why polls go wrong", "Problems in polling");
  k.figure(s, "tx15_media_bias.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const probs = [
    ["Sampling error", "A sample that does not reflect the population. Declining response rates make representative samples harder to obtain."],
    ["Question wording", "Small changes move results substantially. Asking about assistance to the poor and about welfare produces different numbers."],
    ["Question order", "Earlier questions prime later answers. A poll asking about crime first will get different answers about policing after."],
    ["Social desirability", "Respondents give answers they believe are acceptable rather than accurate, which affects sensitive topics."],
    ["Push polls", "Not polls at all. They are campaign messaging disguised as research, designed to spread a claim rather than measure opinion."],
  ];
  let y = 1.95;
  probs.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.35, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.CRIM, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.45, y, w: 5.4, h: 0.84, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.9;
  });
  N(s, `
TIMING: 6 minutes. Candidate to compress in a 50 minute class.

QUESTION WORDING IS THE BEST DEMONSTRATION. The classic finding is that Americans
support spending on assistance to the poor at much higher rates than spending on
welfare, though the policies described are similar. Same idea, different word,
large gap. That single example teaches skepticism better than a list.

PUSH POLLS ARE NOT POLLS and students should be able to spot one. If a call asks
whether you would be less likely to support a candidate given some negative claim,
the purpose is to plant the claim, not to measure anything.

DECLINING RESPONSE RATES are the honest current problem in the industry. Most
people do not answer unknown numbers, which makes representative samples harder
and more expensive to obtain. This is a real methodological challenge and it
affects pollsters regardless of their politics.

TELL STUDENTS WHAT TO CHECK: who sponsored the poll, when it was taken, sample
size, margin of error, and the exact question wording. Reputable pollsters publish
all five.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Opinion and its measurement", [
    "Most people hold political views close to their family's. Does that make those views less legitimate, or is it simply how every person in every society forms beliefs?",
    "If a poll shows one candidate at 48 and another at 45 with a margin of error of 3 points, what does it actually tell you, and how do most headlines describe it?",
    "Question wording moves poll results substantially. Given that, can public opinion be measured objectively at all, or does every poll partly construct the opinion it reports?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q2 IS THE BEST SINGLE CHOICE because it has a correct answer and a practical
payoff. The poll shows a statistical tie. Most headlines will say one candidate
leads. Students who internalize this become better readers of news for life.

Q3 IS THE MOST PHILOSOPHICALLY INTERESTING and the strongest for a class that
likes to argue. The defensible middle position: careful polling measures something
real, results depend partly on how you ask, and both of those statements are true
at once. That is not relativism, it is methodology.

Q1 works well early and is non-partisan. Guard against students concluding that
inherited views are automatically suspect. Everyone's views were shaped by
something.
  `);
}

/* 8 */
{
  const s = k.slide("How Texans learn about Texas", "The media landscape");
  k.figure(s, "tx15_texas_media.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const media = [
    ["Newspapers", "Metro dailies still do much of the original reporting on state government, though newsroom staffing has fallen sharply."],
    ["Television", "Twenty media markets, the second most of any state. Local stations reach large audiences, with limited statehouse coverage."],
    ["Digital nonprofits", "The Texas Tribune, founded in 2009, provides nonprofit statehouse reporting that other outlets republish for free."],
    ["Social media", "A primary news source for many Texans. Algorithmic and social filtering shape what each person sees."],
    ["News deserts", "Many rural Texas counties have lost their local paper entirely, leaving county and school board decisions uncovered."],
  ];
  let y = 1.95;
  media.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.35, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.45, y, w: 5.4, h: 0.86, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.92;
  });
  N(s, `
TIMING: 6 minutes.

THE NEWS DESERT POINT IS THE MOST CONSEQUENTIAL and it connects straight back to
Chapter 7. Local government is open, and its decisions go uncovered in much of
rural Texas. Research consistently finds that when local papers close, local
government borrowing costs rise and contested races decline. Accountability
depends on someone watching.

THE TWENTY MARKETS FACT connects to Chapter 9 and campaign cost. It also explains
why statewide officials get less scrutiny than students expect: no single outlet
reaches most Texans.

THE TEXAS TRIBUNE IS WORTH NAMING because it is free, Texas-specific, and its
statehouse reporting is republished widely. For students who want to follow state
government without a subscription, it is the practical answer.
  `);
}

/* 9 */
{
  const s = k.slide("What the press does to politics", "Media effects");
  k.figure(s, "tx15_social_media_politics.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const effects = [
    ["Agenda setting", "The media may not tell people what to think, but it strongly influences what they think about. Coverage determines which problems feel urgent. Chapter 12."],
    ["Framing", "How a story is presented shapes interpretation. The same policy described as a tax cut or a revenue reduction lands differently."],
    ["Priming", "Heavy coverage of one issue makes people weigh that issue more heavily when judging officials."],
    ["Gatekeeping", "Editors decide what becomes news at all. Stories never covered cannot shape opinion."],
    ["Selective exposure", "People increasingly choose sources that confirm existing views, which reduces shared factual ground."],
  ];
  let y = 1.95;
  effects.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.2, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.3, y, w: 5.55, h: 0.9, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.96;
  });
  N(s, `
TIMING: 6 minutes.

AGENDA SETTING IS THE MOST IMPORTANT CONCEPT and the classic formulation is worth
saying precisely: the press is not very successful at telling people what to
think, but it is strikingly successful at telling them what to think about.

FRAMING IS EASIEST TO DEMONSTRATE. Take one policy and describe it two accurate
ways: an estate tax and a death tax, undocumented immigrants and illegal aliens,
a spending increase and an investment. Both descriptions can be factually
defensible while producing different reactions. That is framing, not lying, which
is what makes it powerful.

SELECTIVE EXPOSURE sets up the bias slide. The concern is not only that outlets
differ but that audiences sort, so people encounter different facts rather than
different opinions about shared facts.
  `);
}

/* 10 */
{
  const s = k.slide("Sharpen the question", "Claims about media bias");
  s.addText("Nearly everyone believes the media is biased, and people disagree about the direction. The way to make progress is to specify which kind of bias is being claimed, because each is tested differently.", {
    x: M, y: 1.9, w: W - M * 2, h: 0.7, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, color: C.BODY, lineSpacing: 18, valign: "top",
  });
  const kinds = [
    ["Selection bias", "Which stories get covered and which do not. Testable by comparing coverage across outlets over time.", C.TEAL],
    ["Framing bias", "Which words, sources, and angles are used for the same event. Testable by content analysis.", C.GOLD],
    ["Commercial bias", "Coverage driven by what attracts audiences: conflict, novelty, crime, and scandal over slow structural stories.", C.CRIM],
    ["Access bias", "Softer coverage of sources a reporter depends on for future information.", C.INK],
    ["Ownership bias", "Influence from who owns the outlet and who advertises in it.", C.MUTE],
  ];
  let y = 2.7;
  kinds.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: W - M * 2, h: 0.72, rectRadius: 0.05, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.13, h: 0.72, rectRadius: 0.05, fill: { color: col } });
    s.addText(t, { x: M + 0.32, y: y + 0.08, w: 2.6, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.32, y: y + 0.38, w: W - M * 2 - 0.6, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: C.BODY, valign: "top" });
    y += 0.76;
  });
  s.addText("Notice that commercial bias is not partisan at all, and it may explain more coverage patterns than ideology does.", {
    x: M, y: 6.6, w: W - M * 2, h: 0.42, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, italic: true, color: C.INK, valign: "top",
  });
  N(s, `
TIMING: 8 minutes with discussion. The most contested slide in the chapter.

THE STRATEGY IS DISAGGREGATION. Students arrive with a general conviction and
disagree about direction. Breaking bias into five specific, differently testable
claims converts a loyalty argument into an analytical one.

THE COMMERCIAL BIAS POINT IS THE MOST USEFUL and it is genuinely non-partisan.
Outlets need audiences. Conflict, crime, novelty, and scandal draw audiences.
Slow structural stories about water infrastructure or appraisal policy do not.
That explains a great deal of what gets covered without reference to ideology at
all, and students across the spectrum find it persuasive.

THE ASSIGNMENT THAT WORKS: pick one Texas story and compare how three outlets
covered it, identifying which category of bias, if any, the differences fit.
Students routinely find that differences are mostly framing and selection rather
than false statements.

DO NOT OFFER YOUR OWN ASSESSMENT of which outlets are biased.
  `);
}

/* 11 */
{
  const s = k.slide("A free press, and its limits", "The First Amendment and the press");
  k.figure(s, "tx15_press_freedom.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const law = [
    ["Prior restraint", "Government generally may not block publication in advance. New York Times v. United States (1971) set a heavy burden against it."],
    ["Defamation", "False statements of fact that damage reputation are not protected. Public officials must prove actual malice under New York Times v. Sullivan (1964)."],
    ["Shield protections", "The Texas Free Flow of Information Act gives journalists qualified protection against being compelled to reveal sources."],
    ["Open government", "The Texas Public Information Act and the Open Meetings Act give the press and the public access to records and meetings. Chapter 18."],
  ];
  let y = 1.95;
  law.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.3, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.4, y, w: 5.45, h: 0.92, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.0;
  });
  k.defBox(s, M, 6.05, W - M * 2, 1.0, "Why actual malice is a high bar",
    "A public official suing over a false statement must show the publisher knew it was false or acted with reckless disregard for the truth. The Court set that standard deliberately high so that fear of litigation would not deter reporting on government.");
  N(s, `
TIMING: 6 minutes.

SULLIVAN IS THE CASE TO TEACH. The actual malice standard means public officials
almost always lose defamation suits over reporting about their official conduct.
That is by design: the Court judged that a press afraid of being sued would not
scrutinize government.

ASK: "Is that standard too protective of the press, or exactly protective enough?"
It is a real and current argument, and some judges have called for revisiting
Sullivan. Present it as an open question.

THE OPEN GOVERNMENT LAWS connect to Chapters 7 and 18 and are the most practically
useful part of this slide. Any Texan, not just a journalist, may request public
records under the Public Information Act. Most students have no idea they hold
that right.
  `);
}

/* 12 */
{
  const s = k.discussion("Pause and think", "Information and accountability", [
    "Many rural Texas counties have lost their only newspaper. Local government there is still open and still consequential. What happens to accountability when nobody is watching, and whose job is it to fix that?",
    "Commercial pressure may shape coverage more than ideology does, since conflict and scandal draw audiences while water infrastructure does not. Which kind of bias should worry a citizen more?",
    "The actual malice standard makes it very hard for officials to win defamation suits, deliberately. Is that the right balance between protecting reputation and protecting scrutiny of government?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE BEST SINGLE CHOICE and it ties the course together. It connects
Chapter 7's point that local government is open and unwatched with this chapter's
point that the watchers are disappearing. Possible answers include nonprofit
journalism, public funding, volunteer monitoring, and citizens attending meetings
themselves. Every option has limits, and that is worth reaching.

Q2 IS THE MOST LIKELY TO CHANGE MINDS because it reframes a partisan grievance as
a structural one. Students who came in certain about directional bias often find
the commercial explanation more persuasive once stated clearly.

Q3 is the constitutional question and works well if you taught Chapter 16.
  `);
}

/* 13 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 15 in the Trailblazer Trek: 6 sections, 1,420 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to evaluate a real poll and compare coverage across outlets.", C.GOLD],
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
    "Outcome 5 (the role of public opinion, interest groups, and political parties) is primary. Outcome 7 is supporting. See ALIGNMENT.md for the full matrix.");
  N(s, `
INSTRUCTOR SLIDE. Keep or delete.

THE BEST ASSIGNMENT IN THIS CHAPTER, and arguably in the course: have students
take one Texas news story and compare how three different outlets covered it,
identifying selection and framing differences specifically. Students consistently
discover that outlets rarely state falsehoods and frequently differ in emphasis,
sourcing, and word choice. That is a more accurate and more useful model of media
bias than the one most arrive with.

The Texas Politics Project polling archive is free and ideal for the polling
literacy exercise.
  `);
}

/* 14 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["Texas polling", "The Texas Politics Project at the University of Texas publishes regular Texas polls with full methodology and crosstabs. texaspolitics.utexas.edu"],
    ["Polling standards", "Pew Research Center explains sampling, weighting, and response rates in plain language. pewresearch.org"],
    ["Texas statehouse news", "The Texas Tribune provides free nonprofit coverage of state government. texastribune.org"],
    ["Open government", "Texas Attorney General publishes handbooks on the Public Information Act and the Open Meetings Act. texasattorneygeneral.gov"],
    ["The cases", "New York Times v. Sullivan (1964) and New York Times v. United States (1971), at oyez.org"],
    ["Openly licensed text", "OpenStax and OER Texas Government resources, CC BY 4.0, the base this module adapts."],
  ];
  let y = 1.95;
  refs.forEach(([t, d]) => {
    s.addText(t.toUpperCase(), { x: M, y, w: 2.8, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11, bold: true, color: C.GOLD, charSpacing: 1.2, valign: "top" });
    s.addText(d, { x: M + 2.9, y: y - 0.03, w: W - M - 2.9 - M, h: 0.78, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 17, valign: "top" });
    y += 0.78;
  });
  s.addText("This deck is licensed CC BY 4.0. Adopt it, adapt it, share it. Attribution appreciated.", {
    x: M, y: 6.5, w: W - M * 2, h: 0.4, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, italic: true, color: C.MUTE, valign: "top",
  });
  N(s, `
Leave this up during questions.

THE PUBLIC INFORMATION ACT HANDBOOK is worth mentioning directly to students. Any
Texan may request public records, and the Attorney General publishes a plain
language guide to doing it. For a student who wants to know what their school
district or city actually decided, that is the tool.

The Texas Politics Project archive lets students compare polls over time on the
same question, which teaches more about opinion change than any single result.
  `);
}

/* 15 */
{
  const s = k.closing("The question to leave with",
    "\u201CWho decided this was\nworth your attention?\u201D",
    "Agenda setting is the quietest power in this course. Somebody chose what you would think about today, and it was probably not you.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The agenda setting insight is the most transferable idea here. Students can apply
it to any news feed, any campaign, and any algorithm for the rest of their lives.

Good exit ticket: "Name one issue you have strong opinions about, and trace how it
first came to your attention."

Preview Chapter 17: one policy area important enough to get its own chapter, where
Texas made a choice nobody else in the country made, and the consequences arrived
in February 2021.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 15 - Public Opinion and the Media (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
