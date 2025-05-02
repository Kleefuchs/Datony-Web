import * as jquery3 from '/node_modules/jquery/dist/jquery.min.js';

export class ImageViewer {
  imagesPaths;
  async loadImages(jsonPath) {
    console.info("Test");
    await fetch(jsonPath)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.error(e));
  }
}
