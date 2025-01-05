import type { Meta, StoryObj } from '@storybook/react';
import BlogTags, { BlogTagsProps } from '../../components/Blog/Tags';
import { sampleTags } from '../data';

const meta: Meta<BlogTagsProps> = {
  title: 'Blog/BlogTags',
  component: BlogTags,
  argTypes: {
    tags: {
      control: 'object',
      description: 'Tablica tagów do wyświetlenia',
      table: {
        type: { summary: 'BlogTagsItemProps[]' },
        defaultValue: { summary: '[]' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<BlogTagsProps>;

export const Default: Story = {
  args: {
    tags: sampleTags,
    className: 'my-custom-class',
  },
};
