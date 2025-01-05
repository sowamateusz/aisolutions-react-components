import React, { useState } from 'react';
import clsx from 'clsx';
import Button from '../Button';
import Textarea from '../Textarea';

export interface BlogPostCommentsFormProps {
  onSubmit: (data: { comment: string }) => void;
  className?: string;
}

const BlogPostCommentsForm = React.memo(
  ({ onSubmit, className }: BlogPostCommentsFormProps) => {
    const [comment, setComment] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ comment });
    };

    const handleButtonClick = () =>
      handleSubmit({ preventDefault: () => {} } as React.FormEvent);

    return (
      <form
        onSubmit={handleSubmit}
        className={clsx('flex flex-col gap-1', className)}
      >
        <Textarea
          value={comment}
          onChange={setComment}
          placeholder="Your comment..."
          rows={2}
          className="w-full"
        />
        <div className="flex gap-4">
          <Button
            label="Add comment"
            className="text-black text-sm px-0 bg-transparent hover:bg-transparent"
            onClick={handleButtonClick}
          />
          <Button
            label="Reset"
            variant="secondary"
            className="text-black text-sm px-0 bg-transparent hover:bg-transparent"
            onClick={() => setComment('')}
          />
        </div>
      </form>
    );
  }
);

export default BlogPostCommentsForm;
