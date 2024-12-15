import type { Meta, StoryObj } from '@storybook/react';
import Link from '../components/Link';

const meta: Meta<typeof Link> = {
  title: 'Text/Link',
  component: Link,
  argTypes: {
    children: {
      control: 'text',
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      control: {
        type: 'select',
        options: ['_self', '_blank', '_parent', '_top'],
      },
    },
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary'],
    },
    rel: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Visit Example.com',
    href: 'https://example.com',
    target: '_blank',
    variant: 'primary',
    rel: '',
    className: '',
  },
};
