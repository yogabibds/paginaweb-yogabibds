/* ======================================================
   I18N – Textos de tradução
====================================================== */
const I18N = {
  pt: {
    "nav.home":"Início",
    "nav.about":"Quem sou eu",
    "nav.projects":"Projetos",
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
    "about.blurb":"Sou Gabriela Barbosa, brasileira na Argentina. Trabalho com tecnologia há anos e hoje conecto saúde, música, educação e IA para resolver problemas reais.",
    "about.edu.title":"Formação em Medicina — UNR",
    "about.edu.text":"Universidade Nacional de Rosário (UNR), Argentina. Currículo com PBL, prática clínica precoce e pesquisa em neurocências.",

    "pubs.title":"Publicações Acadêmicas",

    "projects.title":"Meus projetos",
    "projects.music":"Gestão do legado musical de Edney Fernandes.",
    "projects.tech":"Consultoria técnica: sites, soluções e gestão de projetos.",
    "projects.academy":"Idiomas, trocas de intercâmbio e educação.",
    "projects.mind":"Meditação, bem-estar e mindfulness.",

    "cult.title":"Culturas que me transformaram",
    "cult.lead":"Viajar transforma corpo e mente…",

    "contact.title":"Contato"
  },

  es: {
    "nav.home":"Inicio",
    "nav.about":"Sobre mí",
    "nav.projects":"Proyectos",
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
    "about.blurb":"Soy Gabriela Barbosa, brasileña en Argentina. Conecto salud, música, educación e IA para resolver problemas reales.",
    "about.edu.title":"Formación en Medicina — UNR",
    "about.edu.text":"Universidad Nacional de Rosario (UNR). ABP, práctica clínica temprana e investigación en neurociencias.",

    "pubs.title":"Publicaciones Académicas",

    "projects.title":"Mis proyectos",
    "projects.music":"Gestión del legado musical de Edney Fernandes.",
    "projects.tech":"Consultoría técnica: sitios, soluciones y gestión de proyectos.",
    "projects.academy":"Idiomas, intercambios y educación.",
    "projects.mind":"Meditación, bienestar y mindfulness.",

    "cult.title":"Culturas que me transformaron",
    "cult.lead":"Viajar transforma cuerpo y mente…",

    "contact.title":"Contacto"
  },

  en: {
    "nav.home":"Home",
    "nav.about":"About",
    "nav.projects":"Projects",
    "nav.cultures":"Cultures",
    "nav.contact":"Contact",

    "hero.title":"Welcome to my universe",
    "hero.subtitle":"Learning is my superpower",
    "hero.cta":"My projects",

    ROTATOR:[
      "Breathe, inspire, create and share.",
      "Building a bridge between Science, Art and Well-being.",
      "Technology in service of people."
    ],

    "about.title":"About me",
    "about.blurb":"I connect health, music, education and AI to solve real problems.",
    "about.edu.title":"Medical Training — UNR",
    "about.edu.text":"National University of Rosario (UNR). PBL, early clinical practice and neuroscience research.",

    "pubs.title":"Academic Publications",

    "projects.title":"My projects",
    "projects.music":"Management of Edney Fernandes’ musical legacy.",
    "projects.tech":"Tech consulting: websites, solutions and project management.",
    "projects.academy":"Languages, exchange and education.",
    "projects.mind":"Meditation, wellbeing and mindfulness.",

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
   APLICA IDIOMA
====================================================== */
function applyLang(lang){
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[lang][key]) el.innerHTML = I18N[lang][key];
  });

  // Frases rotativas
  ROTATION.items = I18N[lang].ROTATOR;
  ROTATION.index = 0;
  ROTATION.tick(true);

  // Botão ativo
  $$(".lang-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );
}

$$(".lang-btn").forEach(btn =>
  btn.addEventListener("click", ()=>applyLang(btn.dataset.lang))
);


/* ======================================================
   ROTATOR – Frase dinâmica
====================================================== */
const ROTATION = {
  items: I18N.pt.ROTATOR,
  index: 0,
  timer: null,

  tick(immediate=false){
    const el = $("#rotator");
    if(!el) return;

    el.style.opacity = 0;

    setTimeout(()=>{
      el.textContent = this.items[this.index];
      el.style.opacity = 1;
    }, 400);

    if(this.timer) clearTimeout(this.timer);

    this.timer = setTimeout(()=>{
      this.index = (this.index + 1) % this.items.length;
      this.tick();
    }, immediate ? 12000 : 12000);
  }
};


/* ======================================================
   ANIMAÇÕES — Estilo Relume Premium
====================================================== */
function animateOnScroll(){
  const animated = document.querySelectorAll(".fade-in, .fade-up");

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.2});

  animated.forEach(el => observer.observe(el));
}


/* ======================================================
   FADE PARA ELEMENTOS GERAIS
====================================================== */
document.querySelectorAll("section, h2, p, img, .proj, .pub, .story")
  .forEach(el => el.classList.add("fade-up"));


/* ======================================================
   INIT
====================================================== */
document.addEventListener("DOMContentLoaded", ()=>{
  applyLang("pt");     // idioma padrão
  ROTATION.tick(true); // inicia rotator
  animateOnScroll();   // ativa animações
});