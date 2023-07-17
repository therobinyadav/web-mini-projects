'use strict';

const buttons = document.querySelectorAll('.btn');
const btnRockEl = document.querySelector('.btn-rock');
const btnPaperEl = document.querySelector('.btn-paper');
const btnScissorEl = document.querySelector('.btn-scissor');
const computerMoveEl = document.querySelector('.computer-move');
const computerOptions = document.querySelectorAll('.computer-option');
const resultEl = document.querySelector('.result');

let yourChoice;
let computerChoice;

const computerTurn = function () {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) computerChoice = '✊';
  if (randomNum === 2) computerChoice = '✋';
  if (randomNum === 3) computerChoice = '✌️';
  removeChosenClass(computerOptions);
  computerOptions[randomNum - 1].classList.add('chosen');
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

const removeChosenClass = function (nodeList) {
  nodeList.forEach(el => el.classList.remove('chosen'));
};

btnRockEl.addEventListener('click', function () {
  yourChoice = btnRockEl.textContent;
  removeChosenClass(buttons);
  btnRockEl.classList.add('chosen');
  computerTurn();
  checkWinner();
});

btnPaperEl.addEventListener('click', function () {
  yourChoice = btnPaperEl.textContent;
  removeChosenClass(buttons);
  btnPaperEl.classList.add('chosen');
  computerTurn();
  checkWinner();
});

btnScissorEl.addEventListener('click', function () {
  yourChoice = btnScissorEl.textContent;
  removeChosenClass(buttons);
  btnScissorEl.classList.add('chosen');
  computerTurn();
  checkWinner();
});
