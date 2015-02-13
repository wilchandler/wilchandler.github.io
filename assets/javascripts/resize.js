$(document).ready(function() {
  var $viewport = $(window);
  var $menuIcon = $('#menu-icon');
  var $navbarOptions = $('#navbar-options');
  var breakpoint = 900;

  $viewport.resize(function() {
    var width = $viewport.width();
    if (width >= breakpoint) {
      $menuIcon.hide();
      $navbarOptions.show();
    }
    else {
      $navbarOptions.hide();
      $menuIcon.show();
    }
  });
});