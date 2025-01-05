import React from 'react';
import clsx from 'clsx';
import BlogTagsItem, { BlogTagsItemProps } from './TagsItem';

export interface BlogTagsProps {
  tags: BlogTagsItemProps[];
  className?: string;
}

const BlogTags = React.memo(({ tags, className }: BlogTagsProps) => {
  return (
    <div className={clsx('space-x-2', className)}>
      {tags.map((tag, index) => (
        <BlogTagsItem key={index} tag={tag.tag} />
      ))}
    </div>
  );
});

export default BlogTags;
