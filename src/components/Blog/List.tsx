import React from 'react';
import clsx from 'clsx';
import BlogListItem, { BlogListItemProps } from './ListItem';

export interface BlogListProps {
  posts: BlogListItemProps[];
  className?: string;
}

const BlogList = React.memo(({ posts, className }: BlogListProps) => {
  return (
    <div className={clsx('space-y-2', className)}>
      {posts.map((post, index) => (
        <BlogListItem
          key={index}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
});

export default BlogList;
