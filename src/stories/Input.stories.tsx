import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input, { InputType, InputVariant } from '../components/Input';

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
      options: ['default'],
      control: { type: 'inline-radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: InputType.Text,
    value: '',
    placeholder: 'Enter text here',
    variant: InputVariant.Default,
    disabled: false,
  },
  render: (args) => {
    const [value, setValue] = useState('');
    return <Input {...args} value={value} onChange={setValue} />;
  },
};
