import { Injectable } from '@angular/core';

import { Note } from './note.model';

@Injectable()
export class NotesService {

  constructor() { }

  load(title: string): Note {
    return new Note(title, "## fake content\nJust testing markdown");
  }
}
