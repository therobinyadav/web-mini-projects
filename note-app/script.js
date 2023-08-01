'use strict';

const createNoteEl = document.querySelector('.create-note');
const notesContainerEl = document.querySelector('.notes');

const createNote = function () {
  const newNote = `
    <div class="note">
      <textarea class="note-text"></textarea>
    </div>
  `;
  createNoteEl.insertAdjacentHTML('beforebegin', newNote);

  // Focusing textarea of latest note
  notesContainerEl.children[
    notesContainerEl.childElementCount - 2
  ].children[0].focus();
};

createNoteEl.addEventListener('click', createNote);
