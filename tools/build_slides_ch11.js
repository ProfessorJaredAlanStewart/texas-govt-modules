/**
 * Chapter 11 — Interest Groups and Lobbying in Texas
 */
const { newDeck, makeKit, C, W, M } = require("./slidekit");
const pres = newDeck("Chapter 11", "Interest Groups and Lobbying");
const k = makeKit(pres);
const N = k.notes;
const B = "Calibri";

/* 1 */
{
  const s = k.titleSlide("Chapter 11", "Interest Groups\nand Lobbying",
    "A legislature that meets 140 days every two years. Lobbyists who work all 730.",
    "GOVT 2306  ·  Texas Government Trailblazer Trek  ·  Tarrant County College");
  N(s, `
CHAPTER 11: INTEREST GROUPS AND LOBBYING IN TEXAS
About 75 minutes with all three discussion pauses.

OPENING (3 min). Ask students to name a group that represents their interests to
government. Most say none. Then ask: do you drive, rent, own a home, work,
attend college, have a medical condition, own a gun, or belong to a church? Every
one of those has organized representation in Austin.

Students are represented by groups they never joined and could not name. That is
the chapter's opening insight.

THE TITLE IS THE ARGUMENT. A part-time legislature facing full-time advocates
produces a specific kind of politics, and the imbalance is structural rather than
conspiratorial.
  `);
}

/* 2 */
{
  const s = k.howToUse([
    ["\u23F1", "Timing", "About 75 minutes with all three pauses. For a 50 minute class, compress the benefits slide and cut one pause.", C.TEAL],
    ["\u270E", "Editable", "Everything is a real text box or shape. Change wording, reorder, or delete freely.", C.GOLD],
    ["\u2696", "Resist the easy story", "Lobbying is legal, constitutionally protected, and genuinely useful to an understaffed legislature. The notes push past the cynical shortcut.", C.CRIM],
    ["\u2611", "Ties to the module", "Slide order follows Chapter 11's eight sections. Assessment items are in TEST-BANK.md Part A.", C.INK],
  ]);
  N(s, `
INSTRUCTOR-ONLY SLIDE. Delete before projecting.

THE TEACHING RISK HERE IS CYNICISM, not partisanship. Students arrive convinced
that lobbying is simply bribery with better clothes. That view is both inaccurate
and lazy, and it forecloses the actual analysis.

The honest framing: petitioning government is a First Amendment right, groups
supply expertise a part-time legislature cannot generate internally, and the
serious concern is not bribery but asymmetry in who gets organized and heard.
Get students to that more sophisticated worry.
  `);
}

/* 3 */
{
  const s = k.objectives("Where we are going", "Learning objectives", [
    ["Define", "interest groups and explain Madison's argument about factions."],
    ["Distinguish", "material, solidary, and purposive benefits, and explain the free rider problem."],
    ["Identify", "the major types of interest groups active in Texas."],
    ["Compare", "electioneering and lobbying as strategies for influence."],
    ["Evaluate", "how Texas regulates lobbying and whether disclosure is enough."],
  ]);
  N(s, `
TIMING: 1 minute.

Point at #2 and #4. Objective 2 carries the collective action theory that shows
up in assessment. Objective 4 is the strategic distinction that organizes the
second half of the chapter.

If you compress, shorten #3.
  `);
}

/* 4 */
{
  const s = k.slide("Organized voices, constitutionally protected", "What interest groups are");
  k.figure(s, "tx11_first_amendment.jpg", 8.5, 1.95, 4.2, 2.2, null);
  s.addText([
    { text: "An ", options: { color: C.BODY } },
    { text: "interest group", options: { bold: true, color: C.INK } },
    { text: " is an organized body that tries to influence public policy without seeking to control government itself. That last clause separates interest groups from parties: parties run candidates and take responsibility for governing, while interest groups pursue outcomes and leave governing to others.", options: { color: C.BODY } },
  ], {
    x: M, y: 1.95, w: 7.6, h: 1.4, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 13.5, lineSpacing: 19, valign: "top",
  });
  k.defBox(s, M, 3.5, 7.6, 1.5, "The right to petition",
    "The First Amendment protects the right of the people to petition the government for a redress of grievances, and Article I, Section 27 of the Texas Constitution says the same. Lobbying is the organized exercise of that right. Whatever its problems, it is not a loophole.");
  s.addText([
    { text: "Madison, again. ", options: { bold: true, color: C.INK } },
    { text: "Federalist No. 10 argued that factions arise from liberty itself and that suppressing them would require destroying freedom. His remedy was competition among many factions so none could dominate. Whether that competition is fair when some groups are far better resourced is the question this chapter keeps returning to.", options: { color: C.BODY } },
  ], {
    x: M, y: 5.2, w: W - M * 2, h: 1.6, isTextBox: true, margin: 0,
    fontFace: B, fontSize: 12.5, lineSpacing: 17, valign: "top",
  });
  N(s, `
TIMING: 6 minutes.

LEAD WITH THE CONSTITUTIONAL POINT. Students are surprised that lobbying is
protected activity rather than a regulatory oversight. The right to petition is in
both constitutions, and every group they admire uses it too: veterans
organizations, disability advocates, churches, teachers, small business owners.

THE PARTY DISTINCTION IS TESTABLE. Parties seek to control government by running
candidates and accepting responsibility for outcomes. Interest groups seek
specific policies and do not. A group may endorse candidates without becoming a
party.

THE MADISON CLOSER sets up the chapter's real question. He assumed competition
among factions would prevent domination. Ask whether that assumption holds when
one side has fifty full-time advocates and the other has none. That is the honest
version of the concern, and it is more useful than talk of bribery.
  `);
}

/* 5 */
{
  const s = k.slide("Why anyone joins", "Benefits and the free rider problem");
  k.figure(s, "tx11_aarp_nra.jpg", 8.5, 1.95, 4.2, 2.15, null);
  const bens = [
    ["Material", "Tangible rewards: discounts, insurance, continuing education, publications. AARP's membership benefits are the classic example.", C.TEAL],
    ["Solidary", "Social rewards: friendship, networking, shared identity, the satisfaction of belonging to something.", C.GOLD],
    ["Purposive", "The satisfaction of advancing a cause you believe in, independent of any personal gain.", C.CRIM],
  ];
  let y = 1.95;
  bens.forEach(([t, d, col]) => {
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 7.6, h: 0.98, rectRadius: 0.06, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x: M, y, w: 0.14, h: 0.98, rectRadius: 0.06, fill: { color: col } });
    s.addText(t + " benefits", { x: M + 0.34, y: y + 0.12, w: 3.0, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 13, bold: true, color: C.INK, valign: "top" });
    s.addText(d, { x: M + 0.34, y: y + 0.44, w: 7.0, h: 0.48, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.06;
  });
  k.defBox(s, M, 5.25, W - M * 2, 1.7, "The free rider problem",
    "If a group wins a policy victory, everyone in that category benefits whether or not they joined or paid. A rational individual can enjoy the gain without bearing the cost. That is why groups offer material benefits: not because members want insurance discounts more than policy, but because selective rewards give people a reason to join that collective goods alone cannot provide.");
  N(s, `
TIMING: 6 minutes.

THE FREE RIDER PROBLEM IS THE THEORETICAL HEART of this chapter and it is
genuinely counterintuitive. Work it concretely: if an organization wins a tax
break for all nurses, every nurse benefits, including the ones who never joined.
So why join?

THE ANSWER EXPLAINS A LOT OF ORGANIZATIONAL BEHAVIOR. Groups bundle selective
benefits that only members receive. That is why professional associations offer
insurance and continuing education, and why advocacy groups send magazines and
stickers.

THE ASYMMETRY WORTH NAMING: concentrated interests overcome the free rider
problem more easily than diffuse ones. Twenty companies in an industry can
organize quickly; thirty-one million consumers cannot. That is a structural reason
some interests are better represented, and it has nothing to do with corruption.
  `);
}

/* 6 */
{
  const s = k.slide("Who is organized in Austin", "Types of interest groups");
  k.figure(s, "tx11_oil_industry.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const types = [
    ["Business and trade", "Energy, real estate, construction, insurance, and technology. Well funded and consistently present."],
    ["Professional associations", "Doctors, lawyers, realtors, engineers, and teachers. Often focused on licensing and regulation."],
    ["Organized labor", "Unions and the Texas AFL-CIO. Smaller here than in many states because Texas is a right-to-work state."],
    ["Agriculture", "Farm and ranch organizations, historically among the most influential voices in Texas politics."],
    ["Cause and public interest", "Groups organized around a belief rather than an economic stake, from MADD to environmental and religious organizations."],
    ["Governmental", "Cities, counties, and school districts lobby the Legislature too, through associations like the Texas Municipal League."],
  ];
  let y = 1.95;
  types.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.5, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.6, y, w: 5.25, h: 0.74, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.8;
  });
  k.defBox(s, M, 6.75, W - M * 2, 0.3, "", "");
  N(s, `
TIMING: 6 minutes.

THE GOVERNMENTAL CATEGORY SURPRISES STUDENTS and is worth a moment. Cities,
counties, and school districts hire lobbyists and fund associations to represent
them in Austin. Taxpayer money is spent lobbying a government those taxpayers
also fund. Defenders say local governments need a voice when the Legislature
preempts them, which connects to Chapter 7. Critics call it taxpayer-funded
lobbying and have tried to restrict it.

RIGHT TO WORK explains the labor point. Texas law prevents requiring union
membership as a condition of employment, which keeps union density and therefore
union political resources lower than in many states.

DO NOT RANK THESE BY INFLUENCE. Any ranking invites argument and depends on the
issue. Energy dominates energy policy; medical groups dominate scope-of-practice
fights. Influence is issue-specific.
  `);
}

/* 7 */
{
  const s = k.discussion("Pause and think", "Organization and voice", [
    "Concentrated interests organize easily and diffuse ones do not. Twenty energy companies can coordinate in a week; thirty-one million consumers cannot. Is that a flaw in the system, or simply arithmetic that no rule can fix?",
    "Cities, counties, and school districts spend public money lobbying the Legislature. Is that a legitimate way for local government to defend itself, or taxpayers funding both sides of an argument?",
    "You are represented in Austin by groups you never joined. Does that count as representation?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 5 to 8 minutes. Optional.

Use ONE. Ninety seconds of writing first.

Q1 IS THE BEST SINGLE CHOICE because it separates structure from blame. The
honest answer is that it is largely arithmetic, and that the available remedies
are partial: disclosure, public financing, or deliberately funding advocacy for
diffuse interests. Each has costs.

Q2 IS GENUINELY TWO-SIDED and maps onto the Chapter 7 preemption fight rather
than onto party. Local officials of both parties defend it; legislators of both
parties have objected to it.

Q3 is the reflective one and works well as a written exit ticket.
  `);
}

/* 8 */
{
  const s = k.slide("Two ways to get what you want", "Electioneering and lobbying");
  const cw = (W - M * 2 - 0.4) / 2;
  const sides = [
    ["ELECTIONEERING", "Change who holds office", [
      "PAC contributions to candidates",
      "Independent expenditures supporting or opposing",
      "Endorsements and voter guides",
      "Mobilizing members to turn out",
      "Works on the election calendar",
    ], C.TEAL],
    ["LOBBYING", "Change what officeholders do", [
      "Direct contact with legislators and staff",
      "Testimony at committee hearings",
      "Supplying research and draft language",
      "Grassroots and grasstops mobilization",
      "Works continuously, including between sessions",
    ], C.GOLD],
  ];
  sides.forEach(([t, sub, items, col], i) => {
    const x = M + i * (cw + 0.4);
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 3.4, rectRadius: 0.08, fill: { color: C.WHITE }, line: { color: C.LINE, width: 1 } });
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.95, w: cw, h: 0.9, rectRadius: 0.08, fill: { color: col } });
    s.addText(t, { x: x + 0.28, y: 2.08, w: cw - 0.56, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 13.5, bold: true, color: C.WHITE, valign: "top" });
    s.addText(sub, { x: x + 0.28, y: 2.42, w: cw - 0.56, h: 0.3, isTextBox: true, margin: 0, fontFace: B, fontSize: 11.5, color: "F0E6D2", valign: "top" });
    s.addText(items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j !== items.length - 1 } })), {
      x: x + 0.28, y: 3.0, w: cw - 0.56, h: 2.2, isTextBox: true, margin: 0,
      fontFace: B, fontSize: 12.5, color: C.BODY, lineSpacing: 18, paraSpaceAfter: 6, valign: "top",
    });
  });
  k.defBox(s, M, 5.5, W - M * 2, 1.45, "The friendly incumbent rule",
    "Most Texas PACs give to sitting legislators rather than challengers, including legislators they disagree with. Incumbents usually win, a defeated challenger cannot help you, and a spurned incumbent remembers. The result is that interest group money tends to reinforce the existing legislature rather than change it.");
  N(s, `
TIMING: 7 minutes.

THE STRATEGIC DISTINCTION IS THE SLIDE. Electioneering changes who sits in the
chair. Lobbying changes what the person in the chair does. Most groups do both,
and the balance depends on resources and how competitive the seats are.

THE FRIENDLY INCUMBENT RULE IS THE COUNTERINTUITIVE FINDING. Students expect
interest groups to fund ideological allies. In practice much money flows to
incumbents regardless of alignment, because access is the product being purchased
and incumbents almost always win.

THE IMPLICATION IS WORTH STATING: if interest group money mostly protects
incumbents, then it is a force for continuity rather than change. That is a
different critique than bribery and a more accurate one.
  `);
}

/* 9 */
{
  const s = k.slide("How lobbying actually works", "Techniques");
  k.figure(s, "tx11_capitol_lobby.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const tech = [
    ["Direct lobbying", "Meeting legislators and, more often, their staff. Staff write the bills and brief the member, so staff relationships matter enormously."],
    ["Providing expertise", "Supplying research, data, and sometimes draft bill language to a legislature with small staffs and 140 days to consider ten thousand bills."],
    ["Testimony", "Speaking at committee hearings, which are public and open to anyone who signs up."],
    ["Grassroots", "Mobilizing large numbers of ordinary members to contact legislators. Volume signals that an issue has a constituency."],
    ["Grasstops", "Generating contact from a few especially influential people: major employers, donors, mayors, superintendents."],
    ["Coalitions", "Joining with unlikely allies on a shared goal, which makes an issue look broad rather than narrow."],
  ];
  let y = 1.95;
  tech.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.3, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.TEAL, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.4, y, w: 5.45, h: 0.76, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.82;
  });
  k.defBox(s, M, 6.85, W - M * 2, 0.2, "", "");
  N(s, `
TIMING: 7 minutes.

THE EXPERTISE POINT IS THE MOST IMPORTANT and the one that dissolves the bribery
caricature. A Texas legislator has a small staff, 140 days, and ten thousand
bills. Nobody can master that volume alone. Someone has to supply technical
detail, and the people who show up with it have interests.

SAY THIS PLAINLY: that is a capacity problem the state created by choosing a
part-time legislature, not a conspiracy. Connect back to Chapter 4.

GRASSROOTS VERSUS GRASSTOPS is a clean testable distinction. Grassroots is
volume, many ordinary constituents. Grasstops is weight, a few people whose calls
get returned immediately.

TESTIMONY IS OPEN TO STUDENTS. Anyone may sign up and speak at a Texas committee
hearing. Most students have no idea. Say it directly; a few will act on it.
  `);
}

/* 10 */
{
  const s = k.slide("How Texas regulates the business", "The Texas Ethics Commission");
  k.figure(s, "tx11_ethics_transparency.jpg", 8.5, 1.95, 4.2, 2.2, null);
  const rules = [
    ["Registration", "Anyone paid above an inflation-adjusted threshold to communicate with officials must register. The threshold is roughly $1,990 in compensation or about $990 in expenditures per calendar quarter."],
    ["Fees", "$750 per year, or $150 for lobbyists representing only nonprofits."],
    ["Activity reports", "Registered lobbyists file reports listing clients and expenditures, monthly unless spending is low enough for annual filing."],
    ["Gift limits", "Gifts to any one official are capped at $500 per year, and reportable gifts above roughly $110 must be disclosed."],
    ["Penalties", "Fines up to $10,000, and criminal penalties as severe as a second-degree felony for serious violations."],
  ];
  let y = 1.95;
  rules.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.1, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.GOLD, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.2, y, w: 5.65, h: 0.84, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 0.9;
  });
  k.defBox(s, M, 6.5, W - M * 2, 0.55, "", "");
  N(s, `
TIMING: 6 minutes.

VERIFY THE THRESHOLDS BEFORE TEACHING. The Ethics Commission adjusts them for
inflation, so the exact figures rise over time. The structure is what matters:
registration above a threshold, fees, periodic reporting, gift caps, penalties.

THE TEXAS APPROACH IS DISCLOSURE, NOT LIMITS. Texas does not cap what an interest
group may spend on lobbying. It requires that the activity be reported and
published. Compare that to Chapter 9, where Texas also declines to cap campaign
contributions to most state candidates. The state has made a consistent choice:
transparency over restriction.

ASK: "Is disclosure enough?" That question drives the last discussion slide. The
honest complication is that disclosure only works if someone reads it, and the
reports are public and almost entirely unread outside journalism and opposition
research.
  `);
}

/* 11 */
{
  const s = k.slide("Iron triangles and capture", "The structural worry");
  k.figure(s, "tx11_lobbyist_handshake.webp", 8.5, 1.95, 4.2, 2.2, null);
  const concepts = [
    ["Iron triangle", "A durable, mutually beneficial relationship among an agency, the legislative committee that oversees and funds it, and the interest groups it regulates or serves."],
    ["Issue network", "A looser, larger, more competitive web including think tanks, journalists, academics, advocacy groups, and rival industries. Often a better description of modern policymaking."],
    ["Regulatory capture", "The outcome in which an agency comes to serve the interests it regulates rather than the public. Chapter 18 examines this in the Texas bureaucracy."],
    ["The revolving door", "Movement of people between agencies, legislative staff, and the industries they oversee. Expertise flows both ways, and so does obligation."],
  ];
  let y = 1.95;
  concepts.forEach(([t, d]) => {
    s.addText(t, { x: M, y, w: 2.3, h: 0.32, isTextBox: true, margin: 0, fontFace: B, fontSize: 12.5, bold: true, color: C.CRIM, lineSpacing: 16, valign: "top" });
    s.addText(d, { x: M + 2.4, y, w: 5.45, h: 0.92, isTextBox: true, margin: 0, fontFace: B, fontSize: 12, color: C.BODY, lineSpacing: 16, valign: "top" });
    y += 1.0;
  });
  k.defBox(s, M, 6.1, W - M * 2, 0.95, "Nothing here requires corruption",
    "Capture usually happens through ordinary channels: the regulated industry supplies most of the technical information, its people are the most qualified candidates for agency jobs, and its representatives attend every hearing while the public attends none. No one has to break a law for the outcome to occur.");
  N(s, `
TIMING: 6 minutes.

THE CLOSING BOX IS THE MOST IMPORTANT SENTENCE IN THE CHAPTER. Capture is a
structural outcome, not a crime. Saying so is not excusing it; it identifies where
the remedy would have to be, which is in staffing, information, and participation
rather than in prosecution.

ISSUE NETWORK IS THE MORE ACCURATE MODERN TERM and scholars increasingly prefer
it. Iron triangles describe closed relationships; most policy areas today involve
many competing participants. Teach both and let students judge which fits a given
area.

THE REVOLVING DOOR CUTS BOTH WAYS and students should hear both. An agency needs
people who understand the industry. Those people come from the industry. The same
expertise that makes them competent creates the relationships that worry critics.
  `);
}

/* 12 */
{
  const s = k.slide("Two readings of the same system", "Is disclosure enough?");
  k.twoSides(s, 1.95,
    "Disclosure is the right approach", [
      "Petitioning government is a protected right, and caps on advocacy raise First Amendment problems",
      "Expertise from regulated industries is genuinely necessary to a part-time legislature",
      "Sunlight lets voters, journalists, and opponents judge for themselves",
      "Limits push activity into less visible channels rather than eliminating it",
    ],
    "Disclosure is not sufficient", [
      "Reports are public and almost entirely unread by the voters they are meant to inform",
      "Knowing who spent what does not change the imbalance between organized and unorganized interests",
      "The revolving door creates obligations that no filing captures",
      "Texas caps gifts but not overall lobbying spending, so the totals keep climbing",
    ], 2.85);
  k.defBox(s, M, 5.05, W - M * 2, 1.9, "Where this lands",
    "Texas has chosen transparency over restriction in both lobbying and campaign finance. That is a coherent position with a constitutional argument behind it. Whether transparency accomplishes what its defenders claim is an empirical question about whether anyone actually reads the disclosures, and the honest answer is that very few people do.");
  N(s, `
TIMING: 8 minutes with discussion. The chapter's central argument.

DO NOT REFEREE. Both columns are serious. The First Amendment argument for
disclosure over limits is the one courts have largely accepted. The practical
objection that disclosure without readers accomplishes little is also correct.

THE BEST ANALYTICAL MOVE: ask what disclosure is supposed to accomplish. If the
goal is informing voters, it largely fails, since almost nobody reads filings. If
the goal is enabling journalists, opponents, and researchers to find patterns,
it largely succeeds. Students who separate those two purposes have done real work.

A GOOD IN-CLASS DEMONSTRATION if you have five minutes: pull up the Texas Ethics
Commission lobby list and search a company or association students recognize.
Seeing the actual filings makes both columns concrete.
  `);
}

/* 13 */
{
  const s = k.discussion("Pause and think", "Influence, access, and remedies", [
    "A part-time legislature depends on outside expertise because it has not funded its own. Is that a corruption problem, a capacity problem, or both, and which would you fix first?",
    "Texas caps gifts to officials but places no ceiling on total lobbying spending, choosing disclosure instead. Would a spending limit improve the system, and what constitutional objection would it face?",
    "Anyone can testify at a Texas legislative hearing, and almost nobody outside paid advocates does. Whose responsibility is that gap?",
  ]);
  N(s, `
CRITICAL-THINKING PAUSE: 6 to 10 minutes. The strongest set in this chapter.

Q1 IS THE BEST SINGLE CHOICE and the most sophisticated question in the chapter.
Students who answer capacity have understood something real: Texas chose a
part-time legislature with small staffs, and outside expertise fills the vacuum
that choice created. The fix would be professionalizing the Legislature, which
voters have consistently refused. Connect to Chapter 4.

Q2 forces engagement with the constitutional constraint. After Citizens United
and related cases, limits on political spending face serious First Amendment
obstacles. Students should reach that on their own from Chapter 9.

Q3 IS THE UNCOMFORTABLE ONE and a good exit ticket. The hearings are open. The
information is public. The barrier is time, knowledge, and attention, not access.
  `);
}

/* 14 */
{
  const s = k.slide("What students do next", "For the instructor");
  const cols = [
    ["\u25B6", "Complete the module", "Chapter 11 in the Trailblazer Trek: 8 sections, 1,640 points. Students submit the Completion Report.", C.TEAL],
    ["\u270E", "Written reflection", "Each section requires 50 or more words. Prompts ask students to weigh the value of expertise against the risk of capture.", C.GOLD],
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

THE BEST ASSIGNMENT IN THIS CHAPTER takes fifteen minutes: have students search
the Texas Ethics Commission lobby registration list for an industry or cause they
care about, and report how many registered lobbyists represent it. The numbers
surprise them in both directions, and it makes the asymmetry argument concrete
without any editorializing from you.
  `);
}

/* 15 */
{
  const s = k.slide("Sources and further reading", "References");
  const refs = [
    ["The regulator", "Texas Ethics Commission publishes lobby registrations, activity reports, and the current thresholds and gift rules. ethics.state.tx.us"],
    ["Watchdogs", "Transparency Texas and Texans for Public Justice compile data on lobbying and money in state politics."],
    ["The hearings", "Texas Legislature Online posts committee hearing notices and witness lists, and archives hearing video. capitol.texas.gov"],
    ["Local government advocacy", "Texas Municipal League and Texas Association of Counties represent cities and counties before the Legislature."],
    ["The classic argument", "James Madison, Federalist No. 10, on factions, and Mancur Olson on collective action and the free rider problem."],
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

THE ETHICS COMMISSION LOBBY LIST is the centerpiece resource. It is searchable,
free, and current. Projecting it and searching a familiar industry does more than
any lecture on influence.

Committee hearing video on Texas Legislature Online is also underused. Ten
minutes of real testimony shows students what lobbying actually looks like, and
it is less dramatic and more technical than they expect.
  `);
}

/* 16 */
{
  const s = k.closing("The question to leave with",
    "\u201CWho showed up,\nand who did not?\u201D",
    "Texas hearings are open, filings are public, and testimony is free. The imbalance in who uses those channels explains more about Texas policy than any secret ever could.");
  N(s, `
CLOSING: 2 minutes, or exit ticket.

The chapter's honest conclusion. The system is unusually transparent and unusually
lopsided in who participates. Both things are true, and the second matters more
than most students expect when they arrive believing the story is about bribery.

Good exit ticket: "Name an interest you hold that is organized in Austin, and one
that is not. What difference does that make?"

Preview Chapter 12: having covered who influences policy, the next chapter asks
what policy Texas actually produces, and what it costs.
  `);
}

pres.writeFile({ fileName: "slides/Chapter 11 - Interest Groups and Lobbying (Lecture Deck).pptx" })
  .then(f => console.log("Wrote", f));
