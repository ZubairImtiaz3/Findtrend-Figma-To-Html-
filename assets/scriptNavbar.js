// Get the navbar element
let navbar = document.getElementById("stickyNavbar");

// When the user scrolls down, add the "scrolled" class to the navbar
window.onscroll = function () {
  if (window.scrollY <= 0) {
    navbar.classList.remove("stickyNavWidthHeight");
  } else {
    navbar.classList.add("stickyNavWidthHeight");
  }
};
