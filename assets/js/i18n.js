(function(){
  const dict = {
    pt:{
      "nav.home":"Home","nav.about":"Sobre","nav.projects":"Projetos","nav.cultures":"Culturas","nav.contact":"Contato",
      "hero.title":"Bem-vindo ao meu universo","hero.tagline":"Saúde, música e tecnologia","hero.sub":"Aprender é meu superpoder","hero.mantra":"Respira, cria e compartilha","hero.cta":"Meus projetos",
      "about.title":"Quem sou eu","about.body":"Sou Gabriela Barbosa, estudante de Medicina avançada, apaixonada por aprender e construir pontes entre saúde, música, educação e tecnologia.",
      "about.med.title":"Formação em Medicina — UNR","about.med.body":"Universidade Nacional de Rosario (UNR). Rotações, projetos e dossiês acadêmicos.","about.med.cv":"Ver CV (ES)",
      "about.pub.title":"Publicações Acadêmicas",
      "projects.title":"Meus projetos",
      "cultures.title":"Culturas que me transformaram","cultures.subtitle":"Explore meus destaques do Instagram",
      "contact.title":"Contato","footer.rights":"Todos os direitos reservados."
    },
    es:{
      "nav.home":"Inicio","nav.about":"Sobre mí","nav.projects":"Proyectos","nav.cultures":"Culturas","nav.contact":"Contacto",
      "hero.title":"Bienvenid@ a mi universo","hero.tagline":"Salud, música y tecnología","hero.sub":"Aprender es mi superpoder","hero.mantra":"Respira, crea y comparte","hero.cta":"Mis proyectos",
      "about.title":"Quién soy","about.body":"Soy Gabriela Barbosa, estudiante de Medicina avanzada, apasionada por aprender y tender puentes entre salud, música, educación y tecnología.",
      "about.med.title":"Formación en Medicina — UNR","about.med.body":"Universidad Nacional de Rosario (UNR). Rotaciones, proyectos y dossiers académicos.","about.med.cv":"Ver CV (ES)",
      "about.pub.title":"Publicaciones académicas",
      "projects.title":"Mis proyectos",
      "cultures.title":"Culturas que me transformaron","cultures.subtitle":"Explora mis destacados de Instagram",
      "contact.title":"Contacto","footer.rights":"Todos los derechos reservados."
    },
    en:{
      "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.cultures":"Cultures","nav.contact":"Contact",
      "hero.title":"Welcome to my universe","hero.tagline":"Health, music, and technology","hero.sub":"Learning is my superpower","hero.mantra":"Breathe, create, and share","hero.cta":"My projects",
      "about.title":"About me","about.body":"I am Gabriela Barbosa, a senior medical student passionate about learning and building bridges across health, music, education, and technology.",
      "about.med.title":"Medical Training — UNR","about.med.body":"National University of Rosario (UNR). Rotations, projects, and academic dossiers.","about.med.cv":"View CV (ES)",
      "about.pub.title":"Academic Publications",
      "projects.title":"My projects",
      "cultures.title":"Cultures that shaped me","cultures.subtitle":"Explore my Instagram highlights",
      "contact.title":"Contact","footer.rights":"All rights reserved."
    }
  };
  function setLang(lang){
    const pack = dict[lang] || dict.pt;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n"); if(pack[key]) el.textContent = pack[key];
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("ring-2", b.dataset.lang===lang));
    localStorage.setItem("lang", lang);
  }
  document.addEventListener("click",(e)=>{const b=e.target.closest(".lang-btn"); if(b) setLang(b.dataset.lang);});
  setLang(localStorage.getItem("lang")||"pt");
  document.getElementById("year").textContent=new Date().getFullYear();
})();