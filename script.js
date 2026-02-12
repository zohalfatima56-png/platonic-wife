const noBtn = document.getElementById("noBtn");
const finalCard = document.getElementById("finalCard");
const music = document.getElementById("birthdayMusic");

// Make "No" button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function startChaos() {
  document.getElementById("mainTitle").innerText = "HAHA YOU CANT ESCAPE 😈";
  document.getElementById("subText").innerText = "Accept your old age with grace 💅";

  createConfetti();

  setTimeout(() => {
    document.body.classList.add("fade-bg");
    finalCard.style.display = "block";
    music.play();
  }, 2000);
}

function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = randomColor();
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(confetti);
  }
}

function randomColor() {
  const colors = ["#ff66b2", "#ff99cc", "#ffcce6", "#ff4da6"];
  return colors[Math.floor(Math.random() * colors.length)];
}