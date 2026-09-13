#!/usr/bin/env python3
"""Generate the THECB / ACGM alignment matrix for the Trailblazer Trek.

Outputs alignment.html (styled to match the site) and ALIGNMENT.md (for the
repo). The chapter list and mappings live here so both stay in sync.
"""

OUTCOMES = [
 ("1", "Explain the origin and development of the Texas constitution."),
 ("2", "Describe state and local political systems and their relationship with the federal government."),
 ("3", "Describe separation of powers and checks and balances in both theory and practice in Texas."),
 ("4", "Demonstrate knowledge of the legislative, executive, and judicial branches of Texas government."),
 ("5", "Evaluate the role of public opinion, interest groups, and political parties in Texas."),
 ("6", "Analyze the state and local election process."),
 ("7", "Identify the rights and responsibilities of citizens."),
 ("8", "Analyze issues, policies and political culture of Texas."),
]

# chapter: (title, {outcome: 'P' primary | 'S' supporting}, evidence note)
CH = [
 (1, "Welcome to Texas", {"1":"S","7":"S","8":"P"},
  "Six Flags through statehood, Reconstruction, and Spindletop; Elazar's political-culture typology; current majority-minority demographics."),
 (2, "The Texas Constitution", {"1":"P","3":"P"},
  "All seven Texas constitutions (1824/1827 Mexican through 1876), the Davis reaction that shaped the 1876 design, the amendment process, and Article I. Section 6 covers Article II separation of powers, the specific checks each branch holds, and how power is scattered further in practice."),
 (3, "Federalism", {"2":"P","3":"S"},
  "Enumerated, reserved, and concurrent powers; supremacy, full faith and credit, privileges and immunities; McCulloch and Gibbons; dual to cooperative to new federalism."),
 (4, "The Texas Legislature", {"4":"P","3":"S"},
  "Bicameral structure, 140-day biennial sessions, Speaker and Lieutenant Governor power, committees, how a bill becomes law, redistricting including the 2025 mid-decade redraw."),
 (5, "The Texas Plural Executive", {"4":"P","3":"S"},
  "Governor's formal and informal powers, line-item veto, clemency, appointments; the separately elected executive officers; the Railroad Commission."),
 (6, "The Texas Court System", {"4":"P","3":"S"},
  "Trial and appellate structure, the bifurcated high courts, the new Fifteenth Court of Appeals, partisan judicial selection and reform proposals, criminal and civil process."),
 (7, "Local Government", {"2":"P","8":"S"},
  "Counties and the commissioners court, general-law versus home-rule cities, council-manager and strong-mayor forms, special districts, annexation, and state preemption."),
 (8, "Voting and Political Participation", {"6":"P","5":"S","7":"S"},
  "Registration and photo-ID rules, the poll tax and white primary, the Voting Rights Act and Shelby County, heuristics, turnout, and non-voting participation."),
 (9, "Elections and Campaigns", {"6":"P","5":"S"},
  "Primaries, runoffs, general and special elections, open versus closed versus top-two systems, campaign finance from the Tillman Act to Citizens United, the Electoral College."),
 (10, "Political Parties", {"5":"P","8":"S"},
  "Madison on factions, the one-party era, the Shivercrat movement and realignment, party organization from precinct to state convention, third parties, polarization."),
 (11, "Interest Groups and Lobbying", {"5":"P","7":"S"},
  "Material, solidary, and purposive benefits; the free rider problem; PACs and the friendly incumbent rule; grassroots and grasstops lobbying; Texas Ethics Commission regulation."),
 (12, "Public Policy", {"8":"P","2":"S"},
  "The policy-making cycle, Lowi's typology, public goods; education finance and the 2025 ESA program; health policy and Medicaid non-expansion; gun policy including permitless carry."),
 (13, "The Criminal Justice System", {"7":"S","4":"S","8":"S"},
  "Offense classification, indigent defense and Gideon, Fifth, Sixth and Eighth Amendment rights, bail and 2025's Proposition 3, the death penalty, exonerations, TDCJ."),
 (14, "Financing State Government", {"8":"P","4":"S"},
  "Sales, property, franchise and severance taxes; no income tax; the biennial budget, LBB, Comptroller's revenue estimate, pay-as-you-go; the 2026-27 budget and property-tax amendments."),
 (15, "Public Opinion and the Media", {"5":"P"},
  "Political socialization, polling methodology and sampling, push polls and the Bradley effect, the fourth estate, agenda setting, framing, priming, and media bias."),
 (16, "Civil Liberties and Civil Rights", {"7":"P","1":"S","3":"S"},
  "Liberties versus rights; the Texas Bill of Rights and the 1972 Texas ERA; incorporation; Texas v. Johnson, Smith v. Allwright, Sweatt, Hernandez, Lawrence, Plyler, Fisher; levels of scrutiny; citizen responsibilities."),
 (17, "Energy, Water, and the Environment", {"8":"P","2":"S","4":"S"},
  "ERCOT and the separate grid, Winter Storm Uri and the SB 2/SB 3 reforms, oil and gas and severance revenue, renewables and storage, water law and the rule of capture, Proposition 4."),
 (18, "The Texas Bureaucracy and Sunset Review", {"4":"P","3":"S","7":"S"},
  "Delegated authority, boards and commissions with staggered terms, merit versus patronage, Sunset review, administrative rulemaking and the Texas Register, capture, open records and open meetings."),
]

CORE = [
 ("Critical Thinking",
  "Inquiry, analysis, evaluation, synthesis, creativity, and innovation.",
  "Every chapter ends with five <strong>Critical-Thinking Questions</strong> that require students to weigh competing positions rather than recall facts. Contested topics are presented with the strongest case on each side, and reflection prompts explicitly ask students to state what evidence would change their mind. Knowledge checks use plausible distractors drawn from common misconceptions."),
 ("Communication",
  "Effective development, interpretation, and expression of ideas through written, oral, and visual communication.",
  "Each section requires a written <strong>Reflection</strong> of at least fifty words in the student's own words, scored and retained in the Completion Report. Prompts ask students to explain a position, not merely assert one. Reflections and the Completion Report give instructors an artifact suitable for direct assessment."),
 ("Personal Responsibility",
  "The ability to connect choices, actions, and consequences to ethical decision-making.",
  "Chapter 16 closes on the responsibilities that accompany rights &mdash; voting, jury service, obeying the law, defending the liberties of people one opposes. Chapter 18 closes on the accountability tools a citizen can personally use. The academic-integrity provisions (reflection originality, pacing checks, and the tamper-evident Completion Report hash) make integrity itself part of the exercise."),
 ("Social Responsibility",
  "Intercultural competence, knowledge of civic responsibility, and the ability to engage effectively in regional, national, and global communities.",
  "Chapter 16 traces the civil-rights struggles of Black and Mexican American Texans through Smith v. Allwright, Sweatt v. Painter, and Hernandez v. Texas. Chapters 7, 8, 17, and 18 identify concrete points of civic engagement &mdash; commissioners court, groundwater district boards, rulemaking comment periods, Sunset hearings &mdash; where participation is realistically available."),
]

STATUTORY = [
 ("Texas Education Code &sect;51.301",
  "Requires instruction including consideration of the U.S. Constitution and the constitutions of the states, &ldquo;with special emphasis on that of Texas.&rdquo;",
  "Chapter 2 covers all seven Texas constitutions and the 1876 document in depth. Chapter 16 covers the Texas Bill of Rights (Article I) alongside the federal Bill of Rights and the Fourteenth Amendment, including provisions where Texas protects more than the federal floor."),
 ("SB 1 (80th Legislature) civil-rights content",
  "Coverage of civil-rights history in the required government sequence.",
  "Chapter 16, Section 6 covers Juneteenth, Jim Crow, the poll tax and white primary, the NAACP and LULAC and the American GI Forum, and the landmark Texas cases; Section 7 covers modern equal-protection debates."),
]

def cell(v):
    return {"P": "&#9679;", "S": "&#9675;"}.get(v, "")

def build_html():
    head_cells = "".join(f'<th scope="col" title="Outcome {n}">{n}</th>' for n, _ in OUTCOMES)
    rows = ""
    for num, title, m, note in CH:
        cells = "".join(
            f'<td class="{ "p" if m.get(n)=="P" else ("s" if m.get(n)=="S" else "") }">'
            f'<span class="mark">{cell(m.get(n))}</span>'
            f'<span class="sr-only">{"Primary coverage" if m.get(n)=="P" else ("Supporting coverage" if m.get(n)=="S" else "Not covered")}</span></td>'
            for n, _ in OUTCOMES)
        rows += (f'        <tr>\n          <th scope="row" class="chname"><span class="chnum">{num}</span> {title}</th>\n'
                 f'{cells}\n        </tr>\n'
                 f'        <tr class="evidence"><td colspan="9">{note}</td></tr>\n')
    key = "".join(f'<li><strong>Outcome {n}.</strong> {t}</li>' for n, t in OUTCOMES)
    core = "".join(f'<div class="core-card"><h3>{n}</h3><p class="core-def">{d}</p><p>{e}</p></div>' for n, d, e in CORE)
    stat = "".join(f'<tr><th scope="row">{n}</th><td>{r}</td><td>{h}</td></tr>' for n, r, h in STATUTORY)
    # per-outcome chapter index
    idx = ""
    for n, t in OUTCOMES:
        prim = [f"Ch&nbsp;{c}" for c, _, m, _ in CH if m.get(n) == "P"]
        supp = [f"Ch&nbsp;{c}" for c, _, m, _ in CH if m.get(n) == "S"]
        idx += (f'<tr><th scope="row">{n}</th><td>{t}</td>'
                f'<td class="prim">{", ".join(prim) or "&mdash;"}</td>'
                f'<td>{", ".join(supp) or "&mdash;"}</td></tr>')
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>THECB / ACGM Alignment &mdash; Texas Government Trailblazer Trek</title>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
<style>
:root {{
  --primary-blue:#002b5c; --secondary-blue:#00788a; --gold:#FFD700;
  --bg-light:#F5F7FA; --bg-white:#FFFFFF; --bg-section:#e8f4f6;
  --text-primary:#212121; --text-secondary:#424242; --success:#4a8c2a;
}}
*{{box-sizing:border-box;}}
body{{margin:0;background:var(--bg-light);color:var(--text-primary);
 font-family:'EB Garamond',Garamond,serif;font-size:18px;line-height:1.6;}}
header{{background:var(--primary-blue);color:#fff;padding:1rem 1.5rem;
 display:flex;flex-wrap:wrap;gap:.75rem;align-items:center;justify-content:space-between;}}
header h1{{font-size:1.15rem;margin:0;font-family:'Inter',sans-serif;font-weight:700;}}
header a{{color:#fff;text-decoration:none;border:1px solid rgba(255,255,255,.5);
 padding:.35rem .8rem;border-radius:6px;font-family:'Inter',sans-serif;font-size:.85rem;}}
header a:hover,header a:focus-visible{{background:rgba(255,255,255,.15);}}
main{{max-width:1150px;margin:0 auto;padding:2rem 1.25rem 4rem;}}
h2{{font-size:1.7rem;color:var(--primary-blue);border-bottom:3px solid var(--secondary-blue);
 padding-bottom:.4rem;margin-top:2.5rem;}}
h3{{color:var(--primary-blue);margin-bottom:.3rem;}}
.lede{{background:var(--bg-white);border-left:5px solid var(--secondary-blue);
 padding:1rem 1.25rem;border-radius:8px;}}
table{{width:100%;border-collapse:collapse;background:var(--bg-white);
 border-radius:8px;overflow:hidden;margin-top:1rem;font-size:.95rem;}}
caption{{text-align:left;font-style:italic;color:var(--text-secondary);padding:.5rem 0;}}
th,td{{padding:.5rem .6rem;border-bottom:1px solid #dde5ec;text-align:left;vertical-align:top;}}
thead th{{background:var(--primary-blue);color:#fff;font-family:'Inter',sans-serif;
 font-size:.85rem;text-align:center;}}
thead th:first-child{{text-align:left;}}
.matrix td{{text-align:center;font-size:1.1rem;}}
.matrix .chname{{text-align:left;font-weight:600;width:24%;}}
.chnum{{display:inline-block;background:var(--secondary-blue);color:#fff;border-radius:50%;
 width:1.6em;height:1.6em;line-height:1.6em;text-align:center;font-size:.8rem;
 font-family:'Inter',sans-serif;margin-right:.35rem;}}
.matrix td.p{{background:#d9ecd0;color:var(--success);font-weight:700;}}
.matrix td.s{{background:#e8f4f6;color:var(--secondary-blue);}}
tr.evidence td{{font-size:.85rem;color:var(--text-secondary);background:#fbfcfd;
 padding:.35rem .6rem .7rem 2.6rem;border-bottom:2px solid #eef2f6;text-align:left;}}
.legend{{display:flex;gap:1.5rem;flex-wrap:wrap;margin:.8rem 0 0;font-size:.9rem;}}
.legend span{{display:inline-flex;align-items:center;gap:.4rem;}}
.dot-p{{color:var(--success);font-size:1.1rem;}} .dot-s{{color:var(--secondary-blue);font-size:1.1rem;}}
ol.key{{background:var(--bg-white);border-radius:8px;padding:1rem 1rem 1rem 2.2rem;}}
ol.key li{{margin:.3rem 0;}}
.core-grid{{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem;margin-top:1rem;}}
.core-card{{background:var(--bg-white);border-top:4px solid var(--secondary-blue);
 padding:1rem 1.1rem;border-radius:8px;}}
.core-def{{font-style:italic;color:var(--text-secondary);font-size:.9rem;}}
.prim{{font-weight:700;color:var(--success);}}
footer{{margin-top:3rem;font-size:.85rem;color:var(--text-secondary);border-top:1px solid #d5dee6;padding-top:1rem;}}
.sr-only{{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;
 clip:rect(0,0,0,0);white-space:nowrap;border:0;}}
a{{color:var(--secondary-blue);}}
a:focus-visible,[tabindex]:focus-visible{{outline:3px solid #0b5fff;outline-offset:3px;}}
@media (max-width:760px){{ body{{font-size:16px;}} .matrix .chname{{width:auto;}} table{{font-size:.85rem;}} }}
@media print{{ body{{background:#fff;}} header a{{display:none;}} }}
</style>
</head>
<body>
<header>
  <h1>&#9878;&#65039; Texas Government Trailblazer Trek &mdash; THECB / ACGM Alignment</h1>
  <a href="index.html">&larr; Back to modules</a>
</header>
<main>
  <p class="lede">This document maps the eighteen Trailblazer Trek modules to the Texas Higher Education
  Coordinating Board&rsquo;s <strong>ACGM learning outcomes for GOVT 2306 (Texas Government)</strong>, to the
  THECB <strong>Core Objectives</strong>, and to the statutory content requirements for the government sequence.
  It is intended for curriculum committees, department chairs, and faculty evaluating the Trek for adoption.
  All modules are free, openly licensed (CC&nbsp;BY&nbsp;4.0), and require no student purchase or account.</p>

  <h2>ACGM Learning Outcomes for GOVT 2306</h2>
  <p>Upon successful completion of this course, students will:</p>
  <ol class="key">{key}</ol>

  <h2>Chapter-to-Outcome Matrix</h2>
  <div class="legend">
    <span><span class="dot-p">&#9679;</span> <strong>Primary</strong> &mdash; the outcome is a central focus of the chapter</span>
    <span><span class="dot-s">&#9675;</span> <strong>Supporting</strong> &mdash; the outcome is meaningfully addressed</span>
  </div>
  <table class="matrix">
    <caption>Each chapter is followed by the specific content evidencing its coverage.</caption>
    <thead><tr><th scope="col">Module</th>{head_cells}</tr></thead>
    <tbody>
{rows}    </tbody>
  </table>

  <h2>Outcome Coverage Index</h2>
  <p>Read the other direction: for each outcome, which modules carry it.</p>
  <table>
    <thead><tr><th scope="col">#</th><th scope="col">Outcome</th><th scope="col">Primary</th><th scope="col">Supporting</th></tr></thead>
    <tbody>{idx}</tbody>
  </table>
  <p><strong>Every ACGM outcome has primary coverage in at least one module</strong>, and every module
  addresses at least one outcome. Outcome&nbsp;7 (rights and responsibilities of citizens) is carried
  primarily by Chapter&nbsp;16, which was built specifically to close that gap.</p>

  <h2>THECB Core Objectives</h2>
  <p>GOVT 2306 carries the core objectives below. Each is addressed by a recurring structural feature
  of every module, not by isolated assignments.</p>
  <div class="core-grid">{core}</div>

  <h2>Statutory Content Requirements</h2>
  <table>
    <thead><tr><th scope="col">Requirement</th><th scope="col">What it requires</th><th scope="col">Where the Trek addresses it</th></tr></thead>
    <tbody>{stat}</tbody>
  </table>

  <h2>Assessment Evidence Available to Instructors</h2>
  <p>Each module generates a <strong>Completion Report</strong> that instructors can collect as direct
  evidence of student learning. It records points earned by section, knowledge-check accuracy, the full
  text of each written reflection, and time on task, and it carries a tamper-evident integrity hash.
  Because reflections are written in the student&rsquo;s own words and prompts require students to weigh
  competing positions, the reports are usable artifacts for Critical Thinking and Communication
  assessment as well as for participation credit.</p>

  <h2>Accessibility and Licensing</h2>
  <p>All modules are licensed <strong>CC&nbsp;BY&nbsp;4.0</strong> and may be adopted, adapted, and
  redistributed with attribution; see <a href="LICENSE">LICENSE</a> and
  <a href="ATTRIBUTION.md">ATTRIBUTION.md</a>. Every scored activity is operable by keyboard and exposed
  to assistive technology, every image carries descriptive alternative text, and each page declares its
  language; current conformance status and known limitations are documented in
  <a href="ACCESSIBILITY.md">ACCESSIBILITY.md</a>.</p>

  <footer>
    <p>Texas Government Trailblazer Trek &mdash; Tarrant County College. Outcome text is quoted from the
    THECB Lower-Division Academic Course Guide Manual (ACGM) entry for GOVT&nbsp;2306. Because Texas law
    and policy change each biennium, module content is reviewed on a per-session cadence; verify currency
    against the session most recently concluded before adoption.</p>
  </footer>
</main>
</body>
</html>
"""

def build_md():
    lines = ["# THECB / ACGM Alignment &mdash; Texas Government Trailblazer Trek", "",
             "This document maps the eighteen Trailblazer Trek modules to the THECB ACGM learning",
             "outcomes for **GOVT 2306 (Texas Government)**, the THECB Core Objectives, and the statutory",
             "content requirements for the government sequence. All modules are free, openly licensed",
             "(CC BY 4.0), and require no student purchase or account.", "",
             "A styled version is available at `alignment.html`.", "",
             "## ACGM Learning Outcomes for GOVT 2306", "",
             "Upon successful completion of this course, students will:", ""]
    for n, t in OUTCOMES:
        lines.append(f"{n}. {t}")
    lines += ["", "## Chapter-to-Outcome Matrix", "",
              "`P` = primary coverage (a central focus of the chapter) &middot; `S` = supporting coverage", "",
              "| Module | " + " | ".join(n for n, _ in OUTCOMES) + " |",
              "|---|" + "---|" * len(OUTCOMES)]
    for num, title, m, note in CH:
        lines.append(f"| **{num}. {title}** | " + " | ".join(m.get(n, "") for n, _ in OUTCOMES) + " |")
    lines += ["", "### Coverage evidence", ""]
    for num, title, m, note in CH:
        lines.append(f"- **Ch {num}. {title}** &mdash; {note}")
    lines += ["", "## Outcome Coverage Index", "",
              "| # | Outcome | Primary | Supporting |", "|---|---|---|---|"]
    for n, t in OUTCOMES:
        p = ", ".join(f"Ch {c}" for c, _, m, _ in CH if m.get(n) == "P") or "—"
        s = ", ".join(f"Ch {c}" for c, _, m, _ in CH if m.get(n) == "S") or "—"
        lines.append(f"| {n} | {t} | {p} | {s} |")
    lines += ["", "Every ACGM outcome has primary coverage in at least one module, and every module",
              "addresses at least one outcome. Outcome 7 (rights and responsibilities of citizens) is",
              "carried primarily by Chapter 16, built specifically to close that gap.", "",
              "## THECB Core Objectives", ""]
    import re as _re
    strip = lambda s: _re.sub(r"<[^>]+>", "", s).replace("&mdash;", "—").replace("&rsquo;", "'").replace("&ldquo;", '"').replace("&rdquo;", '"').replace("&nbsp;", " ")
    for n, d, e in CORE:
        lines += [f"### {n}", "", f"*{strip(d)}*", "", strip(e), ""]
    lines += ["## Statutory Content Requirements", "",
              "| Requirement | What it requires | Where the Trek addresses it |", "|---|---|---|"]
    for n, r, h in STATUTORY:
        lines.append(f"| {strip(n)} | {strip(r)} | {strip(h)} |")
    lines += ["", "## Assessment Evidence Available to Instructors", "",
              "Each module generates a **Completion Report** recording points by section, knowledge-check",
              "accuracy, the full text of each written reflection, and time on task, with a tamper-evident",
              "integrity hash. Because reflections are written in the student's own words and prompts",
              "require weighing competing positions, the reports are usable artifacts for Critical Thinking",
              "and Communication assessment as well as participation credit.", "",
              "## Accessibility and Licensing", "",
              "All modules are licensed CC BY 4.0 (see `LICENSE` and `ATTRIBUTION.md`) and may be adopted,",
              "adapted, and redistributed with attribution. Every scored activity is keyboard operable and",
              "exposed to assistive technology, every image carries descriptive alt text, and each page",
              "declares its language; see `ACCESSIBILITY.md` for current status and known limitations.", "",
              "---", "",
              "Outcome text is quoted from the THECB Lower-Division Academic Course Guide Manual (ACGM)",
              "entry for GOVT 2306. Because Texas law and policy change each biennium, module content is",
              "reviewed on a per-session cadence; verify currency against the most recently concluded",
              "session before adoption."]
    return "\n".join(lines) + "\n"

if __name__ == "__main__":
    open("alignment.html", "w", encoding="utf-8").write(build_html())
    open("ALIGNMENT.md", "w", encoding="utf-8").write(build_md())
    covered = {n for n, _ in OUTCOMES if any(m.get(n) == "P" for _, _, m, _ in CH)}
    missing = [n for n, _ in OUTCOMES if n not in covered]
    print("Wrote alignment.html and ALIGNMENT.md")
    print("Chapters mapped:", len(CH))
    print("Outcomes with primary coverage:", len(covered), "of", len(OUTCOMES))
    if missing:
        print("!! OUTCOMES WITHOUT PRIMARY COVERAGE:", missing)
    orphans = [c for c, _, m, _ in CH if not m]
    if orphans:
        print("!! CHAPTERS MAPPED TO NOTHING:", orphans)
