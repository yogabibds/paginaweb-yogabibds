/* ======================================================
   HELPERS
====================================================== */
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* ======================================================
   APLICA IDIOMA
====================================================== */
function applyLang(lang){
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  ROT.items = I18N[lang].ROTATOR;
  ROT.index = 0;
  ROT.tick(true);

  $$(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang===lang);
  });
}

$$(".lang-btn").forEach(btn =>
  btn.addEventListener("click", ()=>applyLang(btn.dataset.lang))
);

/* ======================================================
   ROTATOR
====================================================== */
const ROT = {
  items: I18N.pt.ROTATOR,
  index: 0,
  timer: null,

  tick(immediate=false){
    const el = $("#rotator");
    if(!el) return;

    el.textContent = this.items[this.index];

    if(this.timer) clearTimeout(this.timer);

    this.timer = setTimeout(()=>{
      this.index = (this.index+1) % this.items.length;
      this.tick();
    }, immediate?14000:14000);
  }
};

/* ======================================================
   ANIMAÇÕES ON SCROLL
====================================================== */
function animateOnScroll(){
  const els = $$(".fade-up");

  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.animationPlayState = "running";
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.2});

  els.forEach(el=>{
    el.style.animationPlayState = "paused";
    obs.observe(el);
  });
}

/* ======================================================
   INIT
====================================================== */
document.addEventListener("DOMContentLoaded", ()=>{
  applyLang("pt");
  ROT.tick(true);
  animateOnScroll();
});