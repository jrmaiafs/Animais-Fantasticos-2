import clickOutSide from './clickoutSide.js';

export default class MenuMobile {
  constructor(menuButton, meunList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(meunList);

    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.events = events;

    this.activeClass = 'active'
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);

    clickOutSide(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvets() {
    this.events.forEach((event) => this.menuButton.addEventListener(event, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvets()
    }
    return this
  }
}
