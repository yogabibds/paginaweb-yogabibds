/* ======================================================
   APP.JS — Animações Avançadas (Relume + Premium Style)
====================================================== */

/* ------------------------------------------------------
   1. PARALLAX SUAVE NO HERO (imagem do cérebro)
------------------------------------------------------ */
window.addEventListener("scroll", ()=>{
  const sc = window.scrollY * 0.18;
  const heroImg = document.querySelector(".hero-badge");
  if(heroImg){
    heroImg.style.transform = `translateY(${sc}px) scale(1.05)`;
  }
});

/* ------------------------------------------------------
   2. Fade + Slide para títulos (section-title)
------------------------------------------------------ */
const titles = document.querySelectorAll(".section-title");
titles.forEach(t=>{
  t.style.opacity = 0;
  t.style.transform = "translateY(25px)";
});

function animateTitles(){
  titles.forEach(t=>{
    const box = t.getBoundingClientRect();
    if(box.top < window.innerHeight - 120){
      t.style.transition = "0.9s ease";
      t.style.opacity = 1;
      t.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", animateTitles);
animateTitles();

/* ------------------------------------------------------
   3. Microinterações nos PROJETOS (hover)
------------------------------------------------------ */
const cards = document.querySelectorAll(".proj");
cards.forEach(c=>{
  c.style.transition = "0.3s ease";

  c.addEventListener("mouseenter", ()=>{
    c.style.transform = "translateY(-6px)";
    c.style.boxShadow = "0 16px 30px rgba(0,0,0,0.25)";
  });

  c.addEventListener("mouseleave", ()=>{
    c.style.transform = "translateY(0)";
    c.style.boxShadow = "0 10px 22px rgba(0,0,0,0.14)";
  });
});

/* ------------------------------------------------------
   4. Fade suave em parágrafos longos (.lead)
------------------------------------------------------ */
const leads = document.querySelectorAll(".lead");
leads.forEach(p=>{
  p.style.opacity = 0;
  p.style.transform = "translateY(20px)";
});

function animateLeads(){
  leads.forEach(p=>{
    const pos = p.getBoundingClientRect();
    if(pos.top < window.innerHeight - 140){
      p.style.transition = "1s ease";
      p.style.opacity = 1;
      p.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", animateLeads);
animateLeads();

/* ------------------------------------------------------
   5. Fade nos itens do grid (projetos, pubs, stories)
------------------------------------------------------ */
const grids = document.querySelectorAll(".pub, .story, .proj");
grids.forEach(g=>{
  g.style.opacity = 0;
  g.style.transform = "translateY(28px)";
});

function animateGrids(){
  grids.forEach(g=>{
    const pos = g.getBoundingClientRect();
    if(pos.top < window.innerHeight - 90){
      g.style.transition = "0.8s ease-out";
      g.style.opacity = 1;
      g.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", animateGrids);
animateGrids();

/* ------------------------------------------------------
   6. Smooth Scroll ao clicar no menu
------------------------------------------------------ */
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click", e=>{
    const id = link.getAttribute("href");
    if(id.startsWith("#")){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({
        behavior:"smooth",
        block:"start"
      });
    }
  });
});

/* ------------------------------------------------------
   7. Brilho leve ao passar o mouse nos ícones de contato
------------------------------------------------------ */
const contacts = document.querySelectorAll(".contact-item");
contacts.forEach(i=>{
  i.style.transition = "0.25s";
  i.addEventListener("mouseenter", ()=> i.style.opacity = 0.75);
  i.addEventListener("mouseleave", ()=> i.style.opacity = 1);
});

/* ------------------------------------------------------
   8. Pulsação leve no botão CTA
------------------------------------------------------ */
const cta = document.querySelector(".cta");
if(cta){
  setInterval(()=>{
    cta.style.transform = "scale(1.04)";
    setTimeout(()=> cta.style.transform = "scale(1)", 400);
  }, 5000);
}