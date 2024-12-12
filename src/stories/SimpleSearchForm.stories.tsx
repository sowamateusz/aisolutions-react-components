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
    onSubmit: (data) => alert(`Searching for: ${JSON.stringify(data.query)}`),
  },
};
