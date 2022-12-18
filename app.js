//To make navbar more responsive //

function navbarMenuStyleChange() {
  hamburger = document.querySelector(".hamburger");
  hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  };
}

navbarMenuStyleChange();


/*function changeBorder() {
  document.getElementById("tablemen").style.borderColor = "black";
} */

function headerBackgroundChanger(){
document.addEventListener("scroll", function () { //listening for a scroll action
 // console.log("scroll");
 /*var change =*/ document.getElementById("headeris").style.backgroundColor = '#061021'; //selecting element and changing it's background color
 //console.log('change', change)
});
}

headerBackgroundChanger();


//Function to make a slideshow of images//

let slidePosition = 0; //
function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers"); // Selecting the containers class from html
  for (i = 0; i < slides.length; i++) { //This is a loop, we start at 0, declare the legth of the loop, we increment by 1.
    slides[i].style.display = "none"; // We hide the each element of the array
  }
  slidePosition++; // We add 1 to slidePosition
  if (slidePosition > slides.length) { //Boolean, logical operation, is position bigger than length?
    slidePosition = 1;// changes position to 1
  }
  slides[slidePosition - 1].style.display = "block"; //A specific slide, based on position displays as block
  setTimeout(SlideShow, 3000); // Change image every 5 seconds
}
SlideShow();
