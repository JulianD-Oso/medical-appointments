## Hallazgos clave
- `utils/session.js` provee las funciones de sesión ya usadas en `home.html`:
  - `validateSession` en utils/session.js:41–67 valida expiración y estructura.
  - `isAuthenticated` en utils/session.js:105–107 delega a `validateSession`.
  - `getCurrentUser` en utils/session.js:122–125 obtiene el usuario desde `localStorage`.
  - `requireAuth` en utils/session.js:131–138 redirige a `'/login.html'` si no hay sesión.
  - `extendSession` en utils/session.js:144–156 renueva la expiración.
- `home.html` valida sincrónicamente y redirige de inmediato:
  - Método `validateSession()` con `isAuthenticated()` y `getCurrentUser()` y redirección a `'/login.html'` en home.html:114–137.
  - Extiende sesión en `visibilitychange` con import dinámico en home.html:176–183.
- `doctors.html`, `pacientes.html`, `citas.html` usan `await validateSession()` (sincrono) y muestran error + redirección diferida (3s). Además mezclan un `<script>` clásico con un módulo.
- Inconsistencia adicional: logout del sidebar redirige a `'/login'` en components/sidebar.js:156–166 (debería ser `'/login.html'`).

## Diferencias que causan fallos en algunos dispositivos
- Mezcla de `<script>` clásico y `type="module"` puede disparar lógica de la página antes de validar sesión (condiciones de carrera en móviles lentos).
- Uso de `await` sobre una función sincrónica introduce microtareas innecesarias y puede alterar el orden de inicialización.
- Redirección diferida (3s) crea estados transitorios inconsistentes y doble navegación en navegadores móviles.
- Diferencia de rutas (`'/login'` vs `'/login.html'`) puede producir 404 según servidor.
- `import()` dinámico en `visibilitychange` necesita soporte moderno; mantener una ruta unificada y manejo de errores evita bloqueos.

## Cambios propuestos (unificación)
Objetivo: replicar el patrón correcto de `home.html` en las tres páginas, manteniendo seguridad y robustez.

### En `doctors.html`
1. Sustituir `await validateSession()` por guardia sincrónica con `requireAuth`:
   - En `DOMContentLoaded`, primera línea: `if (!requireAuth(window.location.pathname)) return;`.
2. Obtener usuario con `getCurrentUser()` y pasarlo al `createSidebar({ user, activeItem: 'doctoras', collapsible: true })`.
3. Unificar manejo de estados: ocultar `#loadingScreen`, mostrar `#mainContent`, ocultar `#errorScreen` inmediatamente tras validar.
4. Añadir extensión de sesión en `visibilitychange` replicando `home.html`:
   - `document.addEventListener('visibilitychange', () => { if (!document.hidden && isAuthenticated()) { import('./utils/session.js').then(m => m.extendSession()); } });`.
5. Eliminar la redirección diferida de 3s y mostrar error solo en excepciones (como en `home.html`).

### En `pacientes.html`
1. Igual que `doctors.html`: usar `requireAuth(window.location.pathname)` en `DOMContentLoaded` y `getCurrentUser()` para el sidebar con `activeItem: 'pacientes'`.
2. Unificar estados de UI (loading/error/main) y quitar redirección diferida.
3. Añadir la extensión de sesión en `visibilitychange` como arriba.

### En `citas.html`
1. Igual que las anteriores: `requireAuth(window.location.pathname)` en `DOMContentLoaded`.
2. Obtener `user` y pasarlo a `createSidebar({ user, activeItem: 'citas', collapsible: true })`.
3. Unificar estados y quitar redirección diferida.
4. Añadir `visibilitychange` con import dinámico para `extendSession`.

### Mejora complementaria (opcional, recomendada)
- Cambiar redirección de logout del sidebar a `'/login.html'` en components/sidebar.js:160 y 165 para coherencia con `requireAuth`.

## Seguridad y robustez
- No exponer ni registrar el token; se mantiene en `localStorage` bajo claves internas.
- `try/catch` ya presente en utils/session.js para `localStorage`; las páginas envolverán inicialización en `try/catch` y mostrarán `errorScreen` solo en excepciones.
- Unificación a rutas absolutas `'/login.html'` para evitar inconsistencias.

## Pruebas a ejecutar
- Navegadores: Chrome, Firefox, Safari, Edge en escritorio y móviles.
- Dispositivos: iOS y Android (Safari/Chrome), macOS/Windows/Linux.
- Escenarios:
  - Sesión válida: carga directa de cada página muestra contenido y sidebar con usuario.
  - Sesión expirada o inválida: redirección inmediata a `'/login.html'` sin estados intermedios.
  - Modo privado/`localStorage` bloqueado: no rompe la app; redirige a login.
  - Conexión intermitente: la UI sigue estable; las llamadas de datos muestran notificaciones de error sin afectar el guardia de sesión.
  - `visibilitychange`: al volver a la pestaña con sesión válida, se renueva la expiración sin errores.

## Entregables
- Código corregido en `citas.html`, `doctors.html`, `pacientes.html` con guardia unificado y extensión de sesión.
- Documentación breve: resumen de cambios y decisiones (como arriba, adaptado a un bloque de notas en la respuesta).
- Reporte de pruebas: matriz de verificación manual con resultados observados para los escenarios citados.

¿Confirmas que procedamos con estos cambios en los tres archivos y (opcionalmente) el ajuste de `sidebar.js`?