import type { Meta, StoryObj } from '@storybook/react';
import Select, { SelectOption } from '../components/Select';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  argTypes: {
    id: {
      control: { type: 'text' },
      description: 'ID for the select element',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    options: {
      control: { type: 'object' },
      description: 'Array of options to select from',
      table: {
        type: { summary: 'SelectOption[]' },
        defaultValue: { summary: '[]' },
      },
    },
    value: {
      control: { type: 'text' },
      description: 'Currently selected value',
      table: {
        type: { summary: 'string | number | null' },
        defaultValue: { summary: 'null' },
      },
    },
    onChange: {
      action: 'value changed',
      description: 'Callback when the selected value changes',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the select',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const sampleOptions: SelectOption[] = [
  { value: 'active', label: 'Active' },
  { value: 'paused', label: 'Paused' },
  { value: 'delayed', label: 'Delayed' },
  { value: 'canceled', label: 'Canceled' },
  { value: 'completed', label: 'Completed' },
];

export const Default: Story = {
  args: {
    id: 'select-default',
    options: sampleOptions,
    value: 'active',
    onChange: action('value changed'),
    disabled: false,
    className: '',
  },
};

export const Disabled: Story = {
  args: {
    id: 'select-disabled',
    options: sampleOptions,
    value: 'active',
    onChange: action('value changed'),
    disabled: true,
    className: '',
  },
};

export const WithCustomClassName: Story = {
  args: {
    id: 'select-custom',
    options: sampleOptions,
    value: 'canceled',
    onChange: action('value changed'),
    disabled: false,
    className: 'w-full',
  },
};
