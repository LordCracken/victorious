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
    if (e.key === "Escape" || e.keyCode === 27) {
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
});