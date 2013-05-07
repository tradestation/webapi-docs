// Menu

$('#main-nav').click(function(){
  if ($('#web-api').hasClass("nav-open")) {
    $('#web-api').removeClass("nav-open");
  } else {
    $('#web-api').addClass("nav-open");
  }
});

$(window).scroll(function () {

  var top_offset = $(window).scrollTop();

  $('#web-api').bind('mousewheel', function(e){
    // 335 px is where we want the nav to detach
    if(top_offset > 335) {
      $('#main-nav').addClass('detached visible');
    } else {
      $('#main-nav').removeClass('detached hidden visible');
    }
  });
});


// Page Animations On Scroll

$(function () {
  $('#animate-device').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated fadeInUp');
    }
  });

  $('#animate-tagline').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated fadeInLeft');
    }
  });

  $('#animate-tagline-btn').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated fadeInRight');
    }
  });
});
