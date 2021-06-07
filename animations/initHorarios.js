export default function initHorarios() {
  const li = document.querySelector("[data-dias]");
  const horario = li.dataset.horario.split(",").map(Number);
  const dias = li.dataset.dias.split(",").map(Number);

  const data = new Date();

  const hora = data.getHours();
  const day = data.getDay();

  const horarioOpen = hora >= horario[0] && hora < horario[1];
  const diaOpen = dias.indexOf(day) !== -1;

  if (horarioOpen && diaOpen) {
    li.classList.add("open");
  }
}
