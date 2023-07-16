export class FaceSnap {
  title: string;
  description: string;
  creationDate: Date;
  snaps: number;
  imageURL:string;

  constructor(title:string, description:string, imageURL:string, creationDate:Date, snaps:number) {
    this.title = title;
    this.description = description;
    this.imageURL = imageURL;
    this.creationDate = creationDate;
    this.snaps = snaps;
  }
}
