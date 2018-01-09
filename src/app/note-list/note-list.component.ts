import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { NotesService } from '../notes.service';

import { Note } from '../note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})

export class NoteListComponent implements OnInit {
  note: Note = null;
  isEditing: boolean = false;

  constructor(private route: ActivatedRoute,
              private service: NotesService) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.note = this.service.load(fragment);
    });
  }

  edit() {
    this.isEditing = true;
  }
}
