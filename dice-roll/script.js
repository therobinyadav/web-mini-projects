'use strict';

const rollBtnEl = document.querySelector('.roll-btn');
const diceImgEl = document.querySelector('.dice-img');
const rollRecordsEl = document.querySelector('.roll-records');

let rollCount = 0;
const randomNum = () => Math.floor(Math.random() * 6) + 1;

rollBtnEl.addEventListener('click', function () {
  const diceValue = randomNum();
  const imgSrc = `img/dice-${diceValue}.png`;
  const imgAlt = `Dice with ${diceValue} ${diceValue !== 1 ? 'dots' : 'dot'}`;

  diceImgEl.classList.add('roll-animation');
  diceImgEl.setAttribute('src', imgSrc);
  diceImgEl.setAttribute('alt', imgAlt);

  setTimeout(() => {
    diceImgEl.classList.remove('roll-animation');

    rollCount++;

    const markup = `
      <li class="roll">
        <p class="roll-text">Roll ${rollCount}</p>
        <img class="dice-img" src=${imgSrc} alt="${imgAlt}" />
      </li>
    `;
    rollRecordsEl.insertAdjacentHTML('beforeend', markup);

    rollRecordsEl.scrollTo({
      top: rollRecordsEl.scrollHeight,
      behavior: 'smooth',
    });
  }, 1000);
});
