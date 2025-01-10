// .storybook/preview.ts

import { defineCustomElements } from '../dist/loader'; // Make sure this path points to the compiled loader

// Ensure Stencil components are registered
defineCustomElements(window); // Ensures custom elements are properly defined for Storybook

// Optionally, you can add global decorators for Storybook
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    source: {
      state: 'open', // Automatically open the source code in the docs tab
    },
  },
  controls: {
    expanded: true, // Make the controls panel more accessible
  },
};

