$('#box_a3').click(function() {
  $(this).closest('.wrapper').toggleClass('burgered');
});

$(function() {
  $('.scroll_down').click (function() {
    $('html, body').animate({scrollTop: $('#sec_d').offset().top }, 'slow');
    return false;
  });
});
