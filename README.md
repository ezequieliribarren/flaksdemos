# Muestrario de Landings — FLAKS

Sitio de venta interna para mostrarle a potenciales clientes distintos estilos de
landing page según su rubro. No es un producto final para ningún cliente: es el
catálogo/portfolio que usa FLAKS para presentar posibilidades de diseño.

## Estructura de archivos

```
/
├── index.html                        → Home / muestrario (identidad FLAKS)
├── assets/
│   ├── css/
│   │   ├── styles.css                → Estilos del home
│   │   └── flaks-chrome.css          → UI compartida "FLAKS" que envuelve cada landing
│   │                                    (barra superior + botón flotante "volver a las demos")
│   ├── js/
│   │   ├── main.js                   → Typewriter, chip rotativo, filtros y scroll reveal del home
│   │   └── flaks-chrome.js           → Comportamiento del dropdown de rubros
│   └── img/
│       └── flaks-logo.png            → Logo real de FLAKS (bajado de flaks.com.ar/logo.png)
├── landings/
│   ├── muebleria/                    → "Roble & Lino" (mueblería / interiorismo)
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── seguros/                      → "Amparo Seguros" (agente de seguros)
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── constructora/                 → "Alcora Construcciones" (constructora)
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── coaching/                     → "Florecer Coaching" (coaching / desarrollo personal)
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── contador/                     → "Vértice Contadores" (estudio contable)
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── fotografo/                    → "GRANO" (fotógrafo, editorial B&N excéntrico-minimalista)
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── eventos/                      → "ONIX Eventos" (producción de eventos premium)
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── viajes/                       → "Rumbo Viajes" (agencia de viajes)
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── psicologia/                   → "Raíz Psicología" (Lic. Valentina Ríos)
│       ├── index.html
│       ├── style.css
│       └── script.js
└── README.md
```

Cada landing sigue siendo **autocontenida** en su propio HTML/CSS/JS (paleta,
tipografía y contenido no dependen de ninguna otra carpeta). La única
dependencia compartida es intencional: `assets/css/flaks-chrome.css` y
`assets/js/flaks-chrome.js`, que arman la barra superior y el botón flotante
"Volver a todas las demos" — ese "envoltorio" es a propósito de FLAKS (no de
la landing), así que vive en un solo lugar para poder actualizarlo una vez y
que se refleje en las 9 demos. Si en algún momento una landing se usa como
página real de un cliente, esas dos líneas (`<link>` y `<script>` de
flaks-chrome) y los bloques `.flaks-bar` / `.flaks-float-back` del HTML son
lo primero que hay que quitar.

Esto permite:

- Iterar cada landing por separado sin tocar las demás.
- Copiar la carpeta `landings/<rubro>/` a otro proyecto si en el futuro se
  quiere usar como landing real de un cliente (quitando el envoltorio FLAKS).
- Subir la carpeta raíz completa tal cual a un subdominio (ej. `demos.flaks.com.ar`)
  sin build step: es HTML/CSS/JS plano, sin frameworks ni bundlers.

**Sobre el logo:** `assets/img/flaks-logo.png` es el isotipo real de FLAKS,
descargado directamente de `flaks.com.ar/logo.png`. Si en algún momento cambia
el logo oficial, basta con reemplazar este archivo (mismo nombre) para que se
actualice en el home y en las 9 landings.

## Cómo verlo localmente

No requiere instalación. Basta con abrir `index.html` en el navegador, o
levantar un servidor estático simple, por ejemplo:

```bash
npx serve .
# o
python -m http.server 8080
```

Y entrar a `http://localhost:8080`.

## Detalle de cada demo

| Rubro | Marca ficticia | Paleta | Tipografía |
|---|---|---|---|
| Mueblería / Interiorismo | Roble & Lino | Maderas, terracota, beige, verde oliva | Fraunces (serif) + Inter |
| Seguros | Amparo Seguros | Azul profundo, blanco, dorado, verde | Libre Franklin + Inter |
| Constructora | Alcora Construcciones | Negro/carbón, beige, dorado/cobre | Cormorant Garamond + Inter |
| Coaching | Florecer Coaching (Marina Sabatini) | Coral, mostaza, verde salvia, arena | Poppins + Nunito |
| Estudio contable | Vértice Contadores | Grises, violeta, blanco | Manrope |
| Fotógrafo | GRANO (Lucas Beltrán) | Blanco y negro puro + acento verde lima ácido | Bebas Neue (display) + Space Mono |
| Eventos | ONIX Eventos | Negro premium + dorado champagne | Playfair Display + Jost |
| Agencia de viajes | Rumbo Viajes | Azul océano, coral atardecer, arena | Baloo 2 + Work Sans |
| Psicología | Raíz Psicología (Lic. Valentina Ríos) | Azul grisáceo calmo, crema, rosa polvoriento | Lora (serif) + Karla |

La de **fotógrafo** está pensada como la más disruptiva del set: grilla rota
tipo editorial, tipografía display gigante y un único color "que choca" usado
con cuentagotas — a propósito distinta al resto, que son más clásicas/premium.
La de **constructora** no tiene buscador/filtros como una inmobiliaria
tradicional: es más simple, con foco en "Últimas obras" (reutiliza las
fotos de propiedades del set original, reencuadradas como obras construidas).
La de **psicología** evita a propósito usar fotos de stock como si fueran
clientes reales en los testimonios (solo iniciales + edad, sin avatar), por
un criterio de cuidado propio del rubro de salud mental.

Todas las imágenes son fotos reales de [Pexels](https://www.pexels.com) (uso libre,
sin atribución requerida), servidas directamente desde `images.pexels.com`.
Todas las direcciones, teléfonos y emails de contacto son **ficticios**
(la calle siempre es "Calle 123") para que ninguna demo pueda confundirse con
un domicilio real.

## Notas técnicas

- Responsive mobile-first en las 10 páginas.
- Scroll reveal con `IntersectionObserver` (sin librerías externas).
- Home: título con efecto typewriter (cicla 3 frases), chip rotativo debajo
  ("Recibí consultas" / "Vendé más" / "Presencia digital"), y un filtro de dos
  niveles (Todas → Producto/Servicio → rubro puntual) que muestra/oculta las
  cards con una animación de aparición suave.
- Formularios de contacto son solo UI de demostración: no envían datos a
  ningún backend (`preventDefault()` + feedback visual simulado).
- Tipografías vía Google Fonts (`<link>` en el `<head>` de cada página).
- Sin frameworks de CSS/JS: HTML, CSS y JS plano para que cargue rápido y sea
  fácil de editar sección por sección.
- Cada landing suma una única barra superior fija de FLAKS (logo — clickeable,
  vuelve al muestrario —, dropdown de rubros y botón "Contactanos" que abre
  WhatsApp) y un botón flotante blanco, suave, "Volver a todas las demos". El
  nav propio de cada landing ya no queda fijo al hacer scroll, para no tener
  dos barras pegadas a la vez.
- El botón "Contactanos" (home y las 9 landings) abre WhatsApp
  (`wa.me/5491157455803`) con un mensaje precargado.

## Pendiente para producción real

- Configurar DNS/subdominio en el hosting elegido (Netlify, Vercel, cPanel, etc.) — no cubierto por este proyecto.
- Conectar los formularios a un backend o servicio (ej. Formspree, un endpoint propio) si se decide usar alguna landing como página real de un cliente.
- Reemplazar textos, imágenes y datos de contacto ficticios por los reales del cliente.
