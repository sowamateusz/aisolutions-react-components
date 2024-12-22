import React, { useCallback } from 'react';
import { Select as HeadlessSelect } from '@headlessui/react';
import clsx from 'clsx';

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface SelectProps {
  id?: string;
  value?: string | number;
  options: SelectOption[];
  onChange: (value: string | number) => void;
  disabled?: boolean;
  className?: string;
}

const Select: React.FC<SelectProps> = React.memo(
  ({ id, value, options, onChange, disabled = false, className }) => {
    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
      },
      [onChange]
    );

    return (
      <HeadlessSelect
        id={id}
        className={clsx('pr-2', className)}
        onChange={handleChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option value={option.value} selected={option.value === value}>
            {option.label}
          </option>
        ))}
      </HeadlessSelect>
    );
  }
);

export default Select;
