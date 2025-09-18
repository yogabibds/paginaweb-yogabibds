(function(){
  const dict = {
    pt:{ "nav.home":"Home","nav.about":"Sobre","nav.projects":"Projetos","nav.cultures":"Culturas","nav.contact":"Contato",
      "hero.title":"Bem-vindo ao meu universo","hero.sub":"Aprender é meu superpoder","hero.mantra":"Respira, cria e compartilha","hero.cta":"Meus projetos",
      "about.title":"Quem sou eu","about.body":"Sou Gabriela Barbosa, estudante de Medicina avançada, apaixonada por aprender e construir pontes entre saúde, música, educação e tecnologia.",
      "about.med.title":"Formação em Medicina — UNR","about.med.body":"Universidade Nacional de Rosario (UNR). Rotações, projetos e dossiês acadêmicos.",
      "about.pub.title":"Publicações Acadêmicas",
      "pub.t1":"1) Avanços recentes nas estratégias diagnósticas, terapêuticas e prognósticas para lesão traumática cerebral",
      "pub.r1":"International Journal of Health Science (2024)",
      "pub.d1":"Exames (TC/RM), biomarcadores, terapia cirúrgica/UTI e prognóstico.",
      "pub.t2":"2) Astrocitomas e gliomas: abordagens cirúrgicas, desafios e avanços terapêuticos",
      "pub.r2":"Revista Eletrônica Acervo Saúde (REAS) (2025)",
      "pub.d2":"Criterios cirúrgicos, inovação em quimio/radioterapia e qualidade de vida.",
      "pub.btn":"PDF local",
      "projects.title":"Meus projetos",
      "proj.mus":"Gestão do legado musical de Edney Fernandes.",
      "proj.mind":"Programa de meditação e bem-estar (mindfulness).",
      "proj.acad":"Idiomas, trocas de intercâmbio e educação.",
      "proj.tech":"Consultoria técnica: sites, soluções e gestão de projetos.",
      "cultures.title":"Culturas que me transformaram","cultures.subtitle":"Explore meus destaques do Instagram",
      "contact.title":"Contato","footer.rights":"Todos os direitos reservados." },
    es:{ "nav.home":"Inicio","nav.about":"Sobre mí","nav.projects":"Proyectos","nav.cultures":"Culturas","nav.contact":"Contacto",
      "hero.title":"Bienvenid@ a mi universo","hero.sub":"Aprender es mi superpoder","hero.mantra":"Respira, crea y comparte","hero.cta":"Mis proyectos",
      "about.title":"Quién soy","about.body":"Soy Gabriela Barbosa, estudiante de Medicina avanzada, apasionada por aprender y tender puentes entre salud, música, educación y tecnología.",
      "about.med.title":"Formación en Medicina — UNR","about.med.body":"Universidad Nacional de Rosario (UNR). Rotaciones, proyectos y dossiers académicos.",
      "about.pub.title":"Publicaciones académicas",
      "pub.t1":"1) Avances recientes en estrategias diagnósticas, terapéuticas y pronósticas para el traumatismo craneoencefálico",
      "pub.r1":"International Journal of Health Science (2024)",
      "pub.d1":"Imagen (TC/RM), biomarcadores, manejo quirúrgico/UCI y pronóstico.",
      "pub.t2":"2) Astrocitomas y gliomas: abordajes quirúrgicos, desafíos y avances terapéuticos",
      "pub.r2":"Revista Electrónica Acervo Salud (REAS) (2025)",
      "pub.d2":"Criterios quirúrgicos, innovación en quimio/radioterapia y calidad de vida.",
      "pub.btn":"PDF local",
      "projects.title":"Mis proyectos",
      "proj.mus":"Gestión del legado musical de Edney Fernandes.",
      "proj.mind":"Programa de meditación y bienestar (mindfulness).",
      "proj.acad":"Idiomas, intercambios y educación.",
      "proj.tech":"Consultoría técnica: sitios, soluciones y gestión de proyectos.",
      "cultures.title":"Culturas que me transformaron","cultures.subtitle":"Explora mis destacados de Instagram",
      "contact.title":"Contacto","footer.rights":"Todos los derechos reservados." },
    en:{ "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.cultures":"Cultures","nav.contact":"Contact",
      "hero.title":"Welcome to my universe","hero.sub":"Learning is my superpower","hero.mantra":"Breathe, create, and share","hero.cta":"My projects",
      "about.title":"About me","about.body":"I am Gabriela Barbosa, a senior medical student passionate about learning and building bridges across health, music, education, and technology.",
      "about.med.title":"Medical Training — UNR","about.med.body":"National University of Rosario (UNR). Rotations, projects, and academic dossiers.",
      "about.pub.title":"Academic Publications",
      "pub.t1":"1) Recent advances in diagnostic, therapeutic and prognostic strategies for traumatic brain injury",
      "pub.r1":"International Journal of Health Science (2024)",
      "pub.d1":"Imaging (CT/MRI), biomarkers, surgical/ICU management and prognosis.",
      "pub.t2":"2) Astrocytomas and gliomas: surgical approaches, challenges and therapeutic advances",
      "pub.r2":"Revista Eletrônica Acervo Saúde (REAS) (2025)",
      "pub.d2":"Surgical criteria, innovations in chemo/radiotherapy, and quality of life.",
      "pub.btn":"Local PDF",
      "projects.title":"My projects",
      "proj.mus":"Management of Edney Fernandes’ musical legacy.",
      "proj.mind":"Meditation and wellness program (mindfulness).",
      "proj.acad":"Languages, exchange and education.",
      "proj.tech":"Tech consulting: websites, solutions and project management.",
      "cultures.title":"Cultures that shaped me","cultures.subtitle":"Explore my Instagram highlights",
      "contact.title":"Contact","footer.rights":"All rights reserved." }
  };

  const flips = {
    pt: ["Saúde que acolhe","Música que conecta","Tecnologia que transforma","Educação que expande"],
    es: ["Salud que acoge","Música que conecta","Tecnología que transforma","Educación que expande"],
    en: ["Health that cares","Music that connects","Technology that transforms","Education that expands"]
  };

  function applyFlip(lang){
    const arr = flips[lang] || flips.pt;
    const wrap = document.getElementById("flip");
    if(!wrap) return;
    wrap.innerHTML = arr.map(t=>`<span>${t}</span>`).join("");
  }

  function setLang(lang){
    const pack = dict[lang] || dict.pt;
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n"); if(pack[key]) el.textContent = pack[key];
    });
    applyFlip(lang);
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("ring-2", b.dataset.lang===lang));
    localStorage.setItem("lang", lang);
  }

  document.addEventListener("click",(e)=>{ const b=e.target.closest(".lang-btn"); if(b) setLang(b.dataset.lang); });
  const initial = localStorage.getItem("lang")||"pt"; setLang(initial);
  const y = document.getElementById("year"); if(y) y.textContent = new Date().getFullYear();
})();