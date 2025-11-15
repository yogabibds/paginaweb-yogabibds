/* ======================================================
   APP.JS — Animações Avançadas (Compatível com Main.js)
====================================================== */

/* ------------------------------------------------------
   PARALLAX SUAVE NO HERO (CÉREBRO)
------------------------------------------------------ */
window.addEventListener("scroll", () => {
  const sc = window.scrollY * 0.20;
  const badge = document.querySelector(".hero-badge");

  if (badge) {
    badge.style.transform = `translateY(${sc}px) scale(1.03)`;
    badge.style.transition = "transform 0.1s linear";
  }
});


/* ------------------------------------------------------
   FADE PROGRESSIVO EM TÍTULOS E ELEMENTOS IMPORTANTES
------------------------------------------------------ */
function fadeOnScroll() {
  const els = document.querySelectorAll(
    ".section-title, .lead, .story, .proj, .pub, .about-photo"
  );

  els.forEach(el => {
    const box = el.getBoundingClientRect();
    if (box.top < window.innerHeight - 120) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
      el.style.transition = "0.9s ease";
    }
  });
}

window.addEventListener("scroll", fadeOnScroll);
window.addEventListener("load", fadeOnScroll);


/* ------------------------------------------------------
   MICRO-ANIMAÇÕES EM PROJETOS
------------------------------------------------------ */
document.querySelectorAll(".proj").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px)";
    card.style.boxShadow = "0 14px 32px rgba(0,0,0,0.22)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
    card.style.boxShadow = "0 8px 18px rgba(0,0,0,0.14)";
  });
});


/* ------------------------------------------------------
   MICRO-ANIMAÇÃO NAS FOTOS DE CULTURAS (Stories)
------------------------------------------------------ */
document.querySelectorAll(".story img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.08)";
    img.style.transition = "0.25s";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});


/* ------------------------------------------------------
   SMOOTH APPEAR ON LOAD (EVITA FLICKER)
------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 1;
});