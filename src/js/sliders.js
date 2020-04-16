$(document).ready(function () {

  const ourRatesSlider = new Swiper('.our-rates__slider', {
    // Optional parameters
    loop: true,
    spaceBetween: 500,
    autoHeight: true,
    // Navigation arrows
    navigation: {
      nextEl: '.our-rates__arrow-next',
      prevEl: '.our-rates__arrow-prev',
    },
    on: {
      resize: () => {
        if ($(window).width() >= 902) {
          ourRatesSlider.slideToLoop(0);
        }
      }
    },
    breakpoints: {
      902: {
        slidesPerView: 3,
        spaceBetween: 20,
        allowTouchMove: false
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false
      }
    }
  });
});