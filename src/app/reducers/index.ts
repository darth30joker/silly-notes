import { Note } from '../note.model';
import { NoteMeta } from '../note-meta.model';

import * as notes from './notes';
import * as note from './note';

export interface State {
  note: Note,
  notes: NoteMeta[]
}

export const getNoteState = (state: State) => state.note;
export const getNotesState = (state: State) => state.notes;

export const reducers = {
  note: note.reducer,
  notes: notes.reducer
}
