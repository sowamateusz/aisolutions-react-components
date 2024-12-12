import React, { useState } from 'react';
import Input, { InputType } from './Input';
import Button, { ButtonVariant } from './Button';

export interface SimpleSearchFormProps {
  onSubmit: (data: { query: string }) => void;
}

const SimpleSearchForm: React.FC<SimpleSearchFormProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ query });
  };

  const handleButtonClick = () =>
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <div>
        <Input
          value={query}
          onChange={setQuery}
          placeholder="Search query"
          type={InputType.Text}
          className="w-96"
        />
      </div>

      <div className="flex gap-2">
        <Button label="Search" onClick={handleButtonClick} />
        <Button
          label="Reset"
          variant={ButtonVariant.Secondary}
          onClick={() => setQuery('')}
        />
      </div>
    </form>
  );
};

export default SimpleSearchForm;
