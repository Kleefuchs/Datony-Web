import * as jquery3 from '/node_modules/jquery/dist/jquery.min.js';

export class ImageViewer {
  imagesPaths = [];
  currentImageIndex = 0;
  imgViewElement;

  _info(msg) {
    console.info("IMAGEVIEWER: " + msg);
  }

  setIMGViewElement(id) {
    this.imgViewElement = document.getElementById(id);
  }

  loadImages(path) {
    var paths = new Array();
    $.ajax({
      async: false,
      url: path,
      success: function (jd) {
        var lines = jd.images.paths;
        lines.forEach((line) => {
          paths.push(line);
        });
      },
    });
    this.imagesPaths = paths;
  }

  setImage(index) {
    if(index < 0) {
      this.currentImageIndex = this.imagesPaths.length - 1;
      return;
    }
    if(index > this.imagesPaths.length - 1) {
      this.currentImageIndex = 0;
      return;
    }
    this.currentImageIndex = index;
    this.imgViewElement.src = this.imagesPaths[this.currentImageIndex];
    this._info("Image \"" + this.imagesPaths[this.currentImageIndex] + "\" was loaded. Index: " + this.currentImageIndex);
    return;
  }

  nextImage() {
    this.setImage(this.currentImageIndex + 1);
  }
}
