import React, { useCallback } from 'react';
import { Input as HeadlessInput } from '@headlessui/react';
import clsx from 'clsx';

export type InputVariant = 'default' | 'outlined' | 'filled';
export type InputType = 'text' | 'password' | 'email';

interface InputProps {
  id?: string;
  type?: InputType;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  variant?: InputVariant;
  className?: string;
  onChange: (value: string) => void;
}

const variantClasses: Record<InputVariant, string> = {
  default: 'bg-white border border-gray-400',
  outlined: 'border-2 border-gray-300',
  filled: 'bg-gray-100 border border-gray-300',
};

const Input: React.FC<InputProps> = React.memo(
  ({
    id,
    type = 'text',
    value,
    placeholder = 'Enter text',
    disabled = false,
    variant = 'default',
    className,
    onChange,
  }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      },
      [onChange]
    );
    return (
      <HeadlessInput
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(
          'rounded-lg px-3 py-2 text-gray-700 placeholder:text-gray-400 border hover:border-gray-700 focus:border-gray-700 focus:outline-none disabled:bg-gray-200 disabled:cursor-not-allowed',
          variantClasses[variant],
          className
        )}
      />
    );
  }
);

export default Input;
