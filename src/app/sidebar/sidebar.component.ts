import { Component, OnInit } from '@angular/core';

import { NotesService } from '../notes.service';

import { Note } from '../note.model';
import { NoteMeta } from '../note-meta.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  notesList: NoteMeta[];

  constructor(private service: NotesService) { }

  ngOnInit() {
    this.notesList = this.service.loadList();
  }

  create() {
    this.service.createEmptyNote();
  }
}
