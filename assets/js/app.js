/* ===== i18n ===== */
const I18N = {
  en: {
    nav_home:"Home", nav_about:"About", nav_projects:"Projects", nav_contact:"Contact",
    hero_h1:"Knowledge drives, technology multiplies.",
    hero_p:"Purpose-driven education, human technology and a conscious lifestyle.",
    hero_cta:"Open Projects",
    about_title:"Who I am",
    about_bio:`Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English.
I'm the founder of Universo Laia, integrating education, technology, music and well-being.`,
    areas:"Areas", travel:"Travel", yoga:"Yoga", music:"Music", languages:"Languages", tech:"Tech", medicine:"Medicine",
    projects:"Projects",
    p_music_desc:"Preserving and spreading Edney Fernandes’ musical legacy.",
    p_mind_desc:"Yoga, meditation and well-being.",
    p_acad_desc:"Languages with multicultural, practical focus.",
    p_tech_desc:"Human-centered digital solutions and consulting.",
    open:"Open Projects",
    contacts:"Contacts", reach:"Reach me here:"
  },
  pt: {
    nav_home:"Home", nav_about:"About", nav_projects:"Projects", nav_contact:"Contact",
    hero_h1:"Conhecimento impulsiona, tecnologia multiplica.",
    hero_p:"Educação com propósito, tecnologia humana e um estilo de vida consciente.",
    hero_cta:"Abrir Projetos",
    about_title:"Quem sou",
    about_bio:`Oi! Sou Gabriela Barbosa de Sousa, do Brasil. Falo português, espanhol e estou praticando inglês.
Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar.`,
    areas:"Áreas", travel:"Viagens", yoga:"Yoga", music:"Música", languages:"Idiomas", tech:"Tech", medicine:"Medicina",
    projects:"Projetos",
    p_music_desc:"Preservando e difundindo o legado musical de Edney Fernandes.",
    p_mind_desc:"Yoga, meditação e bem-estar.",
    p_acad_desc:"Idiomas com foco multicultural e prático.",
    p_tech_desc:"Soluções digitais centradas no humano.",
    open:"Abrir",
    contacts:"Contatos", reach:"Fale comigo:"
  },
  es: {
    nav_home:"Inicio", nav_about:"About", nav_projects:"Mis proyectos", nav_contact:"Contacto",
    hero_h1:"El conocimiento impulsa, la tecnología multiplica.",
    hero_p:"Educación con propósito, tecnología humana y un estilo de vida consciente.",
    hero_cta:"Abrir proyectos",
    about_title:"Quién soy",
    about_bio:`Soy Gabi Barbosa, brasileña. Hablo portugués y español, y practico inglés.
Fundadora de Universo Laia, integrando educación, tecnología, música y bienestar.`,
    areas:"Áreas", travel:"Viajes", yoga:"Yoga", music:"Música", languages:"Idiomas", tech:"Tech", medicine:"Medicina",
    projects:"Proyectos",
    p_music_desc:"Preservando y difundiendo el legado musical de Edney Fernandes.",
    p_mind_desc:"Yoga, meditación y bienestar.",
    p_acad_desc:"Idiomas con enfoque multicultural y práctico.",
    p_tech_desc:"Soluciones digitales centradas en el humano.",
    open:"Abrir",
    contacts:"Contacto", reach:"Encuéntrame aquí:"
  }
};

function getLang(){
  const saved = localStorage.getItem("lang");
  if(saved) return saved;
  const b = (navigator.language||"en").slice(0,2);
  return ["pt","es","en"].includes(b)? b : "en";
}
function setLang(l){ localStorage.setItem("lang", l); applyTranslations(); }

function t(key){ const l=getLang(); return (I18N[l] && I18N[l][key]) || I18N.en[key] || key }

function applyNavLabels(){
  const id = (sel,txt)=>{ const el=document.getElementById(sel); if(el) el.textContent=t(txt); };
  id("nav-home","nav_home"); id("nav-about","nav_about");
  id("nav-projects","nav_projects"); id("nav-contact","nav_contact");
}

function applyTranslations(){
  // generic data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });
  // buttons
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = t(key);
  });
  applyNavLabels();
}

function initLangButtons(){
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.onclick = ()=> setLang(btn.dataset.lang);
  });
}

/* ===== helpers for links ===== */
function go(url){ window.location.href = url; }

/* ===== init ===== */
document.addEventListener("DOMContentLoaded", ()=>{
  applyTranslations();
  initLangButtons();
});