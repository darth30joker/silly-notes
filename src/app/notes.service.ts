import { Injectable } from '@angular/core';

import { Note } from './note.model';

@Injectable()
export class NotesService {
  LIST_KEY = "notesList";

  constructor() { }

  load(title: string): Note {
    console.log(title);
    let content = localStorage.getItem(title);
    console.log(content);
    return new Note(title, content);
  }

  loadList(): Array<string> {
    var listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify([]);
    }

    return JSON.parse(listString);
  }

  save(note: Note) {
    localStorage.setItem(note.title, note.content);

    this.saveTitleToList(note.title);
  }

  createEmptyNote(): Note {
    let title = "untitled note";

    return this.saveToStorage(new Note(title, ""));
  }

  private saveToStorage(note: Note): Note {
    this.saveTitleToList(note.title);

    localStorage.setItem(note.title, note.content);

    return note;
  }

  private saveTitleToList(title: string) {
    var listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify([]);
    }

    let lists = JSON.parse(listString);
    if (!lists.includes(title)) {
      lists.push(title);
    }

    localStorage.setItem(this.LIST_KEY, JSON.stringify(lists));
  }
}
