import React, { useMemo } from 'react';
import Button from './Button';
import clsx from 'clsx';
import Select from './Select';

export interface PaginationProps {
  limit: number;
  currentPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
}

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ limit, currentPage, totalItems, onPageChange, onLimitChange }) => {
    const totalPages = useMemo(
      () => Math.ceil(totalItems / limit),
      [totalItems, limit]
    );
    const pageNumbers = useMemo(() => {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }, [totalPages]);

    const handlePrev = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };

    const handleLimitChange = (page: number | string) => {
      onLimitChange(Number(page));
    };

    return (
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <span className="mr-2">Items per page:</span>
          <Select
            value={limit}
            options={[
              { value: 5, label: '5' },
              { value: 10, label: '10' },
              { value: 20, label: '20' },
              { value: 50, label: '50' },
            ]}
            onChange={handleLimitChange}
            className="border border-gray-300 rounded px-2 py-1"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Button
            label="Prev"
            onClick={handlePrev}
            disabled={currentPage === 1}
            variant="secondary"
          />

          {pageNumbers.map((page) => (
            <Button
              key={page}
              label={page.toString()}
              onClick={() => onPageChange(page)}
              variant={page === currentPage ? 'primary' : 'secondary'}
              className={clsx(page === currentPage && 'font-bold')}
            />
          ))}

          <Button
            label="Next"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            variant="secondary"
          />
        </div>
      </div>
    );
  }
);

export default Pagination;
