import React from 'react';

import '../styles.css';
import clsx from 'clsx';

export enum LinkVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface LinkProps {
  label: string;
  href: string;
  target?: string;
  variant?: LinkVariant;
  className?: string;
  onClick: () => void;
}

const Link: React.FC<LinkProps> = ({
  label,
  href,
  target = '_self',
  variant = LinkVariant.Primary,
  className,
  onClick,
}) => {
  const variantStyles =
    variant === 'secondary'
      ? 'text-gray-700 hover:text-blue-500 underline'
      : 'text-blue-500 underline';
  return (
    <a
      href={href}
      target={target}
      className={clsx(
        'font-medium focus:outline-none',
        variantStyles,
        className
      )}
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default Link;
