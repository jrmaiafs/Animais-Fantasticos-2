export default function animaNumeros() {}

const numeros = Array.from(document.querySelectorAll("[data-numero]"));

window.addEventListener("scroll", lookSection);

function lookSection() {
  const section = document.querySelector(".numeros");
  const active = section.classList.contains("active");
  if (active) {
    window.removeEventListener("scroll", lookSection);
    animar(numeros);
  }
}

function animar(numeros) {
  numeros.forEach((numero) => {
    const total = +numero.innerText;
    let start = 0;
    const timer = setInterval(() => {
      start++;
      numero.innerText = Math.round(start * (total / 100));
      if (+numero.innerText >= total) {
        clearInterval(timer);
      }
    }, 30 * Math.random());
  });
}
