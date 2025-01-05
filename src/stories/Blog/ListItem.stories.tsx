import type { Meta, StoryObj } from '@storybook/react';
import BlogListItem, {
  BlogListItemProps,
} from '../../components/Blog/ListItem';

const meta: Meta<typeof BlogListItem> = {
  title: 'Blog/BlogListItem',
  component: BlogListItem,
  argTypes: {
    title: {
      control: 'text',
      description: 'Post title',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    content: {
      control: 'text',
      description: 'Post content',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    author: {
      control: 'text',
      description: 'Post author',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    date: {
      control: 'date',
      description: 'Publication date',
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
          'The `BlogListItem` component represents a single blog post entry.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BlogListItemProps>;

export const Default: Story = {
  args: {
    title: 'Introduction to React',
    content: 'React is a JavaScript library for building user interfaces...',
    author: 'John Smith',
    date: new Date('2023-01-15'),
  },
};

export const LongContent: Story = {
  args: {
    title:
      'Comprehensive Guide to TypeScript for Beginners and Advanced Developers',
    content:
      'TypeScript is a superset of JavaScript that adds static typing and many other features...',
    author: 'John Smith',
    date: new Date('2023-05-20'),
  },
};
