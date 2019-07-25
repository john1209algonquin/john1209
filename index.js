/* INJECT IMAGES VIA JS */

const thumbs = [];

thumbs.push(`<div class="gallery__card"><img src="images/image1.jpg" class="shadow" alt="Clock Tower"><p class="alt">Clock Tower</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image2.jpg" class="shadow" alt="Top"><p class="alt">Top</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image3.jpg" class="shadow" alt="Natural Area"><p class="alt">Natural Area</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image4.jpg" class="shadow" alt="Looking Up"><p class="alt">Looking Up</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image5.jpg" class="shadow" alt="Cloudy Church"><p class="alt">Cloudy Church</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image6.jpg" class="shadow" alt="Tree Silhouette"><p class="alt">Tree Silhouette</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image7.jpg" class="shadow" alt="Forest Shadows"><p class="alt">Forest Shadows</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image8.jpg" class="shadow" alt="Obrien Theater"><p class="alt">Obrien Theater</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image9.jpg" class="shadow" alt="Stumped"><p class="alt">Stumped</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image10.jpg" class="shadow" alt="Waterway"><p class="alt">Waterway</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image11.jpg" class="shadow" alt="Stained Glass"><p class="alt">Stained Glass</p></div>`)
thumbs.push(`<div class="gallery__card"><img src="images/image12.jpg" class="shadow" alt="Sunny Church"><p class="alt">Sunny Church</p></div>`)

const $gallery = document.querySelector(".gallery");

$gallery.innerHTML = thumbs.join(" ");

/* DISPLAY THE P TEXT OVER THUMBNAILS */

document.querySelector(".shadow").addEventListener("mouseover", function(e){
    $image = e.target.closest('.alt')
    if($image){
        $image.style.opacity = "1";
    }
});

document.querySelector(".shadow").addEventListener("mouseout", function(e){
    $image = e.target.closest('.alt')
    if($image){
        $image.style.opacity = "0";
    }
});

document.querySelector(".gallery").addEventListener("click", function(){
    $gallery.classList.toggle('clear')
});