$('#main-nav').click(function(){
    if ($('#web-api').hasClass("nav-open")) {
        $('#web-api').removeClass("nav-open");
    } else {
        $('#web-api').addClass("nav-open");
    }
});

$(function () {
  $('img.scroll-animate').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated fadeInUp');
    }
  });
});