import type { StorybookConfig } from '@storybook/html-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    // Add TypeScript loader
    config.module?.rules?.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
          options: { transpileOnly: true },
        },
      ],
      exclude: /node_modules/,
    });
  
    // Add SCSS loader support
    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader', // Make sure SCSS is handled properly
      ],
    });
  
    // Extend file resolution for SCSS
    config.resolve?.extensions?.push('.ts', '.tsx', '.scss');
  
    return config;
  },
  
};

export default config;
