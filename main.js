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
