import { registerPlugin } from '@capacitor/core';

import type { CookiesPlugin } from './definitions';

const Cookies = registerPlugin<CookiesPlugin>('Cookies', {
  web: () => import('./web').then(m => new m.CookiesWeb()),
});

export * from './definitions';
export { Cookies };