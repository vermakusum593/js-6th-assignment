
const words = ["dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",];


const wordDisplay = document.getElementById("word-display");
const textInput = document.getElementById("text-input");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const gameOverEl = document.getElementById("game-over");
const finalScoreEl = document.getElementById("final-score");
const restartBtn = document.getElementById("restart-btn")

let score = 0;
let time = 10;
let interval;




function addWordToDOM() {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  wordDisplay.textContent = randomWord;
}


function updateScore() {
  score++;
  scoreEl.textContent = score;
}


function updateTime() {
  time--;
  timeEl.textContent = time;

  if (time === 0) {
    clearInterval(interval);
    gameOver();
  }
}


function gameOver() {
  gameOverEl.classList.remove("hidden");
  document.getElementById("game-container").classList.add("hidden");
  finalScoreEl.textContent = score;
}


function restartGame() {
  score = 0;
  time = 10;
  scoreEl.textContent = score;
  timeEl.textContent = time;
  gameOverEl.classList.add("hidden");
  document.getElementById("game-container").classList.remove("hidden");
  textInput.value = "";
  addWordToDOM();
  interval = setInterval(updateTime, 1000);
}


textInput.addEventListener("input", () => {
  const typedWord = textInput.value.trim();
  const displayedWord = wordDisplay.textContent;

  if (typedWord === displayedWord) {
    updateScore();
    addWordToDOM();
    textInput.value = "";
    time += 5; 
    updateTime(); 
  }
});


restartBtn.addEventListener("click", restartGame);


addWordToDOM();
interval = setInterval(updateTime, 1000);