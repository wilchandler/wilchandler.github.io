$(document).ready(function() {
  var $body = $('html,body');

  $('.nav-link').click(function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    scrollToTarget(target, $body);
  });
});

var scrollToTarget = function(targetId, $body) {
  if (typeof $body === 'undefined') {
    $body = $('html,body');
  }
  var targetTop = getScrollTargetTop(targetId);
  $body.animate({
    scrollTop: targetTop
  }, 750);
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