import React from 'react';
import clsx from 'clsx';
import Text from '../Text';
import Heading from '../Heading';

export interface BlogListItemProps {
  title: string;
  content: string;
  author: string;
  date: Date;
}

const BlogListItem = React.memo(
  ({ title, content, author, date }: BlogListItemProps) => {
    return (
      <div
        className={clsx(
          'flex gap-2 flex-row p-4 border rounded w-full justify-between'
        )}
      >
        <div className="flex flex-col gap-2">
          <Heading as="h2" className="text-2xl font-normal">
            {title}
          </Heading>
          <Text className="text-lg font-light">{content}</Text>
          <Text className="text-xs text-gray-700">
            Written by {author} on {date.toLocaleDateString()}
          </Text>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="w-24 h-24 object-cover"
          />
        </div>
      </div>
    );
  }
);

export default BlogListItem;
