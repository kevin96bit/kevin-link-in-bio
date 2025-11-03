const container = document.getElementById("drip-container");

const colors = [
  "rgba(99, 102, 241, 0.5)",  
  "rgba(129, 140, 248, 0.4)", 
  "rgba(147, 51, 234, 0.35)", 
  "rgba(56, 189, 248, 0.35)"  
];

for (let i = 0; i < 50; i++) {
  const drop = document.createElement("div");
  drop.classList.add("drip");

  // Colore casuale
  drop.style.background = colors[Math.floor(Math.random() * colors.length)];

  // Dimensioni casuali
  const size = Math.random() * 5 + 3;
  drop.style.width = size + "px";
  drop.style.height = size + "px";

  // Direzioni casuali (entra/esce da punti random)
  const startX = (Math.random() * 120 - 10) + "vw";
  const startY = (Math.random() * 120 - 10) + "vh";
  const endX = (Math.random() * 120 - 10) + "vw";
  const endY = (Math.random() * 120 - 10) + "vh";
  drop.style.setProperty("--start-x", startX);
  drop.style.setProperty("--start-y", startY);
  drop.style.setProperty("--end-x", endX);
  drop.style.setProperty("--end-y", endY);

  // Durata e fase casuali
  const duration = 6 + Math.random() * 8;
  const delay = Math.random() * -duration;
  drop.style.animationDuration = duration + "s";
  drop.style.animationDelay = delay + "s";

  container.appendChild(drop);
}
