//To make navbar more responsive //

function navbarMenuStyleChange() {
  hamburger = document.querySelector(".hamburger");
  hamburger.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
  };
}

navbarMenuStyleChange();



function headerBackgroundChangerUpdated(){
var scrollBefore = 0;

window.addEventListener('scroll',function(e){
    const scrolled = window.scrollY;

    if(scrollBefore > scrolled){
        console.log("ScrollUP");
        scrollBefore = scrolled;
        var change2 = document.getElementById("headeris").style.backgroundColor = '#06102100'
        //Desired action
    }else{
        scrollBefore = scrolled;
        console.log("ScrollDOWN");
        var change = document.getElementById("headeris").style.backgroundColor = '#061021';
        //Desired action
    }

})
}
headerBackgroundChangerUpdated();


if (window.matchMedia('(max-width: 900px)').matches) {
  function nameFunction() {
      return false;
  }
} else {
  
}


/*function changeBorder() {
  document.getElementById("tablemen").style.borderColor = "black";
} */

/* Change index header background on scroll*/

//function headerBackgroundChanger(){
//document.addEventListener("scroll", function () { //listening for a scroll action
 //console.log("scroll");
 //var change = document.getElementById("headeris").style.backgroundColor = '#061021'; //selecting element and changing it's background color
 //console.log('change', change)
//});
//}

//headerBackgroundChanger();


//Function to make a slideshow of images//

//let slidePosition = 0; //
//function SlideShow() {
 // var i;
 // var slides = document.getElementsByClassName("Containers"); // Selecting the containers class from html
 // for (i = 0; i < slides.length; i++) { //This is a loop, we start at 0, declare the legth of the loop, we increment by 1.
  //  slides[i].style.display = "none"; // We hide the each element of the array
  //}
 // slidePosition++; // We add 1 to slidePosition
 // if (slidePosition > slides.length) { //Boolean, logical operation, is position bigger than length?
 //   slidePosition = 1;// changes position to 1
 // }
 // slides[slidePosition - 1].style.display = "block"; //A specific slide, based on position displays as block
 // setTimeout(SlideShow, 3000); // Change image every 5 seconds
//}
//SlideShow();



function langChange(){
  let team = document.getElementById('tim');
  if (team.innerHTML === 'The Team') {
    team.innerHTML = 'Vores Team';
  } else {
    team.innerHTML = 'The Team';
  }
  let galler = document.getElementById('galleri');
  if (galler.innerHTML === 'Gallery') {
    galler.innerHTML = 'Galleri';
  } else {
    galler.innerHTML = 'Gallery';
  }
  let kontakt = document.getElementById('kont');
  if (kontakt.innerHTML === 'Contact') {
    kontakt.innerHTML = 'Kontakt';
  } else {
    kontakt.innerHTML = 'Contact';
  }
  let bookingBut = document.getElementById('book');
  if (bookingBut.innerHTML === 'Book Now') {
    bookingBut.innerHTML = 'Book Nu';
  } else {
    bookingBut.innerHTML = 'Book Now';
  }
  let bookBtn = document.getElementById('bookbtn');
  if (bookBtn.innerHTML === 'Book Now') {
    bookBtn.innerHTML = 'Book Nu';
  } else {
    bookBtn.innerHTML = 'Book Now';
  }
  let whyUs = document.getElementById('why');
  if (whyUs.innerHTML === 'WHY CHOOSE US?') {
    whyUs.innerHTML = 'HVORFOR OS?';
  } else {
    whyUs.innerHTML = 'WHY CHOOSE US?';
  }
  let openHours = document.getElementById('opening');
  if (openHours.innerHTML === 'Opening hours') {
    openHours.innerHTML = 'Åbningstider';
  } else {
    openHours.innerHTML = 'Opening hours';
  }

  let imageChange = document.getElementById('dklang').src;
  if (imageChange.indexOf('dk.jpeg') !=-1){
    document.getElementById('dklang').src = 'img/eng.webp';
  } else {
    document.getElementById('dklang').src = 'img/dk.jpeg';
  }

  let slogan = document.getElementById('contact-us');
  if (slogan.innerHTML === 'Get in touch') {
    slogan.innerHTML = 'Find os';
  } else {
    slogan.innerHTML = 'Get in touch';
  }

  let para = document.getElementById('men');
  if (para.innerHTML === 'Men') {
    para.innerHTML = 'Mænd';
  } else {
    para.innerHTML = 'Men';
  }

  let para1 = document.getElementById('women');
  if (para1.innerHTML === 'Women') {
    para1.innerHTML = 'Kvinder';
  } else {
    para1.innerHTML = 'Women';
  }

  let klip = document.getElementById('klip');
  if (klip.innerHTML === 'Haircut - 175dkk') {
    klip.innerHTML = 'Klip - 175dkk';
  } else {
    klip.innerHTML = 'Haircut - 175dkk';
  }
  let klipVask = document.getElementById('klipvask');
  if (klipVask.innerHTML === 'Haircut with wash - 190dkk') {
    klipVask.innerHTML = 'Klip med vask - 190dkk';
  } else {
    klipVask.innerHTML = 'Haircut with wash - 190dkk';
  }

  let beard = document.getElementById('beard');
  if (beard.innerHTML === 'Beard-trim - 150dkk') {
    beard.innerHTML = 'Skæg - 150dkk';
  } else {
    beard.innerHTML = 'Beard-trim - 150dkk';
  }

  let klipKvinder = document.getElementById('klipKv');
  if (klipKvinder.innerHTML === 'Haircut - 200dkk') {
    klipKvinder.innerHTML = 'Klip - 200dkk';
  } else {
    klipKvinder.innerHTML = 'Haircut - 200dkk';
  }

  let klipKvinderVask = document.getElementById('klipvaskkv');
  if (klipKvinderVask.innerHTML === 'Haircut with wash - 215dkk') {
    klipKvinderVask.innerHTML = 'Klip med vask - 215dkk';
  } else {
    klipKvinderVask.innerHTML = 'Haircut with wash - 215dkk';
  }

  let dye = document.getElementById('hairdye');
  if (dye.innerHTML === 'Hair-dye - 300dkk') {
    dye.innerHTML = 'Farve - 300dkk';
  } else {
    dye.innerHTML = 'Hair-dye - 300dkk';
  }
}

let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}




