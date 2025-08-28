// ===== Config de idioma =====
const TRANSLATIONS = {
  en: {
    title_home: "Home — Universo Laia",
    title_about: "About — Universo Laia",
    title_projects: "Projects — Universo Laia",
    title_contact: "Contact — Universo Laia",

    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_contact: "Contact",

    hero_h1: "Knowledge drives, technology multiplies.",
    hero_p: "Purpose-driven education, human technology and a conscious lifestyle.",
    cta_open: "Open Projects",

    about_title: "Who I am",
    areas_title: "Areas",
    area_travel: "Travel",
    area_yoga: "Yoga",
    area_music: "Music",
    area_languages: "Languages",
    area_tech: "Tech",
    area_medicine: "Medicine",

    projects_title: "Projects",
    prj_music_desc: "Preserving Edney Fernandes' musical legacy.",
    prj_mind_desc: "Yoga, meditation and well-being.",
    prj_acad_desc: "Languages with practical, multicultural focus.",
    prj_tech_desc: "Consulting and human-centered digital solutions.",

    contact_title: "Contacts",
    contact_note: "Reach me here:",
  },

  pt: {
    title_home: "Início — Universo Laia",
    title_about: "Sobre — Universo Laia",
    title_projects: "Projetos — Universo Laia",
    title_contact: "Contato — Universo Laia",

    nav_home: "Home",
    nav_about: "Sobre",
    nav_projects: "Projetos",
    nav_contact: "Contato",

    hero_h1: "Conhecimento impulsiona, tecnologia multiplica.",
    hero_p: "Educação com propósito, tecnologia humana e um estilo de vida consciente.",
    cta_open: "Abrir projetos",

    about_title: "Quem sou",
    areas_title: "Áreas",
    area_travel: "Viagens",
    area_yoga: "Yoga",
    area_music: "Música",
    area_languages: "Idiomas",
    area_tech: "Tech",
    area_medicine: "Medicina",

    projects_title: "Projetos",
    prj_music_desc: "Preservando o legado musical de Edney Fernandes.",
    prj_mind_desc: "Yoga, meditação e bem-estar.",
    prj_acad_desc: "Idiomas com foco prático e multicultural.",
    prj_tech_desc: "Consultoria e soluções digitais centradas no humano.",

    contact_title: "Contatos",
    contact_note: "Fale comigo por aqui:",
  },

  es: {
    title_home: "Inicio — Universo Laia",
    title_about: "Acerca — Universo Laia",
    title_projects: "Proyectos — Universo Laia",
    title_contact: "Contacto — Universo Laia",

    nav_home: "Home",
    nav_about: "Acerca",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",

    hero_h1: "El conocimiento impulsa, la tecnología multiplica.",
    hero_p: "Educación con propósito, tecnología humana y un estilo de vida consciente.",
    cta_open: "Abrir proyectos",

    about_title: "Quién soy",
    areas_title: "Áreas",
    area_travel: "Viajes",
    area_yoga: "Yoga",
    area_music: "Música",
    area_languages: "Idiomas",
    area_tech: "Tech",
    area_medicine: "Medicina",

    projects_title: "Proyectos",
    prj_music_desc: "Preservando el legado musical de Edney Fernandes.",
    prj_mind_desc: "Yoga, meditación y bienestar.",
    prj_acad_desc: "Idiomas con enfoque práctico y multicultural.",
    prj_tech_desc: "Consultoría y soluciones digitales centradas en el humano.",

    contact_title: "Contactos",
    contact_note: "Contáctame aquí:",
  }
};

function getLang() {
  const saved = localStorage.getItem('lang');
  if (saved && TRANSLATIONS[saved]) return saved;
  return 'en';
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  localStorage.setItem('lang', lang);
  applyTranslations();
}

function applyTranslations() {
  const lang = getLang();
  const dict = TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
  // título da aba
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    if (dict[key]) titleEl.textContent = dict[key];
  }
  // marcar botão de idioma ativo
  document.querySelectorAll('.lang button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

function initLangButtons() {
  document.querySelectorAll('.lang button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function applyNavLabels() {
  // destaca o item atual pela URL
  const path = location.pathname.split('/').pop() || 'index.html';
  const map = {
    'index.html': '#nav-home',
    'about.html': '#nav-about',
    'projects.html': '#nav-projects',
    'contact.html': '#nav-contact'
  };
  const sel = map[path];
  if (sel) {
    document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
    const el = document.querySelector(sel);
    if (el) el.classList.add('active');
  }
}

// inicia ao carregar
document.addEventListener('DOMContentLoaded', () => {
  initLangButtons();
  applyTranslations();
  applyNavLabels();
});