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
      
      if (top_offset > 100) {
          console.log('In the middle.');
        }
        

      $('#web-api').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
          console.log('Up')

          if ($('#main-nav').hasClass("hidden")) {
            $('#main-nav').removeClass("hidden visible");
          } 

              else {
                  $('#main-nav').addClass("detached visible");
              }
        }

        if(e.originalEvent.wheelDelta /120 < 0 && top_offset > 500) {
          console.log('Down')

          if ($('#main-nav').hasClass("detached")) {
                $('#main-nav').removeClass("visible");
                $('#main-nav').addClass("hidden");
          } 

              else {
                //$('#main-nav').addClass("hidden");
              }
        }

            });
        
        if (top_offset < 30 && $('#main-nav').hasClass("detached")) {
            $('#main-nav').removeClass('detached');
            console.log('At the top');
        } else {
          //  $('.top_head_separator').addClass('fixed-top fade-in');
        }
    })


// Page Animations

$(function () {
  $('img.scroll-animate').one('inview', function (event, visible) {
    if (visible) {
      $(this).addClass('animated fadeInUp');
    }
  });
});

/*
// Detect Mouse Wheel Up
var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
$('#yourDiv').bind(mousewheelevt, function(e){

    var evt = window.event || e //equalize event object     
    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

    if(delta > 0) {
        //scroll up
    }
    else{
        //scroll down
    }   
});
*/

/* Another Scroll Code

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       // downscroll code
   } else {
      // upscroll code
   }
   lastScrollTop = st;
});

*/