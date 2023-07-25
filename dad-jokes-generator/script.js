'use script';

const btnEl = document.querySelector('.btn');
const jokeEl = document.querySelector('.joke');

btnEl.addEventListener('click', async function () {
  try {
    const res = await fetch('https://icanhazdadjoke.com', {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error();
    const { joke } = await res.json();
    jokeEl.textContent = joke;
  } catch {
    jokeEl.textContent =
      'Sorry :( no jokes available at this moment. Try again later.';
  }
});
