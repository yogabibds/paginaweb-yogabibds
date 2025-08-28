// ===== Multilíngue simples (PT / ES / EN) =====
const I18N = {
  en: {
    "title.home":"Home — Universo Laia","title.about":"About — Universo Laia","title.projects":"Projects — Universo Laia","title.contact":"Contact — Universo Laia","title.cultures":"Cultures — Universo Laia","title.medicine":"Medicine — Universo Laia",
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "hero.title":"Knowledge drives, technology multiplies.",
    "hero.subtitle":"Purpose-driven education, human technology and a conscious lifestyle.",
    "cta.open":"Open Projects",
    "about.who.title":"Who I am",
    "about.who.p1":"Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English.",
    "about.who.p2":"I'm the founder of Universo Laia, integrating education, technology, music and well-being. I love yoga, meditation, innovation and education.",
    "about.who.p3":"I'm also a medical student developing projects that blend academic knowledge, social impact and human-centered tech.",
    "about.areas.title":"Areas",
    "areas.travel":"Travel","areas.yoga":"Yoga","areas.music":"Music","areas.languages":"Languages","areas.tech":"Tech","areas.medicine":"Medicine",
    "projects.title":"Projects",
    "projects.music.title":"Laia Music","projects.music.desc":"Preserving Edney Fernandes' musical legacy.",
    "projects.mind.title":"Laia Mind","projects.mind.desc":"Yoga, meditation and well-being.",
    "projects.academy.title":"Laia Academy","projects.academy.desc":"Languages with multicultural, practical focus.",
    "projects.tech.title":"Laia Tech","projects.tech.desc":"Human-centered digital solutions and consulting.",
    "contact.title":"Contacts","contact.note":"Reach me here:",
    "cultures.title":"Cultures that transformed me","cultures.arg.desc":"Where I live and study — stories and moments that shaped me.",
    "med.title":"Medicine","med.p1":"Medical student at Universidad Nacional de Rosario (UNR), Rosario — Argentina.","med.unr.highlight":"UNR highlight","med.pubtitle":"Scientific publications (DOI)"
  },
  pt: {
    "title.home":"Início — Universo Laia","title.about":"Sobre — Universo Laia","title.projects":"Projetos — Universo Laia","title.contact":"Contato — Universo Laia","title.cultures":"Culturas — Universo Laia","title.medicine":"Medicina — Universo Laia",
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "hero.title":"Conhecimento impulsiona, tecnologia multiplica.",
    "hero.subtitle":"Educação com propósito, tecnologia humana e um estilo de vida consciente.",
    "cta.open":"Abrir projetos",
    "about.who.title":"Quem sou",
    "about.who.p1":"Oi, sou Gabriela Barbosa de Sousa, do Brasil. Falo português, espanhol e estou praticando inglês.",
    "about.who.p2":"Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar. Amo yoga, meditação, inovação e educação.",
    "about.who.p3":"Também sou estudante de medicina desenvolvendo projetos que unem ciência, impacto social e tecnologia centrada no humano.",
    "about.areas.title":"Áreas",
    "areas.travel":"Viagens","areas.yoga":"Yoga","areas.music":"Música","areas.languages":"Idiomas","areas.tech":"Tech","areas.medicine":"Medicina",
    "projects.title":"Projetos",
    "projects.music.title":"Laia Music","projects.music.desc":"Preservando o legado musical de Edney Fernandes.",
    "projects.mind.title":"Laia Mind","projects.mind.desc":"Yoga, meditação e bem-estar.",
    "projects.academy.title":"Laia Academy","projects.academy.desc":"Idiomas com foco multicultural e prático.",
    "projects.tech.title":"Laia Tech","projects.tech.desc":"Consultoria e soluções digitais centradas no humano.",
    "contact.title":"Contatos","contact.note":"Fale comigo por aqui:",
    "cultures.title":"Culturas que me transformaram","cultures.arg.desc":"Onde vivo e estudo — histórias e momentos que me moldaram.",
    "med.title":"Medicina","med.p1":"Estudante de medicina na Universidad Nacional de Rosario (UNR), Rosario — Argentina.","med.unr.highlight":"Destaque da UNR","med.pubtitle":"Publicações científicas (DOI)"
  },
  es: {
    "title.home":"Inicio — Universo Laia","title.about":"Acerca — Universo Laia","title.projects":"Proyectos — Universo Laia","title.contact":"Contacto — Universo Laia","title.cultures":"Culturas — Universo Laia","title.medicine":"Medicina — Universo Laia",
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "hero.title":"El conocimiento impulsa, la tecnología multiplica.",
    "hero.subtitle":"Educación con propósito, tecnología humana y un estilo de vida consciente.",
    "cta.open":"Abrir proyectos",
    "about.who.title":"Quién soy",
    "about.who.p1":"Hola, soy Gabriela Barbosa de Sousa, de Brasil. Hablo portugués, español y practico inglés.",
    "about.who.p2":"Soy fundadora de Universo Laia, integrando educación, tecnología, música y bienestar. Amo el yoga, la meditación, la innovación y la educación.",
    "about.who.p3":"También soy estudiante de medicina desarrollando proyectos que combinan ciencia, impacto social y tecnología centrada en las personas.",
    "about.areas.title":"Áreas",
    "areas.travel":"Viajes","areas.yoga":"Yoga","areas.music":"Música","areas.languages":"Idiomas","areas.tech":"Tech","areas.medicine":"Medicina",
    "projects.title":"Proyectos",
    "projects.music.title":"Laia Music","projects.music.desc":"Preservando el legado musical de Edney Fernandes.",
    "projects.mind.title":"Laia Mind","projects.mind.desc":"Yoga, meditación y bienestar.",
    "projects.academy.title":"Laia Academy","projects.academy.desc":"Idiomas con enfoque multicultural y práctico.",
    "projects.tech.title":"Laia Tech","projects.tech.desc":"Soluciones y consultoría digital centradas en el humano.",
    "contact.title":"Contactos","contact.note":"Contáctame por aquí:",
    "cultures.title":"Culturas que me transformaron","cultures.arg.desc":"Donde vivo y estudio — historias y momentos que me formaron.",
    "med.title":"Medicina","med.p1":"Estudiante de medicina en la Universidad Nacional de Rosario (UNR), Rosario — Argentina.","med.unr.highlight":"Destacado UNR","med.pubtitle":"Publicaciones científicas (DOI)"
  }
};

function getInitialLang(){
  const saved = localStorage.getItem('lang');
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language||'en').slice(0,2);
  if (I18N[nav]) return nav;
  return 'en';
}

function applyTranslations(){
  const lang = getInitialLang();
  document.documentElement.lang = lang;
  const dict = I18N[lang] || I18N.en;

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  // atualiza <title> se estiver com data-i18n
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl){
    const k = titleEl.getAttribute('data-i18n');
    if (dict[k]) titleEl.textContent = dict[k];
  }
}

function initLangButtons(){
  document.querySelectorAll('.lang [data-lang]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const code = btn.getAttribute('data-lang');
      if (!I18N[code]) return;
      localStorage.setItem('lang', code);
      applyTranslations();
    });
  });
}

function setActiveNav(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const map = {
    'index.html':'nav-home',
    'about.html':'nav-about',
    'projects.html':'nav-projects',
    'contact.html':'nav-contact',
    'cultures.html':'nav-about',
    'medicine.html':'nav-about'
  };
  const id = map[path];
  if (id){
    document.querySelectorAll('.menu a').forEach(a=>a.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) el.classList.add('active');
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', ()=>{
  // Se usuário já escolheu, mantém; senão, salva detecção inicial
  if (!localStorage.getItem('lang')) localStorage.setItem('lang', getInitialLang());
  applyTranslations();
  initLangButtons();
  setActiveNav();
});
