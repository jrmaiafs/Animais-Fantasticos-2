export default class Modal {
  constructor(abrir, fechar, container) {
    this.abrir = document.querySelector(abrir);
    this.fechar = document.querySelector(fechar);
    this.container = document.querySelector(container);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutSide = this.clickOutSide.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutSide(event) {
    if (event.target === this.container) {
      this.toggleModal(event);
    }
  }

  init() {
    if (this.abrir && this.fechar && this.container) {
      this.abrir.addEventListener('click', this.eventToggleModal);
      this.fechar.addEventListener('click', this.eventToggleModal);
      this.container.addEventListener('click', this.clickOutSide);
    }
    return this;
  }
}
