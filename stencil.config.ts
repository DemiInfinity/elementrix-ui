import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';  // Ensure you have sass plugin

export const config: Config = {
  namespace: 'elementrix-ui',
  globalStyle: 'src/global/styles.scss',  // Ensure this path is correct
  plugins: [
    sass(),  // Enable SCSS support
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null, // Disable service workers
    },
  ],
};
