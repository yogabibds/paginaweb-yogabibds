(function () {
  const KEY = 'laia_lang';

  const dict = {
    en: {
      brand: 'Gabriela Barbosa',
      'nav.home':'Home','nav.about':'About','nav.projects':'Projects','nav.contact':'Contact',
      'home.h1':'Knowledge drives, technology multiplies.',
      'home.sub':'Purpose-driven education, human technology and a conscious lifestyle.',
      'home.cta':'Open Projects',
      'about.title':'Who I am','about.areas':'Areas',
      'about.bio':"Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English. I'm the founder of Universo Laia, integrating education, technology, music and well-being.",
      'areas.travel':'Travel','areas.yoga':'Yoga','areas.music':'Music','areas.langs':'Languages','areas.tech':'Tech','areas.medicine':'Medicine',
      'projects.title':'Projects','projects.open':'Open Projects',
      'projects.music.desc':'Preserving and spreading Edney Fernandes’ musical legacy.',
      'projects.mind.desc':'Yoga, meditation and well-being.',
      'projects.academy.desc':'Languages with a multicultural, practical focus.',
      'projects.tech.desc':'Human-centered digital consulting and solutions.',
      'contact.title':'Contacts','contact.note':'Reach me here:'
    },
    pt: {
      brand: 'Gabriela Barbosa',
      'nav.home':'Home','nav.about':'Sobre','nav.projects':'Projetos','nav.contact':'Contato',
      'home.h1':'Conhecimento move, tecnologia multiplica.',
      'home.sub':'Educação com propósito, tecnologia humana e um estilo de vida consciente.',
      'home.cta':'Ver Projetos',
      'about.title':'Quem eu sou','about.areas':'Áreas',
      'about.bio':'Oi, sou Gabriela Barbosa de Sousa, do Brasil. Falo português, espanhol e estou praticando inglês. Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar.',
      'areas.travel':'Viagens','areas.yoga':'Yoga','areas.music':'Música','areas.langs':'Idiomas','areas.tech':'Tech','areas.medicine':'Medicina',
      'projects.title':'Projetos','projects.open':'Abrir',
      'projects.music.desc':'Preservando e difundindo o legado musical de Edney Fernandes.',
      'projects.mind.desc':'Yoga, meditação e bem-estar.',
      'projects.academy.desc':'Idiomas com foco multicultural e prático.',
      'projects.tech.desc':'Consultoria e soluções digitais centradas no humano.',
      'contact.title':'Contatos','contact.note':'Fale comigo por aqui:'
    },
    es: {
      brand: 'Gabriela Barbosa',
      'nav.home':'Inicio','nav.about':'Sobre mí','nav.projects':'Mis proyectos','nav.contact':'Contacto',
      'home.h1':'El conocimiento impulsa, la tecnología multiplica.',
      'home.sub':'Educación con propósito, tecnología humana y un estilo de vida consciente.',
      'home.cta':'Ver proyectos',
      'about.title':'Quién soy','about.areas':'Áreas',
      'about.bio':'Soy Gabriela Barbosa de Sousa, brasileña. Hablo portugués y español y practico inglés. Soy fundadora de Universo Laia, integrando educación, tecnología, música y bienestar.',
      'areas.travel':'Viajes','areas.yoga':'Yoga','areas.music':'Música','areas.langs':'Idiomas','areas.tech':'Tech','areas.medicine':'Medicina',
      'projects.title':'Proyectos','projects.open':'Abrir',
      'projects.music.desc':'Preservando y difundiendo el legado musical de Edney Fernandes.',
      'projects.mind.desc':'Yoga, meditación y bienestar.',
      'projects.academy.desc':'Idiomas con enfoque multicultural y práctico.',
      'projects.tech.desc':'Consultoría y soluciones digitales centradas en lo humano.',
      'contact.title':'Contactos','contact.note':'Hablamos por aquí:'
    }
  };

  function detectLang() {
    const saved = localStorage.getItem(KEY);
    if (saved && dict[saved]) return saved;
    const nav = (navigator.language || 'en').slice(0,2);
    return dict[nav] ? nav : 'en';
  }

  function setLang(lang) {
    const pack = dict[lang] || dict.en;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (pack[key]) el.textContent = pack[key];
    });
    // manter seleção visual nos botões
    document.querySelectorAll('.lang button').forEach(b=>{
      b.classList.toggle('active', b.dataset.lang===lang);
    });
    localStorage.setItem(KEY, lang);
  }

  function initLangButtons() {
    document.querySelectorAll('.lang button').forEach(b=>{
      b.addEventListener('click', ()=>{
        setLang(b.dataset.lang);
      });
    });
  }

  // start
  document.addEventListener('DOMContentLoaded', ()=>{
    initLangButtons();
    setLang(detectLang());
  });
})();