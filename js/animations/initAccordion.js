export default function initAccordion() {
  const perguntas = document.querySelectorAll("[data-anime='accordion'] dt");
  const activeClass = 'active';

  function handleClick(event) {
    event.target.nextElementSibling.classList.toggle(activeClass);
    event.target.classList.toggle(activeClass);
  }

  if (perguntas.length) {
    perguntas[0].classList.add(activeClass);
    perguntas[0].nextElementSibling.classList.add(activeClass);

    perguntas.forEach((pergunta) => {
      pergunta.addEventListener('click', handleClick);
    });
  }
}
