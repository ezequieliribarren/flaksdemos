// FLAKS — evento de GA4 "whatsapp_click" en cualquier link a WhatsApp
// (header del home, footer del home, botón "Contactanos" de la barra en cada landing).
// Compartido por las 10 páginas del muestrario.

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    link.addEventListener("click", () => {
      if (typeof gtag !== "function") return;
      gtag("event", "whatsapp_click", {
        link_url: link.href,
        link_text: link.textContent.trim(),
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    });
  });
});
