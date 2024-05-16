/**
 * Routes that are available publicly and does not require authentication.
 * @type {string[]}
 */
export const publicRoutes = ["/"];

/**
 * Routes that are used for authentication
 * These will redirect logged in users to the /settings page.
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * API endpoint that provides authentication.
 * @type {string}
 */
export const authApiPrefix = "/auth/api";

/**
 * Default redirect for logged in user.
 * @type {string}
 */
export const DEFAULT_REDIRECT_URL = "/settings";
