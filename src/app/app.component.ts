import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: "A day as a dev!",
        description: "That's fascinating !",
        imageURL: "/assets/img/bg_site_pro_mini.jpg",
        creationDate: new Date(),
        snaps:3
      },
      {
        title: "A wonderful app!",
        description: "That's my first Angular App !",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png",
        creationDate: new Date(),
        snaps:150
      },
      {
        title: "A wonderful app!",
        description: "That's my first Angular App !",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png",
        creationDate: new Date(),
        snaps: 255,
        location: "Miami"
      },
      {
        title: "A day as a dev!",
        description: "That's fascinating !",
        imageURL: "/assets/img/bg_site_pro_mini.jpg",
        creationDate: new Date(),
        snaps:1500
      },
    ];
  }
}



