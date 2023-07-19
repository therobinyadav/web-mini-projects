'use strict';

const player1ScoreEl = document.querySelector('.player1-score');
const player2ScoreEl = document.querySelector('.player2-score');
const scoreLimitEl = document.querySelector('.score-limit');
const btnPlayer1El = document.querySelector('.btn-player1');
const btnPlayer2El = document.querySelector('.btn-player2');
const btnResetEl = document.querySelector('.btn-reset');

let scoreLimit = 1;
let player1Score = 0;
let player2Score = 0;

const checkWinner = function () {
  if (player1Score === scoreLimit) {
    player1ScoreEl.style.color = '#48c78e';
    player2ScoreEl.style.color = '#f14668';
    btnPlayer1El.disabled = true;
    btnPlayer2El.disabled = true;
  }

  if (player2Score === scoreLimit) {
    player2ScoreEl.style.color = '#48c78e';
    player1ScoreEl.style.color = '#f14668';
    btnPlayer1El.disabled = true;
    btnPlayer2El.disabled = true;
  }
};

const reset = function () {
  scoreLimit = 1;
  player1Score = 0;
  player2Score = 0;
  scoreLimitEl.value = 1;
  player1ScoreEl.textContent = 0;
  player2ScoreEl.textContent = 0;
  player1ScoreEl.style.color = '#222';
  player2ScoreEl.style.color = '#222';
  btnPlayer1El.disabled = false;
  btnPlayer2El.disabled = false;
};

scoreLimitEl.addEventListener('change', function () {
  scoreLimit = +scoreLimitEl.value;
});

btnPlayer1El.addEventListener('click', function () {
  player1Score++;
  player1ScoreEl.textContent = player1Score;
  checkWinner();
});

btnPlayer2El.addEventListener('click', function () {
  player2Score++;
  player2ScoreEl.textContent = player2Score;
  checkWinner();
});

btnResetEl.addEventListener('click', reset);
