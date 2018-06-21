$(document).ready(function() {
  $("#scrollto_prjs").click(function() {
    $('html, body').animate({
      scrollTop: $("#first_prj").offset().top
    }, 150);
  });
});
