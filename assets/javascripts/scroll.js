$(document).ready(function() {
  var $body = $('html,body');
  var $menu = $('#menu-icon');

  $('.nav-link').click(function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    scrollToTarget(target, $body, $menu);
  });
});

var scrollToTarget = function(targetId, $body, $menu) {
  if (typeof $body === 'undefined') {
    $body = $('html,body');
  }
  var targetTop = getScrollTargetTop(targetId);
  $body.animate({
      scrollTop: targetTop
    },
    750,
    function() {
      // console.log($menu);
      if ($menu && $menu.is(':visible')) {
        $('#navbar-options').hide(500);
      }
  });
  return false;
};

var getScrollTargetTop = function(targetId) {
  if (targetId === "#" || typeof targetId === "undefined") {
    return 0;
  }
  else {
    $target = $(targetId);
    return $target.offset().top;
  }
  return 0;
};