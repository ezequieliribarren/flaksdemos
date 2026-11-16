// FLAKS — Muestrario de Landings — Home
// Scroll reveal simple + typewriter del título + filtros por rubro (Producto/Servicio).

document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal();
  initTypewriter();
  initFilters();
});

/* ---------- Scroll reveal ---------- */
function initScrollReveal() {
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
    el.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
    observer.observe(el);
  });
}

/* ---------- Typewriter del título ---------- */
function initTypewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const phrases = [
    "Obtené tu sitio web hoy",
    "Inspirate con nuestros diseños",
    "Seleccioná la idea que más te gusta",
  ];

  const TYPE_SPEED = 55;
  const DELETE_SPEED = 30;
  const PAUSE_AFTER_TYPE = 1600;
  const PAUSE_AFTER_DELETE = 300;

  let phraseIndex = 0;
  let charIndex = 0;

  function tick() {
    const current = phrases[phraseIndex];
    const deleting = tick.deleting;

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        tick.deleting = true;
        setTimeout(tick, PAUSE_AFTER_TYPE);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        tick.deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick.deleting = false;
  tick();
}

/* ---------- Filtros por rubro (Todas / Producto / Servicio → sub-rubro) ---------- */
function initFilters() {
  const grid = document.getElementById("cardsGrid");
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll(".demo-card"));
  const scopeTags = document.querySelectorAll(".filter-tags .tag[data-scope]");
  const subtagGroups = document.querySelectorAll(".filter-subtags[data-scope-group]");
  const noResults = document.getElementById("noResults");

  let currentScope = "todas";
  let currentRubro = null;

  function showCards(matches) {
    cards.forEach((card, i) => {
      const shouldShow = matches(card);
      if (shouldShow) {
        card.classList.remove("is-hidden", "is-shown", "is-visible");
        // Forzamos reflow para poder re-disparar la animación cada vez que cambia el filtro.
        void card.offsetWidth;
        card.style.animationDelay = `${i * 55}ms`;
        card.classList.add("is-visible");
        card.addEventListener(
          "animationend",
          () => {
            card.classList.remove("is-visible");
            card.classList.add("is-shown");
          },
          { once: true }
        );
      } else {
        card.classList.remove("is-visible", "is-shown");
        card.classList.add("is-hidden");
      }
    });

    const anyVisible = cards.some((card) => matches(card));
    if (noResults) noResults.hidden = anyVisible;
  }

  function applyFilter() {
    showCards((card) => {
      if (currentScope === "todas") return true;
      if (currentRubro) return card.dataset.rubro === currentRubro;
      return card.dataset.scope === currentScope;
    });

    subtagGroups.forEach((group) => {
      const isActiveGroup = group.dataset.scopeGroup === currentScope;
      group.hidden = !isActiveGroup;
      if (!isActiveGroup) {
        group.querySelectorAll(".tag-sub").forEach((t) => t.classList.remove("is-active"));
      }
    });
  }

  scopeTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const scope = tag.dataset.scope;
      currentScope = scope;
      currentRubro = null;

      scopeTags.forEach((t) => t.classList.toggle("is-active", t === tag));
      applyFilter();
    });
  });

  subtagGroups.forEach((group) => {
    group.querySelectorAll(".tag-sub").forEach((subTag) => {
      subTag.addEventListener("click", () => {
        const rubro = subTag.dataset.rubro;
        const alreadyActive = subTag.classList.contains("is-active");

        group.querySelectorAll(".tag-sub").forEach((t) => t.classList.remove("is-active"));

        if (alreadyActive) {
          currentRubro = null;
        } else {
          subTag.classList.add("is-active");
          currentRubro = rubro;
        }
        applyFilter();
      });
    });
  });

  // Estado inicial: mostrar las 5 con animación de entrada.
  applyFilter();
}
