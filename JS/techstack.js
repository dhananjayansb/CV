$(document).ready(function() {
  var $box = $('.box');

  setTimeout(function() {
      $box.addClass('default');
  }, 1000);

  $('.js-toggle').click(function() {
    location.reload();

});
});
