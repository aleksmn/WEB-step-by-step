// mobile menu

const burger = document.querySelector(".navbar-burger");
const navmenu = document.querySelector(".navbar-menu");



burger.addEventListener("click", () => {

  navmenu.classList.toggle("is-active")
  burger.classList.toggle("is-active");

})