/**
 * Sistema de Temas - Lógica de Gestión
 * Maxi Dent - Sistema de gestión odontológica
 * 
 * Este archivo contiene la lógica para gestionar temas dinámicamente,
 * incluyendo cambio de temas, persistencia y aplicación de estilos.
 */

import { LIGHT_THEME, DARK_THEME, THEME_CONFIG } from './theme.constants.js';

/**
 * Clase principal para gestionar temas
 */
class ThemeManager {
  constructor() {
    this.currentTheme = THEME_CONFIG.defaultTheme;
    this.themes = {
      light: LIGHT_THEME,
      dark: DARK_THEME
    };
    this.listeners = [];
    this.init();
  }

  /**
   * Inicializar el gestor de temas
   */
  init() {
    // Cargar tema guardado o detectar preferencia del sistema
    const savedTheme = localStorage.getItem(THEME_CONFIG.storageKey);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const themeToApply = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    this.applyTheme(themeToApply, false); // No guardar en init
    
    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_CONFIG.storageKey)) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  /**
   * Aplicar un tema específico
   * @param {string} themeName - Nombre del tema ('light' o 'dark')
   * @param {boolean} save - Si se debe guardar en localStorage
   */
  applyTheme(themeName, save = true) {
    if (!this.themes[themeName]) {
      console.warn(`Tema "${themeName}" no encontrado, usando tema por defecto`);
      themeName = THEME_CONFIG.defaultTheme;
    }

    this.currentTheme = themeName;
    const theme = this.themes[themeName];

    // Aplicar variables CSS
    this.applyCSSVariables(theme);

    // Establecer atributo data-theme
    document.documentElement.setAttribute(THEME_CONFIG.attribute, themeName);

    // Guardar preferencia
    if (save) {
      localStorage.setItem(THEME_CONFIG.storageKey, themeName);
    }

    // Notificar a los listeners
    this.notifyListeners(themeName, theme);

    // Emitir evento personalizado
    window.dispatchEvent(new CustomEvent('themechange', {
      detail: { theme: themeName, colors: theme }
    }));
  }

  /**
   * Aplicar variables CSS al documento
   * @param {Object} theme - Objeto con los colores del tema
   */
  applyCSSVariables(theme) {
    const root = document.documentElement;
    
    // Aplicar cada color como variable CSS
    Object.entries(theme).forEach(([key, value]) => {
      if (typeof value === 'string') {
        root.style.setProperty(`--color-${this.camelToKebab(key)}`, value);
      }
    });

    // Aplicar configuración de transición
    root.style.setProperty('--theme-transition-duration', THEME_CONFIG.transitionDuration);
  }

  /**
   * Convertir camelCase a kebab-case
   * @param {string} str - String en camelCase
   * @returns {string} String en kebab-case
   */
  camelToKebab(str) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  }

  /**
   * Obtener el tema actual
   * @returns {Object} Objeto con el tema actual
   */
  getCurrentTheme() {
    return {
      name: this.currentTheme,
      colors: this.themes[this.currentTheme]
    };
  }

  /**
   * Obtener un color específico del tema actual
   * @param {string} colorName - Nombre del color
   * @returns {string} Valor del color
   */
  getColor(colorName) {
    const theme = this.themes[this.currentTheme];
    return theme[colorName] || null;
  }

  /**
   * Alternar entre temas claro y oscuro
   */
  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }

  /**
   * Verificar si el tema actual es oscuro
   * @returns {boolean} true si el tema es oscuro
   */
  isDark() {
    return this.currentTheme === 'dark';
  }

  /**
   * Verificar si el tema actual es claro
   * @returns {boolean} true si el tema es claro
   */
  isLight() {
    return this.currentTheme === 'light';
  }

  /**
   * Agregar un listener para cambios de tema
   * @param {Function} callback - Función a ejecutar cuando cambie el tema
   * @returns {Function} Función para remover el listener
   */
  onThemeChange(callback) {
    this.listeners.push(callback);
    return () => {
      const index = this.listeners.indexOf(callback);
      if (index > -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  /**
   * Notificar a todos los listeners sobre cambios de tema
   * @param {string} themeName - Nombre del nuevo tema
   * @param {Object} theme - Objeto del nuevo tema
   */
  notifyListeners(themeName, theme) {
    this.listeners.forEach(callback => {
      try {
        callback(themeName, theme);
      } catch (error) {
        console.error('Error en listener de tema:', error);
      }
    });
  }

  /**
   * Reiniciar al tema por defecto del sistema
   */
  resetToSystem() {
    localStorage.removeItem(THEME_CONFIG.storageKey);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.applyTheme(systemPrefersDark ? 'dark' : 'light', false);
  }

  /**
   * Obtener todos los temas disponibles
   * @returns {Object} Objeto con todos los temas
   */
  getAllThemes() {
    return { ...this.themes };
  }

  /**
   * Crear un tema personalizado
   * @param {string} name - Nombre del nuevo tema
   * @param {Object} colors - Objeto con colores personalizados
   */
  createCustomTheme(name, colors) {
    this.themes[name] = { ...colors };
  }

  /**
   * Aplicar estilos de transición suave
   */
  enableSmoothTransition() {
    const style = document.createElement('style');
    style.textContent = `
      * {
        transition: background-color var(--theme-transition-duration) ease,
                    color var(--theme-transition-duration) ease,
                    border-color var(--theme-transition-duration) ease !important;
      }
    `;
    style.id = 'theme-transition-style';
    document.head.appendChild(style);
  }

  /**
   * Deshabilitar estilos de transición
   */
  disableSmoothTransition() {
    const style = document.getElementById('theme-transition-style');
    if (style) {
      style.remove();
    }
  }
}

// Crear instancia global del gestor de temas
export const themeManager = new ThemeManager();

// Funciones de utilidad para acceso rápido

/**
 * Obtener el color actual de una categoría específica
 * @param {string} colorName - Nombre del color
 * @returns {string} Valor del color
 */
export const getColor = (colorName) => {
  return themeManager.getColor(colorName);
};

/**
 * Obtener el tema actual
 * @returns {Object} Tema actual
 */
export const getCurrentTheme = () => {
  return themeManager.getCurrentTheme();
};

/**
 * Cambiar entre temas claro y oscuro
 */
export const toggleTheme = () => {
  themeManager.toggleTheme();
};

/**
 * Aplicar un tema específico
 * @param {string} themeName - Nombre del tema
 */
export const setTheme = (themeName) => {
  themeManager.applyTheme(themeName);
};

/**
 * Verificar si el tema actual es oscuro
 * @returns {boolean}
 */
export const isDark = () => {
  return themeManager.isDark();
};

/**
 * Verificar si el tema actual es claro
 * @returns {boolean}
 */
export const isLight = () => {
  return themeManager.isLight();
};

/**
 * Inicializar el sistema de temas manualmente
 */
export const initTheme = () => {
  themeManager.init();
};

// Exportar el gestor de temas para uso avanzado
export default themeManager;