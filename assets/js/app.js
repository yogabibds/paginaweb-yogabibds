/* =========== LAIA — app.js (completo e unificado) =========== */

/* Utilidades */
const $  = (s, ctx=document) => ctx.querySelector(s);
const $$ = (s, ctx=document) => Array.from(ctx.querySelectorAll(s));

/* Dicionário i18n */
const I18N = {
  pt: {
    brand: "Gabriela Barbosa",
    nav: { home: "Início", about: "Sobre", projects: "Projetos", contact: "Contato" },

    hero: {
      title: "Bem-vinda ao meu universo.",
      lead: "Conhecimento move, tecnologia multiplica — com propósito humano.",
      subtitle: "Sou Gabriela Barbosa, brasileira, estudante de Medicina e apaixonada por aprender. Busco unir saúde, música e tecnologia. Criei o Universo Laia, um espaço para transformar ideias em projetos e compartilhar meus universos com o mundo.",
      cta: "Abrir Projetos",
      phrases: [
        "Aprender é meu superpoder.",
        "Saúde, música e tecnologia — o meu trio.",
        "Respira. Cria. Compartilha."
      ]
    },

    about: {
      title: "Quem eu sou",
      photoAlt: "Foto de Gabriela",
      p1: "Sou Gabriela Barbosa, brasileira vivendo em Rosario, Argentina. Estudante de Medicina na UNR, consultora em projetos digitais e apaixonada por aprender. Desde criança, sempre fui sonhadora, curiosa e conectada com tecnologia. Falo português e espanhol, estudo inglês e acredito que a comunicação abre portas para o mundo.",
      p2: "Minha vida é movida por grandes sonhos: ser médica, explorar culturas, criar projetos que unam saúde, música, tecnologia e bem-estar. Gosto de yoga, meditação, música eletrônica, viagens e livros. Amo minha família e acredito que felicidade também está nos pequenos momentos.",
      p3: "Hoje atuo como consultora no IGA, potencializando projetos de educação. Ao mesmo tempo, desenvolvo o Universo Laia, meu próprio ecossistema criativo, onde reúno tudo o que me move: música, tecnologia, aprendizado de idiomas, saúde e meditação. É o meu espaço para transformar ideias em projetos reais e compartilhar esse caminho com o mundo.",
      areas: "Áreas",
      aTravel: "Viagens", aYoga: "Yoga", aMusic: "Música", aLang: "Idiomas", aTech: "Tech", aMed: "Medicina"
    },

    projects: {
      title: "Projetos",
      musicDesc: "Preservando e difundindo o legado musical de Edney Fernandes.",
      mindDesc:  "Yoga, meditação e bem-estar.",
      academyDesc:"Idiomas com foco multicultural e prático.",
      techDesc:  "Consultoria e soluções digitais centradas no humano.",
      open: "Abrir"
    },

    contact: {
      title: "Contatos",
      note: "Fale comigo por aqui:",
      email: "Email", instagram: "Instagram", github: "GitHub", whatsapp: "WhatsApp"
    },

    cultures: {
      title: "Culturas que me transformaram",
      subtitle: "Onde vivo e estudo — histórias e momentos que me moldaram."
    }
  },

  es: {
    brand: "Gabi Barbosa",
    nav: { home: "Inicio", about: "Sobre mí", projects: "Mis proyectos", contact: "Contacto" },

    hero: {
      title: "Bienvenida a mi universo.",
      lead: "El conocimiento impulsa, la tecnología multiplica — con propósito humano.",
      subtitle: "Soy Gabriela Barbosa, brasileña, estudiante de Medicina y apasionada por aprender. Busco unir salud, música y tecnología. Creé el Universo Laia, un espacio para transformar ideas en proyectos y compartir mis universos con el mundo.",
      cta: "Abrir Proyectos",
      phrases: [
        "Aprender es mi superpoder.",
        "Salud, música y tecnología — mi trío.",
        "Respira. Crea. Comparte."
      ]
    },

    about: {
      title: "Quién soy",
      photoAlt: "Foto de Gabriela",
      p1: "Soy Gabriela Barbosa, brasileña viviendo en Rosario, Argentina. Estudiante de Medicina en la UNR, consultora en proyectos digitales y apasionada por aprender...",
      p2: "Mi vida está movida por grandes sueños: ser médica, explorar culturas y crear proyectos que unan salud, música, tecnología y bienestar...",
      p3: "Hoy actúo como consultora en el IGA... desarrollo el Universo Laia...",
      areas: "Áreas",
      aTravel: "Viajes", aYoga: "Yoga", aMusic: "Música", aLang: "Idiomas", aTech: "Tech", aMed: "Medicina"
    },

    projects: {
      title: "Mis proyectos",
      musicDesc: "Preservando y difundiendo el legado musical de Edney Fernandes.",
      mindDesc:  "Yoga, meditación y bienestar.",
      academyDesc:"Idiomas con enfoque multicultural y práctico.",
      techDesc:  "Consultoría y soluciones digitales centradas en lo humano.",
      open: "Abrir"
    },

    contact: {
      title: "Contacto",
      note: "Hablemos por aquí:",
      email: "Email", instagram: "Instagram", github: "GitHub", whatsapp: "WhatsApp"
    },

    cultures: {
      title: "Culturas que me transformaron",
      subtitle: "Dónde vivo y estudio — historias y momentos que me formaron."
    }
  },

  en: {
    brand: "Gabriela Barbosa",
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },

    hero: {
      title: "Welcome to my universe.",
      lead: "Knowledge drives, technology multiplies — with human purpose.",
      subtitle: "I’m Gabriela Barbosa, a Brazilian medical student and lifelong learner...",
      cta: "Open Projects",
      phrases: [
        "Learning is my superpower.",
        "Health, music and technology — my trio.",
        "Breathe. Create. Share."
      ]
    },

    about: {
      title: "Who I am",
      photoAlt: "Gabriela photo",
      p1: "I am Gabriela Barbosa, a Brazilian living in Rosario, Argentina...",
      p2: "My life is driven by big dreams: becoming a doctor, exploring cultures...",
      p3: "Today I work as a consultant at IGA, developing Universo Laia...",
      areas: "Areas",
      aTravel: "Travel", aYoga: "Yoga", aMusic: "Music", aLang: "Languages", aTech: "Tech", aMed: "Medicine"
    },

    projects: {
      title: "Projects",
      musicDesc: "Preserving and spreading Edney Fernandes’ musical legacy.",
      mindDesc:  "Yoga, meditation and well-being.",
      academyDesc:"Languages with multicultural, practical focus.",
      techDesc:  "Human-centered digital consulting and solutions.",
      open: "Open"
    },

    contact: {
      title: "Contacts",
      note: "Reach me here:",
      email: "Email", instagram: "Instagram", github: "GitHub", whatsapp: "WhatsApp"
    },

    cultures: {
      title: "Cultures that transformed me",
      subtitle: "Where I live and study — stories and moments that shaped me."
    }
  }
};

/* Helpers de idioma */
function getLang() {
  const p = new URLSearchParams(location.search).get('lang');
  if (p && I18N[p]) { localStorage.setItem('lang', p); return p; }
  const saved = localStorage.getItem('lang');
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || 'pt').slice(0,2);
  return I18N[nav] ? nav : 'pt';
}
function setActiveLangButtons(lang){
  $$('.lang button').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

/* Aplica textos */
function applyTranslations(){
  const lang = getLang();
  const pack = I18N[lang] || I18N.pt;

  $$('[data-i18n]').forEach(el=>{
    const path = el.dataset.i18n.split('.');
    let val = pack;
    for (const k of path) val = val?.[k];
    if (typeof val === 'string') el.innerHTML = val;
  });
  $$('[data-i18n-alt]').forEach(img=>{
    const path = img.dataset.i18nAlt.split('.');
    let val = pack;
    for (const k of path) val = val?.[k];
    if (typeof val === 'string') img.alt = val;
  });
  document.title = pack.brand || document.title;
  setActiveLangButtons(lang);
}

/* Botões */
function initLangButtons(){
  $$('.lang button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const lang = btn.dataset.lang;
      if (!I18N[lang]) return;
      localStorage.setItem('lang', lang);
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      location.href = url.toString();
    });
  });
}

/* Links */
function wireAreaLinks(){
  const set = (id, href) => { const a = $(id); if (a) a.href = href; };
  set('#area-travel',    'cultures.html');
  set('#area-yoga',      'https://laiamind.netlify.app/');
  set('#area-music',     'https://laiamusictesting.netlify.app/');
  set('#area-languages', 'https://proyectolaia.netlify.app/');
  set('#area-tech',      'https://laiatech.netlify.app/');
  set('#area-medicine',  'medicine.html');
}
function wireProjectLinks(){
  const set = (id, href) => { const a = $(id); if (a) a.href = href; };
  set('#open-music', 'https://laiamusictesting.netlify.app/');
  set('#open-mind',  'https://laiamind.netlify.app/');
  set('#open-tech',  'https://laiatech.netlify.app/');
  set('#open-academy', 'https://proyectolaia.netlify.app/');
}
function wireContactIcons(){
  const set = (sel, href) => { const a = $(sel); if (a) a.href = href; };
  set('#link-email',    'mailto:gabibds@icloud.com');
  set('#link-instagram','https://instagram.com/yogabibds');
  set('#link-github',   'https://github.com/yogabibds');
  set('#link-whatsapp', '#');
}

/* Rotator de frases do hero */
let rotTimer=null, idx=0;
function startRotator(lang){
  const box = $('#hero-rotator');
  if(!box) return;
  idx = 0;
  box.textContent = I18N[lang].hero.phrases[0];
  if(rotTimer) clearInterval(rotTimer);
  rotTimer = setInterval(()=>{
    idx = (idx+1) % I18N[lang].hero.phrases.length;
    box.classList.add("fadeout");
    setTimeout(()=>{
      box.textContent = I18N[lang].hero.phrases[idx];
      box.classList.remove("fadeout");
    }, 180);
  }, 3800);
}

/* Init */
document.addEventListener('DOMContentLoaded', ()=>{
  const lang = getLang();
  initLangButtons();
  applyTranslations();
  wireAreaLinks();
  wireProjectLinks();
  wireContactIcons();
  startRotator(lang);
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
});

/* Efeito de fade nas frases */
const css = document.createElement('style');
css.textContent = `
#hero-rotator{transition:opacity .18s ease}
#hero-rotator.fadeout{opacity:.08}
`;
document.head.appendChild(css);