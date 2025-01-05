import React from 'react';
import clsx from 'clsx';

export type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: HeadingElement;
}

const Heading: React.FC<TextProps> = React.memo(
  ({ children, className, as = 'h1', ...rest }) => {
    const Component = as;
    return (
      <Component className={clsx(className)} {...rest}>
        {children}
      </Component>
    );
  }
);

export default Heading;
