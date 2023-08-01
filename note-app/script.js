'use strict';

const createNoteEl = document.querySelector('.create-note');
const notesContainerEl = document.querySelector('.notes');

const createNote = function () {
  const totalNotes = notesContainerEl.childElementCount;

  const newNote = document.createElement('div');
  newNote.classList.add('note');
  newNote.insertAdjacentHTML(
    'afterbegin',
    `<textarea class="note-text note-${totalNotes}"></textarea>`
  );
  createNoteEl.insertAdjacentElement('beforebegin', newNote);

  const textarea = document.querySelector(`.note-${totalNotes}`);
  textarea.focus();
};

createNoteEl.addEventListener('click', createNote);
