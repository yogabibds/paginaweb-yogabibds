/* ============================
   ANIMAÇÃO RELUME-STYLE
============================ */
function animateOnScroll(){
  const elems = document.querySelectorAll(".fade-up");

  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.animationDelay = "0s";
        e.target.style.animationPlayState = "running";
        obs.unobserve(e.target);
      }
    });
  }, {threshold:0.2});

  elems.forEach(el=>{
    el.style.animationPlayState = "paused";
    obs.observe(el);
  });
}

document.addEventListener("DOMContentLoaded", animateOnScroll);
