function createElement(tag, className, text = null, id = null) {
    const element = document.createElement(tag);
    className.split(' ').map(el => element.classList.add(el));
    if (id) {
        element.setAttribute('data-id', id);
    }
    if (text) {
        element.textContent = text;
    }
    return element;
}

function createButton(action, text) {
    const button = createElement('button', 'action');
    button.setAttribute('data-action', action);
    const i =createElement('i', 'material-icons action__icon', text);
    button.append(i);
    return button;
}

function createNoteContent(title, body) {
    const noteContent = createElement('div', 'note_content');
    noteContent.append(createElement('h2', 'note_title', title));
    noteContent.append(createElement('p', 'note_body', body));
    return noteContent;
}

function createNoteFooter(priority) {
    const noteFooter = createElement('footer', 'note_footer');
    const noteSectionL = createElement('section', 'note_section');
    const noteSectionR = createElement('section', 'note_section');
    noteSectionL.append(createButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN));
    noteSectionL.append(createButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP));
    noteSectionL.append(createElement('span', 'note_priority', `Priority: ${priority}`));
    noteSectionR.append(createButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT));
    noteSectionR.append(createButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE));
    noteFooter.append(noteSectionL);
    noteFooter.append(noteSectionR);
    return noteFooter;
}

function createListItem({id, title, body, priority}) {
    const li = createElement('li', 'note-list__item', null, id);
    const note = createElement('div', 'note');
    li.append(note);
    note.append(createNoteContent(title, body));
    note.append(createNoteFooter(priority));
    return li;
}