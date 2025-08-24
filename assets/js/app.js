
const $ = (s, c=document)=>c.querySelector(s);
const $$ = (s, c=document)=>Array.from(c.querySelectorAll(s));
const LANG_KEY = 'ul_lang';

async function j(p){ const r = await fetch(p); return r.json(); }

function setLang(l){ localStorage.setItem(LANG_KEY, l); location.reload(); }
function getLang(){ return localStorage.getItem(LANG_KEY) || 'en'; }

async function i18nApply(){
  const t = (await j('assets/data/i18n.json'))[getLang()];
  $$('[data-i18n]').forEach(el=>{ const k = el.getAttribute('data-i18n'); if(t[k]) el.textContent = t[k]; });
  // nav labels
  $('#nav-home')?.setAttribute('data-label', t.nav_home);
  $('#nav-about')?.setAttribute('data-label', t.nav_about);
  $('#nav-projects')?.setAttribute('data-label', t.nav_projects);
  $('#nav-contact')?.setAttribute('data-label', t.nav_contact);
  // swap text content if not using data-i18n directly
  $('#nav-home') && ($('#nav-home').textContent = t.nav_home);
  $('#nav-about') && ($('#nav-about').textContent = t.nav_about);
  $('#nav-projects') && ($('#nav-projects').textContent = t.nav_projects);
  $('#nav-contact') && ($('#nav-contact').textContent = t.nav_contact);
}

async function buildPhotos(selector){
  const wrap = $(selector); if(!wrap) return;
  const pics = [1,2,3,4,5,6].map(i=>`assets/img/photos/sq-${i}.svg`);
  const projs = await j('assets/data/projects.json');
  // map each photo to a project (1..4) and the rest to '#'
  const links = projs.map(p=>p.url || '#');
  while(links.length<6) links.push('#');
  wrap.innerHTML='';
  pics.forEach((src,i)=>{
    const a=document.createElement('a'); a.href=links[i]||'#'; a.target='_blank'; a.rel='noopener';
    a.innerHTML = `<img src="${src}" alt="photo ${i+1}" style="width:100%;border-radius:100%;border:2px solid rgba(255,255,255,.2)">`;
    wrap.appendChild(a);
  });
}

async function buildProjects(selector){
  const wrap = $(selector); if(!wrap) return;
  const projs = await j('assets/data/projects.json');
  wrap.innerHTML = '';
  projs.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${p.name}</h3><p>${p.desc||''}</p>
      <p><a class="btn primary" href="${p.url||'#'}" target="_blank" rel="noopener">Open project</a></p>`;
    wrap.appendChild(card);
  });
}

async function buildStories(selector){
  const wrap = $(selector); if(!wrap) return;
  const list = await j('assets/data/stories.json');
  wrap.innerHTML = '';
  list.forEach(s=>{
    const li = document.createElement('div');
    li.className = 'item';
    li.innerHTML = `<span>${s.label}</span><a class="btn" href="${s.url||'#'}" target="_blank" rel="noopener">Open</a>`;
    wrap.appendChild(li);
  });
}

window.addEventListener('DOMContentLoaded',()=>{
  // lang UI
  $$('.lang-btn').forEach(b=>b.addEventListener('click', ()=>setLang(b.dataset.lang)));
  i18nApply();
});
