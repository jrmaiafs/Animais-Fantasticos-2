export default function initMenuMobile() {}

const button = document.querySelector("[data-button]");
const ul = document.querySelector("[data-dropdown]");
const ulnav = document.querySelector("[data-menu='suave'] ul");
console.log(ulnav);
button.addEventListener("click", handleMobileMenu);
button.addEventListener("touchstart", handleMobileMenu);

function handleMobileMenu(event) {
  event.preventDefault();
  button.classList.toggle("active");
  ulnav.classList.toggle("active");
}
