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
  }),

    portfolioSlider = new Swiper('.portfolio__slider', {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: '.portfolio__arrow-next',
        prevEl: '.portfolio__arrow-prev',
      },
      breakpoints: {
        992: {
          spaceBetween: 60
        }
      }
    }),

    callBackSlider = new Swiper('.call-back__slider', {
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.call-back__arrow-next',
        prevEl: '.call-back__arrow-prev',
      },
      breakpoints: {
        992: {
          autoplay: false
        }
      }
    });
});