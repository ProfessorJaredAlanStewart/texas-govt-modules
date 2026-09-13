#!/usr/bin/env python3
"""Build Chapter 18 - The Texas Bureaucracy and Sunset Review."""
import re, sys, html as _html

TEMPLATE = "Chapter 8 - Voting Political Participation (Trailblazer Trek).html"
OUT = "Chapter 18 - The Texas Bureaucracy and Sunset Review (Trailblazer Trek).html"
c = open(TEMPLATE, encoding="utf-8").read()

def lo_box(o):
    items = "\n".join(f"                        <li>{x}</li>" for x in o)
    return ('                <div class="learning-objectives">\n'
            '                    <h4>&#127919; Learning Objectives</h4>\n'
            f'                    <ul>\n{items}\n                    </ul>\n                </div>\n')
def P(t): return f'                <p class="content-text">{t}</p>\n'
def figure(src, alt, cap):
    return (f'                <figure class="chapter-image">\n'
            f'                    <img src="images/{src}" alt="{alt}" loading="lazy">\n'
            f'                    <figcaption>{cap}\n'
            f'                        <span class="img-credit">Source: Wikimedia Commons / Public Domain</span>\n'
            f'                    </figcaption>\n                </figure>\n')
def card(s, n, prompt, reveal, paras):
    b = "\n".join(f"                        <p>{p}</p>" for p in paras)
    return (f'                <div class="interactive-card" onclick="revealCard(this, \'card{s}-{n}\', 15)">\n'
            f'                    <div class="card-prompt">&#128269; Click to explore: {prompt}</div>\n'
            f'                    <div class="card-content">\n'
            f'                        <p><strong>+15 points!</strong> {reveal}</p>\n{b}\n'
            f'                    </div>\n                </div>\n')
def defbox(t, b):
    return (f'                <div class="definition-box">\n                    <div class="definition-term">{t}</div>\n'
            f'                    <div>{b}</div>\n                </div>\n')
def kc(s, n, q, opts, correct):
    o = "\n".join(f'                    <div class="kc-option" onclick="handleAnswer(this, {"true" if i==correct else "false"}, \'q{s}-{n}\', {50 if i==correct else 0})">{x}</div>' for i, x in enumerate(opts))
    return (f'                <div class="knowledge-check">\n                    <div class="kc-question">&#10067; {q}</div>\n{o}\n'
            f'                    <div class="feedback-box" id="feedback-q{s}-{n}"></div>\n                </div>\n')
def tail(s, prompt):
    return (f'                <div style="text-align: center; margin-top: 2rem;">\n                    \n'
            f'                <div class="reflection-box" id="reflection-section{s}">\n'
            f'                    <div class="reflection-header">&#128172; Reflection <span class="reflection-points">+25 points</span></div>\n'
            f'                    <div class="reflection-prompt">{prompt}</div>\n'
            f'                    <textarea class="reflection-input" id="reflectionInput{s}" rows="5" placeholder="Write at least 50 words in your own words&#8230;" oninput="updateReflectionCount({s})"></textarea>\n'
            f'                    <div class="reflection-footer"><span class="reflection-counter" id="reflectionCounter{s}">0 words</span><button class="reflection-submit" id="reflectionSubmit{s}" onclick="submitReflection({s})">Submit Reflection</button></div>\n'
            f'                    <div class="reflection-feedback" id="reflectionFeedback{s}"></div>\n                </div>\n'
            f'                <button class="complete-section-btn" onclick="completeSection({s})">&#9989; Complete Section {s}</button>\n'
            f'                <div class="section-gate-msg" id="sectionGate{s}" style="display:none;margin:15px auto;max-width:420px;padding:12px 18px;background:#fbe9ee;border-left:5px solid #98002e;border-radius:8px;color:#212121;font-size:0.95em;text-align:center;"></div>\n'
            f'                </div>\n')
def section(s, e, t, los, body, refl):
    return (f'        <!-- Section {s}: {t} -->\n        <div id="section{s}" class="page">\n'
            f'            <button class="back-button" onclick="navigateToHome()">&larr; Back to Home</button>\n'
            f'            <div class="content-section">\n                <div class="section-header">\n'
            f'                    <span>{e}</span>\n                    <h2>{t}</h2>\n                </div>\n\n'
            f'{lo_box(los)}\n{body}{tail(s, refl)}            </div>\n        </div>\n\n')

S = {}

S[1] = dict(emoji="&#127970;", title="What the Bureaucracy Is and Why It Exists",
 los=["Define bureaucracy and explain why Texas government depends on one.",
      "Explain how agencies exercise delegated authority under a part-time legislature."],
 body=
 P("When Texans picture state government, they usually picture the Capitol: 181 legislators debating bills, a governor signing or vetoing them. But the Legislature meets for only 140 days every two years. The people who actually carry out the law &mdash; inspecting restaurants, issuing licenses, running prisons, distributing school money, testing drivers, responding to disasters &mdash; work in the <strong>bureaucracy</strong>: the permanent structure of agencies, boards, and commissions staffed by career employees who remain long after any one governor leaves office.")
+P("&ldquo;Bureaucracy&rdquo; is often used as an insult, a synonym for red tape. Used precisely, it simply means an organization that carries out tasks through specialized roles, written rules, and a hierarchy. Those features exist for a reason: they make government predictable and reviewable. When a rule is written down and applied the same way to everyone, a citizen can know in advance what is required and can appeal when it is applied wrongly. The alternative &mdash; officials deciding case by case on instinct or favoritism &mdash; is precisely what rules were built to prevent.")
+figure("tx1_texas_capitol.jpg",
   "The Texas State Capitol in Austin, where the Legislature writes the laws that state agencies are then responsible for carrying out",
   "The Legislature meets 140 days every two years. The agencies that carry out its laws work every day of the year &mdash; which is why understanding the bureaucracy is essential to understanding Texas government.")
+card(1,1,"Why a part-time legislature needs a full-time bureaucracy","&#128221; Delegation is unavoidable!",
  ["No legislature could write rules detailed enough to govern every situation. A law might direct that nursing homes be &ldquo;safe and sanitary,&rdquo; but someone must decide how many staff per resident, how often floors are cleaned, what happens when a facility falls short. The Legislature therefore passes <strong>enabling legislation</strong>: a statute creating an agency, stating its mission, and granting it authority to fill in the details.",
   "That grant is called <strong>delegated authority</strong>, and it creates the central tension of this chapter. Agencies must have discretion to do their jobs competently. But discretion means unelected officials making decisions that carry the force of law. Every accountability mechanism you will study here &mdash; legislative oversight, the budget, Sunset review, the courts, public comment &mdash; exists to manage that tension. Texas&#39;s short biennial sessions make the tension sharper here than in states with full-time legislatures."])
+card(1,2,"How big is Texas government, really?","&#128202; Smaller than you might guess!",
  ["Texas employs a few hundred thousand people in state government, including university staff. Measured against population, Texas has one of the <em>lowest</em> ratios of state employees to residents in the country &mdash; a fact both sides of the political debate cite. <strong>Supporters</strong> of the state&#39;s approach point to it as evidence of lean, efficient government that keeps taxes low. <strong>Critics</strong> point to the same number as evidence of agencies stretched too thin to inspect facilities, process applications, or answer the phone.",
   "The number is also misleading on its own, because much of what Texas government does is performed by someone else: county employees, school district staff, private contractors running services under state contracts, and nonprofit providers. Counting only state employees understates the real footprint of state policy considerably."])
+kc(1,1,"What is delegated authority?",
  ["The governor's power to veto legislation.",
   "The authority the Legislature grants an agency to fill in the details of a law and carry it out.",
   "A county's power to ignore state law.",
   "The power of voters to recall an official."],1)
 ,
 refl="The Texas Legislature meets 140 days every two years, yet state agencies operate continuously. Explain in your own words why that arrangement makes delegation to the bureaucracy unavoidable, and describe one risk it creates. What would you want in place to manage that risk?")

S[2] = dict(emoji="&#128203;", title="Boards, Commissions, and the Fragmented Structure",
 los=["Describe how Texas organizes its agencies through boards and commissions.",
      "Explain how the plural executive and fragmented structure affect accountability."],
 body=
 P("Most states concentrate executive authority in a governor who appoints and can fire the heads of major agencies. Texas does the opposite, and deliberately so. As Chapter 5 explained, the 1876 framers fragmented executive power in reaction to Reconstruction. That fragmentation runs all the way down into the bureaucracy: rather than reporting to the governor, most Texas agencies are governed by <strong>multimember boards and commissions</strong> whose members serve fixed, <strong>staggered terms</strong>.")
+P("Staggering is the key design choice. Because terms overlap and typically run six years, a newly elected governor inherits boards appointed by predecessors and cannot replace a majority immediately. A governor generally needs several years in office to reshape a board. Combined with the fact that several executive officials are separately elected, this means no single official controls the Texas executive branch.")
+figure("tx5_plural_executive.jpg",
   "Texas executive branch offices, illustrating the plural executive and the fragmented board-and-commission structure of state agencies",
   "Texas's fragmented executive extends into the bureaucracy: most agencies answer to appointed multimember boards with staggered terms, not to the governor directly.")
+card(2,1,"Three ways a Texas agency can be led","&#128203; Not all agencies look alike!",
  ["<strong>Elected commissions.</strong> A few agencies are run by officials Texans elect statewide &mdash; the Railroad Commission (three commissioners) and the State Board of Education (fifteen members from single-member districts). These are directly accountable to voters, though in races most voters skip.",
   "<strong>Appointed boards with a hired director.</strong> The most common model. The governor appoints board members (with Senate confirmation) to staggered terms; the board sets policy and hires an executive director or commissioner who runs daily operations. The Texas Commission on Environmental Quality, the Public Utility Commission, and the Parks and Wildlife Commission work this way.",
   "<strong>Single executives appointed by the governor.</strong> A smaller set of agencies, including the Health and Human Services Commission and the Texas Education Agency commissioner, are led by a single official the governor appoints, which gives the governor more direct influence over them."])
+defbox("&#9878;&#65039; Why Staggered Terms Matter",
  "A six-year staggered term means roughly one-third of a board&#39;s seats open every two years. The intended benefits are <strong>continuity</strong> (agencies do not lurch with each election), <strong>insulation</strong> from short-term political pressure, and <strong>expertise</strong> retained over time. The cost is <strong>accountability</strong>: when a board makes an unpopular decision, voters cannot readily remove it, and a new governor cannot simply reverse course. This is the same trade-off between responsiveness and stability that runs through the whole Texas constitutional design.")
+card(2,2,"The appointment power as the governor&#39;s real strength","&#9997;&#65039; Thousands of appointments!",
  ["Chapter 5 described the Texas governor as constitutionally weak. The appointment power is the major exception. Over a full term, a governor appoints thousands of people to hundreds of boards, commissions, and university regent positions. A governor serving multiple terms can eventually shape nearly every board in state government &mdash; which is one reason long tenures matter so much in Texas.",
   "Two limits apply. Appointments generally require <strong>Senate confirmation</strong> by a two-thirds vote, giving senators real leverage. And the governor&#39;s power to <em>remove</em> appointees is narrow: a governor may remove their own appointees only with Senate consent, and generally cannot remove a predecessor&#39;s appointees at all. Influence therefore accumulates slowly rather than arriving with the inauguration."])
+kc(2,1,"Why do staggered terms limit a new governor's control of the bureaucracy?",
  ["Because board members are elected by voters, not appointed.",
   "Because overlapping fixed terms mean a governor inherits predecessors' appointees and needs years to reshape a board majority.",
   "Because the Legislature appoints all board members.",
   "Because board members serve for life."],1)
+kc(2,2,"Which agency is led by officials elected statewide by Texas voters?",
  ["The Texas Commission on Environmental Quality.",
   "The Health and Human Services Commission.",
   "The Railroad Commission of Texas.",
   "The Public Utility Commission of Texas."],2)
 ,
 refl="Texas insulates most agencies from direct gubernatorial control through appointed boards with staggered terms. Explain the strongest argument that this protects good government, and the strongest argument that it weakens accountability. Which concerns you more, and why?")

S[3] = dict(emoji="&#128188;", title="Merit, Patronage, and the People Who Do the Work",
 los=["Distinguish the merit system from patronage and describe how Texas staffs its agencies.",
      "Explain the role of contracting and privatization in Texas service delivery."],
 body=
 P("Who gets a government job, and why, shapes how well government works. Historically, American governments ran on <strong>patronage</strong> &mdash; the <strong>spoils system</strong>, in which winning politicians handed jobs to supporters. The federal government moved toward a <strong>merit system</strong> after the 1883 Pendleton Act, hiring and promoting on the basis of qualifications and protecting employees from firing for political reasons.")
+P("Texas state government today hires professional staff through competitive processes, and most state employees are career civil servants rather than political appointees. But Texas has never adopted a single, comprehensive statewide civil service system of the kind many states and the federal government use. Agencies have substantial latitude over their own personnel practices, and most state employees are <strong>at-will</strong>, meaning they can be dismissed without the elaborate procedural protections federal employees receive. As Chapter 7 noted, patronage lingers most visibly at the county level, where many offices still operate without merit protections.")
+card(3,1,"The trade-off in job protections","&#9878;&#65039; Protection versus responsiveness!",
  ["Strong job protections are meant to guarantee that a scientist can report an inconvenient finding, an auditor can flag a politically connected contractor, and an inspector can cite a powerful business without fearing dismissal. That independence is the whole point of a merit system.",
   "The counterargument is equally real: protections can make it hard to remove genuinely poor performers, and can leave agencies less responsive to elected officials who were, after all, chosen by voters to change how government operates. <strong>One view</strong> holds that a professional, insulated workforce is essential to competent and honest administration. <strong>The other</strong> holds that unelected employees should be answerable to the people&#39;s elected representatives. Texas has generally leaned toward flexibility and managerial control."])
+card(3,2,"Contracting out: the shadow bureaucracy","&#128179; Much of Texas government is not run by Texas employees!",
  ["Texas relies heavily on <strong>contracting</strong> and <strong>privatization</strong>. Private and nonprofit organizations operate services under state contracts across health and human services, child welfare, some correctional functions, technology systems, and road construction. This is a deliberate policy preference, and it keeps the count of state employees low.",
   "<strong>Supporters</strong> argue contractors bring competition, specialized expertise, and flexibility, and that government should buy services rather than build permanent bureaucracies. <strong>Critics</strong> argue that oversight capacity has not kept pace, and they point to procurement failures and troubled contracts that state auditors have documented over the years. The core difficulty is structural: contracting shifts the state&#39;s job from <em>doing</em> the work to <em>monitoring</em> whoever does, and monitoring well requires exactly the expert staff that contracting is often meant to reduce."])
+kc(3,1,"What distinguishes a merit system from patronage?",
  ["Merit systems hire and promote based on qualifications; patronage awards jobs based on political loyalty.",
   "Merit systems are used only by county governments in Texas.",
   "Patronage requires competitive examinations for every position.",
   "There is no practical difference between them."],0)
 ,
 refl="Texas keeps its state workforce comparatively small and contracts out a great deal of service delivery. Explain one clear benefit and one clear risk of that approach. Then describe what a state would need in place to contract successfully, and whether you think Texas has it.")

S[4] = dict(emoji="&#127749;", title="Sunset Review: Texas's Signature Accountability Tool",
 los=["Explain how the Sunset review process works and why Texas created it.",
      "Evaluate Sunset's record and the debate over its effectiveness."],
 body=
 P("Texas invented one of the most copied accountability tools in American government. In 1977, amid scandals at both the federal and state level that had shaken public confidence, the Legislature passed the <strong>Texas Sunset Act</strong>. Texas was the second state to adopt such a process, after Colorado in 1976, and its version became the national model.")
+P("The mechanism is elegantly simple and unusually powerful. Every covered state agency is given an <strong>expiration date in law</strong>. On that date the agency is <em>automatically abolished</em> unless the Legislature passes a bill to continue it, typically for another twelve years. The burden of proof is reversed: an agency does not have to be shown to be failing in order to be eliminated; it has to justify its continued existence in order to survive.")
+figure("tx4_texas_capitol_interior.jpg",
   "The interior of the Texas Capitol, where the Sunset Advisory Commission holds public hearings and the Legislature votes on whether agencies continue to exist",
   "Sunset reverses the usual burden: an agency is abolished automatically unless the Legislature affirmatively votes to keep it. That deadline is what gives the review its leverage.")
+card(4,1,"How a Sunset review actually works","&#128269; Three phases over two years!",
  ["<strong>Phase 1: Staff evaluation.</strong> The agency submits a detailed self-evaluation report. The Sunset Commission&#39;s professional staff then spends months investigating &mdash; reviewing performance data, interviewing staff and stakeholders, and comparing the agency against statutory criteria &mdash; and publishes a public report recommending whether the agency should continue and what should change.",
   "<strong>Phase 2: Commission deliberation.</strong> The <strong>Sunset Advisory Commission</strong> holds public hearings where anyone may testify, then votes on which recommendations to adopt. The commission has twelve members: five senators and one public member appointed by the Lieutenant Governor, and five representatives and one public member appointed by the Speaker. The chair alternates between the chambers each biennium.",
   "<strong>Phase 3: Legislation.</strong> The Legislature considers a Sunset bill for each agency. If it passes, the agency continues with the required reforms. If it fails, the agency is abolished on its Sunset date &mdash; a genuine deadline that concentrates legislative attention remarkably well."])
+defbox("&#128202; Sunset by the Numbers",
  "About <strong>130 state agencies</strong> are subject to review on a roughly <strong>twelve-year</strong> cycle, averaging around 22 agencies per two-year cycle. Since 1977, <strong>95 agencies have been abolished</strong>: 42 eliminated outright and 53 abolished with functions transferred or consolidated elsewhere. Reviews since 1985 are estimated to have produced about <strong>$1 billion</strong> in savings and revenue gains, roughly <strong>$16 returned for every $1</strong> appropriated to the commission. The Legislature has adopted a large majority of Sunset recommendations &mdash; about 80 percent of statutory recommendations since 2001. Universities and most courts are exempt, and some entities, such as river authorities and agencies created by the Texas Constitution, are reviewed but cannot be abolished.")
+card(4,2,"Does Sunset actually work? A fair assessment","&#9878;&#65039; Strong tool, real limits!",
  ["<strong>The case that it works.</strong> Few states have a mechanism that forces this kind of systematic scrutiny on a fixed schedule. The automatic-abolition default gives reviewers genuine leverage that ordinary oversight hearings lack. The financial return is substantial, the public-hearing process gives citizens a real entry point, and hundreds of concrete reforms &mdash; licensing streamlined, duplicate programs merged, complaint processes fixed &mdash; trace directly to Sunset.",
   "<strong>The case that it falls short.</strong> Critics note that the overwhelming majority of reviewed agencies are continued, and that outright abolition is rare and usually involves small entities rather than powerful ones. Because the commission is made up of legislators, reviews can reflect the same political pressures and interest-group influence as ordinary legislation, and well-connected agencies and the industries they regulate lobby hard during their review year. A twelve-year cycle is also long: an agency can drift for over a decade between examinations.",
   "A fair summary is that Sunset is a genuine and unusually effective accountability tool that nonetheless operates within, not outside, ordinary politics."])
+card(4,3,"When Sunset bites: the plumbing board","&#128295; A real abolition, and a real reversal!",
  ["In 2019 the Legislature failed to pass the Sunset bill continuing the <strong>Texas State Board of Plumbing Examiners</strong>, which licensed the state&#39;s plumbers. The agency was therefore set to be abolished automatically &mdash; exactly as the Sunset Act intends. The prospect of Texas having no plumbing licensure produced immediate concern from the industry, cities, and consumer advocates about safety and about plumbers licensed in a state that no longer had a licensing body.",
   "Governor Abbott issued an executive order extending the board&#39;s operation, and in 2021 the Legislature continued the agency and moved its functions to the Texas Department of Licensing and Regulation. The episode is instructive in both directions: it proved the automatic-abolition deadline is real rather than theoretical, and it showed that abolition by legislative inaction can produce consequences no one actually intended."])
+kc(4,1,"What happens to a Texas agency on its Sunset date if the Legislature does nothing?",
  ["It continues operating indefinitely.",
   "It is automatically abolished.",
   "It is transferred to federal control.",
   "Its budget is doubled."],1)
+kc(4,2,"Who serves on the Sunset Advisory Commission?",
  ["Twelve members: five senators and five representatives plus two public members, appointed by the Lieutenant Governor and the Speaker.",
   "The governor and the entire plural executive.",
   "Nine justices of the Texas Supreme Court.",
   "Fifteen members elected from single-member districts."],0)
 ,
 refl="Sunset reverses the usual burden of proof: agencies must justify their continued existence or be abolished automatically. Explain why that reversal gives the process leverage, then evaluate the criticism that most agencies are continued anyway. Do you consider Sunset a genuine check or mostly a ritual? Defend your view with specifics.")

S[5] = dict(emoji="&#128220;", title="How Agencies Make Law: Rulemaking and Implementation",
 los=["Explain the administrative rulemaking process and how agency rules carry the force of law.",
      "Describe how Texans can participate in and challenge agency decisions."],
 body=
 P("Here is a fact that surprises most students: agencies write far more binding law than the Legislature does. A statute might run a few pages; the rules implementing it can run hundreds. These <strong>administrative rules</strong> carry the force of law &mdash; violate one and you can be fined, lose a license, or be shut down. In Texas they are compiled in the <strong>Texas Administrative Code</strong>, and proposed rules are published in the <strong>Texas Register</strong>.")
+P("Because rulemaking is lawmaking by unelected officials, it follows a required public procedure set out in the <strong>Administrative Procedure Act</strong>. An agency must publish a proposed rule, state its legal authority and likely effects, allow a public comment period (commonly 30 days), consider the comments it receives, and publish the final rule with responses to the significant objections raised. Only then does the rule take effect.")
+figure("tx12_policy_process.jpg",
   "The policy process, representing how Texas agencies turn statutes into binding administrative rules through public notice and comment",
   "Rulemaking is where a statute becomes something that actually governs daily life &mdash; and the comment period is where ordinary Texans have a legal right to be heard.")
+card(5,1,"Why the comment period matters more than people think","&#128172; A right most Texans never use!",
  ["The public comment period is not a formality. An agency must respond to significant comments, and a rule adopted without following procedure can be challenged in court. In practice, most comments come from regulated industries and organized groups, who employ people specifically to track the Texas Register. Comments from affected individuals &mdash; a nurse describing how a staffing rule plays out on a night shift, a small contractor explaining a licensing burden &mdash; are comparatively rare and can carry real weight precisely because agencies hear so few of them.",
   "This is the same pattern that appears throughout this course: influence concentrates where attention is scarce. A single informed comment during a rulemaking can matter more than a vote in a statewide election, simply because so few people show up."])
+defbox("&#9878;&#65039; Contested Cases and SOAH",
  "Agencies do more than write rules; they also decide individual cases &mdash; whether to revoke a license, grant a permit, or impose a penalty. These <strong>contested cases</strong> resemble trials. Many are heard by the <strong>State Office of Administrative Hearings (SOAH)</strong>, an independent agency whose administrative law judges hear disputes involving other agencies. Separating the judging from the agency that brought the case is meant to reduce the obvious conflict in letting an agency decide disputes about its own enforcement. A party dissatisfied with the outcome may generally seek <strong>judicial review</strong> in state court.")
+card(5,2,"Three checks on agency power","&#128737;&#65039; Who watches the bureaucracy?",
  ["<strong>The Legislature</strong> holds oversight hearings, writes the statutes agencies depend on, and &mdash; most powerfully &mdash; controls appropriations through the budget. It can also override an agency by changing the underlying law. <strong>The courts</strong> can invalidate rules that exceed the agency&#39;s statutory authority or that were adopted without following required procedure. <strong>The Sunset Commission</strong> provides periodic structural review, as you saw in the last section.",
   "Two more checks are worth naming. The <strong>State Auditor&#39;s Office</strong> examines agency finances and performance and publishes its findings publicly. And the <strong>governor&#39;s appointment power</strong>, exercised over years, shapes the boards that set agency direction. No single check is sufficient, which is the point: accountability in Texas is distributed, and it depends on several institutions doing their part."])
+kc(5,1,"Where are proposed Texas agency rules published for public comment?",
  ["The Texas Register.",
   "The Congressional Record.",
   "The Texas Constitution.",
   "The Sunset Commission's staff report."],0)
 ,
 refl="Agencies write more binding law than the Legislature does, through officials no one elected. Explain why the notice-and-comment procedure is meant to make that legitimate, and assess whether it succeeds when most comments come from organized industry groups. What would you change, if anything?")

S[6] = dict(emoji="&#128279;", title="Iron Triangles, Capture, and Agency Politics",
 los=["Explain the concepts of iron triangles, issue networks, and regulatory capture.",
      "Analyze how interest groups shape agency behavior in Texas."],
 body=
 P("Agencies are often described as neutral administrators, but they operate inside politics. Political scientists use the image of the <strong>iron triangle</strong> to describe a durable, mutually beneficial relationship among three parties: an agency, the legislative committee that oversees and funds it, and the interest groups it regulates or serves. Each side has something the others want. The interest group provides campaign support to legislators and technical expertise to the agency. The legislators protect the agency&#39;s budget and shape favorable statutes. The agency writes rules the industry can live with and supplies information to the committee.")
+P("Nothing in this arrangement is necessarily corrupt. Agencies genuinely need industry expertise, and regulated parties genuinely know their own operations best. The concern is that the triangle can become closed &mdash; producing policy that suits its three members while the broader public, which is unorganized and inattentive, has no seat at the table. Scholars increasingly prefer the looser term <strong>issue network</strong>, since modern policymaking often involves many more participants: think tanks, journalists, advocacy groups, academics, and competing industries.")
+card(6,1,"Regulatory capture in a Texas context","&#128269; When the regulated shape the regulator!",
  ["<strong>Regulatory capture</strong> occurs when an agency comes to serve the interests of those it regulates rather than the public. It rarely involves bribery. It happens through ordinary channels: the regulated industry supplies most of the agency&#39;s technical information, its executives are the most qualified candidates for agency positions, its lobbyists attend every hearing while the public attends none, and agency staff later take jobs in the industry &mdash; the <strong>revolving door</strong>.",
   "Texas has structural features that heighten the risk and others that reduce it. Elected regulators &mdash; the Railroad Commission, the State Board of Education &mdash; raise campaign money, often from the industries or constituencies they oversee, which critics describe as capture by another name. <strong>Defenders</strong> respond that elected regulators are directly answerable to voters, which appointed ones are not, and that expertise necessarily comes from the regulated field. On the other side, Sunset review, the State Auditor, and open public-comment requirements all cut against capture. Whether any specific Texas agency is captured is an empirical question, and this chapter asks you to evaluate evidence rather than assume an answer."])
+defbox("&#128279; Three Terms, Carefully Distinguished",
  "An <strong>iron triangle</strong> is a stable alliance of agency, legislative committee, and interest group. An <strong>issue network</strong> is a looser, larger, more competitive web of participants around a policy area &mdash; a better description of most modern policymaking. <strong>Regulatory capture</strong> is the outcome in which an agency serves the regulated rather than the public. The first two describe relationships; the third describes a failure. A tight iron triangle makes capture more likely but does not by itself prove it.")
+card(6,2,"Why agency budgets rarely shrink","&#128176; Incentives point one direction!",
  ["Agencies have understandable reasons to protect and expand their budgets, staff, and jurisdiction. A larger agency can do more of what its staff believes is important; a shrinking one cannot. Agency leaders therefore tend to request more, and the legislative committees that oversee them often agree, since committee members frequently care about the agency&#39;s mission and hear from constituents who benefit from it.",
   "Texas counters this with unusually strong structural pressure in the opposite direction: a constitutional <strong>pay-as-you-go</strong> balanced budget requirement, a biennial budget written within the Comptroller&#39;s revenue estimate, the Legislative Budget Board&#39;s independent analysis, and Sunset review. The result is real tension &mdash; agencies pressing for resources, budget writers constrained by a constitutional ceiling &mdash; and it plays out in public every odd-numbered year."])
+kc(6,1,"What is regulatory capture?",
  ["The federal government taking over a state agency.",
   "When an agency comes to serve the interests of those it regulates rather than the general public.",
   "The process of an agency being abolished by Sunset review.",
   "A legislative committee taking control of the budget."],1)
+kc(6,2,"What are the three corners of an iron triangle?",
  ["The governor, the Legislature, and the courts.",
   "Federal, state, and local governments.",
   "An agency, the legislative committee that oversees and funds it, and the interest groups it regulates or serves.",
   "Voters, political parties, and the media."],2)
 ,
 refl="Texas elects some of its regulators, such as the Railroad Commission, and appoints others to insulated boards. Which arrangement do you think better guards against regulatory capture, and why? Identify the strongest objection to your choice and respond to it.")

S[7] = dict(emoji="&#127963;&#65039;", title="The Agencies That Shape Daily Life in Texas",
 los=["Identify the major Texas state agencies and describe what each does.",
      "Explain how agency decisions affect the daily lives of Texans."],
 body=
 P("Abstract discussion of &ldquo;the bureaucracy&rdquo; obscures how concretely these agencies touch daily life. The agencies below administer the largest portions of the state budget and make decisions that reach nearly every Texan &mdash; often without most residents knowing which agency is responsible.")
+figure("tx7_school_district.jpg",
   "A Texas public school, representing the Texas Education Agency's role in administering school funding, accountability ratings, and curriculum standards",
   "The Texas Education Agency distributes school funding, rates campuses, and administers the STAAR test &mdash; decisions that shape the daily experience of more than five million Texas students.")
+card(7,1,"Education and health: the two largest budget areas","&#127891; Where most of the money goes!",
  ["The <strong>Texas Education Agency (TEA)</strong>, led by a commissioner the governor appoints, distributes state funding to more than a thousand school districts, administers the STAAR accountability test, assigns A&ndash;F campus ratings, oversees educator certification, and can intervene in or take over chronically low-performing districts &mdash; a power it has used in large urban districts, to considerable controversy. The elected <strong>State Board of Education</strong> separately adopts curriculum standards and approves instructional materials, and its fifteen members manage the Permanent School Fund.",
   "The <strong>Health and Human Services Commission (HHSC)</strong> is the largest agency by budget. It administers Medicaid and CHIP, licenses and inspects nursing homes and child-care facilities, runs state hospitals and supported-living centers, and determines eligibility for programs including SNAP. The <strong>Department of Family and Protective Services</strong> handles child protective services and investigations of abuse and neglect &mdash; work that has drawn sustained legislative and judicial scrutiny."])
+card(7,2,"Public safety, transportation, and justice","&#128657; Agencies most Texans encounter directly!",
  ["The <strong>Department of Public Safety (DPS)</strong> runs the Highway Patrol and the Texas Rangers, issues driver licenses and IDs, and administers the handgun licensing system &mdash; making it the agency most Texans deal with in person. The <strong>Texas Department of Transportation (TxDOT)</strong> plans, builds, and maintains the state highway system, one of the largest road networks in the world, and is governed by a commission the governor appoints.",
   "The <strong>Texas Department of Criminal Justice (TDCJ)</strong> operates the state prison system, community supervision, and parole services under a nine-member board, as Chapter 13 described. The <strong>Texas Commission on Environmental Quality (TCEQ)</strong> permits and regulates air and water quality, as Chapter 17 described. The <strong>Texas Department of Licensing and Regulation (TDLR)</strong> licenses dozens of occupations &mdash; from electricians and barbers to tow truck operators &mdash; and absorbed the plumbing board after its Sunset episode."])
+defbox("&#128221; Occupational Licensing: An Ongoing Debate",
  "Texas licenses a wide range of occupations, and licensing has become a recurring policy fight. <strong>Supporters</strong> argue licensing protects public health and safety and assures consumers of minimum competence, especially in trades where mistakes are dangerous. <strong>Critics</strong> argue that licensing requirements often exceed what safety requires, that fees and required training hours function as barriers to entry for lower-income workers, and that established practitioners lobby to keep requirements high to limit competition. Sunset reviews of licensing agencies regularly apply model standards designed to test which requirements are genuinely justified.")
+kc(7,1,"Which Texas agency administers Medicaid and licenses nursing homes and child-care facilities?",
  ["The Texas Education Agency.",
   "The Health and Human Services Commission.",
   "The Department of Public Safety.",
   "The Texas Commission on Environmental Quality."],1)
 ,
 refl="Pick one agency from this section whose decisions affect you, your family, or your community. Describe a specific decision it makes, explain who is likely to be paying attention to that decision, and identify who is not but probably should be.")

S[8] = dict(emoji="&#129309;", title="Holding the Bureaucracy Accountable",
 los=["Describe the tools citizens have for holding Texas agencies accountable.",
      "Evaluate the overall balance between agency expertise and democratic accountability."],
 body=
 P("This chapter began with a tension: agencies need discretion to govern competently, but discretion means unelected officials exercising real power. Texas manages that tension through a distributed system rather than a single control. The Legislature writes the enabling statutes and controls the money. The governor appoints the boards. Sunset review forces periodic justification. The courts police the boundaries of delegated authority. The State Auditor examines performance. And &mdash; the part most often overlooked &mdash; citizens have specific legal rights to information and participation.")
+figure("tx11_capitol_lobby.jpg",
   "The Texas Capitol, where citizens can testify at legislative and Sunset hearings on the agencies that govern their daily lives",
   "Accountability is not only institutional. Sunset hearings, rulemaking comments, and open-records requests are legal rights that any Texan can exercise.")
+card(8,1,"The Texas Public Information Act","&#128196; Your right to see the records!",
  ["The <strong>Texas Public Information Act</strong> gives any person the right to request records held by state and local government, and it is written with an unusually strong presumption of openness. A requestor need not explain why they want a record or prove any special interest. An agency that wishes to withhold information generally must seek a ruling from the <strong>Attorney General</strong>, who decides whether an exception applies.",
   "Paired with the <strong>Texas Open Meetings Act</strong>, which requires that governmental bodies post notice and conduct business in public with limited exceptions, these laws are the practical foundation of oversight. Journalists, advocacy groups, researchers, and ordinary citizens use them constantly. Nearly everything known publicly about how a Texas agency actually behaves traces back to records someone requested or a meeting someone attended."])
+card(8,2,"Where a citizen can actually intervene","&#128499;&#65039; Five real entry points!",
  ["<strong>Sunset hearings.</strong> When an agency you deal with comes up for review, the commission takes public testimony and its staff solicits input. This is the single highest-leverage moment in an agency&#39;s twelve-year cycle.",
   "<strong>Rulemaking comments.</strong> Proposed rules appear in the Texas Register with a comment period, and agencies must respond to significant comments.",
   "<strong>Open board meetings.</strong> Most boards and commissions accept public comment at meetings that are noticed in advance.",
   "<strong>Records requests.</strong> Under the Public Information Act, you can obtain inspection reports, contracts, correspondence, and performance data.",
   "<strong>Elections and legislators.</strong> You elect the Railroad Commission and the State Board of Education directly, and you elect the legislators who write agency statutes, confirm appointees, and set budgets. Contacting a legislator about an agency problem often produces faster results than contacting the agency, because legislative inquiries get attention."])
+defbox("&#9878;&#65039; The Balance, Stated Fairly",
  "There is no settled answer to how much independence a bureaucracy should have. <strong>Greater insulation</strong> protects expertise, continuity, and evenhanded enforcement from political pressure &mdash; you probably want a food-safety inspector immune to a donor&#39;s phone call. <strong>Greater political control</strong> ensures that when voters choose a direction, government actually changes course &mdash; an agency that ignores elected officials indefinitely has a democratic problem of its own. Texas has chosen a distinctive mix: fragmented authority, insulated boards, a small permanent workforce, heavy contracting, and unusually aggressive periodic review through Sunset. Reasonable people assess that mix differently, and this chapter asks you to weigh it rather than accept a verdict.")
+kc(8,1,"Under the Texas Public Information Act, what must a person do to request government records?",
  ["Prove a legal interest in the records and explain the purpose of the request.",
   "Simply make the request; the Act presumes openness and does not require a stated reason.",
   "Obtain permission from the Sunset Advisory Commission.",
   "File a lawsuit in state district court."],1)
 ,
 refl="This chapter argued that accountability in Texas is distributed across many institutions and depends partly on citizens using rights they rarely exercise. Choose one accountability tool &mdash; Sunset testimony, a rulemaking comment, an open-records request, a board meeting, or contacting a legislator &mdash; and describe a specific situation in which you would use it. What outcome would you be trying to achieve, and what obstacles would you expect?")

def pts(s):
    b = S[s]["body"]
    return (sum(int(x) for x in re.findall(r"revealCard\([^,]+,\s*'[^']+',\s*(\d+)", b))
            + sum(int(x) for x in re.findall(r"handleAnswer\([^,]+,\s*true,\s*'[^']+',\s*(\d+)", b)) + 75)
points = {s: pts(s) for s in S}

desc = {
 1:"What a bureaucracy is, why a 140-day legislature must delegate, and how big Texas government really is.",
 2:"Boards, commissions, staggered terms, and how the plural executive fragments agency control.",
 3:"Merit versus patronage, at-will employment, and Texas's heavy reliance on contracting.",
 4:"Texas's signature accountability tool: how Sunset works, what it has achieved, and its limits.",
 5:"How agencies write binding rules, and the comment rights most Texans never use.",
 6:"Iron triangles, issue networks, regulatory capture, and the politics agencies operate inside.",
 7:"TEA, HHSC, DPS, TxDOT, TDCJ, TCEQ, and the licensing debate that affects working Texans.",
 8:"Open records, open meetings, and the five places a citizen can actually intervene.",
}
cards_html = "\n".join(
 f'                <div class="section-card" id="card{s}" onclick="navigateToSection({s})">\n'
 f'                    <div class="section-number">{s}</div>\n                    <h3>{S[s]["title"]}</h3>\n'
 f'                    <p>{desc[s]}</p>\n'
 f'                    <div class="points-indicator">&#127775; {points[s]} points available</div>\n                </div>\n' for s in S)

c = re.sub(r"<title>[^<]*</title>", "<title>Chapter 18: The Texas Bureaucracy and Sunset Review - Tarrant County College Texas Government Trailblazer Trek</title>", c, count=1)
c = c.replace("<h2>🗳️ Chapter 8: Voting and Political Participation in Texas ⭐</h2>",
              "<h2>&#127970; Chapter 18: The Texas Bureaucracy and Sunset Review &#127749;</h2>")
c = c.replace("<p>Discover how Texans exercise their democratic rights and participate in shaping their government!</p>",
              "<p>Meet the agencies that actually carry out Texas law &mdash; and the tools Texans use to hold them accountable!</p>")
m = re.search(r'<div class="stat-icons">.*?</div>\s*</div>\s*</div>', c, flags=re.S)
icons = ('<div class="stat-icons">\n'
 '                    <div class="stat-icon">\n                        <span>&#127970;</span>\n                        <div>Agencies</div>\n                    </div>\n'
 '                    <div class="stat-icon">\n                        <span>&#127749;</span>\n                        <div>Sunset</div>\n                    </div>\n'
 '                    <div class="stat-icon">\n                        <span>&#129309;</span>\n                        <div>Accountability</div>\n                    </div>\n'
 '                </div>')
if m: c = c[:m.start()] + icons + c[m.end():]
c = c.replace("<p>Enter your name to begin your journey through Texas voting and political participation:</p>",
              "<p>Enter your name to begin your journey through the Texas bureaucracy and Sunset review:</p>")
g = re.search(r'(<div class="section-grid">\n)(.*?)(\n\s*</div>\s*\n\s*<div style="text-align: center; margin-top: 2rem;">)', c, flags=re.S)
if not g: sys.exit("grid not found")
c = c[:g.start(2)] + cards_html.rstrip("\n") + c[g.end(2):]
st = c.find('<!-- Section 1')
if st == -1: st = c.find('<div id="section1" class="page">')
en = c.find('<div id="chapterReview" class="page">')
c = c[:st] + "".join(section(s, S[s]["emoji"], S[s]["title"], S[s]["los"], S[s]["body"], S[s]["refl"]) for s in S) + "        " + c[en:]
blk = "\n".join(f"                {s}: {{ earned: 0, max: {points[s]} }}{',' if s < 8 else ''}" for s in S)
c = re.sub(r"(\n\s+1: \{ earned: 0, max: \d+ \},\n(?:\s+\d+: \{ earned: 0, max: \d+ \},?\n)+)", "\n" + blk + "\n", c, count=1)

terms = [
 ("Bureaucracy","The permanent structure of agencies, boards, and commissions that carries out the law through specialized roles, written rules, and hierarchy."),
 ("Enabling legislation","The statute that creates an agency, states its mission, and grants it authority."),
 ("Delegated authority","The power the Legislature grants an agency to fill in the details of a law and carry it out."),
 ("Board / commission","A multimember body, usually appointed to staggered terms, that governs most Texas agencies."),
 ("Staggered terms","Overlapping fixed terms (commonly six years) that prevent a new governor from replacing a board majority at once."),
 ("Senate confirmation","The two-thirds Senate vote generally required to approve the governor's appointees."),
 ("Patronage / spoils system","Awarding government jobs on the basis of political loyalty rather than qualifications."),
 ("Merit system","Hiring and promoting on the basis of qualifications, with protection from politically motivated dismissal."),
 ("At-will employment","Employment that may be ended without the elaborate procedural protections found in some civil service systems; the norm for most Texas state employees."),
 ("Contracting / privatization","Delivering public services through private or nonprofit organizations under state contract."),
 ("Texas Sunset Act (1977)","The law creating the Sunset process; Texas was the second state to adopt one, after Colorado."),
 ("Sunset Advisory Commission","The 12-member body (five senators, five representatives, two public members) that reviews agencies and recommends action."),
 ("Sunset date","The statutory expiration date on which an agency is automatically abolished unless the Legislature acts to continue it."),
 ("Administrative rule","An agency-written requirement that carries the force of law; compiled in the Texas Administrative Code."),
 ("Texas Register","The publication where proposed agency rules appear for public comment."),
 ("Administrative Procedure Act","The law requiring notice, a comment period, and responses to significant comments before a rule takes effect."),
 ("Contested case","An agency proceeding deciding an individual matter, such as a license revocation or permit dispute."),
 ("SOAH","The State Office of Administrative Hearings, whose independent judges hear contested cases involving other agencies."),
 ("Judicial review","Court review of an agency action for exceeding statutory authority or failing to follow required procedure."),
 ("Iron triangle","A stable alliance among an agency, its overseeing legislative committee, and the interest groups it regulates or serves."),
 ("Issue network","A looser, larger, more competitive web of participants around a policy area."),
 ("Regulatory capture","The outcome in which an agency serves the interests of those it regulates rather than the public."),
 ("Revolving door","Movement of personnel between an agency and the industry it regulates."),
 ("Texas Public Information Act","The law giving any person the right to request government records, with a strong presumption of openness and no requirement to state a reason."),
 ("Texas Open Meetings Act","The law requiring governmental bodies to post notice and conduct business in public, with limited exceptions."),
 ("State Auditor's Office","The office that examines agency finances and performance and publishes its findings."),
 ("Occupational licensing","State requirements to practice an occupation; debated as consumer protection versus a barrier to entry."),
]
gloss = "\n".join(f'                    <dt style="font-weight:700; margin-top:0.6rem;">{t}</dt>\n                    <dd style="margin:0.1rem 0 0 1rem;">{d}</dd>' for t, d in terms)
reviews = [
 ("Why must the Texas Legislature delegate authority to agencies?","It meets only 140 days every two years and cannot write rules detailed enough to govern every situation, so it passes enabling legislation granting agencies authority to fill in details and carry out the law."),
 ("How are most Texas agencies governed, and why does it limit the governor?","By multimember boards appointed to staggered terms. Because terms overlap, a governor inherits predecessors' appointees, needs years to reshape a board, and generally cannot remove appointees at will."),
 ("How does the Sunset process work?","Each covered agency has a statutory expiration date and is automatically abolished unless the Legislature passes a bill to continue it. Sunset staff evaluate the agency, the commission holds public hearings and adopts recommendations, and the Legislature votes."),
 ("What has Sunset accomplished, and what are its limits?","Since 1977, 95 agencies abolished (42 outright, 53 consolidated), about $1 billion in savings, roughly $16 returned per $1 spent. Critics note most reviewed agencies are continued, abolitions usually involve small entities, and the 12-year cycle is long."),
 ("What is administrative rulemaking, and how can the public participate?","Agencies write rules carrying the force of law. Proposed rules are published in the Texas Register for public comment, and the agency must consider and respond to significant comments before the rule takes effect."),
 ("What is regulatory capture, and how does it happen?","An agency comes to serve those it regulates rather than the public &mdash; usually not through corruption but through dependence on industry expertise, lopsided participation in proceedings, and the revolving door."),
 ("What rights do Texans have to monitor agencies?","The Public Information Act allows anyone to request records without stating a reason, and the Open Meetings Act requires public notice and open meetings of governmental bodies."),
]
rev_html = "\n".join(f'                <details style="margin:0.4rem 0; padding:0.5rem 0.85rem; background:#eef3f8; border-radius:6px;">\n                    <summary style="cursor:pointer; font-weight:600;">{i}. {q}</summary>\n                    <p style="margin:0.4rem 0 0;"><strong>Answer:</strong> {a}</p>\n                </details>' for i, (q, a) in enumerate(reviews, 1))
crit = [
 "Agencies need discretion to govern competently, but discretion means unelected officials making decisions with the force of law. Where should Texas draw that line, and which check matters most?",
 "Sunset abolishes agencies by default unless the Legislature acts. Is reversing the burden of proof a good general principle for government programs, or does it risk eliminating things by inattention, as nearly happened with the plumbing board?",
 "Texas elects some regulators and insulates others on appointed boards. Which design better serves the public, and what evidence would you look for to decide?",
 "Most rulemaking comments come from organized industry groups rather than affected individuals. Does that make the process illegitimate, or is it simply the predictable result of who has time and resources? What would improve it?",
 "Texas keeps a small state workforce and contracts out much service delivery. Under what conditions does contracting work well, and what capacity must the state retain for it to succeed?",
]
crit_html = "\n".join(f'                    <li style="margin:0.35rem 0;">{q}</li>' for q in crit)
refs = [
 'Texas Sunset Advisory Commission &mdash; review schedule, staff reports, hearing notices, and the <em>Sunset in Texas</em> report. <a href="https://www.sunset.texas.gov" target="_blank" rel="noopener">sunset.texas.gov</a>',
 'Texas Register and Texas Administrative Code &mdash; proposed and adopted agency rules. <a href="https://www.sos.texas.gov/texreg" target="_blank" rel="noopener">sos.texas.gov/texreg</a>',
 'Texas Government Code, Chapter 325 (Texas Sunset Act), Chapter 551 (Open Meetings Act), Chapter 552 (Public Information Act), and Chapter 2001 (Administrative Procedure Act). <a href="https://statutes.capitol.texas.gov" target="_blank" rel="noopener">statutes.capitol.texas.gov</a>',
 'Texas State Auditor&#39;s Office &mdash; audits of agency finances and performance. <a href="https://sao.texas.gov" target="_blank" rel="noopener">sao.texas.gov</a>',
 'State Office of Administrative Hearings &mdash; contested-case procedures. <a href="https://www.soah.texas.gov" target="_blank" rel="noopener">soah.texas.gov</a>',
 'Office of the Attorney General &mdash; open-government rulings and the Public Information Act handbook. <a href="https://www.texasattorneygeneral.gov" target="_blank" rel="noopener">texasattorneygeneral.gov</a>',
 'Image credits: Wikimedia Commons (public domain), as noted on each image.',
]
refs_html = "\n".join(f'                    <li style="margin:0.35rem 0;">{r}</li>' for r in refs)
summary = ("The <strong>bureaucracy</strong> is where Texas law becomes action. Because the Legislature meets only 140 days every two years, it passes <strong>enabling legislation</strong> granting agencies <strong>delegated authority</strong> to fill in details and carry out the law &mdash; which creates this chapter&#39;s central tension between expertise and democratic accountability. Texas organizes its agencies in a deliberately fragmented way: most are governed by appointed <strong>boards and commissions</strong> with <strong>staggered terms</strong>, so no governor controls the executive branch quickly, while a few regulators are elected statewide. Texas keeps a comparatively small state workforce, relies heavily on <strong>contracting</strong>, and has never adopted a comprehensive civil service system. Its signature accountability tool is <strong>Sunset review</strong>, created in 1977: roughly 130 agencies face automatic abolition on a statutory date every twelve years unless the Legislature votes to continue them. Since inception, 95 agencies have been abolished and reviews have returned an estimated $16 for every $1 spent &mdash; though critics note most agencies are continued and the cycle is long. Agencies also write binding <strong>administrative rules</strong> through a notice-and-comment process in the <strong>Texas Register</strong>, decide <strong>contested cases</strong> (often at SOAH), and operate inside politics, where <strong>iron triangles</strong> and <strong>regulatory capture</strong> are real risks. Against all of this Texans hold specific rights &mdash; the <strong>Public Information Act</strong>, the <strong>Open Meetings Act</strong>, Sunset testimony, and rulemaking comments &mdash; that make accountability possible but only if someone uses them.")
page = f'''<div id="chapterReview" class="page">
            <button class="back-button" onclick="navigateToHome()">&larr; Back to Home</button>
            <div class="content-section">
                <div class="section-header">
                    <span>&#128214;</span>
                    <h2>Chapter Review &amp; Resources</h2>
                </div>
                <p>Use this page to review Chapter 18. It gathers the chapter summary, key terms, self-check review questions, critical-thinking prompts, and sources for further study. This page is for study only and is not scored.</p>

                <h3>&#128221; Chapter Summary</h3>
                <p>{summary}</p>

                <h3>&#128273; Key Terms</h3>
                <div class="info-box">
                    <dl style="margin:0;">
{gloss}
                    </dl>
                </div>

                <h3>&#9989; Review Questions</h3>
                <p>Test your recall, then click each question to reveal the answer.</p>
{rev_html}

                <h3>&#129300; Critical-Thinking Questions</h3>
                <p>These open-ended questions have no single correct answer; use them for discussion or writing.</p>
                <ul>
{crit_html}
                </ul>

                <h3>&#128218; References &amp; Further Study</h3>
                <ul>
{refs_html}
                </ul>
            </div>
        </div>

        '''
rs = c.find('<div id="chapterReview" class="page">'); rr = c.find('<div id="reportPage" class="page">')
if rs == -1 or rr == -1: sys.exit("review anchors missing")
c = c[:rs] + page + c[rr:]

def words(h): return len(_html.unescape(re.sub(r"<[^>]+>", " ", h)).split())
lines = []
for s in S:
    b = S[s]["body"]
    cards = re.findall(r"revealCard\(this, '([^']+)'", b)
    qs = []
    for q in re.findall(r"handleAnswer\(this, (?:true|false), '([^']+)'", b):
        if q not in qs: qs.append(q)
    lines.append(f"            '{s}': {{ cards: [{','.join(repr(x) for x in cards)}], questions: [{','.join(repr(x) for x in qs)}], minSeconds: {max(90, min(240, round(words(b)*0.3)))} }}")
m = re.search(r"        const sectionElements = \{.*?\n        \};", c, flags=re.S)
if not m: sys.exit("sectionElements not found")
c = c[:m.start()] + "        const sectionElements = {\n" + ",\n".join(lines) + "\n        };" + c[m.end():]
for s in S:
    b = S[s]["body"]; line = [l for l in lines if l.strip().startswith(f"'{s}'")][0]
    assert set(re.findall(r"revealCard\(this, '([^']+)'", b)) == set(re.findall(r"'(card[^']+)'", line))
    assert set(re.findall(r"handleAnswer\(this, (?:true|false), '([^']+)'", b)) == set(re.findall(r"'(q[^']+)'", line))

open(OUT, "w", encoding="utf-8").write(c)
print("Built", OUT)
print("points:", points, "total:", sum(points.values()))
