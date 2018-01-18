import { Action } from '@ngrx/store';

import { NoteMeta } from '../note-meta.model';
import { Note } from '../note.model';

export const NOTES_LOAD = '[NOTES] Load';
export const NOTES_LOADED = '[NOTES] Loaded';

export const NOTE_LOAD = '[NOTE] Load';
export const NOTE_LOADED = '[NOTE] Loaded';

export const NOTE_SAVE = '[NOTE] Save';
export const NOTE_SAVED = '[NOTE] Saved';

export const NOTE_DELETE = '[NOTE] Delete';
export const NOTE_DELETED = '[NOTE] Deleted';

export class NotesLoadAction implements Action {
  type = NOTES_LOAD;
}

export class NotesLoadedAction implements Action {
  type = NOTES_LOADED;

  constructor(public payload: NoteMeta[]) {}
}

export class NoteLoadAction implements Action {
  type = NOTE_LOAD;

  constructor(public payload: string) {}
}

export class NoteLoadedAction implements Action {
  type = NOTE_LOADED;

  constructor(public payload: Note) {}
}

export class NoteSaveAction implements Action {
  type = NOTE_SAVE;

  constructor(public payload: any) {}
}

export class NoteSavedAction implements Action {
  type = NOTE_SAVED;
}

export class NoteDeleteAction implements Action {
  type = NOTE_DELETE;

  constructor(public payload: string) {}
}

export class NoteDeletedAction implements Action {
  type = NOTE_DELETED;
}
