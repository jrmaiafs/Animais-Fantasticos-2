export default function initModal() {
  const botaoAbrir = document.querySelector('[data-anima="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"');
  const sectionModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && sectionModal) {
    function toggleModal(event) {
      event.preventDefault();
      sectionModal.classList.toggle("ativo");
    }

    function clickOutSide(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }

    botaoAbrir.addEventListener("click", toggleModal);
    botaoFechar.addEventListener("click", toggleModal);
    sectionModal.addEventListener("click", clickOutSide);
  }
}
