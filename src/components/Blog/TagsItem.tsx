import React from 'react';
import clsx from 'clsx';
import Link from '../Link';

export interface BlogTagsItemProps {
  tag: string;
  href?: string;
  className?: string;
}

const BlogTagsItem = React.memo(({ tag, className }: BlogTagsItemProps) => {
  return (
    <Link
      href={'#' + tag}
      className={clsx(
        'px-2 py-1 text-sm text-black font-normal no-underline rounded-lg border-[1px] border-solid border-gray-700',
        className
      )}
    >
      {tag}
    </Link>
  );
});

export default BlogTagsItem;
