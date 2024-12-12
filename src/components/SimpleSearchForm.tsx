import React, { useState } from 'react';
import Input, { InputType } from './Input';
import Button, { ButtonVariant } from './Button';
import clsx from 'clsx';

export interface SimpleSearchFormProps {
  onSubmit: (data: { query: string }) => void;
  className?: string;
}

const SimpleSearchForm: React.FC<SimpleSearchFormProps> = ({
  onSubmit,
  className,
}) => {
  const [query, setQuery] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ query });
  };

  const handleButtonClick = () =>
    handleSubmit({ preventDefault: () => {} } as React.FormEvent);

  return (
    <form onSubmit={handleSubmit} className={clsx('flex gap-4', className)}>
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
