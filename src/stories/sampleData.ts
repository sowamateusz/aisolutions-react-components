import { BlogListProps } from '../components/Blog/List';
import { BlogPostCommentsProps } from '../components/Blog/PostComments';
import { BlogTagsProps } from '../components/Blog/Tags';

export const samplePosts: BlogListProps['posts'] = [
  {
    title: 'Introduction to React',
    content: 'React is a JavaScript library for building user interfaces...',
    author: 'John Smith',
    date: new Date('2023-01-15'),
  },
  {
    title: 'Advanced Techniques in JavaScript',
    content: 'JavaScript offers many advanced features, such as...',
    author: 'John Smith',
    date: new Date('2023-03-22'),
  },
  {
    title: 'Comprehensive Guide to TypeScript',
    content:
      'TypeScript is a superset of JavaScript that adds static typing and many other features...',
    author: 'John Smith',
    date: new Date('2023-05-20'),
  },
];

export const sampleComments: BlogPostCommentsProps['comments'] = [
  {
    comment: 'This is a great post! Thanks for sharing.',
    author: 'Jane Doe',
    date: new Date('2023-06-15'),
  },
  {
    comment:
      'I found this very helpful. Looking forward to more content like this.',
    author: 'John Smith',
    date: new Date('2023-07-20'),
  },
  {
    comment: 'Can you provide more details on the topic?',
    author: 'Alice Johnson',
    date: new Date('2023-08-05'),
  },
];

export const sampleTags: BlogTagsProps['tags'] = [
  { tag: 'React' },
  { tag: 'JavaScript' },
  { tag: 'CSS' },
  { tag: 'TypeScript' },
  { tag: 'Storybook' },
];
