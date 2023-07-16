import { Component, OnInit } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  ngOnInit() {
    let faceSnap1 = new FaceSnap();
    faceSnap1.setTitle("A day as a dev !");
    faceSnap1.setDescription("A cool work !");
    faceSnap1.setImageURL("/assets/img/bg_site_pro_mini.jpg");
    faceSnap1.setCreationDate(new Date(2023, 7, 14));
    faceSnap1.setSnaps(0);
    faceSnap1.setIsSnapped(false);
  }

  // Listeners
  onSnapClick() {
    if(this.isSnapped === false) {
      this.onAddSnap();
    } else {
      this.onRemoveSnap();
    }
  }

  onAddSnap() {
    this.snaps++;
    this.isSnapped=true;
    this.txtButton="Unsnap 😭 !";
  }

  onRemoveSnap() {
    this.snaps--;
    this.isSnapped=false;
    this.txtButton="Snap it 😃 !";
  }
}
