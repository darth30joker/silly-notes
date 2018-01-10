import { Note } from '../note.model';
import { NoteMeta } from '../note-meta.model';

import * as notes from './notes';

export interface State {
  note: Note,
  notes: NoteMeta[]
}

export const getNoteState = (state: State) => state.note;
export const getNotesState = (state: State) => state.notes;

export const reducers = {
  notes: notes.reducer
}
