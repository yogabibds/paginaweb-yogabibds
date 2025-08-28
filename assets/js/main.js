// Recupera idioma salvo (default: pt)
const getLang = () => localStorage.getItem('lang') || 'pt';
const setLang = (l) => localStorage.setItem('lang', l);

// Dicionário de traduções
const I18N = {
  pt: {
    'nav.home': 'Home',
    'nav.about': 'Sobre mim',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    'hero.h1': 'Conhecimento move, tecnologia multiplica.',
    'hero.h2': 'Educação com propósito, tecnologia humana e estilo de vida consciente.',
    'hero.cta': 'Abrir projetos',

    'projects.title': 'Projetos',
    'projects.music.title': 'Laia Music',
    'projects.music.desc': 'Preservando e difundindo o legado musical de Edney Fernandes.',
    'projects.mind.title': 'Laia Mind',
    'projects.mind.desc': 'Yoga, meditação e bem-estar.',
    'projects.acad.title': 'Laia Academy',
    'projects.acad.desc': 'Idiomas com foco multicultural e prático.',
    'projects.tech.title': 'Laia Tech',
    'projects.tech.desc': 'Consultoria e soluções digitais centradas no humano.',

    'contact.title': 'Contatos',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    'hero.h1': 'El conocimiento impulsa, la tecnología multiplica.',
    'hero.h2': 'Educación con propósito, tecnología humana y un estilo de vida consciente.',
    'hero.cta': 'Abrir proyectos',

    'projects.title': 'Proyectos',
    'projects.music.title': 'Laia Music',
    'projects.music.desc': 'Preservando y difundiendo el legado musical de Edney Fernandes.',
    'projects.mind.title': 'Laia Mind',
    'projects.mind.desc': 'Yoga, meditación y bienestar.',
    'projects.acad.title': 'Laia Academy',
    'projects.acad.desc': 'Idiomas con enfoque multicultural y práctico.',
    'projects.tech.title': 'Laia Tech',
    'projects.tech.desc': 'Consultoría e innovación digital centrada en lo humano.',

    'contact.title': 'Contactos',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'hero.h1': 'Knowledge drives, technology multiplies.',
    'hero.h2': 'Purpose-driven education, human technology and a conscious lifestyle.',
    'hero.cta': 'Open Projects',

    'projects.title': 'Projects',
    'projects.music.title': 'Laia Music',
    'projects.music.desc': "Preserving and sharing Edney Fernandes' musical legacy.",
    'projects.mind.title': 'Laia Mind',
    'projects.mind.desc': 'Yoga, meditation and well-being.',
    'projects.acad.title': 'Laia Academy',
    'projects.acad.desc': 'Languages with a multicultural, practical focus.',
    'projects.tech.title': 'Laia Tech',
    'projects.tech.desc': 'Human-centered digital consulting and solutions.',

    'contact.title': 'Contacts',
  }
};

// Aplica traduções a elementos com data-i18n="chave"
function applyTranslations() {
  const lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = I18N[lang] && I18N[lang][key];
    if (txt) el.textContent = txt;
  });
}

// Ajusta labels do menu
function applyNavLabels() {
  const L = I18N[getLang()];
  const ids = {
    'nav-home': 'nav.home',
    'nav-about': 'nav.about',
    'nav-projects': 'nav.projects',
    'nav-contact': 'nav.contact'
  };
  Object.entries(ids).forEach(([id, key]) => {
    const a = document.getElementById(id);
    if (a && L[key]) a.textContent = L[key];
  });
}

// Inicializa botões de idioma
function initLangButtons() {
  document.querySelectorAll('.lang [data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      setLang(btn.dataset.lang);
      applyTranslations();
      applyNavLabels();
    });
  });
}

// Inicialização ao carregar
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  applyNavLabels();
  initLangButtons();
});