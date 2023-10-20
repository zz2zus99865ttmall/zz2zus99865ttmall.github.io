window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    var redes_sociales = document.querySelector(".redes_sociales1");
    var flecha = document.querySelector(".indicador_bottom_arrow");
    header.classList.toggle("headerscroll",window.scrollY>0);
    redes_sociales.classList.toggle("redes_sociales1_scroll1",window.scrollY>0);
    flecha.classList.toggle("arrowscroll",window.scrollY>30);
})
