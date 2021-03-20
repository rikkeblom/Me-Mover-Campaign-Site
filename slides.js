var slideNumber = 1;
showSlides(slideNumber);

function changeSlide(n) {
  showSlides((slideNumber += n));
}

function showSlides(n) {
  var i;
  var x = document.querySelectorAll(".slide");
  if (n > x.length) {
    slideNumber = 1;
  }
  if (n < 1) {
    slideNumber = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideNumber - 1].style.display = "block";
  console.log(x.length);
}
