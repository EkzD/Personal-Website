const bgVideo = document.getElementById('bg-video');
const showCards = document.querySelectorAll('.show-card');

showCards.forEach(card => {
  const videoSrc = card.dataset.bgVideo;

  card.addEventListener('mouseover', (e) => {
    const targetCard = e.target.closest('.show-card'); 
    if (targetCard && videoSrc) {
      bgVideo.src = videoSrc;
      bgVideo.style.opacity = '1';
      bgVideo.play();
    }
  });

  card.addEventListener('mouseleave', () => {
    bgVideo.style.opacity = '0';
    bgVideo.pause();
    bgVideo.currentTime = 0;
  });
});
