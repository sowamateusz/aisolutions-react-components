import React, { FC } from 'react';
import clsx from 'clsx';

export type TextElement =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: TextElement;
}

const Text: FC<TextProps> = React.memo(
  ({ children, className, as = 'p', ...rest }) => {
    const Component = as;
    return (
      <Component className={clsx(className)} {...rest}>
        {children}
      </Component>
    );
  }
);

export default Text;
