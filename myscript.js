document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector(".navbar-toggle");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
});
