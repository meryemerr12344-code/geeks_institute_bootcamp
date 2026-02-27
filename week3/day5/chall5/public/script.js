const emojiEl = document.getElementById("emoji");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const leaderboardEl = document.getElementById("leaderboard");

let currentOptions = [];

/* ======================
   Load Question
====================== */
async function loadQuestion() {
    const res = await fetch("/api/question");
    const data = await res.json();

    emojiEl.textContent = data.emoji;
    optionsEl.innerHTML = "";

    currentOptions = data.options;

    data.options.forEach(option => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="guess" value="${option}" required>
            ${option}
        `;
        optionsEl.appendChild(label);
        optionsEl.appendChild(document.createElement("br"));
    });
}

/* ======================
   Submit Guess
====================== */
document.getElementById("gameForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const guess = document.querySelector('input[name="guess"]:checked').value;

    const res = await fetch("/api/guess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guess })
    });

    const data = await res.json();

    feedbackEl.textContent = data.correct ? "✅ Correct!" : "❌ Wrong!";
    scoreEl.textContent = data.score;

    loadQuestion();
});

/* ======================
   Save Score
====================== */
document.getElementById("saveScore").addEventListener("click", async () => {
    const username = document.getElementById("username").value;

    const res = await fetch("/api/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username })
    });

    const leaderboard = await res.json();
    displayLeaderboard(leaderboard);
});

/* ======================
   Leaderboard
====================== */
async function loadLeaderboard() {
    const res = await fetch("/api/leaderboard");
    const data = await res.json();
    displayLeaderboard(data);
}

function displayLeaderboard(data) {
    leaderboardEl.innerHTML = "";
    data.forEach(player => {
        const li = document.createElement("li");
        li.textContent = `${player.username} - ${player.score}`;
        leaderboardEl.appendChild(li);
    });
}

loadQuestion();
loadLeaderboard();