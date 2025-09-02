/* =========== LAIA — app.js (completo) =========== */

/* Utilidades */
const $  = (s, ctx=document) => ctx.querySelector(s);
const $$ = (s, ctx=document) => Array.from(ctx.querySelectorAll(s));

/* Dicionário i18n */
const I18N = {
  pt: {
    brand: "Gabriela Barbosa",
    nav: { home: "Início", about: "Sobre", projects: "Projetos", contact: "Contato" },

    hero: {
      title: "Conhecimento impulsiona, tecnologia multiplica.",
      // RESUMO curto pedido pra Home:
      subtitle: "Sou Gabriela Barbosa, brasileira, estudante de Medicina e apaixonada por aprender. Busco unir saúde, música e tecnologia. Criei o Universo Laia, um espaço para transformar ideias em projetos e compartilhar meus universos com o mundo.",
      cta: "Abrir Projetos"
    },

    about: {
      title: "Quem eu sou",
      // Texto completo pedido para About (use <br>):
      lead:
        "Sou Gabriela Barbosa, brasileira vivendo em Rosario, Argentina. Estudante de Medicina na UNR, consultora em projetos digitais e apaixonada por aprender. Desde criança, sempre fui sonhadora, curiosa e conectada com tecnologia. Falo português e espanhol, estudo inglês e acredito que a comunicação abre portas para o mundo.<br><br>Minha vida é movida por grandes sonhos: ser médica, explorar culturas, criar projetos que unam saúde, música, tecnologia e bem-estar. Gosto de yoga, meditação, música eletrônica, viagens e livros. Amo minha família e acredito que felicidade também está nos pequenos momentos.<br><br>Hoje atuo como consultora no IGA, potencializando projetos de educação. Ao mesmo tempo, desenvolvo o Universo Laia, meu próprio ecossistema criativo, onde reúno tudo o que me move: música, tecnologia, aprendizado de idiomas, saúde e meditação. É o meu espaço para transformar ideias em projetos reais e compartilhar esse caminho com o mundo.",
      areas: "Áreas",
      aTravel: "Viagens", aYoga: "Yoga", aMusic: "Música", aLang: "Idiomas", aTech: "Tech", aMed: "Medicina",
      photoAlt: "Foto de Gabriela"
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
      title: "El conocimiento impulsa, la tecnología multiplica.",
      subtitle: "Soy Gabriela Barbosa, brasileña, estudiante de Medicina y apasionada por aprender. Busco unir salud, música y tecnología. Creé el Universo Laia, un espacio para transformar ideas en proyectos y compartir mis universos con el mundo.",
      cta: "Abrir Proyectos"
    },

    about: {
      title: "Quién soy",
      lead:
        "Soy Gabriela Barbosa, brasileña viviendo en Rosario, Argentina. Estudiante de Medicina en la UNR, consultora en proyectos digitales y apasionada por aprender. Desde niña siempre fui soñadora, curiosa y conectada con la tecnología. Hablo portugués y español, estudio inglés y creo que la comunicación abre puertas al mundo.<br><br>Mi vida está movida por grandes sueños: ser médica, explorar culturas y crear proyectos que unan salud, música, tecnología y bienestar. Me gustan el yoga, la meditación, la música electrónica, los viajes y los libros. Amo a mi familia y creo que la felicidad también está en los pequeños momentos.<br><br>Hoy actúo como consultora en el IGA, potenciando proyectos de educación. Al mismo tiempo, desarrollo el Universo Laia, mi propio ecosistema creativo, donde reúno todo lo que me mueve: música, tecnología, aprendizaje de idiomas, salud y meditación. Es mi espacio para transformar ideas en proyectos reales y compartir ese camino con el mundo.",
      areas: "Áreas",
      aTravel: "Viajes", aYoga: "Yoga", aMusic: "Música", aLang: "Idiomas", aTech: "Tech", aMed: "Medicina",
      photoAlt: "Foto de Gabriela"
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
      title: "Knowledge drives, technology multiplies.",
      subtitle: "I’m Gabriela Barbosa, a Brazilian medical student and lifelong learner. I connect health, music and technology. I created Universo Laia — a space to turn ideas into projects and share my worlds with the world.",
      cta: "Open Projects"
    },

    about: {
      title: "Who I am",
      lead:
        "I am Gabriela Barbosa, a Brazilian living in Rosario, Argentina. Medical student at UNR, digital projects consultant, and passionate lifelong learner. Since childhood I’ve been a dreamer, curious and connected to technology. I speak Portuguese and Spanish, I’m studying English, and I believe communication opens doors to the world.<br><br>My life is driven by big dreams: becoming a doctor, exploring cultures, and creating projects that unite health, music, technology and well-being. I enjoy yoga, meditation, electronic music, travel and books. I love my family and believe happiness also lives in the small moments.<br><br>Today I work as a consultant at IGA, empowering education projects. At the same time, I develop Universo Laia — my own creative ecosystem — where I bring together everything that moves me: music, technology, language learning, health and meditation. It’s my space to turn ideas into real projects and share the journey with the world.",
      areas: "Areas",
      aTravel: "Travel", aYoga: "Yoga", aMusic: "Music", aLang: "Languages", aTech: "Tech", aMed: "Medicine",
      photoAlt: "Gabriela photo"
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

/* Lang helpers */
function getLang() {
  const p = new URLSearchParams(location.search).get('lang');
  if (p && I18N[p]) { localStorage.setItem('lang', p); return p; }
  const saved = localStorage.getItem('lang');
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || 'pt').slice(0,2);
  return I18N[nav] ? nav : 'pt';
}

function setActiveLangButtons(lang){
  $$('.lang-btn, .lang button, .js-lang').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

/* Aplica textos em TODOS elementos com data-i18n */
function applyTranslations(){
  const lang = getLang();
  const pack = I18N[lang] || I18N.pt;

  // elementos com data-i18n (aceita HTML para <br>)
  $$('[data-i18n]').forEach(el=>{
    const path = el.dataset.i18n.split('.');
    let val = pack;
    for (const k of path) val = val?.[k];
    if (typeof val === 'string') el.innerHTML = val;
  });

  // alt traduzível (opcional)
  $$('[data-i18n-alt]').forEach(img=>{
    const path = img.dataset.i18nAlt.split('.');
    let val = pack;
    for (const k of path) val = val?.[k];
    if (typeof val === 'string') img.alt = val;
  });

  // Nav por id (se existir na página)
  const NAV = [
    ['#nav-home','nav.home'], ['#nav-about','nav.about'],
    ['#nav-projects','nav.projects'], ['#nav-contact','nav.contact']
  ];
  NAV.forEach(([sel,key])=>{
    const el = $(sel);
    if (!el) return;
    const [a,b] = key.split('.');
    el.textContent = pack?.[a]?.[b] || el.textContent;
  });

  document.title = pack.brand || document.title;
  setActiveLangButtons(lang);
}

/* Botões de idioma (PT/ES/EN) */
function initLangButtons(){
  $$('.lang-btn, .lang button, .js-lang').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const lang = btn.dataset.lang;
      if (!I18N[lang]) return;
      localStorage.setItem('lang', lang);
      const url = new URL(location.href);
      url.searchParams.set('lang', lang);
      location.href = url.toString(); // recarrega mantendo página
    });
  });
}

/* Ligações dos círculos/áreas e projetos (se existirem na página) */
function wireAreaLinks(){
  const set = (id, href) => { const a = $(id); if (a) a.href = href; };
  // About/Home → áreas
  set('#area-travel',    'cultures.html');
  set('#area-yoga',      'https://laiamind.netlify.app/');
  set('#area-music',     'https://laiamusic.netlify.app/');
  set('#area-languages', 'https://proyectolaia.netlify.app/'); // Laia Academy
  set('#area-tech',      'https://laiatech.netlify.app/');
  set('#area-medicine',  'medicine.html');

  // Projects cards (ids dos botões)
  set('#open-music', 'https://laiamusic.netlify.app/');
  set('#open-mind',  'https://laiamind.netlify.app/');
  set('#open-tech',  'https://laiatech.netlify.app/');
  const a = $('#open-academy'); if (a) a.href = 'https://proyectolaia.netlify.app/';
}

/* Ícones de contato (se existirem na página) */
function wireContactIcons(){
  const set = (sel, href) => { const a = $(sel); if (a) a.href = href; };
  set('#link-email',    'mailto:gabibds@icloud.com');
  set('#link-instagram','https://instagram.com/yogabibds');
  set('#link-github',   'https://github.com/yogabibds');
  // WhatsApp desativado: manter "#" se não quiser exibir número
  set('#link-whatsapp', '#');
}

/* Init */
document.addEventListener('DOMContentLoaded', ()=>{
  initLangButtons();
  applyTranslations();
  wireAreaLinks();
  wireContactIcons();
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
});
/* ==== i18n – ampliar dicionário com as chaves do herói ==== */
window.i18n = window.i18n || {};

/* Mescla chaves sem sobrescrever o que você já tem */
function mergeI18n(extra){ for(const [k,v] of Object.entries(extra)){ i18n[k] = {...(i18n[k]||{}), ...v}; } }

mergeI18n({
  pt:{
    "home.hero.title":"Bem-vinda ao meu universo.",
    "home.hero.lead":"Conhecimento move, tecnologia multiplica — com propósito humano.",
    "home.hero.cta":"Abrir Projetos"
  },
  es:{
    "home.hero.title":"Bienvenida a mi universo.",
    "home.hero.lead":"El conocimiento impulsa, la tecnología multiplica — con propósito humano.",
    "home.hero.cta":"Abrir Proyectos"
  },
  en:{
    "home.hero.title":"Welcome to my universe.",
    "home.hero.lead":"Knowledge drives, technology multiplies — with human purpose.",
    "home.hero.cta":"Open Projects"
  }
});

/* Frases rotativas por idioma */
const rotatingPhrases = {
  pt: [
    "Aprender é meu superpoder.",
    "Saúde, música e tecnologia — o meu trio.",
    "Respira. Cria. Compartilha."
  ],
  es: [
    "Aprender es mi superpoder.",
    "Salud, música y tecnología — mi trío.",
    "Respira. Crea. Comparte."
  ],
  en: [
    "Learning is my superpower.",
    "Health, music and technology — my trio.",
    "Breathe. Create. Share."
  ],
};

/* Atualiza texto por data-i18n (respeita seu sistema atual) */
function applyI18n(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });
}

/* Integra com seus botões de idioma (PT/ES/EN) */
(function hookLang(){
  const buttons = document.querySelectorAll("[data-lang]");
  if(!buttons.length) return;
  buttons.forEach(b=>{
    b.addEventListener("click", ()=>{
      const lang = b.getAttribute("data-lang");
      localStorage.setItem("lang", lang);
      applyI18n(lang);
      startRotator(lang);
    });
  });
  const initial = localStorage.getItem("lang") || "pt";
  applyI18n(initial);
  startRotator(initial);
})();

/* Rotator de frases na Home */
let rotTimer=null, idx=0;
function startRotator(lang){
  const box = document.getElementById("hero-rotator");
  if(!box) return;
  idx = 0;
  box.textContent = rotatingPhrases[lang][idx];
  if(rotTimer) clearInterval(rotTimer);
  rotTimer = setInterval(()=>{
    idx = (idx+1) % rotatingPhrases[lang].length;
    box.classList.add("fadeout");
    setTimeout(()=>{
      box.textContent = rotatingPhrases[lang][idx];
      box.classList.remove("fadeout");
    }, 180);
  }, 3800);
}

/* micro fade (não precisa CSS extra, mas usa a classe) */
const css = document.createElement('style');
css.textContent = `
#hero-rotator{transition:opacity .18s ease}
#hero-rotator.fadeout{opacity:.08}
`;
document.head.appendChild(css);
