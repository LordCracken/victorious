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
});