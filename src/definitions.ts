/**
 * Clears all cookies.
 * @since 1.0.0
 */
export interface CookiesPlugin {
  clear(): Promise<void>;
}

