import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap2!: FaceSnap;
  faceSnap3!: FaceSnap

  ngOnInit() {
    this.faceSnap = new FaceSnap(
      "A day as a dev!",
      "That's fascinating !",
      "/assets/img/bg_site_pro_mini.jpg",
      new Date(),
      3);
    this.faceSnap2 = new FaceSnap(
      "A wonderful app!",
      "That's my first Angular App !",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png",
      new Date(),
      3);
    this.faceSnap3 = new FaceSnap(
      "A wonderful app!",
      "That's my first Angular App !",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png",
      new Date(),
      3,
      "Miami");
  }
}



