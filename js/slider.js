//Para arrastrar la imagen fija cuando lo toque la otra imagen fija
document.addEventListener("DOMContentLoaded", function () {
  const banner = document.querySelector('.contenedor_imagenfija_2');
  const bannerfijo = document.querySelector('.bannerfijo3');

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        banner.style.backgroundAttachment = 'local';
      } else {
        banner.style.backgroundAttachment = 'fixed';
      }
    });
  });

  observer.observe(bannerfijo);
});

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


// Constantes
const slider = document.querySelector('#slider_index');
let sliderSection = document.querySelectorAll('.slider_section_index');
let dots = document.querySelectorAll('.contenedor_slider_index .dots li');
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnprev = document.querySelector('#slider_btn_prev_index');
const btnnext = document.querySelector('#slider_btn_next_index');

let contador3 = 0;

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll('.slider_section_index')[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 2s";
  setTimeout(function() {
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 2000);

  // Mover la clase 'active' al siguiente elemento li
  let activeDot = document.querySelector('.contenedor_slider_index .dots li.active');
  activeDot.classList.remove('active');
  if (activeDot.nextElementSibling) {
    activeDot.nextElementSibling.classList.add('active');
  } else {
    dots[0].classList.add('active');
  }
}

btnnext.addEventListener('click', function() {
  contador3 = 1;
  Next();
});

function Prev() {
  let sliderSection = document.querySelectorAll('.slider_section_index');
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = '0';
  slider.style.transition = 'all 2s';
  setTimeout(function() {
    slider.style.transition = 'none';
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = '-100%';
  }, 2000);

  // Mover la clase 'active' al elemento li anterior
  let activeDot = document.querySelector('.contenedor_slider_index .dots li.active');
  activeDot.classList.remove('active');
  if (activeDot.previousElementSibling) {
    activeDot.previousElementSibling.classList.add('active');
  } else {
    dots[dots.length - 1].classList.add('active');
  }
}

btnprev.addEventListener('click', function() {
  contador3 = 1;
  Prev();
});

setInterval(function() {
  if (contador3 == '0') {
    Next();
  }
}, 4000);
