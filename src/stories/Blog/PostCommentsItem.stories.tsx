import type { Meta, StoryObj } from '@storybook/react';
import BlogPostCommentsItem, {
  BlogPostCommentsItemProps,
} from '../../components/Blog/PostCommentsItem';

const meta: Meta<typeof BlogPostCommentsItem> = {
  title: 'Blog/PostCommentsItem',
  component: BlogPostCommentsItem,
  argTypes: {
    comment: {
      control: 'text',
      description: 'Content of the comment',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    author: {
      control: 'text',
      description: 'Author of the comment',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    date: {
      control: 'date',
      description: 'Date of the comment',
      table: {
        type: { summary: 'Date' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The `BlogPostCommentsItem` component represents a single comment on a blog post.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BlogPostCommentsItemProps>;

const sampleComment: BlogPostCommentsItemProps = {
  comment: 'This is a great post! Thanks for sharing.',
  author: 'Jane Doe',
  date: new Date('2023-06-15'),
};

export const Default: Story = {
  args: sampleComment,
};

export const LongComment: Story = {
  args: {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'John Smith',
    date: new Date('2023-07-20'),
  },
};
