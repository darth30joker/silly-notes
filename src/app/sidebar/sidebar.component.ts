import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

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
              private router: Router,
              public store: Store<fromRoot.State>) {
    this.notesList$ = store.select(fromRoot.getNotesState);
  }

  ngOnInit() {
    this.store.dispatch(new NotesLoadAction());
  }

  create(title: string) {
    let note = this.service.createEmptyNote(title);

    this.router.navigate(['/notes/edit'], {fragment: note.id});
  }

  delete(id: string) {
    this.store.dispatch(new NoteDeleteAction(id));
    this.store.dispatch(new NotesLoadAction());
  }
}
