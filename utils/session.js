/**
 * Session Management Module
 * Handles user authentication state and session storage
 */

const SESSION_KEY = 'maxident_session';
const SESSION_EXPIRY_KEY = 'maxident_session_expiry';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Saves user session to localStorage
 * @param {Object} userData - User data object from API response
 * @param {string} userData.token - Authentication token
 * @param {Object} userData.user - User information
 * @param {string} userData.user.id - User ID
 * @param {string} userData.user.username - Username
 * @param {string} userData.user.role - User role
 */
export function saveSession(userData) {
    try {
        const sessionData = {
            token: userData.token,
            user: userData.user,
            loginTime: new Date().toISOString()
        };
        
        localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
        localStorage.setItem(SESSION_EXPIRY_KEY, Date.now() + SESSION_DURATION);
        
        return true;
    } catch (error) {
        console.error('Error saving session:', error);
        return false;
    }
}

/**
 * Validates if current session is valid
 * @returns {boolean} True if session is valid, false otherwise
 */
export function validateSession() {
    try {
        const sessionData = localStorage.getItem(SESSION_KEY);
        const expiryTime = localStorage.getItem(SESSION_EXPIRY_KEY);
        
        if (!sessionData || !expiryTime) {
            return false;
        }
        
        // Check if session has expired
        if (Date.now() > parseInt(expiryTime)) {
            clearSession();
            return false;
        }
        
        // Validate session data structure
        const parsedSession = JSON.parse(sessionData);
        if (!parsedSession.token || !parsedSession.user) {
            return false;
        }
        
        return true;
    } catch (error) {
        console.error('Error validating session:', error);
        return false;
    }
}

/**
 * Clears session data from localStorage
 */
export function clearSession() {
    try {
        localStorage.removeItem(SESSION_KEY);
        localStorage.removeItem(SESSION_EXPIRY_KEY);
        return true;
    } catch (error) {
        console.error('Error clearing session:', error);
        return false;
    }
}

/**
 * Gets current session data
 * @returns {Object|null} Session data or null if not valid
 */
export function getSession() {
    try {
        if (!validateSession()) {
            return null;
        }
        
        const sessionData = localStorage.getItem(SESSION_KEY);
        return JSON.parse(sessionData);
    } catch (error) {
        console.error('Error getting session:', error);
        return null;
    }
}

/**
 * Checks if user is authenticated
 * @returns {boolean} True if user is authenticated, false otherwise
 */
export function isAuthenticated() {
    return validateSession();
}

/**
 * Gets authentication token
 * @returns {string|null} Authentication token or null
 */
export function getToken() {
    const session = getSession();
    return session ? session.token : null;
}

/**
 * Gets current user data
 * @returns {Object|null} User data or null
 */
export function getCurrentUser() {
    const session = getSession();
    return session ? session.user : null;
}

/**
 * Redirects to login page if not authenticated
 * @param {string} redirectUrl - URL to redirect after login (optional)
 */
export function requireAuth(redirectUrl = null) {
    if (!isAuthenticated()) {
        const loginUrl = redirectUrl ? `/login.html?redirect=${encodeURIComponent(redirectUrl)}` : '/login.html';
        window.location.href = loginUrl;
        return false;
    }
    return true;
}

/**
 * Extends session expiry time
 * @returns {boolean} True if successful, false otherwise
 */
export function extendSession() {
    try {
        if (!validateSession()) {
            return false;
        }
        
        localStorage.setItem(SESSION_EXPIRY_KEY, Date.now() + SESSION_DURATION);
        return true;
    } catch (error) {
        console.error('Error extending session:', error);
        return false;
    }
}