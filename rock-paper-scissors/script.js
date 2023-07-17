'use strict';

const btnRockEl = document.querySelector('.btn-rock');
const btnPaperEl = document.querySelector('.btn-paper');
const btnScissorEl = document.querySelector('.btn-scissor');
const computerChoiceEl = document.querySelector('.computer-choice');
const resultEl = document.querySelector('.result');

let yourChoice;
let computerChoice;

const computerTurn = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) computerChoice = '✊';
  if (randomNum === 2) computerChoice = '✋';
  if (randomNum === 3) computerChoice = '✌️';

  computerChoiceEl.textContent = `Computer chose: ${computerChoice}`;
};

const checkWinner = function () {
  let resultText;

  if (yourChoice === '✊' && computerChoice === '✊') {
    resultText = "It's a draw 🤯";
  } else if (yourChoice === '✊' && computerChoice === '✋') {
    resultText = 'Computer won 🤣';
  } else if (yourChoice === '✊' && computerChoice === '✌️') {
    resultText = 'You win 🎉';
  } else if (yourChoice === '✋' && computerChoice === '✊') {
    resultText = 'You win 🎉';
  } else if (yourChoice === '✋' && computerChoice === '✋') {
    resultText = "It's a draw 🤯";
  } else if (yourChoice === '✋' && computerChoice === '✌️') {
    resultText = 'Computer won 🤣';
  } else if (yourChoice === '✌️' && computerChoice === '✊') {
    resultText = 'Computer won 🤣';
  } else if (yourChoice === '✌️' && computerChoice === '✋') {
    resultText = 'You win 🎉';
  } else if (yourChoice === '✌️' && computerChoice === '✌️') {
    resultText = "It's a draw 🤯";
  }

  resultEl.textContent = resultText;
};

btnRockEl.addEventListener('click', function () {
  yourChoice = btnRockEl.textContent;
  computerTurn();
  checkWinner();
});

btnPaperEl.addEventListener('click', function () {
  yourChoice = btnPaperEl.textContent;
  computerTurn();
  checkWinner();
});

btnScissorEl.addEventListener('click', function () {
  yourChoice = btnScissorEl.textContent;
  computerTurn();
  checkWinner();
});
