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