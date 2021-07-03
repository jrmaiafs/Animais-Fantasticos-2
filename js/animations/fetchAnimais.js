import AnimaNumeros from './initAnimaNumeros.js';
export default function initfetchAnimais() {
  async function fetchAnimais(url) {
    const response = await fetch(url);
    const json = await response.json();
    const divAnimais = document.querySelector('.numeros-grid');

    json.forEach((animais) => {
      const animal = createAnimal(animais);
      divAnimais.appendChild(animal);
    });
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'active');
    animaNumeros.init()
  }

  function createAnimal(animais) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animais.specie}</h3> <span data-numero>${animais.total}</span>`;
    return div;
  }

  fetchAnimais('animais.json');
}
