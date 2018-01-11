import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { NoteLoadAction } from '../actions/notes';

import { NotesService } from '../notes.service';

import { Note } from '../note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent implements OnInit {
  note$: Observable<Note>;

  constructor(private route: ActivatedRoute,
              private service: NotesService,
              public store: Store<fromRoot.State>) {
    this.note$ = store.select(fromRoot.getNoteState);
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.store.dispatch(new NoteLoadAction(fragment));
    });
  }
}
