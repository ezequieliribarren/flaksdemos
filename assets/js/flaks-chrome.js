// FLAKS Chrome — comportamiento del dropdown de rubros en la barra superior.
// Compartido por las 5 landings demo (cargado desde /assets/js/).

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".flaks-dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".flaks-dropdown-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("is-open");
      document.querySelectorAll(".flaks-dropdown.is-open").forEach((d) => d.classList.remove("is-open"));
      dropdown.classList.toggle("is-open", !isOpen);
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".flaks-dropdown.is-open").forEach((d) => d.classList.remove("is-open"));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".flaks-dropdown.is-open").forEach((d) => d.classList.remove("is-open"));
    }
  });
});
