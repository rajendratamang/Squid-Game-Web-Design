const track = document.querySelector('.slider-wrapper');
const btnLeft = document.querySelector('.slider-btn.left');
const btnRight = document.querySelector('.slider-btn.right');
const scrollAmount = 270;
let autoScrollInterval;

// Manual scrolling
btnLeft.addEventListener('click', () => {
  track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

// Auto-scroll with loop
function autoScroll() {
  autoScrollInterval = setInterval(() => {
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
      // Loop back to start
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      // Scroll forward
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }, 3000); // scroll every 3s
}

autoScroll();

// Pause autoplay on hover
track.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
track.addEventListener('mouseleave', autoScroll);
