// Animate sections fade-in on scroll

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const fadeInSections = document.querySelectorAll('.section-fade-in');
function onScrollFadeIn() {
  const triggerBottom = window.innerHeight * 0.9;
  fadeInSections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    } else {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
    }
  });
}
window.addEventListener('scroll', onScrollFadeIn);
window.addEventListener('load', onScrollFadeIn);



const end = Date.now() + 15 * 100;


// Memories slider
const memories = [
  { url: '../images/memories -1.jpg', alt: 'memorie-1' },
  { url: '../images/memories -2.jpg', alt: 'memorie-2' },
  { url: '../images/memories -3.jpg', alt: 'memorie-3' },
  { url: '../images/memories -4.jpg', alt: 'memorie-4' },
  { url: '../images/memories -5.jpg', alt: 'memorie-5' },
  { url: '../images/memories -6.jpg', alt: 'memorie-6' },
  { url: '../images/memories -7.jpg', alt: 'memorie-7' },
  { url: '../images/memories -8.jpg', alt: 'memorie-8' },
  { url: '../images/memories -9.jpg', alt: 'memorie-9' },
  { url: '../images/memories -10.jpg', alt: 'memorie-10' }
];

let currentIndex = 0;
const currentImg = document.getElementById('current-image');
const nextImg = document.getElementById('next-image');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

function setImage(imgElement, index) {
  imgElement.src = memories[index].url;
  imgElement.alt = memories[index].alt;
  imgElement.style.transition = 'none';
  imgElement.style.transform = 'translate(-50%, -50%) translateX(100%)'; // offscreen right
  imgElement.style.opacity = '1';
}

function slideTo(nextIndex) {
  if (nextIndex < 0) nextIndex = memories.length - 1;
  if (nextIndex >= memories.length) nextIndex = 0;

  // Prepare next image offscreen right
  setImage(nextImg, nextIndex);
nextImg.style.opacity = '0';  // start transparent
  nextImg.style.transform = 'translate(-50%, -50%) translateX(100%)';
  // Force reflow to apply initial styles before transition
  void nextImg.offsetWidth;

  // Animate current image sliding left (out)
  currentImg.style.transition = 'transform 0.7s ease, opacity 0.7s ease';
  currentImg.style.transform = 'translate(-50%, -50%) translateX(-100%)';
  currentImg.style.opacity = '0';

  // Animate next image sliding from right (in)
  nextImg.style.transition = 'transform 0.7s ease, opacity 0.7s ease';
  nextImg.style.transform = 'translate(-50%, -50%) translateX(0)';
  nextImg.style.opacity = '1';

  // After animation completes, swap images and reset styles
  setTimeout(() => {
    currentImg.src = nextImg.src;
    currentImg.alt = nextImg.alt;
    currentImg.style.transition = 'none';
    currentImg.style.transform = 'translate(-50%, -50%) translateX(0)';
    currentImg.style.opacity = '1';

    nextImg.style.transition = 'none';
    nextImg.style.transform = 'translate(-50%, -50%) translateX(100%)';
    nextImg.style.opacity = '0';

    currentIndex = nextIndex;
  }, 700);
}

// Initialize first image
setImage(currentImg, currentIndex);
currentImg.style.transform = 'translate(-50%, -50%) translateX(0)';
currentImg.style.opacity = '1';

// Buttons
prevBtn.addEventListener('click', () => {
  slideTo(currentIndex - 1);
});
nextBtn.addEventListener('click', () => {
  slideTo(currentIndex + 1);
});

// Auto slide every 7 seconds
setInterval(() => {
  slideTo(currentIndex + 1);
}, 2000);




