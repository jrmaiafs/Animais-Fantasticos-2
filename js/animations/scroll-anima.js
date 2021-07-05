import debounce from "./debounce";
export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowHeight = window.innerHeight * 0.6;
    this.checkDistance = this.checkDistance.bind(this);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        elemet: section,
        offset: Math.floor(offset - this.windowHeight),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((section) => {
      if(window.pageYOffset > section.offset) {
        section.elemet.classList.add('active');
      } else if (section.elemet.classList.contains('active')) {
        section.elemet.classList.remove('active');
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', debounce(this.checkDistance, 50));
    }
    return this
  }
}
