const links = document.querySelectorAll('nav a');

links.forEach(link => {
  const linkPath = new URL(link.href).pathname; 
  const currentPath = window.location.pathname; 

  if ((currentPath === '/' && linkPath === '/index.html') || linkPath === currentPath) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
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

const cards = document.querySelectorAll('.interest-card');

cards.forEach(card => {
    const slides = JSON.parse(card.dataset.slides);
    let currentIndex = 0;
    const img = card.querySelector('img');

    let interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        img.src = slides[currentIndex];
    }, 2000);


    card.addEventListener('mouseenter', () => clearInterval(interval));
    card.addEventListener('mouseleave', () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            img.src = slides[currentIndex];
        }, 2000);
    });
});

