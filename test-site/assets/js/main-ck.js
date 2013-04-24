// Menu
//TODO: This only works once. 
$("#main-nav").click(function(){$("#web-api").hasClass("nav-open")?$("#web-api").removeClass("nav-open"):$("#web-api").addClass("nav-open")});$(function(){$("img.scroll-animate").one("inview",function(e,t){t&&$(this).addClass("animated fadeInUp")})});