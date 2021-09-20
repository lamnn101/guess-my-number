"use strict";

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
function displayMessage(message) {
   document.querySelector(".message").textContent = message;
}
function displaySecretNumber(value) {
   document.querySelector(".secret-number").textContent = value;
}
function displayScore(value) {
   document.querySelector(".score").textContent = value;
}

document.querySelector(".btn-check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);
   if (!guess) {
      displayMessage("“PLEASE ENTER A NUMBER!”");
   } else if (guess === secretNumber) {
      displayMessage("“CORRECT NUMBER!”");
      displaySecretNumber(secretNumber);
      document.querySelector("body").style.background =
         "linear-gradient(to top right, #24AD49, #E0DA3C) no-repeat";
      if (score > highscore) {
         highscore = score;
         document.querySelector(".highscore").textContent = highscore;
      }
   } else if (guess !== secretNumber) {
      if (score > 1) {
         displayMessage(guess > secretNumber ? "“TOO HIGH!”" : "“TOO LOW!”");
         score--;
         displayScore(score);
      } else {
         displayMessage("“YOU LOSE!”");
         displayScore(0);
         document.querySelector("body").style.background =
            "linear-gradient(to top right, #333, #333) no-repeat";
      }
   }
});
document
   .querySelector(".btn-play-again")
   .addEventListener("click", function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20 + 1);
      displayScore(score);
      displaySecretNumber("?");
      document.querySelector("body").style.background =
         "linear-gradient(to top right, #1a2a6c, #b21f1f, #fdbb2d) no-repeat";
      document.querySelector(".guess").value = "";
      displayMessage("“START GUESSING!”");
   });
