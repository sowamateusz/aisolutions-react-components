import type { Meta, StoryObj } from '@storybook/react';
import BlogPost from '../../components/Blog/Post';
import { sampleComments, sampleTags } from '../data';

const meta: Meta<typeof BlogPost> = {
  title: 'Blog/BlogPost',
  component: BlogPost,
};
export default meta;

type Story = StoryObj<typeof BlogPost>;

export const Default: Story = {
  args: {
    title: 'Comprehensive Guide to TypeScript',
    content:
      'TypeScript is a superset of JavaScript that adds static typing and many other features. It is widely used in modern web development projects.',
    author: 'John Smith',
    date: new Date(),
    comments: sampleComments,
    tags: sampleTags,
  },
};
