import { Injectable } from '@angular/core';

import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { NotesService } from '../notes.service';

import * as notes from '../actions/notes';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class NotesEffects {
  constructor(private service: NotesService,
              private actions$: Actions) {}

  @Effect()
  loadNotes$: Observable<Action> = this.actions$
    .ofType(notes.NOTES_LOAD)
    .switchMap(() => this.service.loadList()
      .map(data => new notes.NotesLoadedAction(data)));
}
