export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  sections[0].classList.add('active');
  const windowHeight = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHeight < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else if (section.classList.contains('active')) {
        section.classList.remove('active');
      }
    });
  }

  if (sections.length) {
    window.addEventListener('scroll', animaScroll);
  }
}
