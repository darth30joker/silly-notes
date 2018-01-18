import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

const routes: Routes = [
  { path: 'notes',  component: NoteListComponent },
  { path: 'notes/edit',  component: NoteEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
