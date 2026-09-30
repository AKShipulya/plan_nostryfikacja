# CLAUDE.md — nostrification exam preparation plan

Interactive study plan for a foreign-trained physician preparing for the Polish diploma nostrification exam.
Static site, no build step, deployed via GitHub Pages from the root of `main`.

## Goal and scope

- **Exam.** University nostrification test covering four fields: choroby wewnętrzne, chirurgia, położnictwo i ginekologia,
  pediatria. Reference format — Uniwersytet Zielonogórski: 160 questions in 4 h (≈1.5 min per question). UZ does not publish
  a pass mark; for comparison UM Łódź requires 60%, LEK 56%. Target on simulations: ≥70%.
- **Deadline.** Exam in June 2027. The UI shows week numbers only, no calendar dates.
- **This is not LEK.** LEK fields outside the four subjects (psychiatria, medycyna rodzinna, bioetyka, orzecznictwo,
  zdrowie publiczne) are deliberately excluded. Emergency medicine and oncology are covered inside the four fields.
- **Tool.** The LEPOLEK platform (CEM question bank with explanations). `lepolekPath` is a category hint only —
  it has not been checked against LEPOLEK's real menu (closed SPA).

## Time budget

- Weekday 2.5–3.5 h, Saturday 1.5 h (40-question test + error notebook), Sunday off.
- ~15 h per week, up to 17 h when a topic is heavy (the hard cap `tools/check.js` enforces).
- Exceptions to the weekday range live only in the review block: a full simulation day (160 questions) is 4.5 h, the exam day 4 h,
  and short 2 h / 1 h / 0.5 h days in the simulation and final weeks.
- The daily routine is shown in the page header: Anki → theory → ~30 questions + review → notes and Polish terms.
  Pick a day's time by topic size: 2.5 h — four narrow subtopics; 3 h — a large topic; 3.5 h — rarely.

## Plan structure

| Block (`data/*.js`) | Weeks | Content |
|---|---|---|
| `interna` | 1–9 | 1–5 first pass; 6–9 cardiology II, pulmonology II and infections, nephrology/hepatology/hemostasis, endocrinology II and rheumatology III |
| `chirurgia` | 10–15 | 10–12 first pass; 13–15 trauma, organ surgery and perioperative care, oncology/orthopedics/pediatric surgery II |
| `ginekologia` | 16–21 | 16–17 first pass; 18–19 obstetrics II–III; 20–21 gynecology II–III |
| `pediatria` | 22–27 | 22–23 first pass (week 23 got 3 study days + a Saturday test); 24–27 GI/neonatology/hemato-oncology, endocrinology/neurology, allergy/genetics/nutrition, emergencies |
| `powtorka` | 28–32 | condensed review per field, three 160-question simulations, a mini-simulation, final week |

Week numbers are not stored in the data: `js/app.js` numbers weeks sequentially in `BLOCK_ORDER`.
Inserting a week mid-block shifts the numbers of later weeks; that is expected.

## Architecture

```
index.html        markup and script tags
css/style.css     styles
js/app.js         plan assembly, rendering, localStorage, Pomodoro
data/<block>.js   registerPlanBlock('<block>', [weeks…])
tools/check.js    data sanity check (node, no dependencies) — not loaded by the page
.nojekyll         GitHub Pages serves files as-is
```

- **Classic `<script>` tags — no ES modules, no `fetch`.** The page must also open from disk via `file://`, where modules and
  `fetch` are blocked. `js/app.js` loads first, data files after it; assembly runs on `DOMContentLoaded`.
- **Relative paths only.** The site lives under `<user>.github.io/plan_nostryfikacja/`; a leading `/` breaks it.
- **No build, no dependencies.** To add a block: a file in `data/`, a `<script>` tag in `index.html`, an entry in `BLOCK_ORDER` and `SUBJECTS`.
  A block missing at runtime or registered under an unknown name shows a red banner and a console error instead of silently shrinking the plan.
- **Storage failures are non-fatal.** Reads go through an in-memory copy; with localStorage blocked the page works for the current visit.

## Data model

```js
registerPlanBlock('interna', [
  {
    key: 'int-6',                 // stable week key: DOM id and collapsed state; [a-z0-9-] only
    subject: 'interna',           // interna | chirurgia | ginekologia | pediatria | powtorka
    title: 'Терапия VI — …',      // no "Неделя N:" prefix — app.js adds the number
    days: [
      {
        id: 'int-ekg',            // localStorage key for progress and notes — NEVER CHANGE; [A-Za-z0-9_-] only (used in inline onclick)
        title: 'Пн: …',
        time: '3 ч',              // "<number> ч", e.g. "2.5 ч", "3 ч", "1.5 ч"; weekly hours are summed from it
        lepolekPath: 'Baza Pytań -> Choroby wewnętrzne -> …',
        popup: { what: '…', focus: '…', reading: '…' },   // day ℹ️: scope, CEM emphasis, sources
        subtopics: [ { title, what, where, study, focus } ] // chips: definition, where to read, what to learn, CEM trap
      }
    ]
  }
]);
```

## localStorage — backward compatibility

| Key | Value | Rule |
|---|---|---|
| `nostryfikacja_progress_4p` | `{ [day.id]: true }` | never change or reuse an existing day id for a different topic |
| `nostryfikacja_notes_4p` | `{ [day.id]: "text" }` | same |
| `nostryfikacja_collapsed_4p` | `{ [week.key]: bool }` | cosmetic; legacy numeric keys are ignored |

Days from the original 12-week plan kept their ids even when moved to another week: `w12d3` (first simulation) and `w12d4`
(its review) now sit in week 28. `w12d5` (simulation part 2) and `w12d6` (cycle-1 summary) are retired — their topics no longer
exist, and reusing the ids would mark unrelated days as done. New days get descriptive ids (`int-ekg`, `gin-polog`).
To replace a day's topic entirely, add a new day with a new id instead of rewriting the old one — otherwise a "done" checkmark
silently transfers to material that was never studied.

## Content rules

- **Language — Polish first.** CEM questions are in Polish, so every medical term must be recognisable in its Polish form.
  - Subtopic chip `title`: Polish name first, short Russian gloss in parentheses — «Gruźlica płuc (туберкулёз лёгких)»,
    «Leki I rzutu: ACEI/sartany + CCB/diuretyki (препараты 1-й линии)».
  - Inside `what`/`where`/`study`/`focus` and the day `popup`: explanatory prose stays Russian, but diseases, signs, drugs (Polish INN
    spelling: amlodypina, ramipryl, metformina), drug classes, abbreviations, scales, tests and procedures are written in Polish with a
    Russian gloss at the first mention in that subtopic — «Metformina (метформин) отменяют…», «NLPZ (НПВП)», «USG (УЗИ)».
  - Day and week titles keep the «Русский (Polski)» form.
  - Never invent a Polish word or abbreviation; if unsure, use the international/Latin form plus the Russian gloss.
- **Polish abbreviations** where Poland has its own: OZW (not ACS/ОКС), POChP, ZUM, RZS, PChN, NT, ZŻG, ŻChZZ, HDCz, wGKS, NLPZ,
  IPP, ChLC, WZJG, WZW, OZT, ZMO, DPN, NOP, BTA. Societies: PTK, PTD, PTGiP (not PTGP), PTNT, PTL, PTP, PTG-E, PTGHiŻD, PTN.
- **Sources** in `where`: Szczeklik (Interna / Mały Szczeklik), Noszczyk «Chirurgia», Bręborowicz «Położnictwo i ginekologia»,
  «Pediatria» (Kawalec / Dobrzańska), «LEK w pigułce», Polish society guidelines, standard opieki okołoporodowej, PSO (Komunikat GIS).
- **Changed guidelines** are given in both versions — current and the one found in older CEM questions
  (CHA₂DS₂-VA vs VASc, cardioversion threshold 24 vs 48 h, laparoscopy for endometriosis). The CEM bank goes back to 2005.
- **Polish programmes** (screening, PSO, bilanse, perinatal care standard, HPV vaccination) change yearly. If an exact age or
  interval is unverified, the text carries «(сверить с актуальной версией …)». A flag beats a confident error.
- **Day shape:** 4–5 subtopics on a study day (review days may have up to 6), 3 on a Saturday test; every subtopic has all
  four fields; `focus` names a typical CEM trap.
- **Plain text only.** All data fields are HTML-escaped at render time, so `<`, `>` and `&` are safe to write as-is; markup is not rendered.

## Before committing

1. `node tools/check.js` — ids unique and well-formed, legacy ids kept (retired ones stay retired), required fields present,
   `time` format, weekly hours ≤17, no mixed Latin/Cyrillic words.
2. Open the page locally (`open index.html`): filter, checkboxes, notes and popups work; no red banner at the top
   (it appears when a data file fails to load).
3. On any change to css/js/data, bump `?v=` on every `<link>`/`<script>` in `index.html` — GitHub Pages caches for ~10 min
   and a browser could otherwise mix a new `app.js` with old data.
