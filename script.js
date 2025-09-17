// Part 2: JavaScript Functions

let score = 0;

// Function with parameter & return value
function updateScore(points) {
  score = calculateScore(score, points);
  document.getElementById("score").textContent = score;
}

// Helper function showing scope and return value
function calculateScore(current, added) {
  let newScore = current + added; // local scope
  return newScore; // return value
}

// Part 3: Combining JS with CSS
function flipCard() {
  const card = document.getElementById("sportsCard");
  card.classList.toggle("flipped");
}

// Add CSS flip when JS toggles
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.innerHTML = `
    .flipped { transform: rotateY(180deg); }
  `;
  document.head.appendChild(style);
});
