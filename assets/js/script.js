// HAMBURGER
$(function () {
    $("#js-btn").on("click", function () {
      $(".js-menu-btn").toggleClass("active");
      $("#js-nav").toggleClass("show");
      $('body').toggleClass('open');
    });
    $(".cross").on("click",function() {
        $("#js-nav").removeClass("show");
        $('body').removeClass('open');
    })
});

//*============= FOLLOWING =============*/
jQuery(function($) {
    var $win = $(window),
        $nav = $('.header'),
        $contactBtn = $(".top-circle"),
        navPos = $nav.offset().top,
        fixedClass = 'fixed';
    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > navPos + 80 ) {
        $nav.addClass(fixedClass);
        $contactBtn.addClass(fixedClass);
      } else {
        $nav.removeClass(fixedClass);
        $contactBtn.removeClass(fixedClass);
      }
    });
});
  

// downMenu
$(function() {
    $(".click-f").on("click",function() {
        $(".click-f").toggleClass("rotate")
        $(".down-p-f").toggleClass("active");
    });
    $(".click-s").on("click",function() {
        $(".click-s").toggleClass("rotate")
        $(".down-p-s").toggleClass("active");
    });
    $(".click-t").on("click",function() {
        $(".click-t").toggleClass("rotate")
        $(".down-p-t").toggleClass("active");
    });
    $(".click-f-f").on("click",function() {
        $(".click-f-f").toggleClass("rotate")
        $(".down-f-f").toggleClass("active");
    });
    $(".click-f-s").on("click",function() {
        $(".click-f-s").toggleClass("rotate")
        $(".down-f-s").toggleClass("active");
    });
    $(".click-f-t").on("click",function() {
        $(".click-f-t").toggleClass("rotate")
        $(".down-f-t").toggleClass("active");
    });
    $(".click-f-ff").on("click",function() {
        $(".click-f-ff").toggleClass("rotate")
        $(".down-f-ff").toggleClass("active");
    });
});

// SCROLLREVEAL
