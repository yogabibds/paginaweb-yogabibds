const topbar = document.querySelector(".topbar");
const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");
const heroOverlay = document.querySelector(".hero-overlay");
const progressBar = document.getElementById("progress-bar");

function updateScrollEffects() {
  const scroll = window.scrollY;
  const pageHeight = document.body.scrollHeight - window.innerHeight;

  if (topbar) {
    topbar.classList.toggle("scrolled", scroll > 10);
  }

  if (hero) {
    hero.classList.toggle("shrink", scroll > 80);
  }

  if (heroBg) {
    heroBg.style.transform = `translateY(${scroll * 0.18}px) scale(1.08)`;
  }

  if (heroOverlay) {
    const opacity = Math.min(0.78, 0.30 + scroll * 0.0006);
    heroOverlay.style.background = `radial-gradient(circle at 50% 45%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,${opacity}) 100%)`;
  }

  if (progressBar && pageHeight > 0) {
    const progress = (scroll / pageHeight) * 100;
    progressBar.style.width = `${progress}%`;
  }
}

window.addEventListener("scroll", updateScrollEffects);
window.addEventListener("load", updateScrollEffects);

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});