const phrases = [
  "I'm Computer Engineer",
  "I'm SWE Intern @IECC",
  "I'm Student @NU"
];

let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;
const speed = 100;
const delay = 1500;
const textElement = document.getElementById("typing-text");

function type() {
  const fullText = phrases[currentPhrase];

  if (isDeleting) {
    currentLetter--;
  } else {
    currentLetter++;
  }

  textElement.textContent = fullText.substring(0, currentLetter);

  if (!isDeleting && currentLetter === fullText.length) {
    setTimeout(() => {
      isDeleting = true;
      type();
    }, delay);
    return;
  }

  if (isDeleting && currentLetter === 0) {
    isDeleting = false;
    currentPhrase = (currentPhrase + 1) % phrases.length;
  }

  setTimeout(type, isDeleting ? speed / 2 : speed);
}

type();
