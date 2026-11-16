// ONIX Eventos — scroll reveal.
// El formulario de contacto es solo de vista (inputs deshabilitados a propósito);
// el contacto real de esta demo pasa por el botón/flotante de WhatsApp de FLAKS.

document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min((i % 6) * 70, 280)}ms`;
    observer.observe(el);
  });
});
