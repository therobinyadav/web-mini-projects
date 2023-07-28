'use strict';

const wordInputEl = document.querySelector('.word-input');
const searchBtnEl = document.querySelector('.btn-search');
const resultBoxEl = document.querySelector('.result-box');

const getMeaning = async function (word) {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (!res.ok) throw new Error('Something went wrong :(');
    const [data] = await res.json();
    const result = {
      word: data.word.replace(data.word[0], data.word[0].toUpperCase()),
      meaning: data.meanings[0].definitions[0].definition,
      audioSrc: data.phonetics[0].audio,
    };
    renderResult(result);
  } catch (err) {
    resultBoxEl.innerHTML = '';
    resultBoxEl.insertAdjacentHTML('beforeend', `<p>${err.message}</p>`);
  }
};

const renderResult = function (resultObj) {
  resultBoxEl.innerHTML = '';
  let markup;
  if (resultObj.audioSrc) {
    markup = `
      <div class="result">
        <h2 class="word">${resultObj.word}</h2>
        <p class="meaning">${resultObj.meaning}</p>
        <audio
        controls
        class="word-audio"
        src="${resultObj.audioSrc}">
        </audio>
      </div>
    `;
  } else {
    markup = `
      <div class="result">
        <h2 class="word">${resultObj.word}</h2>
        <p class="meaning">${resultObj.meaning}</p>
      </div>
    `;
  }
  resultBoxEl.insertAdjacentHTML('beforeend', markup);
};

searchBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  getMeaning(wordInputEl.value);
  wordInputEl.value = '';
});
