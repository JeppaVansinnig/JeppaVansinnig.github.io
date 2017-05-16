// JavaScript Document
var slideIndex = 1;
var förra = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

function årByte(val) {
	var x = document.getElementsByClassName("år");
	
	for(var i = 0; i <= val; i++) {
		x[i].style.transform = "translateX(0%)";
	}
	for(var i = x.length - 1; i > val; i--) {
		x[i].style.transform = "translateX(100%)";
	}
}