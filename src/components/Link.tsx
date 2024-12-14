import React from 'react';

import '../styles.css';
import clsx from 'clsx';

export enum LinkVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export interface LinkProps {
  text: string;
  href: string;
  target?: string;
  variant?: LinkVariant;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  text,
  href,
  target = '_self',
  variant = LinkVariant.Primary,
  className,
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
    >
      {text}
    </a>
  );
};

export default Link;
