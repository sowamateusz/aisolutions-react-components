import type { Meta, StoryObj } from '@storybook/react';
import BlogList, { BlogListProps } from '../../components/Blog/List';
import { samplePosts } from '../sampleData';

const meta: Meta<typeof BlogList> = {
  title: 'Blog/BlogList',
  component: BlogList,
  argTypes: {
    posts: {
      control: 'object',
      description: 'Array of blog posts',
      table: {
        type: { summary: 'BlogListItemProps[]' },
        defaultValue: { summary: '[]' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'The `BlogList` component renders a list of blog posts.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BlogListProps>;

export const Default: Story = {
  args: {
    posts: samplePosts,
    className: '',
  },
};

export const WithCustomClass: Story = {
  args: {
    posts: samplePosts,
    className: 'bg-gray-100 p-6 rounded-lg',
  },
};
