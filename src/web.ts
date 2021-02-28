import { WebPlugin } from '@capacitor/core';

import type { CookiesPlugin } from './definitions';

export class CookiesWeb extends WebPlugin implements CookiesPlugin {
  async clear() {
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