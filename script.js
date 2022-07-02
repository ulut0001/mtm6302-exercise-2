// adding images

const $smallImage = document.getElementById("small-box");
const smallImages = [];
const imageWidths = [];
const imageHeights = [];

for(i = 1; i <= 12; i++) {
    const imgId = "img-" + i;
    smallImages.push(`<img class="small-image" id="${imgId}" src="images/img${i}.JPG">`);
};

$smallImage.innerHTML += smallImages.join(""); 

/* 
Dynamically positioning the images (at least tries)

var imgResizer = document.querySelectorAll("#small-box > img");
for(x = 0; x < 12; x++){
    imageWidths.push(imgResizer[x].naturalWidth);
    imageHeights.push(imgResizer[x].naturalHeight);
};

for(d = 0; d < 12; d++) {
    if(imageHeights[d] > imageWidths[d]) { imgResizer[d].style.gridArea = "span 6 / span 4"}
    else {imgResizer[d].style.gridArea = "span 4 / span 6"};
}; 
*/

// Big Picture Event Listening

/*
Video Method
const $bigBox = document.getElementById("big-box");
let $smallimages = document.querySelectorAll(".small-image");

if($smallimages) {
    $smallimages.forEach(function(thumb){
        thumb.onclick = function() {
            let elementName = window.getComputedStyle(thumb);
            let elementClass = elementName.getPropertyValue("id");
            alert("${elementClass}")
        }
    })
}; */

//IMDAC Method

const $bigBox = document.getElementById("big-box");
const $bigImage = document.getElementById("bimage");
let $smallimages = document.querySelectorAll(".small-image");
const bigImageTitle = document.getElementById("image-title");
const imageTitle = {
    img1: "Gece, low light",
    img2: "Batman Concert",
    img3: "Flash Gece",
    img4: "Gece Portrait",
    img5: "Small kid on big chair",
    img6: "Gece is on high ground",
    img7: "Jumping Gece",
    img8: "Symetric lego men",
    img9: "100-years old building",
    img10: "Glasses comes from 8000km",
    img11: "Our street low angle",
    img12: "Shadows on the street",
};

function makeBig(e) {
    const sImages = e.target.id;
    const imgNew = sImages.replace("-","");
    $bigImage.src = `images/b${imgNew}.jpg`;
    $bigBox.style.display = "flex";
    bigImageTitle.innerHTML = imageTitle[imgNew];
};

function closeFull() {
    $bigBox.style.display = "none";
};

for (const sImages of $smallimages) {
    sImages.addEventListener('click', makeBig)
};

$bigBox.addEventListener("click", closeFull);



