// Data sanity check. Run before committing: node tools/check.js
// Loads data/*.js the way the browser does (classic scripts calling registerPlanBlock) and validates the invariants from CLAUDE.md.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const BLOCKS = ['interna', 'chirurgia', 'ginekologia', 'pediatria', 'powtorka'];
const MAX_WEEK_HOURS = 17;

// Every id of the original 12-week plan must stay, except ones retired on purpose (their old topic no longer exists).
const LEGACY_IDS = [];
for (let w = 1; w <= 12; w++) for (let d = 1; d <= 6; d++) LEGACY_IDS.push(`w${w}d${d}`);
const RETIRED_IDS = ['w12d5', 'w12d6'];

const blocks = {};
const sandbox = { registerPlanBlock: (name, weeks) => { blocks[name] = weeks; } };
vm.createContext(sandbox);
for (const name of BLOCKS) {
    vm.runInContext(fs.readFileSync(path.join(ROOT, 'data', `${name}.js`), 'utf8'), sandbox, { filename: `data/${name}.js` });
}

const errors = [];
const ids = new Map();
const keys = new Set();
const hours = t => parseFloat(String(t).replace(',', '.'));
let weekNo = 0, totalHours = 0, dayCount = 0;

for (const name of BLOCKS) {
    if (!blocks[name]) { errors.push(`data/${name}.js did not register a block`); continue; }
    for (const week of blocks[name]) {
        weekNo++;
        const where = `week ${weekNo} (${week.key})`;
        if (!/^[a-z0-9-]+$/.test(week.key || '')) errors.push(`${where}: key must match [a-z0-9-]`);
        if (keys.has(week.key)) errors.push(`${where}: duplicate key`);
        keys.add(week.key);
        if (week.subject !== name) errors.push(`${where}: subject "${week.subject}" != block "${name}"`);
        if (/^Неделя \d/.test(week.title)) errors.push(`${where}: title must not carry "Неделя N"`);

        const sum = week.days.reduce((s, d) => s + hours(d.time), 0);
        if (!(sum <= MAX_WEEK_HOURS)) errors.push(`${where}: ${sum} h > ${MAX_WEEK_HOURS} h`);
        totalHours += sum;

        for (const day of week.days) {
            dayCount++;
            const at = `${where} / ${day.id}`;
            // ids go into inline onclick handlers and DOM ids
            if (!/^[A-Za-z0-9_-]+$/.test(day.id || '')) errors.push(`${at}: id must match [A-Za-z0-9_-]`);
            if (ids.has(day.id)) errors.push(`${at}: duplicate id (also in ${ids.get(day.id)})`);
            ids.set(day.id, where);
            if (!/^\d+(\.\d)? ч$/.test(day.time)) errors.push(`${at}: time "${day.time}" must look like "2.5 ч"`);
            for (const f of ['title', 'lepolekPath']) if (!day[f]) errors.push(`${at}: missing ${f}`);
            for (const f of ['what', 'focus', 'reading']) if (!day.popup || !day.popup[f]) errors.push(`${at}: missing popup.${f}`);
            if (!day.subtopics || day.subtopics.length < 3) errors.push(`${at}: needs ≥3 subtopics`);
            (day.subtopics || []).forEach((s, i) => {
                for (const f of ['title', 'what', 'where', 'study', 'focus']) if (!s[f]) errors.push(`${at} [${i}]: missing ${f}`);
            });
        }
    }
}

for (const id of LEGACY_IDS) {
    if (!ids.has(id) && !RETIRED_IDS.includes(id)) errors.push(`legacy id ${id} disappeared — users' progress for it is lost`);
    if (ids.has(id) && RETIRED_IDS.includes(id)) errors.push(`retired id ${id} is back — it would inherit an old checkmark`);
}

const text = JSON.stringify(blocks);
const mixed = [...new Set(text.match(/[A-Za-ząćęłńóśźż]+[А-Яа-яё]+|[А-Яа-яё]+[A-Za-ząćęłńóśźż]+/g) || [])];
if (mixed.length) errors.push(`words mixing Latin and Cyrillic: ${mixed.join(', ')}`);

if (errors.length) {
    console.error(errors.map(e => '✗ ' + e).join('\n'));
    process.exit(1);
}
console.log(`✓ ${weekNo} weeks, ${dayCount} days, ${Math.round(totalHours)} h — all checks passed`);
