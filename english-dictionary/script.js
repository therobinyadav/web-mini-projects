'use strict';

const wordInputEl = document.querySelector('.word-input');
const searchBtnEl = document.querySelector('.btn-search');

const getMeaning = async function (word) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const [data] = await res.json();
  const result = {
    word: data.word,
    meaning: data.meanings[0].definitions[0].definition,
    audioSrc: data.phonetics[0].audio,
  };
  console.log(result);
};

searchBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  getMeaning(wordInputEl.value);
  wordInputEl.value = '';
});
