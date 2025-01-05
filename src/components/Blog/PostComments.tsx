import React from 'react';
import clsx from 'clsx';
import BlogListItem, { BlogPostCommentsItemProps } from './PostCommentsItem';
import Heading from '../Heading';
import BlogPostCommentsForm from './PostCommentsForm';

export interface BlogPostCommentsProps {
  comments: BlogPostCommentsItemProps[];
  className?: string;
}

const BlogPostComments = React.memo(
  ({ comments, className }: BlogPostCommentsProps) => {
    return (
      <div className={clsx('flex flex-col gap-4', className)}>
        <Heading as="h3" className="text-2xl mt-8">
          Comments
        </Heading>
        <div className={clsx('space-y-4 mb-4')}>
          {comments.map((comment, index) => (
            <BlogListItem
              key={index}
              comment={comment.comment}
              author={comment.author}
              date={comment.date}
            />
          ))}
        </div>
        <BlogPostCommentsForm onSubmit={console.log} />
      </div>
    );
  }
);

export default BlogPostComments;
