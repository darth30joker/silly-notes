import { Component, OnInit } from '@angular/core';

import { GoogleDriveService } from '../services/google-drive.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private driveService: GoogleDriveService) { }

  ngOnInit() {
  }

  showFiles() {
    this.driveService.listFiles();
  }
}
