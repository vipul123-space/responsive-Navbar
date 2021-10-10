const buttonEl = document.querySelector(".button_mobile");
const headerEl = document.querySelector(".main-header");

buttonEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
