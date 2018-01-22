import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';

import { environment } from '../environments/environment';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { NotesEffects } from './effects/notes';

// import ClientConfig = gapi.auth2.ClientConfig;
// import { GoogleApiModule, NG_GAPI_CONFIG } from "ng-gapi";

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

import { UserService } from './services/user.service';
import { NotesService } from './services/notes.service';
import { GoogleDriveService } from './services/google-drive.service';

import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { TestComponent } from './test/test.component';

// let gapiClientConfig: ClientConfig = {
//   client_id: "",
//   // discoveryDocs: ["https://analyticsreporting.googleapis.com/$discovery/rest?version=v4"],
//   scope: [
//       "https://www.googleapis.com/auth/drive"
//   ].join(" ")
// };

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NoteListComponent,
    NoteEditComponent,
    SignInComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MarkdownModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([NotesEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // GoogleApiModule.forRoot({
    //   provide: NG_GAPI_CONFIG,
    //   useValue: gapiClientConfig
    // }),
    AppRoutingModule
  ],
  providers: [ UserService, NotesService, GoogleDriveService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
