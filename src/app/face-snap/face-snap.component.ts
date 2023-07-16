import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  creationDate!: Date;
  snaps!: number;
  imageURL!:string;
  isSnapped!: boolean;
  txtButton!: string;

  ngOnInit() {
    this.title = "A day as a dev!";
    this.description = "That's fascinating !";
    this.creationDate = new Date();
    this.snaps = 3;
    this.imageURL = "/assets/img/bg_site_pro_mini.jpg";
    this.isSnapped = false;
    this.txtButton = "Snap it 😃 !";
  }
}
