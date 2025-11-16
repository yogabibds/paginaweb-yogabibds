/* ======================================================
   I18N (TRADUÇÃO)
====================================================== */
const I18N = {
  pt: {
    "nav.home": "Início",
    "nav.about": "Quem sou eu",
    "nav.projects": "Projetos",
    "nav.pubs": "Publicações",
    "nav.cultures": "Culturas",
    "nav.contact": "Contato",

    "hero.title": "Bem-vindo ao meu universo",
    "hero.subtitle": "Aprender é meu superpoder",
    "hero.cta": "Meus projetos",

    ROTATOR: [
      "Respirar, inspirar, criar e compartilhar.",
      "Tecnologia a serviço das pessoas.",
      "Conhecimento transforma vidas."
    ],

    /* About */
    "about.title": "Quem sou eu",
    "about.p1":
      "Sou Gabriela Barbosa de Sousa, brasileira vivendo em Rosario, Argentina, estudante de Medicina na UNR e criadora do Universo Laia — um ecossistema que integra saúde, tecnologia, música, educação e bem-estar.",
    "about.p2":
      "Cresci cercada por livros, computadores, cultura musical e pessoas construindo novas histórias. Desde cedo aprendi que conhecimento transforma vidas e que aprender é um superpoder.",
    "about.p3":
      "Acredito na união entre ciência e criatividade para resolver problemas reais. Hoje aplico essa visão tanto na saúde quanto nos meus projetos digitais.",
    "about.edutitle": "Formação em Medicina — UNR",
    "about.edutext":
      "Universidade Nacional de Rosário (UNR), Argentina. Currículo em PBL, prática clínica precoce e pesquisa em neurociências.",

    /* Projetos */
    "projects.title": "Meus projetos",
    "projects.music": "Gestão do legado musical de Edney Fernandes.",
    "projects.tech": "Consultoria técnica e desenvolvimento digital.",
    "projects.academy": "Idiomas, educação e intercâmbios culturais.",
    "projects.mind": "Meditação, bem-estar e neurociências.",

    /* Publicações */
    "pubs.title": "Publicações Acadêmicas",

    /* Culturas */
    "cult.title": "Culturas que me transformaram",
    "cult.lead":
      "Viajar expande a mente, conecta culturas, inspira novas ideias e transforma quem somos. Cada lugar me ensinou algo único.",

    /* Contato */
    "contact.title": "Contato"
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.pubs": "Publicaciones",
    "nav.cultures": "Culturas",
    "nav.contact": "Contacto",

    "hero.title": "Bienvenid@ a mi universo",
    "hero.subtitle": "Aprender es mi superpoder",
    "hero.cta": "Mis proyectos",

    ROTATOR: [
      "Respirar, inspirar, crear y compartir.",
      "Tecnología al servicio de las personas.",
      "El conocimiento transforma vidas."
    ],

    "about.title": "Quién soy",
    "about.p1":
      "Soy Gabriela Barbosa de Sousa, brasileña viviendo en Rosario, Argentina. Estudiante de Medicina en la UNR y creadora del Universo Laia — un ecosistema que integra salud, tecnología, música, educación y bienestar.",
    "about.p2":
      "Crecí rodeada de libros, computadoras, cultura musical y personas creando nuevas historias. Desde muy joven entendí que el conocimiento transforma vidas.",
    "about.p3":
      "Creo en la unión entre ciencia y creatividad para resolver problemas reales. Hoy aplico esta visión tanto en salud como en mis proyectos digitales.",
    "about.edutitle": "Formación en Medicina — UNR",
    "about.edutext":
      "Universidad Nacional de Rosario (UNR). ABP, práctica clínica temprana e investigación en neurociencias.",

    "projects.title": "Mis proyectos",
    "projects.music": "Gestión del legado musical de Edney Fernandes.",
    "projects.tech": "Consultoría técnica y desarrollo digital.",
    "projects.academy": "Idiomas, educación e intercambios culturales.",
    "projects.mind": "Meditación, bienestar y neurociencias.",

    "pubs.title": "Publicaciones Académicas",

    "cult.title": "Culturas que me transformaron",
    "cult.lead":
      "Viajar expande la mente, conecta culturas, inspira nuevas ideas y transforma quiénes somos. Cada lugar me enseñó algo único.",

    "contact.title": "Contacto"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.pubs": "Publications",
    "nav.cultures": "Cultures",
    "nav.contact": "Contact",

    "hero.title": "Welcome to my universe",
    "hero.subtitle": "Learning is my superpower",
    "hero.cta": "My projects",

    ROTATOR: [
      "Breathe, inspire, create and share.",
      "Technology serving people.",
      "Knowledge transforms lives."
    ],

    "about.title": "About me",
    "about.p1":
      "I'm Gabriela Barbosa de Sousa, a Brazilian living in Rosario, Argentina. Medical student at UNR and creator of Universo Laia — an ecosystem connecting health, technology, music, education and well-being.",
    "about.p2":
      "I grew up surrounded by books, computers, music culture and people creating new stories. I learned early that knowledge changes lives.",
    "about.p3":
      "I believe in combining science and creativity to solve real problems. Today I apply this vision in healthcare and digital innovation.",
    "about.edutitle": "Medical Training — UNR",
    "about.edutext":
      "National University of Rosario (UNR). PBL curriculum, early clinical immersion and neuroscience research.",

    "projects.title": "My projects",
    "projects.music": "Legacy management of Edney Fernandes' music.",
    "projects.tech": "Technical consulting and digital development.",
    "projects.academy": "Languages, education and cultural exchange.",
    "projects.mind": "Meditation, well-being and neuroscience.",

    "pubs.title": "Academic Publications",

    "cult.title": "Cultures that shaped me",
    "cult.lead":
      "Travel expands the mind, connects cultures, inspires creativity and transforms who we become. Each place taught me something unique.",

    "contact.title": "Contact"
  }
};

/* ======================================================
   HELPERS
====================================================== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ======================================================
   FUNÇÃO DE TROCA DE IDIOMA
====================================================== */
function applyLang(lang) {
  document.documentElement.lang = lang;

  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  ROTATION.items = I18N[lang].ROTATOR;
  ROTATION.index = 0;
  ROTATION.tick(true);

  $$(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

$$(".lang-btn").forEach((btn) =>
  btn.addEventListener("click", () => applyLang(btn.dataset.lang))
);

/* ======================================================
   ROTATOR
====================================================== */
const ROTATION = {
  items: I18N.pt.ROTATOR,
  index: 0,
  timer: null,

  tick(immediate = false) {
    const rot = $("#rotator");
    if (!rot) return;

    rot.textContent = this.items[this.index];

    if (this.timer) clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      this.index = (this.index + 1) % this.items.length;
      this.tick();
    }, immediate ? 9000 : 9000);
  }
};

/* ======================================================
   ANIMAÇÃO SCROLL
====================================================== */
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-up, .fade-in");

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => {
    el.style.animationPlayState = "paused";
    obs.observe(el);
  });
}

/* ======================================================
   INIT
====================================================== */
document.addEventListener("DOMContentLoaded", () => {
  applyLang("pt");
  ROTATION.tick(true);
  animateOnScroll();
});