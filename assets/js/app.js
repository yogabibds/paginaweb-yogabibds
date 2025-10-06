// --- Rotação da frase curta (saúde) ---
const phrases = {
  pt: ["Saúde que acolhe","Tecnologia a serviço das pessoas","Criar com propósito"],
  es: ["Salud que acoge","Tecnología al servicio de las personas","Crear con propósito"],
  en: ["Care that welcomes","Tech at the service of people","Create with purpose"]
};
let rotIdx = 0, rotLang = "pt";
const rotEl = document.getElementById("rotating");
setInterval(() => {
  rotIdx = (rotIdx + 1) % phrases[rotLang].length;
  rotEl.textContent = phrases[rotLang][rotIdx];
}, 3000);

// --- I18N mínimo (altera todos os textos marcados com data-i18n) ---
const dict = {
  pt: {
    hero_title:"Bem-vindo ao meu universo",
    hero_subtop:"Aprender é meu superpoder",
    hero_sub:"Respira, cria e compartilha",
    cta_projects:"Meus projetos",
    about_title:"Quem sou eu",
    med_title:"Formação em Medicina — UNR",
    med_text:`Universidade Nacional de Rosario (UNR), Argentina. Currículo com PBL (Problem-Based Learning),
integração precoce à prática clínica, pesquisa em neurociências e foco em pensamento crítico e trabalho em equipe.`,
    pubs_title:"Publicações Acadêmicas",
    pub1_t:"1) Avanços recentes nas estratégias diagnósticas, terapêuticas e prognósticas para lesão traumática cerebral",
    pub1_s:"International Journal of Health Science (2024). Imagens (TC/RM), biomarcadores, manejo cirúrgico/UTI e prognóstico.",
    pub2_t:"2) Astrocitomas e gliomas: abordagens cirúrgicas, desafios e avanços terapêuticos",
    pub2_s:"Revista Eletrônica Acervo Saúde (REAS) (2025). Critérios cirúrgicos, inovações em quimio/radioterapia e qualidade de vida.",
    projects_title:"Meus projetos",
    p_music:"Gestão do legado musical de Edney Fernandes.",
    p_tech:"Consultoria técnica: sites, soluções e gestão de projetos.",
    p_mind:"Meditação, bem-estar e neurociências.",
    p_academy:"Idiomas, trocas de intercâmbio e educação.",
    travel_title:"Culturas que me transformaram",
    travel_sub:"Viajar transforma corpo e mente. Entre línguas e costumes, ampliamos a visão de mundo e voltamos diferentes.",
    contact_title:"Contato",
    f_name:"Nome", f_email:"Email", f_msg:"Mensagem", send:"Enviar",
    rights:"Todos os direitos reservados."
  },
  es: {
    hero_title:"Bienvenido a mi universo",
    hero_subtop:"Aprender es mi superpoder",
    hero_sub:"Respira, crea y comparte",
    cta_projects:"Mis proyectos",
    about_title:"Quién soy",
    med_title:"Formación en Medicina — UNR",
    med_text:"Universidad Nacional de Rosario (UNR), Argentina. Plan con ABP, práctica clínica temprana e investigación.",
    pubs_title:"Publicaciones Académicas",
    pub1_t:"1) Avances recientes en el diagnóstico y tratamiento del TCE",
    pub1_s:"International Journal of Health Science (2024). Imágenes, biomarcadores y manejo UCI.",
    pub2_t:"2) Astrocitomas y gliomas: abordajes quirúrgicos y avances terapéuticos",
    pub2_s:"REAS (2025). Criterios quirúrgicos e innovaciones en quimio/radioterapia.",
    projects_title:"Mis proyectos",
    p_music:"Gestión del legado musical de Edney Fernandes.",
    p_tech:"Consultoría técnica: sitios, soluciones y gestión de proyectos.",
    p_mind:"Meditación, bienestar y neurociencias.",
    p_academy:"Idiomas, intercambios y educación.",
    travel_title:"Culturas que me transformaron",
    travel_sub:"Viajar transforma cuerpo y mente.",
    contact_title:"Contacto",
    f_name:"Nombre", f_email:"Correo", f_msg:"Mensaje", send:"Enviar",
    rights:"Todos los derechos reservados."
  },
  en: {
    hero_title:"Welcome to my universe",
    hero_subtop:"Learning is my superpower",
    hero_sub:"Breathe, create and share",
    cta_projects:"My projects",
    about_title:"About me",
    med_title:"Medical training — UNR",
    med_text:"National University of Rosario (UNR), Argentina. PBL, early clinical practice and neuroscience research.",
    pubs_title:"Academic Publications",
    pub1_t:"1) Recent advances for traumatic brain injury",
    pub1_s:"International Journal of Health Science (2024). Imaging, biomarkers and ICU/surgical management.",
    pub2_t:"2) Astrocytomas and gliomas: surgical approaches and advances",
    pub2_s:"REAS (2025). Surgical criteria and chemo/radiotherapy updates.",
    projects_title:"My projects",
    p_music:"Managing Edney Fernandes’ musical legacy.",
    p_tech:"Tech consulting: websites, solutions and project management.",
    p_mind:"Meditation, wellbeing and neuroscience.",
    p_academy:"Languages, exchanges and education.",
    travel_title:"Cultures that transformed me",
    travel_sub:"Travel broadens our vision of the world.",
    contact_title:"Contact",
    f_name:"Name", f_email:"Email", f_msg:"Message", send:"Send",
    rights:"All rights reserved."
  }
};

function applyLang(lang){
  rotLang = lang; // para a frase rotativa
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[lang][key]!==undefined){
      el.textContent = dict[lang][key];
    }
  });
  document.querySelectorAll(".chip").forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
}
document.querySelectorAll(".chip").forEach(b=>{
  b.addEventListener("click", ()=>applyLang(b.dataset.lang));
});
applyLang("pt");