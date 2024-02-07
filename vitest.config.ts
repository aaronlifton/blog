/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
 test: {
    browser: {
      enabled: true,
      name: 'chrome', // browser name is required
    },
  }
});
