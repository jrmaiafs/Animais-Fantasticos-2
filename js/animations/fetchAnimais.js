import AnimaNumeros from './initAnimaNumeros.js';

export default function fetchAnimals(url, target) {
  // create the element divs
  function createElementAnimal(animais) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animais.specie}</h3> <span data-numero>${animais.total}</span>`;
    return div;
  }

  // animate the animals numbers
  function animateNumbers() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'active');
    animaNumeros.init()
  }
  
  // insert the animals in the DOM
  const divAnimais = document.querySelector(target);
  function fillAnimal(animal) {
    const divAnimal = createElementAnimal(animal);
      divAnimais.appendChild(divAnimal);
  }
  
  // fetch the amimals
  async function createAnimal() {
    const response = await fetch(url);
    const json = await response.json();

    json.forEach((animais) => fillAnimal(animais));
    animateNumbers()
  }


  return createAnimal();
}
