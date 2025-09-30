(function(){
  const dict={pt:{"nav.home":"Home","nav.about":"Sobre","nav.projects":"Projetos","nav.cultures":"Culturas","nav.contact":"Contato",
  "hero.title":"Bem-vindo ao meu universo","hero.sub":"Aprender é meu superpoder","hero.mantra":"Respira, inspira, cria e compartilha","hero.cta":"Meus projetos",
  "about.title":"Quem sou eu","about.med.title":"Formação em Medicina — UNR","about.pub.title":"Publicações Acadêmicas",
  "about.body":"Sou Gabriela Barbosa de Sousa, brasileira vivendo na Argentina. Estudante de Medicina na UNR (método PBL). Uno saúde, tecnologia, música e IA para construir soluções e experiências transformadoras.",
  "pub.t1":"1) Avanços recentes nas estratégias diagnósticas, terapêuticas e prognósticas para lesão traumática cerebral","pub.r1":"International Journal of Health Science (2024)",
  "pub.t2":"2) Astrocitomas e gliomas: abordagens cirúrgicas, desafios e avanços terapêuticos","pub.r2":"Revista Eletrônica Acervo Saúde (2025)","pub.pdf":"PDF",
  "projects.title":"Meus projetos","proj.mus":"Gestão do legado musical de Edney Fernandes.","proj.tech":"Consultoria técnica: sites, soluções e gestão de projetos.","proj.acad":"Idiomas, intercâmbio e educação.","proj.mind":"Meditação e bem‑estar.",
  "cultures.title":"Culturas que me transformaram","cultures.subtitle":"Viajar transforma corpo e mente. Entre línguas e costumes, ampliamos a visão de mundo e cultivamos humildade, escuta e criatividade.",
  "contact.title":"Contato","footer.rights":"Todos os direitos reservados."},
  es:{"nav.home":"Inicio","nav.about":"Sobre mí","nav.projects":"Proyectos","nav.cultures":"Culturas","nav.contact":"Contacto",
  "hero.title":"Bienvenid@ a mi universo","hero.sub":"Aprender es mi superpoder","hero.mantra":"Respira, inspira, crea y comparte","hero.cta":"Mis proyectos",
  "about.title":"Quién soy","about.med.title":"Formación en Medicina — UNR","about.pub.title":"Publicaciones académicas",
  "about.body":"Soy Gabriela Barbosa. Estudio Medicina en la UNR (PBL) y conecto salud, tecnología, música e IA para crear soluciones y experiencias.",
  "pub.t1":"1) Avances recientes en TCE: diagnóstico, terapia y pronóstico","pub.r1":"International Journal of Health Science (2024)",
  "pub.t2":"2) Astrocitomas y gliomas: abordajes quirúrgicos y avances terapéuticos","pub.r2":"REAS (2025)","pub.pdf":"PDF",
  "projects.title":"Mis proyectos","proj.mus":"Gestión del legado musical de Edney Fernandes.","proj.tech":"Consultoría técnica y gestión de proyectos.","proj.acad":"Idiomas e intercambio.","proj.mind":"Meditación y bienestar.",
  "cultures.title":"Culturas que me transformaron","cultures.subtitle":"Viajar transforma cuerpo y mente y amplía la mirada con humildad y creatividad.",
  "contact.title":"Contacto","footer.rights":"Todos los derechos reservados."},
  en:{"nav.home":"Home","nav.about":"About","nav.projects":"Projects","nav.cultures":"Cultures","nav.contact":"Contact",
  "hero.title":"Welcome to my universe","hero.sub":"Learning is my superpower","hero.mantra":"Breathe, inspire, create, and share","hero.cta":"My projects",
  "about.title":"About me","about.med.title":"Medical Training — UNR","about.pub.title":"Academic Publications",
  "about.body":"I study Medicine at UNR (PBL) and connect health, technology, music and AI to build solutions and experiences.",
  "pub.t1":"1) Recent advances in TBI: diagnosis, therapy and prognosis","pub.r1":"International Journal of Health Science (2024)",
  "pub.t2":"2) Astrocytomas and gliomas: surgical approaches and therapeutic advances","pub.r2":"REAS (2025)","pub.pdf":"PDF",
  "projects.title":"My projects","proj.mus":"Management of Edney Fernandes’ musical legacy.","proj.tech":"Tech consulting and project management.","proj.acad":"Languages and education.","proj.mind":"Meditation and wellbeing.",
  "cultures.title":"Cultures that shaped me","cultures.subtitle":"Travel reshapes body and mind, widening our view with humility and creativity.",
  "contact.title":"Contact","footer.rights":"All rights reserved."}};

  const flips={pt:["Saúde que acolhe","Música que conecta","Tecnologia que transforma","Construindo uma ponte entre Ciência, Arte e Bem‑Estar"],
              es:["Salud que acoge","Música que conecta","Tecnología que transforma","Construyendo un puente entre ciencia, arte y bienestar"],
              en:["Health that cares","Music that connects","Technology that transforms","Building a bridge between science, art and wellbeing"]};

  function applyFlip(lang){const arr=flips[lang]||flips.pt;const wrap=document.getElementById("flip");if(!wrap)return;wrap.innerHTML=arr.map(t=>`<span>${t}</span>`).join("");}
  function setLang(lang){const pack=dict[lang]||dict.pt;document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.getAttribute("data-i18n");if(pack[k])el.textContent=pack[k];});applyFlip(lang);document.documentElement.lang=lang;localStorage.setItem("lang",lang);}
  document.addEventListener("click",e=>{const b=e.target.closest(".lang-btn");if(b)setLang(b.dataset.lang);});
  setLang(localStorage.getItem("lang")||"pt");
  const y=document.getElementById("y");if(y)y.textContent=new Date().getFullYear();
})();