/* Plan assembly: data/*.js register their weeks here; order and numbering are set by BLOCK_ORDER. */
const BLOCK_ORDER = ['interna', 'chirurgia', 'ginekologia', 'pediatria', 'powtorka'];

const SUBJECTS = {
    interna:     { tag: 'INTERNA',     label: 'Choroby wewnętrzne (Терапия)' },
    chirurgia:   { tag: 'CHIRURGIA',   label: 'Chirurgia (Хирургия)' },
    ginekologia: { tag: 'GINEKOLOGIA', label: 'Położnictwo i ginekologia' },
    pediatria:   { tag: 'PEDIATRIA',   label: 'Pediatria (Педиатрия)' },
    powtorka:    { tag: 'POWTÓRKA',    label: 'Powtórka i symulacje (Повторение)' }
};

const planBlocks = {};
let planData = [];
const planProblems = [];

function registerPlanBlock(name, weeks) {
    if (!BLOCK_ORDER.includes(name)) planProblems.push(`блок «${name}» не указан в BLOCK_ORDER и не показан`);
    planBlocks[name] = weeks;
}

function buildPlan() {
    planData = [];
    BLOCK_ORDER.forEach(name => {
        if (!planBlocks[name]) planProblems.push(`не загрузился файл data/${name}.js — часть плана не показана`);
        (planBlocks[name] || []).forEach(week => {
            planData.push({ ...week, week: planData.length + 1 });
        });
    });
}

function renderProblems() {
    if (!planProblems.length) return;
    planProblems.forEach(p => console.error(p));
    const banner = document.getElementById('planProblems');
    banner.innerHTML = '⚠️ ' + planProblems.map(escapeHtml).join('<br>⚠️ ');
    banner.style.display = 'block';
}

function subjectInfo(subject) {
    return SUBJECTS[subject] || { tag: String(subject).toUpperCase(), label: String(subject) };
}

// 1 неделя, 2–4 недели, 5+ недель (11–14 — недель)
function pluralWeeks(n) {
    const mod10 = n % 10, mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return `${n} неделя`;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} недели`;
    return `${n} недель`;
}

function parseHours(time) {
    return parseFloat(String(time).replace(',', '.')) || 0;
}

function formatHours(hours) {
    return String(Math.round(hours * 10) / 10).replace('.', ',');
}

function weekHours(week) {
    return week.days.reduce((sum, d) => sum + parseHours(d.time), 0);
}

function escapeHtml(text) {
    return String(text == null ? '' : text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/* Storage. Keys and value shapes are unchanged from the single-file version: progress and notes are keyed by day.id.
   Reads go through an in-memory copy, so the page keeps working for the current visit when localStorage is blocked. */
const storeCache = {};

function readStore(key) {
    if (!(key in storeCache)) {
        try { storeCache[key] = JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { storeCache[key] = {}; }
    }
    return { ...storeCache[key] };
}

function writeStore(key, value) {
    storeCache[key] = { ...value };
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable: state lives for this visit only */ }
}

function loadProgress() { return readStore('nostryfikacja_progress_4p'); }
function loadNotes() { return readStore('nostryfikacja_notes_4p'); }
function loadCollapsedState() { return readStore('nostryfikacja_collapsed_4p'); }

function saveProgress(id, isChecked) {
    const progress = loadProgress();
    progress[id] = isChecked;
    writeStore('nostryfikacja_progress_4p', progress);
    updateProgressBar();
}

function saveNote(id, text) {
    const notes = loadNotes();
    notes[id] = text;
    writeStore('nostryfikacja_notes_4p', notes);
    renderPlan();
}

// Collapse state is keyed by week.key: week numbers shift when weeks are inserted.
function saveCollapsedState(weekKey, isCollapsed) {
    const state = loadCollapsedState();
    state[weekKey] = isCollapsed;
    writeStore('nostryfikacja_collapsed_4p', state);
}

function renderHeader() {
    const counts = {};
    let totalHours = 0;
    planData.forEach(w => {
        counts[w.subject] = (counts[w.subject] || 0) + 1;
        totalHours += weekHours(w);
    });

    document.getElementById('planSummary').innerHTML =
        `<strong>${pluralWeeks(planData.length)}, около ${Math.round(totalHours)} ч:</strong> ` +
        BLOCK_ORDER.filter(s => counts[s]).map(s => `${escapeHtml(subjectInfo(s).label)} — ${counts[s]} нед`).join(' | ');

    const select = document.getElementById('subjectFilter');
    const current = select.value || 'all';
    select.innerHTML = `<option value="all">Все предметы (${pluralWeeks(planData.length)})</option>` +
        BLOCK_ORDER.filter(s => counts[s]).map(s => `<option value="${s}">${escapeHtml(subjectInfo(s).label)} — ${counts[s]} нед</option>`).join('');
    select.value = current;
}

function renderPlan() {
    const container = document.getElementById('planContainer');
    const filter = document.getElementById('subjectFilter').value;
    const progress = loadProgress();
    const notes = loadNotes();
    const collapsedState = loadCollapsedState();

    container.innerHTML = '';

    planData.forEach(week => {
        if (filter !== 'all' && week.subject !== filter) return;

        const isWeekCompleted = week.days.every(d => !!progress[d.id]);
        const isCollapsed = !!collapsedState[week.key];

        const weekCard = document.createElement('div');
        weekCard.className = `week-card ${isWeekCompleted ? 'week-completed' : ''} ${isCollapsed ? 'collapsed' : ''}`;
        weekCard.id = `week-card-${week.key}`;

        let daysHtml = '';
        week.days.forEach(day => {
            const popup = day.popup || {};
            const isChecked = !!progress[day.id];
            const noteText = notes[day.id] || '';
            const hasNote = noteText.trim().length > 0;

            let subtopicsHtml = '';
            if (day.subtopics && day.subtopics.length > 0) {
                subtopicsHtml = '<div class="subtopics-list">' +
                    day.subtopics.map((s, idx) => {
                        return `
                        <div class="subtopic-chip" onclick="toggleSubtopicPopup(event, 'subpop-${day.id}-${idx}')">
                            ${escapeHtml(s.title)}
                            <div class="subtopic-popup" id="subpop-${day.id}-${idx}">
                                <div class="pop-title">💡 ${escapeHtml(s.title)}</div>
                                <div class="pop-item"><strong>Что это значит:</strong> ${escapeHtml(s.what)}</div>
                                <div class="pop-item"><strong>Куда смотреть:</strong> ${escapeHtml(s.where)}</div>
                                <div class="pop-item"><strong>Что изучать:</strong> ${escapeHtml(s.study)}</div>
                                <div class="pop-item"><strong>Обратить внимание:</strong> ${escapeHtml(s.focus)}</div>
                            </div>
                        </div>`;
                    }).join('') +
                    '</div>';
            }

            daysHtml += `
                <div class="day-item ${isChecked ? 'completed' : ''}" id="item-${day.id}">
                    <input type="checkbox" class="checkbox-custom" id="check-${day.id}" ${isChecked ? 'checked' : ''} onchange="toggleDay('${day.id}', '${week.key}')">

                    <div>
                        <div class="day-header-line">
                            <span class="day-title">${escapeHtml(day.title)}</span>
                            <span class="day-time">(${escapeHtml(day.time)})</span>

                            <div class="info-pop-trigger" onclick="toggleMainPopup(event, 'pop-${day.id}')">
                                ℹ️
                                <div class="popup-card" id="pop-${day.id}">
                                    <div class="popup-title">🎯 Раздел High-Yield</div>
                                    <div class="popup-section"><strong>Что изучает:</strong> ${escapeHtml(popup.what)}</div>
                                    <div class="popup-section"><strong>Акцент CEM:</strong> ${escapeHtml(popup.focus)}</div>
                                    <div class="popup-section"><strong>Источники:</strong> ${escapeHtml(popup.reading)}</div>
                                </div>
                            </div>
                        </div>

                        ${subtopicsHtml}

                        <div class="day-lepolek">📍 ${escapeHtml(day.lepolekPath)}</div>

                        <div class="notes-wrapper">
                            <button class="note-toggle-btn ${hasNote ? 'has-note' : ''}" onclick="toggleNoteInput('${day.id}')">
                                ${hasNote ? '📝 Заметка [Заполнена]' : '📝 + Добавить заметку'}
                            </button>

                            <div class="note-input-container" id="note-box-${day.id}">
                                <textarea class="note-textarea" id="note-text-${day.id}" placeholder="Запишите дозировки или сложные моменты...">${escapeHtml(noteText)}</textarea>
                                <div class="note-actions">
                                    <button class="btn btn-sm btn-outline" onclick="toggleNoteInput('${day.id}')">Отмена</button>
                                    <button class="btn btn-sm btn-success" onclick="submitNote('${day.id}')">Сохранить</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        weekCard.innerHTML = `
            <div class="week-header" onclick="toggleWeekCollapse('${week.key}')">
                <div class="week-title-box">
                    <span class="toggle-arrow">▼</span>
                    <span class="week-title">Неделя ${week.week}: ${escapeHtml(week.title)}</span>
                    <span class="week-check-icon">✅</span>
                </div>
                <div class="week-meta">
                    <span class="week-hours">${formatHours(weekHours(week))} ч</span>
                    <span class="tag">${escapeHtml(subjectInfo(week.subject).tag)}</span>
                </div>
            </div>
            <div class="day-list">
                ${daysHtml}
            </div>
        `;

        container.appendChild(weekCard);
    });

    updateProgressBar();
}

function toggleDay(id, weekKey) {
    const checkbox = document.getElementById(`check-${id}`);
    const item = document.getElementById(`item-${id}`);
    if (checkbox.checked) {
        item.classList.add('completed');
    } else {
        item.classList.remove('completed');
    }
    saveProgress(id, checkbox.checked);
    updateWeekCompletionStatus(weekKey);
}

function updateWeekCompletionStatus(weekKey) {
    const week = planData.find(w => w.key === weekKey);
    if (!week) return;

    const progress = loadProgress();
    const isCompleted = week.days.every(d => !!progress[d.id]);
    const card = document.getElementById(`week-card-${weekKey}`);

    if (card) {
        if (isCompleted) card.classList.add('week-completed');
        else card.classList.remove('week-completed');
    }
}

function toggleWeekCollapse(weekKey) {
    const card = document.getElementById(`week-card-${weekKey}`);
    if (!card) return;
    const isNowCollapsed = card.classList.toggle('collapsed');
    saveCollapsedState(weekKey, isNowCollapsed);
}

function setAllWeeksCollapsed(isCollapsed) {
    const state = loadCollapsedState();
    planData.forEach(week => {
        const card = document.getElementById(`week-card-${week.key}`);
        if (card) {
            card.classList.toggle('collapsed', isCollapsed);
            state[week.key] = isCollapsed;
        }
    });
    writeStore('nostryfikacja_collapsed_4p', state);
}

function collapseAllWeeks() { setAllWeeksCollapsed(true); }
function expandAllWeeks() { setAllWeeksCollapsed(false); }

function toggleNoteInput(id) {
    const box = document.getElementById(`note-box-${id}`);
    box.style.display = (box.style.display === 'block') ? 'none' : 'block';
}

function submitNote(id) {
    const text = document.getElementById(`note-text-${id}`).value;
    saveNote(id, text);
}

// Clicks inside an open popup (reading, selecting text) must not toggle it closed.
function isInsidePopup(e) {
    return !!e.target.closest('.popup-card, .subtopic-popup');
}

function toggleMainPopup(e, popId) {
    e.stopPropagation();
    if (isInsidePopup(e)) return;
    const popup = document.getElementById(popId);
    const isAlreadyActive = popup && popup.classList.contains('active');
    closeAllPopups();
    if (popup && !isAlreadyActive) popup.classList.add('active');
}

function toggleSubtopicPopup(e, popId) {
    e.stopPropagation();
    if (isInsidePopup(e)) return;
    const chip = e.currentTarget;
    const isAlreadyActive = chip.classList.contains('pop-active');

    closeAllPopups();

    if (!isAlreadyActive) {
        chip.classList.add('pop-active');
    }
}

function closeAllPopups() {
    document.querySelectorAll('.popup-card').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.subtopic-chip').forEach(c => c.classList.remove('pop-active'));
}

document.addEventListener('click', () => {
    closeAllPopups();
});

function updateProgressBar() {
    const progress = loadProgress();
    let totalDays = 0;
    let completedDays = 0;

    planData.forEach(week => {
        week.days.forEach(day => {
            totalDays++;
            if (progress[day.id]) completedDays++;
        });
    });

    const percentage = Math.round((completedDays / totalDays) * 100) || 0;
    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('progressText').innerText = `${percentage}% выполнено (${completedDays}/${totalDays} дней)`;
}

function filterWeeks() { renderPlan(); }

function resetProgress() {
    if (confirm("Вы уверены, что хотите сбросить прогресс и заметки?")) {
        try {
            localStorage.removeItem('nostryfikacja_progress_4p');
            localStorage.removeItem('nostryfikacja_notes_4p');
            localStorage.removeItem('nostryfikacja_collapsed_4p');
        } catch (e) { /* storage unavailable */ }
        renderPlan();
    }
}

/* Audio & Pomodoro Engine */
let audioCtx = null;
let titleFlashInterval = null;
const originalTitle = document.title;

function initAudioContext() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function requestNotificationPermission() {
    if ("Notification" in window && Notification.permission === "default") Notification.requestPermission();
}

function playLoudAlarmSound() {
    initAudioContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const pulses = [0.0, 0.15, 0.5, 0.65, 1.0, 1.15, 1.5, 1.65, 2.0, 2.15];

    pulses.forEach(startTime => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(987.77, now + startTime);
        osc.frequency.setValueAtTime(1318.51, now + startTime + 0.05);
        gain.gain.setValueAtTime(0, now + startTime);
        gain.gain.linearRampToValueAtTime(0.4, now + startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + startTime + 0.12);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + startTime);
        osc.stop(now + startTime + 0.12);
    });
}

function testAlarmSound() { initAudioContext(); playLoudAlarmSound(); }

function startTitleFlashing() {
    stopTitleFlashing();
    let flag = false;
    titleFlashInterval = setInterval(() => {
        document.title = flag ? "⏰ ВРЕМЯ ИСТЕКЛО!" : "🔔 Pomodoro";
        flag = !flag;
    }, 700);
}

function stopTitleFlashing() {
    if (titleFlashInterval) { clearInterval(titleFlashInterval); titleFlashInterval = null; }
    document.title = originalTitle;
}

function sendDesktopNotification(message) {
    if ("Notification" in window && Notification.permission === "granted") {
        new Notification("Pomodoro Будильник", { body: message });
    }
}

let pomoSeconds = 45 * 60;
let pomoInterval = null;
let isPomoRunning = false;

function updatePomoDisplay() {
    const mins = Math.floor(pomoSeconds / 60);
    const secs = pomoSeconds % 60;
    document.getElementById('pomoDisplay').innerText =
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function togglePomodoro() {
    initAudioContext();
    requestNotificationPermission();
    stopTitleFlashing();

    const startBtn = document.getElementById('pomoStartBtn');
    if (isPomoRunning) {
        clearInterval(pomoInterval);
        isPomoRunning = false;
        startBtn.innerText = 'Старт';
        startBtn.classList.remove('btn-success');
    } else {
        isPomoRunning = true;
        startBtn.innerText = 'Пауза';
        startBtn.classList.add('btn-success');

        pomoInterval = setInterval(() => {
            if (pomoSeconds > 0) {
                pomoSeconds--;
                updatePomoDisplay();
            } else {
                clearInterval(pomoInterval);
                isPomoRunning = false;
                startBtn.innerText = 'Старт';
                startBtn.classList.remove('btn-success');
                playLoudAlarmSound();
                startTitleFlashing();
                sendDesktopNotification("Время блока истекло! Сделайте перерыв.");
            }
        }, 1000);
    }
}

function resetPomodoro() {
    clearInterval(pomoInterval);
    isPomoRunning = false;
    pomoSeconds = 45 * 60;
    stopTitleFlashing();
    document.getElementById('pomoStatus').innerText = 'Учеба (Блок 45 мин)';
    document.getElementById('pomoStartBtn').innerText = 'Старт';
    document.getElementById('pomoStartBtn').classList.remove('btn-success');
    updatePomoDisplay();
}

function setPomoMode(minutes, statusText) {
    initAudioContext();
    requestNotificationPermission();
    clearInterval(pomoInterval);
    isPomoRunning = false;
    pomoSeconds = minutes * 60;
    stopTitleFlashing();
    document.getElementById('pomoStatus').innerText = statusText;
    document.getElementById('pomoStartBtn').innerText = 'Старт';
    document.getElementById('pomoStartBtn').classList.remove('btn-success');
    updatePomoDisplay();
}

// Data scripts are classic <script> tags after this file, so they have all run by DOMContentLoaded.
document.addEventListener('DOMContentLoaded', () => {
    buildPlan();
    renderProblems();
    renderHeader();
    renderPlan();
    updatePomoDisplay();
});
