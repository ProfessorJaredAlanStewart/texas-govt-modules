#!/usr/bin/env python3
"""Build Chapter 17 - Energy, Water, and the Environment in Texas.

Same approach as build_ch16.py: clone the platform from a known-good chapter,
replace all content, regenerate the points and the completion-gate map from the
actual content so they cannot drift.
"""
import re, sys, html as _html

TEMPLATE = "Chapter 8 - Voting Political Participation (Trailblazer Trek).html"
OUT = "Chapter 17 - Energy Water and the Environment (Trailblazer Trek).html"
c = open(TEMPLATE, encoding="utf-8").read()

def lo_box(objs):
    items = "\n".join(f"                        <li>{o}</li>" for o in objs)
    return ('                <div class="learning-objectives">\n'
            '                    <h4>&#127919; Learning Objectives</h4>\n'
            f'                    <ul>\n{items}\n                    </ul>\n'
            '                </div>\n')

def P(t): return f'                <p class="content-text">{t}</p>\n'

def figure(src, alt, caption):
    return (f'                <figure class="chapter-image">\n'
            f'                    <img src="images/{src}" alt="{alt}" loading="lazy">\n'
            f'                    <figcaption>{caption}\n'
            f'                        <span class="img-credit">Source: Wikimedia Commons / Public Domain</span>\n'
            f'                    </figcaption>\n'
            f'                </figure>\n')

def card(sec, n, prompt, reveal, paras):
    body = "\n".join(f"                        <p>{p}</p>" for p in paras)
    return (f'                <div class="interactive-card" onclick="revealCard(this, \'card{sec}-{n}\', 15)">\n'
            f'                    <div class="card-prompt">&#128269; Click to explore: {prompt}</div>\n'
            f'                    <div class="card-content">\n'
            f'                        <p><strong>+15 points!</strong> {reveal}</p>\n{body}\n'
            f'                    </div>\n                </div>\n')

def defbox(term, body):
    return (f'                <div class="definition-box">\n'
            f'                    <div class="definition-term">{term}</div>\n'
            f'                    <div>{body}</div>\n                </div>\n')

def kc(sec, n, q, options, correct):
    opts = "\n".join(
        f'                    <div class="kc-option" onclick="handleAnswer(this, {"true" if i==correct else "false"}, \'q{sec}-{n}\', {50 if i==correct else 0})">{o}</div>'
        for i, o in enumerate(options))
    return (f'                <div class="knowledge-check">\n'
            f'                    <div class="kc-question">&#10067; {q}</div>\n{opts}\n'
            f'                    <div class="feedback-box" id="feedback-q{sec}-{n}"></div>\n                </div>\n')

def tail(sec, prompt):
    return (f'                <div style="text-align: center; margin-top: 2rem;">\n                    \n'
            f'                <div class="reflection-box" id="reflection-section{sec}">\n'
            f'                    <div class="reflection-header">&#128172; Reflection <span class="reflection-points">+25 points</span></div>\n'
            f'                    <div class="reflection-prompt">{prompt}</div>\n'
            f'                    <textarea class="reflection-input" id="reflectionInput{sec}" rows="5" placeholder="Write at least 50 words in your own words&#8230;" oninput="updateReflectionCount({sec})"></textarea>\n'
            f'                    <div class="reflection-footer"><span class="reflection-counter" id="reflectionCounter{sec}">0 words</span><button class="reflection-submit" id="reflectionSubmit{sec}" onclick="submitReflection({sec})">Submit Reflection</button></div>\n'
            f'                    <div class="reflection-feedback" id="reflectionFeedback{sec}"></div>\n                </div>\n'
            f'                <button class="complete-section-btn" onclick="completeSection({sec})">&#9989; Complete Section {sec}</button>\n'
            f'                <div class="section-gate-msg" id="sectionGate{sec}" style="display:none;margin:15px auto;max-width:420px;padding:12px 18px;background:#fbe9ee;border-left:5px solid #98002e;border-radius:8px;color:#212121;font-size:0.95em;text-align:center;"></div>\n'
            f'                </div>\n')

def section(s, emoji, title, los, body, refl):
    return (f'        <!-- Section {s}: {title} -->\n'
            f'        <div id="section{s}" class="page">\n'
            f'            <button class="back-button" onclick="navigateToHome()">&larr; Back to Home</button>\n'
            f'            <div class="content-section">\n'
            f'                <div class="section-header">\n                    <span>{emoji}</span>\n                    <h2>{title}</h2>\n                </div>\n\n'
            f'{lo_box(los)}\n{body}{tail(s, refl)}'
            f'            </div>\n        </div>\n\n')

S = {}

S[1] = dict(emoji="&#9889;", title="Why Energy and Water Define Texas",
 los=["Explain why energy and water are the two resources that most shape Texas politics and policy.",
      "Describe how population growth and industrial demand are straining both systems."],
 body=
 P("Every state manages resources, but in Texas two of them &mdash; <strong>energy</strong> and <strong>water</strong> &mdash; sit near the center of nearly every major policy fight. Texas produces more crude oil and natural gas than any other state, generates the most electricity, and leads the nation in wind power. It also runs its own electric grid, separate from the rest of the country. At the same time, Texas is a largely dry state whose population has grown past 31 million, and whose cities, farms, and factories are asking more of a water supply that is projected to shrink.")
+P("These are not separate stories. Power plants need water for cooling; moving and treating water takes enormous amounts of electricity. When the grid failed in February 2021, water systems failed with it. And both are shaped by the same political inheritance this course has traced throughout: a preference for limited regulation, strong private property rights, local control, and market solutions &mdash; a framework that has produced remarkable growth and, its critics argue, real vulnerability.")
+figure("tx7_texas_city_skyline.jpg",
   "A major Texas city skyline, representing the rapid urban and population growth that is increasing demand for both electricity and water across the state",
   "Texas keeps growing &mdash; past 31 million people, with booming cities and energy-hungry industry. Every new resident and every new factory increases demand on two systems already under strain.")
+card(1,1,"Just how big is Texas energy?","&#9889; The scale is hard to overstate!",
  ["Texas produces roughly <strong>42 percent of the nation&#39;s crude oil</strong> and about a quarter of its natural gas &mdash; more than most countries. It consumes more energy than any other state, largely because of its size, its climate, and its heavy petrochemical industry along the Gulf Coast. It is also the nation&#39;s leading producer of <strong>wind power</strong> by a wide margin and has become a leader in <strong>solar</strong> and grid <strong>battery storage</strong>.",
   "This gives Texas an unusual political identity: it is simultaneously the capital of American oil and gas <em>and</em> one of the fastest-growing renewable-energy markets in the world. Both industries employ large numbers of Texans, pay substantial state taxes, and lobby the Legislature hard. Energy policy here is rarely a simple contest between &lsquo;fossil fuels&rsquo; and &lsquo;green energy&rsquo; &mdash; it is a contest among powerful interests that both operate inside Texas."])
+card(1,2,"Why water is the quieter crisis","&#128167; A slower emergency!",
  ["Water shortages rarely produce a single dramatic day the way a blackout does, which is part of why water policy went underfunded for so long. But the state&#39;s own planning documents are blunt. The <strong>State Water Plan</strong> projects that as Texas grows, municipal demand will climb while existing supplies decline &mdash; aquifers drop, reservoirs silt in, and drought recurs. Much of the state&#39;s infrastructure is also aging: leaking mains lose a substantial share of treated water before it reaches a tap, and some small systems issue repeated boil-water notices.",
   "Newer pressures have sharpened the problem. Data centers, semiconductor plants, and hydrogen facilities use large volumes of water and electricity at once. In 2025 Texas voters responded with the largest water investment in state history, which you will examine later in this chapter."])
+kc(1,1,"Why are Texas energy and water policy best understood together?",
  ["Both are managed by the same single state agency.",
   "They are physically interdependent &mdash; power generation needs water, and moving and treating water needs power &mdash; and both face the same growth pressures.",
   "Both are entirely controlled by the federal government.",
   "Neither has any connection to population growth."],1)
 ,
 refl="Texas leads the nation in oil and gas <em>and</em> in wind power, and it faces a long-term water shortfall. Explain why these facts make energy and water unusually political in Texas, and identify which of the two you think deserves more attention from state leaders over the next decade. Give a reason someone might disagree with you.")

S[2] = dict(emoji="&#128268;", title="The Texas Grid: ERCOT and the Island",
 los=["Explain what ERCOT is and why the Texas grid is separate from the rest of the country.",
      "Describe how the Texas electricity market works and who regulates it."],
 body=
 P("Most of the United States is served by two large interconnected power grids, the Eastern and Western Interconnections, which move electricity across state lines and are regulated federally. Texas is the great exception. Most of the state is served by its own grid, operated by the <strong>Electric Reliability Council of Texas (ERCOT)</strong>, which covers about 90 percent of the state&#39;s electric load and roughly 26 million customers.")
+P("The separation is deliberate and historic. By keeping its grid almost entirely within state lines and avoiding significant interstate transfers of power, Texas has largely stayed outside the jurisdiction of the <strong>Federal Energy Regulatory Commission (FERC)</strong>. Texans have generally viewed that independence as a virtue: it lets the state design its own market and avoid federal oversight. Critics point to the trade-off &mdash; when Texas runs short of power, it cannot import much from neighboring grids.")
+card(2,1,"Who actually regulates electricity in Texas?","&#128268; A three-part answer!",
  ["<strong>ERCOT</strong> is not a government agency and does not own power lines or plants. It is a nonprofit that operates the grid: balancing supply and demand second by second, running the wholesale market, and directing outages when the system is stressed. It is overseen by a board whose composition the Legislature restructured in 2021.",
   "<strong>The Public Utility Commission of Texas (PUCT)</strong>, a three-member body appointed by the governor, regulates ERCOT and the utilities. <strong>The Railroad Commission of Texas</strong> &mdash; despite its name &mdash; regulates the oil and gas industry, including the natural gas supply chain that fuels much of the state&#39;s generation. The division of labor between the PUCT and the Railroad Commission became a central issue after 2021, because a failure in gas supply becomes a failure in electricity."])
+defbox("&#9889; An &ldquo;Energy-Only&rdquo; Market",
  "Unlike most U.S. grids, ERCOT historically ran an <strong>energy-only market</strong>: generators were paid for the electricity they actually produced, not for merely standing by as reserve capacity. Supporters argued this keeps consumer prices low and lets competition decide what gets built. Critics argued it gave generators little financial reason to invest in rarely used cold-weather protection or spare capacity. That design choice sits at the heart of the debate over what happened in 2021 and what has changed since.")
+card(2,2,"Deregulation and retail choice","&#128179; Why many Texans pick their electricity provider!",
  ["In 1999 Texas <strong>deregulated</strong> much of its electricity market, separating generation, transmission, and retail sales. In most of the ERCOT region, consumers now choose among competing <strong>retail electric providers</strong>, while the physical wires remain a regulated monopoly run by the local utility. Municipal utilities (such as Austin Energy and CPS Energy in San Antonio) and electric cooperatives were allowed to opt out, which is why not every Texan has a choice of provider.",
   "Supporters credit competition with lower average prices and rapid renewable buildout. Critics note that some consumers ended up on variable-rate plans whose prices spiked catastrophically during the 2021 freeze, and that comparing plans is confusing for many households."])
+kc(2,1,"Why is the Texas grid largely outside federal regulation?",
  ["Congress passed a law specifically exempting Texas.",
   "Because ERCOT keeps electricity almost entirely within state lines, it avoids the interstate commerce that would trigger FERC jurisdiction.",
   "Because Texas generates no electricity from natural gas.",
   "Because the Texas Railroad Commission has authority over federal agencies."],1)
+kc(2,2,"What does it mean that ERCOT historically ran an &ldquo;energy-only&rdquo; market?",
  ["Generators were paid only for power actually produced, not for standby reserve capacity.",
   "Only renewable energy could be sold on the grid.",
   "Electricity was provided to consumers at no cost.",
   "The state government owned all power plants."],0)
 ,
 refl="Texas keeps its own grid partly to stay free of federal regulation. Explain the strongest argument for that independence and the strongest argument against it. Then state which you find more persuasive and what evidence would change your mind.")

S[3] = dict(emoji="&#10052;&#65039;", title="Winter Storm Uri and What Came After",
 los=["Explain what happened during Winter Storm Uri in February 2021 and why the grid failed.",
      "Evaluate the reforms Texas adopted afterward and the debate over whether they are sufficient."],
 body=
 P("In mid-February 2021, <strong>Winter Storm Uri</strong> brought days of sub-freezing temperatures to all 254 Texas counties. Demand for electricity surged toward record winter levels at exactly the moment that generation began to fail. Power plants tripped offline as equipment froze; wellheads, pipelines, and processing plants in the natural gas supply chain froze too, starving gas-fired plants of fuel. Wind turbines iced as well, though gas, coal, and nuclear outages accounted for the large majority of the lost generation.")
+P("Facing a system-wide collapse, ERCOT ordered massive <strong>load shedding</strong> &mdash; cutting power to millions of customers to keep the grid from failing entirely. Operators later said the grid came within minutes of an uncontrolled blackout that could have taken weeks to restore. More than <strong>4.5 million Texans</strong> lost electricity, many for several days, in freezing weather.")
+figure("tx12_environment_texas.jpg",
   "Texas landscape and infrastructure, representing the extreme-weather vulnerability of the state's energy and water systems exposed by Winter Storm Uri",
   "February 2021 exposed how tightly Texas's systems are coupled: when the power failed, water treatment failed with it, leaving about half the state's population under water disruptions.")
+card(3,1,"The human and economic toll","&#128148; A catastrophe, not an inconvenience!",
  ["The State of Texas confirmed <strong>246 deaths</strong> from the storm, most from hypothermia, along with deaths from carbon monoxide poisoning as people tried to heat homes or run generators indoors. Independent researchers using excess-mortality methods have estimated the true toll was considerably higher, with some analyses suggesting more than 700. Roughly <strong>69 percent of Texans</strong> lost power at some point, and about <strong>49 percent</strong> lost or had to boil their water.",
   "Estimates of economic damage vary widely by method &mdash; the Federal Reserve Bank of Dallas estimated $80&ndash;$130 billion, while some analyses ran higher. Wholesale electricity prices hit the $9,000 per megawatt-hour cap and stayed there, producing enormous bills that the Legislature later addressed through <strong>securitization</strong>: spreading the cost over many years on customer bills."])
+card(3,2,"What the Legislature did: Senate Bills 2 and 3","&#128221; The 2021 reform package!",
  ["The 87th Legislature responded with two major bills. <strong>Senate Bill 3</strong> required electric generators and designated &ldquo;critical&rdquo; natural gas facilities to <strong>weatherize</strong> against extreme temperatures, with inspections and penalties; created a statewide emergency alert system; and required better mapping so that gas facilities would not have their own power cut during load shedding &mdash; a failure that had worsened the 2021 spiral. <strong>Senate Bill 2</strong> restructured the ERCOT board, requiring members to live in Texas and adding selection by state officials, after criticism that out-of-state board members were unaccountable.",
   "Regulators also changed market rules, allowing ERCOT to bring reserve power online earlier and requiring plants to schedule maintenance in mild seasons. Later sessions added more: the <strong>Texas Energy Fund</strong> offered low-interest loans and incentives to build new dispatchable (mostly natural gas) generation, and a 2025 law began requiring very large users such as data centers to help support the grid during emergencies."])
+card(3,3,"Has it worked? The evidence so far","&#128200; Better &mdash; but the test was easier!",
  ["The grid has performed far better in subsequent winter storms, including significant freezes in December 2022, January 2024, and January 2026. During the January 2026 storm the grid held with supply comfortably exceeding demand, and state leaders pointed to weatherization, new generation, and a dramatic buildup of <strong>battery storage</strong> that barely existed in 2021.",
   "Analysts add two cautions. First, none of these storms matched Uri&#39;s severity or duration, so the system has not faced an equivalent test. Second, demand is climbing quickly as data centers, electrification, and population growth add load, which means reliability is a moving target. <strong>Supporters</strong> of the state&#39;s approach argue the reforms plainly worked and that market incentives are delivering new capacity. <strong>Critics</strong> argue Texas still resists connecting to national grids, still relies on a market design that underprices reliability, and still leaves households rather than industry to bear the risk. Both point to real evidence, and the question remains genuinely open."])
+kc(3,1,"What was the primary cause of the generation failures during Winter Storm Uri?",
  ["Wind turbines alone, which produce most of the state's winter power.",
   "Equipment and natural gas supply chains freezing, knocking large amounts of gas, coal, and nuclear generation offline alongside some wind.",
   "A cyberattack on the ERCOT control center.",
   "Texas importing too much power from other states."],1)
+kc(3,2,"What did Senate Bill 3 (2021) principally require?",
  ["That Texas join the national power grid.",
   "That electricity rates be frozen permanently.",
   "Weatherization of power generators and critical natural gas facilities, with inspections and penalties.",
   "That ERCOT be abolished and replaced by a federal agency."],2)
 ,
 refl="After Uri, Texas chose to harden its own separate grid rather than connect more fully to national grids. Lay out the case for each approach as its supporters would make it. Then explain what evidence you would want before concluding that the Texas grid is genuinely reliable in an extreme event.")

S[4] = dict(emoji="&#128738;", title="Oil, Gas, and the Texas Economy",
 los=["Explain the role of the oil and gas industry in Texas government revenue and politics.",
      "Describe how the Railroad Commission regulates the industry and the debates surrounding it."],
 body=
 P("Since the Spindletop gusher of 1901, oil has shaped Texas government as much as it has shaped the Texas economy. The industry funds a substantial share of state government through <strong>severance taxes</strong> on oil and gas production, fills the <strong>Economic Stabilization Fund</strong> (the Rainy Day Fund), and supports the <strong>Permanent School Fund</strong> and <strong>Permanent University Fund</strong> through royalties on state-owned land. When energy prices are high, the state treasury is flush; when they fall, budget writers feel it immediately.")
+figure("tx1_spindletop.jpg",
   "The Spindletop gusher of 1901 near Beaumont, which launched the Texas oil boom that continues to shape state revenue and politics",
   "Spindletop, 1901 &mdash; the gusher that made Texas an energy state. More than a century later, severance taxes on oil and gas still help fill the Rainy Day Fund and the Permanent School Fund.")
+card(4,1,"The shale revolution","&#128640; How Texas production doubled!",
  ["Beginning around 2008, the combination of <strong>hydraulic fracturing</strong> (&ldquo;fracking&rdquo;) and horizontal drilling unlocked oil and gas trapped in dense shale rock. The <strong>Permian Basin</strong> of West Texas became one of the most productive oil fields on earth, and the Eagle Ford in South Texas and the Barnett Shale around Fort Worth boomed as well. Texas production climbed to levels not seen since the 1970s, and the United States became a net energy exporter.",
   "The boom brought enormous revenue, jobs, and rapid population growth to formerly rural counties &mdash; along with strained roads, housing shortages, and local disputes over water use, truck traffic, and disposal wells. It also introduced new volatility: shale production responds quickly to price, so booms and busts arrive faster than they once did."])
+card(4,2,"The Railroad Commission: a name that misleads","&#128678; Texas&#39;s oil and gas regulator!",
  ["The <strong>Railroad Commission of Texas</strong> has not regulated railroads in any meaningful way for decades. Created in 1891 to regulate rail rates, it gained authority over oil and gas pipelines and then over production itself. Today its three statewide elected commissioners regulate drilling permits, well plugging, pipeline safety, and the disposal of oilfield waste.",
   "Two long-running criticisms follow the agency. The first is its name: surveys suggest many voters do not know what the commission does, which weakens accountability in elections most Texans skip. Proposals to rename it &ldquo;the Texas Energy Commission&rdquo; have repeatedly failed. The second is campaign finance: commissioners raise much of their money from the industry they regulate. <strong>Defenders</strong> respond that elected regulators are directly accountable to voters and that industry expertise is necessary to regulate competently; <strong>critics</strong> argue the arrangement invites capture."])
+defbox("&#128176; Where Energy Money Goes",
  "Texas levies a <strong>severance tax</strong> on oil (4.6 percent of market value) and natural gas (7.5 percent). Collections above a threshold are split between the <strong>Economic Stabilization Fund</strong> (Rainy Day Fund) and the State Highway Fund. Separately, oil and gas royalties from state-owned lands flow into the <strong>Permanent School Fund</strong>, managed by the General Land Office and the State Board of Education, and the <strong>Permanent University Fund</strong>, which supports the University of Texas and Texas A&amp;M systems. This is why energy prices, public school finance, and highway budgets are all linked in Texas.")
+kc(4,1,"What does the Railroad Commission of Texas actually regulate?",
  ["Passenger and freight rail service across Texas.",
   "The oil and gas industry, including drilling permits, pipelines, and oilfield waste.",
   "Electricity transmission and retail providers.",
   "Municipal water utilities."],1)
 ,
 refl="Texas ties a meaningful share of its school funding, highway money, and savings to oil and gas revenue. Explain one clear advantage and one clear risk of that arrangement, and describe what you think the state should do &mdash; if anything &mdash; to prepare for a future in which energy demand shifts.")

S[5] = dict(emoji="&#127786;&#65039;", title="Renewables, Storage, and a Changing Grid",
 los=["Describe the growth of wind, solar, and battery storage in Texas.",
      "Explain the policy debates over how to keep a rapidly growing grid reliable."],
 body=
 P("The same state that leads the nation in oil and gas also leads it in <strong>wind power</strong>, by a margin larger than the next several states combined, and has become a leading producer of <strong>solar</strong> power. This surprises people who expect renewable energy to track a state&#39;s politics. In Texas it tracked geography and economics instead: vast open land in West Texas and the Panhandle, strong and steady wind, abundant sunshine, a permitting process that is comparatively fast, and landowners glad to lease acreage for royalty payments.")
+P("Policy helped too, and it came from both parties. In 1999 Texas adopted a <strong>renewable portfolio standard</strong> as part of the same deregulation law that restructured the electricity market. More consequentially, in 2005 the Legislature authorized <strong>Competitive Renewable Energy Zones (CREZ)</strong>, a multi-billion-dollar transmission buildout connecting windy rural regions to distant cities. Without those wires, the wind would have had nowhere to go.")
+card(5,1,"The battery boom","&#128267; The fastest-moving change on the grid!",
  ["Grid-scale <strong>battery storage</strong> barely existed in ERCOT in 2021. Within a few years it grew into one of the largest storage fleets in the world. Batteries charge when power is plentiful and cheap &mdash; often midday, when solar output peaks &mdash; and discharge within seconds when the grid tightens, typically in the early evening as solar fades and demand stays high.",
   "This matters for reliability in a specific way: batteries respond faster than any thermal plant can start. During recent winter storms, storage and solar together contributed meaningfully during the tightest hours. Batteries do not solve every problem, since most discharge for only a few hours, but they have changed how the grid handles short, sharp crunches."])
+card(5,2,"The reliability debate","&#9878;&#65039; Two serious positions!",
  ["As renewables grew, the Legislature repeatedly debated whether the grid needs more <strong>dispatchable</strong> generation &mdash; power that can be turned on regardless of weather, mostly natural gas. The <strong>Texas Energy Fund</strong> was created to lend money for exactly that, though some projects have been slow to materialize. Some proposals would have imposed extra costs on wind and solar generators to account for reliability, and drew intense opposition.",
   "<strong>One view</strong> holds that intermittent sources require backup the market does not adequately reward, so the state should actively subsidize firm capacity; without it, reliability degrades as demand climbs. <strong>The other view</strong> holds that wind, solar, and storage are now the cheapest and fastest capacity to build, that they performed well in recent storms, and that penalizing them raises costs without improving reliability. Both sides invoke the same goal &mdash; keeping the lights on &mdash; and both can point to evidence."])
+card(5,3,"The data center problem","&#128187; Demand is growing faster than anyone planned!",
  ["ERCOT&#39;s load forecasts have risen sharply, driven by data centers (including artificial-intelligence computing), crypto mining, industrial electrification, hydrogen production, and continued population growth. Some projections show peak demand rising dramatically within a decade &mdash; a scale of growth the grid has never had to absorb this quickly.",
   "This creates a genuinely new policy question: should very large users be treated differently from households? In 2025 the Legislature moved in that direction, requiring large loads to be able to curtail usage or supply their own backup power during emergencies. <strong>Supporters</strong> argue these users should not be able to crowd out residential customers in a crisis, and that they can afford to help. <strong>Critics</strong> warn that heavy-handed rules could push investment and jobs to other states. Texas has generally competed hard for these facilities, which makes the trade-off sharp."])
+kc(5,1,"What was the significance of the CREZ transmission program?",
  ["It required all Texas homes to install solar panels.",
   "It built transmission lines connecting windy rural West Texas to distant urban demand, enabling the state's wind boom.",
   "It connected the ERCOT grid to the national grids.",
   "It banned the construction of natural gas plants."],1)
 ,
 refl="Texas became the nation's wind leader largely through land, economics, and transmission policy rather than environmental politics. Explain why that matters for how we think about energy policy, then take a position on whether the state should subsidize dispatchable gas generation, renewables and storage, both, or neither &mdash; and say what the main objection to your view would be.")

S[6] = dict(emoji="&#128167;", title="Water in Texas: Law, Scarcity, and the Rule of Capture",
 los=["Distinguish how Texas law treats groundwater and surface water.",
      "Explain the rule of capture and the debate over groundwater regulation."],
 body=
 P("Texas water law rests on a distinction that surprises most people: <strong>surface water</strong> and <strong>groundwater</strong> are governed by entirely different rules. Surface water &mdash; rivers, streams, and lakes &mdash; belongs to the state, which grants <strong>water rights</strong> as permits administered by the Texas Commission on Environmental Quality. Those rights follow <strong>prior appropriation</strong>: older rights get served first in a shortage, a principle often summarized as &ldquo;first in time, first in right.&rdquo;")
+P("Groundwater is different. Under the <strong>rule of capture</strong>, adopted by the Texas Supreme Court in 1904, landowners may generally pump as much water from beneath their land as they wish, even if doing so drains a neighbor&#39;s well. Courts have called it the &ldquo;law of the biggest pump.&rdquo; The doctrine is tied to a deeply held Texas commitment to private property rights, and the Legislature and courts have repeatedly reaffirmed that groundwater is owned by the surface owner.")
+card(6,1,"The rule of capture in practice","&#9878;&#65039; Property rights meet a shared resource!",
  ["Because an aquifer is a shared pool, one landowner&#39;s pumping affects everyone above it. The classic illustration is the <strong>Ogallala Aquifer</strong> beneath the High Plains, which irrigates much of the Panhandle&#39;s agriculture and is being drawn down far faster than it naturally recharges. Similar pressures affect the Edwards, Carrizo-Wilcox, and other aquifers, particularly as cities and industry buy rural groundwater rights and pipe the water to urban markets.",
   "Texas softened the rule without abandoning it by authorizing <strong>Groundwater Conservation Districts</strong>, local entities that can require permits, set spacing rules, and limit production within their boundaries. But coverage is uneven: some parts of the state remain unregulated &ldquo;white areas&rdquo; with no district at all, and districts vary widely in capacity and stringency.",
   "<strong>Defenders</strong> of the rule of capture argue that groundwater is private property, that landowners manage it responsibly, and that state control would amount to a taking. <strong>Critics</strong> argue that a shared aquifer cannot be managed well by uncoordinated private decisions and that stronger regional rules are needed. This remains one of the most consequential unresolved questions in Texas policy."])
+defbox("&#128167; Two Systems, One Water Cycle",
  "<strong>Surface water</strong> is owned by the state and allocated by permit under prior appropriation (&ldquo;first in time, first in right&rdquo;), administered by the <strong>TCEQ</strong>. <strong>Groundwater</strong> is owned by the landowner under the <strong>rule of capture</strong>, moderated where <strong>Groundwater Conservation Districts</strong> exist. Hydrologically the two are connected &mdash; pumping groundwater can reduce the flow of a spring-fed river &mdash; but legally they are treated as separate, which is a recurring source of conflict.")
+card(6,2,"Drought, growth, and aging pipes","&#128201; Three pressures at once!",
  ["Texas is prone to severe multi-year <strong>droughts</strong>; the drought of record in the 1950s still anchors state planning, and major droughts in 2011 and the 2020s emptied reservoirs and forced restrictions. Meanwhile the population keeps climbing and industrial demand is rising.",
   "Infrastructure is the third pressure. Much of the state&#39;s pipe network is decades old, and leaks waste a significant volume of treated water every year. Small and rural systems face the hardest math: they have the least capacity to finance repairs and the fewest customers to spread costs across, which is why some communities experience repeated boil-water notices. Fixing this is expensive and unglamorous, and it competes with more visible new-supply projects for the same dollars."])
+kc(6,1,"How does Texas law treat groundwater differently from surface water?",
  ["Both are owned by the state and allocated identically.",
   "Surface water is owned by the state and allocated by permit; groundwater generally belongs to the landowner under the rule of capture.",
   "Groundwater is owned by the federal government.",
   "Surface water belongs to landowners while groundwater belongs to cities."],1)
+kc(6,2,"What is the &ldquo;rule of capture&rdquo;?",
  ["A rule requiring landowners to share groundwater equally with neighbors.",
   "A federal standard for drinking-water quality.",
   "The doctrine that a landowner may generally pump as much groundwater as they wish, even if it drains a neighbor's well.",
   "A limit on how much surface water a city may divert from a river."],2)
 ,
 refl="The rule of capture protects private property rights but allows one landowner's pumping to drain a shared aquifer. Explain the strongest argument on each side, then describe what balance you would strike between property rights and shared management &mdash; and what you would need to know to be confident in that judgment.")

S[7] = dict(emoji="&#127974;", title="Paying for Water: Planning and Proposition 4",
 los=["Describe how Texas plans for future water needs through the State Water Plan.",
      "Explain the 2025 Proposition 4 water fund and the debates over how the money should be used."],
 body=
 P("Texas plans for water more systematically than most people realize. After the 1950s drought of record, the state built a bottom-up planning process: sixteen <strong>regional water planning groups</strong> assess local needs and propose strategies, and the <strong>Texas Water Development Board (TWDB)</strong> assembles them into a <strong>State Water Plan</strong> updated every five years. The plan projects demand and supply decades ahead and lists the projects needed to close the gap. Its central finding has been consistent and uncomfortable: demand is rising, existing supplies are declining, and the cost of fixing it is measured in the scores of billions of dollars.")
+figure("tx12_policy_process.jpg",
   "The public policy process, representing how Texas plans and funds long-term water infrastructure through regional planning and the State Water Plan",
   "Texas water planning runs bottom-up: sixteen regional groups feed into a State Water Plan updated every five years. The hard part has never been planning. It has been paying.")
+card(7,1,"Proposition 4 (2025): the largest water investment in state history","&#128176; $20 billion over 20 years!",
  ["Planning without money accomplishes little, and for years the plans outran the funding. That changed in November 2025. Texas voters approved <strong>Proposition 4</strong> with about <strong>71 percent</strong> of the vote &mdash; an unusually lopsided margin for a constitutional amendment. It dedicates up to <strong>$1 billion a year</strong> to the <strong>Texas Water Fund</strong> for twenty years, roughly $20 billion in total.",
   "The money comes from existing <strong>state sales tax revenue</strong> above a high annual threshold rather than from any new tax, and the dedication runs from 2027 through 2047, with a provision letting the Legislature suspend deposits during a declared disaster. The enabling legislation, Senate Bill 7, created an advisory committee to oversee spending. Notably, the campaign united an unusual coalition: agricultural groups, municipal water suppliers, business organizations, and environmental groups all supported it."])
+card(7,2,"What the money can buy &mdash; and the argument over priorities","&#9878;&#65039; New supply or fixing old pipes?",
  ["The Texas Water Fund splits between programs, with a substantial share directed to developing <strong>new water supply</strong> and to the existing State Water Implementation Fund for Texas (SWIFT). Eligible projects include reservoirs, <strong>desalination</strong> of seawater and brackish groundwater, <strong>wastewater reuse</strong>, produced-water treatment from oil and gas operations, pipelines to move water between regions, flood mitigation, agricultural conservation, and repairs to leaking infrastructure.",
   "That breadth is the source of the disagreement. <strong>One camp</strong> argues the priority should be fixing aging pipes and helping small systems, since conserved water is the cheapest water and leak repair delivers immediate benefit. <strong>Another camp</strong> argues that conservation alone cannot cover projected growth and that Texas must build genuinely new supply. <strong>Environmental groups</strong> have raised specific concerns about treating oil-and-gas wastewater and about the ecological effects of desalination. Everyone agrees the $20 billion is necessary; they disagree about sequencing, and the State Water Plan&#39;s total price tag runs far above what the fund provides."])
+card(7,3,"Why the vote was closer than it looked","&#128499;&#65039; A lesson in civic literacy!",
  ["Early polling on Proposition 4 found only about half of voters supportive when they were shown the ballot language alone, which was dense and technical. Support climbed into the seventy-percent range once voters were told plainly what the measure did: direct existing sales-tax money to fix leaking pipes and secure future water supply, without raising taxes.",
   "That gap between the ballot text and public understanding is itself a civics lesson. Texas voters decide constitutional amendments regularly, often in low-turnout November elections, on language written by the Legislature. How a measure is worded &mdash; and whether anyone explains it &mdash; can determine the outcome. It is a concrete reason why the informed participation discussed in Chapter 16 matters."])
+kc(7,1,"What did Texas Proposition 4 (2025) do?",
  ["Created a new state income tax to pay for water projects.",
   "Dedicated up to $1 billion a year of existing sales tax revenue to the Texas Water Fund for twenty years.",
   "Transferred control of Texas water to the federal government.",
   "Abolished groundwater conservation districts."],1)
 ,
 refl="Proposition 4 passed with about 71 percent support, but only after voters were told plainly what it would do. Explain what that says about how constitutional amendments work in Texas. Then argue how you would prioritize the $1 billion a year &mdash; repairing existing infrastructure, building new supply, or some split &mdash; and defend your choice.")

S[8] = dict(emoji="&#127757;", title="Environment, Trade-offs, and the Citizen&#39;s Role",
 los=["Describe how Texas regulates environmental quality and how it interacts with federal authority.",
      "Analyze the trade-offs between economic growth and environmental protection from multiple perspectives."],
 body=
 P("The <strong>Texas Commission on Environmental Quality (TCEQ)</strong>, a three-member body appointed by the governor, is the state&#39;s main environmental regulator. It issues air and water permits, oversees drinking-water systems, and enforces state and delegated federal standards. Much of U.S. environmental law works through <strong>cooperative federalism</strong>: Congress sets national floors through statutes like the Clean Air Act and Clean Water Act, and the Environmental Protection Agency delegates day-to-day implementation to states that meet federal requirements.")
+P("Texas has often been at the center of disputes over where that federal floor sits. The state has repeatedly sued the EPA over air-quality rules, greenhouse-gas regulation, and permitting requirements, and has sometimes prevailed. <strong>State officials</strong> argue that federal rules impose heavy costs, that Texas can regulate its own industries effectively, and that air quality has improved substantially even as the economy grew. <strong>Environmental advocates and some local officials</strong> argue that Texas permits too readily, penalizes too lightly, and that communities near industrial corridors bear health costs that do not show up in statewide averages. Both marshal real data, and the disagreement is as much about federalism as about pollution.")
+card(8,1,"The specific flashpoints","&#127981; Where the arguments actually happen!",
  ["<strong>Air quality</strong> in the Houston Ship Channel and Dallas-Fort Worth, where ozone levels have persistently challenged federal standards. <strong>Flaring</strong> in the Permian Basin, where natural gas is burned off at wells, drawing criticism over waste and emissions. <strong>Disposal wells</strong> for oilfield wastewater, which have been linked by researchers to increased seismic activity in West Texas &mdash; a region that historically had few earthquakes. <strong>Coastal resilience</strong> after Hurricane Harvey, including the enormous proposed &lsquo;Ike Dike&rsquo; barrier for Galveston Bay. And <strong>climate policy</strong>, where Texas government has generally declined to adopt emissions targets while the state simultaneously leads the nation in renewable-energy deployment.",
   "Notice how often the same facts support different conclusions. Texas emits more greenhouse gases than any other state, largely because of its size and industrial base &mdash; and it also removes more fossil generation from the national grid than any other state by building wind and solar. Which fact is more important is a value judgment, not a factual dispute."])
+defbox("&#9878;&#65039; The Trade-off, Stated Fairly",
  "Texas policy has generally favored abundant, inexpensive energy and rapid development, and the results are real: strong job growth, comparatively low electricity costs, and in-migration from other states. The costs are also real: significant emissions, air-quality problems concentrated in particular communities, aquifer depletion, and exposure to extreme-weather failures. Reasonable Texans weigh these differently depending on what they value and where they live. A course in government cannot tell you the right weighting &mdash; but it can insist you understand both columns before you decide.")
+card(8,2,"Where citizens actually have leverage","&#129309; Smaller rooms, bigger influence!",
  ["Energy and water decisions feel remote, but many are made in venues where ordinary participation carries real weight. <strong>TCEQ permit hearings</strong> accept public comment, and affected parties can sometimes request a contested-case hearing. <strong>Groundwater Conservation District</strong> boards are locally elected and often decided by very few votes. <strong>Regional water planning groups</strong> hold open meetings and take public input on the State Water Plan. <strong>PUCT</strong> and <strong>Railroad Commission</strong> proceedings accept comment, and Railroad Commissioners are elected statewide. <strong>City councils and utility boards</strong> set rates, conservation rules, and drought restrictions.",
   "These are exactly the low-turnout, low-attention arenas described in Chapter 7 and Chapter 16 &mdash; which means a single informed resident can matter more here than in a statewide election. The 2025 water amendment succeeded in part because a coalition of ordinary organizations explained it to voters. That is civic responsibility applied to the most concrete problems Texas faces."])
+kc(8,1,"How does environmental regulation typically work between Texas and the federal government?",
  ["Texas has no role; the EPA directly regulates all Texas facilities.",
   "Congress sets national minimum standards and the EPA delegates implementation to states like Texas, which is a frequent source of legal disputes.",
   "Texas sets national standards that other states must follow.",
   "Environmental regulation is handled entirely by city governments."],1)
 ,
 refl="This chapter has presented energy, water, and environmental policy as a set of genuine trade-offs rather than easy answers. Choose one trade-off that matters to you, state the strongest case on each side, and explain where you land. Then name one specific action &mdash; a meeting, a comment period, an election &mdash; where a citizen could actually influence that decision in Texas.")

# ---- points ----
def pts(s):
    b = S[s]["body"]
    r = sum(int(x) for x in re.findall(r"revealCard\([^,]+,\s*'[^']+',\s*(\d+)", b))
    q = sum(int(x) for x in re.findall(r"handleAnswer\([^,]+,\s*true,\s*'[^']+',\s*(\d+)", b))
    return r + q + 25 + 50
points = {s: pts(s) for s in S}

desc = {
 1:"Why energy and water sit at the center of Texas politics, and how growth is straining both.",
 2:"ERCOT, the separate Texas grid, deregulation, and who actually regulates electricity here.",
 3:"What happened in February 2021, the human toll, the reforms that followed, and whether they worked.",
 4:"Severance taxes, the shale revolution, and the Railroad Commission that regulates oil and gas.",
 5:"Wind, solar, batteries, and the serious debate over how to keep a fast-growing grid reliable.",
 6:"Surface water versus groundwater, the rule of capture, and the fight over a shared resource.",
 7:"The State Water Plan and the $20 billion Proposition 4 fund Texans approved in 2025.",
 8:"TCEQ, federal-state disputes, honest trade-offs, and where citizens actually have leverage.",
}
cards_html = "\n".join(
 f'                <div class="section-card" id="card{s}" onclick="navigateToSection({s})">\n'
 f'                    <div class="section-number">{s}</div>\n                    <h3>{S[s]["title"]}</h3>\n'
 f'                    <p>{desc[s]}</p>\n'
 f'                    <div class="points-indicator">&#127775; {points[s]} points available</div>\n                </div>\n' for s in S)

# ---- assemble ----
c = re.sub(r"<title>[^<]*</title>", "<title>Chapter 17: Energy, Water, and the Environment in Texas - Tarrant County College Texas Government Trailblazer Trek</title>", c, count=1)
c = c.replace("<h2>🗳️ Chapter 8: Voting and Political Participation in Texas ⭐</h2>",
              "<h2>&#9889; Chapter 17: Energy, Water, and the Environment in Texas &#128167;</h2>")
c = c.replace("<p>Discover how Texans exercise their democratic rights and participate in shaping their government!</p>",
              "<p>Explore the grid that powers Texas, the water that sustains it, and the hard trade-offs between growth and stewardship!</p>")
m = re.search(r'<div class="stat-icons">.*?</div>\s*</div>\s*</div>', c, flags=re.S)
icons = ('<div class="stat-icons">\n'
 '                    <div class="stat-icon">\n                        <span>&#9889;</span>\n                        <div>The Grid</div>\n                    </div>\n'
 '                    <div class="stat-icon">\n                        <span>&#128167;</span>\n                        <div>Water</div>\n                    </div>\n'
 '                    <div class="stat-icon">\n                        <span>&#127757;</span>\n                        <div>Environment</div>\n                    </div>\n'
 '                </div>')
if m: c = c[:m.start()] + icons + c[m.end():]
c = c.replace("<p>Enter your name to begin your journey through Texas voting and political participation:</p>",
              "<p>Enter your name to begin your journey through Texas energy, water, and environmental policy:</p>")
g = re.search(r'(<div class="section-grid">\n)(.*?)(\n\s*</div>\s*\n\s*<div style="text-align: center; margin-top: 2rem;">)', c, flags=re.S)
if not g: sys.exit("grid not found")
c = c[:g.start(2)] + cards_html.rstrip("\n") + c[g.end(2):]
start = c.find('<!-- Section 1')
if start == -1: start = c.find('<div id="section1" class="page">')
end = c.find('<div id="chapterReview" class="page">')
c = c[:start] + "".join(section(s, S[s]["emoji"], S[s]["title"], S[s]["los"], S[s]["body"], S[s]["refl"]) for s in S) + "        " + c[end:]
blk = "\n".join(f"                {s}: {{ earned: 0, max: {points[s]} }}{',' if s < 8 else ''}" for s in S)
c = re.sub(r"(\n\s+1: \{ earned: 0, max: \d+ \},\n(?:\s+\d+: \{ earned: 0, max: \d+ \},?\n)+)", "\n" + blk + "\n", c, count=1)

# ---- review page ----
terms = [
 ("ERCOT","The Electric Reliability Council of Texas, the nonprofit that operates the grid serving about 90% of the state's electric load."),
 ("Interconnection","One of the large synchronized power grids; Texas runs largely on its own, separate from the Eastern and Western Interconnections."),
 ("FERC","The Federal Energy Regulatory Commission, which regulates interstate electricity &mdash; jurisdiction Texas largely avoids by keeping power within state lines."),
 ("PUCT","The Public Utility Commission of Texas, the governor-appointed body that regulates ERCOT and the utilities."),
 ("Energy-only market","ERCOT's historic design paying generators for power produced rather than for standby capacity."),
 ("Deregulation","The 1999 restructuring that separated generation, transmission, and retail sales and gave many Texans a choice of retail provider."),
 ("Load shedding","Deliberately cutting power to customers to keep the grid from collapsing entirely."),
 ("Winter Storm Uri","The February 2021 freeze that caused mass generation failures, left more than 4.5 million Texans without power, and killed at least 246 people."),
 ("Weatherization","Hardening equipment against extreme temperatures; required of generators and critical gas facilities by Senate Bill 3 (2021)."),
 ("Securitization","Spreading extraordinary storm-related costs over many years on customer bills."),
 ("Texas Energy Fund","A state program of loans and incentives to build new dispatchable (mostly natural gas) generation."),
 ("Dispatchable generation","Power that can be turned on when needed regardless of weather, in contrast to intermittent wind and solar."),
 ("Battery storage","Grid-scale batteries that charge when power is plentiful and discharge within seconds when the grid tightens."),
 ("CREZ","Competitive Renewable Energy Zones &mdash; the transmission buildout authorized in 2005 that connected West Texas wind to urban demand."),
 ("Severance tax","A tax on oil (4.6%) and gas (7.5%) production that helps fill the Rainy Day Fund and the State Highway Fund."),
 ("Railroad Commission of Texas","The three-member elected body that regulates oil and gas &mdash; not railroads."),
 ("Permian Basin","The West Texas field that made Texas one of the world's largest oil producers after the shale revolution."),
 ("Hydraulic fracturing","&ldquo;Fracking&rdquo; &mdash; the technique that, with horizontal drilling, unlocked oil and gas from shale."),
 ("Permanent School Fund","The state endowment funded partly by oil and gas royalties from state lands, supporting public education."),
 ("Surface water","Rivers, streams, and lakes &mdash; owned by the state and allocated by permit under prior appropriation."),
 ("Prior appropriation","&ldquo;First in time, first in right&rdquo; &mdash; older surface-water rights are served first in a shortage."),
 ("Groundwater","Water beneath the land, generally owned by the surface owner in Texas."),
 ("Rule of capture","The 1904 doctrine letting a landowner pump as much groundwater as they wish, even if it drains a neighbor's well."),
 ("Groundwater Conservation District","A local district that may permit and limit pumping; coverage across Texas is uneven."),
 ("Ogallala Aquifer","The High Plains aquifer being drawn down far faster than it recharges."),
 ("Texas Water Development Board","The agency that assembles regional plans into the State Water Plan and administers water funding."),
 ("State Water Plan","The plan, updated every five years, projecting Texas water demand and supply decades ahead."),
 ("Proposition 4 (2025)","The amendment, approved with about 71% support, dedicating up to $1 billion a year of existing sales tax revenue to the Texas Water Fund for 20 years."),
 ("Desalination","Removing salt from seawater or brackish groundwater to create new supply."),
 ("TCEQ","The Texas Commission on Environmental Quality, the state's main environmental regulator."),
 ("Cooperative federalism","The arrangement in which Congress sets national environmental floors and the EPA delegates implementation to states."),
]
gloss = "\n".join(f'                    <dt style="font-weight:700; margin-top:0.6rem;">{t}</dt>\n                    <dd style="margin:0.1rem 0 0 1rem;">{d}</dd>' for t, d in terms)
reviews = [
 ("Why is the Texas grid separate from the rest of the country?","By keeping electricity almost entirely within state lines, ERCOT avoids the interstate commerce that would trigger federal (FERC) regulation. The trade-off is that Texas can import little power in a shortage."),
 ("What caused the generation failures during Winter Storm Uri?","Extreme cold froze plant equipment and the natural gas supply chain, knocking gas, coal, nuclear, and some wind generation offline as demand surged, forcing ERCOT into mass load shedding."),
 ("What were the human costs of Uri?","At least 246 confirmed deaths (independent estimates run higher), more than 4.5 million customers without power, and roughly half the state's population facing water disruptions."),
 ("What did Texas do in response?","SB 3 mandated weatherization of generators and critical gas facilities with inspections and penalties; SB 2 restructured the ERCOT board; later measures created the Texas Energy Fund and required large users to support the grid in emergencies."),
 ("Has the grid improved since 2021?","It has performed well in later freezes, aided by weatherization, new generation, and a large battery fleet &mdash; but none of those storms matched Uri's severity, and demand is rising quickly, so the question remains open."),
 ("How does Texas law treat groundwater versus surface water?","Surface water is state-owned and permitted under prior appropriation; groundwater belongs to the landowner under the rule of capture, moderated only where Groundwater Conservation Districts exist."),
 ("What did Proposition 4 (2025) do, and how is it funded?","It dedicated up to $1 billion a year for twenty years to the Texas Water Fund, drawn from existing sales tax revenue above a high threshold rather than any new tax."),
]
rev_html = "\n".join(f'                <details style="margin:0.4rem 0; padding:0.5rem 0.85rem; background:#eef3f8; border-radius:6px;">\n                    <summary style="cursor:pointer; font-weight:600;">{i}. {q}</summary>\n                    <p style="margin:0.4rem 0 0;"><strong>Answer:</strong> {a}</p>\n                </details>' for i, (q, a) in enumerate(reviews, 1))
crit = [
 "Texas keeps its own grid to preserve independence from federal regulation, at the cost of being unable to import much power in a crisis. Is that trade worth it? What would change your answer?",
 "After Uri, Texas chose to harden its existing market rather than redesign it. Evaluate that choice using the evidence from later winter storms, and identify what evidence would settle the question.",
 "The rule of capture treats groundwater as private property even though aquifers are shared. How should a state balance property rights against collective management of a shared resource?",
 "Proposition 4 dedicates $20 billion to water, but the State Water Plan identifies far greater needs. How should Texas prioritize repairing old infrastructure versus building new supply?",
 "Texas leads the nation in both fossil-fuel production and wind power, and emits more greenhouse gases than any other state. What does that combination suggest about the relationship between energy policy and environmental outcomes?",
]
crit_html = "\n".join(f'                    <li style="margin:0.35rem 0;">{q}</li>' for q in crit)
refs = [
 'ERCOT &mdash; grid conditions, planning documents, and post-event reviews. <a href="https://www.ercot.com" target="_blank" rel="noopener">ercot.com</a>',
 'Public Utility Commission of Texas and the Railroad Commission of Texas. <a href="https://www.puc.texas.gov" target="_blank" rel="noopener">puc.texas.gov</a> &middot; <a href="https://www.rrc.texas.gov" target="_blank" rel="noopener">rrc.texas.gov</a>',
 'Texas Water Development Board &mdash; the State Water Plan and the Texas Water Fund. <a href="https://www.twdb.texas.gov" target="_blank" rel="noopener">twdb.texas.gov</a>',
 'Texas Commission on Environmental Quality &mdash; permits, public comment, and enforcement. <a href="https://www.tceq.texas.gov" target="_blank" rel="noopener">tceq.texas.gov</a>',
 'Texas Legislature Online &mdash; the bills discussed here (SB 2 and SB 3 of 2021; SB 6 and SB 7 of 2025; HJR 7). <a href="https://capitol.texas.gov" target="_blank" rel="noopener">capitol.texas.gov</a>',
 'Handbook of Texas Online (TSHA) &mdash; Spindletop, the Railroad Commission, and Texas water history. <a href="https://www.tshaonline.org/handbook" target="_blank" rel="noopener">tshaonline.org/handbook</a>',
 'Image credits: Wikimedia Commons (public domain), as noted on each image.',
]
refs_html = "\n".join(f'                    <li style="margin:0.35rem 0;">{r}</li>' for r in refs)
summary = ("Energy and water are the resources that most define Texas policy, and they are physically linked: generating power takes water, and moving water takes power. Texas runs its own electric grid through <strong>ERCOT</strong>, kept separate from national grids largely to stay outside federal regulation, and operates a deregulated, historically <strong>energy-only</strong> market. That system failed catastrophically during <strong>Winter Storm Uri</strong> in February 2021, when frozen equipment and a frozen gas supply chain forced mass <strong>load shedding</strong>; at least 246 Texans died and more than 4.5 million lost power. The Legislature responded with mandatory <strong>weatherization</strong> (SB 3), a restructured ERCOT board (SB 2), and later the <strong>Texas Energy Fund</strong> and rules for very large electricity users. The grid has held in subsequent freezes, helped by new generation and a large <strong>battery storage</strong> fleet, though none matched Uri's severity and demand is climbing fast. Texas remains the nation's leading oil and gas producer &mdash; funding schools, highways, and the Rainy Day Fund through <strong>severance taxes</strong> and royalties, regulated by the <strong>Railroad Commission</strong> &mdash; and simultaneously its leading wind producer. Water follows a different logic: <strong>surface water</strong> is state-owned and permitted, while <strong>groundwater</strong> belongs to landowners under the <strong>rule of capture</strong>, softened only where conservation districts exist. Facing declining supply and rising demand, Texas voters approved <strong>Proposition 4</strong> in 2025, dedicating up to $1 billion a year for twenty years to water infrastructure. Across all of it run genuine trade-offs between growth and stewardship &mdash; decided in permit hearings, district elections, and low-turnout amendment votes where an informed citizen carries real weight.")
page = f'''<div id="chapterReview" class="page">
            <button class="back-button" onclick="navigateToHome()">&larr; Back to Home</button>
            <div class="content-section">
                <div class="section-header">
                    <span>&#128214;</span>
                    <h2>Chapter Review &amp; Resources</h2>
                </div>
                <p>Use this page to review Chapter 17. It gathers the chapter summary, key terms, self-check review questions, critical-thinking prompts, and sources for further study. This page is for study only and is not scored.</p>

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
rs = c.find('<div id="chapterReview" class="page">'); re_ = c.find('<div id="reportPage" class="page">')
if rs == -1 or re_ == -1: sys.exit("review anchors missing")
c = c[:rs] + page + c[re_:]

# ---- regenerate gate map from actual content ----
def words(h): return len(_html.unescape(re.sub(r"<[^>]+>", " ", h)).split())
lines = []
for s in S:
    b = S[s]["body"]
    cards = re.findall(r"revealCard\(this, '([^']+)'", b)
    qs = []
    for q in re.findall(r"handleAnswer\(this, (?:true|false), '([^']+)'", b):
        if q not in qs: qs.append(q)
    mins = max(90, min(240, round(words(b) * 0.3)))
    lines.append(f"            '{s}': {{ cards: [{','.join(repr(x) for x in cards)}], questions: [{','.join(repr(x) for x in qs)}], minSeconds: {mins} }}")
m = re.search(r"        const sectionElements = \{.*?\n        \};", c, flags=re.S)
if not m: sys.exit("sectionElements not found")
c = c[:m.start()] + "        const sectionElements = {\n" + ",\n".join(lines) + "\n        };" + c[m.end():]
for s in S:
    b = S[s]["body"]
    line = [l for l in lines if l.strip().startswith(f"'{s}'")][0]
    assert set(re.findall(r"revealCard\(this, '([^']+)'", b)) == set(re.findall(r"'(card[^']+)'", line))
    assert set(re.findall(r"handleAnswer\(this, (?:true|false), '([^']+)'", b)) == set(re.findall(r"'(q[^']+)'", line))

open(OUT, "w", encoding="utf-8").write(c)
print("Built", OUT)
print("points:", points, "total:", sum(points.values()))
