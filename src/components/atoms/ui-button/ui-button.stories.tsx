import type { Meta, StoryObj } from '@storybook/html';

const meta: Meta = {
  title: 'Atoms/Button',
  component: 'ui-button',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'Click Me',
    },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    size: "small",
    theme: "primary",
    disabled: false,
    text: 'Primary Button',
  },
  render: (args) =>
    `<ui-button size="${args.size}" theme="${args.theme}" ${
      args.disabled ? 'disabled' : ''
    }>${args.text}</ui-button>`,
};

export const Secondary: Story = {
  args: {
    size: 'medium',
    theme: 'secondary',
    disabled: false,
    text: 'Secondary Button',
  },
  render: (args) =>
    `<ui-button size="${args.size}" theme="${args.theme}" ${
      args.disabled ? 'disabled' : ''
    }>${args.text}</ui-button>`,
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    theme: 'primary',
    disabled: true,
    text: 'Disabled Button',
  },
  render: (args) =>
    `<ui-button size="${args.size}" theme="${args.theme}" ${
      args.disabled ? 'disabled' : ''
    }>${args.text}</ui-button>`,
};
