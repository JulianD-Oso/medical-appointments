/**
 * Sistema de Temas - Constantes de Colores
 * Maxi Dent - Sistema de gestión odontológica
 * 
 * Este archivo contiene todas las definiciones de colores para los temas claro y oscuro.
 * Los colores están organizados por categorías y siguen principios de diseño consistente.
 */

// Colores base de la marca Maxi Dent
const BRAND_COLORS = {
  primary: '#2563eb',      // Azul principal (azul Tailwind 600)
  primaryDark: '#1d4ed8',  // Azul oscuro (azul Tailwind 700)
  primaryLight: '#3b82f6', // Azul claro (azul Tailwind 500)
  secondary: '#10b981',    // Verde secundario (verde Tailwind 500)
  secondaryDark: '#059669', // Verde oscuro (verde Tailwind 600)
  accent: '#f59e0b',       // Naranja acento (ámbar Tailwind 500)
  accentDark: '#d97706',   // Naranja oscuro (ámbar Tailwind 600)
  success: '#10b981',      // Verde éxito
  warning: '#f59e0b',      // Naranja advertencia
  error: '#ef4444',        // Rojo error
  info: '#3b82f6'          // Azul información
};

// Colores neutrales
const NEUTRAL_COLORS = {
  white: '#ffffff',
  black: '#000000',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827'
};

// TEMA CLARO
export const LIGHT_THEME = {
  // Colores principales
  primary: BRAND_COLORS.primary,
  primaryHover: BRAND_COLORS.primaryDark,
  secondary: BRAND_COLORS.secondary,
  secondaryHover: BRAND_COLORS.secondaryDark,
  accent: BRAND_COLORS.accent,
  accentHover: BRAND_COLORS.accentDark,
  
  // Estado de colores
  success: BRAND_COLORS.success,
  warning: BRAND_COLORS.warning,
  error: BRAND_COLORS.error,
  info: BRAND_COLORS.info,
  
  // Fondos
  background: NEUTRAL_COLORS.white,
  backgroundSecondary: NEUTRAL_COLORS.gray50,
  backgroundTertiary: NEUTRAL_COLORS.gray100,
  surface: NEUTRAL_COLORS.white,
  surfaceHover: NEUTRAL_COLORS.gray50,
  
  // Texto
  textPrimary: NEUTRAL_COLORS.gray900,
  textSecondary: NEUTRAL_COLORS.gray600,
  textTertiary: NEUTRAL_COLORS.gray500,
  textInverse: NEUTRAL_COLORS.white,
  
  // Bordes
  border: NEUTRAL_COLORS.gray200,
  borderHover: NEUTRAL_COLORS.gray300,
  borderFocus: BRAND_COLORS.primary,
  
  // Sombras
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowHover: 'rgba(0, 0, 0, 0.15)',
  
  // Estados especiales
  disabled: NEUTRAL_COLORS.gray400,
  disabledBackground: NEUTRAL_COLORS.gray100,
  
  // Sidebar específico
  sidebarBackground: NEUTRAL_COLORS.gray900,
  sidebarText: NEUTRAL_COLORS.gray300,
  sidebarTextActive: NEUTRAL_COLORS.white,
  sidebarHover: NEUTRAL_COLORS.gray800
};

// TEMA OSCURO
export const DARK_THEME = {
  // Colores principales
  primary: BRAND_COLORS.primaryLight,
  primaryHover: BRAND_COLORS.primary,
  secondary: BRAND_COLORS.secondary,
  secondaryHover: BRAND_COLORS.secondaryDark,
  accent: BRAND_COLORS.accent,
  accentHover: BRAND_COLORS.accentDark,
  
  // Estado de colores
  success: '#34d399',      // Verde más claro para oscuro
  warning: '#fbbf24',      // Ámbar más claro para oscuro
  error: '#f87171',        // Rojo más claro para oscuro
  info: '#60a5fa',         // Azul más claro para oscuro
  
  // Fondos
  background: NEUTRAL_COLORS.gray900,
  backgroundSecondary: NEUTRAL_COLORS.gray800,
  backgroundTertiary: NEUTRAL_COLORS.gray700,
  surface: NEUTRAL_COLORS.gray800,
  surfaceHover: NEUTRAL_COLORS.gray700,
  
  // Texto
  textPrimary: NEUTRAL_COLORS.gray50,
  textSecondary: NEUTRAL_COLORS.gray300,
  textTertiary: NEUTRAL_COLORS.gray400,
  textInverse: NEUTRAL_COLORS.gray900,
  
  // Bordes
  border: NEUTRAL_COLORS.gray700,
  borderHover: NEUTRAL_COLORS.gray600,
  borderFocus: BRAND_COLORS.primaryLight,
  
  // Sombras
  shadow: 'rgba(0, 0, 0, 0.3)',
  shadowHover: 'rgba(0, 0, 0, 0.4)',
  
  // Estados especiales
  disabled: NEUTRAL_COLORS.gray600,
  disabledBackground: NEUTRAL_COLORS.gray800,
  
  // Sidebar específico
  sidebarBackground: NEUTRAL_COLORS.gray950,
  sidebarText: NEUTRAL_COLORS.gray400,
  sidebarTextActive: NEUTRAL_COLORS.white,
  sidebarHover: NEUTRAL_COLORS.gray800
};

// Configuración del tema
export const THEME_CONFIG = {
  // Tema por defecto
  defaultTheme: 'light',
  
  // Clave para localStorage
  storageKey: 'maxident-theme',
  
  // Atributo data-theme en el elemento HTML
  attribute: 'data-theme',
  
  // Transición suave al cambiar temas
  transitionDuration: '200ms'
};

// SISTEMA DE TIPOGRAFÍA
export const TYPOGRAPHY_CONSTANTS = {
  // Familias de fuentes
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    secondary: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    mono: "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace"
  },
  
  // Tamaños de fuente (basados en proporción áurea)
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem'    // 60px
  },
  
  // Pesos de fuente
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  
  // Alturas de línea
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75
  },
  
  // Espaciado de letras
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em'
  },
  
  // Escalado responsive
  responsive: {
    mobile: 0.875,   // 87.5% del tamaño base
    tablet: 0.9375,  // 93.75% del tamaño base
    desktop: 1       // 100% del tamaño base
  }
};

// SISTEMA DE ESPACIADO (Proporción Áurea)
export const SPACING_CONSTANTS = {
  // Unidad base (8px)
  unit: '0.5rem',
  
  // Escala de espaciado (φ = 1.618)
  scale: {
    '1': '0.5rem',      // 8px
    '2': '0.8125rem',   // 13px (8 × 1.618)
    '3': '1.3125rem',   // 21px (13 × 1.618)
    '4': '2.125rem',    // 34px (21 × 1.618)
    '5': '3.4375rem',   // 55px (34 × 1.618)
    '6': '5.5625rem',   // 89px (55 × 1.618)
    '7': '9rem',        // 144px (89 × 1.618)
    '8': '14.5625rem'   // 233px (144 × 1.618)
  },
  
  // Espacios micro
  micro: {
    '1': '0.125rem',  // 2px
    '2': '0.25rem',   // 4px
    '3': '0.375rem'   // 6px
  }
};

// SISTEMA DE BORDES Y RADIUS
export const BORDER_CONSTANTS = {
  radius: {
    none: '0',
    sm: '0.25rem',    // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px'    // Circular
  },
  
  width: {
    thin: '1px',
    medium: '2px',
    thick: '3px',
    heavy: '4px'
  }
};

// SISTEMA DE SOMBRAS
export const SHADOW_CONSTANTS = {
  light: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  
  dark: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.5)'
  },
  
  card: {
    default: '0 2px 8px rgba(0, 0, 0, 0.08)',
    hover: '0 8px 24px rgba(0, 0, 0, 0.12)'
  },
  
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
};

// SISTEMA DE TRANSICIONES
export const TRANSITION_CONSTANTS = {
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms'
  },
  
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },
  
  common: {
    fast: '150ms cubic-bezier(0, 0, 0.2, 1)',
    normal: '250ms cubic-bezier(0, 0, 0.2, 1)',
    slow: '350ms cubic-bezier(0, 0, 0.2, 1)',
    bounce: '250ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  }
};

// SISTEMA DE BREAKPOINTS
export const BREAKPOINT_CONSTANTS = {
  // Breakpoints estándar
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  
  // Breakpoints específicos
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px'
};

// SISTEMA DE CONTAINERS
export const CONTAINER_CONSTANTS = {
  xs: '20rem',    // 320px
  sm: '30rem',    // 480px
  md: '40rem',    // 640px
  lg: '48rem',    // 768px
  xl: '64rem',    // 1024px
  '2xl': '80rem',  // 1280px
  '3xl': '96rem',  // 1536px
  '4xl': '112rem'  // 1792px
};

// SISTEMA DE Z-INDEX
export const Z_INDEX_CONSTANTS = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
  loading: 1090
};

// Función auxiliar para convertir colores a RGB
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Función auxiliar para convertir colores a HSL
export const hexToHsl = (hex) => {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  
  const r = rgb.r / 255;
  const g = rgb.g / 255;
  const b = rgb.b / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
};