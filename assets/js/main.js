/* ========= I18N ========= */
function setLang(lang){
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const dict = (window.I18N && window.I18N[lang]) || {};
    if (dict[key]) el.innerHTML = dict[key];
  });
  // rotator reinicia no idioma atual
  ROT_LANG = lang; ROT_IDX = 0; rotateOnce();
}
document.addEventListener("DOMContentLoaded", ()=>{
  const saved = localStorage.getItem("lang") || "pt";
  setLang(saved);
  document.querySelectorAll("[data-lang]").forEach(b=>{
    b.addEventListener("click", ()=> setLang(b.dataset.lang));
  });
});

/* ========= Rotator saúde (15s) ========= */
const ROT = {
  pt: ["Construindo uma ponte entre Ciência, Arte e Bem-Estar.",
       "Saúde que cuida; tecnologia que aproxima."],
  es: ["Tendiendo un puente entre Ciencia, Arte y Bienestar.",
       "Salud centrada en las personas, con tecnología que acerca."],
  en: ["Building a bridge between Science, Art and Well-Being.",
       "Human-centered health, powered by technology."]
};
let ROT_IDX = 0, ROT_LANG = localStorage.getItem("lang") || "pt";
const rotEl = ()=> document.querySelector("#health-rotator span");
function rotateOnce(){
  const el = rotEl(); if(!el) return;
  const arr = ROT[ROT_LANG] || ROT.pt;
  el.style.opacity = 0;
  setTimeout(()=>{ el.textContent = arr[ROT_IDX % arr.length]; el.style.opacity = 1; ROT_IDX++; }, 220);
}
setInterval(rotateOnce, 15000);
document.addEventListener("DOMContentLoaded", rotateOnce);

/* ========= Scroll suave para âncoras ========= */
document.addEventListener("click", (e)=>{
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute("href");
  if(id.length < 2) return;
  const el = document.querySelector(id);
  if(!el) return;
  e.preventDefault();
  el.scrollIntoView({behavior:"smooth", block:"start"});
});

/* ========= Reveal on scroll (IntersectionObserver) ========= */
const prefersNoMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersNoMotion && "IntersectionObserver" in window){
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add("is-visible"); io.unobserve(en.target); }
    });
  }, {threshold: 0.12, rootMargin: "0px 0px -5% 0px"});

  document.querySelectorAll(".reveal, .project-card, .pub-card, .about-grid, .culture-grid img")
    .forEach(el=> io.observe(el));
}