const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const audio = new Audio('../images/background_song-2.mp3');
audio.loop = true; // Set to loop 
audio.play(); // Start playing the audio }

