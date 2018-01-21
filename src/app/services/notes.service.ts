import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';

import { Note } from '../note.model';
import { NoteMeta } from '../note-meta.model';

import { UserService } from './user.service';
import { GoogleDriveService } from './google-drive.service';

import 'rxjs/Rx';

@Injectable()
export class NotesService {
  private static LIST_KEY = 'noteList';

  private lists: {};

  static generateId(): string {
    return Math.random().toString(36).substring(5);
  }

  constructor(private userService: UserService,
    private driveService: GoogleDriveService) {
    let listString = localStorage.getItem(NotesService.LIST_KEY);
    if (listString == null) {
      listString = JSON.stringify({});
    }

    this.lists = JSON.parse(listString);
  }

  synchorize() {
    // if (!environment.production) {
    //   return;
    // }

    // 1. check if folder is there, otherwise create it
    this.driveService.findOrCreateFolder();

    return;

    // 2. check if there's a manifest.json, otherwise create it
    // let manifest = this.driveService.findOrCreateManifest();

    // 3. load all items from manifest.json and compare them with local lists
    // for (let key in manifest) {
    //   if (this.lists[key] !== undefined) {
    //     if (this.lists[key].updated > manifest[key].updated) {
    //       this.driveService.upload(this.lists[key], localStorage.getItem(key));
    //     } else if (this.lists[key].updated < manifest[key].updated) {
    //       this.saveToStorage(new Note(manifest[key], this.driveService.download(key)));
    //       this.lists[key] = manifest[key];
    //     }
    //   } else {
    //     this.saveToStorage(new Note(manifest[key], this.driveService.download(key)));
    //     this.lists[key] = manifest[key];
    //   }
    // }

    // for (let key in this.lists) {
    //   if (manifest[key] !== undefined) {
    //     if (this.lists[key].updated > manifest[key].updated) {
    //       this.driveService.upload(this.lists[key], localStorage.getItem(key));
    //     } else if (this.lists[key].updated < manifest[key].updated) {
    //       this.saveToStorage(new Note(manifest[key], this.driveService.download(key)));
    //       this.lists[key] = manifest[key];
    //     }
    //   } else {
    //     this.driveService.upload(this.lists[key], localStorage.getItem(key));
    //   }
    // }
  }

  load(id: string): Observable<Note> {
    return Observable.from([new Note(this.lists[id], localStorage.getItem(id))]);
  }

  loadList(): Observable<NoteMeta[]> {
    let list = new Array();
    for (let key in this.lists) {
      list.push(this.lists[key]);
    }
    return Observable.from([list]);
  }

  createEmptyNote(title: string): Note {
    return this.saveToStorage(new Note(new NoteMeta(NotesService.generateId(), title), ''));
  }

  save(id: string, title: string, content: string): Observable<Note> {
    let meta = this.lists[id];
    meta.title = title;
    meta.updated = new Date();

    return Observable.from([this.saveToStorage(new Note(meta, content))]);
  }

  delete(id: string): Observable<string> {
    localStorage.removeItem(id);

    this.removeNoteFromList(id);

    return Observable.from([""]);
  }

  private saveToStorage(note: Note): Note {
    this.saveNoteToList(note.meta);

    localStorage.setItem(note.meta.id, note.content);

    return note;
  }

  private saveNoteToList(meta: NoteMeta) {
    this.lists[meta.id] = meta;

    localStorage.setItem(NotesService.LIST_KEY, JSON.stringify(this.lists));
  }

  private removeNoteFromList(id: string) {
    delete this.lists[id];

    localStorage.setItem(NotesService.LIST_KEY, JSON.stringify(this.lists));
  }
}
