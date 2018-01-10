import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Note } from './note.model';
import { NoteMeta } from './note-meta.model';

import 'rxjs/Rx';

@Injectable()
export class NotesService {
  LIST_KEY = "notesList";

  constructor() { }

  load(id: string): Note {
    let title = this.loadListAsMap()[id];
    return new Note(id, title, localStorage.getItem(id));
  }

  loadList(): Observable<NoteMeta[]> {
    let listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify({});
    }

    let lists = [];
    let notes = this.loadListAsMap();

    for (var key in notes) {
      lists.push(new NoteMeta(key, notes[key]));
    }

    return Observable.from([lists]);
  }

  save(note: Note) {
    localStorage.setItem(note.id, note.content);

    this.saveTitleToList(new NoteMeta(note.id, note.title));
  }

  createEmptyNote(): Note {
    let id = this.generateId();

    return this.saveToStorage(new Note(id, "untitled note", ""));
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
    var listString = localStorage.getItem(this.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify({});
    }

    let lists = JSON.parse(listString);
    lists[noteMeta.id] = noteMeta.title;

    localStorage.setItem(this.LIST_KEY, JSON.stringify(lists));
  }

  private generateId(): string {
    return Math.random().toString(36).substring(5);
  }
}
