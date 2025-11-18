# Sistema de Temas - Maxi Dent

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [Arquitectura del Sistema](#arquitectura-del-sistema)
3. [Uso Básico](#uso-básico)
4. [API de Temas](#api-de-temas)
5. [Variables CSS Disponibles](#variables-css-disponibles)
6. [Personalización de Temas](#personalización-de-temas)
7. [Ejemplos de Implementación](#ejemplos-de-implementación)
8. [Solución de Problemas](#solución-de-problemas)
9. [Mejores Prácticas](#mejores-prácticas)

## 🎯 Introducción

El sistema de temas de Maxi Dent permite cambiar dinámicamente entre temas claro y oscuro, manteniendo consistencia visual en toda la aplicación. Utiliza CSS variables para una implementación eficiente y mantenible.

### Características Principales

- 🌓 **Cambio dinámico** entre temas claro y oscuro
- 💾 **Persistencia** de preferencias en localStorage
- 🎨 **Variables CSS** para fácil personalización
- 📱 **Detección automática** de preferencias del sistema
- 🔄 **Transiciones suaves** entre temas
- 🎯 **Totalmente tipado** con TypeScript

## 🏗️ Arquitectura del Sistema

### Estructura de Archivos

```
utils/
├── theme.constants.js    # Definiciones de colores y configuración
└── theme.js              # Lógica de gestión de temas

styles/
├── sidebar.css           # Estilos del sidebar con variables
├── common-pages.css      # Estilos comunes con variables
└── home.css             # Estilos de home con variables

components/
└── sidebar.js           # Componente con botón de cambio de tema
```

### Flujo de Trabajo

1. **Inicialización**: El sistema detecta preferencias guardadas o del sistema
2. **Aplicación**: Se aplican variables CSS al elemento `:root`
3. **Persistencia**: Las preferencias se guardan en localStorage
4. **Eventos**: Se emiten eventos para sincronización de componentes

## 🚀 Uso Básico

### 1. Inicializar el Sistema de Temas

```javascript
// En tu archivo principal o en cada página HTML
import { initTheme } from './utils/theme.js';

// Inicializar automáticamente
initTheme();

// O inicializar manualmente con un tema específico
import { setTheme } from './utils/theme.js';
setTheme('dark');
```

### 2. En las Páginas HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Importar el sistema de temas -->
    <script type="module">
        import { initTheme } from './utils/theme.js';
        initTheme();
    </script>
    <!-- Tus otros estilos -->
    <link rel="stylesheet" href="styles/home.css">
</head>
<body>
    <!-- Contenido -->
</body>
</html>
```

### 3. Usar Variables CSS en Estilos

```css
/* En tus archivos CSS */
.mi-componente {
    background-color: var(--color-background, #ffffff);
    color: var(--color-text-primary, #333333);
    border: 1px solid var(--color-border, #e5e7eb);
}
```

## 🔧 API de Temas

### Funciones Principales

```javascript
import { 
    setTheme, 
    toggleTheme, 
    getColor, 
    isDark, 
    isLight,
    getCurrentTheme 
} from './utils/theme.js';

// Cambiar a un tema específico
setTheme('dark');

// Alternar entre claro y oscuro
toggleTheme();

// Obtener un color específico
const primaryColor = getColor('primary');

// Verificar el tema actual
if (isDark()) {
    console.log('Tema oscuro activo');
}

// Obtener información completa del tema
const themeInfo = getCurrentTheme();
console.log(themeInfo.name);   // 'dark'
console.log(themeInfo.colors); // Objeto con todos los colores
```

### Clase ThemeManager (Uso Avanzado)

```javascript
import themeManager from './utils/theme.js';

// Escuchar cambios de tema
const unsubscribe = themeManager.onThemeChange((themeName, themeColors) => {
    console.log(`Tema cambiado a: ${themeName}`);
    // Actualizar componentes personalizados
});

// Crear tema personalizado
themeManager.createCustomTheme('blue', {
    primary: '#0066cc',
    secondary: '#004499',
    // ... más colores
});

// Aplicar transiciones suaves
themeManager.enableSmoothTransition();

// Resetear al tema del sistema
themeManager.resetToSystem();
```

## 🎨 Variables CSS Disponibles

### Colores Principales

```css
--color-primary              /* Color principal de la marca */
--color-primary-hover         /* Hover del color principal */
--color-secondary            /* Color secundario */
--color-secondary-hover       /* Hover del color secundario */
--color-accent               /* Color de acento */
--color-accent-hover         /* Hover del color de acento */
```

### Colores de Estado

```css
--color-success              /* Color de éxito */
--color-warning              /* Color de advertencia */
--color-error                /* Color de error */
--color-info                 /* Color de información */
```

### Fondos y Superficies

```css
--color-background           /* Fondo principal */
--color-background-secondary /* Fondo secundario */
--color-background-tertiary  /* Fondo terciario */
--color-surface              /* Superficies (tarjetas, modales) */
--color-surface-hover        /* Hover de superficies */
```

### Texto

```css
--color-text-primary         /* Texto principal */
--color-text-secondary       /* Texto secundario */
--color-text-tertiary        /* Texto terciario */
--color-text-inverse         /* Texto sobre fondos oscuros */
```

### Bordes y Separadores

```css
--color-border               /* Bordes estándar */
--color-border-hover         /* Bordes en hover */
--color-border-focus         /* Bordes en focus */
```

### Sidebar Específico

```css
--color-sidebar-background   /* Fondo del sidebar */
--color-sidebar-text         /* Texto del sidebar */
--color-sidebar-text-active  /* Texto activo del sidebar */
--color-sidebar-hover        /* Hover del sidebar */
```

### Efectos

```css
--color-shadow               /* Sombra estándar */
--color-shadow-hover         /* Sombra en hover */
--theme-transition-duration  /* Duración de transiciones */
```

## 🎨 Personalización de Temas

### Crear un Tema Personalizado

```javascript
// 1. Definir colores personalizados
const myCustomTheme = {
    primary: '#your-color',
    secondary: '#your-color',
    accent: '#your-color',
    success: '#your-color',
    warning: '#your-color',
    error: '#your-color',
    info: '#your-color',
    background: '#your-color',
    backgroundSecondary: '#your-color',
    backgroundTertiary: '#your-color',
    surface: '#your-color',
    surfaceHover: '#your-color',
    textPrimary: '#your-color',
    textSecondary: '#your-color',
    textTertiary: '#your-color',
    textInverse: '#your-color',
    border: '#your-color',
    borderHover: '#your-color',
    borderFocus: '#your-color',
    shadow: 'rgba(0, 0, 0, 0.1)',
    shadowHover: 'rgba(0, 0, 0, 0.15)',
    disabled: '#your-color',
    disabledBackground: '#your-color',
    // Colores específicos del sidebar
    sidebarBackground: '#your-color',
    sidebarText: '#your-color',
    sidebarTextActive: '#your-color',
    sidebarHover: '#your-color'
};

// 2. Agregar al gestor de temas
import themeManager from './utils/theme.js';
themeManager.createCustomTheme('custom', myCustomTheme);

// 3. Aplicar el tema
import { setTheme } from './utils/theme.js';
setTheme('custom');
```

### Modificar Temas Existentes

```javascript
// Obtener temas actuales
const themes = themeManager.getAllThemes();

// Modificar un tema existente
themes.light.primary = '#new-color';
themes.light.secondary = '#new-color';

// Aplicar cambios
themeManager.themes.light = themes.light;
```

## 💡 Ejemplos de Implementación

### 1. Componente React con Temas

```jsx
import React, { useEffect, useState } from 'react';
import { getCurrentTheme, onThemeChange } from '../utils/theme.js';

function ThemedComponent() {
    const [theme, setTheme] = useState(getCurrentTheme());

    useEffect(() => {
        // Suscribirse a cambios de tema
        const unsubscribe = onThemeChange((themeName, themeColors) => {
            setTheme({ name: themeName, colors: themeColors });
        });

        // Limpiar suscripción
        return () => unsubscribe();
    }, []);

    return (
        <div style={{ 
            backgroundColor: theme.colors.background,
            color: theme.colors.textPrimary 
        }}>
            <h2>Tema actual: {theme.name}</h2>
            <p>Color primario: {theme.colors.primary}</p>
        </div>
    );
}
```

### 2. Componente Vue con Temas

```vue
<template>
  <div :style="{ backgroundColor: currentTheme.colors.background, color: currentTheme.colors.textPrimary }">
    <h2>Tema actual: {{ currentTheme.name }}</h2>
    <button @click="toggleTheme">Cambiar tema</button>
  </div>
</template>

<script>
import { getCurrentTheme, toggleTheme, onThemeChange } from '../utils/theme.js';

export default {
  data() {
    return {
      currentTheme: getCurrentTheme()
    };
  },
  mounted() {
    this.unsubscribe = onThemeChange((themeName, themeColors) => {
      this.currentTheme = { name: themeName, colors: themeColors };
    });
  },
  beforeUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  },
  methods: {
    toggleTheme() {
      toggleTheme();
    }
  }
};
</script>
```

### 3. Estilos CSS con Variables

```css
/* Componente personalizado */
.custom-card {
    background-color: var(--color-surface);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: 20px;
    transition: all var(--theme-transition-duration) ease;
}

.custom-card:hover {
    box-shadow: 0 4px 12px var(--color-shadow-hover);
    border-color: var(--color-border-hover);
}

/* Botón personalizado */
.custom-button {
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color var(--theme-transition-duration) ease;
}

.custom-button:hover {
    background-color: var(--color-primary-hover);
}

.custom-button:disabled {
    background-color: var(--color-disabled);
    color: var(--color-text-tertiary);
    cursor: not-allowed;
}
```

## 🔧 Solución de Problemas

### Problema: Los temas no se aplican

**Causa**: El sistema de temas no está inicializado.
**Solución**: 
```javascript
import { initTheme } from './utils/theme.js';
initTheme();
```

### Problema: Las variables CSS no funcionan

**Causa**: Las variables no están definidas o el selector es incorrecto.
**Solución**: 
```css
/* Usar siempre valores por defecto */
.mi-elemento {
    color: var(--color-text-primary, #333333); /* Valor por defecto */
}
```

### Problema: El tema no persiste

**Causa**: localStorage no está disponible o está bloqueado.
**Solución**: Verificar disponibilidad de localStorage:
```javascript
if (typeof localStorage !== 'undefined') {
    // localStorage está disponible
}
```

### Problema: Transiciones no funcionan

**Causa**: Las transiciones no están habilitadas.
**Solución**: 
```javascript
import themeManager from './utils/theme.js';
themeManager.enableSmoothTransition();
```

## 📋 Mejores Prácticas

### 1. Nomenclatura Consistente

```css
/* ✅ Correcto */
--color-primary
--color-text-primary
--color-background

/* ❌ Incorrecto */
--primary-color
--textColorPrimary
--bg-color
```

### 2. Valores por Defecto Siempre

```css
/* ✅ Correcto */
.elemento {
    color: var(--color-text-primary, #333333);
    background: var(--color-background, #ffffff);
}

/* ❌ Incorrecto */
.elemento {
    color: var(--color-text-primary); /* Sin valor por defecto */
}
```

### 3. Transiciones Suaves

```css
/* ✅ Correcto */
.elemento {
    transition: background-color var(--theme-transition-duration) ease,
                color var(--theme-transition-duration) ease;
}
```

### 4. Accesibilidad

```css
/* ✅ Correcto - Alto contraste */
.elemento {
    background-color: var(--color-background);
    color: var(--color-text-primary);
    border: 1px solid var(--color-border);
}

/* Asegurar contraste suficiente */
@media (prefers-contrast: high) {
    .elemento {
        border-width: 2px;
    }
}
```

### 5. Responsive Design

```css
/* ✅ Correcto - Variables responsive */
:root {
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 24px;
}

@media (max-width: 768px) {
    :root {
        --spacing-small: 6px;
        --spacing-medium: 12px;
        --spacing-large: 18px;
    }
}
```

## 📝 Notas Adicionales

### Compatibilidad con Navegadores

- ✅ Chrome 49+
- ✅ Firefox 31+
- ✅ Safari 9.1+
- ✅ Edge 15+

### Rendimiento

- Las variables CSS tienen mejor rendimiento que clases dinámicas
- Las transiciones están optimizadas para `transform` y `opacity`
- El sistema es ligero (~5KB sin compresión)

### Seguridad

- No se almacenan datos sensibles
- localStorage es solo para preferencias del usuario
- Los temas no afectan la lógica de negocio

## 🤝 Contribuir

Para agregar nuevos colores o mejorar el sistema:

1. **Agregar colores a theme.constants.js**
2. **Actualizar las paletas de temas**
3. **Documentar nuevas variables**
4. **Probar en ambos temas**
5. **Verificar accesibilidad**

## 📞 Soporte

Para problemas o preguntas sobre el sistema de temas:

1. Verificar esta documentación
2. Revisar la consola del navegador
3. Verificar que todos los archivos estén importados
4. Probar con temas por defecto

---

**Última actualización**: [Fecha actual]
**Versión**: 1.0.0
**Autor**: Sistema Maxi Dent