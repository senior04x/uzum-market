import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "horizontal",
    loop: true,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 30,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },  

    breakpoints: {
        // when window width is >= 320px
        // 320: {
        //   slidesPerView: 2,
        //   spaceBetween: 20
        // },
        // when window width is >= 480px
        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // when window width is >= 640px
        // 640: {
        //   slidesPerView: 1,
        //   spaceBetween: 40
        // }
      },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
    },
});