// HAMBURGER
$(function () {
    $("#js-btn").on("click", function () {
      $("#js-nav").toggleClass("show");
      $('.display').toggleClass('none');
    });
    $(".cross").on("click",function() {
        $("#js-nav").removeClass("show");
        $('body').removeClass('open');
        $('.display').removeClass('none');
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

// PHONE STICKY
$(function($) {
  let $win = $(window),
      $phone = $('.phone-sticky'),
      $top = $('.top-vidual'),
      topPos = $top.offset().top,
      active = 'active';
  $win.on('load scroll', function() {
    let value = $(this).scrollTop();
    if(value > topPos + 100) {
      $phone.addClass(active);
    } else {
      $phone.removeClass(active);
    }
  })
})
  

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
ScrollReveal().reveal('.scroll', {
    duration: 1000, 
    origin: 'top', 
    distance: '50px',
});

// a tag jump
let windowWidth = $(window).width();
let pcWidth = 768;

// moveTop
$(function() {
	$('a[href^="#"]').click(function(){
		if(windowWidth <= pcWidth) {
			$("#js-nav").removeClass("show");
	  	$('body').removeClass('open');
      $('.display').removeClass('none');
		}
    // ????????????50px???????????????
    var adjust = 110;
    // ????????????????????????
    var speed = 400; // ?????????
    // ????????????????????????
    var href= $(this).attr("href");
    // ??????????????????
    var target = $(href == "#" || href == "" ? 'html' : href);
		console.log(target);
    // ??????????????????
    var position = target.offset().top - adjust;
    // ???????????????????????????
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});