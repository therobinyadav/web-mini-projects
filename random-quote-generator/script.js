'use strict';

const root = document.documentElement;
const quoteTextEl = document.querySelector('.quote-text');
const quoteAuthorEl = document.querySelector('.quote-author');
const btnEl = document.querySelector('.btn');

const getRandomQuote = async function () {
  try {
    const res = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: { 'X-Api-Key': 'urb9m9hnalSwvCn285CvVw==GGHnIPsThdu4DCp5' },
    });
    if (!res.ok) throw new Error('Something went wrong :(');
    const [data] = await res.json();
    quoteTextEl.textContent = data.quote;
    quoteAuthorEl.textContent = '— ' + data.author;
  } catch (err) {
    quoteTextEl.textContent = err.message;
  }
};

const changeColor = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  root.style.setProperty('--random-color', `rgb(${r}, ${g}, ${b})`);
};

// Initializing with a quote and a color
(async function () {
  await getRandomQuote();
  changeColor();
})();

btnEl.addEventListener('click', async function () {
  await getRandomQuote();
  changeColor();
});
