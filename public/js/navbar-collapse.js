$(document).ready(function () {
  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
    $(".navbar-toggler--nav").removeClass("toggler-active");
  });
});
