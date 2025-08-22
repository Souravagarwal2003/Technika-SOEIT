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
let currentMemoryIndex = 0;
const memoryImage = document.getElementById('memory-image');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

function showMemory(index) {
  if (index < 0) index = memories.length - 1;
  if (index >= memories.length) index = 0;
  currentMemoryIndex = index;

  memoryImage.style.opacity = 0;
  setTimeout(() => {
    memoryImage.src = memories[currentMemoryIndex].url;
    memoryImage.alt = memories[currentMemoryIndex].alt;
    memoryImage.style.opacity = 0.8;
  }, 300);
}

prevBtn.addEventListener('click', () => showMemory(currentMemoryIndex - 1));  
nextBtn.addEventListener('click', () => showMemory(currentMemoryIndex + 1));

// Auto-slide every 7s
// setInterval(() => {
//   showMemory(currentMemoryIndex + 1);
// }, 5000);

showMemory(0);




