import sass from '@rollup/plugin-sass';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.js',
      format: 'esm',
    },
  ],
  plugins: [
    sass({
      insert: true,  // This inserts the styles directly into the HTML
    }),
  ],
};
