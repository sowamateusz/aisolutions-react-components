import React, { useCallback } from 'react';
import { Textarea as HeadlessTextarea } from '@headlessui/react';
import clsx from 'clsx';

export type TextareaVariant = 'default' | 'outlined' | 'filled';

interface TextareaProps {
  id?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  variant?: TextareaVariant;
  className?: string;
  onChange: (value: string) => void;
  rows?: number;
}

const variantClasses: Record<TextareaVariant, string> = {
  default: 'bg-white border border-gray-400',
  outlined: 'border-2 border-gray-300',
  filled: 'bg-gray-100 border border-gray-300',
};

const Textarea: React.FC<TextareaProps> = React.memo(
  ({
    id,
    value,
    placeholder = 'Enter text',
    disabled = false,
    variant = 'default',
    className,
    onChange,
    rows = 4,
  }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <HeadlessTextarea
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={clsx(
          'rounded-lg px-3 py-2 text-gray-700 placeholder:text-gray-400 border resize-none hover:border-gray-700 focus:border-gray-700 focus:outline-none disabled:bg-gray-200 disabled:cursor-not-allowed',
          variantClasses[variant],
          className
        )}
      />
    );
  }
);

export default Textarea;
