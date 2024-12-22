import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../components/Pagination';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    limit: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'Number of items displayed per page',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    currentPage: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'Currently active page',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    totalItems: {
      control: { type: 'number', min: 1, step: 1 },
      description: 'Total number of items to paginate',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    onPageChange: {
      action: 'page changed',
      description: 'Function triggered when the page changes',
    },
    onLimitChange: {
      action: 'limit changed',
      description: 'Function triggered when the limit changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    limit: 10,
    currentPage: 1,
    totalItems: 100,
    onPageChange: action('page changed'),
    onLimitChange: action('limit changed'),
  },
};

export const MiddlePage: Story = {
  args: {
    limit: 10,
    currentPage: 5,
    totalItems: 100,
    onPageChange: action('page changed'),
    onLimitChange: action('limit changed'),
  },
};

export const LastPage: Story = {
  args: {
    limit: 10,
    currentPage: 10,
    totalItems: 100,
    onPageChange: action('page changed'),
    onLimitChange: action('limit changed'),
  },
};

export const SinglePage: Story = {
  args: {
    limit: 10,
    currentPage: 1,
    totalItems: 5,
    onPageChange: action('page changed'),
    onLimitChange: action('limit changed'),
  },
};
