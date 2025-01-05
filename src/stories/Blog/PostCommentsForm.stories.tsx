import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BlogPostCommentsForm, {
  BlogPostCommentsFormProps,
} from '../../components/Blog/PostCommentsForm';

const meta: Meta<typeof BlogPostCommentsForm> = {
  title: 'Blog/BlogPostCommentsForm',
  component: BlogPostCommentsForm,
  argTypes: {
    onSubmit: {
      action: 'submitted',
      description: 'Callback function when the form is submitted',
      table: {
        type: { summary: '(data: { comment: string }) => void' },
        defaultValue: { summary: 'undefined' },
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
          'The `BlogPostCommentsForm` component provides a form for users to add new comments to a blog post.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BlogPostCommentsFormProps>;

export const Default: Story = {
  args: {
    onSubmit: action('submitted'),
    className: '',
  },
};

export const WithCustomClass: Story = {
  args: {
    onSubmit: action('submitted'),
    className: 'bg-white p-4 shadow-md rounded',
  },
};
