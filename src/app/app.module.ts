import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute }   from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

import { NotesService } from './notes.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NoteListComponent,
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
