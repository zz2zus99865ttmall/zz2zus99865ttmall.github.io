window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var redes_sociales = document.querySelector(".redes_sociales1");
    var flecha = document.querySelector(".indicador_bottom_arrow");
    header.classList.toggle("headerscroll",window.scrollY>0);
    redes_sociales.classList.toggle("redes_sociales1_scroll1",window.scrollY>0);
    flecha.classList.toggle("arrowscroll",window.scrollY>30);
})

//Para arrastrar la imagen fija cuando lo toque el footer
document.addEventListener("DOMContentLoaded", function () {
  const banner2 = document.querySelector('.contenedor_imagenfija_5');
  const footer1 = document.querySelector('footer');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        banner2.style.backgroundAttachment = 'local';
      } else {
        banner2.style.backgroundAttachment = 'fixed';
      }
    });
  });

  observer.observe(footer1);
});
