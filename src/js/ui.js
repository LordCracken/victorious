$(document).ready(function () {
  $('.cost__more').on('click', () => {
    $('.cost-items').toggleClass('cost-items--extended');
    $('.cost__more').toggleClass('cost__more--active');
    $('.cost__text').toggleClass('cost__text--min-mod');
  });
});