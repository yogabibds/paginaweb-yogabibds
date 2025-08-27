// Dicionário i18n
const I18N = {
  en: {
    "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
    "hero.h1":"Knowledge drives, technology multiplies.",
    "hero.h2":"Purpose-driven education, human technology and a conscious lifestyle.",
    "hero.cta":"Open Projects",
    "about.title":"Who I am","about.areas":"About me — areas",
    "projects.title":"Projects",
    "contact.title":"Contacts","contact.note":"Reach me here:",
    "cultures.title":"Cultures that transformed me",
    "medicine.title":"Medicine"
  },
  pt: {
    "nav.home":"Início","nav.about":"Sobre","nav.projects":"Projetos","nav.contact":"Contato",
    "hero.h1":"Conhecimento impulsiona, tecnologia multiplica.",
    "hero.h2":"Educação com propósito, tecnologia humana e um estilo de vida consciente.",
    "hero.cta":"Abrir Projetos",
    "about.title":"Quem sou eu","about.areas":"Sobre mim — áreas",
    "projects.title":"Projetos",
    "contact.title":"Contatos","contact.note":"Fale comigo por aqui:",
    "cultures.title":"Culturas que me transformaram",
    "medicine.title":"Medicina"
  },
  es: {
    "nav.home":"Inicio","nav.about":"Sobre mí","nav.projects":"Proyectos","nav.contact":"Contacto",
    "hero.h1":"El conocimiento impulsa, la tecnología multiplica.",
    "hero.h2":"Educación con propósito, tecnología humana y un estilo de vida consciente.",
    "hero.cta":"Abrir Proyectos",
    "about.title":"Quién soy","about.areas":"Sobre mí — áreas",
    "projects.title":"Proyectos",
    "contact.title":"Contactos","contact.note":"Escríbeme por aquí:",
    "cultures.title":"Culturas que me transformaron",
    "medicine.title":"Medicina"
  }
};

function setLang(lang){
  localStorage.setItem("lang", lang);
  applyI18n();
}

function applyI18n(){
  const lang = localStorage.getItem("lang") || "en";
  const dict = I18N[lang] || I18N.en;

  // elementos marcados com data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  // Navbar
  const navIds = {
    home: "nav-home",
    about: "nav-about",
    projects: "nav-projects",
    contact: "nav-contact"
  };
  if (document.getElementById(navIds.home)) document.getElementById(navIds.home).textContent = dict["nav.home"];
  if (document.getElementById(navIds.about)) document.getElementById(navIds.about).textContent = dict["nav.about"];
  if (document.getElementById(navIds.projects)) document.getElementById(navIds.projects).textContent = dict["nav.projects"];
  if (document.getElementById(navIds.contact)) document.getElementById(navIds.contact).textContent = dict["nav.contact"];
}

function initLangButtons(){
  document.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
  });
  applyI18n();
}

document.addEventListener("DOMContentLoaded", ()=>{
  if (!localStorage.getItem("lang")) localStorage.setItem("lang","en");
  initLangButtons();
});
