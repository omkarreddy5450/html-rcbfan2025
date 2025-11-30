// --- Mobile nav toggle ---
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// --- Sample squad data ---
const squad = [
  { name: "Virat Kohli", role: "Batsman", country: "India", style: "Right-hand bat" },
  { name: "Phil Salt", role: "Batsman", country: "England", style: "Right-hand bat" },
  { name: "Devdatt paddikal", role: "All-rounder", country: "India", style: "Right-hand bat" },
  { name: "bhuvaneshwar kumar", role: "Bowler", country: "India", style: "Right-arm medium pacer" },
  { name: "Rajat Patidar", role: "Batsman", country: "India", style: "Right-hand bat" },
  { name: "jitesh sharma", role: "Wicket-keeper", country: "India", style: "Right-hand bat" },
  { name: "Tim David", role: "All-rounder", country: "Australia", style: "Right-hand bat / right-arm spin" },
  { name: "Yash Dayal", role: "Bowler", country: "India", style: "Left-arm pacer" },
  { name: "Suyash Sharma", role: "Bowler", country: "India", style: "Right-arm spin" }
];

const squadGrid = document.getElementById("squadGrid");
if (squadGrid) {
  squad.forEach(player => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div class="player-role">${player.role}</div>
      <div class="player-name">${player.name}</div>
      <div class="player-info">
        Country: ${player.country}<br/>
        Style: ${player.style}
      </div>
    `;
    squadGrid.appendChild(card);
  });
}

// --- Sample schedule data ---
const scheduleData = [
  { date: "10 Apr", match: "RCB vs CSK", venue: "Bengaluru", time: "7:30 PM", result: "WIN" },
  { date: "14 Apr", match: "MI vs RCB", venue: "Mumbai", time: "7:30 PM", result: "WIN" },
  { date: "18 Apr", match: "RCB vs KKR", venue: "Bengaluru", time: "3:30 PM", result: "WIN" },
  { date: "22 Apr", match: "SRH vs RCB", venue: "Hyderabad", time: "7:30 PM", result: "WIN" }
];

const scheduleBody = document.getElementById("scheduleBody");
if (scheduleBody) {
  scheduleData.forEach(game => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${game.date}</td>
      <td>${game.match}</td>
      <td>${game.venue}</td>
      <td>${game.time}</td>
      <td><span class="tag">${game.result}</span></td>
    `;
    scheduleBody.appendChild(tr);
  });
}

// Use first fixture as "Next Match" in hero
if (scheduleData.length > 0) {
  const next = scheduleData[0];
  const nextMatchMeta = document.getElementById("nextMatchMeta");
  const nextMatchText = document.getElementById("nextMatchText");

  if (nextMatchMeta) {
    nextMatchMeta.textContent = `${next.match} • ${next.date} • ${next.venue}`;
  }

  if (nextMatchText) {
    nextMatchText.textContent =
      `Next up: ${next.match} at ${next.venue}, ${next.time}. Get your red and gold ready!`;
  }
}

// --- Poll handler ---
const pollForm = document.getElementById("pollForm");
const pollResult = document.getElementById("pollResult");

if (pollForm && pollResult) {
  pollForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const choice = pollForm.player.value;
    if (!choice) {
      alert("Please select a player before voting.");
      return;
    }
    pollResult.style.display = "block";
    pollResult.textContent = `Thanks for voting for ${choice}! 🔥`;
  });
}

// --- Contact form handler ---
const contactForm = document.getElementById("contactForm");
const contactResult = document.getElementById("contactResult");

if (contactForm && contactResult) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    contactResult.style.display = "block";
    contactForm.reset();
  });
}
