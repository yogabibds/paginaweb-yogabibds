/* ======================================================
   APP.JS — Animações Avançadas
====================================================== */

/* Parallax suave no HERO */
window.addEventListener("scroll", ()=>{
  const sc = window.scrollY * 0.25;
  const heroImg = document.querySelector(".hero-badge");
  if(heroImg){
    heroImg.style.transform = `translateY(${sc}px) scale(1.05)`;
  }
});

/* Fade progressivo nos títulos ao rolar */
const titles = document.querySelectorAll(".section-title");
titles.forEach(t=>{
  t.style.opacity = 0;
});

function animateTitles(){
  titles.forEach(t=>{
    const box = t.getBoundingClientRect();
    if(box.top < window.innerHeight - 120){
      t.style.transition = "1s";
      t.style.opacity = 1;
      t.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", animateTitles);
animateTitles();

/* Micro-interação nos cards de projeto */
const cards = document.querySelectorAll(".proj");
cards.forEach(c=>{
  c.addEventListener("mouseenter", ()=>{
    c.style.transform = "translateY(-6px)";
    c.style.boxShadow = "0 12px 28px rgba(0,0,0,0.25)";
  });
  c.addEventListener("mouseleave", ()=>{
    c.style.transform = "translateY(0)";
    c.style.boxShadow = "0 8px 20px rgba(0,0,0,0.18)";
  });
});