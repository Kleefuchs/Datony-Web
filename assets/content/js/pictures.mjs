import { ImageViewer } from "/assets/content/js/imageviewer.mjs";

export function initImageViewer() {
  var imageViewer = new ImageViewer();
  imageViewer.setIMGViewElement("img-view");
  imageViewer.loadImages("/assets/content/json/selected-for-view.json");
  console.log(imageViewer.imagesPaths);
  imageViewer.setImage(0);
}

