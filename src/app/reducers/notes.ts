import { Action } from '@ngrx/store';

import { NoteMeta } from '../note-meta.model';

import * as notes from '../actions/notes';

export function reducer(state = [], action: notes.NotesLoadedAction) {
  switch(action.type) {
    case notes.NOTES_LOADED:
      return action.payload;
    default:
      return state;
  }
}
