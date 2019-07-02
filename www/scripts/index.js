var images = [
  "images/g1.jpg",
  "images/g3.jpg",
  "images/g4.jpg",
  "images/g5.jpg",
  "images/g6.jpg"
];

var i = 0;
var time = 3000;


function autoSlide () {
  var myImage = document.getElementById("slideshowImage");

  if (i < images.length-1) {
    i ++;
  } else {
    i = 0;
  }

  myImage.setAttribute("src", images[i]);
  setTimeout("autoSlide()", time);

}

window.onload = autoSlide;

// Source: Lab 12 (my own solutions)
// Automation help from https://jsfiddle.net/bradtraversy/74ownd01/
