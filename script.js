// SELECTORS
const checkBtn = document.querySelector(".check");
const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const numberHidden = document.querySelector(".number");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const body = document.querySelector("body");
const againBtn = document.querySelector(".again");
// VARIABLES
let scoreNumber = 20;
let highScoreNumber = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

checkBtn.addEventListener("click", function () {
  var guessNbr = Number(guess.value);
  console.log(guessNbr, typeof guessNbr);

  // IF THE INPUT IS EMPTY
  if (!guessNbr) {
    message.textContent = "❌ Enter a number dumbass!!";
  }
  // THE PLAYER WINS
  else if (guessNbr === secretNumber) {
    numberHidden.textContent = secretNumber;
    message.textContent = "🎉 you are fucking awesome!!";
    body.style.backgroundColor = "rgb(31, 192, 117)"; //green
    numberHidden.classList.add("number-win");

    if (scoreNumber > highScoreNumber) {
      highScoreNumber = scoreNumber;
      highScore.textContent = highScoreNumber;
    } else {
      highScore.textContent = highScoreNumber;
    }
  }
  // GUESS IS WRONG
  else if (guessNbr !== secretNumber) {
    if (scoreNumber > 1) {
      message.textContent = guessNbr > secretNumber ? "🔥 HOT" : "🧊 COLD";
      scoreNumber = scoreNumber - 1;
      score.textContent = scoreNumber;
    } else {
      numberHidden.textContent = secretNumber;
      message.textContent = "💩 you are a loser";
      body.style.backgroundColor = "rgb(189, 52, 52)";
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener("click", function () {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  score.textContent = scoreNumber;
  numberHidden.textContent = "?";
  guess.value = "";
  body.style.backgroundColor = "rgb(10, 10, 10)";
  numberHidden.classList.remove("number-win");
  console.log(secretNumber);
});
