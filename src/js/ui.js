$(document).ready(function () {
  // Кнопка "Больше" в секции "Что входит в стоимость"
  $('.cost__more').on('click', () => {
    $('.cost-item--interactive').toggleClass('cost-items__item--hidden');
    $('.cost__more').toggleClass('cost__more--active');
    $('.cost__text').toggleClass('cost__text--min-mod');
  });
  // Открытие и закрытие вопросов
  $('.questions__question').on('click', () => {
    $(event.target).next('.questions__answer').toggleClass('questions__answer--opened');
  });
  // Бургер-меню
  $('.menu-button').on('click', () => {
    $(event.target).toggleClass('menu-button--active');
    $('.header').toggleClass('header--opened-menu');
    $('.nav').toggleClass('nav--active');
  });
  $('.close-button').on('click', () => {
    $('.header').removeClass('header--opened-menu');
    $('.nav').removeClass('nav--active');
    $('.menu-button').removeClass('menu-button--active');
  });
  // Модальные окна
  $('.about-us__button').on('click', () => {
    $('.modal-block').removeClass('modal-block--hidden');
    $('.project-application-modal').removeClass('project-application-modal--hidden');
  });
  $('.project-application-modal__close-modal').on('click', () => {
    $('.modal-block').addClass('modal-block--hidden');
    $('.project-application-modal').addClass('project-application-modal--hidden');
  });

  $('.our-offer__button').on('click', () => {
    $('.modal-block').removeClass('modal-block--hidden');
    $('.business-proposal-modal').removeClass('business-proposal-modal--hidden');
  });
  $('.business-proposal-modal__close-modal').on('click', () => {
    $('.modal-block').addClass('modal-block--hidden');
    $('.business-proposal-modal').addClass('business-proposal-modal--hidden');
  });

  $('.rate__button').on('click', () => {
    $('.modal-block').removeClass('modal-block--hidden');
    $('.everymonth-works-modal').removeClass('everymonth-works-modal--hidden');
  });
  $('.everymonth-works-modal__close-modal').on('click', () => {
    $('.modal-block').addClass('modal-block--hidden');
    $('.everymonth-works-modal').addClass('everymonth-works-modal--hidden');
  });
  $(document).keyup(function (e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      $('.modal-block').addClass('modal-block--hidden');
      $('.everymonth-works-modal').addClass('everymonth-works-modal--hidden');
      $('.business-proposal-modal').addClass('business-proposal-modal--hidden');
      $('.project-application-modal').addClass('project-application-modal--hidden');
    }
  });
  $('.modal-block').on('click', (e) => {
    if (!$('.modal').is(e.target) && $('.modal').has(e.target).length === 0) {
      $('.modal-block').addClass('modal-block--hidden');
      $('.everymonth-works-modal').addClass('everymonth-works-modal--hidden');
      $('.business-proposal-modal').addClass('business-proposal-modal--hidden');
      $('.project-application-modal').addClass('project-application-modal--hidden');
    }
  });
  // Меню
  $('.nav__link').on('click', function () {
    const el = $(this);
    let dest = el.attr('href'); // получаем направление
    if (dest !== undefined && dest !== '') { // проверяем существование
      $('html').animate({
          scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 500 // скорость прокрутки
      );
      $('.header').removeClass('header--opened-menu');
      $('.nav').removeClass('nav--active');
      $('.menu-button').removeClass('menu-button--active');
    }
    return false;
  });
  // Валидация
  $.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
      $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
      var range = $(this).get(0).createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  $('.our-offer__form').validate({
    focusCleanup: true,
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
      name: 'required',
      phone: {
        required: true,
        minlength: 11
      }
    },
    messages: {
      name: 'Введите имя',
      phone: 'Неправильный номер'
    },
    submitHandler: function (form) {
      $(form).ajaxSubmit();
    }
  });
  $('.project-application-modal__form').validate({
    focusCleanup: true,
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
      name: 'required',
      phone: {
        required: true,
        minlength: 11
      }
    },
    messages: {
      name: 'Введите имя',
      phone: 'Неправильный номер'
    },
    submitHandler: function (form) {
      $(form).ajaxSubmit();
    }
  });
  $('.business-proposal-modal__form').validate({
    focusCleanup: true,
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
      name: 'required',
      phone: {
        required: true,
        minlength: 11
      }
    },
    messages: {
      name: 'Введите имя',
      phone: 'Неправильный номер'
    },
    submitHandler: function (form) {
      $(form).ajaxSubmit();
    }
  });
  $('.everymonth-works-modal__form').validate({
    focusCleanup: true,
    errorElement: 'span',
    errorClass: 'invalid',
    rules: {
      name: 'required',
      phone: {
        required: true,
        minlength: 11
      }
    },
    messages: {
      name: 'Введите имя',
      phone: 'Неправильный номер'
    },
    submitHandler: function (form) {
      $(form).ajaxSubmit();
    }
  });
  $('[type=tel]').on('click', () => {
    $(this).setCursorPosition(3);
  }).mask('+7 (999) 999-99-99');
  // Отложенная загрузка карты
  YaMapsShown = false;
  $(window).scroll(function () {
    if (!YaMapsShown) {
      if ($(window).scrollTop() + $(window).height() > $(document).height() - 700) {
        showYaMaps();
        YaMapsShown = true;
      }
    }
  });

  function showYaMaps() {
    var script = document.createElement("script");
    script.src = "js/map.js";
    document.getElementById("map").appendChild(script);
  }
});