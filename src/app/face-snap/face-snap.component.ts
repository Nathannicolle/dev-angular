import { Component, OnInit, Input } from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";
import {FaceSnapService} from "../services/face-snap.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  isSnapped!: boolean;
  txtButton!: string;

  constructor(private faceSnapService : FaceSnapService) {
  }

  ngOnInit() {
    this.isSnapped = false;
    this.txtButton = "Snap it 😃 !";
  }

  // Listeners
  onSnapClick() {
    if(!this.isSnapped) {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
      this.isSnapped=true;
      this.txtButton="Unsnap 😭 !";
    } else {
      this.faceSnapService.unSnapFaceSnapById(this.faceSnap.id);
      this.isSnapped=false;
      this.txtButton="Snap it 😃 !";
    }
  }
}
