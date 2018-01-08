import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'notes',  component: NotesComponent },
  { path: 'notes/:title',  component: NotesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
