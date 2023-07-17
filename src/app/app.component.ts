import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  ngOnInit() {
    this.faceSnap = new FaceSnap("A day as a dev!", "That's fascinating !", "/assets/img/bg_site_pro_mini.jpg", new Date(), 3);;
  }
}



