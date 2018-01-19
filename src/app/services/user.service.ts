import { Injectable, NgZone } from '@angular/core';

import { environment } from '../../environments/environment';

import { GoogleAuthService } from "ng-gapi/lib/GoogleAuthService";
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;

@Injectable()
export class UserService {
  public static readonly SESSION_STORAGE_KEY: string = "accessToken";
  public static readonly SERVICE_TYPE: string = "serviceType";
  public static readonly GOOGLE_DRIVE: string = "googleDrive";

  private user: GoogleUser = undefined;

  constructor(private googleAuthService: GoogleAuthService,
              private ngZone: NgZone) {
  }

  signIn() {
    if (!environment.production) {
      sessionStorage.setItem(UserService.SESSION_STORAGE_KEY, "fake token");
      return;
    }

    this.googleAuthService.getAuth().subscribe((auth) => {
      auth.signIn().then(res => this.signInSuccessHandler(res), err => this.signInErrorHandler(err));
    });
  }

  public getToken(): string {
    let token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    if (!token) {
        throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
  }

  private signInSuccessHandler(res: GoogleUser) {
    this.ngZone.run(() => {
        this.user = res;
        sessionStorage.setItem(
            UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
        )
        sessionStorage.setItem(UserService.SERVICE_TYPE, UserService.GOOGLE_DRIVE);
    });
  }

  private signInErrorHandler(err) {
      console.warn(err);
  }
}
