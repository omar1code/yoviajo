document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.we-are');
ScrollReveal().reveal('.proyects', { delay: 500 });
ScrollReveal().reveal('.contacto', { delay: 500 });