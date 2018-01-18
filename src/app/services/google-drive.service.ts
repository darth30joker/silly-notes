import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { environment } from '../../environments/environment';

import { UserService } from './user.service';

@Injectable()
export class GoogleDriveService {
  private readonly ENDPOINT_URL: string = 'https://www.googleapis.com/drive/v3';
  private authHeader: Headers = new Headers();

  constructor(private http: Http,
              private service: UserService) { }

  sync() {

  }

  saveList() {

  }

  save() {

  }

  private init() {
    this.createFolder("SillyNotes");
  }

  private createFolder(name: string) {
    this.http.post(this.ENDPOINT_URL + '/files', {}, {headers: this.authHeader});
  }
}
