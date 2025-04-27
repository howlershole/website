const soundToggle = document.getElementById('sound-toggle');
const ambientSound = document.getElementById('ambient');

soundToggle.addEventListener('click', () => {
  if (ambientSound.paused) {
    ambientSound.play();
    soundToggle.textContent = '🔈';
  } else {
    ambientSound.pause();
    soundToggle.textContent = '🔊';
  }
});
