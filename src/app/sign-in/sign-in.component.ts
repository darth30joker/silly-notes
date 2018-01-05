import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

const retrievePromise = googleyolo.retrieve({
  supportedAuthMethods: [
    "https://accounts.google.com",
    "googleyolo://id-and-password"
  ],
  supportedIdTokenProviders: [
    {
      uri: "https://accounts.google.com",
      clientId: "YOUR_GOOGLE_CLIENT_ID"
    }
  ]
});

export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
