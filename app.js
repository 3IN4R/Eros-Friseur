//To make navbar more responsive //  

function navbarMenuStyleChange() {
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
    
}
}

  navbarMenuStyleChange();

 
//Function to make a slideshow of images//

  let slidePosition = 0; 
  function SlideShow() {
    var i;
    var slides = document.getElementsByClassName("Containers");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > slides.length) {slidePosition = 1}
    slides[slidePosition-1].style.display = "block";
    setTimeout(SlideShow, 5000); // Change image every 5 seconds
  } 

SlideShow();
