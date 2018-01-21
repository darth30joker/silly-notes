import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
import { GoogleDriveService } from '../services/google-drive.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(private service: UserService,
              private driveService: GoogleDriveService) { }

  ngOnInit() {
  }

  signIn() {
    // this.service.signIn();
    this.service.checkSignInStatus();
    // this.driveService.findOrCreateFolder();
  }
}
