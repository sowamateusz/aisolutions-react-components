import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'password', 'email'],
      control: { type: 'inline-radio' },
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    variant: {
      options: ['default', 'outlined', 'filled'],
      control: { type: 'inline-radio' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',
    value: '',
    placeholder: 'Enter text here',
    variant: 'default',
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={setValue} />;
  },
};
