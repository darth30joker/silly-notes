import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'sign-in',  component: SignInComponent },
  { path: 'notes',  component: NoteListComponent },
  { path: 'notes/edit',  component: NoteEditComponent },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
