const track = document.querySelector('.carousel-track');
const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');

let scrollAmount = 0;
const cardWidth = document.querySelector('.interest-card').offsetWidth + 20; // card + gap

downBtn.addEventListener('click', () => {
  const maxScroll = track.scrollWidth - track.parentElement.offsetWidth;
  scrollAmount += cardWidth;
  if (scrollAmount > maxScroll) scrollAmount = maxScroll;
  track.style.transform = `translateX(-${scrollAmount}px)`;
});

upBtn.addEventListener('click', () => {
  scrollAmount -= cardWidth;
  if (scrollAmount < 0) scrollAmount = 0;
  track.style.transform = `translateX(-${scrollAmount}px)`;
});
