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
