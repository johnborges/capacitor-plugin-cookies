import { WebPlugin } from '@capacitor/core';
import { CookiesPlugin, HttpClearCookiesOptions } from './definitions';

export class CookiesWeb extends WebPlugin implements CookiesPlugin {
  constructor() {
    super({
      name: 'Cookies',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async clear(_options: HttpClearCookiesOptions) {
    document.cookie
      .split(';')
      .forEach(
        c =>
          (document.cookie = c
            .replace(/^ +/, '')
            .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)),
      );
  }
}

const Cookies = new CookiesWeb();

export { Cookies };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Cookies);
