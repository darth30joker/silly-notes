import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { NotesService } from '../notes.service';

import { Note } from '../note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  note: Note;

  constructor(private route: ActivatedRoute,
              private service: NotesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.note = this.service.load(params['title']);
    })
  }

}
