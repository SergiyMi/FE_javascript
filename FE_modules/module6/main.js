"use strict";

class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  // static Priority = { 
  //   LOW: 0,
  //   NORMAL: 1,
  //   HIGH: 2
  // };

   static get Priority() {
    return { 
        LOW: 0,
        NORMAL: 1,
        HIGH: 2
      };
  }

  get notes() {
    return this._notes;
  }

  findNoteById(id) {
    //   return this._notes.find(el => el.id === id);
    for (let i = 0; i < this._notes.length; i += 1) {
      if (this._notes[i].id === id) {
        return this._notes[i];
      }
    }
    return undefined;
  }

  saveNote(note) {
    this._notes.push(note);
    return this;
  }

  deleteNote(id) {
    // this._notes = this._notes.filter(el => el.id !== id);
    // return this;
    for (let i = 0; i < this._notes.length; i += 1) {
      if (this._notes[i].id === id) {
        this._notes.splice(i, 1);
      }
    }
    return this;
  }

  updateNoteContent(id, updatedContent) {
    const note = this.findNoteById(id);
    if (!note) return;
    return Object.assign(note, updatedContent);
  }

  updateNotePriority(id, updatePriority) {
    this.findNoteById(id).priority = updatePriority;
    return this;
  }

  filterNotesByQuery(query) {
    // this._notes = this._notes.filter(el => 
    //   el.title.toLowerCase().includes(query) ||
    //   el.body.toLowerCase().includes(query));
    //  return this;
    const newArr = [];
    for (let i = 0; i < this.notes.length; i += 1) {
      if (
        this.notes[i].title.toLowerCase().includes(query) ||
        this.notes[i].body.toLowerCase().includes(query)
      ) {
        newArr.push(this.notes[i]);
      }
    }
    return newArr;
  }

  filterNotesByPriority(priority) {
    // this._notes = this._notes.filter(el => el.priority === priority);
    // return this;

    const newArr = [];
    for (let i = 0; i < this._notes.length; i += 1) {
      if (this._notes[i].priority === priority) {
        newArr.push(this._notes[i]);
      }
    }
    return newArr;
  }
}

// Далее идет код для проверки работоспособности класса и созданного экземпляра, вставь его в конец скрипта. Твоя реализация класса Notepad должна проходить этот тест.

const initialNotes = [
  {
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: Notepad.Priority.HIGH
  },
  {
    id: "id-2",
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: Notepad.Priority.NORMAL
  }
];

const notepad = new Notepad(initialNotes);

/*
  Смотрю что у меня в заметках после инициализации
*/
console.log("Все текущие заметки: ", notepad.notes);

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: "id-3",
  title: "Get comfy with Frontend frameworks",
  body:
    "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.",
  priority: Notepad.Priority.NORMAL
});

notepad.saveNote({
  id: "id-4",
  title: "Winter clothes",
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW
});

console.log("Все текущие заметки: ", notepad.notes);

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);

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
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.notes,
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.notes);
