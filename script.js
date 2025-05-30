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
