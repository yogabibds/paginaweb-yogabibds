/* ======================================================
   I18N (TRADUÇÃO)
====================================================== */
const I18N = {
  pt: {
    "nav.home":"Início",
    "nav.about":"Quem sou eu",
    "nav.projects":"Projetos",
    "nav.pubs":"Publicações",
    "nav.cultures":"Culturas",
    "nav.contact":"Contato",

    "hero.title":"Bem-vindo ao meu universo",
    "hero.subtitle":"Aprender é meu superpoder",
    "hero.cta":"Meus projetos",

    ROTATOR:[
      "Respirar, inspirar, criar e compartilhar.",
      "Tecnologia a serviço das pessoas.",
      "Construindo pontes entre ciência e criatividade."
    ],

    "about.title":"Quem sou eu",

    "pubs.title":"Publicações Acadêmicas",

    "projects.title":"Meus projetos",

    "cult.title":"Culturas que me transformaram",
    "cult.lead":"Viajar transforma corpo e mente…",

    "contact.title":"Contato"
  },

  es: {
    "nav.home":"Inicio",
    "nav.about":"Sobre mí",
    "nav.projects":"Proyectos",
    "nav.pubs":"Publicaciones",
    "nav.cultures":"Culturas",
    "nav.contact":"Contacto",

    "hero.title":"Bienvenid@ a mi universo",
    "hero.subtitle":"Aprender es mi superpoder",
    "hero.cta":"Mis proyectos",

    ROTATOR:[
      "Respirar, inspirar, crear y compartir.",
      "Tecnología al servicio de las personas.",
      "Construyendo puentes entre ciencia y creatividad."
    ],

    "about.title":"Quién soy",
    "pubs.title":"Publicaciones Académicas",
    "projects.title":"Mis proyectos",
    "cult.title":"Culturas que me transformaron",
    "cult.lead":"Viajar transforma el cuerpo y la mente…",
    "contact.title":"Contacto"
  },

  en: {
    "nav.home":"Home",
    "nav.about":"About",
    "nav.projects":"Projects",
    "nav.pubs":"Publications",
    "nav.cultures":"Cultures",
    "nav.contact":"Contact",

    "hero.title":"Welcome to my universe",
    "hero.subtitle":"Learning is my superpower",
    "hero.cta":"My projects",

    ROTATOR:[
      "Breathe, inspire, create and share.",
      "Technology serving people.",
      "Building bridges between science and creativity."
    ],

    "about.title":"About me",
    "pubs.title":"Academic Publications",
    "projects.title":"My projects",
    "cult.title":"Cultures that shaped me",
    "cult.lead":"Travel transforms body and mind…",
    "contact.title":"Contact"
  }
};

/* HELPERS */
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

/* TROCA DE IDIOMA */
function applyLang(lang){
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  ROTATION.items = I18N[lang].ROTATOR;
  ROTATION.index = 0;
  ROTATION.tick(true);

  $$(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang===lang);
  });
}

$$(".lang-btn").forEach(btn =>
  btn.addEventListener("click", ()=>applyLang(btn.dataset.lang))
);

/* ROTATOR */
const ROTATION = {
  items: I18N.pt.ROTATOR,
  index:0,
  timer:null,
  tick(immediate=false){
    const el=$("#rotator");
    el.textContent=this.items[this.index];
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.index=(this.index+1)%this.items.length;
      this.tick();
    }, immediate?9000:9000);
  }
};

/* SCROLL ANIMAÇÕES */
function fadeScroll(){
  const els=document.querySelectorAll(".fade-up");
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.animationPlayState="running";
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.2});
  els.forEach(el=>{
    el.style.animationPlayState="paused";
    obs.observe(el);
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  applyLang("pt");
  ROTATION.tick(true);
  fadeScroll();
});