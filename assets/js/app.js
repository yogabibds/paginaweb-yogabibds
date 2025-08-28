/* ======== i18n simples por data-i18n ======== */
const I18N = {
  en: {
    nav: {home:"Home", about:"About", projects:"Projects", contact:"Contact"},
    hero1: "Knowledge drives, technology multiplies.",
    hero2: "Purpose-driven education, human technology and a conscious lifestyle.",
    cta: "Open Projects",
    titles: {
      projects:"Projects", about:"Who I am", areas:"Areas",
      contact:"Contacts", cultures:"Cultures that transformed me", medicine:"Medicine"
    },
    proj: {
      music:{title:"Laia Music", desc:"Preserving and spreading Edney Fernandes' musical legacy.", btn:"Open Projects"},
      mind:{title:"Laia Mind", desc:"Yoga, meditation and well-being.", btn:"Open Projects"},
      academy:{title:"Laia Academy", desc:"Languages with multicultural, practical focus.", btn:"Open Projects"},
      tech:{title:"Laia Tech", desc:"Human-centered digital solutions and consulting.", btn:"Open Projects"}
    },
    about:{
      p1:"Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English.",
      p2:"I'm the founder of Universo Laia, integrating education, technology, music and well-being.",
      p3:"I'm also a medical student developing projects that blend academic knowledge, social impact and human-centered tech."
    },
    areas:{travel:"Travel", yoga:"Yoga", music:"Music", languages:"Languages", tech:"Tech", medicine:"Medicine"},
    contact:{email:"Email", linkedin:"LinkedIn", instagram:"Instagram", github:"GitHub", whatsapp:"WhatsApp"},
    medicine:{intro:"Medical student at Universidad Nacional de Rosario (Argentina). Publications below."}
  },
  pt: {
    nav:{home:"Home", about:"About", projects:"Projects", contact:"Contact"},
    hero1:"Conhecimento impulsiona, tecnologia multiplica.",
    hero2:"Educação com propósito, tecnologia humana e um estilo de vida consciente.",
    cta:"Abrir projetos",
    titles:{projects:"Projects", about:"Quem sou", areas:"Áreas", contact:"Contatos", cultures:"Culturas que me transformaram", medicine:"Medicina"},
    proj:{
      music:{title:"Laia Music", desc:"Preservando e difundindo o legado musical de Edney Fernandes.", btn:"Abrir"},
      mind:{title:"Laia Mind", desc:"Yoga, meditação e bem-estar.", btn:"Abrir"},
      academy:{title:"Laia Academy", desc:"Idiomas com foco multicultural e prático.", btn:"Abrir"},
      tech:{title:"Laia Tech", desc:"Consultoria e soluções digitais centradas no humano.", btn:"Abrir"}
    },
    about:{
      p1:"Oi! Sou Gabriela Barbosa de Sousa, do Brasil. Falo português, espanhol e pratico inglês.",
      p2:"Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar.",
      p3:"Também sou estudante de medicina, unindo conhecimento acadêmico, impacto social e tecnologia centrada no humano."
    },
    areas:{travel:"Viagens", yoga:"Yoga", music:"Música", languages:"Idiomas", tech:"Tech", medicine:"Medicina"},
    contact:{email:"Email", linkedin:"LinkedIn", instagram:"Instagram", github:"GitHub", whatsapp:"WhatsApp"},
    medicine:{intro:"Estudante de medicina na Universidad Nacional de Rosario (Argentina). Publicações abaixo."}
  },
  es: {
    nav:{home:"Home", about:"About", projects:"Projects", contact:"Contact"},
    hero1:"El conocimiento impulsa, la tecnología multiplica.",
    hero2:"Educación con propósito, tecnología humana y un estilo de vida consciente.",
    cta:"Abrir proyectos",
    titles:{projects:"Projects", about:"Quién soy", areas:"Áreas", contact:"Contactos", cultures:"Culturas que me transformaron", medicine:"Medicina"},
    proj:{
      music:{title:"Laia Music", desc:"Preservando y difundiendo el legado musical de Edney Fernandes.", btn:"Abrir"},
      mind:{title:"Laia Mind", desc:"Yoga, meditación y bienestar.", btn:"Abrir"},
      academy:{title:"Laia Academy", desc:"Idiomas con foco multicultural y práctico.", btn:"Abrir"},
      tech:{title:"Laia Tech", desc:"Soluciones digitales centradas en el humano.", btn:"Abrir"}
    },
    about:{
      p1:"Hola, soy Gabriela Barbosa de Sousa, de Brasil. Hablo portugués, español y practico inglés.",
      p2:"Soy fundadora de Universo Laia, integrando educación, tecnología, música y bienestar.",
      p3:"También soy estudiante de medicina desarrollando proyectos con impacto social y tecnología centrada en las personas."
    },
    areas:{travel:"Viajes", yoga:"Yoga", music:"Música", languages:"Idiomas", tech:"Tech", medicine:"Medicina"},
    contact:{email:"Email", linkedin:"LinkedIn", instagram:"Instagram", github:"GitHub", whatsapp:"WhatsApp"},
    medicine:{intro:"Estudiante de medicina en la Universidad Nacional de Rosario (Argentina). Publicaciones abajo."}
  }
};

function getLang(){
  const url=new URL(window.location); const p=url.searchParams.get("lang");
  if(p) return p;
  const n=(navigator.language||"en").slice(0,2);
  return ["pt","es","en"].includes(n)?n:"en";
}
function setLang(lang){ localStorage.setItem("lang",lang); applyTranslations(lang) }

function applyNavLabels(lang){
  const t=I18N[lang].nav;
  q("#nav-home").textContent=t.home;
  q("#nav-about").textContent=t.about;
  q("#nav-projects").textContent=t.projects;
  q("#nav-contact").textContent=t.contact;
}
function applyTranslations(lang=(localStorage.getItem("lang")||getLang())){
  localStorage.setItem("lang",lang);
  // hero / títulos
  setText("#hero-1", I18N[lang].hero1);
  setText("#hero-2", I18N[lang].hero2);
  setText("[data-i18n=cta]", I18N[lang].cta);
  setText("[data-i18n=title-projects]", I18N[lang].titles.projects);
  setText("[data-i18n=title-about]", I18N[lang].titles.about);
  setText("[data-i18n=title-areas]", I18N[lang].titles.areas);
  setText("[data-i18n=title-contact]", I18N[lang].titles.contact);
  setText("[data-i18n=title-cultures]", I18N[lang].titles.cultures);
  setText("[data-i18n=title-medicine]", I18N[lang].titles.medicine);
  // about text
  setText("[data-i18n=about-p1]", I18N[lang].about.p1);
  setText("[data-i18n=about-p2]", I18N[lang].about.p2);
  setText("[data-i18n=about-p3]", I18N[lang].about.p3);
  // areas captions
  for (const k of ["travel","yoga","music","languages","tech","medicine"]){
    setText(`[data-i18n='areas.${k}']`, I18N[lang].areas[k]);
  }
  // projects cards
  for (const k of ["music","mind","academy","tech"]){
    setText(`[data-i18n='proj.${k}.title']`, I18N[lang].proj[k].title);
    setText(`[data-i18n='proj.${k}.desc']`, I18N[lang].proj[k].desc);
    setText(`[data-i18n='proj.${k}.btn']`, I18N[lang].proj[k].btn);
  }
  // contacts
  for (const k of ["email","linkedin","instagram","github","whatsapp"]){
    setText(`[data-i18n='contact.${k}']`, I18N[lang].contact[k]);
  }
  // medicine
  setText("[data-i18n=medicine-intro]", I18N[lang].medicine.intro);
  applyNavLabels(lang);
}
function initLangButtons(){
  $$("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
}

/* helpers */
const q=(s,o=document)=>o.querySelector(s);
const $$=(s,o=document)=>[...o.querySelectorAll(s)];
function setText(sel,txt){ const el=q(sel); if(el) el.textContent=txt }

/* init */
document.addEventListener("DOMContentLoaded",()=>{
  const lang = localStorage.getItem("lang") || getLang();
  applyTranslations(lang);
  initLangButtons();
});