// Menu
$("#main-nav").click(function(){$("#web-api").hasClass("nav-open")?$("#web-api").removeClass("nav-open"):$("#web-api").addClass("nav-open")});$(window).scroll(function(){var e=$(window).scrollTop();$("#web-api").bind("mousewheel",function(t){e>335?$("#main-nav").addClass("detached visible"):$("#main-nav").removeClass("detached hidden visible")})});$(function(){$("#animate-device").one("inview",function(e,t){t&&$(this).addClass("animated fadeInUp")});$("#animate-tagline").one("inview",function(e,t){t&&$(this).addClass("animated fadeInLeft")});$("#animate-tagline-btn").one("inview",function(e,t){t&&$(this).addClass("animated fadeInRight")})});