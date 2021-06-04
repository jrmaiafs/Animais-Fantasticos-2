import clickOutSide from "./clickoutSide.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const events = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      event.preventDefault();
      menuButton.classList.add("active");
      menuList.classList.add("active");

      clickOutSide(menuList, events, () => {
        menuButton.classList.remove("active");
        menuList.classList.remove("active");
      });
    }

    events.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
