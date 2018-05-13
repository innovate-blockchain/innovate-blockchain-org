import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public openDialog() {
    let dialogRef = this.dialog.open(ProfilePictureComponent, {
      width: '20%',
      height: '65%',
      data: { errorcode: "", errormessage: "" }
    });
  }
}
