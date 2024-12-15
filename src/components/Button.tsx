import React, { useCallback } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  id?: string;
  label: string;
  disabled?: boolean;
  variant?: ButtonVariant;
  className?: string;
  onClick: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'font-medium bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
};

const Button: React.FC<ButtonProps> = React.memo(
  ({
    id,
    label,
    disabled = false,
    variant = 'primary',
    className,
    onClick,
  }) => {
    const handleClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled) {
          onClick();
        }
      },
      [onClick, disabled]
    );

    return (
      <HeadlessButton
        id={id}
        type="button"
        className={clsx(
          'rounded-lg px-3 py-2 focus:outline-none flex items-center justify-center',
          variantClasses[variant],
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
        onClick={handleClick}
        disabled={disabled}
        aria-disabled={disabled}
      >
        {label}
      </HeadlessButton>
    );
  }
);

export default Button;
