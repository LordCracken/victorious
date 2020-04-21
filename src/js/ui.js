$(document).ready(function () {
  $('.cost__more').on('click', () => {
    $('.cost-item--interactive').toggleClass('cost-items__item--hidden');
    $('.cost__more').toggleClass('cost__more--active');
    $('.cost__text').toggleClass('cost__text--min-mod');
  });
});