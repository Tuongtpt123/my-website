let questions = [];
let currentIndex = 0;
let currentFile = null;
let userAnswers = {}; // lưu đáp án người dùng

const SITE_UPDATED_AT = new Date("2025-12-28T17:15:00"); // Cập nhật lần cuối

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices");
const questionGrid = document.getElementById("question-grid");

/* ================== UPDATE NOTICE ================== */
function checkUpdateNotice() {
    const lastVisit = localStorage.getItem("lastVisitTime");
    const now = new Date();

    if (!lastVisit) {
        showUpdateDialog(true);
    } else if (new Date(lastVisit) < SITE_UPDATED_AT) {
        showUpdateDialog(false);
    }

    localStorage.setItem("lastVisitTime", now.toISOString());
}

async function loadChangeLog() {
    try {
        const res = await fetch("changelog.txt");
        if (!res.ok) throw new Error("Không đọc được changelog");
        return await res.text();
    } catch {
        return "Không thể tải nội dung cập nhật.";
    }
}

async function showUpdateDialog(isFirstTime) {
    const modal = document.getElementById("update-modal");
    const titleEl = document.getElementById("modal-title");
    const bodyEl = document.getElementById("modal-body");

    titleEl.textContent = isFirstTime
        ? "Chào mừng bạn lần đầu sử dụng 🎉"
        : "Website đã được cập nhật 🔔";

    bodyEl.textContent = await loadChangeLog();

    modal.classList.remove("hidden");
}

document.getElementById("close-modal").onclick = () => {
    document.getElementById("update-modal").classList.add("hidden");
};
checkUpdateNotice();

/* ================== UTIL ================== */
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function shuffleChoices(question) {
    const entries = Object.entries(question.choices);
    shuffleArray(entries);

    const newChoices = {};
    let newAnswer = "";

    entries.forEach(([key, value], index) => {
        const newKey = String.fromCharCode(65 + index); // A B C D
        newChoices[newKey] = value;
        if (key === question.answer) newAnswer = newKey;
    });

    question.choices = newChoices;
    question.answer = newAnswer;
}

/* ================== LOAD QUESTIONS ================== */
async function loadQuestions(file) {
    currentFile = file;
    userAnswers = {};

    const res = await fetch(file);
    const text = await res.text();

    const jsonText = text
        .replace(/^const\s+questions\s*=\s*/, "")
        .replace(/;$/, "");

    try {
        questions = JSON.parse(jsonText);
    } catch (err) {
        alert("Không thể đọc file " + file);
        return;
    }

    currentIndex = 0;
    renderGrid();
    renderQuestion();
}

/* ================== RENDER ================== */
function renderQuestion() {
    const q = questions[currentIndex];
    if (!q) return;

    questionNumber.textContent = `Câu ${q.id}/${questions.length}`;
    questionText.innerHTML = `<strong>${q.text}</strong>`;
    choicesContainer.innerHTML = "";

    for (const [key, value] of Object.entries(q.choices)) {
        const btn = document.createElement("button");
        btn.textContent = `${key}. ${value}`;
        btn.className = "choice-btn";

        if (userAnswers[q.id]) {
            btn.disabled = true;
            if (key === q.answer) btn.classList.add("correct");
            if (key === userAnswers[q.id] && key !== q.answer) btn.classList.add("incorrect");
        }

        btn.onclick = () => handleAnswer(q, key, btn);
        choicesContainer.appendChild(btn);
    }
}

function handleAnswer(q, key, btn) {
    if (userAnswers[q.id]) return;

    userAnswers[q.id] = key;

    const all = choicesContainer.querySelectorAll("button");
    all.forEach(b => b.disabled = true);

    const gridBtn = document.querySelectorAll(".grid-btn")[currentIndex];
    gridBtn.classList.remove("answered", "wrong");

    if (key === q.answer) {
        btn.classList.add("correct");
        gridBtn.classList.add("answered");
    } else {
        btn.classList.add("incorrect");
        gridBtn.classList.add("wrong");
        [...all].find(b => b.textContent.startsWith(q.answer + "."))
            ?.classList.add("correct");
    }
}

function renderGrid() {
    questionGrid.innerHTML = "";
    questions.forEach((q, i) => {
        const btn = document.createElement("button");
        btn.textContent = q.id;
        btn.className = "grid-btn";
        btn.onclick = () => {
            currentIndex = i;
            renderQuestion();
        };
        questionGrid.appendChild(btn);
    });
}

/* ================== NAV ================== */
document.getElementById("next-btn").onclick = () => {
    if (currentIndex < questions.length - 1) currentIndex++;
    renderQuestion();
};

document.getElementById("prev-btn").onclick = () => {
    if (currentIndex > 0) currentIndex--;
    renderQuestion();
};

/* ================== SHUFFLE ================== */
document.getElementById("shuffle-btn").onclick = () => {
    shuffleArray(questions);
    questions.forEach(q => shuffleChoices(q));

    userAnswers = {};
    currentIndex = 0;
    renderGrid();
    renderQuestion();
};

/* ================== CLEAR PROGRESS ================== */
document.getElementById("clear-progress-btn").onclick = () => {
    const ok = confirm("Bạn có chắc chắn muốn xóa toàn bộ tiến độ?");
    if (!ok) return;

    userAnswers = {};
    document.querySelectorAll(".grid-btn")
        .forEach(b => b.classList.remove("answered", "wrong"));
    renderQuestion();
};

/* ================== BEFORE UNLOAD ================== */
window.addEventListener("beforeunload", (e) => {
    if (Object.keys(userAnswers).length === 0) return;
    e.preventDefault();
    e.returnValue = "";
});

/* ================== TABS ================== */
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        loadQuestions(btn.dataset.file);
    };
});

/* ================== INIT ================== */
loadQuestions("questions1.js");
