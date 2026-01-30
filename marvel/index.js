
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  speed: 700,
  coverflowEffect: {
    rotate: 40,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
// information
let button = document.getElementById("button");
let information = document.getElementById("information");
button.addEventListener("click", function () {
  information.className = "eventes";
});
