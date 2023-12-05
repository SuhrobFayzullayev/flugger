// Home Swiper
new Swiper(".homeSwiper", {
  slidesPerView: 1,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: 200,
  },
});

new Swiper(".colorBucketsSwiper", {
  freeMode: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 30,
});

// Home Swiper
new Swiper(".inspirationSwiper", {
  freeMode: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: 200,
  },
});

const categorySwiper = document.getElementById("categorySwiper");

function handleResize() {
  if (window.innerWidth <= 768) {
    categorySwiper?.classList?.add("categorySwiper");

    // category Swiper
    new Swiper(".categorySwiper", {
      freeMode: true,
      grabCursor: true,
      slidesPerView: "auto",
      spaceBetween: 30,
    });
  } else {
    categorySwiper?.classList?.remove("categorySwiper");
  }
}

// Events
window.addEventListener("resize", handleResize);
handleResize();
