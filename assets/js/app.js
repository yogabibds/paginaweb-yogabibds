// assets/js/app.js

const I18N = {
  pt: {
    nav: { home: "Início", about: "Sobre", projects: "Projetos", contact: "Contato" },
    home: {
      hero: "Sou Gabriela Barbosa, brasileira, estudante de Medicina e apaixonada por aprender. Busco unir saúde, música e tecnologia. Criei o Universo Laia, um espaço para transformar ideias em projetos e compartilhar meus universos com o mundo."
    },
    about: {
      title: "Quem eu sou",
      lead: "Sou Gabriela Barbosa, brasileira vivendo em Rosario, Argentina. Estudante de Medicina na UNR, consultora em projetos digitais e apaixonada por aprender. Desde criança, sempre fui sonhadora, curiosa e conectada com tecnologia. Falo português e espanhol, estudo inglês e acredito que a comunicação abre portas para o mundo.<br><br>Minha vida é movida por grandes sonhos: ser médica, explorar culturas, criar projetos que unam saúde, música, tecnologia e bem-estar. Gosto de yoga, meditação, música eletrônica, viagens e livros. Amo minha família e acredito que felicidade também está nos pequenos momentos.<br><br>Hoje atuo como consultora no IGA, potencializando projetos de educação. Ao mesmo tempo, desenvolvo o Universo Laia, meu próprio ecossistema criativo, onde reúno tudo o que me move: música, tecnologia, aprendizado de idiomas, saúde e meditação. É o meu espaço para transformar ideias em projetos reais e compartilhar esse caminho com o mundo."
    }
  },

  es: {
    nav: { home: "Inicio", about: "Sobre mí", projects: "Mis proyectos", contact: "Contacto" },
    home: {
      hero: "Soy Gabriela Barbosa, brasileña, estudiante de Medicina y apasionada por aprender. Busco unir salud, música y tecnología. Creé el Universo Laia, un espacio para transformar ideas en proyectos y compartir mis universos con el mundo."
    },
    about: {
      title: "Quién soy",
      lead: "Soy Gabriela Barbosa, brasileña viviendo en Rosario, Argentina. Estudiante de Medicina en la UNR, consultora en proyectos digitales y apasionada por aprender. Desde niña siempre fui soñadora, curiosa y conectada con la tecnología. Hablo portugués y español, estudio inglés y creo que la comunicación abre puertas al mundo.<br><br>Mi vida está movida por grandes sueños: ser médica, explorar culturas y crear proyectos que unan salud, música, tecnología y bienestar. Me gustan el yoga, la meditación, la música electrónica, los viajes y los libros. Amo a mi familia y creo que la felicidad también está en los pequeños momentos.<br><br>Hoy actúo como consultora en el IGA, potenciando proyectos de educación. Al mismo tiempo, desarrollo el Universo Laia, mi propio ecosistema creativo, donde reúno todo lo que me mueve: música, tecnología, aprendizaje de idiomas, salud y meditación. Es mi espacio para transformar ideas en proyectos reales y compartir ese camino con el mundo."
    }
  },

  en: {
    nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
    home: {
      hero: "I’m Gabriela Barbosa, a Brazilian medical student and lifelong learner. I seek to connect health, music, and technology. I created Universo Laia—a space to turn ideas into projects and share my worlds with the world."
    },
    about: {
      title: "Who I am",
      lead: "I am Gabriela Barbosa, a Brazilian living in Rosario, Argentina. Medical student at UNR, digital projects consultant, and passionate lifelong learner. Since childhood I’ve been a dreamer, curious, and connected to technology. I speak Portuguese and Spanish, I’m studying English, and I believe communication opens doors to the world.<br><br>My life is driven by big dreams: becoming a doctor, exploring cultures, and creating projects that unite health, music, technology, and well-being. I enjoy yoga, meditation, electronic music, travel, and books. I love my family and believe happiness also lives in the small moments.<br><br>Today I work as a consultant at IGA, empowering education projects. At the same time, I develop Universo Laia—my own creative ecosystem—where I bring together everything that moves me: music, technology, language learning, health, and meditation. It’s my space to turn ideas into real projects and share the journey with the world."
    }
  }
};

// Função para trocar idioma
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.getAttribute("data-i18n").split(".");
    let text = I18N[lang];
    keys.forEach(k => { if (text) text = text[k]; });
    if (text) el.innerHTML = text;
  });
  localStorage.setItem("lang", lang);
}

// Definir idioma inicial
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "pt";
  setLanguage(saved);
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
});