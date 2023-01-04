// Get the navbar element
let navbar = document.getElementById("stickyNavbar");

//Get the HAMBURGER
let crossHam = document.getElementById("navCross");

//Get the NavLinks
const navLinks = document.querySelectorAll(".navLinks");

// When the user scrolls down, add the "scrolled" class to the navbar
window.onscroll = function () {
  if (window.scrollY <= 0) {
    navbar.classList.remove("stickyNavWidthHeight");
  } else {
    navbar.classList.add("stickyNavWidthHeight");
  }
};

//Hamburger Converts To Cross
crossHam.addEventListener("click", function () {
  this.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close the menu when a nav link is clicked
    const menu = document.querySelector("#hamButton");
    menu.setAttribute("aria-expanded", "false");
  });
});
