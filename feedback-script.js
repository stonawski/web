var slideIndex = 0;
showSlide(slideIndex);

function moveToNextSlide() {
  showSlide(slideIndex+1);
}

function moveToPrevSlide() {
  showSlide(slideIndex-1);
}

function moveToSlide(n) {
  showSlide(n);
}

// změna slidu
function showSlide(n) {
  var i = 0;
  var slides = document.getElementsByClassName("slideshow__slide");
  
  if (n >= slides.length) {
    slideIndex = 0;
  }    
  else if (n < 0) {
    slideIndex = slides.length - 1;
  }
  else {
    slideIndex = n;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active")
  }

  slides[slideIndex].classList.add("active");
}


// automatické přehrávání slidů
function playSlides() {
  return setInterval(function(){showSlide(slideIndex+=1);}, 3000); 
}

// zastavení přehrávání
function stopSlides(p) {
  clearInterval(p)
}
