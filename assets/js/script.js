$(function () {
    $("#js-btn").on("click", function () {
      $(".js-menu-btn").toggleClass("active");
      $("#js-nav").toggleClass("show");
      $('body').toggleClass('open');
      $('.nav__link-left').toggleClass('fadeUp-list-left');
      $('.nav__link-right').toggleClass('fadeUp-list-right');
    });
    $(".cross").on("click",function() {
        $("#js-nav").removeClass("show");
        $('body').removeClass('open');
    })
});
  

