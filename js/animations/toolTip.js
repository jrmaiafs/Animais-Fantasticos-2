export default function toolTip() {
  const map = document.querySelector('[data-tooltip]');
  map.addEventListener('mouseover', handleMouse);

  function handleMouse() {
    const tooltipBox = createTooltipBox(this);

    this.addEventListener('mousemove', onMouseMove);
    onMouseMove.tooltipBox = tooltipBox;

    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 10 + 'px';
      this.tooltipBox.style.left = event.pageX + 10 + 'px';
    },
  };

  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.innerText = text;
    tooltipBox.classList.add('tooltip');
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
