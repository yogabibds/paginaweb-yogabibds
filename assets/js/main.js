/* =========================================================
   UNIVERSO LAIA — MAIN.JS CONSOLIDADO
   i18n + Rotator + Troca de idioma + Animações básicas
   ========================================================= */

/* ===========================
      I18N – Sistema de idiomas
   =========================== */
const I18N = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Quem sou eu",
    "nav.projects": "Projetos",
    "nav.cultures": "Culturas",
    "nav.contact": "Contato",

    "hero.title": "Bem-vindo ao meu universo",
    "hero.subtitle": "Aprender é meu superpoder",
    "hero.cta": "Meus projetos",
    ROTATOR: [
      "Respirar, inspirar, criar e compartilhar.",
      "Construindo uma ponte entre Ciência, Arte e Bem-Estar.",
      "Tecnologia a serviço das pessoas."
    ],

    "about.title": "Quem sou eu",
    "about.blurb":
      "Sou Gabriela Barbosa, brasileira na Argentina. Trabalho com tecnologia há anos e hoje conecto saúde, música, educação e IA para resolver problemas reais. Atuo como estrategista criativa, gestora de projetos e desenvolvedora de experiências digitais.",

    "about.edu.title": "Formação em Medicina — UNR",
    "about.edu.text":
      "Universidade Nacional de Rosário (UNR), Argentina. Currículo com PBL, integração precoce à prática clínica e pesquisa em neurociências.",

    "about.cv.pt": "Ver CV (PT)",
    "about.cv.es": "Ver CV (ES)",
    "about.cv.en": "View CV (EN)",

    "pubs.title": "Publicações Acadêmicas",

    "projects.title": "Meus projetos",
    "projects.music": "Gestão do legado musical de Edney Fernandes.",
    "projects.tech": "Consultoria técnica: sites, soluções e gestão de projetos.",
    "projects.academy": "Idiomas, trocas de intercâmbio e educação.",
    "projects.mind": "Meditação, bem-estar e mindfulness.",

    "cult.title": "Culturas que me transformaram",
    "cult.lead":
      "Viajar transforma corpo e mente. Entre línguas e costumes ampliamos a visão de mundo.",

    "contact.title": "Contato"
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.cultures": "Culturas",
    "nav.contact": "Contacto",

    "hero.title": "Bienvenid@ a mi universo",
    "hero.subtitle": "Aprender es mi superpoder",
    "hero.cta": "Mis proyectos",
    ROTATOR: [
      "Respirar, inspirar, crear y compartir.",
      "Tendiendo un puente entre Ciencia, Arte y Bienestar.",
      "Tecnología al servicio de las personas."
    ],

    "about.title": "Quién soy",
    "about.blurb":
      "Soy Gabriela Barbosa, brasileña viviendo en Argentina…",

    "about.edu.title": "Formación en Medicina — UNR",
    "about.edu.text":
      "Universidad Nacional de Rosario (UNR). PBL, práctica clínica temprana e investigación.",

    "about.cv.pt": "Ver CV (PT)",
    "about.cv.es": "Ver CV (ES)",
    "about.cv.en": "View CV (EN)",

    "pubs.title": "Publicaciones académicas",

    "projects.title": "Mis proyectos",
    "projects.music": "Gestión del legado musical de Edney Fernandes.",
    "projects.tech": "Consultoría técnica.",
    "projects.academy": "Idiomas, intercambio y educación.",
    "projects.mind": "Meditación, bienestar y mindfulness.",

    "cult.title": "Culturas que me transformaron",
    "cult.lead":
      "Viajar transforma cuerpo y mente.",

    "contact.title": "Contacto"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.cultures": "Cultures",
    "nav.contact": "Contact",

    "hero.title": "Welcome to my universe",
    "hero.subtitle": "Learning is my superpower",
    "hero.cta": "My projects",
    ROTATOR: [
      "Breathe, inspire, create and share.",
      "Building a bridge between Science, Art and Well-being.",
      "Technology in service of people."
    ],

    "about.title": "About me",
    "about.blurb":
      "I am Gabriela Barbosa, a Brazilian living in Argentina…",

    "about.edu.title": "Medical Training — UNR",
    "about.edu.text":
      "UNR. Early clinical exposure, PBL and neuroscience research.",

    "about.cv.pt": "View CV (PT)",
    "about.cv.es": "View CV (ES)",
    "about.cv.en": "View CV (EN)",

    "pubs.title": "Academic Publications",

    "projects.title": "My projects",
    "projects.music": "Management of Edney Fernandes’ musical legacy.",
    "projects.tech": "Tech consulting.",
    "projects.academy": "Languages and exchange.",
    "projects.mind": "Meditation and wellbeing.",

    "cult.title": "Cultures that shaped me",
    "cult.lead": "Travel reshapes body and mind.",

    "contact.title": "Contact"
  }
};

/* ===========================
         HELPERS
   =========================== */
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

/* ===========================
         Rotator (frase)
   =========================== */
const ROTATION = {
  items: I18N.pt.ROTATOR,
  index: 0,
  timer: null,
  tick(force = false) {
    if (!this.items.length) return;
    $("#rotator").textContent = this.items[this.index];
    if (this.timer) clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.index = (this.index + 1) % this.items.length;
      this.tick();
    }, force ? 15000 : 15000);
  }
};

/* ===========================
       Troca de idioma
   =========================== */
function applyLang(lang) {
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang][key]) {
      el.innerHTML = I18N[lang][key];
    }
  });

  ROTATION.items = I18N[lang].ROTATOR;
  ROTATION.index = 0;
  ROTATION.tick(true);

  $$(".lang-btn").forEach(btn =>
    btn.classList.toggle("active", btn.dataset.lang === lang)
  );
}

$$(".lang-btn").forEach(btn =>
  btn.addEventListener("click", () => applyLang(btn.dataset.lang))
);

/* ===========================
       Animações do Scroll
   =========================== */
function revealOnScroll() {
  const els = document.querySelectorAll(".reveal");

  const top = window.scrollY + window.innerHeight;
  els.forEach(el => {
    if (el.offsetTop < top - 60) {
      el.classList.add("visible");
    }
  });
}

document.addEventListener("scroll", revealOnScroll);

/* ===========================
         INIT
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  applyLang("pt");
  ROTATION.tick(true);
  revealOnScroll();
});