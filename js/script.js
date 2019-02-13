$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('.scroll_app').fadeIn();
  }else{
    $('.scroll_app').fadeOut();
  }
});
