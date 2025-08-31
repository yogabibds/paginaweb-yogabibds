
(function(){
  const $$ = (s,ctx=document)=>Array.from(ctx.querySelectorAll(s));
  const dict = {
    en: {"nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.contact":"Contact",
      "home.title":"Knowledge drives, technology multiplies.",
      "home.subtitle":"Purpose-driven education, human technology and a conscious lifestyle.","home.cta":"Open Projects",
      "about.title":"Who I am","about.text1":"Hi, I'm Gabriela Barbosa de Sousa, from Brazil. I speak Portuguese, Spanish and I’m practicing English.","about.text2":"I'm the founder of Universo Laia, integrating education, technology, music and well-being.",
      "about.areas":"Areas","areas.travel":"Travel","areas.yoga":"Yoga","areas.music":"Music","areas.languages":"Languages","areas.tech":"Tech","areas.medicine":"Medicine",
      "projects.title":"Projects","projects.open":"Open",
      "projects.music.desc":"Preserving and spreading Edney Fernandes’ musical legacy.",
      "projects.mind.desc":"Yoga, meditation and well-being.",
      "projects.academy.desc":"Languages with multicultural, practical focus.",
      "projects.tech.desc":"Human-centered digital consulting and solutions.",
      "contact.title":"Contacts","contact.note":"Reach me here:",
      "cultures.title":"Cultures that transformed me","cultures.subtitle":"Where I live and study — stories and moments that shaped me."},
    pt: {"nav.home":"Início","nav.about":"Sobre","nav.projects":"Projetos","nav.contact":"Contato",
      "home.title":"Conhecimento move, tecnologia multiplica.","home.subtitle":"Educação com propósito, tecnologia humana e um estilo de vida consciente.","home.cta":"Abrir Projetos",
      "about.title":"Quem sou eu","about.text1":"Oi, sou Gabriela Barbosa de Sousa, do Brasil. Falo português, espanhol e estou praticando inglês.","about.text2":"Sou fundadora do Universo Laia, integrando educação, tecnologia, música e bem-estar.",
      "about.areas":"Áreas","areas.travel":"Viagens","areas.yoga":"Yoga","areas.music":"Música","areas.languages":"Idiomas","areas.tech":"Tech","areas.medicine":"Medicina",
      "projects.title":"Projetos","projects.open":"Abrir",
      "projects.music.desc":"Preservando e difundindo o legado musical de Edney Fernandes.","projects.mind.desc":"Yoga, meditação e bem-estar.","projects.academy.desc":"Idiomas com foco multicultural e prático.","projects.tech.desc":"Consultoria e soluções digitais centradas no humano.",
      "contact.title":"Contatos","contact.note":"Fale comigo por aqui:",
      "cultures.title":"Culturas que me transformaram","cultures.subtitle":"Onde vivo e estudo — histórias e momentos que me moldaram."},
    es: {"nav.home":"Inicio","nav.about":"Quién soy","nav.projects":"Mis proyectos","nav.contact":"Contacto",
      "home.title":"El conocimiento impulsa, la tecnología multiplica.","home.subtitle":"Educación con propósito, tecnología humana y un estilo de vida consciente.","home.cta":"Abrir Proyectos",
      "about.title":"Quién soy","about.text1":"Soy Gabriela Barbosa de Sousa, brasileña. Hablo portugués, español y practico inglés.","about.text2":"Soy fundadora de Universo Laia, integrando educación, tecnología, música y bienestar.",
      "about.areas":"Áreas","areas.travel":"Viajes","areas.yoga":"Yoga","areas.music":"Música","areas.languages":"Idiomas","areas.tech":"Tech","areas.medicine":"Medicina",
      "projects.title":"Mis proyectos","projects.open":"Abrir",
      "projects.music.desc":"Preservando y difundiendo el legado musical de Edney Fernandes.","projects.mind.desc":"Yoga, meditación y bienestar.","projects.academy.desc":"Idiomas con enfoque multicultural y práctico.","projects.tech.desc":"Consultoría y soluciones digitales centradas en el humano.",
      "contact.title":"Contacto","contact.note":"Escríbeme por aquí:",
      "cultures.title":"Culturas que me transformaron","cultures.subtitle":"Dónde vivo y estudio — historias y momentos que me formaron."}
  };

  function setLang(l){ localStorage.setItem('lang', l); applyTranslations(); highlight(l); }
  function cur(){ return localStorage.getItem('lang') || (['pt','es','en'].includes((navigator.language||'en').slice(0,2))?(navigator.language||'en').slice(0,2):'en'); }
  function applyTranslations(){
    const pack = dict[cur()] || dict.en;
    $$('[data-i18n]').forEach(el=>{ const k=el.getAttribute('data-i18n'); if(pack[k]) el.textContent = pack[k]; });
    // menu ids (se existirem)
    const ids = [["#nav-home","nav.home"],["#nav-about","nav.about"],["#nav-projects","nav.projects"],["#nav-contact","nav.contact"]];
    ids.forEach(([sel,key])=>{ const el = document.querySelector(sel); if(el && pack[key]) el.textContent = pack[key]; });
  }
  function highlight(l){ $$('.lang button,.lang-btn,.js-lang').forEach(b=>b.classList.toggle('active', b.dataset.lang===l)); }
  document.addEventListener('DOMContentLoaded', ()=>{
    $$('.lang button,.lang-btn,.js-lang').forEach(b=>b.addEventListener('click', ()=> setLang(b.dataset.lang)));
    applyTranslations(); highlight(cur());
    const y=document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
  });
})();
