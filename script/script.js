"use strict";
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber); // test
document.querySelector(".btn-check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);
   if (!guess) {
      document.querySelector(".message").textContent =
         "“PLEASE ENTER A NUMBER!”";
   } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "“CORRECT NUMBER!”";
      document.querySelector(".secret-number").textContent = secretNumber;
      document.querySelector("body").style.background =
         "linear-gradient(to top right, #24AD49, #E0DA3C) no-repeat";
      if (score > highscore) {
         highscore = score;
         document.querySelector(".highscore").textContent = highscore;
      }
   } else if (guess > secretNumber) {
      if (score > 1) {
         document.querySelector(".message").textContent = "“TOO HIGH!”";
         score--;
         document.querySelector(".score").textContent = score;
      } else {
         document.querySelector(".message").textContent = "“YOU LOSE!”";
         document.querySelector(".score").textContent = 0;
         document.querySelector("body").style.background =
            "linear-gradient(to top right, #333, #333) no-repeat";
      }
   } else if (guess < secretNumber) {
      if (score > 1) {
         document.querySelector(".message").textContent = "“TOO LOW!”";
         score--;
         document.querySelector(".score").textContent = score;
      } else {
         document.querySelector(".message").textContent = "“YOU LOSE!”";
         document.querySelector(".score").textContent = 0;
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
      console.log(secretNumber); // test
      document.querySelector(".score").textContent = score;
      document.querySelector(".secret-number").textContent = "?";
      document.querySelector("body").style.background =
         "linear-gradient(to top right, #1a2a6c, #b21f1f, #fdbb2d) no-repeat";
      document.querySelector(".guess").value = "";
      document.querySelector(".message").textContent = "“START GUESSING!”";
   });
