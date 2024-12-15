import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Forms/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Primary',
    onClick: () => alert('Clicked!'),
    variant: 'primary',
    disabled: false,
  },
};
