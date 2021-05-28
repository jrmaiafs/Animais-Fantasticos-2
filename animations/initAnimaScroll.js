export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  console.log(sections);
  sections[0].classList.add("active");
  const windowHeight = window.innerHeight * 0.6;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHeight < 0;
        if (isSectionVisible) {
          section.classList.add("active");
        }
      });
    }

    window.addEventListener("scroll", animaScroll);
  }
}
