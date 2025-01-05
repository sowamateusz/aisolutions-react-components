import React from 'react';
import clsx from 'clsx';
import BlogPostComments from './PostComments';
import Heading from '../Heading';
import Text from '../Text';
import BlogTags from './Tags';
import { BlogPostCommentsItemProps } from './PostCommentsItem';
import { BlogTagsItemProps } from './TagsItem';

export interface BlogPostProps {
  title: string;
  content: string;
  author: string;
  date: Date;
  tags: BlogTagsItemProps[];
  comments: BlogPostCommentsItemProps[];
  className?: string;
}

const BlogPost = React.memo(
  ({
    title,
    content,
    author,
    date,
    tags,
    comments,
    className,
  }: BlogPostProps) => {
    return (
      <div className={clsx('flex flex-col gap-4 max-w-[645px]', className)}>
        <Heading as="h2" className="text-3xl font-normal">
          {title}
        </Heading>
        <div className="rounder-lg">
          <img
            src="https://via.placeholder.com/645x430"
            alt="Placeholder"
            className="rounder-lg"
          />
        </div>
        <Text className="text-xs text-gray-700">
          Written by {author} on {date.toLocaleDateString()}
        </Text>
        <Text className="text-lg font-light my-8">{content}</Text>
        <BlogTags tags={tags} />
        <BlogPostComments comments={comments} />
      </div>
    );
  }
);

export default BlogPost;
