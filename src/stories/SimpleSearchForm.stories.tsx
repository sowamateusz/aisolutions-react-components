import type { Meta, StoryObj } from '@storybook/react';
import SimpleSearchForm from '../components/SimpleSearchForm';

const meta: Meta<typeof SimpleSearchForm> = {
  title: 'Components/SimpleSearchForm',
  component: SimpleSearchForm,
};
export default meta;

type Story = StoryObj<typeof SimpleSearchForm>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      if (data && data.query && data.query.length > 0) {
        alert(`Searching for: ${data.query}`);
      }
    },
  },
};
