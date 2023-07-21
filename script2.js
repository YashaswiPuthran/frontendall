const accordionPlus = document.querySelector(".nav-accordion");

if (accordionPlus) {
  accordionPlus.addEventListener('click', function() {
    let accordionNew = this.nextElementSibling;
    if (accordionNew.style.display === "block") {
      accordionNew.style.display = "none";
    } else {
      accordionNew.style.display = "block";
    }
  });
}
