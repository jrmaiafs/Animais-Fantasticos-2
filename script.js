function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("active");
      });
      tabContent[index].classList.toggle("active");
    }

    activeTab(0);

    tabMenu.forEach((li, index) => {
      li.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const perguntas = document.querySelectorAll(".faq-lista dt");
  const activeClass = "active";
  if (perguntas.length) {
    perguntas[0].classList.add(activeClass);
    perguntas[0].nextElementSibling.classList.add(activeClass);
    function handleClick(event) {
      event.target.nextElementSibling.classList.toggle(activeClass);
      event.target.classList.toggle(activeClass);
    }

    perguntas.forEach((pergunta) => {
      pergunta.addEventListener("click", handleClick);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  if (linksInternos.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}

initScrollSuave();

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");
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

initAnimaScroll();
