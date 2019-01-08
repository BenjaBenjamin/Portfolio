/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
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

var x = window.matchMedia("(max-width: 400px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
