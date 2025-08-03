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


const audio2 = document.querySelector('audio');
let volume = 0;

function fadeIn() {
  if (volume < 1) {
    volume += 0.5;
    audio2.volume = volume;
    setTimeout(fadeIn, 100); // Adjust speed with the timeout
  }
}

function fadeOut() {
  if (volume > 0) {
    volume -= 0.5;
    audio2.volume = volume;
    setTimeout(fadeOut, 100);
  }
}

const audio = document.getElementById("audioplayer");     // background music
const image = document.getElementById('myImage');         // image trigger
const roboaudio = document.getElementById('roboaudio');   // robot speech

let pausedAt = 0;

// Create Web Audio API context and gain node
const audioContext = new (window.AudioContext || window.AudioContext)();
const source = audioContext.createMediaElementSource(roboaudio);
const gainNode = audioContext.createGain();
source.connect(gainNode).connect(audioContext.destination);

// Set gain to 2x normal volume (you can increase up to 5 if needed)
gainNode.gain.value = 4.0;

// Background audio autoplay after interaction
const tryPlay = () => {
  audio.play().catch((e) => {
    console.log("Autoplay blocked. Waiting for interaction.");
  });
  window.removeEventListener("mousemove", tryPlay);
  window.removeEventListener("touchstart", tryPlay);
  window.removeEventListener("keydown", tryPlay);
};

// On image click
image.addEventListener('click', function () {
  // Pause background audio and save position
  if (!audio.paused) {
    pausedAt = audio.currentTime;
    audio.pause();
  }

  // Resume audio context (required in some browsers)
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }

  // Play boosted speech
  roboaudio.currentTime = 0;
  roboaudio.play();

  // Resume background after speech
  roboaudio.onended = () => {
    audio.currentTime = pausedAt;
    audio.play();
  };
});

// Start background on first interaction
window.addEventListener("mousemove", tryPlay);
window.addEventListener("touchstart", tryPlay);
window.addEventListener("keydown", tryPlay);



const end = Date.now() + 15 * 100;

// go Buckeyes!
const colors = ["#6bdaf0", "#ffffff", "#352c77", "#8a4fc6"];

(function frame() {
  confetti({
    particleCount: 100,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 100,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();



 const card = document.getElementById("flipCard");
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

 const scrollTopBtn = document.getElementById("scrollTopBtn");

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Initial state
scrollTopBtn.style.display = "none";




