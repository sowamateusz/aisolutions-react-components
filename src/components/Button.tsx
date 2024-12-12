import React from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import '../styles.css';
import clsx from 'clsx';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface ButtonProps {
  label: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  variant = ButtonVariant.Primary,
  className,
  onClick,
}) => {
  const variantStyles =
    variant === 'secondary'
      ? 'bg-gray-500 text-white'
      : 'bg-blue-500 text-white';
  return (
    <HeadlessButton
      className={clsx(
        'px-4 py-2 rounded font-medium focus:outline-none',
        variantStyles,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </HeadlessButton>
  );
};

export default Button;
