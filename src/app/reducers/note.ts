import { Action } from '@ngrx/store';

import { Note } from '../note.model';

import * as notes from '../actions/notes';

export function reducer(state = [], action: notes.NoteLoadedAction) {
  switch(action.type) {
    case notes.NOTE_LOADED:
      return action.payload;
    default:
      return state;
  }
}
