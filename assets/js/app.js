/* ======================================================
   APP.JS — animações avançadas / efeitos extras
   Compatível 100% com main.js sem conflitos
====================================================== */

/* ======================================================
   1) SCROLL SUAVE PARA LINKS DO MENU
====================================================== */
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click", e=>{
    const target = document.querySelector(link.getAttribute("href"));
    if(target){
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});


/* ======================================================
   2) PARALLAX SUAVE NO HERO
====================================================== */
const hero = document.querySelector(".hero-bg");
window.addEventListener("scroll", ()=>{
  const sc = window.scrollY * 0.25;
  if(hero){
    hero.style.transform = `translateY(${sc}px)`;
  }
});


/* ======================================================
   3) FADE + SLIDE PARA TODOS OS ELEMENTOS SECTION
====================================================== */
function advancedScrollAnimations(){
  const animated = document.querySelectorAll(".fade-adv");

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  animated.forEach(el => obs.observe(el));
}

advancedScrollAnimations();


/* ======================================================
   4) HIGHLIGHT DO MENU CONFORME A SEÇÃO VISÍVEL
====================================================== */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

function highlightMenu(){
  let index = sections.length;

  while(--index && window.scrollY + 120 < sections[index].offsetTop) {}

  navLinks.forEach(link => link.classList.remove("active"));
  navLinks[index].classList.add("active");
}

highlightMenu();
window.addEventListener("scroll", highlightMenu);


/* ======================================================
   5) BOTÃO VOLTAR AO TOPO
====================================================== */
const topBtn = document.createElement("button");
topBtn.innerText = "↑";
topBtn.className = "back-to-top";
document.body.appendChild(topBtn);

topBtn.addEventListener("click", ()=>{
  window.scrollTo({ top:0, behavior:"smooth" });
});

window.addEventListener("scroll", ()=>{
  if(window.scrollY > 500){
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});


/* ======================================================
   6) ANIMAÇÃO LEVE NAS IMAGENS (stories + fotos)
====================================================== */
document.querySelectorAll("img").forEach(img=>{
  img.addEventListener("mouseenter", ()=>{
    img.style.transform = "scale(1.04)";
    img.style.transition = "0.25s ease";
  });

  img.addEventListener("mouseleave", ()=>{
    img.style.transform = "scale(1)";
  });
});