# Karbin Motors — Plataforma Web Industrial

Plataforma web de alto rendimiento para **Karbin Motors S.A.C.**, una empresa especializada en la venta y distribución de repuestos para motocargueros, furgonetas y trimotos en Ate, Lima. El proyecto cuenta con un diseño estético moderno de estilo **dark-brutalist industrial** y está optimizado para SEO técnico y conversiones directas a canales de atención (WhatsApp).

---

## Tecnologías Principales

- **Frontend**: [Next.js](https://nextjs.org/) (App Router) con soporte de compilación estática (SSG).
- **Estilos**: Vanilla CSS con variables CSS personalizadas y utilidades de diseño brutalista (sin dependencias innecesarias de frameworks de CSS para máximo control de rendimiento).
- **Calidad de Código**: [Biome](https://biomejs.dev/) para linting y formateo ultrarrápido.
- **Base de Datos de Catálogo**: JSON estático pre-procesado (`products.json`) para cargas instantáneas sin lecturas de disco a tiempo de ejecución.

---

## Arquitectura de Directorios

El proyecto sigue una estructura limpia, escalable y modular organizada por dominios técnicos:

```text
├── public/                 # Recursos públicos y assets del catálogo
│   └── repuestos/          # Imágenes optimizadas de los repuestos
├── src/
│   ├── app/                # Enrutador de Next.js (layout, páginas estáticas y SEO)
│   │   ├── nosotros/       # Sección institucional
│   │   ├── productos/      # Catálogo e inventario interactivo
│   │   └── page.tsx        # Página de inicio
│   └── modules/            # Componentes, constantes y lógica reutilizable
│       ├── products/       # Lógica del catálogo (galería, paginación, filtros)
│       │   ├── components/ # Galería de productos, controles, buscador
│       │   └── data/       # Base de datos estática (products.json)
│       ├── public/         # Secciones comunes de páginas (Hero, Footer, Header)
│       └── shared/         # Componentes transversales y utilidades (botones, hooks)
```

---

## Características Clave

1. **Catálogo de Repuestos Autónomo**:
   - Buscador por texto con soporte difuso.
   - Paginación del lado del cliente optimizada a 12 ítems por página con reinicio de estado automático al buscar o cambiar de categoría.
   - Clasificación inteligente de categorías en tiempo de generación: *Mecánicos*, *Eléctricos* y *Accesorios*.

2. **Optimización de Rendimiento e Hidratación (LCP & SSR)**:
   - Carga con prioridad (`priority={i < 4}`) para la primera fila de imágenes en la galería para optimizar el **Largest Contentful Paint (LCP)**.
   - Soporte robusto contra discrepancias de hidratación en clientes que usan extensiones de navegador mediante el silenciado selectivo de warnings (`suppressHydrationWarning`).

3. **Embudo de Conversión WhatsApp**:
   - Integración directa con el canal de atención técnica mediante enlaces pre-formateados que envían la referencia exacta del repuesto consultado en tiempo real.

4. **SEO Industrial**:
   - Integración completa de metadatos únicos para cada página e inyección de datos estructurados **JSON-LD (Schema.org / AutoPartsStore)** con el RUC de la empresa para posicionamiento local.

---

## Guía de Desarrollo

### Requisitos Previos

- Node.js (versión 18 o superior recomendada).
- Gestor de paquetes `pnpm` o `npm`.

### Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
# o
pnpm install
```

### Ejecutar en Desarrollo

Inicia el servidor local de desarrollo con recarga en caliente:

```bash
npm run dev
# o
pnpm dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

### Compilar para Producción

Genera un build optimizado y estático listo para producción:

```bash
npm run build
# o
pnpm build
```

---

## Herramientas de Calidad

El proyecto utiliza **Biome** para mantener el código limpio y libre de errores.

- **Verificar formato y linting**:
  ```bash
  npx biome check src/
  ```
- **Aplicar soluciones y formatear archivos**:
  ```bash
  npx biome check --write src/
  ```
