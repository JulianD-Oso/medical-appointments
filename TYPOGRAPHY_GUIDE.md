# 📚 Guía de Sistema de Tipografía - Maxi Dent

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Principios de Diseño](#principios-de-diseño)
3. [Familias de Fuentes](#familias-de-fuentes)
4. [Jerarquía Tipográfica](#jerarquía-tipográfica)
5. [Sistema de Espaciado](#sistema-de-espaciado)
6. [Responsive Typography](#responsive-typography)
7. [Variables CSS](#variables-css)
8. [Utilidades](#utilidades)
9. [Accesibilidad](#accesibilidad)
10. [Mejores Prácticas](#mejores-prácticas)
11. [Ejemplos de Uso](#ejemplos-de-uso)
12. [Testing y Validación](#testing-y-validación)

## 🎯 Introducción

El sistema de tipografía de Maxi Dent está diseñado para crear una experiencia de usuario coherente, profesional y accesible. Utiliza proporciones áureas para establecer una jerarquía visual armoniosa y está construido sobre principios de diseño moderno y accesibilidad WCAG.

### Objetivos del Sistema

- ✅ **Consistencia**: Apariencia uniforme en todo el sitio
- ✅ **Legibilidad**: Texto fácil de leer en todos los dispositivos
- ✅ **Jerarquía**: Claridad visual de la importancia del contenido
- ✅ **Accesibilidad**: Cumplimiento con estándares WCAG 2.1
- ✅ **Escalabilidad**: Adaptación fluida a diferentes tamaños de pantalla
- ✅ **Mantenibilidad**: Fácil de actualizar y mantener

## 🎨 Principios de Diseño

### Proporción Áurea (φ = 1.618)

Nuestro sistema utiliza la proporción áurea para establecer relaciones visuales armoniosas:

```
Tamaños de fuente: 12px → 14px → 18px → 24px → 30px → 36px
Espaciado: 8px → 13px → 21px → 34px → 55px → 89px
```

### Mobile-First Design

El sistema está diseñado pensando primero en dispositivos móviles, luego escalando hacia arriba:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

### Modular Scale

Utilizamos una escala modular basada en proporciones matemáticas para mantener consistencia.

## 🔤 Familias de Fuentes

### Fuente Principal: Inter

**Inter** es una fuente sans-serif moderna diseñada específicamente para pantallas digitales. Excelente legibilidad y rendimiento.

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Uso**: Cuerpo de texto, párrafos, formularios, elementos UI

### Fuente Secundaria: Poppins

**Poppins** es una fuente geométrica con carácter moderno. Perfecta para encabezados y elementos destacados.

```css
font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

**Uso**: Encabezados, títulos principales, elementos de marca

### Fuente Monoespaciada: SF Mono

Para código, datos técnicos y elementos que requieren alineación precisa.

```css
font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, monospace;
```

**Uso**: Código, datos tabulares, precios, números de referencia

## 📏 Jerarquía Tipográfica

### Encabezados (Headings)

| Elemento | Tamaño | Peso | Altura de Línea | Uso |
|----------|--------|------|-----------------|-----|
| `h1` | 36px | Bold (700) | 1.25 | Títulos principales, hero sections |
| `h2` | 30px | Semibold (600) | 1.25 | Secciones principales |
| `h3` | 24px | Semibold (600) | 1.25 | Subsecciones |
| `h4` | 20px | Semibold (600) | 1.25 | Títulos de componentes |
| `h5` | 18px | Medium (500) | 1.25 | Etiquetas importantes |
| `h6` | 16px | Medium (500) | 1.25 | Etiquetas pequeñas, mayúsculas |

### Cuerpo de Texto (Body Text)

| Elemento | Tamaño | Peso | Altura de Línea | Uso |
|----------|--------|------|-----------------|-----|
| `p` (base) | 16px | Normal (400) | 1.75 | Párrafos estándar |
| `.lead` | 18px | Normal (400) | 1.75 | Texto introductorio |
| `.small` | 14px | Normal (400) | 1.5 | Texto secundario |
| `.tiny` | 12px | Normal (400) | 1.5 | Texto mínimo |

### Elementos de UI

| Elemento | Tamaño | Peso | Uso |
|----------|--------|------|-----|
| Botones | 16px | Medium (500) | Botones principales |
| Labels | 14px | Medium (500) | Formularios, etiquetas |
| Inputs | 16px | Normal (400) | Campos de formulario |
| Navigation | 14px | Medium (500) | Menús de navegación |

## 📐 Sistema de Espaciado

### Base del Sistema

El sistema de espaciado está basado en una unidad base de **8px** (0.5rem) y utiliza la proporción áurea para escalamiento:

```css
--space-unit: 0.5rem; /* 8px base */

--space-1: 8px;    /* φ^0 × base */
--space-2: 13px;   /* φ^1 × base */
--space-3: 21px;   /* φ^2 × base */
--space-4: 34px;   /* φ^3 × base */
--space-5: 55px;   /* φ^4 × base */
--space-6: 89px;   /* φ^5 × base */
```

### Aplicaciones de Espaciado

- **Micro espacios** (2-6px): Espaciado interno de componentes
- **Pequeños espacios** (8-21px): Espaciado entre elementos relacionados
- **Espacios medianos** (21-55px): Separación de secciones
- **Grandes espacios** (55px+): Espaciado de secciones principales

## 📱 Responsive Typography

### Escalado Responsivo

El sistema utiliza factores de escala para adaptar los tamaños de fuente:

```css
:root {
  --font-scale-mobile: 0.875;   /* 87.5% del tamaño base */
  --font-scale-tablet: 0.9375;  /* 93.75% del tamaño base */
  --font-scale-desktop: 1;      /* 100% del tamaño base */
}
```

### Breakpoints

```css
/* Mobile (default) */
@media (max-width: 767px) {
  h1 { font-size: calc(36px * 0.875); } /* 31.5px */
  h2 { font-size: calc(30px * 0.875); } /* 26.25px */
  /* ... */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) {
  h1 { font-size: calc(36px * 0.9375); } /* 33.75px */
  /* ... */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Tamaños base */
}
```

## 🎨 Variables CSS

### Variables de Tipografía

```css
/* Familias de fuentes */
--font-family-primary: 'Inter', system-ui, sans-serif;
--font-family-secondary: 'Poppins', system-ui, sans-serif;
--font-family-mono: 'SF Mono', Monaco, monospace;

/* Tamaños de fuente */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;  /* 18px */
--font-size-xl: 1.25rem;   /* 20px */
--font-size-2xl: 1.5rem;   /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem;  /* 36px */
--font-size-5xl: 3rem;     /* 48px */
--font-size-6xl: 3.75rem;  /* 60px */

/* Pesos de fuente */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Alturas de línea */
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;

/* Espaciado de letras */
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
```

### Variables de Diseño

```css
/* Espaciado */
--space-1: 0.5rem;   /* 8px */
--space-2: 0.8125rem; /* 13px */
--space-3: 1.3125rem; /* 21px */
--space-4: 2.125rem;  /* 34px */
--space-5: 3.4375rem; /* 55px */
--space-6: 5.5625rem; /* 89px */

/* Bordes */
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-2xl: 1rem;     /* 16px */

/* Sombras */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

/* Transiciones */
--duration-fast: 150ms;
--duration-normal: 250ms;
--duration-slow: 350ms;
```

## 🛠️ Utilidades

### Clases de Texto

```css
/* Alineación */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

/* Transformación */
.text-lowercase { text-transform: lowercase; }
.text-uppercase { text-transform: uppercase; }
.text-capitalize { text-transform: capitalize; }

/* Peso */
.font-light { font-weight: 300; }
.font-normal { font-weight: 400; }
.font-medium { font-weight: 500; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }

/* Estilo */
.font-italic { font-style: italic; }

/* Familia */
.font-primary { font-family: var(--font-family-primary); }
.font-secondary { font-family: var(--font-family-secondary); }
.font-mono { font-family: var(--font-family-mono); }

/* Tamaños */
.text-xs { font-size: 0.75rem; }
.text-sm { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }

/* Altura de línea */
.leading-tight { line-height: 1.25; }
.leading-normal { line-height: 1.5; }
.leading-relaxed { line-height: 1.75; }

/* Espaciado de letras */
.tracking-tight { letter-spacing: -0.025em; }
.tracking-wide { letter-spacing: 0.025em; }
```

### Clases de Espaciado

```css
/* Márgenes */
.m-1 { margin: var(--space-1); }
.mt-1 { margin-top: var(--space-1); }
.mb-1 { margin-bottom: var(--space-1); }
.ml-1 { margin-left: var(--space-1); }
.mr-1 { margin-right: var(--space-1); }

/* Padding */
.p-1 { padding: var(--space-1); }
.pt-1 { padding-top: var(--space-1); }
.pb-1 { padding-bottom: var(--space-1); }
.pl-1 { padding-left: var(--space-1); }
.pr-1 { padding-right: var(--space-1); }
```

## ♿ Accesibilidad

### Contraste de Color

Todos los colores de texto han sido verificados para cumplir con los estándares WCAG:

- **Texto normal**: Ratio mínimo 4.5:1 (AA)
- **Texto grande**: Ratio mínimo 3:1 (AA)
- **Texto de interfaz**: Ratio mínimo 4.5:1 (AA)

### Tamaños Mínimos

- **Tamaño mínimo de fuente**: 12px para textos de interfaz
- **Tamaño recomendado**: 16px para párrafos
- **Tamaño de toque mínimo**: 44px × 44px para elementos interactivos

### Consideraciones de Lectura

- **Longitud de línea óptima**: 45-75 caracteres
- **Espaciado entre líneas**: 1.5-1.75 para mejor legibilidad
- **Párrafos cortos**: Máximo 3-4 líneas por párrafo
- **Espaciado entre párrafos**: 1rem (16px) mínimo

### Soporte para Tecnologías de Asistencia

```html
<!-- Uso correcto de encabezados -->
<h1>Título principal de la página</h1>
<h2>Sección principal</h2>
<h3>Subsección</h3>

<!-- Texto alternativo descriptivo -->
<img src="imagen.jpg" alt="Descripción detallada de la imagen">

<!-- Etiquetas de formulario claras -->
<label for="email">Correo electrónico *</label>
<input type="email" id="email" required aria-describedby="email-help">
<div id="email-help">Ingrese su correo electrónico institucional</div>
```

## 🎯 Mejores Prácticas

### 1. Consistencia Visual

```css
/* ✅ Correcto - Usar variables CSS */
.card-title {
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
}

/* ❌ Incorrecto - Valores hardcodeados */
.card-title {
  font-family: 'Poppins';
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
}
```

### 2. Jerarquía Clara

```html
<!-- ✅ Correcto - Jerarquía lógica -->
<article>
  <h1>Guía de Pacientes</h1>
  <h2>Información General</h2>
  <h3>Datos Personales</h3>
  <p>Complete todos los campos requeridos...</p>
</article>

<!-- ❌ Incorrecto - Saltar niveles -->
<article>
  <h1>Guía de Pacientes</h1>
  <h4>Datos Personales</h4> <!-- Salto de h1 a h4 -->
</article>
```

### 3. Responsive Design

```css
/* ✅ Correcto - Mobile-first con escalado */
.heading {
  font-size: var(--font-size-2xl); /* Base: 24px */
}

@media (max-width: 767px) {
  .heading {
    font-size: calc(var(--font-size-2xl) * 0.875); /* 21px */
  }
}

/* ❌ Incorrecto - Breakpoints desordenados */
@media (min-width: 1024px) {
  .heading { font-size: 24px; }
}

@media (max-width: 767px) {
  .heading { font-size: 18px; }
}
```

### 4. Performance

```html
<!-- ✅ Correcto - Preconnect para Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## 💡 Ejemplos de Uso

### Ejemplo 1: Tarjeta de Paciente

```html
<div class="patient-card">
  <div class="patient-header">
    <h3 class="patient-name">María González</h3>
    <span class="patient-id text-sm text-secondary">ID: 12345</span>
  </div>
  
  <div class="patient-info">
    <p class="text-base mb-2">
      <strong>Edad:</strong> 35 años
    </p>
    <p class="text-base mb-2">
      <strong>Última visita:</strong> 15 de marzo, 2024
    </p>
    <p class="text-sm text-secondary">
      Próxima cita: 22 de abril, 2024
    </p>
  </div>
</div>
```

### Ejemplo 2: Formulario de Registro

```html
<form class="registration-form">
  <h2 class="form-title">Registro de Paciente</h2>
  
  <div class="form-group">
    <label for="patient-name" class="label">Nombre Completo *</label>
    <input 
      type="text" 
      id="patient-name" 
      class="input-base"
      placeholder="Ingrese su nombre completo"
      required
    >
  </div>
  
  <div class="form-group">
    <label for="patient-email" class="label">Correo Electrónico</label>
    <input 
      type="email" 
      id="patient-email" 
      class="input-base"
      placeholder="ejemplo@correo.com"
    >
  </div>
  
  <button type="submit" class="btn btn-primary">
    Registrar Paciente
  </button>
</form>
```

### Ejemplo 3: Dashboard con Grid

```html
<div class="dashboard-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="stat-card">
    <h4 class="stat-title">Total Pacientes</h4>
    <p class="stat-value text-3xl font-bold">1,234</p>
    <p class="stat-change text-sm text-success">+12% este mes</p>
  </div>
  
  <div class="stat-card">
    <h4 class="stat-title">Citas Hoy</h4>
    <p class="stat-value text-3xl font-bold">24</p>
    <p class="stat-change text-sm text-secondary">3 confirmadas</p>
  </div>
  
  <div class="stat-card">
    <h4 class="stat-title">Ingresos Mensuales</h4>
    <p class="stat-value text-3xl font-bold">$45,678</p>
    <p class="stat-change text-sm text-success">+8% vs mes anterior</p>
  </div>
</div>
```

## 🧪 Testing y Validación

### Herramientas de Testing

1. **Contrast Checker**: Verificar cumplimiento WCAG
2. **Responsive Design**: Pruebas en múltiples dispositivos
3. **Performance**: Google PageSpeed Insights
4. **Accessibility**: WAVE, axe DevTools
5. **Cross-browser**: Chrome, Firefox, Safari, Edge

### Checklist de Validación

- [ ] Todos los tamaños de fuente usan variables CSS
- [ ] Jerarquía de encabezados es lógica y consistente
- [ ] Contraste de color cumple con WCAG AA
- [ ] Texto es legible en todos los tamaños de pantalla
- [ ] Espaciado es consistente con el sistema
- [ ] Fuentes se cargan correctamente
- [ ] No hay valores hardcodeados en CSS
- [ ] Los enlaces tienen estados visuales claros
- [ ] Los formularios tienen etiquetas descriptivas
- [ ] El sistema funciona sin JavaScript

### Métricas de Éxito

- **Puntuación Lighthouse**: > 90 en Accesibilidad
- **Tiempo de carga de fuentes**: < 300ms
- **Cumulative Layout Shift**: < 0.1
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s

## 📚 Referencias

### Recursos de Diseño

- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- [Modular Scale](https://www.modularscale.com/)
- [Golden Ratio Typography](https://grtcalculator.com/)

### Estándares de Accesibilidad

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [A11y Project](https://www.a11yproject.com/)

### Herramientas de Desarrollo

- [Type Scale Calculator](https://type-scale.com/)
- [Grid Calculator](https://gridcalculator.dk/)
- [Font Pairing Tool](https://fontpair.co/)
- [Can I Use - Font Loading](https://caniuse.com/font-loading)

---

**Última actualización**: Noviembre 2024  
**Versión**: 1.0.0  
**Autor**: Sistema de Diseño Maxi Dent  
**Estado**: ✅ Producción Ready