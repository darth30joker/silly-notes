import { Injectable } from '@angular/core';

import { Note } from './note.model';

@Injectable()
export class NotesService {
  LIST_KEY = "notesList";

  constructor() { }

  load(title: string): Note {
    return new Note(title, "## fake content\nJust testing markdown");
  }

  loadList(): Array<string> {
    var listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify([]);
    }

    return JSON.parse(listString);
  }

  save(title: string, content: string) {
    localStorage.setItem(title, content);

    var listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify([]);
    }

    let lists = JSON.parse(listString);
    if (!lists.hasOwnProperty(title)) {
      lists.push(title);
    }

    localStorage.setItem(this.LIST_KEY, JSON.stringify(lists));
  }
}
