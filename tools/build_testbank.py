#!/usr/bin/env python3
"""Build the Trailblazer Trek test bank.

Sources
  1. Module knowledge checks, extracted from the chapter HTML (correct answer is
     read from the handleAnswer(..., true, ...) call, so the key cannot drift).
  2. Chapter Review questions, extracted from the <details> blocks.
  3. New summative items authored in tools/testbank_items.py, which students have
     NOT seen in the modules.

Outputs
  TEST-BANK.md          instructor-facing bank with answer key and rationales
  test-bank.csv         spreadsheet / LMS-friendly flat file
  qti/                  Canvas-importable QTI 1.2 packages (one .zip per bank)
"""
import re, os, csv, glob, html, zipfile, shutil, sys, uuid

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from testbank_items import ITEMS as NEW_ITEMS

LETTERS = "ABCD"

def clean(s):
    s = re.sub(r"<[^>]+>", "", s)
    return re.sub(r"\s+", " ", html.unescape(s)).strip()

def chapter_files():
    fs = glob.glob("Chapter *.html")
    return sorted(fs, key=lambda f: int(re.search(r"Chapter (\d+)", f).group(1)))

def chapter_title(c):
    m = re.search(r"<title>Chapter \d+:\s*([^-<]*)", c)
    return clean(m.group(1)) if m else "?"

def extract(path):
    """Return (num, title, [kc items], [review items])."""
    num = int(re.search(r"Chapter (\d+)", path).group(1))
    c = open(path, encoding="utf-8").read()
    title = chapter_title(c)

    kcs = []
    for block in re.findall(r'<div class="knowledge-check">(.*?)(?=<div class="knowledge-check">|<div class="reflection-box"|<div class="interactive-card"|</div>\s*</div>\s*</div>)', c, flags=re.S):
        qm = re.search(r'<div class="kc-question">(.*?)</div>', block, flags=re.S)
        if not qm:
            continue
        opts = re.findall(r'<div class="kc-option"[^>]*onclick="handleAnswer\(this,\s*(true|false),\s*\'([^\']+)\',\s*\d+\)"[^>]*>(.*?)</div>', block, flags=re.S)
        if len(opts) < 2:
            continue
        qid = opts[0][1]
        texts = [clean(o[2]) for o in opts]
        correct = next((i for i, o in enumerate(opts) if o[0] == "true"), None)
        if correct is None:
            continue
        kcs.append(dict(qid=qid, stem=clean(qm.group(1)).lstrip("❓ ").strip(),
                        options=texts, correct=correct, rationale=""))

    revs = []
    for d in re.findall(r"<details[^>]*>(.*?)</details>", c, flags=re.S):
        sm = re.search(r"<summary[^>]*>(.*?)</summary>", d, flags=re.S)
        am = re.search(r"<p[^>]*><strong>Answer:</strong>(.*?)</p>", d, flags=re.S)
        if sm and am:
            stem = re.sub(r"^\d+\.\s*", "", clean(sm.group(1)))
            revs.append(dict(stem=stem, answer=clean(am.group(1))))
    return num, title, kcs, revs

def build():
    chapters = {}
    for f in chapter_files():
        n, t, kcs, revs = extract(f)
        chapters[n] = dict(title=t, kcs=kcs, revs=revs, new=[])
    for (ch, outcome, level, stem, opts, correct, rat) in NEW_ITEMS:
        if ch not in chapters:
            print(f"  !! authored item references missing chapter {ch}")
            continue
        chapters[ch]["new"].append(dict(outcome=outcome, level=level, stem=stem,
                                        options=opts, correct=correct, rationale=rat))
    return chapters

# ───────────────────────────── Markdown ─────────────────────────────
def write_md(chapters):
    L = []
    tot_new = sum(len(c["new"]) for c in chapters.values())
    tot_kc = sum(len(c["kcs"]) for c in chapters.values())
    tot_rev = sum(len(c["revs"]) for c in chapters.values())
    L += ["# Test Bank — Texas Government Trailblazer Trek (GOVT 2306)", "",
          "Instructor resource. **Do not distribute to students.**", "",
          f"This bank contains **{tot_new + tot_kc + tot_rev} items** across 18 chapters, in three parts:", "",
          f"| Part | Items | Students have seen these? | Best used for |",
          "|---|---|---|---|",
          f"| A. Summative multiple choice | {tot_new} | **No** — written separately for assessment | Exams, quizzes |",
          f"| B. Module knowledge checks | {tot_kc} | **Yes** — with answers revealed | Practice, review, low-stakes retakes |",
          f"| C. Chapter review questions | {tot_rev} | **Yes** — reveal-answer format | Short answer, discussion, study guides |", "",
          "### How to use this responsibly", "",
          "Part A items were written for exams and do not appear in the modules. Parts B and C are",
          "reproduced from the modules themselves: every student who completed a chapter has already",
          "seen those questions **and the correct answers**. Using Part B or C on a graded exam mostly",
          "measures whether a student finished the module. They are included because they remain useful",
          "for practice tests, review sessions, and formative checks — not because they are secure.", "",
          "Items in Part A are tagged with the ACGM learning outcome they assess (see `ALIGNMENT.md`)",
          "and a cognitive level. Correct answers are marked and rationales supplied so that items can",
          "be edited without losing their logic.", "",
          "A flat version for spreadsheets or LMS import is in `test-bank.csv`. Canvas-importable QTI",
          "packages are in `qti/`.", "",
          "---", ""]
    for n in sorted(chapters):
        c = chapters[n]
        L += [f"## Chapter {n}. {c['title']}", ""]
        if c["new"]:
            L += [f"### Part A — Summative items (not seen by students)", ""]
            for i, it in enumerate(c["new"], 1):
                L.append(f"**{n}.A{i}** *(Outcome {it['outcome']} · {it['level']})* {it['stem']}")
                L.append("")
                for j, o in enumerate(it["options"]):
                    mark = " **← correct**" if j == it["correct"] else ""
                    L.append(f"- {LETTERS[j]}. {o}{mark}")
                L += ["", f"> *Rationale:* {it['rationale']}", ""]
        if c["kcs"]:
            L += [f"### Part B — Module knowledge checks (students have seen these)", ""]
            for i, it in enumerate(c["kcs"], 1):
                L.append(f"**{n}.B{i}** {it['stem']}")
                L.append("")
                for j, o in enumerate(it["options"]):
                    mark = " **← correct**" if j == it["correct"] else ""
                    L.append(f"- {LETTERS[j]}. {o}{mark}")
                L.append("")
        if c["revs"]:
            L += [f"### Part C — Chapter review questions (short answer)", ""]
            for i, it in enumerate(c["revs"], 1):
                L += [f"**{n}.C{i}** {it['stem']}", "", f"> *Answer:* {it['answer']}", ""]
        L += ["---", ""]
    open("TEST-BANK.md", "w", encoding="utf-8").write("\n".join(L) + "\n")
    return tot_new, tot_kc, tot_rev

# ─────────────────────────────── CSV ───────────────────────────────
def write_csv(chapters):
    rows = []
    for n in sorted(chapters):
        c = chapters[n]
        for i, it in enumerate(c["new"], 1):
            rows.append([f"{n}.A{i}", n, c["title"], "A-summative", "multiple_choice",
                         it["outcome"], it["level"], "No", it["stem"],
                         *[it["options"][j] if j < len(it["options"]) else "" for j in range(4)],
                         LETTERS[it["correct"]], it["rationale"]])
        for i, it in enumerate(c["kcs"], 1):
            rows.append([f"{n}.B{i}", n, c["title"], "B-module-kc", "multiple_choice",
                         "", "Recall", "Yes", it["stem"],
                         *[it["options"][j] if j < len(it["options"]) else "" for j in range(4)],
                         LETTERS[it["correct"]], ""])
        for i, it in enumerate(c["revs"], 1):
            rows.append([f"{n}.C{i}", n, c["title"], "C-review", "short_answer",
                         "", "Comprehension", "Yes", it["stem"], "", "", "", "", "", it["answer"]])
    with open("test-bank.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["item_id", "chapter", "chapter_title", "bank", "type", "acgm_outcome",
                    "level", "seen_by_students", "question",
                    "option_a", "option_b", "option_c", "option_d", "correct", "rationale_or_answer"])
        w.writerows(rows)
    return len(rows)

# ─────────────────────────────── QTI ───────────────────────────────
def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
             .replace('"', "&quot;"))

def qti_item(ident, stem, options, correct):
    resps = "".join(
        f'<response_label ident="opt{j}"><material><mattext texttype="text/html">'
        f'&lt;p&gt;{esc(o)}&lt;/p&gt;</mattext></material></response_label>'
        for j, o in enumerate(options))
    return f'''<item ident="{ident}" title="{esc(stem[:60])}">
  <itemmetadata><qtimetadata>
    <qtimetadatafield><fieldlabel>question_type</fieldlabel><fieldentry>multiple_choice_question</fieldentry></qtimetadatafield>
    <qtimetadatafield><fieldlabel>points_possible</fieldlabel><fieldentry>1</fieldentry></qtimetadatafield>
  </qtimetadata></itemmetadata>
  <presentation>
    <material><mattext texttype="text/html">&lt;p&gt;{esc(stem)}&lt;/p&gt;</mattext></material>
    <response_lid ident="response1" rcardinality="Single">
      <render_choice>{resps}</render_choice>
    </response_lid>
  </presentation>
  <resprocessing>
    <outcomes><decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/></outcomes>
    <respcondition continue="No">
      <conditionvar><varequal respident="response1">opt{correct}</varequal></conditionvar>
      <setvar action="Set" varname="SCORE">100</setvar>
    </respcondition>
  </resprocessing>
</item>'''

def write_qti(chapters):
    if os.path.isdir("qti"):
        shutil.rmtree("qti")
    os.makedirs("qti", exist_ok=True)
    made = []
    banks = [("summative", "new", "Trailblazer Trek — Summative Bank (unseen items)"),
             ("practice", "kcs", "Trailblazer Trek — Practice Bank (module knowledge checks)")]
    for slug, key, title in banks:
        items = []
        for n in sorted(chapters):
            for i, it in enumerate(chapters[n][key], 1):
                ident = f"i{slug}{n}_{i}_{uuid.uuid4().hex[:8]}"
                stem = f"[Ch {n}] {it['stem']}"
                items.append(qti_item(ident, stem, it["options"], it["correct"]))
        bank_id = f"bank_{slug}_{uuid.uuid4().hex[:8]}"
        xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2">
  <objectbank ident="{bank_id}">
    <qtimetadata><qtimetadatafield>
      <fieldlabel>bank_title</fieldlabel><fieldentry>{esc(title)}</fieldentry>
    </qtimetadatafield></qtimetadata>
{"".join(items)}
  </objectbank>
</questestinterop>'''
        manifest = f'''<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="man_{bank_id}" xmlns="http://www.imsglobal.org/xsd/imscp_v1p1"
  xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_v1p2">
  <metadata><schema>IMS Content</schema><schemaversion>1.1.3</schemaversion></metadata>
  <organizations/>
  <resources>
    <resource identifier="res_{bank_id}" type="imsqti_xmlv1p2" href="{slug}.xml">
      <file href="{slug}.xml"/>
    </resource>
  </resources>
</manifest>'''
        path = os.path.join("qti", f"trailblazer-{slug}-qti.zip")
        with zipfile.ZipFile(path, "w", zipfile.ZIP_DEFLATED) as z:
            z.writestr(f"{slug}.xml", xml)
            z.writestr("imsmanifest.xml", manifest)
        made.append((path, len(items)))
    readme = """# QTI packages

Canvas-importable question banks (QTI 1.2).

- `trailblazer-summative-qti.zip` — the Part A items written for assessment.
  Students have **not** seen these in the modules.
- `trailblazer-practice-qti.zip` — the module knowledge checks. Students
  **have** seen these with answers revealed; use for practice, not for secure exams.

## Importing into Canvas

1. Course → **Settings** → **Import Course Content**
2. Content Type: **QTI .zip file**
3. Choose the file, then **Import**
4. The bank appears under **Quizzes → Manage Question Banks**

Each question stem is prefixed with its chapter (for example `[Ch 4]`) so that
you can filter or split the bank by chapter after import. Questions are worth
1 point each by default; adjust in Canvas as needed.

Blackboard, D2L, and Moodle also accept QTI 1.2, though the import path differs.
If your LMS rejects the package, `test-bank.csv` can be reshaped to most
importers' expected column formats.
"""
    open(os.path.join("qti", "README.md"), "w", encoding="utf-8").write(readme)
    return made

if __name__ == "__main__":
    ch = build()
    n_new, n_kc, n_rev = write_md(ch)
    rows = write_csv(ch)
    qti = write_qti(ch)
    print(f"TEST-BANK.md   : {n_new} summative + {n_kc} knowledge checks + {n_rev} review = {n_new+n_kc+n_rev} items")
    print(f"test-bank.csv  : {rows} rows")
    for p, n in qti:
        print(f"{p:44s}: {n} items")
    # integrity checks
    bad = [f"ch{n} has no summative items" for n in sorted(ch) if not ch[n]["new"]]
    for n in sorted(ch):
        for i, it in enumerate(ch[n]["new"], 1):
            if not (0 <= it["correct"] < len(it["options"])):
                bad.append(f"{n}.A{i} bad correct index")
            if len(set(it["options"])) != len(it["options"]):
                bad.append(f"{n}.A{i} duplicate options")
            if len(it["options"]) != 4:
                bad.append(f"{n}.A{i} has {len(it['options'])} options")
    print("INTEGRITY:", "; ".join(bad) if bad else "all checks passed")
