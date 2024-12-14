import type { Meta, StoryObj } from '@storybook/react';
import Link, { LinkVariant } from '../components/Link';

const meta: Meta<typeof Link> = {
  title: 'Text/Link',
  component: Link,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      control: { type: 'text' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'inline-radio' },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    label: 'Primary',
    href: 'https://example.com',
    target: '_blank',
    variant: LinkVariant.Primary,
  },
};
