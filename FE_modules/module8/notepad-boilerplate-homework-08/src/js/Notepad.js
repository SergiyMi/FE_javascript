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
      return this._notes.find(el => el.id === id);
    }
  
    saveNote(note) {
      this._notes.push(note);
      return this;
    }
  
    deleteNote(id) {
      this._notes = this._notes.find(el => el.id === id);
      return this;
    }
  
    updateNoteContent(id, updatedContent) {
      Object.assign(this.findNoteById(id), updatedContent);
      return this;
    }
  
    updateNotePriority(id, updatePriority) {
      this.findNoteById(id).priority = updatePriority;
      return this;
    }
  
    filterNotesByQuery(query) {
      this._notes = this._notes.filter(el => el.title.toLowerCase().includes(query) ||
      el.body.toLowerCase().includes(query));
      return this;
    }
  
    filterNotesByPriority(priority) {
      this._notes = this._notes.filter(el => el.priority === priority);
      return this;
    }
  }
  