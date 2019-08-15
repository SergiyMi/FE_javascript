refs.search.addEventListener('input', searchNote);

function searchNote(event) {
    event.preventDefault();
    const { target } = event;
    const searchItems = notepad.filterNotesByQuery(target.value);
    console.table(searchItems);
    renderNoteList(refs.list, searchItems);
}