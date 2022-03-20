$(document).ready(function () {
  //Cambio de header
  $(window).on("scroll", function () {
    let posicion = $("#pr").offset();
    if ($(window).scrollTop() >= posicion.top) {
      $("header").removeClass("transparente");
    } else {
      $("header").addClass("transparente");
    }
  });
  // adicionamiento del menu lateral
  $("#burger").click(function () {
    $('#burger').toggleClass('abierto');
    $('.menu').toggleClass('abierto');
    $('abierto').toggleClass('a');
  });
  //smooth scroll
  $("a").on("click", function () {
    if (this.hash !== "") {
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });
});
