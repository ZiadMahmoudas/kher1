let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    setTimeout(() => {
      link.classList.remove("active");
    }, 10000000);
  });
});

new Swiper(".MYSwiper", {
  loop: true,
  slidesPerView: 3,
  centeredSlides: "true",
  pagination: {
    el:".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
new Swiper(".myswiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
