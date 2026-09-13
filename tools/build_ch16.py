#!/usr/bin/env python3
"""Build Chapter 16 - Civil Liberties and Civil Rights in Texas from the Chapter 8 template.
Keeps all platform CSS/JS (point integrity, OOM-safe progress script) intact; replaces content.
"""
import re, sys

TEMPLATE = "Chapter 8 - Voting Political Participation (Trailblazer Trek).html"
OUT = "Chapter 16 - Civil Liberties and Civil Rights (Trailblazer Trek).html"
c = open(TEMPLATE, encoding="utf-8").read()

# ---------------------------------------------------------------- helpers
def lo_box(objs):
    items = "\n".join(f"                        <li>{o}</li>" for o in objs)
    return (f'                <div class="learning-objectives">\n'
            f'                    <h4>&#127919; Learning Objectives</h4>\n'
            f'                    <ul>\n{items}\n                    </ul>\n'
            f'                </div>\n')

def P(t):
    return f'                <p class="content-text">{t}</p>\n'

def figure(src, alt, caption):
    return (f'                <figure class="chapter-image">\n'
            f'                    <img src="images/{src}" alt="{alt}" loading="lazy">\n'
            f'                    <figcaption>{caption}\n'
            f'                        <span class="img-credit">Source: Wikimedia Commons / Public Domain</span>\n'
            f'                    </figcaption>\n'
            f'                </figure>\n')

def card(sec, n, prompt, reveal_line, paras):
    body = "\n".join(f"                        <p>{p}</p>" for p in paras)
    return (f'                <div class="interactive-card" onclick="revealCard(this, \'card{sec}-{n}\', 15)">\n'
            f'                    <div class="card-prompt">&#128269; Click to explore: {prompt}</div>\n'
            f'                    <div class="card-content">\n'
            f'                        <p><strong>+15 points!</strong> {reveal_line}</p>\n'
            f'{body}\n'
            f'                    </div>\n'
            f'                </div>\n')

def defbox(term, body):
    return (f'                <div class="definition-box">\n'
            f'                    <div class="definition-term">{term}</div>\n'
            f'                    <div>{body}</div>\n'
            f'                </div>\n')

def kc(sec, n, question, options, correct):
    """options: list of 4 strings; correct: index of the right one (50 pts)."""
    opts = "\n".join(
        f'                    <div class="kc-option" onclick="handleAnswer(this, {"true" if i==correct else "false"}, \'q{sec}-{n}\', {50 if i==correct else 0})">{o}</div>'
        for i, o in enumerate(options))
    return (f'                <div class="knowledge-check">\n'
            f'                    <div class="kc-question">&#10067; {question}</div>\n'
            f'{opts}\n'
            f'                    <div class="feedback-box" id="feedback-q{sec}-{n}"></div>\n'
            f'                </div>\n')

def reflection_and_complete(sec, prompt):
    return (f'                <div style="text-align: center; margin-top: 2rem;">\n'
            f'                    \n'
            f'                <div class="reflection-box" id="reflection-section{sec}">\n'
            f'                    <div class="reflection-header">&#128172; Reflection <span class="reflection-points">+25 points</span></div>\n'
            f'                    <div class="reflection-prompt">{prompt}</div>\n'
            f'                    <textarea class="reflection-input" id="reflectionInput{sec}" rows="5" placeholder="Write at least 50 words in your own words&#8230;" oninput="updateReflectionCount({sec})"></textarea>\n'
            f'                    <div class="reflection-footer"><span class="reflection-counter" id="reflectionCounter{sec}">0 words</span><button class="reflection-submit" id="reflectionSubmit{sec}" onclick="submitReflection({sec})">Submit Reflection</button></div>\n'
            f'                    <div class="reflection-feedback" id="reflectionFeedback{sec}"></div>\n'
            f'                </div>\n'
            f'                <button class="complete-section-btn" onclick="completeSection({sec})">&#9989; Complete Section {sec}</button>\n'
            f'                <div class="section-gate-msg" id="sectionGate{sec}" style="display:none;margin:15px auto;max-width:420px;padding:12px 18px;background:#fbe9ee;border-left:5px solid #98002e;border-radius:8px;color:#212121;font-size:0.95em;text-align:center;"></div>\n'
            f'                </div>\n')

def section(sec, emoji, title, los, body, reflection_prompt):
    return (f'        <!-- Section {sec}: {title} -->\n'
            f'        <div id="section{sec}" class="page">\n'
            f'            <button class="back-button" onclick="navigateToHome()">&larr; Back to Home</button>\n'
            f'            <div class="content-section">\n'
            f'                <div class="section-header">\n'
            f'                    <span>{emoji}</span>\n'
            f'                    <h2>{title}</h2>\n'
            f'                </div>\n\n'
            f'{lo_box(los)}\n'
            f'{body}'
            f'{reflection_and_complete(sec, reflection_prompt)}'
            f'            </div>\n'
            f'        </div>\n\n')

# ---------------------------------------------------------------- CONTENT
S = {}

# ===== SECTION 1 =====
S[1] = dict(emoji="&#9878;&#65039;", title="Liberties, Rights, and Why the Difference Matters",
 los=["Distinguish civil liberties from civil rights and explain why the difference matters.",
      "Explain why Texas has produced an unusual number of landmark rights cases."],
 body=
 P("Two of the most important words in American government are easy to confuse: <strong>liberties</strong> and <strong>rights</strong>. They sound alike and often travel together, but they point in opposite directions. <strong>Civil liberties</strong> are freedoms <em>from</em> government &mdash; limits on what the state may do to you. They protect your speech, your faith, your privacy, and your fair treatment in court. <strong>Civil rights</strong>, by contrast, are guarantees of equal treatment <em>by</em> government &mdash; promises that the state will not single people out for worse treatment because of who they are. Liberties tell government to stay out; rights tell government to treat everyone alike.")
+P("The distinction matters because the two can pull against each other. A business owner&#39;s liberty to run a shop as they please can collide with a customer&#39;s right not to be turned away because of their race. A speaker&#39;s liberty to say offensive things can collide with a community&#39;s desire for civility. Much of the drama in this chapter comes from the places where one person&#39;s liberty meets another person&#39;s right, and government must draw a line. There is rarely a line everyone accepts.")
+figure("tx3_we_the_people.jpg",
   "The opening words of the U.S. Constitution, We the People, representing the constitutional foundation of civil liberties and civil rights that apply in Texas",
   "&ldquo;We the People&rdquo; &mdash; Texans live under two constitutions at once. The U.S. Constitution and its Bill of Rights set a floor of protection no state may go below; the Texas Constitution&#39;s own Bill of Rights, Article I, adds protections of its own.")
+card(1,1,"Why has Texas produced so many landmark rights cases?","&#9878;&#65039; A surprising Texas record!",
  ["Few states have shaped American rights law as much as Texas. The case that made flag burning protected speech began at a Dallas political convention (<em>Texas v. Johnson</em>). The case that ended the all-white primary was brought by a Houston dentist (<em>Smith v. Allwright</em>). The case that opened the University of Texas law school to a Black applicant helped pave the road to <em>Brown v. Board of Education</em> (<em>Sweatt v. Painter</em>). The first Supreme Court case to recognize Mexican Americans as a protected class came from a Texas county that had never seated one on a jury (<em>Hernandez v. Texas</em>). The right to privacy in intimate life (<em>Lawrence v. Texas</em>), the right of undocumented children to attend public school (<em>Plyler v. Doe</em>), and the modern rules on affirmative action (<em>Fisher v. University of Texas</em>) all came from here too.",
   "Why Texas? Partly size and diversity: a huge, fast-growing state with large Black, Mexican American, and immigrant communities generated many disputes. Partly history: a strong tradition of local control and limited government meant state laws often tested federal limits. And partly the courage of individual Texans who were willing to take their cases all the way up."])
+defbox("&#9878;&#65039; Civil Liberties vs. Civil Rights",
  "<strong>Civil liberties</strong> restrain government power (&ldquo;Congress shall make no law&hellip;&rdquo;). <strong>Civil rights</strong> require government to protect people equally (&ldquo;nor deny to any person&hellip; the equal protection of the laws&rdquo;). A useful test: if the complaint is <em>&ldquo;the government did something to me it had no power to do,&rdquo;</em> it is a liberties question; if it is <em>&ldquo;the government treated me worse than others like me,&rdquo;</em> it is a rights question.")
+card(1,2,"Liberties and rights in one Texas story","&#128218; The same facts, two questions!",
  ["Imagine a Texas city passes an ordinance banning all protests within 500 feet of city hall. A group wants to march there. Their objection is a <em>liberties</em> claim: the city has no power to silence peaceful assembly. Now imagine the city allows some groups to march and denies others because of their message or their members&#39; ethnicity. That is a <em>rights</em> claim: the city is treating people unequally.",
   "Real cases often mix both. Keeping the two questions separate is the first skill of thinking clearly about rights &mdash; and it will help you follow every case in this chapter."])
+kc(1,1,"Which statement best captures the difference between civil liberties and civil rights?",
  ["Civil liberties come from the states; civil rights come from the federal government.",
   "Civil liberties limit what government may do to you; civil rights require government to treat people equally.",
   "Civil liberties protect groups; civil rights protect individuals.",
   "There is no real difference; the terms are interchangeable."],1)
 ,
 reflection="Think of a situation &mdash; from the news, your community, or your own life &mdash; where one person&#39;s liberty collided with another person&#39;s right to equal treatment. Describe the collision, explain which side you find more persuasive and why, and name what would have to be true for you to change your mind.")

# ===== SECTION 2 =====
S[2] = dict(emoji="&#128220;", title="The Texas Bill of Rights",
 los=["Describe the Texas Bill of Rights (Article I) and explain why it comes first in the Texas Constitution.",
      "Identify protections in the Texas Constitution that go beyond the federal Bill of Rights."],
 body=
 P("Open the Texas Constitution of 1876 and the very first thing you find, before any description of the legislature, the governor, or the courts, is the <strong>Bill of Rights</strong> &mdash; Article I. That placement was no accident. In the U.S. Constitution, the Bill of Rights arrived only afterward, as ten amendments tacked on in 1791. The Texans of 1876, fresh from the bitter experience of Reconstruction and the powerful, centralized government of Governor E. J. Davis, wanted the limits on government stated up front. Their opening line is a declaration of purpose: the Bill of Rights exists so that &ldquo;the general, great and essential principles of liberty and free government may be recognized and established.&rdquo;")
+P("The result is a document that is longer and, in places, broader than its federal counterpart. Article I originally held 29 sections; amendments have since added more. Many track the federal Bill of Rights closely &mdash; freedom of worship, freedom of speech and press, protection against unreasonable searches, rights of the accused, the right to keep and bear arms. But several go further, and because Texas courts interpret the Texas Constitution independently, those provisions can give Texans protections the U.S. Constitution does not guarantee.")
+P("A simple image explains how the two constitutions fit together. The U.S. Constitution, as read by the Supreme Court, sets a <strong>floor</strong>: a minimum level of rights that no state may go below. A state constitution can raise the <strong>ceiling</strong> above that floor, protecting more than the federal minimum &mdash; but it can never lower the floor. Texas has raised its ceiling in several places, as this section shows.")
+figure("tx2_texas_constitutions.jpg",
   "Historic Texas constitutions, representing the 1876 Texas Constitution whose Article I Bill of Rights opens the document",
   "Texas has lived under seven constitutions. The current one, adopted in 1876, opens with its Bill of Rights &mdash; a deliberate choice by framers who distrusted concentrated government power.")
+card(2,1,"Why does the Texas Bill of Rights come first?","&#128220; A statement of priorities!",
  ["The framers of 1876 had just lived through Reconstruction, when a strong governor and an active state government had, in their view, overridden local liberties. Their reaction shaped the whole constitution: a weak governor, a part-time legislature, and rights listed <em>before</em> powers. Putting the Bill of Rights at the front announced that individual liberty came before the machinery of government &mdash; and made it harder for any future legislature to overlook.",
   "Section 29 makes the point explicit. It declares that everything in the Bill of Rights is &ldquo;excepted out of the general powers of government&rdquo; and that any law contrary to it &ldquo;shall be void.&rdquo; In other words, the rights are not favors the legislature grants; they are boundaries it cannot cross."])
+defbox("&#128220; Key Provisions of Article I",
  "<p style=\"margin:0 0 0.6rem;\"><strong>Liberty and equality.</strong> <strong>Section 1</strong> declares Texas a free and independent state, subject only to the U.S. Constitution. <strong>Section 2</strong> vests all political power in the people. <strong>Section 3</strong> guarantees equal rights to all, and <strong>Section 3a</strong> &mdash; Texas&#39;s Equal Rights Amendment, adopted in 1972 &mdash; forbids denying equality under the law because of sex, race, color, creed, or national origin.</p>"
  "<p style=\"margin:0 0 0.6rem;\"><strong>Religion.</strong> <strong>Section 6</strong> protects freedom of worship and forbids the state from giving preference to any religious society. <strong>Section 4</strong> bars any religious test for public office &mdash; though its 1876 text still carries a proviso about acknowledging a Supreme Being that courts have long treated as unenforceable. <strong>Section 7</strong> bars public money for sectarian purposes.</p>"
  "<p style=\"margin:0 0 0.6rem;\"><strong>Expression and assembly.</strong> <strong>Section 8</strong> guarantees freedom of speech and of the press. <strong>Section 27</strong> protects the right to assemble peaceably and to petition the government for redress of grievances.</p>"
  "<p style=\"margin:0 0 0.6rem;\"><strong>Fair treatment by the justice system.</strong> <strong>Section 9</strong> guards against unreasonable searches and seizures. <strong>Section 10</strong> lists the rights of the accused: a speedy public trial by an impartial jury, the right to confront witnesses, the right to counsel, and the right not to be compelled to testify against oneself. <strong>Section 11</strong> guarantees the right to bail, with exceptions that voters expanded in 2025 for certain violent offenses. <strong>Section 12</strong> protects the writ of habeas corpus. <strong>Section 13</strong> forbids excessive bail and cruel or unusual punishment and guarantees &ldquo;open courts&rdquo; &mdash; a remedy for every injury. <strong>Section 14</strong> bars double jeopardy. <strong>Section 15</strong> declares the right of trial by jury &ldquo;inviolate.&rdquo; <strong>Section 19</strong> guarantees that no one may be deprived of life, liberty, or property except by &ldquo;due course of the law of the land.&rdquo; <strong>Section 30</strong>, added in 1989, guarantees rights to crime victims.</p>"
  "<p style=\"margin:0 0 0.6rem;\"><strong>Property and economic liberty.</strong> <strong>Section 16</strong> forbids bills of attainder, ex post facto laws, and laws impairing contracts. <strong>Section 17</strong> requires just compensation when property is taken for public use. <strong>Section 18</strong> bans imprisonment for debt. <strong>Section 26</strong> declares monopolies &ldquo;contrary to the genius of a free government.&rdquo;</p>"
  "<p style=\"margin:0;\"><strong>Arms, the military, and the guarantee itself.</strong> <strong>Section 23</strong> protects the right to keep and bear arms while letting the legislature regulate the <em>wearing</em> of arms to prevent crime. <strong>Section 24</strong> keeps the military subordinate to civil authority. And <strong>Section 29</strong> makes the whole list binding: every right here is &ldquo;excepted out of the general powers of government,&rdquo; and any law contrary to it &ldquo;shall be void.&rdquo;</p>")
+card(2,2,"Where Texas protects more than the U.S. Constitution requires","&#128218; The state ceiling in action!",
  ["Recall the floor-and-ceiling image from the introduction: the U.S. Constitution is the floor states may not go below, and a state constitution may build a higher ceiling. Texas has done so in several ways. The Texas Constitution bans imprisonment for debt (Section 18) and guarantees an &ldquo;open courts&rdquo; provision (Section 13) that the Texas Supreme Court has used to strike down laws it found blocked injured people from bringing suit. Texas courts have at times read the state&#39;s search-and-seizure and free-speech provisions more protectively than the federal versions.",
   "The practical lesson: a Texan whose federal claim fails may still win under the Texas Constitution. Lawyers in Texas routinely plead both. Understanding that Texans hold rights from two sources &mdash; and that the state source can be the more generous one &mdash; is essential to understanding civil liberties here."])
+card(2,3,"Texas&#39;s own Equal Rights Amendment","&#9878;&#65039; A guarantee the nation never adopted!",
  ["In 1972, Texas voters added Section 3a to the Bill of Rights: &ldquo;Equality under the law shall not be denied or abridged because of sex, race, color, creed, or national origin.&rdquo; The federal Equal Rights Amendment, proposed by Congress the same year, was never ratified by enough states and never became part of the U.S. Constitution. Texas&#39;s version did &mdash; and it lists more protected categories than the federal proposal, which addressed sex alone.",
   "This is the clearest example of Texas raising its ceiling above the federal floor. When a Texan claims sex discrimination by the state, Section 3a provides a textual guarantee that the U.S. Constitution states only by judicial interpretation of the Fourteenth Amendment."])
+kc(2,1,"How does the Texas Bill of Rights differ structurally from the federal Bill of Rights?",
  ["It is shorter and covers fewer rights.",
   "It appears at the very beginning of the constitution, as Article I, rather than as later amendments.",
   "It applies only to the legislature, not to the courts.",
   "It was adopted in 1791, the same year as the federal version."],1)
 ,
 reflection="Texas placed its Bill of Rights before any description of government power, and it added an Equal Rights Amendment the nation never ratified. What do these choices tell you about Texas political culture? Explain whether you think a state should be able to guarantee <em>more</em> rights than the U.S. Constitution, and give one concrete example of where that might matter.")

# ===== SECTION 3 =====
S[3] = dict(emoji="&#127963;&#65039;", title="How Federal Rights Reach Texas: The Fourteenth Amendment",
 los=["Explain how the federal Bill of Rights came to apply to Texas through the Fourteenth Amendment and selective incorporation.",
      "Explain the &ldquo;federal floor, state ceiling&rdquo; relationship between the two constitutions."],
 body=
 P("Here is a fact that surprises most students: for the first eighty years of the republic, the Bill of Rights did not apply to the states at all. In <em>Barron v. Baltimore</em> (1833), the Supreme Court held that the first ten amendments restrained only the federal government. A state could censor a newspaper or search a home without a warrant, and the federal Constitution had nothing to say about it. Texans of that era looked to their <em>state</em> constitution for protection.")
+P("That changed after the Civil War. The <strong>Fourteenth Amendment</strong>, ratified in 1868, commanded that no <em>state</em> shall &ldquo;deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.&rdquo; Over the following century, the Supreme Court used the Due Process Clause to apply most of the Bill of Rights to the states one provision at a time &mdash; a process called <strong>selective incorporation</strong>. Free speech was incorporated in 1925, freedom of religion in the 1940s, the rights of the accused mostly in the 1960s, and the right to bear arms in 2010. Each incorporation meant that Texas, like every state, was now bound by that federal guarantee.")
+figure("tx3_supreme_court.jpg",
   "The United States Supreme Court building, whose rulings under the Fourteenth Amendment applied most of the Bill of Rights to Texas and the other states",
   "The U.S. Supreme Court &mdash; through the Fourteenth Amendment, its decisions made the federal Bill of Rights binding on Texas, one provision at a time.")
+card(3,1,"What is selective incorporation?","&#127963;&#65039; The amendment that changed everything!",
  ["The Fourteenth Amendment does not say &ldquo;the Bill of Rights now applies to the states.&rdquo; It says states may not deny &ldquo;liberty&rdquo; without due process. Beginning with <em>Gitlow v. New York</em> (1925), the Court reasoned that certain liberties in the Bill of Rights are so fundamental that they are part of the &ldquo;liberty&rdquo; the Fourteenth Amendment protects against the states. The Court did this <em>selectively</em>, one right at a time, rather than all at once.",
   "Today nearly the entire Bill of Rights has been incorporated. The main exceptions are the Fifth Amendment&#39;s grand jury requirement and the Seventh Amendment&#39;s civil jury right &mdash; which is why Texas can, and does, structure those matters under its own rules. Every time you read that a Texas law was struck down for violating &ldquo;the First Amendment,&rdquo; incorporation is the reason a federal amendment reached a state law at all."])
+defbox("&#9878;&#65039; Due Process and Equal Protection",
  "The Fourteenth Amendment&#39;s two great clauses do different jobs. <strong>Due process</strong> is the engine of civil <em>liberties</em>: it carries the Bill of Rights to the states and protects certain fundamental liberties even when they are not listed. <strong>Equal protection</strong> is the engine of civil <em>rights</em>: it forbids government from treating similarly situated people differently without adequate justification. Most of the Texas cases in this chapter rest on one clause or the other.")
+card(3,2,"Federal floor, state ceiling","&#128218; How the two constitutions fit together!",
  ["Think of rights as a building. The U.S. Constitution, as interpreted by the Supreme Court, is the <em>floor</em>: the minimum protection every American has, in every state. Texas cannot dig below it. The Texas Constitution and Texas courts can raise the <em>ceiling</em> higher &mdash; protecting more than the federal minimum &mdash; but can never lower the floor.",
   "This has real consequences. When the U.S. Supreme Court narrows a federal right, Texans do not necessarily lose it; Texas courts may keep protecting it under Article I. When the Supreme Court expands a federal right, Texas must comply even if Texas law says otherwise. The two systems are in constant conversation, and a good citizen watches both."])
+kc(3,1,"What did selective incorporation accomplish?",
  ["It repealed the Texas Bill of Rights.",
   "It applied most of the federal Bill of Rights to the states, one provision at a time, through the Fourteenth Amendment&#39;s Due Process Clause.",
   "It allowed states to ignore Supreme Court decisions they disagreed with.",
   "It required Texas to adopt the federal Constitution as its own."],1)
 ,
 reflection="Before 1868, a Texan&#39;s only shield against the state government was the Texas Constitution. Explain in your own words how the Fourteenth Amendment changed that, and then argue one side: is it better for rights to be defined nationally by the Supreme Court, or for each state to decide the scope of its citizens&#39; liberties? Acknowledge the strongest point on the other side.")

# ===== SECTION 4 =====
S[4] = dict(emoji="&#128509;", title="Freedom of Expression and Religion in Texas",
 los=["Explain the protections and limits of free speech, press, and assembly, using <em>Texas v. Johnson</em>.",
      "Distinguish the Establishment Clause from the Free Exercise Clause and analyze a current Texas religious-liberty dispute."],
 body=
 P("The First Amendment packs several freedoms into a single sentence: religion, speech, press, assembly, and petition. Together they protect the ability of citizens to think, believe, argue, and organize without government permission &mdash; the raw materials of self-government. The Texas Constitution echoes and, in some respects, extends them in Article I, Sections 6 through 8 and 27. This section looks at expression first, then religion, using Texas cases that reached the nation&#39;s highest court.")
+figure("tx11_first_amendment.jpg",
   "The text of the First Amendment to the U.S. Constitution, protecting religion, speech, press, assembly, and petition",
   "The First Amendment &mdash; its guarantees of speech and religion have been tested repeatedly in Texas, from a burning flag in Dallas to Ten Commandments posters in classrooms.")
+card(4,1,"<em>Texas v. Johnson</em>: the flag-burning case from Dallas","&#128509; A Texas case that defined free speech!",
  ["During the 1984 Republican National Convention in Dallas, a protester named Gregory Lee Johnson doused an American flag in kerosene and set it on fire while demonstrators chanted. No one was hurt. Johnson was convicted under a Texas law against desecrating a venerated object and sentenced to a year in jail and a $2,000 fine. Texas argued the law protected the flag as a symbol of national unity and prevented breaches of the peace.",
   "In 1989 the Supreme Court, by a 5&ndash;4 vote, reversed the conviction. Justice William Brennan wrote that burning the flag in political protest was expressive conduct protected by the First Amendment, and that the government may not prohibit expression simply because society finds it offensive. In his words, &ldquo;If there is a bedrock principle underlying the First Amendment, it is that the government may not prohibit the expression of an idea simply because society finds the idea itself offensive or disagreeable.&rdquo; Congress responded with a federal flag-protection law, which the Court also struck down the next year. The case remains the leading statement that protecting free speech means protecting speech we hate."])
+defbox("&#128509; Limits on Expression",
  "Free speech is broad but not absolute. Government may punish <strong>incitement</strong> to imminent lawless action, <strong>true threats</strong>, <strong>defamation</strong> (false statements of fact that damage reputation), <strong>obscenity</strong> as narrowly defined, and it may impose reasonable, content-neutral rules on the <em>time, place, and manner</em> of speech &mdash; requiring a parade permit, for instance, as long as the rule does not depend on the message. What government generally may not do is silence speech because of its viewpoint.")
+card(4,2,"The two religion clauses","&#9878;&#65039; Two guarantees that can pull against each other!",
  ["The First Amendment contains two religion clauses. The <strong>Establishment Clause</strong> forbids government from establishing or endorsing religion &mdash; no official church, no state-sponsored worship. The <strong>Free Exercise Clause</strong> forbids government from interfering with individuals&#39; practice of their faith. Article I, Section 6 of the Texas Constitution protects free worship and bars religious tests for public office.",
   "The two clauses can create tension. If a public school lets a student group pray on campus, is it accommodating free exercise or establishing religion? If a state exempts religious objectors from a general law, is it protecting free exercise or favoring religion? For decades the Supreme Court used the three-part <em>Lemon</em> test to answer Establishment Clause questions. In recent years it has shifted toward asking whether a practice fits the nation&#39;s history and traditions &mdash; a change that is reshaping how courts treat cases like the one below."])
+card(4,3,"The Ten Commandments in Texas classrooms: a live constitutional test","&#128220; A dispute still unfolding!",
  ["In 2025 the Texas Legislature passed Senate Bill 10, requiring every public-school classroom in the state to display a specific version of the Ten Commandments. It passed the House 82&ndash;46 and the Senate 20&ndash;11, and Governor Abbott signed it. <strong>Supporters</strong> argued that the Commandments are a foundation of Western law and American moral tradition, that a passive display coerces no one, and that recent Supreme Court decisions favor practices rooted in history. <strong>Opponents</strong>, including a multifaith group of Texas families, argued that mandating one faith&#39;s scripture in every classroom pressures children of other faiths and no faith, intrudes on parents&#39; right to direct their children&#39;s religious upbringing, and conflicts with <em>Stone v. Graham</em> (1980), in which the Supreme Court struck down a nearly identical Kentucky law.",
   "The courts split. In August 2025 a federal district judge blocked the law for the districts being sued. In April 2026 the full Fifth Circuit Court of Appeals, by a narrow 9&ndash;8 vote, reversed that ruling and upheld the law, holding that a passive display does not establish religion under the Court&#39;s history-and-tradition approach. The families have asked the U.S. Supreme Court to hear the case. Whatever the outcome, the dispute shows the Establishment Clause being redefined in real time &mdash; and Texas, once again, at the center of it."])
+kc(4,1,"What did the Supreme Court hold in <em>Texas v. Johnson</em> (1989)?",
  ["Flag burning is a crime that states may punish to protect national unity.",
   "Burning the flag in political protest is expressive conduct protected by the First Amendment, even though many find it offensive.",
   "Only Congress, not the states, may regulate the flag.",
   "The flag-desecration law was valid but Johnson&#39;s sentence was too harsh."],1)
+kc(4,2,"Which clause would a Texan invoke to challenge a law requiring religious displays in public classrooms?",
  ["The Free Exercise Clause, because the law stops people from practicing their faith.",
   "The Establishment Clause, because the law arguably has government endorsing a particular religion.",
   "The Commerce Clause, because posters are goods that cross state lines.",
   "The Full Faith and Credit Clause, because other states must honor the display."],1)
 ,
 reflection="<em>Texas v. Johnson</em> protected speech that most Texans found deeply offensive, and the Ten Commandments dispute pits sincere religious conviction against sincere worries about government favoring one faith. Choose one of these two controversies. Explain the strongest argument on <em>each</em> side in your own words, then explain where you would draw the line and why.")

# ===== SECTION 5 =====
S[5] = dict(emoji="&#128269;", title="Due Process, Privacy, and the Rights of the Accused",
 los=["Explain what due process requires and identify the core rights of the accused in Texas.",
      "Explain the constitutional right to privacy and the significance of <em>Lawrence v. Texas</em> and <em>Roe v. Wade</em>."],
 body=
 P("Both constitutions promise that government may not take a person&#39;s life, liberty, or property without <strong>due process of law</strong> &mdash; what the Texas Constitution calls &ldquo;due course of law.&rdquo; The phrase carries two meanings. <strong>Procedural due process</strong> is about fair procedures: notice, a hearing, an impartial decision-maker, the chance to defend yourself. <strong>Substantive due process</strong> is about limits on what government may do at all, however fair the procedure &mdash; the idea that some liberties are so fundamental that no ordinary law may take them away. Chapter 13 walked through the criminal process step by step; this section looks at the rights that process is built to protect.")
+figure("tx13_courtroom_criminal.jpg",
   "A Texas courtroom, where the constitutional rights of the accused, including due process, counsel, and trial by jury, are put into practice",
   "A Texas courtroom &mdash; the rights of the accused are not abstractions; they are the rules that govern what happens in rooms like this one, every day.")
+card(5,1,"What does &ldquo;due process&rdquo; actually require?","&#9878;&#65039; The rights that protect everyone!",
  ["The rights of the accused are spread across several amendments, and the Texas Bill of Rights lists most of them in a single section (Article I, Section 10). The Fourth Amendment and Texas Section 9 forbid unreasonable searches and seizures and generally require a warrant based on probable cause. The Fifth Amendment guarantees the right to remain silent and bars double jeopardy. The Sixth Amendment and Texas Section 10 promise a speedy public trial by an impartial jury, the right to confront witnesses, and the right to a lawyer &mdash; which <em>Gideon v. Wainwright</em> (1963) extended to defendants who cannot afford one. The Eighth Amendment and Texas Section 13 forbid excessive bail and cruel or unusual punishment.",
   "These protections exist for the guilty and the innocent alike, because the whole point is that we do not know which is which until a fair process decides. A right that applied only to people we already believed innocent would protect no one."])
+card(5,2,"<em>Lawrence v. Texas</em> and the right to privacy","&#128269; A landmark from Harris County!",
  ["The Constitution never uses the word &ldquo;privacy,&rdquo; yet the Supreme Court has held since <em>Griswold v. Connecticut</em> (1965) that the Constitution protects a zone of personal privacy, drawn from the liberty guaranteed by due process and from other amendments. Texas produced one of the most important privacy rulings. In 1998, Houston police, responding to a false report, entered an apartment and arrested two men for violating Texas&#39;s law against same-sex intimate conduct. They were convicted and fined.",
   "In <em>Lawrence v. Texas</em> (2003), the Supreme Court struck down the Texas law by a 6&ndash;3 vote. Justice Anthony Kennedy wrote that adults have a liberty interest, protected by the Due Process Clause, in private consensual relationships, and that the state could not make that conduct a crime. The decision overruled a 1986 case that had reached the opposite result. <em>Lawrence</em> became a foundation for later rulings on the rights of gay and lesbian Americans, including the 2015 decision recognizing same-sex marriage."])
+defbox("&#128269; Privacy in the Texas Constitution",
  "The Texas Constitution, like the federal one, does not list privacy by name. But the Texas Supreme Court has recognized a right of privacy implied by the Texas Bill of Rights, and Texas courts have applied it in contexts ranging from medical records to personal information held by government. As with other rights, Texans may claim privacy protection under either constitution.")
+card(5,3,"From <em>Roe</em> to <em>Dobbs</em>: a Texas case that opened and closed a national right","&#128220; Fifty years, two rulings, one state!",
  ["In 1970 a Dallas County woman identified in court as &ldquo;Jane Roe&rdquo; challenged Texas&#39;s law banning nearly all abortions. In <em>Roe v. Wade</em> (1973), the Supreme Court held 7&ndash;2 that the constitutional right to privacy included a woman&#39;s decision whether to end a pregnancy, subject to state regulation that increased as the pregnancy progressed. For nearly fifty years the ruling set the framework for abortion law nationwide, and Texas &mdash; the state where it began &mdash; was among its most persistent challengers.",
   "In <em>Dobbs v. Jackson Women&#39;s Health Organization</em> (2022), the Court overruled <em>Roe</em>, holding 6&ndash;3 that the Constitution does not protect a right to abortion and returning the question to the states. Texas had prepared: a 2021 &ldquo;trigger law&rdquo; took effect and banned nearly all abortions, with an exception to protect the life or major bodily function of the pregnant patient. <strong>Supporters</strong> of the ban hold that the unborn are persons deserving legal protection and that such questions belong to elected legislatures, not courts. <strong>Opponents</strong> hold that the decision belongs to the individual and that the ban endangers women&#39;s health and liberty. In 2025 the Legislature passed the Life of the Mother Act to clarify when doctors may act in medical emergencies; it did not add new exceptions. Few issues divide Texans more sharply, and <em>Roe</em> and <em>Dobbs</em> together show how far the reach of &ldquo;privacy&rdquo; can move &mdash; in both directions."])
+kc(5,1,"What did the Supreme Court hold in <em>Lawrence v. Texas</em> (2003)?",
  ["Texas could criminalize private consensual conduct between adults as a matter of public morality.",
   "Adults have a liberty interest, protected by the Due Process Clause, in private consensual relationships that the state may not criminalize.",
   "Privacy is protected only in the home during a police search.",
   "The case was dismissed because the arrest was based on a false report."],1)
 ,
 reflection="The rights of the accused protect the guilty and the innocent alike, because a fair process is the only way to tell them apart. Explain why that principle is worth its cost even when it lets some guilty people go free &mdash; or, if you disagree, explain what you would change and what risk you would accept in exchange.")

# ===== SECTION 6 =====
S[6] = dict(emoji="&#9994;", title="The Long Struggle for Civil Rights in Texas",
 los=["Trace the history of civil rights struggles in Texas for Black and Mexican American Texans.",
      "Identify the landmark Texas cases <em>Smith v. Allwright</em>, <em>Sweatt v. Painter</em>, and <em>Hernandez v. Texas</em> and explain their significance."],
 body=
 P("Civil rights were not handed down; they were won, slowly and at real cost, by Texans who refused to accept second-class citizenship. The story begins with slavery, which Texas defended in the Civil War, and with its ending: on June 19, 1865, Union General Gordon Granger arrived in Galveston and announced that all enslaved people in Texas were free. That day, <strong>Juneteenth</strong>, is now a state and federal holiday. Freedom on paper, however, was followed by a century of effort to make it real.")
+figure("tx1_juneteenth.jpg",
   "A Juneteenth celebration commemorating June 19, 1865, when Union soldiers arrived in Galveston to enforce the emancipation of enslaved Texans",
   "Juneteenth &mdash; born in Galveston in 1865, the holiday marks the end of slavery in Texas. The legal freedom it announced took generations of struggle to become equal citizenship.")
+P("After Reconstruction ended, Texas, like the rest of the former Confederacy, built a system of racial segregation and disenfranchisement known as <strong>Jim Crow</strong>. A poll tax adopted in 1902 priced poor Black, Mexican American, and white Texans out of the ballot box. Schools, transportation, and public accommodations were segregated by law. And the Democratic Party &mdash; which controlled every office in a one-party state &mdash; barred Black Texans from its primary, the only election that mattered. Because the primary decided everything, the <strong>white primary</strong> made Black votes meaningless.")
+card(6,1,"<em>Smith v. Allwright</em>: the Houston dentist who ended the white primary","&#9994; A voting-rights victory that changed the South!",
  ["Dr. Lonnie E. Smith, a Black dentist in Houston, was turned away from voting in the 1940 Democratic primary. Backed by the NAACP and represented by a young attorney named Thurgood Marshall &mdash; the future Supreme Court justice &mdash; Smith sued the election judge, S. E. Allwright. Texas had defended the white primary for two decades, and in 1935 the Supreme Court had allowed it, reasoning that a political party was a private club free to choose its members.",
   "In <em>Smith v. Allwright</em> (1944), the Court reversed itself by an 8&ndash;1 vote. Because Texas law regulated the primary in detail and the primary effectively chose the state&#39;s officials, the Court held that the party was carrying out a public function and could not discriminate by race. The decision struck down white primaries across the South and is remembered as one of the first great victories of the modern civil rights movement. Black voter registration in Texas rose sharply in the years that followed."])
+card(6,2,"<em>Sweatt v. Painter</em>: the case that paved the road to <em>Brown</em>","&#127891; Separate was not equal!",
  ["In 1946 Heman Marion Sweatt, a Black mail carrier from Houston, applied to the University of Texas School of Law. He was qualified, but Texas law barred Black students. Rather than admit him, the state hastily created a separate law school for Black Texans &mdash; at first a few rented rooms in Austin, with part-time faculty and a small library. Sweatt refused to attend and sued, again with Thurgood Marshall at his side.",
   "In <em>Sweatt v. Painter</em> (1950), a unanimous Supreme Court ordered the University of Texas to admit him. Chief Justice Fred Vinson wrote that the makeshift school could not be equal to UT Law in the things that make a law school great &mdash; its faculty, its reputation, its alumni, the standing of its graduates. It was the first time the Court held that a segregated professional school was unequal in fact, and its reasoning was a direct stepping stone to <em>Brown v. Board of Education</em> four years later, which declared segregated public schools unconstitutional everywhere."])
+figure("tx8_voting_rights.jpg",
   "Symbols of voting rights, representing the long struggle to secure the ballot for all Texans against the poll tax and the white primary",
   "The ballot was the first battleground. Ending the white primary (1944) and the poll tax (1964&ndash;66) opened the vote to Black and Mexican American Texans after decades of exclusion.")
+card(6,3,"<em>Hernandez v. Texas</em>: &ldquo;a class apart&rdquo;","&#9878;&#65039; The first Mexican American civil rights case at the Supreme Court!",
  ["Mexican Americans in Texas faced their own segregation: separate &ldquo;Mexican schools,&rdquo; restricted housing, and signs reading &ldquo;No Mexicans.&rdquo; A 1948 federal case, <em>Delgado v. Bastrop ISD</em>, ended the formal segregation of Mexican American schoolchildren. But the most important ruling came from a murder trial. Pete Hernandez was convicted by an all-Anglo jury in Jackson County, where in 25 years not a single person of Mexican descent had ever served on a jury, though they made up a substantial share of the population.",
   "His lawyers &mdash; Gus Garcia and Carlos Cadena, working with LULAC and the American GI Forum &mdash; argued that the Fourteenth Amendment&#39;s equal protection guarantee covered Mexican Americans, not just Black and white citizens. In <em>Hernandez v. Texas</em>, decided unanimously on May 3, 1954 &mdash; two weeks before <em>Brown</em> &mdash; Chief Justice Earl Warren agreed. Any group treated as &ldquo;a class apart&rdquo; and singled out for discrimination is protected, he wrote. It was the first Supreme Court case argued by Mexican American attorneys and the first to extend equal protection beyond a Black-white framework. Its logic protects every ethnic group in America today."])
+defbox("&#129309; The Organizations That Led the Fight",
  "Texans built some of the nation&#39;s most important civil rights organizations. The <strong>NAACP</strong> brought the voting and school cases. The <strong>League of United Latin American Citizens (LULAC)</strong>, founded in Corpus Christi in 1929, is the oldest Latino civil rights organization in the United States. The <strong>American GI Forum</strong>, founded in 1948 by Dr. Hector P. Garcia after Mexican American veterans were denied services, fought for veterans&#39; rights and school desegregation. The federal <strong>Civil Rights Act of 1964</strong> and <strong>Voting Rights Act of 1965</strong> finally gave the national government the tools to enforce these hard-won rights in Texas. In 1966 Barbara Jordan became the first Black woman elected to the Texas Senate, and in 1972 the first Black Texan sent to Congress since Reconstruction.")
+kc(6,1,"Why is <em>Hernandez v. Texas</em> (1954) considered a landmark?",
  ["It ended the poll tax in Texas.",
   "It was the first Supreme Court case to hold that the Fourteenth Amendment protects Mexican Americans as a class, extending equal protection beyond a Black-white framework.",
   "It desegregated the University of Texas.",
   "It created the League of United Latin American Citizens."],1)
+kc(6,2,"What did <em>Smith v. Allwright</em> (1944) strike down?",
  ["The Texas poll tax.",
   "Segregated public schools in Texas.",
   "The all-white Democratic primary in Texas, holding that a party running the decisive election performs a public function and may not discriminate by race.",
   "Texas&#39;s literacy test for voters."],2)
 ,
 reflection="Lonnie Smith, Heman Sweatt, and Pete Hernandez were ordinary Texans who took extraordinary risks to demand equal treatment. Choose one of them. Explain what they were up against, what the Supreme Court decided, and why the ruling mattered beyond that one person. Then reflect on what it takes for an individual to challenge a system that nearly everyone in power accepts.")

# ===== SECTION 7 =====
S[7] = dict(emoji="&#9878;&#65039;", title="Equal Protection Today: Ongoing Debates",
 los=["Explain the Equal Protection Clause and the three levels of judicial scrutiny.",
      "Analyze current civil rights debates in Texas &mdash; voting, education, affirmative action, sex and gender, immigration &mdash; from multiple perspectives."],
 body=
 P("The Fourteenth Amendment forbids a state to &ldquo;deny to any person within its jurisdiction the equal protection of the laws.&rdquo; Yet governments classify people constantly &mdash; by age, income, occupation, residency, and more &mdash; and most classifications are perfectly legal. The hard question is <em>which</em> distinctions are forbidden. Courts answer with a sliding scale called <strong>levels of scrutiny</strong>, and knowing it is the key to understanding almost every modern civil rights fight.")
+card(7,1,"The three levels of scrutiny","&#9878;&#65039; The framework behind every equal-protection case!",
  ["<strong>Strict scrutiny</strong> applies to classifications by race or national origin and to laws burdening fundamental rights. Government must show a <em>compelling</em> interest and a law <em>narrowly tailored</em> to it. Almost no racial classification survives this test. <strong>Intermediate scrutiny</strong> applies to classifications by sex: the law must serve an <em>important</em> interest and be <em>substantially related</em> to it. <strong>Rational-basis review</strong> applies to everything else: the law need only be rationally related to a <em>legitimate</em> purpose, and it almost always survives.",
   "Where a group lands on this scale often decides the case before the facts are heard. Much of the argument over civil rights today is really an argument over which level of scrutiny a particular classification deserves &mdash; and Texas courts add a second layer, since the Texas ERA names race, sex, color, creed, and national origin explicitly."])
+figure("tx12_immigration.jpg",
   "Immigration and the Texas border, the setting for landmark equal-protection cases and ongoing debates over the rights of immigrants",
   "Immigration and equal protection &mdash; <em>Plyler v. Doe</em> (1982) held that Texas could not deny undocumented children a public education; state and federal authority over immigration remains one of Texas&#39;s most contested questions.")
+card(7,2,"<em>Plyler v. Doe</em>: education and equal protection","&#127891; A Texas ruling still shaping the nation!",
  ["In 1975 Texas passed a law withholding state funds for the education of children who were not lawfully admitted to the United States, and allowing districts to bar them. Families in Tyler challenged it. In <em>Plyler v. Doe</em> (1982), the Supreme Court struck down the law by a 5&ndash;4 vote. Justice Brennan reasoned that the children had done nothing wrong, that denying them an education would create a permanent underclass, and that Texas had shown no substantial interest served by the law. The Equal Protection Clause, the Court held, protects every <em>person</em> within a state&#39;s jurisdiction, regardless of immigration status.",
   "<em>Plyler</em> remains the law today, and every public school in Texas educates children without asking about immigration status. It also anchors a continuing debate. Texas has repeatedly tested the limits of state authority over immigration &mdash; most recently through a 2023 law, Senate Bill 4, that made unlawful entry a state crime and authorized state officers to arrest and remove migrants. The law was challenged in federal court as conflicting with the national government&#39;s authority over immigration, and litigation has continued. <strong>Supporters</strong> argue that a border state must be able to protect itself when federal enforcement falls short; <strong>opponents</strong> argue that immigration is a federal responsibility and that state enforcement invites profiling. The dispute is as much about federalism as about rights."])
+card(7,3,"Voting rights today: the debate over Texas&#39;s election laws","&#128499;&#65039; Security and access in tension!",
  ["The Voting Rights Act of 1965 once required Texas to obtain federal approval for any change to its election laws. That requirement ended when the Supreme Court struck down the Act&#39;s coverage formula in <em>Shelby County v. Holder</em> (2013), and Texas has since made several major changes. A 2011 voter-identification law, among the nation&#39;s strictest, was found by federal courts to burden minority voters; the Legislature revised it in 2017 to allow alternatives for voters who lack photo ID. In 2021 the Legislature passed <strong>Senate Bill 1</strong>, which ended drive-through and 24-hour voting, added identification requirements for mail ballots, expanded the role of partisan poll watchers, and regulated who may assist voters.",
   "<strong>Supporters</strong> of these laws argue they protect the integrity of elections, prevent fraud, and increase public confidence. <strong>Opponents</strong> argue they make voting harder, especially for elderly, disabled, minority, and low-income Texans, in the name of preventing fraud that, they contend, is rare. Federal courts have upheld some provisions of SB 1 and struck down others, and litigation over the law and over Texas&#39;s redistricting maps has continued. Reasonable people weigh the goals of security and access differently; the Constitution requires that whatever balance the state strikes not deny any group the equal protection of the laws."])
+card(7,4,"Affirmative action from <em>Hopwood</em> to <em>Fisher</em> to today","&#127891; Texas at the center of the admissions debate!",
  ["Texas has been a laboratory for the fight over race in college admissions. In <em>Hopwood v. Texas</em> (1996), a federal appeals court barred Texas universities from considering race at all. The Legislature responded with the <strong>Top 10 Percent Plan</strong>, guaranteeing admission to any Texas public university for students graduating in the top tenth of their high school class &mdash; a race-neutral policy that nonetheless increased diversity because Texas high schools remain largely segregated by neighborhood. After the Supreme Court permitted limited use of race in 2003, UT added a modest race-conscious element for students admitted outside the plan.",
   "Abigail Fisher, a white applicant denied admission, challenged that element. In <em>Fisher v. University of Texas</em> (2013 and 2016), the Supreme Court ultimately upheld UT&#39;s program by a 4&ndash;3 vote as narrowly tailored. Then in 2023, in a case from Harvard and North Carolina, the Court held that race-conscious admissions violate equal protection, ending the practice nationwide. The same year the Texas Legislature passed Senate Bill 17, closing diversity, equity, and inclusion offices at public universities. <strong>Supporters</strong> of these changes argue that the Constitution is colorblind and that race-based preferences are themselves discrimination; <strong>opponents</strong> argue that race-neutral policies cannot undo the effects of past discrimination and that diverse campuses benefit everyone. The Top 10 Percent Plan, meanwhile, remains in force."])
+defbox("&#9878;&#65039; Sex, Gender, and Equal Protection",
  "Classifications by sex receive intermediate scrutiny federally and explicit protection under the Texas ERA. Over the past half-century the law has moved substantially: the Supreme Court recognized same-sex marriage in <em>Obergefell v. Hodges</em> (2015) and held in <em>Bostock v. Clayton County</em> (2020) that federal employment law bars discrimination based on sexual orientation or gender identity. Texas has legislated actively in this area: 2023 laws restricted gender-transition treatments for minors (upheld by the Texas Supreme Court in 2024) and set rules for school sports by biological sex, and a 2025 law defined sex for state records. <strong>Supporters</strong> describe these as protections for children, women&#39;s sports, and parental rights; <strong>opponents</strong> describe them as discrimination against transgender Texans. These questions are actively contested in legislatures, courts, and public opinion, and this chapter presents them as the open debates they are.")
+kc(7,1,"A Texas law that classifies people by race would be reviewed under which standard?",
  ["Rational-basis review, because race is like any other classification.",
   "Intermediate scrutiny, the same standard used for sex.",
   "Strict scrutiny, requiring a compelling interest and a narrowly tailored law.",
   "No review, because states may classify by race freely."],2)
+kc(7,2,"What did <em>Plyler v. Doe</em> (1982) decide?",
  ["Texas may charge tuition to undocumented students.",
   "Texas may not deny undocumented children a free public education, because the Equal Protection Clause covers every person within the state&#39;s jurisdiction.",
   "Immigration is entirely a state matter.",
   "Public schools must verify the immigration status of every student."],1)
 ,
 reflection="Pick one current Texas debate from this section &mdash; voting rules, immigration enforcement, affirmative action, or sex and gender &mdash; and lay out the strongest case for each side as its supporters would make it, without caricature. Then identify the level of scrutiny you think should apply and explain why. Where does your own view land, and what evidence would move you?")

# ===== SECTION 8 =====
S[8] = dict(emoji="&#129309;", title="Rights and Responsibilities: The Citizen&#39;s Side of the Bargain",
 los=["Describe the responsibilities that accompany the rights of Texas citizens.",
      "Explain how individual citizens exercise, protect, and expand their rights."],
 body=
 P("Every right in this chapter has a hidden condition: it depends on citizens to make it work. Rights are not self-enforcing. A Bill of Rights is only paper until people know what it says, insist that it be honored, and accept the duties that come with it. The Texas Constitution says as much in its opening words, describing rights as the principles of &ldquo;free government&rdquo; &mdash; a government that stays free only as long as its citizens do their part. This closing section turns from what government owes you to what you owe the community that secures your rights.")
+figure("tx8_i_voted.jpg",
   "An I Voted sticker, representing the civic responsibility of voting that accompanies the right to vote in Texas",
   "&ldquo;I Voted&rdquo; &mdash; the right to vote was won at enormous cost, and it means nothing unless exercised. Voting is the most basic of the responsibilities that keep rights alive.")
+card(8,1,"Why jury duty is both a right and a responsibility","&#9878;&#65039; The most important civic job most people try to avoid!",
  ["Consider what the Hernandez case was really about. Pete Hernandez had a <em>right</em> to a jury drawn from his community. That right was only real because ordinary Texans showed up to serve. When a county excluded Mexican Americans from juries for a quarter century, it denied both a right and a responsibility at once. The jury is the one place where ordinary citizens directly exercise the power of the state &mdash; deciding guilt, awarding damages, checking prosecutors and judges alike.",
   "That is why jury service is a legal duty in Texas and why the Texas Bill of Rights guarantees that &ldquo;the right of trial by jury shall remain inviolate.&rdquo; A citizen who dodges jury duty weakens the very right they might one day need. The same logic applies to the other core duties: obeying the law, paying the taxes that fund courts and schools, and answering when the community calls."])
+card(8,2,"Defending the rights of people you disagree with","&#128509; The lesson of a burning flag!",
  ["Gregory Lee Johnson&#39;s flag burning offended most Americans. But the principle the Court announced protects everyone: a government with the power to silence him would have the power to silence you. Rights are indivisible in a practical sense. Free speech for the protester you despise is what guarantees free speech for the cause you love. Religious liberty for a faith you find strange is what protects your own. Due process for the accused you are sure is guilty is what protects you if you are ever accused falsely.",
   "This is the hardest responsibility of citizenship: to defend a liberty even when it shelters someone you oppose. It requires the willingness to separate <em>whether</em> a person should have a right from <em>whether</em> you like how they use it. Citizens who master that distinction keep liberty alive; those who demand rights only for their own side eventually lose them for everyone."])
+defbox("&#129309; The Responsibilities of a Texas Citizen",
  "<strong>Know your rights.</strong> Read the Texas Bill of Rights; it is short and written for citizens, not lawyers. <strong>Vote</strong> in every election, including the local and primary contests that decide most of what government does. <strong>Serve</strong> on juries when called. <strong>Obey the law</strong> and pay your share, and work through lawful means &mdash; petition, assembly, elections, and courts &mdash; to change laws you believe are unjust. <strong>Stay informed</strong> from sources that challenge as well as confirm your views. <strong>Respect the rights of others</strong>, especially those with whom you disagree. And <strong>participate</strong>: attend a hearing, contact a representative, join an organization, or run for office.")
+card(8,3,"Every landmark case started with one Texan","&#127775; The power of a single citizen!",
  ["It is easy to read this chapter as a story about the Supreme Court. It is really a story about individuals. A dentist who insisted on voting. A mail carrier who wanted to study law. A defendant who demanded a fair jury. Sixteen families who objected to a classroom poster. A group of parents in Tyler who wanted their children educated. None of them held office. None of them had power. Each of them used the tools available to every citizen &mdash; the courts, the ballot, organizations like LULAC and the NAACP, and the simple refusal to accept an injustice &mdash; and each changed the law for millions of people they would never meet.",
   "That is the bargain at the heart of free government. Rights protect you; responsibilities are how you protect them. The next landmark case has not been filed yet. It will begin, as all the others did, with one person who knew their rights and was willing to act."])
+kc(8,1,"Why is jury service described as both a right and a responsibility?",
  ["Because jurors are paid a salary by the state.",
   "Because the right to a jury of one&#39;s peers is only real if ordinary citizens actually show up to serve.",
   "Because only lawyers are eligible to serve on juries.",
   "Because jury duty is optional in Texas."],1)
 ,
 reflection="This chapter argues that rights depend on responsibilities &mdash; that liberty survives only when citizens vote, serve, obey, respect others&#39; rights, and defend liberties even for people they oppose. Which of these responsibilities do you find hardest to accept, and why? Then describe one concrete thing you could do this year to exercise or protect a right you care about.")

# ---------------------------------------------------------------- POINTS
def section_points(sec):
    body = S[sec]["body"]
    reveal = sum(int(x) for x in re.findall(r"revealCard\([^,]+,\s*'[^']+',\s*(\d+)", body))
    quiz = sum(int(x) for x in re.findall(r"handleAnswer\([^,]+,\s*true,\s*'[^']+',\s*(\d+)", body))
    return reveal + quiz + 25 + 50

points = {s: section_points(s) for s in S}
total = sum(points.values())

# ---------------------------------------------------------------- HOME PAGE
sec_titles = {s: S[s]["title"] for s in S}
sec_desc = {
 1:"Learn the crucial difference between freedoms from government and guarantees of equal treatment, and why Texas has shaped both.",
 2:"Explore Article I of the Texas Constitution, its Equal Rights Amendment, and where Texas protects more than the U.S. Constitution.",
 3:"Discover how the Fourteenth Amendment brought the federal Bill of Rights to Texas through selective incorporation.",
 4:"From a burning flag in Dallas to Ten Commandments in classrooms: free speech, press, and the two religion clauses.",
 5:"Due process, the rights of the accused, and the right to privacy in Lawrence v. Texas and Roe v. Wade.",
 6:"Juneteenth, Jim Crow, and the landmark Texas cases that ended the white primary and extended equal protection.",
 7:"Levels of scrutiny and today&#39;s debates over voting, immigration, affirmative action, and sex and gender.",
 8:"The responsibilities that keep rights alive, and how one Texan can change the law for millions.",
}
sec_icons = {1:"&#9878;&#65039;",2:"&#128220;",3:"&#127963;&#65039;",4:"&#128509;",5:"&#128269;",6:"&#9994;",7:"&#9878;&#65039;",8:"&#129309;"}
cards_html = "\n".join(
 f'                <div class="section-card" id="card{s}" onclick="navigateToSection({s})">\n'
 f'                    <div class="section-number">{s}</div>\n'
 f'                    <h3>{sec_titles[s]}</h3>\n'
 f'                    <p>{sec_desc[s]}</p>\n'
 f'                    <div class="points-indicator">&#127775; {points[s]} points available</div>\n'
 f'                </div>\n' for s in S)

# ---------------------------------------------------------------- ASSEMBLE
# 1. title
c = re.sub(r"<title>[^<]*</title>", "<title>Chapter 16: Civil Liberties and Civil Rights in Texas - Tarrant County College Texas Government Trailblazer Trek</title>", c, count=1)
# 2. hero
c = c.replace("<h2>🗳️ Chapter 8: Voting and Political Participation in Texas ⭐</h2>",
              "<h2>&#9878;&#65039; Chapter 16: Civil Liberties and Civil Rights in Texas &#128509;</h2>")
c = c.replace("<p>Discover how Texans exercise their democratic rights and participate in shaping their government!</p>",
              "<p>Discover the freedoms Texans hold against government power, the long struggle for equal treatment, and the responsibilities that keep those rights alive!</p>")
old_icons = re.search(r'<div class="stat-icons">.*?</div>\s*</div>\s*</div>', c, flags=re.S)
new_icons = ('<div class="stat-icons">\n'
             '                    <div class="stat-icon">\n                        <span>&#9878;&#65039;</span>\n                        <div>Liberties</div>\n                    </div>\n'
             '                    <div class="stat-icon">\n                        <span>&#129309;</span>\n                        <div>Equal Rights</div>\n                    </div>\n'
             '                    <div class="stat-icon">\n                        <span>&#128499;&#65039;</span>\n                        <div>Responsibilities</div>\n                    </div>\n'
             '                </div>')
if old_icons: c = c[:old_icons.start()] + new_icons + c[old_icons.end():]
c = c.replace("<p>Enter your name to begin your journey through Texas voting and political participation:</p>",
              "<p>Enter your name to begin your journey through the rights and responsibilities of Texas citizens:</p>")
# 3. section cards
grid = re.search(r'(<div class="section-grid">\n)(.*?)(\n\s*</div>\s*\n\s*<div style="text-align: center; margin-top: 2rem;">)', c, flags=re.S)
if not grid: sys.exit("section-grid not found")
c = c[:grid.start(2)] + cards_html.rstrip("\n") + c[grid.end(2):]
# 4. sections 1-8 (replace everything from first section marker through chapterReview start)
start = c.find('<!-- Section 1')
if start == -1: start = c.find('<div id="section1" class="page">')
end = c.find('<div id="chapterReview" class="page">')
sections_html = "".join(section(s, S[s]["emoji"], S[s]["title"], S[s]["los"], S[s]["body"], S[s]["reflection"]) for s in S)
c = c[:start] + sections_html + "        " + c[end:]
# 5. sectionPoints
pts_block = "\n".join(f"                {s}: {{ earned: 0, max: {points[s]} }}{',' if s<8 else ''}" for s in S)
c = re.sub(r"(\n\s+1: \{ earned: 0, max: \d+ \},\n(?:\s+\d+: \{ earned: 0, max: \d+ \},?\n)+)", "\n"+pts_block+"\n", c, count=1)

# 6. chapterReview page (replace Ch 8's with Ch 16's)
terms=[
 ("Civil liberties","Freedoms <em>from</em> government &mdash; limits on what the state may do to individuals (speech, religion, privacy, due process)."),
 ("Civil rights","Guarantees of equal treatment <em>by</em> government &mdash; protection against discrimination based on who a person is."),
 ("Texas Bill of Rights","Article I of the 1876 Texas Constitution, placed first to state the limits on government before its powers; longer and in places broader than the federal Bill of Rights."),
 ("Texas Equal Rights Amendment","Article I, Section 3a (1972): equality under the law may not be denied because of sex, race, color, creed, or national origin."),
 ("Fourteenth Amendment","The 1868 amendment whose Due Process and Equal Protection Clauses bind the states, including Texas."),
 ("Selective incorporation","The process by which the Supreme Court applied most of the federal Bill of Rights to the states, one provision at a time, through the Due Process Clause."),
 ("Federal floor, state ceiling","The principle that the U.S. Constitution sets a minimum of rights states may not go below, while state constitutions may protect more."),
 ("Procedural due process","The requirement of fair procedures &mdash; notice, a hearing, an impartial decision-maker &mdash; before government deprives someone of life, liberty, or property."),
 ("Substantive due process","The doctrine that certain fundamental liberties may not be taken away by any law, however fair the procedure."),
 ("Equal Protection Clause","The Fourteenth Amendment guarantee that no state may deny any person the equal protection of the laws."),
 ("Levels of scrutiny","The sliding scale courts use in equal-protection cases: strict (race, fundamental rights), intermediate (sex), and rational basis (everything else)."),
 ("Establishment Clause","The First Amendment bar on government establishing or endorsing religion."),
 ("Free Exercise Clause","The First Amendment protection of individuals&#39; freedom to practice their religion."),
 ("Symbolic speech","Expressive conduct, such as flag burning, that the First Amendment protects like spoken words."),
 ("Right to privacy","A constitutional zone of personal autonomy, implied rather than listed, recognized in <em>Griswold</em> (1965) and applied in <em>Lawrence v. Texas</em>."),
 ("White primary","The practice of barring Black voters from the Democratic primary &mdash; the decisive election in one-party Texas &mdash; struck down in <em>Smith v. Allwright</em> (1944)."),
 ("Poll tax","A fee required to vote, adopted by Texas in 1902 to suppress poor and minority voters; abolished by the 24th Amendment (1964) and <em>Harper</em> (1966)."),
 ("Jim Crow","The system of legal racial segregation and disenfranchisement in the South after Reconstruction."),
 ("Juneteenth","June 19, 1865, when Union troops in Galveston announced the end of slavery in Texas; now a state and federal holiday."),
 ("LULAC","The League of United Latin American Citizens, founded in Corpus Christi in 1929; the oldest Latino civil rights organization in the U.S."),
 ("American GI Forum","A Mexican American civil rights and veterans&#39; organization founded in 1948 by Dr. Hector P. Garcia."),
 ("<em>Texas v. Johnson</em> (1989)","Held that burning the flag in political protest is protected symbolic speech, even though offensive to many."),
 ("<em>Smith v. Allwright</em> (1944)","Struck down the Texas white primary, holding a party running the decisive election performs a public function and may not discriminate."),
 ("<em>Sweatt v. Painter</em> (1950)","Ordered UT Law to admit a Black applicant, holding a makeshift separate school was not equal; a direct precursor to <em>Brown</em>."),
 ("<em>Hernandez v. Texas</em> (1954)","Held that the Equal Protection Clause protects Mexican Americans as a class &mdash; the first extension beyond a Black-white framework."),
 ("<em>Lawrence v. Texas</em> (2003)","Struck down Texas&#39;s law against private consensual same-sex conduct as a violation of the liberty protected by due process."),
 ("<em>Plyler v. Doe</em> (1982)","Held that Texas may not deny undocumented children a free public education under the Equal Protection Clause."),
 ("<em>Fisher v. University of Texas</em> (2013, 2016)","Upheld UT&#39;s narrowly tailored race-conscious admissions; superseded by the 2023 decision ending race-conscious admissions nationwide."),
 ("Top 10 Percent Plan","Texas&#39;s race-neutral policy guaranteeing state-university admission to students in the top tenth of their high school class."),
 ("Voting Rights Act (1965)","The federal law barring racially discriminatory election practices; its preclearance requirement for Texas ended after <em>Shelby County</em> (2013)."),
]
glossary="\n".join(f'                    <dt style="font-weight:700; margin-top:0.6rem;">{t}</dt>\n                    <dd style="margin:0.1rem 0 0 1rem;">{d}</dd>' for t,d in terms)
reviews=[
 ("What is the difference between civil liberties and civil rights?","Civil liberties are freedoms <em>from</em> government (limits on what the state may do to you); civil rights are guarantees of equal treatment <em>by</em> government."),
 ("How does the Texas Bill of Rights differ from the federal one?","It comes first (Article I) rather than as later amendments, is longer and in places broader, includes an Equal Rights Amendment the nation never ratified, and can be read by Texas courts to protect more than the federal minimum."),
 ("How did the federal Bill of Rights come to apply to Texas?","Through the Fourteenth Amendment&#39;s Due Process Clause and selective incorporation, which applied most federal rights to the states one at a time."),
 ("What did <em>Texas v. Johnson</em> hold, and why does it matter?","That flag burning in protest is protected symbolic speech; government may not ban expression merely because it is offensive &mdash; a principle that protects everyone&#39;s speech."),
 ("Name the three landmark Texas civil rights cases of the 1940s-50s and what each did.","<em>Smith v. Allwright</em> ended the white primary; <em>Sweatt v. Painter</em> desegregated UT Law and paved the way for <em>Brown</em>; <em>Hernandez v. Texas</em> extended equal protection to Mexican Americans as a class."),
 ("What are the three levels of scrutiny?","Strict (race, fundamental rights: compelling interest, narrowly tailored), intermediate (sex: important interest, substantially related), and rational basis (everything else: legitimate purpose)."),
 ("What is the current status of Texas&#39;s Ten Commandments classroom law?","A district judge blocked it in 2025; the full Fifth Circuit upheld it 9&ndash;8 in April 2026; the challengers have asked the U.S. Supreme Court to hear the case."),
]
reviews_html="\n".join(f'                <details style="margin:0.4rem 0; padding:0.5rem 0.85rem; background:#eef3f8; border-radius:6px;">\n                    <summary style="cursor:pointer; font-weight:600;">{i}. {q}</summary>\n                    <p style="margin:0.4rem 0 0;"><strong>Answer:</strong> {a}</p>\n                </details>' for i,(q,a) in enumerate(reviews,1))
critical=[
 "Rights protect the guilty and the innocent, the popular and the despised, alike. Is there any liberty you would deny to people you strongly oppose? What would that cost you?",
 "Texas&#39;s constitution can protect more than the U.S. Constitution requires. Should rights vary from state to state, or should they be uniform nationwide? Defend your view.",
 "The Ten Commandments dispute pits sincere religious tradition against sincere concern about government favoring one faith. Where should a diverse society draw the Establishment Clause line?",
 "Lonnie Smith, Heman Sweatt, and Pete Hernandez each risked a great deal to win rights for people they never met. What does their example suggest about how civil rights actually advance?",
 "Choose one current debate &mdash; voting rules, immigration, affirmative action, or sex and gender &mdash; and state the strongest case for each side fairly. Which level of scrutiny should apply, and why?",
]
critical_html="\n".join(f'                    <li style="margin:0.35rem 0;">{q}</li>' for q in critical)
refs=[
 'Texas Constitution, Article I (Bill of Rights). <a href="https://statutes.capitol.texas.gov/Docs/CN/htm/CN.1.htm" target="_blank" rel="noopener">statutes.capitol.texas.gov</a>',
 'U.S. Constitution, First and Fourteenth Amendments. <a href="https://www.archives.gov/founding-docs/constitution" target="_blank" rel="noopener">National Archives</a>',
 'Landmark cases with opinions and oral arguments &mdash; <em>Texas v. Johnson</em>, <em>Smith v. Allwright</em>, <em>Sweatt v. Painter</em>, <em>Hernandez v. Texas</em>, <em>Lawrence v. Texas</em>, <em>Plyler v. Doe</em>, <em>Fisher v. Texas</em>. <a href="https://www.oyez.org" target="_blank" rel="noopener">Oyez</a>',
 'Handbook of Texas Online (TSHA) &mdash; entries on Juneteenth, the white primary, LULAC, the American GI Forum, Heman Sweatt, and Barbara Jordan. <a href="https://www.tshaonline.org/handbook" target="_blank" rel="noopener">tshaonline.org/handbook</a>',
 'OpenStax, <em>American Government 3e</em> (CC BY 4.0), chapters on civil liberties and civil rights. <a href="https://openstax.org/details/books/american-government-3e" target="_blank" rel="noopener">openstax.org</a>',
 'Image credits: Wikimedia Commons (public domain), as noted on each image.',
]
refs_html="\n".join(f'                    <li style="margin:0.35rem 0;">{r}</li>' for r in refs)
summary=("Texans hold their rights from two constitutions at once. <strong>Civil liberties</strong> are freedoms <em>from</em> government &mdash; speech, religion, privacy, due process; <strong>civil rights</strong> are guarantees of equal treatment <em>by</em> government. The Texas Constitution puts its <strong>Bill of Rights</strong> first (Article I) and in places protects more than the federal minimum, including an Equal Rights Amendment the nation never adopted. Federal rights reach Texas through the <strong>Fourteenth Amendment</strong> and <strong>selective incorporation</strong>: the U.S. Constitution sets a floor, and Texas may raise the ceiling. Texas has shaped these rights for the whole nation &mdash; <em>Texas v. Johnson</em> protected offensive speech; <em>Lawrence v. Texas</em> protected private life; and, in the long struggle for civil rights, <em>Smith v. Allwright</em> ended the white primary, <em>Sweatt v. Painter</em> paved the road to <em>Brown</em>, and <em>Hernandez v. Texas</em> extended equal protection to Mexican Americans. Today&#39;s debates &mdash; over religious displays in classrooms, voting rules, immigration, affirmative action, and sex and gender &mdash; turn on the <strong>levels of scrutiny</strong> and on where a diverse society draws its lines, and this chapter presents each side&#39;s strongest case. Finally, rights depend on <strong>responsibilities</strong>: voting, serving on juries, obeying the law, staying informed, and defending the liberties of people we oppose. Every landmark case began with one Texan who knew their rights and acted.")
review_page = f'''<div id="chapterReview" class="page">
            <button class="back-button" onclick="navigateToHome()">&larr; Back to Home</button>
            <div class="content-section">
                <div class="section-header">
                    <span>&#128214;</span>
                    <h2>Chapter Review &amp; Resources</h2>
                </div>
                <p>Use this page to review Chapter 16. It gathers the chapter summary, key terms, self-check review questions, critical-thinking prompts, and sources for further study. This page is for study only and is not scored.</p>

                <h3>&#128221; Chapter Summary</h3>
                <p>{summary}</p>

                <h3>&#128273; Key Terms</h3>
                <div class="info-box">
                    <dl style="margin:0;">
{glossary}
                    </dl>
                </div>

                <h3>&#9989; Review Questions</h3>
                <p>Test your recall, then click each question to reveal the answer.</p>
{reviews_html}

                <h3>&#129300; Critical-Thinking Questions</h3>
                <p>These open-ended questions have no single correct answer; use them for discussion or writing.</p>
                <ul>
{critical_html}
                </ul>

                <h3>&#128218; References &amp; Further Study</h3>
                <ul>
{refs_html}
                </ul>
            </div>
        </div>

        '''
rs = c.find('<div id="chapterReview" class="page">')
re_ = c.find('<div id="reportPage" class="page">')
if rs == -1 or re_ == -1: sys.exit("review/report anchors not found")
c = c[:rs] + review_page + c[re_:]

# 7. Regenerate the sectionElements gate map from the ACTUAL content (never inherit the template's)
import html as _html
def _words(h): return len(_html.unescape(re.sub(r"<[^>]+>"," ",h)).split())
se_lines=[]
for s in S:
    body=S[s]["body"]
    cards=re.findall(r"revealCard\(this, '([^']+)'", body)
    qs=[]
    for q in re.findall(r"handleAnswer\(this, (?:true|false), '([^']+)'", body):
        if q not in qs: qs.append(q)
    mins=max(90, min(240, round(_words(body)*0.3)))
    se_lines.append(f"            '{s}': {{ cards: [{','.join(repr(x) for x in cards)}], questions: [{','.join(repr(x) for x in qs)}], minSeconds: {mins} }}")
se_block="        const sectionElements = {\n" + ",\n".join(se_lines) + "\n        };"
m=re.search(r"        const sectionElements = \{.*?\n        \};", c, flags=re.S)
if not m: sys.exit("sectionElements block not found")
c=c[:m.start()]+se_block+c[m.end():]
# cross-check: every card/question in the DOM is in the gate map and vice versa
for s in S:
    body=S[s]["body"]
    dom_cards=set(re.findall(r"revealCard\(this, '([^']+)'", body))
    dom_qs=set(re.findall(r"handleAnswer\(this, (?:true|false), '([^']+)'", body))
    line=[l for l in se_lines if l.strip().startswith(f"'{s}'")][0]
    map_cards=set(re.findall(r"'(card[^']+)'", line)); map_qs=set(re.findall(r"'(q[^']+)'", line))
    assert dom_cards==map_cards and dom_qs==map_qs, f"gate map mismatch in section {s}"
print("sectionElements regenerated and cross-checked against content.")

open(OUT, "w", encoding="utf-8").write(c)
print("Built", OUT)
print("Section points:", points, "| total:", total)
