import { ImageViewer } from "/assets/content/js/imageviewer.mjs";

async function initImageViewer() {
  var imageViewer = new ImageViewer();
  console.info("Test");
  await imageViewer.loadImages("/assets/content/json/selected-for-view.json");
}

initImageViewer();
