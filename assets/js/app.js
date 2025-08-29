/*************************************************
 * NAV ATIVA (destaca o link da página atual)
 *************************************************/
document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll(".menu a");
  const path = location.pathname.split("/").pop() || "index.html";
  menuLinks.forEach(l => {
    if (l.getAttribute("href") === path) l.classList.add("active");
  });
});

/*************************************************
 * I18N — Traduções (EN/PT/ES)
 *************************************************/
const I18N = {
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    hero1: "Knowledge drives, technology multiplies.",
    hero2: "Purpose-driven education, human technology and a conscious lifestyle.",
    cta: "Open Projects",
    titles: { projects: "Projects", about: "Who I am", areas: "Areas", contact: "Contacts", cultures: "Cultures that transformed me", medicine: "Medicine" },
    proj: {
      music:   { title: "Laia Music",   desc: "Preserving and spreading Edney Fernandes' musical legacy.", btn: "Open" },
      mind:    { title: "Laia Mind",    desc: "Yoga, meditation and well-being.",                         btn: "Open" },
      academy: { title: "Laia Academy", desc: "Languages with multicultural, practical focus.",           btn: "Open" },
      tech:    { title: "Laia Tech",    desc: "Human-centered digital solutions and consulting.",         btn: "Open" }
    },
    about: {
      p1: "Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English.",
      p2: "I'm the founder of Universo Laia, integrating education, technology, music and well-being.",
      p3: "I'm also a medical student developing projects that blend academic knowledge, social impact and human-centered tech."
    },
    areas: { travel: "Travel", yoga: "Yoga", music: "Music", languages: "Languages", tech: "Tech", medicine: "Medicine" },
    contact: { email: "Email", linkedin: "LinkedIn", instagram: "Instagram", github: "GitHub", whatsapp: "WhatsApp" },
    medicine: { intro: "Medical student at Universidad Nacional de Rosario (Argentina). Publications below." }
  },

  pt: {
    nav: { home: "Início", about: "Sobre", projects: "Projetos", contact: "Contato" },
    hero1: "Conhecimento impulsiona, tecnologia multiplica.",
    hero2: "Educação com propósito, tecnologia humana e um estilo de vida consciente.",
    cta: "Abrir Projetos",
    titles: { projects: "Projetos", about: "Quem sou", areas: "Áreas", contact: "Contatos", cultures: "Culturas que me transformaram", medicine: "Medicina" },
    proj: {
      music:   { title: "Laia Music",   desc: "Preservando e difundindo o legado musical de Edney Fernandes.", btn: "Abrir" },
      mind:    { title: "Laia Mind",    desc: "Yoga, meditação e bem-estar.",                                   btn: "Abrir" },
      academy: { title: "Laia Academy", desc: "Idiomas com foco multicultural e prático.",                       btn: "Abrir" },
      tech:    { title: "Laia Tech",    desc: "Consultoria e soluções digitais centradas no humano.",           btn: "Abrir" }
    },
    about: {
      p1: "Oi! Sou Gabriela Barbosa de Sousa, do Brasil. Falo português, espanhol e pratico inglês.",
      p2: "Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar.",
      p3: "Também sou estudante de medicina, unindo conhecimento acadêmico, impacto social e tecnologia centrada no humano."
    },
    areas: { travel: "Viagens", yoga: "Yoga", music: "Música", languages: "Idiomas", tech: "Tech", medicine: "Medicina" },
    contact: { email: "Email", linkedin: "LinkedIn", instagram: "Instagram", github: "GitHub", whatsapp: "WhatsApp" },
    medicine: { intro: "Estudante de medicina na Universidad Nacional de Rosario (Argentina). Publicações abaixo." }
  },

  es: {
    nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", contact: "Contacto" },
    hero1: "El conocimiento impulsa, la tecnología multiplica.",
    hero2: "Educación con propósito, tecnología humana y un estilo de vida consciente.",
    cta: "Abrir Proyectos",
    titles: { projects: "Proyectos", about: "Quién soy", areas: "Áreas", contact: "Contactos", cultures: "Culturas que me transformaron", medicine: "Medicina" },
    proj: {
      music:   { title: "Laia Music",   desc: "Preservando y difundiendo el legado musical de Edney Fernandes.", btn: "Abrir" },
      mind:    { title: "Laia Mind",    desc: "Yoga, meditación y bienestar.",                                   btn: "Abrir" },
      academy: { title: "Laia Academy", desc: "Idiomas con foco multicultural y práctico.",                      btn: "Abrir" },
      tech:    { title: "Laia Tech",    desc: "Soluciones digitales centradas en el humano.",                    btn: "Abrir" }
    },
    about: {
      p1: "Hola, soy Gabriela Barbosa de Sousa, de Brasil. Hablo portugués, español y practico inglés.",
      p2: "Soy fundadora de Universo Laia, integrando educación, tecnología, música y bienestar.",
      p3: "También soy estudiante de medicina con proyectos de impacto social y tecnología centrada en las personas."
    },
    areas: { travel: "Viajes", yoga: "Yoga", music: "Música", languages: "Idiomas", tech: "Tech", medicine: "Medicina" },
    contact: { email: "Email", linkedin: "LinkedIn", instagram: "Instagram", github: "GitHub", whatsapp: "WhatsApp" },
    medicine: { intro: "Estudiante de medicina en la Universidad Nacional de Rosario (Argentina). Publicaciones abajo." }
  }
};

/*************************************************
 * Helpers I18N
 *************************************************/
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

function getLang(){
  const saved = localStorage.getItem("lang");
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || "en").slice(0,2);
  return I18N[nav] ? nav : "en";
}

function setLang(code){
  if (!I18N[code]) return;
  localStorage.setItem("lang", code);
  applyTranslations(code);
}

function text(el, t){ if (el) el.textContent = t; }

/*************************************************
 * Aplica traduções na página atual
 *************************************************/
function applyTranslations(lang = getLang()){
  const d = I18N[lang];

  // navbar
  text(document.querySelector("#nav-home"),     d.nav.home);
  text(document.querySelector("#nav-about"),    d.nav.about);
  text(document.querySelector("#nav-projects"), d.nav.projects);
  text(document.querySelector("#nav-contact"),  d.nav.contact);

  // Qualquer elemento com data-i18n="path.to.key"
  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const parts = key.split(".");
    let cur = d;
    for (const p of parts){
      if (cur && p in cur) cur = cur[p]; else { cur = null; break; }
    }
    if (typeof cur === "string") el.textContent = cur;
  });

  // Herói (home)
  const h1 = document.getElementById("hero-1");
  const p2 = document.getElementById("hero-2");
  if (h1) h1.textContent = d.hero1;
  if (p2) p2.textContent = d.hero2;
}

/*************************************************
 * Botões de idioma (PT / ES / EN)
 *************************************************/
function initLangButtons(){
  $$("[data-lang]").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
  });
}

/*************************************************
 * Inicialização
 *************************************************/
document.addEventListener("DOMContentLoaded", ()=>{
  const initial = getLang();
  localStorage.setItem("lang", initial);
  applyTranslations(initial);
  initLangButtons();
});