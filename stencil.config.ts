import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'elementrix-ui',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',  // Update this to point to 'loader' inside 'dist'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: 'www',
      serviceWorker: null, // Disable service worker
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/styles.scss'], // Ensure this path is correct
    }),
  ],
};
