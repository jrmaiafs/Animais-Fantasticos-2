import clickOutSide from "./clickOutSide.js";
export default function initDropDownMenu() {}

const dropDownMenus = document.querySelectorAll("[data-dropdown]");
const events = ["click", "touchstart"];

dropDownMenus.forEach((menu) => {
  events.forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.add("ativo");
  clickOutSide(this, events, () => {
    this.classList.remove("ativo");
  });
}
