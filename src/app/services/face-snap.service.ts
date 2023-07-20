import {Injectable} from "@angular/core";
import {FaceSnap} from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: "A day as a dev!",
      description: "That's fascinating !",
      imageURL: "/assets/img/bg_site_pro_mini.jpg",
      creationDate: new Date(),
      snaps: 3
    },
    {
      id: 2,
      title: "A wonderful app!",
      description: "That's my first Angular App !",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png",
      creationDate: new Date(),
      snaps: 150
    },
    {
      id: 3,
      title: "A wonderful app!",
      description: "That's my first Angular App !",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png",
      creationDate: new Date(),
      snaps: 255,
      location: "Miami"
    },
    {
      id: 4,
      title: "A day as a dev!",
      description: "That's fascinating !",
      imageURL: "/assets/img/bg_site_pro_mini.jpg",
      creationDate: new Date(),
      snaps: 1500
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  snapFaceSnapById(id: number): void {
    this.faceSnaps.forEach((faceSnap) => {
      if (faceSnap.id === id && faceSnap) {
        faceSnap.snaps++;
      } else if(!faceSnap) {
        throw new Error("Le FaceSnap n'existe pas !");
      }
    });
  }

  unSnapFaceSnapById(id: number): void {
    this.faceSnaps.forEach((faceSnap) => {
      if (faceSnap.id === id && faceSnap) {
        faceSnap.snaps--;
      } else if(!faceSnap) {
        throw new Error("Le FaceSnap n'existe pas !");
      }
    });
  }
}
