# Karbin Motors Design System

## 1. Visual Direction

Karbin Motors usa un lenguaje visual de ecommerce automotriz: superficies claras, contraste fuerte, negro industrial y rojo como color de acción. La interfaz debe sentirse confiable, directa y comercial, no como una landing oscura de lujo.

El diseño actual se apoya en:

- Fondo principal blanco.
- Bloques oscuros para footer, CTAs y secciones de alto impacto.
- Rojo Karbin para llamadas a la acción, precios, estados activos y detalles de marca.
- Tarjetas compactas para productos, categorías y beneficios.
- Tipografía fuerte, mayormente uppercase en títulos y botones.
- Bordes de 4px a 6px en tarjetas y controles, evitando radios grandes.

## 2. Color Tokens

Los tokens fuente viven en `src/app/globals.css`.

### Brand

- `--brand-red`: `#dc2626`
- `--brand-red-hover`: `#b91c1c`
- `--brand-red-soft`: `#fef2f2`
- `--brand-black`: `#050505`
- `--brand-ink`: `#0a0a0a`
- `--brand-charcoal`: `#171717`

### Surfaces

- `--brand-surface`: `#ffffff`
- `--brand-surface-soft`: `#fafafa`
- `--brand-card`: `#ffffff`
- `--brand-background`: `#ffffff`

### Text And Borders

- `--brand-muted`: `#525252`
- `--brand-subtle`: `#a3a3a3`
- `--brand-line`: `#e5e5e5`
- `--brand-border`: `#e5e5e5`

### Semantic

- `--brand-success`: `#16a34a`
- `--brand-success-soft`: `#ecfdf5`

## 3. Tailwind Theme Names

Tailwind expone estos tokens desde `@theme inline`:

- `brand-red`
- `brand-red-hover`
- `brand-red-soft`
- `brand-black`
- `brand-ink`
- `brand-charcoal`
- `brand-muted`
- `brand-subtle`
- `brand-line`
- `brand-surface`
- `brand-surface-soft`
- `brand-success`
- `brand-success-soft`

También se mantienen aliases compatibles:

- `brand-accent` -> rojo principal
- `brand-accent-hover` -> rojo hover
- `brand-background` -> fondo blanco
- `brand-card` -> tarjeta blanca
- `brand-border` -> borde claro

## 4. Usage Rules

- Usa rojo solo para acciones, precios, estados activos y acentos de marca.
- Usa negro/neutro oscuro para header superior, footer y CTAs de confianza.
- Usa blanco o `neutral-50` para secciones de catálogo, productos y contenido principal.
- Usa verde solo para disponibilidad, stock y WhatsApp.
- No uses gradientes morados, beige dominante, orbes decorativos ni paletas de un solo tono.
- Mantener contraste WCAG AA: texto oscuro sobre blanco y texto blanco sobre rojo/negro.

## 5. Components

### Buttons

- Primary: fondo `brand-red`, texto blanco, hover `brand-red-hover`.
- Secondary light: fondo blanco, borde neutral, texto `brand-ink`, hover rojo.
- Secondary dark: borde blanco translúcido, texto blanco, hover rojo.
- Altura mínima recomendada: 44px.

### Product Cards

- Fondo blanco.
- Borde `brand-line`.
- Sombra suave.
- Precio en rojo.
- Estado de stock en verde.
- CTA inferior con hover rojo.

### Sections

- Secciones principales: `bg-white` o `bg-neutral-50`.
- Secciones de impacto: `bg-neutral-950` con texto blanco.
- Separadores: `border-neutral-200`.

## 6. Typography

- Display: `font-display` para títulos comerciales y headings.
- Body: `font-body` para lectura.
- Títulos: uppercase, `font-black`, line-height compacto.
- Botones y labels: uppercase, `font-black`, tracking moderado.
- No escalar tipografía con viewport width fuera de los tokens existentes.
- Letter spacing global de display se mantiene en `0` para evitar compresión visual excesiva.

## 7. Responsive Rules

- Mobile: una columna, botones apilados, tarjetas con altura estable.
- Tablet: grids de 2 columnas.
- Desktop: grids de 3 a 5 columnas según el contenido.
- Mantener targets táctiles de al menos 44px.
- Definir aspect ratio o alturas estables en imágenes de tarjetas para evitar CLS.
