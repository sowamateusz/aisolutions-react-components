import type { Meta, StoryObj } from '@storybook/react';
import BlogTagsItem, {
  BlogTagsItemProps,
} from '../../components/Blog/TagsItem';

const meta: Meta<typeof BlogTagsItem> = {
  title: 'Blog/BlogTagsItem',
  component: BlogTagsItem,
  argTypes: {
    tag: {
      control: 'text',
      description: 'Tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    href: {
      control: 'text',
      description: 'The URL to which the link points',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
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
          'The `BlogTagsItem` component represents a single tag as a link.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BlogTagsItemProps>;

export const Default: Story = {
  args: {
    tag: 'React',
    className: '',
    href: '#React',
  },
};

export const WithCustomClass: Story = {
  args: {
    tag: 'TypeScript',
    className: 'bg-blue-100 border-blue-100 text-blue-800 px-4 py-2 rounded',
    href: '#TypeScript',
  },
};
