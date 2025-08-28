/* ==========================
   i18n simples — Universo Laia
   ========================== */

const I18N = {
  en: {
    nav: {home:"Home", about:"About", projects:"Projects", contact:"Contact"},
    hero1: "Knowledge drives, technology multiplies.",
    hero2: "Purpose-driven education, human technology and a conscious lifestyle.",
    ctaOpen: "Open Projects",

    // About
    aboutTitle: "Who I am",
    aboutP1: "Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English.",
    aboutP2: "I'm the founder of Universo Laia, integrating education, technology, music and well-being. I love yoga, meditation, innovation and education.",
    aboutP3: "I'm also a medical student developing projects that blend academic knowledge, social impact and human-centered tech.",
    culturesTitle: "Cultures that transformed me",

    // Projects page
    projectsTitle: "Projects",
    projMusicTitle: "Laia Music",
    projMusicDesc: "Preserving and spreading Edney Fernandes' musical legacy.",
    projMindTitle: "Laia Mind",
    projMindDesc: "Yoga, meditation and well-being.",
    projAcadTitle: "Laia Academy",
    projAcadDesc: "Languages with a multicultural, practical focus.",
    projTechTitle: "Laia Tech",
    projTechDesc: "Human-centered consulting and digital solutions.",

    // Contact
    contactsTitle: "Contacts",
    reachMe: "Reach me here:",
    email: "Email",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    github: "GitHub",
    whatsapp: "WhatsApp"
  },

  pt: {
    nav: {home:"Home", about:"Sobre", projects:"Projetos", contact:"Contato"},
    hero1: "Conhecimento move, tecnologia multiplica.",
    hero2: "Educação com propósito, tecnologia humana e um estilo de vida consciente.",
    ctaOpen: "Abrir projetos",

    aboutTitle: "Quem sou eu",
    aboutP1: "Oi! Sou Gabriela Barbosa de Sousa, do Brasil. Falo Português, Espanhol e estou praticando Inglês.",
    aboutP2: "Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar. Amo yoga, meditação, inovação e educação.",
    aboutP3: "Também sou estudante de medicina desenvolvendo projetos que unem conhecimento acadêmico, impacto social e tecnologia centrada no humano.",
    culturesTitle: "Culturas que me transformaram",

    projectsTitle: "Projetos",
    projMusicTitle: "Laia Music",
    projMusicDesc: "Preservando e difundindo o legado musical de Edney Fernandes.",
    projMindTitle: "Laia Mind",
    projMindDesc: "Yoga, meditação e bem-estar.",
    projAcadTitle: "Laia Academy",
    projAcadDesc: "Idiomas com foco multicultural e prático.",
    projTechTitle: "Laia Tech",
    projTechDesc: "Consultoria e soluções digitais centradas no humano.",

    contactsTitle: "Contatos",
    reachMe: "Fale comigo por aqui:",
    email: "Email",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    github: "GitHub",
    whatsapp: "WhatsApp"
  },

  es: {
    nav: {home:"Home", about:"Sobre mí", projects:"Proyectos", contact:"Contacto"},
    hero1: "El conocimiento impulsa, la tecnología multiplica.",
    hero2: "Educación con propósito, tecnología humana y un estilo de vida consciente.",
    ctaOpen: "Abrir proyectos",

    aboutTitle: "Quién soy",
    aboutP1: "Hola, soy Gabriela Barbosa de Sousa, de Brasil. Hablo portugués, español y practico inglés.",
    aboutP2: "Soy fundadora de Universo Laia, integrando educación, tecnología, música y bienestar. Amo el yoga, la meditación, la innovación y la educación.",
    aboutP3: "También soy estudiante de medicina y desarrollo proyectos que combinan conocimiento académico, impacto social y tecnología centrada en las personas.",
    culturesTitle: "Culturas que me transformaron",

    projectsTitle: "Proyectos",
    projMusicTitle: "Laia Music",
    projMusicDesc: "Preservando y difundiendo el legado musical de Edney Fernandes.",
    projMindTitle: "Laia Mind",
    projMindDesc: "Yoga, meditación y bienestar.",
    projAcadTitle: "Laia Academy",
    projAcadDesc: "Idiomas con enfoque multicultural y práctico.",
    projTechTitle: "Laia Tech",
    projTechDesc: "Consultoría y soluciones digitales centradas en el humano.",

    contactsTitle: "Contactos",
    reachMe: "Contáctame por aquí:",
    email: "Email",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    github: "GitHub",
    whatsapp: "WhatsApp"
  }
};

// --- util
function getLang(){
  const saved = localStorage.getItem('lang');
  if (saved && I18N[saved]) return saved;
  return 'en';
}
function setLang(l){ localStorage.setItem('lang', l); }

// Aplica rótulos do menu (presentes em todas as páginas)
function applyNavLabels(){
  const l = getLang();
  const t = I18N[l].nav;
  const map = {
    'nav-home': t.home,
    'nav-about': t.about,
    'nav-projects': t.projects,
    'nav-contact': t.contact
  };
  Object.entries(map).forEach(([id, text])=>{
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });

  // destaca o botão ativo
  document.querySelectorAll('.lang button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === l);
  });
}

// Aplica traduções por IDs (cada página só traduz o que existir)
function applyTranslations(){
  const l = getLang();
  const tt = I18N[l];

  const map = {
    // Home
    'hero-1': tt.hero1,
    'hero-2': tt.hero2,
    'cta-open-hero': tt.ctaOpen,

    // About
    'about-title': tt.aboutTitle,
    'about-p1': tt.aboutP1,
    'about-p2': tt.aboutP2,
    'about-p3': tt.aboutP3,
    'cultures-title': tt.culturesTitle,

    // Projects
    'projects-title': tt.projectsTitle,
    'proj-music-title': tt.projMusicTitle,
    'proj-music-desc': tt.projMusicDesc,
    'proj-mind-title': tt.projMindTitle,
    'proj-mind-desc': tt.projMindDesc,
    'proj-acad-title': tt.projAcadTitle,
    'proj-acad-desc': tt.projAcadDesc,
    'proj-tech-title': tt.projTechTitle,
    'proj-tech-desc': tt.projTechDesc,

    'cta-open-1': tt.ctaOpen,
    'cta-open-2': tt.ctaOpen,
    'cta-open-3': tt.ctaOpen,
    'cta-open-4': tt.ctaOpen,

    // Contact
    'contacts-title': tt.contactsTitle,
    'reach-me': tt.reachMe,
    'lbl-email': tt.email,
    'lbl-instagram': tt.instagram,
    'lbl-linkedin': tt.linkedin,
    'lbl-github': tt.github,
    'lbl-whatsapp': tt.whatsapp
  };

  Object.entries(map).forEach(([id, text])=>{
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
}

// Botões PT/ES/EN
function initLangButtons(){
  document.querySelectorAll('.lang button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const lang = btn.dataset.lang;
      if (!I18N[lang]) return;
      setLang(lang);
      applyNavLabels();
      applyTranslations();
    });
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', ()=>{
  applyNavLabels();
  applyTranslations();
  initLangButtons();
});