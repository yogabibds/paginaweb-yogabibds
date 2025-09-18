(function(){
  const dict = {
    pt:{ "nav.home":"Home","nav.about":"Sobre","nav.projects":"Projetos","nav.cultures":"Culturas","nav.contact":"Contato",
      "hero.title":"Bem-vindo ao meu universo","hero.sub":"Aprender é meu superpoder","hero.mantra":"Respira, cria e compartilha","hero.cta":"Meus projetos",
      "about.title":"Quem sou eu",
      "about.body":"Sou Gabriela Barbosa, brasileira vivendo na Argentina. Trabalho há anos com tecnologia e hoje uno saúde, música, educação e inteligência artificial para resolver problemas reais. Atuo como estrategista criativa, gerente de projetos e desenvolvedora de experiências digitais. Aqui você encontra minhas frentes: divulgação do legado musical do meu pai, programas de meditação, cursos de idiomas e consultoria técnica.",
      "about.med.title":"Formação em Medicina — UNR",
      "about.pub.title":"Publicações Acadêmicas",
      "pub.t1":"1) Avanços recentes nas estratégias diagnósticas, terapêuticas e prognósticas para lesão traumática cerebral",
      "pub.r1":"International Journal of Health Science (2024)",
      "pub.d1":"Imagens (TC/RM), biomarcadores, manejo cirúrgico/UTI e prognóstico.",
      "pub.t2":"2) Astrocitomas e gliomas: abordagens cirúrgicas, desafios e avanços terapêuticos",
      "pub.r2":"Revista Eletrônica Acervo Saúde (REAS) (2025)",
      "pub.d2":"Critérios cirúrgicos, inovações em quimio/radioterapia e qualidade de vida.",
      "pub.pdf":"PDF",
      "projects.title":"Meus projetos",
      "proj.mus":"Gestão do legado musical de Edney Fernandes.",
      "proj.tech":"Consultoria técnica: sites, soluções e gestão de projetos.",
      "proj.acad":"Idiomas, trocas de intercâmbio e educação.",
      "cultures.title":"Culturas que me transformaram",
      "cultures.subtitle":"Viajar transforma corpo e mente. Entre línguas e costumes, ampliamos a visão de mundo, cultivamos curiosidade e empatia e voltamos diferentes. Estas imagens guardam aprendizados que me movem.",
      "contact.title":"Contato","form.name":"Nome","form.msg":"Mensagem","form.send":"Enviar","footer.rights":"Todos os direitos reservados." },
    es:{ "nav.home":"Inicio","nav.about":"Sobre mí","nav.projects":"Proyectos","nav.cultures":"Culturas","nav.contact":"Contacto",
      "hero.title":"Bienvenid@ a mi universo","hero.sub":"Aprender es mi superpoder","hero.mantra":"Respira, crea y comparte","hero.cta":"Mis proyectos",
      "about.title":"Quién soy",
      "about.body":"Soy Gabriela Barbosa, brasileña viviendo en Argentina. Trabajo hace años con tecnología y hoy uno salud, música, educación e inteligencia artificial para resolver problemas reales. Actúo como estratega creativa, gestora de proyectos y creadora de experiencias digitales. Aquí están mis frentes: difusión del legado musical de mi padre, programas de meditación, cursos de idiomas y consultoría técnica.",
      "about.med.title":"Formación en Medicina — UNR",
      "about.pub.title":"Publicaciones académicas",
      "pub.t1":"1) Avances recientes en estrategias diagnósticas, terapéuticas y pronósticas para el traumatismo craneoencefálico",
      "pub.r1":"International Journal of Health Science (2024)",
      "pub.d1":"Imágenes (TC/RM), biomarcadores, manejo quirúrgico/UCI y pronóstico.",
      "pub.t2":"2) Astrocitomas y gliomas: abordajes quirúrgicos, desafíos y avances terapéuticos",
      "pub.r2":"Revista Electrónica Acervo Salud (REAS) (2025)",
      "pub.d2":"Criterios quirúrgicos, innovaciones en quimio/radioterapia y calidad de vida.",
      "pub.pdf":"PDF",
      "projects.title":"Mis proyectos",
      "proj.mus":"Gestión del legado musical de Edney Fernandes.",
      "proj.tech":"Consultoría técnica: sitios, soluciones y gestión de proyectos.",
      "proj.acad":"Idiomas, intercambios y educación.",
      "cultures.title":"Culturas que me transformaron",
      "cultures.subtitle":"Viajar transforma cuerpo y mente. Entre idiomas y costumbres ampliamos la mirada, cultivamos curiosidad y empatía y volvemos distintos. Estas imágenes guardan aprendizajes que me mueven.",
      "contact.title":"Contacto","form.name":"Nombre","form.msg":"Mensaje","form.send":"Enviar","footer.rights":"Todos los derechos reservados." },
    en:{ "nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.cultures":"Cultures","nav.contact":"Contact",
      "hero.title":"Welcome to my universe","hero.sub":"Learning is my superpower","hero.mantra":"Breathe, create, and share","hero.cta":"My projects",
      "about.title":"About me",
      "about.body":"I am Gabriela Barbosa, a Brazilian living in Argentina. I have worked with technology for years and now connect health, music, education, and AI to solve real problems. I operate as a creative strategist, project manager, and builder of digital experiences. Here you will find my fronts: promoting my father’s musical legacy, meditation programs, language courses, and technical consulting.",
      "about.med.title":"Medical Training — UNR",
      "about.pub.title":"Academic Publications",
      "pub.t1":"1) Recent advances in diagnostic, therapeutic and prognostic strategies for traumatic brain injury",
      "pub.r1":"International Journal of Health Science (2024)",
      "pub.d1":"Imaging (CT/MRI), biomarkers, surgical/ICU management and prognosis.",
      "pub.t2":"2) Astrocytomas and gliomas: surgical approaches, challenges and therapeutic advances",
      "pub.r2":"Revista Eletrônica Acervo Saúde (REAS) (2025)",
      "pub.d2":"Surgical criteria, innovations in chemo/radiotherapy, and quality of life.",
      "pub.pdf":"PDF",
      "projects.title":"My projects",
      "proj.mus":"Management of Edney Fernandes’ musical legacy.",
      "proj.tech":"Tech consulting: websites, solutions and project management.",
      "proj.acad":"Languages, exchange and education.",
      "cultures.title":"Cultures that shaped me",
      "cultures.subtitle":"Travel reshapes body and mind. Across languages and cultures we widen our view, grow curiosity and empathy, and return changed. These images hold lessons that move me.",
      "contact.title":"Contact","form.name":"Name","form.msg":"Message","form.send":"Send","footer.rights":"All rights reserved." }
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

  document.addEventListener("click",(e)=>{const b=e.target.closest(".lang-btn"); if(b) setLang(b.dataset.lang);});
  const initial = localStorage.getItem("lang")||"pt"; setLang(initial);
  const y=document.getElementById("year"); if(y) y.textContent = new Date().getFullYear();
})();