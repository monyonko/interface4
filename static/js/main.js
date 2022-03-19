let j = 0;
const images = [];
const time = 3000;
const slides = document.getElementsByClassName("slideshow");
const dots = document.getElementsByClassName("dot");

function addimages(){
    for(i=0; i<slides.length; i++){
        images.push(slides)
    }
    return images;
}  

let slideIndex = 1;
showSlides(slideIndex);

function nextImage(n) {
  showSlides(slideIndex += n);
}

function currentImage(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function changeImage(){
    addimages()
    if(i<images.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImage()",time);
}
window.onload = changeImage;

//SCALEIMAGE
// const measureWidth = function (text, font) {
//     // Create new `canvas` element
//     const canvas = document.createElement('canvas');

//     // Get the context
//     const context = canvas.getContext('2d');

//     // Set the font
//     context.font = font;

//     // Measure the text
//     const metrics = context.measureText(text);

//     // Return the width in pixels
//     return metrics.width;
// };


// // Query the element
// const ele = document.getElementById('virtual');

// // Get the styles
// const styles = window.getComputedStyle(ele);

// // Get the font size and font style
// const font = styles.font;
// const fontSize = parseInt(styles.fontSize);

// const measured = measureWidth(ele.textContent, font);
// const scale = ele.clientWidth / parseFloat(measured);
// const scaleFontSize = Math.floor(scale * fontSize);
// ele.style.fontSize = `${scaleFontSize}px`;