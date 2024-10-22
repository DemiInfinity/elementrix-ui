module.exports = {
  stories: ['../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx|mjs))'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook',
    '@storybook/addon-mdx-gfm'
  ],

  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },

  webpackFinal: async (config) => {
    // Add Stencil loader
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    });

    return config;
  },

  docs: {}
};
