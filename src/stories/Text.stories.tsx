import type { Meta, StoryObj } from '@storybook/react';
import Text from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Text/Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the text component',
      defaultValue: 'This is a primary text.',
    },
    as: {
      options: ['p', 'span'],
      control: { type: 'select' },
      description: 'Specifies the HTML element to render',
      defaultValue: 'p',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    as: 'p',
    children: 'This is a primary text.',
  },
};
