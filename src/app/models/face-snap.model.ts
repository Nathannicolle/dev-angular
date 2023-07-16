export class FaceSnap {
  title!: string;
  description!: string;
  creationDate!: Date;
  snaps!: number;
  imageURL!:string;
  isSnapped!: boolean;
  txtButton!: string;

  // Getters
  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getCreationDate() {
    return this.creationDate;
  }

  getSnaps() {
    return this.snaps;
  }

  getImageURL() {
    return this.imageURL;
  }

  getIsSnapped() {
    return this.isSnapped;
  }

  getTxtButton() {
    return this.txtButton;
  }

  // Setters
  setTitle(title : string) {
    this.title = title;
  }

  setDescription(description : string) {
    this.description = description;
  }

  setCreationDate(creationDate : Date) {
    this.creationDate = creationDate;
  }

  setSnaps(snaps : number) {
    this.snaps = snaps;
  }

  setImageURL(imageURL : string) {
    this.imageURL = imageURL;
  }

  setIsSnapped(isSnapped : boolean) {
    this.isSnapped = isSnapped;
  }

  setTxtButton() {
    this.onSnapClick();
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
