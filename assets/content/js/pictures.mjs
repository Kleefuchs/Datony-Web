import { ImageViewer } from "/assets/content/js/imageviewer.mjs";
var imageViewer = new ImageViewer();


function getFilesInDirectory(path) {
    var paths = new Array;

    $.ajax({
        url : path,
        success: function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                    paths.push(path + val);
                } 
            });
        }
    });
    return paths;
}


export function initImageViewer() {
    imageViewer.setIMGViewElement("img-view");
    console.log(getFilesInDirectory("/assets/images/gallery"));
    imageViewer.loadImages(getFilesInDirectory("/assets/images/gallery"));
    console.log(imageViewer.imagesPaths);
    imageViewer.setImage(0);
    var nextButton = document.getElementById("img-next-button").addEventListener("click", function() {
        imageViewer.nextImage();
    });
    var prevButton = document.getElementById("img-prev-button").addEventListener("click", function() {
        imageViewer.prevImage();
    });
}

