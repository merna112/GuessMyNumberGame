'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.label-score').textContent)
// document.querySelector('.number').textContent=10;
// document.querySelector('.guess').value=20;
// we have 3 nums =>secret number && score && highScore

//1) secret number is random number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//2) score
let score = 20;
//3)highScore
let highScore = 0;
//console.log(document.querySelector('.message').textContent)

// function to display message(no number || wins|| lose)
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//////////////////////////////////////////////
//addEventListener('click',function) to [check , again]
/////////////////////////////////////////////
//check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //if het entered inpity value=>'No number !⛔'
  if (!guess) displayMessage('No number !⛔');
  // when player wins🎉
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.body').style.backgroundColor = '60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when player lose
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('guess').value = '';
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// challenge solution
document.querySelector('.again').addEventListener('click', function () {
  score = 0;
  secretNumber = 0;
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
