import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { NotesLoadAction } from '../actions/notes';
import { NoteDeleteAction } from '../actions/notes';

import { NotesService } from '../notes.service';

import { Note } from '../note.model';
import { NoteMeta } from '../note-meta.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  notesList$: Observable<NoteMeta[]>;

  constructor(private service: NotesService,
              public store: Store<fromRoot.State>) {
    this.notesList$ = store.select(fromRoot.getNotesState);
  }

  ngOnInit() {
    this.store.dispatch(new NotesLoadAction());
  }

  create() {
    this.service.createEmptyNote();
    this.store.dispatch(new NotesLoadAction());
  }

  delete(id: string) {
    this.store.dispatch(new NoteDeleteAction(id));
    this.store.dispatch(new NotesLoadAction());
  }
}
