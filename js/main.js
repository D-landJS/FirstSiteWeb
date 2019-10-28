var element = $("#header-wrap");
var $document = $(document);
$document.on("scroll", function () {
  if ($document.scrollTop() >= 60) {
    $("#header").addClass("scrolled");
  } else {
    $("#header").removeClass("scrolled");
  }
})

$(".js-bars").on("click", function () {
  $("#header-wrap nav").toggleClass("res-active");
})

/* slider */

$(".js-slider-testimonios").slick({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  vertical: true
});

