import { Preview } from '@storybook/html';
import '../src/global/styles.scss'; // Make sure the path is correct

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      inlineStories: true,
    },
  },
};

export default preview;
