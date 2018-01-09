import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { NotesService } from '../notes.service';

import { Note } from '../note.model';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})

export class NoteEditComponent implements OnInit {
  @Input() note: Note;

  constructor(private service: NotesService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.note = this.service.load(fragment);
    });
  }

  save() {
    this.service.save(this.note);

    this.router.navigate(['/notes'], {fragment: this.note.title});
  }

  cancel() {
    this.location.back();
  }
}
