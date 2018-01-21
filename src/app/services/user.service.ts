import { Injectable, NgZone } from '@angular/core';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  public static readonly SESSION_STORAGE_KEY: string = "accessToken";
  public static readonly SERVICE_TYPE: string = "serviceType";
  public static readonly GOOGLE_DRIVE: string = "googleDrive";

  // private user: GoogleUser = undefined;
  private isSignedIn = false;

  constructor(private ngZone: NgZone) {
    gapi.load('client:auth2', function() {
      gapi.client.init({
        apiKey: 'AIzaSyD6zolKskSoaFMm9vX1b35SbU9s-Wck9EY',
        clientId: '804102129562-uqf83f6b4817hcft8qi6qsvstoradg79.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        scope: 'openid email profile https://www.googleapis.com/auth/drive.file'
      });
    });
  }

  signIn() {
    // if (!environment.production) {
    //   sessionStorage.setItem(UserService.SESSION_STORAGE_KEY, "fake token");
    //   return;
    // }
    gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
    this.isSignedIn = gapi.auth2.getAuthInstance().isSignedIn.get();

    if (!this.isSignedIn) {
      gapi.auth2.getAuthInstance().signIn();
    }
  }

  updateSigninStatus(isSignedIn) {
    this.isSignedIn = isSignedIn;
  }

  checkSignInStatus() {
    console.log(gapi.auth2.getAuthInstance().isSignedIn.get());
  }

  // private signInSuccessHandler(res: GoogleUser) {
  //   this.ngZone.run(() => {
  //       this.user = res;
  //       sessionStorage.setItem(
  //           UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
  //       )
  //       sessionStorage.setItem(UserService.SERVICE_TYPE, UserService.GOOGLE_DRIVE);
  //   });
  // }

  private signInErrorHandler(err) {
      console.warn(err);
  }
}
