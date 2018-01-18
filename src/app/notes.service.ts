import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Note } from './note.model';
import { NoteMeta } from './note-meta.model';

import 'rxjs/Rx';

@Injectable()
export class NotesService {
  LIST_KEY = 'notesList';

  static generateId(): string {
    return Math.random().toString(36).substring(5);
  }

  constructor() { }

  load(id: string): Observable<Note> {
    let title = this.loadListAsMap()[id];
    return Observable.from([new Note(id, title, localStorage.getItem(id))]);
  }

  loadList(): Observable<NoteMeta[]> {
    let listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify({});
    }

    const lists = [];
    const notes = this.loadListAsMap();

    for (const key in notes) {
      lists.push(new NoteMeta(key, notes[key]));
    }

    return Observable.from([lists]);
  }

  save(note: Note): Observable<Note> {
    localStorage.setItem(note.id, note.content);

    this.saveTitleToList(new NoteMeta(note.id, note.title));

    return Observable.from([note]);
  }

  delete(id: string): Observable<string> {
    localStorage.removeItem(id);

    this.removeTitleFromList(id);

    return Observable.from([""]);
  }

  createEmptyNote(title: string): Note {
    let id = NotesService.generateId();

    return this.saveToStorage(new Note(id, title, ''));
  }

  private loadListAsMap() {
    let listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify({});
    }

    return JSON.parse(listString);
  }

  private saveToStorage(note: Note): Note {
    this.saveTitleToList(note);

    localStorage.setItem(note.id, note.content);

    return note;
  }

  private saveTitleToList(noteMeta: NoteMeta) {
    let listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify({});
    }

    const lists = JSON.parse(listString);
    lists[noteMeta.id] = noteMeta.title;

    localStorage.setItem(this.LIST_KEY, JSON.stringify(lists));
  }

  private removeTitleFromList(id: string) {
    let listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify({});
    }

    const lists = JSON.parse(listString);
    delete lists[id];

    localStorage.setItem(this.LIST_KEY, JSON.stringify(lists));
  }
}
