// ── Hamburger Menu ──
const hamburgerBtn = document.getElementById("hamburger-btn");
const mainNav = document.getElementById("main-nav");

hamburgerBtn.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  hamburgerBtn.classList.toggle("open", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", isOpen);
});

// Close nav when a link is clicked on mobile
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", false);
  });
});

const words = ["Frontend Developer", "Backend Developer", "Chess Player", "Java Developer", "Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isPaused = false;
let typingTimeout = null;

function typeEffect() {
  if (isPaused) return;

  let currentWord = words[wordIndex];
  let displayText = currentWord.substring(0, charIndex);
  document.getElementById("typing").textContent = displayText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    typingTimeout = setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    typingTimeout = setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    typingTimeout = setTimeout(typeEffect, 800);
  }
}

typeEffect();

const btn = document.getElementById("pause-play-btn");
const video = document.getElementById("hero-video");

btn.addEventListener("click", () => {
  isPaused = !isPaused;

  if (isPaused) {
    clearTimeout(typingTimeout);
    video.pause();
    btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    btn.setAttribute("aria-label", "Play");
  } else {
    video.play();
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    btn.setAttribute("aria-label", "Pause");
    typeEffect();
  }
});
