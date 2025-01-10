import type { StorybookConfig } from '@storybook/html-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
  docs:{
    autodocs: true,
  },
  webpackFinal: async (config) => {
    // Add TypeScript loader
    if(config.module && config.module.rules){
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
        exclude: /node_modules/,
      });
    }
    // Extend file resolution for SCSS
    if (config.resolve && config.resolve.extensions) {
      config.resolve.extensions.push('.ts', '.tsx', '.css', '.scss');
    }
      
    return config;
  },
  
};

export default config;
