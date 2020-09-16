declare module '@capacitor/core' {
  interface PluginRegistry {
    Cookies: CookiesPlugin;
  }
}

export interface CookiesPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  clear(options: HttpClearCookiesOptions): Promise<void>;
}

export interface HttpClearCookiesOptions {
  url: string;
}
