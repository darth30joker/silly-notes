import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { NoteLoadAction } from '../actions/notes';

import { NotesService } from '../notes.service';

import { Note } from '../note.model';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})

export class NoteEditComponent implements OnInit {
  note$: Observable<Note>;
  id: string;

  constructor(private service: NotesService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              public store: Store<fromRoot.State>) {
    this.note$ = store.select(fromRoot.getNoteState);
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.store.dispatch(new NoteLoadAction(fragment));
      this.id = fragment;
    });
  }

  save(title: string, content: string) {
    // this.service.save();

    this.store.dispatch(new NoteSaveAction(new Note(this.id, title, content)));

    this.router.navigate(['/notes'], {fragment: this.id});
  }

  cancel() {
    this.location.back();
  }
}
