import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  creationDate!: Date;
  snaps!: number;
  imageURL!:string;
  isSnapped!: boolean;
  txtButton!: string;

  ngOnInit() {
    this.isSnapped = false;
    this.txtButton = "Snap it 😃 !";
  }

  // Listeners
  onSnapClick() {
    if(!this.isSnapped) {
      this.onAddSnap();
    } else {
      this.onRemoveSnap();
    }
  }

  onAddSnap() {
    this.faceSnap.snaps++;
    this.isSnapped=true;
    this.txtButton="Unsnap 😭 !";
  }

  onRemoveSnap() {
    this.faceSnap.snaps--;
    this.isSnapped=false;
    this.txtButton="Snap it 😃 !";
  }
}
