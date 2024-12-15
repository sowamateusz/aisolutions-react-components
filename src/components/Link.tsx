import React, { FC } from 'react';
import clsx from 'clsx';

export type LinkVariant = 'primary' | 'secondary';

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  variant?: LinkVariant;
  className?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const variantClasses: Record<LinkVariant, string> = {
  primary: 'text-blue-500 underline hover:text-blue-600',
  secondary: 'text-gray-700 underline hover:text-blue-500',
};

const Link: FC<LinkProps> = React.memo(
  ({
    children,
    href,
    target = '_self',
    variant = 'primary',
    className,
    rel,
    onClick,
    ...rest
  }) => {
    const isExternal = target === '_blank';
    return (
      <a
        href={href}
        target={target}
        rel={isExternal ? 'noopener noreferrer' : rel}
        className={clsx(
          'font-medium underline focus:outline-none transition-colors duration-200',
          variantClasses[variant],
          className
        )}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }
);

export default Link;
