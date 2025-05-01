import * as jquery3 from '../node_modules/jquery/dist/jquery.min.js';

export class ImageViewer {
  imagesPaths;
  loadImages(jsonPath) {
    json = $.getJSON("/assets/content/json/selected-for-viewing.json");
    this.imagesPaths = json["images"]["paths"];
    console.log(imagesPaths);
  }
};
