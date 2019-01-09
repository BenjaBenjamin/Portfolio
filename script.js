/* Off canvas navigation*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector("#mySidenav").classList.remove("hide");
        document.querySelector("#openbtn").classList.remove("hide");
    }
}

var x = window.matchMedia("(max-width: 400px)");
myFunction(x)
x.addListener(myFunction);



/*Slideshow*/
var slideIndex = 0;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000); // Change image every 10 seconds
}
