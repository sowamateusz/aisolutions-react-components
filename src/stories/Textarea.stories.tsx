import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Textarea from '../components/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {
    variant: {
      options: ['default', 'outlined', 'filled'],
      control: { type: 'inline-radio' },
    },
    value: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    rows: {
      control: { type: 'number', min: 1, max: 20, step: 1 },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'Enter text here',
    variant: 'default',
    disabled: false,
    className: '',
    rows: 4,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Textarea {...args} value={value} onChange={setValue} />;
  },
};

export const Outlined: Story = {
  args: {
    value: '',
    placeholder: 'Enter text here',
    variant: 'outlined',
    disabled: false,
    className: '',
    rows: 4,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Textarea {...args} value={value} onChange={setValue} />;
  },
};

export const Filled: Story = {
  args: {
    value: '',
    placeholder: 'Enter text here',
    variant: 'filled',
    disabled: false,
    className: '',
    rows: 4,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Textarea {...args} value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = {
  args: {
    value: 'This textarea is disabled',
    placeholder: 'Cannot edit this',
    variant: 'default',
    disabled: true,
    className: '',
    rows: 4,
  },
  render: (args) => <Textarea {...args} />,
};
