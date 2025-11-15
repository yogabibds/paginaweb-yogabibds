/* ======================================================
   APP.JS — Animações Avançadas (Parallax, Microinterações)
====================================================== */

/* ------------------------------------------------------
   1) PARALLAX SUAVE NO HERO (imagem do cérebro)
------------------------------------------------------ */
window.addEventListener("scroll", () => {
  const sc = window.scrollY * 0.15; // mais suave
  const heroImg = document.querySelector(".hero-badge");

  if (heroImg) {
    heroImg.style.transform = `translateY(${sc}px) scale(1.03)`;
  }
});


/* ------------------------------------------------------
   2) FADE E SLIDE EM TÍTULOS ao rolar
------------------------------------------------------ */
const titles = document.querySelectorAll(".section-title");

function animateTitles() {
  titles.forEach((t) => {
    const box = t.getBoundingClientRect();

    if (box.top < window.innerHeight - 120) {
      t.style.opacity = 1;
      t.style.transform = "translateY(0)";
      t.style.transition = "1s ease";
    }
  });
}

window.addEventListener("scroll", animateTitles);
animateTitles();


/* ------------------------------------------------------
   3) MICRO-INTERAÇÃO EM CARDS DE PROJETOS
------------------------------------------------------ */
const cards = document.querySelectorAll(".proj");

cards.forEach((c) => {
  c.addEventListener("mouseenter", () => {
    c.style.transform = "translateY(-6px)";
    c.style.boxShadow = "0 12px 26px rgba(0,0,0,0.25)";
    c.style.transition = "0.3s ease";
  });

  c.addEventListener("mouseleave", () => {
    c.style.transform = "translateY(0)";
    c.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
  });
});


/* ------------------------------------------------------
   4) EFEITO FLOAT (levitação suave) nos ícones de contato
------------------------------------------------------ */
const contactItems = document.querySelectorAll(".contact-item");

contactItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-4px)";
    item.style.transition = "0.25s ease";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0)";
  });
});


/* ------------------------------------------------------
   5) PULSE SUAVE no botão CTA do HERO
------------------------------------------------------ */
const cta = document.querySelector(".cta");

if (cta) {
  cta.addEventListener("mouseenter", () => {
    cta.style.transform = "scale(1.06)";
    cta.style.boxShadow = "0 10px 25px rgba(0,0,0,0.22)";
    cta.style.transition = "0.3s";
  });

  cta.addEventListener("mouseleave", () => {
    cta.style.transform = "scale(1)";
    cta.style.boxShadow = "0 6px 14px rgba(0,0,0,0.15)";
  });
}


/* ------------------------------------------------------
   6) STORY CARDS — zoom suave
------------------------------------------------------ */
const stories = document.querySelectorAll(".story img");

stories.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.05)";
    img.style.transition = "0.35s ease";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});