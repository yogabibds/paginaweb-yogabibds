/* =============================
   I18N (TRADUÇÃO)
============================= */
const I18N = {
  pt:{
    "nav.home":"Início","nav.about":"Quem sou eu","nav.projects":"Projetos","nav.cultures":"Culturas","nav.contact":"Contato",
    "hero.title":"Bem-vindo ao meu universo","hero.subtitle":"Aprender é meu superpoder","hero.cta":"Meus projetos",
    "about.title":"Quem sou eu","about.blurb":"Sou Gabriela Barbosa, brasileira na Argentina...",
    "about.edu.title":"Formação em Medicina — UNR","about.edu.text":"Universidade Nacional de Rosário...",
    "pubs.title":"Publicações Acadêmicas","cult.title":"Culturas que me transformaram","cult.lead":"Viajar transforma corpo e mente…",
    "contact.title":"Contato",
    ROTATOR:[
      "Respirar, inspirar, criar e compartilhar.",
      "Construindo uma ponte entre Ciência, Arte e Bem-Estar.",
      "Tecnologia a serviço das pessoas."
    ]
  },

  es:{/*...*/},

  en:{/*...*/}
};

/* =============================
   APLICA IDIOMA
============================= */
function applyLang(lang){
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  ROTATION.items = I18N[lang].ROTATOR;
  ROTATION.index = 0;
  ROTATION.tick(true);

  document.querySelectorAll(".lang-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

/* eventos */
document.querySelectorAll(".lang-btn").forEach(b=>
  b.addEventListener("click",()=>applyLang(b.dataset.lang))
);

/* =============================
   ROTADOR FRASES
============================= */
const ROTATION = {
  items: I18N.pt.ROTATOR,
  index:0,
  timer:null,

  tick(reset=false){
    const el = document.getElementById("rotator");
    if(!el) return;

    el.textContent = this.items[this.index];

    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(()=>{
      this.index = (this.index+1)%this.items.length;
      this.tick();
    },15000);
  }
};

/* =============================
   INICIALIZAÇÃO
============================= */
document.addEventListener("DOMContentLoaded",()=>{
  applyLang("pt");
  ROTATION.tick(true);
});