// Distriman demo: filtro por categoría, búsqueda y carrito de ejemplo
(() => {
  const cards = [...document.querySelectorAll(".card")];
  const links = [...document.querySelectorAll(".cats a[data-f]")];
  const q = document.getElementById("q");
  const count = document.getElementById("count");
  const empty = document.getElementById("empty");
  const cartN = document.getElementById("cartN");
  let cat = "todos";
  let n = 0;

  function apply() {
    const term = q.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach((c) => {
      const ok = (cat === "todos" || c.dataset.cat === cat) && (!term || c.dataset.name.includes(term));
      c.hidden = !ok;
      if (ok) shown++;
    });
    count.textContent = shown + (shown === 1 ? " producto" : " productos");
    empty.hidden = shown !== 0;
  }

  links.forEach((a) => a.addEventListener("click", () => {
    cat = a.dataset.f;
    links.forEach((l) => l.classList.toggle("on", l === a));
    apply();
  }));
  q.addEventListener("input", apply);

  document.querySelectorAll(".add").forEach((b) => b.addEventListener("click", () => {
    cartN.textContent = ++n;
    b.textContent = "Agregado ✓";
    b.classList.add("done");
    setTimeout(() => { b.textContent = "Agregar al carrito"; b.classList.remove("done"); }, 1400);
  }));
})();
