import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { NotesService } from '../notes.service';

import { Note } from '../note.model';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})

export class NoteEditComponent {
  @Input() note: Note;

  constructor(private service: NotesService,
    private location: Location) { }

  save() {
    this.service.save(this.note);
  }

  cancel() {
    this.location.back();
  }
}
