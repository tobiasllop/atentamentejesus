/*!
* Start Bootstrap - One Page Wonder v6.0.5 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// Función para detectar cuando el elemento está en la pantalla
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para agregar la clase "fade-in" cuando el elemento está en la pantalla
function fadeInOnScroll() {
  var elements = document.querySelectorAll('.fade-in-text');
  for (var i = 0; i < elements.length; i++) {
    if (isElementInViewport(elements[i])) {
      elements[i].classList.add('fade-in');
    }
  }
}

// Event listener para detectar el scroll
window.addEventListener('scroll', function() {
  fadeInOnScroll();
});


const enlace = document.querySelector('.enlace-con-efecto');

enlace.addEventListener('mouseenter', () => {
  enlace.classList.add('enlace-grande');
});

enlace.addEventListener('mouseleave', () => {
  enlace.classList.remove('enlace-grande');
});