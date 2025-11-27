/**
 * Sidebar Component
 * Reusable sidebar with navigation and user information
 */

/**
 * SVG Icon Functions
 */
function getHomeIcon(color = 'currentColor') {
    return `<svg class="nav-icon-svg" width="18" height="18" viewBox="0 0 512 512" fill="${color}">
        <path d="M234.2 8.6c12.3-11.4 31.3-11.4 43.5 0L368 92.3V80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v101.5l37.8 35.1c9.6 9 12.8 22.9 8 35.1S493.2 272 480 272h-16v176c0 35.3-28.7 64-64 64H112c-35.3 0-64-28.7-64-64V272H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8-35.1zM224 248v40h-40c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h40v40c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-40h40c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-40v-40c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"/>
    </svg>`;
}

function getPacientsIcon(color = 'currentColor') {
    return `<svg class="nav-icon-svg" width="18" height="18" viewBox="0 0 48 48" fill="${color}">
        <path fill-rule="evenodd" d="M22.254 12.648a2 2 0 0 0 2.541.05l.003-.002l.005-.004l.05-.038a14.824 14.824 0 0 1 1.14-.758c.793-.476 1.874-1.032 3.08-1.406c2.392-.741 4.929-.705 6.993 1.689c1.246 1.444 1.765 2.84 1.898 4.21c.097.997-.006 2.038-.256 3.142a8 8 0 1 0-4.887 14.467c-.326.926-.62 1.572-.928 2.087c-.364.608-.784 1.097-1.431 1.683c-.327-.31-.74-.804-1.285-1.505l-.267-.345c-.562-.728-1.228-1.59-1.907-2.28c-.717-.726-1.923-1.773-3.5-1.768c-1.568.005-2.777 1.035-3.51 1.767c-.688.69-1.364 1.551-1.934 2.28c-.092.118-.182.233-.27.343c-.556.705-.976 1.202-1.309 1.511c-1.611-1.574-2.5-3.808-3.52-7.965c-.232-.94-.584-2.072-.949-3.24v-.001c-.104-.335-.21-.674-.313-1.011c-.481-1.565-.959-3.212-1.286-4.839c-.687-3.416-.558-6.03.717-7.578c1.695-2.058 3.38-2.994 5.002-3.121c1.629-.128 3.66.522 6.123 2.632Zm12.758 21.097c-1.022 3.234-1.866 4.386-3.725 5.956c-1.198 1.013-2.55-.736-3.973-2.577c-1.233-1.595-2.519-3.258-3.804-3.254c-1.307.004-2.614 1.67-3.864 3.264c-1.441 1.838-2.808 3.581-4.013 2.567c-2.433-2.048-3.5-4.877-4.616-9.418c-.215-.874-.541-1.923-.902-3.08c-1.51-4.849-3.612-11.595-.53-15.337c3.818-4.635 8.562-5.37 13.97-.737c0 0 8.459-6.711 14.026-.256c2.9 3.362 2.779 6.844 1.773 10.265a8.003 8.003 0 0 1-4.342 12.607ZM39 26a6 6 0 1 1-12 0a6 6 0 0 1 12 0Zm-6-4a1 1 0 0 0-1 1v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2v-2a1 1 0 0 0-1-1Z" clip-rule="evenodd"/>
        <path d="M33.095 32.92L16.3 38.966l-.4-1.73l17.585-6.33c.008.177-.008.36-.05.544l-.34 1.47Zm-16.082 7.915l15.547-5.597l-.471 2.044l-13.05 4.698a3 3 0 0 1-2.026-1.145ZM31.554 39.6L24.889 42h3.724a3 3 0 0 0 2.924-2.325l.017-.074Z"/>
    </svg>`;
}

function getDoctorIcon(color = 'currentColor') {
    return `<svg class="nav-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <g>
            <path d="M3.5 11.5h-2v4l2 1m16-5h2v4l-2 1m-11-4v1m6-1v1m-11-6h5m6 0h5M3.5 17l8-2l8 2"/>
            <path d="m19.5 20l-8 3.5l-8-3.5V4l8-3.5l8 3.5z"/>
            <path d="m14.5 9.5l-3 1.5l-3-1.5v-4l3-1.5l3 1.5z"/>
            <path d="M11.5 6L10 7.5L11.5 9l1.499-1.5z"/>
        </g>
    </svg>`;
}

function getAppointmentIcon(color = 'currentColor') {
    return `<svg class="nav-icon-svg" width="18" height="18" viewBox="0 0 576 512" fill="${color}">
        <path d="M96 32C43 32 0 75 0 128v64c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-64c0-53-43-96-96-96H96zm128 64c26.5 0 48 21.5 48 48v56c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-56c0-26.5 21.5-48 48-48zm80 48c0-26.5 21.5-48 48-48s48 21.5 48 48v56c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-56zM96 128c26.5 0 48 21.5 48 48v24c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24v-24c0-26.5 21.5-48 48-48zm336 48c0-26.5 21.5-48 48-48s48 21.5 48 48v24c0 13.3-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24v-24zM96 480h384c53 0 96-43 96-96v-32c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v32c0 53 43 96 96 96zm0-64c-26.5 0-48-21.5-48-48v-24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48zm80-48v-24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48zm176 48c-26.5 0-48-21.5-48-48v-24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48zm80-48v-24c0-13.3 10.7-24 24-24h48c13.3 0 24 10.7 24 24v24c0 26.5-21.5 48-48 48s-48-21.5-48-48z"/>
    </svg>`;
}

function getReportsIcon(color = 'currentColor') {
    return `<svg class="nav-icon-svg" width="18" height="18" viewBox="0 0 48 48" fill="none" stroke="${color}" stroke-width="4">
        <g fill="none" stroke="${color}" stroke-width="4">
            <path d="M13.117 5h.886c4.666.69 5.931 3.338 9.997 3.338S29.331 5.69 33.998 5h.502a9.5 9.5 0 0 1 9.5 9.5v.626c0 2.903-3.09 6.217-4 9.357c-.965 3.334-1.626 6.06-1.82 8.911C37.725 40.075 35.447 43 33 43c-3.654 0-6.898-14.975-8.937-14.975C22.023 28.025 17.978 43 15 43c-1.817 0-4.17-1.075-5.054-9.606C9.594 30 9 27.941 8 24.483c-.88-3.04-3.848-6.672-4-9.932A9.127 9.127 0 0 1 13.117 5Z" clip-rule="evenodd"/>
            <path stroke-linecap="round" d="m15.482 12.463l16.519 5.326m-16.519 0l16.519-5.326"/>
        </g>
    </svg>`;
}

function getConfigurationIcon(color = 'currentColor') {
    return `<svg class="nav-icon-svg" width="18" height="18" viewBox="0 0 48 48" fill="${color}">
        <g fill="${color}">
            <path fill-rule="evenodd" d="M7.59 10.165c4.362-4.812 9.73-5.841 15.91-1.031c0 0 9.716-6.702 16.078 0c4.12 4.341 2.14 8.877.233 13.242c-1.036 2.373-2.05 4.696-2.05 6.91c-.483.846-4.652 1.296-9.663 1.433l-12.65 4.554l-.4-1.73l7.748-2.79a134.21 134.21 0 0 1-5.42-.174l-2.78 1.001l-.03-.13a1.987 1.987 0 0 1 .042-1.06c-3.027-.256-5.17-.634-5.383-1.104c0-2.564-.855-5.232-1.685-7.82c-1.368-4.263-2.665-8.307.05-11.301Zm14.682.547c.055.043.112.083.17.12l6.46 4.712a1 1 0 1 0 1.178-1.616l-4.833-3.526c.215-.126.481-.275.79-.435c.923-.478 2.194-1.04 3.62-1.41c2.866-.746 5.996-.653 8.47 1.954c1.29 1.359 1.764 2.636 1.856 3.864c.097 1.296-.22 2.701-.807 4.303c-.29.794-.632 1.598-.998 2.438c-.063.148-.128.296-.194.446l-.001.003c-.302.69-.615 1.408-.9 2.117c-.54 1.342-1.047 2.815-1.24 4.34a6.952 6.952 0 0 1-.088.02c-.715.165-1.752.311-3.053.427c-2.585.23-5.97.321-9.373.29c-3.402-.03-6.765-.183-9.302-.43c-1.208-.116-2.18-.25-2.865-.39c-.139-1.51-.487-2.988-.882-4.375c-.257-.904-.544-1.8-.818-2.652l-.013-.043c-.272-.848-.53-1.65-.755-2.435c-.954-3.331-1.012-5.393.378-6.926c1.963-2.166 3.969-3.281 5.984-3.476c2.006-.194 4.397.486 7.216 2.68Zm14.205 17.105s-.01.007-.037.02a.284.284 0 0 1 .037-.02Zm-26.072-.08l.006.002l-.006-.003Z" clip-rule="evenodd"/>
            <path d="M33.095 32.92L16.3 38.966l-.4-1.73l17.585-6.33c.008.177-.008.36-.05.544l-.34 1.47Zm-16.082 7.915l15.547-5.597l-.471 2.044l-13.05 4.698a3 3 0 0 1-2.026-1.145ZM31.554 39.6L24.889 42h3.724a3 3 0 0 0 2.924-2.325l.017-.074Z"/>
        </g>
    </svg>`;
}

function getLogoutIcon(color = 'currentColor') {
    return `<svg class="nav-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
        <polyline points="16 17 21 12 16 7"/>
        <line x1="21" y1="12" x2="9" y2="12"/>
    </svg>`;
}

function getSunIcon(color = 'currentColor') {
    return `<svg class="theme-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>`;
}

function getMoonIcon(color = 'currentColor') {
    return `<svg class="theme-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>`;
}

function getMenuIcon(color = 'currentColor') {
    return `<svg class="sidebar-toggle-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>`;
}

/**
 * Creates a sidebar element
 * @param {Object} options - Configuration options
 * @param {Object} options.user - Current user data
 * @param {string} options.activeItem - Currently active menu item
 * @param {boolean} options.collapsible - Whether sidebar is collapsible (default: true)
 * @returns {HTMLElement} Sidebar element
 */
export function createSidebar(options = {}) {
    const { user, activeItem = 'home', collapsible = true } = options;

    // Create sidebar container
    const sidebar = document.createElement('aside');
    sidebar.className = 'sidebar';
    sidebar.id = 'main-sidebar';

    // Create sidebar HTML structure
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <div class="logo-container">
                <img src="logo-maxident.PNG" alt="Maxi Dent" class="sidebar-logo">
                <span class="logo-text">MaxiDent</span>
            </div>
            ${collapsible ? `<button class="sidebar-toggle" id="sidebar-toggle">${getMenuIcon()}</button>` : ''}
        </div>
        
        <div class="sidebar-content">
            <div class="user-section">
                <div class="user-avatar">
                    <span class="avatar-text">${getInitials(user?.username || 'Usuario')}</span>
                </div>
            </div>
            
            <nav class="sidebar-nav">
                <ul class="nav-menu">
                    <li class="nav-item ${activeItem === 'home' ? 'active' : ''}">
                        <a href="home.html" class="nav-link" data-tooltip="Inicio">
                            <span class="nav-icon">${getHomeIcon()}</span>
                            <span class="nav-text">Inicio</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'pacientes' ? 'active' : ''}">
                        <a href="pacientes.html" class="nav-link" data-tooltip="Pacientes">
                            <span class="nav-icon">${getPacientsIcon()}</span>
                            <span class="nav-text">Pacientes</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'doctoras' ? 'active' : ''}">
                        <a href="doctors.html" class="nav-link" data-tooltip="Doctores">
                            <span class="nav-icon">${getDoctorIcon()}</span>
                            <span class="nav-text">Doctores</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'citas' ? 'active' : ''}">
                        <a href="citas.html" class="nav-link" data-tooltip="Citas">
                            <span class="nav-icon">${getAppointmentIcon()}</span>
                            <span class="nav-text">Citas</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'reportes' ? 'active' : ''}">
                        <a href="reportes.html" class="nav-link" data-tooltip="Reportes">
                            <span class="nav-icon">${getReportsIcon()}</span>
                            <span class="nav-text">Reportes</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'configuracion' ? 'active' : ''}">
                        <a href="configuracion.html" class="nav-link" data-tooltip="Configuración">
                            <span class="nav-icon">${getConfigurationIcon()}</span>
                            <span class="nav-text">Configuración</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        
        <div class="sidebar-footer">
            <div class="theme-toggle-container">
                <button class="theme-toggle-btn" id="theme-toggle-btn" title="Cambiar tema">
                    <span class="theme-icon theme-light">${getSunIcon()}</span>
                    <span class="theme-icon theme-dark">${getMoonIcon()}</span>
                </button>
            </div>
            <button class="logout-btn" id="sidebar-logout">
                <span class="nav-icon">${getLogoutIcon()}</span>
                <span class="nav-text">Cerrar Sesión</span>
            </button>
        </div>
    `;

    // Setup event listeners
    setupEventListeners(sidebar, collapsible);

    // Initialize icon colors after a short delay to ensure theme is applied
    setTimeout(() => {
        updateSidebarIconColors();
    }, 150);

    return sidebar;
}

/**
 * Sets up event listeners for the sidebar
 * @param {HTMLElement} sidebar - Sidebar element
 * @param {boolean} collapsible - Whether sidebar is collapsible
 */
function setupEventListeners(sidebar, collapsible) {
    // Toggle sidebar collapse
    if (collapsible) {
        const toggleBtn = sidebar.querySelector('#sidebar-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                sidebar.classList.toggle('collapsed');

                // Save collapsed state to localStorage
                const isCollapsed = sidebar.classList.contains('collapsed');
                localStorage.setItem('sidebar_collapsed', isCollapsed);

                // Emit event to sync layout with sidebar state
                window.dispatchEvent(new CustomEvent('sidebarToggle', {
                    detail: { collapsed: isCollapsed }
                }));
            });
        }
    }

    // Handle navigation clicks
    const navLinks = sidebar.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Handle special cases (like logout)
            if (link.href.includes('#') && link.textContent.includes('Cerrar Sesión')) {
                e.preventDefault();
                return;
            }

            // Update active state
            navLinks.forEach(l => l.parentElement.classList.remove('active'));
            link.parentElement.classList.add('active');
        });
    });

    // Handle logout button
    const logoutBtn = sidebar.querySelector('#sidebar-logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleLogout();
        });
    }

    // Handle theme toggle button
    const themeToggleBtn = sidebar.querySelector('#theme-toggle-btn');
    if (themeToggleBtn) {
        updateThemeToggleButton(themeToggleBtn);
        // Actualizar colores iniciales de los íconos
        setTimeout(() => updateSidebarIconColors(), 100);

        themeToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            import('../utils/theme.js').then(module => {
                module.toggleTheme();
                updateThemeToggleButton(themeToggleBtn);
            }).catch(error => {
                console.error('Error al cambiar tema:', error);
            });
        });

        // Listen for theme changes
        window.addEventListener('themechange', () => {
            updateThemeToggleButton(themeToggleBtn);
            updateSidebarIconColors();
        });
    }

    // Restore collapsed state
    if (collapsible) {
        const savedCollapsed = localStorage.getItem('sidebar_collapsed') === 'true';
        if (savedCollapsed) {
            sidebar.classList.add('collapsed');
            // Emit initial state for listeners on page load
            window.dispatchEvent(new CustomEvent('sidebarToggle', {
                detail: { collapsed: true }
            }));
        }
    }
}

/**
 * Handles user logout
 */
function handleLogout() {
    if (confirm('¿Está seguro de que desea cerrar sesión?')) {
        import('../utils/session.js').then(module => {
            module.clearSession();
            window.location.href = '/login.html';
        }).catch(error => {
            console.error('Error during logout:', error);
            // Fallback: clear localStorage manually
            localStorage.clear();
            window.location.href = '/login.html';
        });
    }
}

/**
 * Gets user initials from username
 * @param {string} username - Username
 * @returns {string} User initials
 */
function getInitials(username) {
    if (!username) return 'U';

    const parts = username.split(' ');
    if (parts.length >= 2) {
        return parts[0][0].toUpperCase() + parts[1][0].toUpperCase();
    }
    return username.substring(0, 2).toUpperCase();
}

/**
 * Gets display text for user role
 * @param {string} role - User role
 * @returns {string} Display text for role
 */
function getRoleDisplay(role) {
    const roleMap = {
        'admin': 'Administrador',
        'doctor': 'Doctor',
        'assistant': 'Asistente',
        'receptionist': 'Recepcionista'
    };

    return roleMap[role] || role || 'Usuario';
}

/**
 * Updates sidebar active item
 * @param {HTMLElement} sidebar - Sidebar element
 * @param {string} activeItem - New active item
 */
export function updateSidebarActiveItem(sidebar, activeItem) {
    if (!sidebar) return;

    const navItems = sidebar.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');

        const link = item.querySelector('.nav-link');
        if (link && link.href.includes(activeItem)) {
            item.classList.add('active');
        }
    });
}

/**
 * Refreshes sidebar user information
 * @param {HTMLElement} sidebar - Sidebar element
 * @param {Object} user - Updated user data
 */
export function refreshSidebarUser(sidebar, user) {
    if (!sidebar || !user) return;

    const userNameElement = sidebar.querySelector('.user-name');
    const userRoleElement = sidebar.querySelector('.user-role');
    const userAvatarElement = sidebar.querySelector('.avatar-text');

    if (userNameElement) {
        userNameElement.textContent = user.username || 'Usuario';
    }

    if (userRoleElement) {
        userRoleElement.textContent = getRoleDisplay(user.role) || 'Usuario';
    }

    if (userAvatarElement) {
        userAvatarElement.textContent = getInitials(user.username || 'Usuario');
    }
}

/**
 * Updates theme toggle button appearance
 * @param {HTMLElement} button - Theme toggle button
 */
function updateThemeToggleButton(button) {
    import('../utils/theme.js').then(module => {
        const isDark = module.isDark();
        const lightIcon = button.querySelector('.theme-light');
        const darkIcon = button.querySelector('.theme-dark');

        if (lightIcon && darkIcon) {
            lightIcon.style.display = isDark ? 'none' : 'inline';
            darkIcon.style.display = isDark ? 'inline' : 'none';
            button.setAttribute('title', isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro');
        }

        // Actualizar colores de los íconos SVG en el sidebar
        updateSidebarIconColors();
    }).catch(error => {
        console.error('Error al actualizar botón de tema:', error);
    });
}

/**
 * Updates all sidebar SVG icon colors based on current theme
 */
function updateSidebarIconColors() {
    import('../utils/theme.js').then(module => {
        const isDark = module.isDark();
        const sidebar = document.getElementById('main-sidebar');
        if (!sidebar) return;

        const navLinks = sidebar.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const iconSvg = link.querySelector('.nav-icon-svg');
            if (iconSvg) {
                const isActive = link.parentElement.classList.contains('active');
                const color = isActive ?
                    getComputedStyle(document.documentElement).getPropertyValue('--color-sidebar-text-active').trim() || '#ffffff' :
                    getComputedStyle(document.documentElement).getPropertyValue('--color-sidebar-text').trim() || '#ecf0f1';

                iconSvg.style.fill = color;
                iconSvg.style.stroke = color;
            }
        });

        // Actualizar íconos del botón de tema
        const themeButton = sidebar.querySelector('#theme-toggle-btn');
        if (themeButton) {
            const themeIcons = themeButton.querySelectorAll('.theme-icon-svg');
            themeIcons.forEach(icon => {
                const color = getComputedStyle(document.documentElement).getPropertyValue('--color-sidebar-text').trim() || '#ecf0f1';
                icon.style.stroke = color;
            });
        }

        // Actualizar ícono de logout
        const logoutButton = sidebar.querySelector('#sidebar-logout');
        if (logoutButton) {
            const logoutIcon = logoutButton.querySelector('.nav-icon-svg');
            if (logoutIcon) {
                const color = getComputedStyle(document.documentElement).getPropertyValue('--color-error').trim() || '#e74c3c';
                logoutIcon.style.stroke = color;
            }
        }

        // Actualizar ícono del botón de menú
        const menuButton = sidebar.querySelector('#sidebar-toggle');
        if (menuButton) {
            const menuIcon = menuButton.querySelector('.sidebar-toggle-svg');
            if (menuIcon) {
                const color = getComputedStyle(document.documentElement).getPropertyValue('--color-sidebar-text').trim() || '#ecf0f1';
                menuIcon.style.stroke = color;
            }
        }
    }).catch(error => {
        console.error('Error al actualizar colores de íconos:', error);
    });
}
