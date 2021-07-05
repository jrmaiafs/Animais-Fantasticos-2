import clickOutSide from './clickoutSide.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropdownMenus);

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeClass = 'ativo';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    clickOutSide(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenuEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropdownMenuEvent();
    }
  }
}
