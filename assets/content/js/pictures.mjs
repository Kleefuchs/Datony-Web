import { ImageViewer } from "/assets/content/js/imageviewer.mjs";
var imageViewer = new ImageViewer();

export function initImageViewer() {
  imageViewer.setIMGViewElement("img-view");
  imageViewer.loadImagesFromJson("/assets/content/json/selected-for-view.json");
  console.log(imageViewer.imagesPaths);
  imageViewer.setImage(0);
  var nextButton = document.getElementById("img-next-button").addEventListener("click", function() {
    imageViewer.nextImage();
  });
  var prevButton = document.getElementById("img-prev-button").addEventListener("click", function() {
    imageViewer.prevImage();
  });
}

