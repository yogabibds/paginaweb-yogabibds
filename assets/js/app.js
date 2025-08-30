<script>
/* ===== i18n data ===== */
const I18N = {
  en: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "home.title":"Knowledge drives, technology multiplies.",
    "home.lead":"Purpose-driven education, human technology and a conscious lifestyle.",
    "home.cta":"Open Projects",

    "about.title":"Who I am",
    "about.bio":"Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English. I'm the founder of Universo Laia, integrating education, technology, music and well-being.",
    "areas.title":"Areas","areas.travel":"Travel","areas.yoga":"Yoga","areas.music":"Music","areas.langs":"Languages","areas.tech":"Tech","areas.med":"Medicine",

    "projects.title":"Projects",
    "p.music.title":"Laia Music","p.music.desc":"Preserving and spreading the musical legacy of Edney Fernandes.",
    "p.mind.title":"Laia Mind","p.mind.desc":"Yoga, meditation and well-being.",
    "p.acad.title":"Laia Academy","p.acad.desc":"Languages with a multicultural and practical focus.",
    "p.tech.title":"Laia Tech","p.tech.desc":"Human-centered digital solutions.",
    "projects.open":"Open",

    "contact.title":"Contacts","contact.note":"Reach me here:",
    "c.email":"Email","c.instagram":"Instagram","c.github":"GitHub","c.whatsapp":"WhatsApp"
  },
  pt: {
    "nav.home":"Início","nav.about":"Sobre","nav.projects":"Projetos","nav.contact":"Contato",
    "home.title":"Conhecimento move, tecnologia multiplica.",
    "home.lead":"Educação com propósito, tecnologia humana e um estilo de vida consciente.",
    "home.cta":"Abrir Projetos",

    "about.title":"Quem sou","about.bio":"Sou Gabriela Barbosa de Sousa, do Brasil. Falo português, espanhol e estou praticando inglês. Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar.",
    "areas.title":"Áreas","areas.travel":"Viagens","areas.yoga":"Yoga","areas.music":"Música","areas.langs":"Idiomas","areas.tech":"Tech","areas.med":"Medicina",

    "projects.title":"Projetos",
    "p.music.title":"Laia Music","p.music.desc":"Preservando e difundindo o legado musical de Edney Fernandes.",
    "p.mind.title":"Laia Mind","p.mind.desc":"Yoga, meditação e bem-estar.",
    "p.acad.title":"Laia Academy","p.acad.desc":"Idiomas com foco multicultural e prático.",
    "p.tech.title":"Laia Tech","p.tech.desc":"Soluções digitais centradas no humano.",
    "projects.open":"Abrir",

    "contact.title":"Contatos","contact.note":"Fale comigo por aqui:",
    "c.email":"Email","c.instagram":"Instagram","c.github":"GitHub","c.whatsapp":"WhatsApp"
  },
  es: {
    "nav.home":"Inicio","nav.about":"Sobre mí","nav.projects":"Mis proyectos","nav.contact":"Contacto",
    "home.title":"El conocimiento impulsa, la tecnología multiplica.",
    "home.lead":"Educación con propósito, tecnología humana y un estilo de vida consciente.",
    "home.cta":"Abrir proyectos",

    "about.title":"Quién soy","about.bio":"Soy Gabriela Barbosa de Sousa, de Brasil. Hablo portugués, español y practico inglés. Soy fundadora de Universo Laia, integrando educación, tecnología, música y bienestar.",
    "areas.title":"Áreas","areas.travel":"Viajes","areas.yoga":"Yoga","areas.music":"Música","areas.langs":"Idiomas","areas.tech":"Tech","areas.med":"Medicina",

    "projects.title":"Proyectos",
    "p.music.title":"Laia Music","p.music.desc":"Preservando y difundiendo el legado musical de Edney Fernandes.",
    "p.mind.title":"Laia Mind","p.mind.desc":"Yoga, meditación y bienestar.",
    "p.acad.title":"Laia Academy","p.acad.desc":"Idiomas con enfoque multicultural y práctico.",
    "p.tech.title":"Laia Tech","p.tech.desc":"Soluciones digitales centradas en el humano.",
    "projects.open":"Abrir",

    "contact.title":"Contactos","contact.note":"Contáctame aquí:",
    "c.email":"Email","c.instagram":"Instagram","c.github":"GitHub","c.whatsapp":"WhatsApp"
  }
};

const $ = (sel,root=document)=>root.querySelector(sel);
const $$= (sel,root=document)=>[...root.querySelectorAll(sel)];
const state={ lang: localStorage.getItem('lang') || (navigator.language||'en').slice(0,2) };
if(!I18N[state.lang]) state.lang='en';

function t(key){ return (I18N[state.lang] && I18N[state.lang][key]) || (I18N.en[key]||key); }

function applyTranslations(){
  $$('[data-i18n]').forEach(el=>{
    const key=el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  // menu labels
  $('#nav-home') && ($('#nav-home').textContent=t('nav.home'));
  $('#nav-about') && ($('#nav-about').textContent=t('nav.about'));
  $('#nav-projects') && ($('#nav-projects').textContent=t('nav.projects'));
  $('#nav-contact') && ($('#nav-contact').textContent=t('nav.contact'));
  // buttons
  $$('.i18n-btn').forEach(b=>b.textContent=t(b.dataset.key));
  highlightLang();
}

function setLang(l){
  state.lang = I18N[l] ? l : 'en';
  localStorage.setItem('lang',state.lang);
  applyTranslations();
}

function initLangButtons(){
  $$('.js-lang').forEach(btn=>{
    btn.addEventListener('click',()=>setLang(btn.dataset.lang));
  });
}

function highlightLang(){
  $$('.js-lang').forEach(b=>b.classList.toggle('active', b.dataset.lang===state.lang));
}

function init(){
  initLangButtons();
  applyTranslations();
}
document.addEventListener('DOMContentLoaded',init);
</script>