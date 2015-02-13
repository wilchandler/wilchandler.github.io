$(document).ready(function() {
  $menu = $('#menu-icon');
  $nav = $('#navbar-options');

  $menu.click(function(e) {
    $nav.toggle(500);
  });
});