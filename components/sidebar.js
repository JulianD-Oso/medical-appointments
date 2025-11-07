/**
 * Sidebar Component
 * Reusable sidebar with navigation and user information
 */

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
                <span class="logo-text">Maxi Dent</span>
            </div>
            ${collapsible ? '<button class="sidebar-toggle" id="sidebar-toggle">☰</button>' : ''}
        </div>
        
        <div class="sidebar-content">
            <div class="user-section">
                <div class="user-avatar">
                    <span class="avatar-text">${getInitials(user?.username || 'Usuario')}</span>
                </div>
                <div class="user-info">
                    <span class="user-name">${user?.username || 'Usuario'}</span>
                    <span class="user-role">${getRoleDisplay(user?.role) || 'Usuario'}</span>
                </div>
            </div>
            
            <nav class="sidebar-nav">
                <ul class="nav-menu">
                    <li class="nav-item ${activeItem === 'home' ? 'active' : ''}">
                        <a href="home.html" class="nav-link">
                            <span class="nav-icon">🏠</span>
                            <span class="nav-text">Inicio</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'pacientes' ? 'active' : ''}">
                        <a href="pacientes.html" class="nav-link">
                            <span class="nav-icon">👥</span>
                            <span class="nav-text">Pacientes</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'doctoras' ? 'active' : ''}">
                        <a href="doctors.html" class="nav-link">
                            <span class="nav-icon">👩‍⚕️</span>
                            <span class="nav-text">Doctores</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'citas' ? 'active' : ''}">
                        <a href="#" class="nav-link">
                            <span class="nav-icon">📅</span>
                            <span class="nav-text">Citas</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'reportes' ? 'active' : ''}">
                        <a href="#" class="nav-link">
                            <span class="nav-icon">📊</span>
                            <span class="nav-text">Reportes</span>
                        </a>
                    </li>
                    <li class="nav-item ${activeItem === 'configuracion' ? 'active' : ''}">
                        <a href="#" class="nav-link">
                            <span class="nav-icon">⚙️</span>
                            <span class="nav-text">Configuración</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        
        <div class="sidebar-footer">
            <button class="logout-btn" id="sidebar-logout">
                <span class="nav-icon">🚪</span>
                <span class="nav-text">Cerrar Sesión</span>
            </button>
        </div>
    `;
    
    // Setup event listeners
    setupEventListeners(sidebar, collapsible);
    
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
    
    // Restore collapsed state
    if (collapsible) {
        const savedCollapsed = localStorage.getItem('sidebar_collapsed') === 'true';
        if (savedCollapsed) {
            sidebar.classList.add('collapsed');
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
            window.location.href = '/login';
        }).catch(error => {
            console.error('Error during logout:', error);
            // Fallback: clear localStorage manually
            localStorage.clear();
            window.location.href = '/login';
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