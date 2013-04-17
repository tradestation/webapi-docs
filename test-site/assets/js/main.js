$(function () {
  $('img.scroll-animate').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated fadeInUp');
    }
  });
});