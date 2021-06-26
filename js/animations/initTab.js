export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('active');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('active', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    activeTab(0);

    tabMenu.forEach((li, index) => {
      li.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
