function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}

function toggleMenu() {
  document.body.classList.toggle("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
}).reveal(
  "#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content"
);
