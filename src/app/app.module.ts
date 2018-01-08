import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute }   from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { NotesService } from './notes.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    SidebarComponent,
    NoteEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    MarkdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ NotesService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
