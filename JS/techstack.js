$(document).ready(function() {
  var $box = $('.box');

  setTimeout(function() {
      $box.addClass('default');
  }, 1700);

  $('.js-toggle').click(function() {
    location.reload();

});
});