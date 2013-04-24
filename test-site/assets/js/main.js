// Menu

//TODO: This only works once. 
$('#main-nav').click(function(){
    if ($('#web-api').hasClass("nav-open")) {
        $('#web-api').removeClass("nav-open");
    } else {
        $('#web-api').addClass("nav-open");
    }
});

/*
tl.Nav.detach = function () {
    this._attached && !this._visible && (this._el.addClass("detached"), this._attached = !1),
tl.Nav.open = function () {
    $("body").addClass("nav-open"), this._open = !0
},
tl.Nav.close = function () {
    $("body").removeClass("nav-open"), this._open = !1
}, tl.Nav.toggle = function (t) {
    t && !$(t.target).hasClass("logo") && (this._open ? this.close() : this.open())
}, tl.Nav.isOpen = function () {
    return this._open

    */

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