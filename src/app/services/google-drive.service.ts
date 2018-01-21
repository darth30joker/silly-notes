import { Injectable, NgZone } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http/src/client';

import { environment } from '../../environments/environment';

import { UserService } from './user.service';

import { NoteMeta } from '../note-meta.model';

// import client = gapi.client;

@Injectable()
export class GoogleDriveService {
  // https://angular.io/guide/http
  private readonly ENDPOINT_URL: string = 'https://www.googleapis.com/drive/v3';

  private readonly BASE_FOLDER_NAME: string = 'SillyNotes';

  private readonly FOLDER_MIME_TYPE: string = 'application/vnd.google-apps.folder';

  // private authHeader: HttpHeaders = new HttpHeaders();

  constructor(private ngZone: NgZone,
    // private http: HttpClient,
              // private drive: gapi.client.drive.FileList,
              private service: UserService) { }

  findOrCreateFolder() {
    // if (!this.folderExists(this.BASE_FOLDER_NAME)) {
    //   this.createFolder(this.BASE_FOLDER_NAME);
    // }

  }

  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      // authorizeButton.style.display = 'none';
      // signoutButton.style.display = 'block';
      this.listFiles();
    } else {
      // authorizeButton.style.display = 'block';
      // signoutButton.style.display = 'none';
    }
  }

  listFiles() {

  }

  findOrCreateManifest(): {} {
    return {};
  }

  createFile(meta: NoteMeta, content: string) {

  }

  updateFile(meta: NoteMeta, content: string) {

  }

  upload(meta: NoteMeta, content: string) {
    let endpoint = 'https://www.googleapis.com/upload/drive/v3?uploadType=media';
    // this.authHeader.append('Content-Type', 'text/x-markdown');

  }

  download(id: string): string {
    return "";
  }

  private folderExists(name: string): boolean {
    // let endpoint = this.ENDPOINT_URL + '/files';
    // let options = {params: {q: "name = '" + name + "' and mimeType = '" + this.FOLDER_MIME_TYPE + "'"},
    //                headers: this.authHeader};
    // this.http.get(endpoint, options).subscribe(data => {
    //   console.log(data);

    //   return true;
    // });

    return true;
  }

  private createFolder(name: string) {
    // let endpoint = this.ENDPOINT_URL + '/files';
    // let data = {name: name,
    //             mimeType: this.FOLDER_MIME_TYPE};
    // let options = {headers: this.authHeader};
    // this.http.post(endpoint, data, options).subscribe(data => console.log(data));
  }
}
