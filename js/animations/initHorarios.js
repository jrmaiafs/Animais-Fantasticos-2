export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFunctionamento() {
    this.horario = this.funcionamento.dataset.horario.split(',').map(Number);
    this.dias = this.funcionamento.dataset.dias.split(',').map(Number);
  }

  dadosAgora() {
    const data = new Date();
    this.hora = data.getHours();
    this.day = data.getDay();
  }

  estaAberto() {
    const horarioOpen =
      this.hora >= this.horario[0] && this.hora < this.horario[1];
    const diaOpen = this.dias.indexOf(this.day) !== -1;
    return horarioOpen && diaOpen;
  }

  ativaAberto() {
    if (this.estaAberto) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosAgora();
      this.dadosFunctionamento();
      this.ativaAberto();
    }
  }
}
