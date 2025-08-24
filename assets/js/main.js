function copyEmail(){
  navigator.clipboard.writeText('gabibds@icloud.com');
  alert('Email copiado!');
}
document.addEventListener('DOMContentLoaded',()=>{
  const hero=document.getElementById('hero-subtitle');
  if(hero){
    const frases=[
      'Ideias que inspiram. Tecnologias que transformam.',
      'Aprender para criar. Criar para transformar.',
      'Educar é revolucionar. Conectar é transformar.'
    ];
    let i=0;
    setInterval(()=>{hero.textContent=frases[i%frases.length];i++;},4000);
  }
});
