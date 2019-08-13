const notepad = new Notepad(initialNotes);
const listRef = document.querySelector('.note-list');
renderNoteList(listRef, notepad.notes);
// console.log(renderNoteList(listRef, notepad.notes));
