import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute }   from '@angular/router';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';

import { NotesService } from './notes.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MarkdownToHtmlModule.forRoot(),
    AppRoutingModule
  ],
  providers: [ NotesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
