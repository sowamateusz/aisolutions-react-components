import React from 'react';
import { Input as HeadlessInput } from '@headlessui/react';
import clsx from 'clsx';

export enum InputVariant {
  Default = 'default',
}

export enum InputType {
  Text = 'text',
  Password = 'password',
  Email = 'email',
}

export interface InputProps {
  type: InputType;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  variant?: InputVariant;
  className?: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  type = InputType.Text,
  value,
  placeholder = 'Placeholder text',
  disabled,
  variant = InputVariant.Default,
  className,
  onChange,
}) => {
  const variantStyles = variant === 'default' ? '' : '';
  return (
    <HeadlessInput
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={clsx(
        'border border-gray-300 rounded px-4 py-2 ountline-none focus:outline-none',
        variantStyles,
        className
      )}
    />
  );
};

export default Input;
