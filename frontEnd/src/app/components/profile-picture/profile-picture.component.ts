import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NgZone, Renderer } from '@angular/core';
import { ProfilePictureService } from './profile-picture.service';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

  currentPic: string = "../../../assets/account_circle_black.png";
  selectedImage: File;

  constructor(dialogRef: MatDialogRef<ProfilePictureComponent>,
    private ngZone: NgZone, private renderer: Renderer,
    private profilePictureService: ProfilePictureService) { }

  public openFileDialog() {
    this.renderer.selectRootElement('#fileInput').click();
  }

  public selectFile(selectedFile: HTMLInputEvent) {
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.currentPic = event.target.result;
    }
    this.selectedImage = selectedFile.target.files[0];
    reader.readAsDataURL(this.selectedImage);
  }

  public uploadFile() {
    this.profilePictureService.uploadImage(this.selectedImage).subscribe(result => {
      console.log(result.status.toString());
    });
  }

  ngOnInit() {
  }

}
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
