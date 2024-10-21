module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mjs|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/html',
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
};
