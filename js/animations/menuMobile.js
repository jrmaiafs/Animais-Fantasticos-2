import clickOutSide from './clickoutSide.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const events = ['click', 'touchstart'];

  function openMenu(event) {
    event.preventDefault();
    menuButton.classList.add('active');
    menuList.classList.add('active');

    clickOutSide(menuList, events, () => {
      menuButton.classList.remove('active');
      menuList.classList.remove('active');
    });
  }

  if (menuButton) {
    events.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}
