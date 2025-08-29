<!-- assets/js/app.js -->
<script>
/* ===== CONFIG: idioma ===== */
const I18N = {
  en: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "home.title":"Knowledge drives, technology multiplies.",
    "home.subtitle":"Purpose-driven education, human technology and a conscious lifestyle.",
    "home.cta":"Open Projects",
    "about.title":"Who I am",
    "about.bio":
      "Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English. I'm the founder of Universo Laia, integrating education, technology, music and well-being.",
    "about.areas":"Areas",
    "areas.travel":"Travel","areas.yoga":"Yoga","areas.music":"Music",
    "areas.languages":"Languages","areas.tech":"Tech","areas.medicine":"Medicine",
    "projects.title":"Projects",
    "projects.music.desc":"Preserving and spreading Edney Fernandes’ musical legacy.",
    "projects.mind.desc":"Yoga, meditation and well-being.",
    "projects.academy.desc":"Languages with a multicultural and practical focus.",
    "projects.tech.desc":"Human-centered digital solutions and consulting.",
    "contact.title":"Contacts","contact.note":"Reach me here:",
    "contact.email":"Email","contact.instagram":"Instagram",
    "contact.github":"GitHub","contact.whatsapp":"WhatsApp",
    "footer.copy":"© 2025 Gabriela Barbosa — LAIA"
  },
  pt: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "home.title":"Conhecimento move, tecnologia multiplica.",
    "home.subtitle":"Educação com propósito, tecnologia humana e um estilo de vida consciente.",
    "home.cta":"Abrir Projetos",
    "about.title":"Quem sou",
    "about.bio":
      "Sou Gabriela Barbosa de Sousa, do Brasil. Falo português, espanhol e estou praticando inglês. Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar.",
    "about.areas":"Áreas",
    "areas.travel":"Viagens","areas.yoga":"Yoga","areas.music":"Música",
    "areas.languages":"Idiomas","areas.tech":"Tech","areas.medicine":"Medicina",
    "projects.title":"Projetos",
    "projects.music.desc":"Preservando e difundindo o legado musical de Edney Fernandes.",
    "projects.mind.desc":"Yoga, meditação e bem-estar.",
    "projects.academy.desc":"Idiomas com foco multicultural e prático.",
    "projects.tech.desc":"Consultoria e soluções digitais centradas no humano.",
    "contact.title":"Contatos","contact.note":"Fale comigo por aqui:",
    "contact.email":"Email","contact.instagram":"Instagram",
    "contact.github":"GitHub","contact.whatsapp":"WhatsApp",
    "footer.copy":"© 2025 Gabriela Barbosa — LAIA"
  },
  es: {
    "nav.home":"Inicio","nav.about":"Quién soy","nav.projects":"Mis proyectos","nav.contact":"Contacto",
    "home.title":"El conocimiento impulsa, la tecnología multiplica.",
    "home.subtitle":"Educación con propósito, tecnología humana y un estilo de vida consciente.",
    "home.cta":"Abrir proyectos",
    "about.title":"Quién soy",
    "about.bio":
      "Soy Gabi Barbosa, brasileña. Hablo portugués y español, y practico inglés. Fundadora de Universo Laia, integrando educación, tecnología, música y bienestar.",
    "about.areas":"Áreas",
    "areas.travel":"Viajes","areas.yoga":"Yoga","areas.music":"Música",
    "areas.languages":"Idiomas","areas.tech":"Tech","areas.medicine":"Medicina",
    "projects.title":"Proyectos",
    "projects.music.desc":"Preservar y difundir el legado musical de Edney Fernandes.",
    "projects.mind.desc":"Yoga, meditación y bienestar.",
    "projects.academy.desc":"Idiomas con enfoque multicultural y práctico.",
    "projects.tech.desc":"Consultoría y soluciones digitales centradas en lo humano.",
    "contact.title":"Contactos","contact.note":"Encuéntrame aquí:",
    "contact.email":"Email","contact.instagram":"Instagram",
    "contact.github":"GitHub","contact.whatsapp":"WhatsApp",
    "footer.copy":"© 2025 Gabriela Barbosa — LAIA"
  }
};

function currentLang(){ return localStorage.getItem('lang') || detectLang(); }
function detectLang(){
  const b = (navigator.language||'en').slice(0,2);
  const lang = ['pt','es','en'].includes(b)? b : 'en';
  localStorage.setItem('lang', lang); return lang;
}

function setLang(lang){
  if(!I18N[lang]) return;
  localStorage.setItem('lang', lang);
  applyTranslations();
}

function applyTranslations(){
  const lang = currentLang();
  const dict = I18N[lang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key]) el.textContent = dict[key];
  });
  // também traduz placeholders/title se houver
  document.querySelectorAll('[data-i18n-title]').forEach(el=>{
    const key = el.getAttribute('data-i18n-title');
    if(dict[key]) el.title = dict[key];
  });
}

function initLangButtons(){
  document.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.addEventListener('click', ()=> setLang(btn.dataset.lang));
  });
}

/* ===== inicialização ===== */
document.addEventListener('DOMContentLoaded', ()=>{
  initLangButtons();
  applyTranslations();
});
</script>