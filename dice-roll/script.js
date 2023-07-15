'use strict';

const rollBtnEl = document.querySelector('.roll-btn');
const diceImgEl = document.querySelector('.dice-img');
const rollRecordsEl = document.querySelector('.roll-records');

let rollCount = 0;
const randomNum = () => Math.floor(Math.random() * 6) + 1;

rollBtnEl.addEventListener('click', function () {
  rollCount++;

  const diceValue = randomNum();
  const imgSrc = `img/dice-${diceValue}.png`;
  const imgAlt = `Dice with ${diceValue} ${diceValue !== 1 ? 'dots' : 'dot'}`;

  diceImgEl.classList.add('roll-animation');
  diceImgEl.setAttribute('src', imgSrc);
  diceImgEl.setAttribute('alt', imgAlt);

  setTimeout(() => {
    diceImgEl.classList.remove('roll-animation');

    const markup = `
    <div class="roll">
      <p class="roll-text">Roll ${rollCount}</p>
      <img class="dice-img" src=${imgSrc} alt="${imgAlt}" />
    </div>
  `;
    rollRecordsEl.insertAdjacentHTML('beforeend', markup);
  }, 1000);
});
