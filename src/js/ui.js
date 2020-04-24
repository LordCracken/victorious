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
});