document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
      link.style.pointerEvents = "none";
      link.style.cursor = "default";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const progresses = document.querySelectorAll(".progress");

  progresses.forEach(bar => {
    const finalWidth = bar.dataset.progress + "%";
    bar.style.width = "0%"; 
    setTimeout(() => {
      bar.style.width = finalWidth;
    }, 200); 
  });
});
