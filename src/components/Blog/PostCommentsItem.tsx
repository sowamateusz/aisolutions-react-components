import React from 'react';
import clsx from 'clsx';
import Text from '../Text';

export interface BlogPostCommentsItemProps {
  comment: string;
  author: string;
  date: Date;
}

const BlogPostCommentsItem = React.memo(
  ({ comment, author, date }: BlogPostCommentsItemProps) => {
    return (
      <div className={clsx('flex flex-col gap-1')}>
        <Text className="text-md font-light">{comment}</Text>
        <Text className="text-xs text-gray-700">
          Written by {author} on {date.toLocaleDateString()}
        </Text>
      </div>
    );
  }
);

export default BlogPostCommentsItem;
