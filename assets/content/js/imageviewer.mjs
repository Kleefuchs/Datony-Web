import * as jquery3 from '/node_modules/jquery/dist/jquery.min.js';

export class ImageViewer {
    imagesPaths = [];
    currentImageIndex = 0;
    imgViewElement;

    _info(msg) {
        console.info("IMAGEVIEWER INFO: " + msg);
    }

    setIMGViewElement(id) {
        this.imgViewElement = document.getElementById(id);
    }

    loadImage(path) {
        this.imagesPaths[this.imagesPaths.length] = path;
    }

    loadImages(paths) {
        console.log(paths);
        for (var i = 0; i < paths.length; i++) {
            console.log(paths[i]);
            this.loadImage(paths[i]);
        }
    }

    loadImagesFromJson(path) {
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
        this.loadImages(paths);
    }

    setImage(index) {
        if(index < 0) {
            this.currentImageIndex = this.imagesPaths.length - 1;
        } else if(index > this.imagesPaths.length - 1) {
            this.currentImageIndex = 0;
        } else {
            this.currentImageIndex = index;
        }
        this.imgViewElement.src = this.imagesPaths[this.currentImageIndex];
        this._info("Image \"" + this.imagesPaths[this.currentImageIndex] + "\" was loaded. Index: " + this.currentImageIndex);
        return;
    }

    nextImage() {
        this.setImage(this.currentImageIndex + 1);
    }

    prevImage() {
        this.setImage(this.currentImageIndex - 1);
    }
}
