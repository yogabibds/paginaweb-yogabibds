// Recupera idioma salvo (default: pt)
const getLang = () => localStorage.getItem('lang') || 'pt';
const setLang = (l) => localStorage.setItem('lang', l);

// Dicionário de traduções
const I18N = {
  pt: {
    'nav.home':'Home','nav.about':'Sobre mim','nav.projects':'Projetos','nav.contact':'Contato',
    'hero.h1':'Conhecimento move, tecnologia multiplica.',
    'hero.h2':'Educação com propósito, tecnologia humana e estilo de vida consciente.',
    'hero.cta':'Abrir projetos',

    'about.title':'Quem sou eu',
    'about.p1':'Oi, sou Gabriela Barbosa de Sousa, do Brasil. Falo português, espanhol e estou praticando inglês.',
    'about.p2':'Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar.',
    'about.p3':'Também sou estudante de medicina desenvolvendo projetos que unem conhecimento acadêmico, impacto social e tecnologia centrada no humano.',
    'about.areas':'Sobre mim — áreas',
    'about.areas.travel':'Viagens','about.areas.yoga':'Yoga','about.areas.music':'Música',
    'about.areas.languages':'Idiomas','about.areas.tech':'Tech','about.areas.medicine':'Medicina',

    'projects.title':'Projetos',
    'projects.music.title':'Laia Music',
    'projects.music.desc':'Preservando e difundindo o legado musical de Edney Fernandes.',
    'projects.mind.title':'Laia Mind',
    'projects.mind.desc':'Yoga, meditação e bem-estar.',
    'projects.acad.title':'Laia Academy',
    'projects.acad.desc':'Idiomas com foco multicultural e prático.',
    'projects.tech.title':'Laia Tech',
    'projects.tech.desc':'Consultoria e soluções digitais centradas no humano.',
    'projects.open':'Abrir',

    'contact.title':'Contatos',
    'contact.note':'Fale comigo por aqui:',
    'contact.email':'Email','contact.linkedin':'LinkedIn','contact.instagram':'Instagram',
    'contact.github':'GitHub','contact.whatsapp':'WhatsApp',
  },

  es: {
    'nav.home':'Inicio','nav.about':'Sobre mí','nav.projects':'Proyectos','nav.contact':'Contacto',
    'hero.h1':'El conocimiento impulsa, la tecnología multiplica.',
    'hero.h2':'Educación con propósito, tecnología humana y un estilo de vida consciente.',
    'hero.cta':'Abrir proyectos',

    'about.title':'Quién soy',
    'about.p1':'Hola, soy Gabriela Barbosa de Sousa, de Brasil. Hablo portugués, español y practico inglés.',
    'about.p2':'Soy fundadora de Universo Laia, integrando educación, tecnología, música y bienestar.',
    'about.p3':'También soy estudiante de medicina desarrollando proyectos que combinan conocimiento académico, impacto social y tecnología centrada en las personas.',
    'about.areas':'Sobre mí — áreas',
    'about.areas.travel':'Viajes','about.areas.yoga':'Yoga','about.areas.music':'Música',
    'about.areas.languages':'Idiomas','about.areas.tech':'Tech','about.areas.medicine':'Medicina',

    'projects.title':'Proyectos',
    'projects.music.title':'Laia Music',
    'projects.music.desc':'Preservando y difundiendo el legado musical de Edney Fernandes.',
    'projects.mind.title':'Laia Mind',
    'projects.mind.desc':'Yoga, meditación y bienestar.',
    'projects.acad.title':'Laia Academy',
    'projects.acad.desc':'Idiomas con enfoque multicultural y práctico.',
    'projects.tech.title':'Laia Tech',
    'projects.tech.desc':'Consultoría e innovación digital centrada en lo humano.',
    'projects.open':'Abrir',

    'contact.title':'Contactos',
    'contact.note':'Escríbeme por aquí:',
    'contact.email':'Email','contact.linkedin':'LinkedIn','contact.instagram':'Instagram',
    'contact.github':'GitHub','contact.whatsapp':'WhatsApp',
  },

  en: {
    'nav.home':'Home','nav.about':'About','nav.projects':'Projects','nav.contact':'Contact',
    'hero.h1':'Knowledge drives, technology multiplies.',
    'hero.h2':'Purpose-driven education, human technology and a conscious lifestyle.',
    'hero.cta':'Open Projects',

    'about.title':'Who I am',
    'about.p1':"Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English.",
    'about.p2':'I’m the founder of Universo Laia, integrating education, technology, music and well-being.',
    'about.p3':'I’m also a medical student developing projects that blend academic knowledge, social impact and human-centered tech.',
    'about.areas':'About me — areas',
    'about.areas.travel':'Travel','about.areas.yoga':'Yoga','about.areas.music':'Music',
    'about.areas.languages':'Languages','about.areas.tech':'Tech','about.areas.medicine':'Medicine',

    'projects.title':'Projects',
    'projects.music.title':'Laia Music',
    'projects.music.desc':"Preserving and sharing Edney Fernandes' musical legacy.",
    'projects.mind.title':'Laia Mind',
    'projects.mind.desc':'Yoga, meditation and well-being.',
    'projects.acad.title':'Laia Academy',
    'projects.acad.desc':'Languages with a multicultural, practical focus.',
    'projects.tech.title':'Laia Tech',
    'projects.tech.desc':'Human-centered digital consulting and solutions.',
    'projects.open':'Open',

    'contact.title':'Contacts',
    'contact.note':'Reach me here:',
    'contact.email':'Email','contact.linkedin':'LinkedIn','contact.instagram':'Instagram',
    'contact.github':'GitHub','contact.whatsapp':'WhatsApp',
  }
};

// Aplica traduções nos elementos
function applyTranslations(){
  const lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const txt = I18N[lang] && I18N[lang][key];
    if (txt) el.textContent = txt;
  });
}

// Ajusta rótulos da navbar
function applyNavLabels(){
  const L = I18N[getLang()];
  const ids = { 'nav-home':'nav.home','nav-about':'nav.about','nav-projects':'nav.projects','nav-contact':'nav.contact' };
  Object.entries(ids).forEach(([id,key])=>{
    const a = document.getElementById(id);
    if (a && L[key]) a.textContent = L[key];
  });
}

// Inicializa botões de idioma
function initLangButtons(){
  document.querySelectorAll('.lang [data-lang]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      setLang(btn.dataset.lang);
      applyTranslations();
      applyNavLabels();
    });
  });
}

// Início
document.addEventListener('DOMContentLoaded', ()=>{
  applyTranslations();
  applyNavLabels();
  initLangButtons();
});