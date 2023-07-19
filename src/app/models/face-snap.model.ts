export class FaceSnap {
  constructor(public title:string,
              public description:string,
              public imageURL:string,
              public creationDate:Date,
              public snaps:number,
              public location?:string) {}
}
