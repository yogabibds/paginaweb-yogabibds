// Frases rotativas com foco em saúde (15s)
const phrases = {
  PT: ["Saúde que cuida.","Tecnologia a serviço do humano.","Música que conecta.","Yoga que acalma."],
  ES: ["Salud que cuida.","Tecnología al servicio de las personas.","Música que conecta.","Yoga que calma."],
  EN: ["Health that cares.","Technology that connects.","Music that inspires.","Yoga that calms."]
};

let lang = "PT", i = 0;
const rot = document.querySelector(".rotator");
function tick(){ rot.textContent = phrases[lang][i % phrases[lang].length]; i++; }
tick(); setInterval(tick, 15000);

// Alternância simples de idioma (apenas rotator nesta versão)
document.querySelectorAll('[data-lang]').forEach(b=>{
  b.addEventListener('click',()=>{
    document.querySelectorAll('[data-lang]').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    lang = b.dataset.lang; i = 0; tick();
  });
});

// Badge UNR → abre Stories
document.querySelectorAll('.badge.unr').forEach(b=>{
  b.addEventListener('click',()=>{
    window.open('https://www.instagram.com/stories/highlights/18142613215403020/','_blank');
  });
});