
const $ = (s, c=document)=>c.querySelector(s);
const $$ = (s, c=document)=>Array.from(c.querySelectorAll(s));

async function j(p){ const r = await fetch(p); return r.json(); }

function setLang(l){ localStorage.setItem('ul_lang', l); location.reload(); }
function getLang(){ return localStorage.getItem('ul_lang') || 'en'; }

const I18N = {
  en: { home:'Home', about:'About', projects:'Projects', contact:'Contact', open:'Open project',
        hero1:'Knowledge drives, technology multiplies.', hero2:'Purpose-driven education, human technology and a conscious lifestyle.',
        who:'Who I am', cultures:'Cultures that transformed me', contacts:'Contacts' },
  pt: { home:'Home', about:'About', projects:'Projects', contact:'Contact', open:'Open project',
        hero1:'Knowledge drives, technology multiplies.', hero2:'Purpose-driven education, human technology and a conscious lifestyle.',
        who:'Who I am', cultures:'Culturas que me transformaram', contacts:'Contacts' },
  es: { home:'Home', about:'About', projects:'Projects', contact:'Contact', open:'Abrir proyecto',
        hero1:'El conocimiento impulsa, la tecnología multiplica.', hero2:'Educación con propósito, tecnología humana y un estilo de vida consciente.',
        who:'Quién soy', cultures:'Culturas que me transformaron', contacts:'Contactos' }
};

function applyNavLabels(){
  const t = I18N[getLang()];
  $('#nav-home') && ($('#nav-home').textContent = t.home);
  $('#nav-about') && ($('#nav-about').textContent = t.about);
  $('#nav-projects') && ($('#nav-projects').textContent = t.projects);
  $('#nav-contact') && ($('#nav-contact').textContent = t.contact);
  $('#hero-1') && ($('#hero-1').textContent = t.hero1);
  $('#hero-2') && ($('#hero-2').textContent = t.hero2);
  $('#title-who') && ($('#title-who').textContent = t.who);
  $('#title-cultures') && ($('#title-cultures').textContent = t.cultures);
  $('#title-contacts') && ($('#title-contacts').textContent = t.contacts);
  $$('#open-label').forEach(el => el.textContent = t.open);
}

function initLangButtons(){
  $$('.lang button').forEach(b=>{
    if(b.dataset.lang === getLang()) b.classList.add('active');
    b.addEventListener('click', ()=>setLang(b.dataset.lang));
  });
}

async function buildCircles(selector){
  const wrap = $(selector); if(!wrap) return;
  wrap.innerHTML = '';
  const imgs = [1,2,3,4,5,6].map(i=>`assets/img/photos/sq-${i}.svg`);
  const links = [
    'about-cultures.html',
    'https://laiamind.netlify.app/',
    'https://laiamusic.netlify.app/',
    'https://proyectolaia.netlify.app/',
    'https://laiatech.netlify.app/',
    'medicine.html'
  ];
  imgs.forEach((src,i)=>{
    const a = document.createElement('a');
    a.href = links[i]; a.target = (links[i].startsWith('http')?'_blank':'_self'); a.rel='noopener';
    const c = document.createElement('div'); c.className = 'circle';
    c.style.backgroundImage = `url('${src}')`;
    a.appendChild(c);
    wrap.appendChild(a);
  });
}

async function buildProjects(selector){
  const wrap = $(selector); if(!wrap) return;
  const data = await j('assets/data/projects.json');
  wrap.innerHTML = '';
  data.forEach(p=>{
    if (!p.url) return;
    const div = document.createElement('div');
    div.className = 'project';
    div.innerHTML = `<div class="pill">${p.name}</div>
      <h3><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
      <p>${p.desc||''}</p>
      <a id="open-label" class="button" href="${p.url}" target="_blank" rel="noopener">Open project</a>`;
    wrap.appendChild(div);
  });
}

async function buildStories(selector){
  const wrap = $(selector); if(!wrap) return;
  const items = await j('assets/data/stories.json');
  wrap.innerHTML = '';
  items.forEach(s=>{
    const a = document.createElement('a');
    a.className = 'item';
    a.href = s.url || '#'; a.target = '_blank'; a.rel='noopener';
    a.innerHTML = `<span>${s.label}</span><span>➡</span>`;
    wrap.appendChild(a);
  });
}

window.addEventListener('DOMContentLoaded', ()=>{
  applyNavLabels();
  initLangButtons();
});
