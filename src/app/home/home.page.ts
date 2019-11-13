import { Component } from '@angular/core';
import { MediaCapture, MediaFile } from '@ionic-native/media-capture/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public mediaCapture: MediaCapture,
    public socialSharing: SocialSharing
  ) {}

  CaptureAudio() {
    this.mediaCapture.captureAudio().then((audio:MediaFile[]) => {
      this.ShareMedia('audio captures by X-APP', 'Audio Subject', audio[0].fullPath, '');
    }, (err) => {alert(JSON.stringify(err))});
  }

  CaptureVideo() {
    this.mediaCapture.captureVideo().then((video:MediaFile[]) => {
      this.ShareMedia('video captures by X-APP', 'Video Subject', video[0].fullPath, '');
    }, (err) => {alert(JSON.stringify(err))});
  }

  CaptureImage() {
    this.mediaCapture.captureImage().then((image:MediaFile[]) => {
      this.ShareMedia('image captures by X-APP', 'Image Subject', image[0].fullPath, '');
    }, (err) => {alert(JSON.stringify(err))});
  }

  ShareMedia (message, subject, filepath, url) {
    this.socialSharing.share(message, subject, filepath, url).then(() => {

    }, (err) => {alert(JSON.stringify(err))});
  }
}
