// Troca de idioma
function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = I18N[lang][key] || el.innerHTML;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "pt";
  setLang(saved);
});