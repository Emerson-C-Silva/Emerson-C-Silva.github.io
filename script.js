const scrollMenuInterno = document.querySelectorAll(
  '.menu-header a[href^="#"]'
);

function initScroll() {
  function scrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  scrollMenuInterno.forEach((link) => {
    link.addEventListener("click", scrollSection);
  });
}
initScroll();

const mobileButton = document.getElementById("button");
const mobileMenu = document.getElementById("start-menu");
const listaMenu = document.getElementById("menu-fixo");

mobileButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  listaMenu.classList.toggle("active");
});

listaMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  listaMenu.classList.remove("active");
});

//start-menu(ID)
//button(ID)
