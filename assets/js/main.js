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
      "Construindo uma ponte entre Ciência, Arte e Bem-Estar.",
      "Tecnologia a serviço das pessoas."
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
      "Tendiendo un puente entre Ciencia, Arte y Bienestar.",
      "Tecnología al servicio de las personas."
    ],

    "about.title":"Quién soy",

    "pubs.title":"Publicaciones Académicas",
    "projects.title":"Mis proyectos",

    "cult.title":"Culturas que me transformaron",
    "cult.lead":"Viajar transforma cuerpo y mente…",

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
      "Bridging Science, Art and Well-being.",
      "Technology serving people."
    ],

    "about.title":"About me",

    "pubs.title":"Academic Publications",
    "projects.title":"My projects",

    "cult.title":"Cultures that shaped me",
    "cult.lead":"Travel reshapes body and mind…",

    "contact.title":"Contact"
  }
};

/* ======================================================
   HELPERS
====================================================== */
const $  = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

/* ======================================================
   FUNÇÃO DE TROCA DE IDIOMA
====================================================== */
function applyLang(lang){
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  // Frases rotativas
  ROTATION.items = I18N[lang].ROTATOR;
  ROTATION.index = 0;
  ROTATION.tick(true);

  // Botão ativo
  $$(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

$$(".lang-btn").forEach(btn =>
  btn.addEventListener("click", ()=> applyLang(btn.dataset.lang))
);

/* ======================================================
   ROTATOR (FRASES)
====================================================== */
const ROTATION = {
  items: I18N.pt.ROTATOR,
  index: 0,
  timer: null,

  tick(immediate=false){
    const rot = $("#rotator");
    if(!rot) return;

    rot.textContent = this.items[this.index];

    if(this.timer) clearTimeout(this.timer);

    this.timer = setTimeout(()=>{
      this.index = (this.index + 1) % this.items.length;
      this.tick();
    }, immediate ? 12000 : 12000);
  }
};

/* ======================================================
   ANIMAÇÃO NO SCROLL
====================================================== */
function animateOnScroll(){
  const elements = document.querySelectorAll(".fade-up, .fade-in");

  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.animationPlayState = "running";
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el=>{
    el.style.animationPlayState = "paused";
    obs.observe(el);
  });
}

/* ======================================================
   INIT
====================================================== */
document.addEventListener("DOMContentLoaded", ()=>{
  applyLang("pt");
  ROTATION.tick(true);
  animateOnScroll();
});