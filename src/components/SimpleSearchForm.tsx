import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
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
    <form onSubmit={handleSubmit} className={clsx('flex gap-2', className)}>
      <div>
        <Input
          value={query}
          onChange={setQuery}
          placeholder="Search query..."
          type="text"
          className="w-96"
        />
      </div>
      <div className="flex gap-2">
        <Button label="Search" onClick={handleButtonClick} />
        <Button
          label="Reset"
          variant="secondary"
          onClick={() => setQuery('')}
        />
      </div>
    </form>
  );
};

export default SimpleSearchForm;
