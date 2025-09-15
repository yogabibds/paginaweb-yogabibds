document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const phrases = {
    pt:["Aprender é meu superpoder.","Saúde, música e tecnologia — meu trio.","Respira. Cria. Compartilha."],
    es:["Aprender es mi superpoder.","Salud, música y tecnología — mi trío.","Respira. Crea. Comparte."],
    en:["Learning is my superpower.","Health, music and technology — my trio.","Breathe. Create. Share."]
  };

  let idx=0, lang='pt';
  const box=document.getElementById('hero-rotator');
  function rotate(){
    if(!box) return;
    const arr=phrases[lang]; if(!arr) return;
    box.textContent=arr[idx]; idx=(idx+1)%arr.length;
  }
  rotate(); setInterval(rotate,4000);

  document.querySelectorAll('[data-lang]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      lang=btn.dataset.lang; idx=0; rotate();
    });
  });
});