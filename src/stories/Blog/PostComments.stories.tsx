import type { Meta, StoryObj } from '@storybook/react';
import BlogPostComments, {
  BlogPostCommentsProps,
} from '../../components/Blog/PostComments';
import { sampleComments } from '../data';

const meta: Meta<typeof BlogPostComments> = {
  title: 'Blog/BlogPostComments',
  component: BlogPostComments,
  argTypes: {
    comments: {
      control: 'object',
      description: 'Array of comments',
      table: {
        type: { summary: 'BlogPostCommentsItemProps[]' },
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
        component:
          'The `BlogPostComments` component renders a list of comments for a blog post.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BlogPostCommentsProps>;

export const Default: Story = {
  args: {
    comments: sampleComments,
    className: '',
  },
};

export const WithCustomClass: Story = {
  args: {
    comments: sampleComments,
    className: 'bg-gray-100 p-6 rounded-lg',
  },
};
