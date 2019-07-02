'use strict'
const Priority = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const note = {
  id: '',
  title: '',
  body: '',
  priority: Priority.NORMAL,
};

const notepad = {
  notes: [],
  getNotes() {
    return this.notes;
  },
  findNoteById(id){
    for (let i = 0; i < this.notes.length; i += 1) {
        if (this.notes[i].id === id){
          return this.notes[i];
        }
    }
    return undefined;
  },
  saveNote(note){
    this.notes.splice(this.notes.length, 0, note);
    return this;
  },
  deleteNote(id){
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].id === id){
         this.notes.splice(i, 1);
        }
    }
    return this;
  },
  updateNoteContent(id, updatedContent){
    Object.assign(this.findNoteById(id), updatedContent);
    return this;
  },
  updateNotePriority(id, updatePriority){
    this.findNoteById(id).priority = updatePriority;
    return this;
  },
  filterNotesByQuery(query){
    const newArr = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].title.toLowerCase().includes(query) || this.notes[i].body.toLowerCase().includes(query)){
        newArr.push(this.notes[i]);
      }
    }
    return newArr;
  },
  filterNotesByPriority(priority){
    const newArr = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      if (this.notes[i].priority === priority){
        newArr.push(this.notes[i]);
      }
    }
    return newArr;
  },
}

notepad.saveNote({
  id: 'id-1',
  title: 'JavaScript essentials',
  body:
    'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
  priority: Priority.HIGH,
});

notepad.saveNote({
  id: 'id-2',
  title: 'Refresh HTML and CSS',
  body:
    'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Priority.NORMAL);

console.log(
  'Заметки после обновления приоритета для id-4: ',
  notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Priority.LOW);

console.log(
  'Заметки после обновления приоритета для id-3: ',
  notepad.getNotes(),
);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.getNotes(),
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.getNotes());

// console.log(notepad.notes[0].id);
// console.log(notepad.findNoteById('id-2'));

// console.log(notepad.getNotes());
// notepad.deleteNote('id-1');
// console.log(notepad.getNotes());

// console.log(notepad.updateNoteContent('id-1', {name: 'cat', age: 9}));
// console.log(notepad.updateNotePriority('id-2', Priority.LOW));

// console.log(notepad.filterNotesByQuery('JavaScript'));
// console.log(notepad.filterNotesByQuery('Get comfortable with arrays'));
// console.log(notepad.filterNotesByQuery('Java'));

// console.log(notepad.filterNotesByPriority(0));
// console.log(notepad.filterNotesByPriority(77));