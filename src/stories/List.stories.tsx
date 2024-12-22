// src/stories/List.stories.tsx

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import List, { ListItem, ListProps } from '../components/List';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of list items',
      table: {
        type: { summary: 'ListItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

const Template: Story = {
  render: (args: ListProps) => <List {...args} />,
};

const sampleItems: ListItem[] = [
  {
    id: 1,
    title: 'First Item',
    subtitle: 'This is the first item in the list.',
    date: '2023-10-01',
    image: 'https://via.placeholder.com/150',
    itemPath: '/items/1',
  },
  {
    id: 2,
    title: 'Second Item',
    subtitle: 'This is the second item.',
    date: '2023-10-05',
    // Brak image i itemPath
  },
  {
    id: 3,
    title: 'Third Item',
    // Brak subtitle, date
    image: 'https://via.placeholder.com/150',
    itemPath: '/items/3',
  },
  {
    id: 4,
    title: 'Fourth Item',
    subtitle: 'This is the fourth item with all properties.',
    date: '2023-10-10',
    image: 'https://via.placeholder.com/150',
    itemPath: '/items/4',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    className: '',
  },
};

export const WithNoImages: Story = {
  args: {
    items: sampleItems.map(({ image, ...rest }) => rest),
    className: '',
  },
};

export const WithNoLinks: Story = {
  args: {
    items: sampleItems.map(({ itemPath, ...rest }) => rest),
    className: '',
  },
};

export const CustomClassName: Story = {
  args: {
    items: sampleItems,
    className: 'bg-gray-100',
  },
};
