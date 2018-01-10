import { Action } from '@ngrx/store';

import { NoteMeta } from '../note-meta.model';

export const NOTES_LOAD = '[NOTES] Load';
export const NOTES_LOADED = '[NOTES] Loaded';

export class NotesLoadAction implements Action {
  type = NOTES_LOAD;
}

export class NotesLoadedAction implements Action {
  type = NOTES_LOADED;

  constructor(public payload: NoteMeta[]) {}
}
