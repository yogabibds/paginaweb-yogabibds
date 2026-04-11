const topbar = document.querySelector(".topbar");
const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");
const heroOverlay = document.querySelector(".hero-overlay");
const progressBar = document.getElementById("progress-bar");
const loader = document.getElementById("page-loader");

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("site-menu");
const menuLinks = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section[id]");

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

  updateActiveMenu();
}

function updateActiveMenu() {
  let currentId = "";

  sections.forEach(section => {
    const top = section.offsetTop - 140;
    const height = section.offsetHeight;
    if (window.scrollY >= top && window.scrollY < top + height) {
      currentId = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    const href = link.getAttribute("href");
    link.classList.toggle("active", href === `#${currentId}`);
  });
}

function toggleMenu(forceState) {
  if (!menu || !menuToggle) return;

  const willOpen = typeof forceState === "boolean"
    ? forceState
    : !menu.classList.contains("is-open");

  menu.classList.toggle("is-open", willOpen);
  menuToggle.classList.toggle("is-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  document.body.classList.toggle("menu-open", willOpen);
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => toggleMenu());
}

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 860) {
      toggleMenu(false);
    }
  });
});

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", updateScrollEffects);
window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    toggleMenu(false);
  }
  updateScrollEffects();
});

window.addEventListener("load", () => {
  updateScrollEffects();

  if (loader) {
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 380);
  }
});