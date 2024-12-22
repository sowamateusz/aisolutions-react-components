import React from 'react';
import clsx from 'clsx';

export interface ListItem {
  id: string | number;
  title: string;
  subtitle?: string;
  date?: string;
  image?: string;
  itemPath?: string;
}

export interface ListProps {
  items: ListItem[];
  className?: string;
}

const List: React.FC<ListProps> = React.memo(({ items, className }) => {
  return (
    <ul className={clsx('space-y-4', className)}>
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-start p-4 bg-white shadow rounded-lg"
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded mr-4"
            />
          )}
          <div className="flex-1">
            {item.itemPath ? (
              <a href={item.itemPath} className="block">
                <h3 className="text-lg font-semibold text-blue-600 hover:underline">
                  {item.title}
                </h3>
              </a>
            ) : (
              <h3 className="text-lg font-semibold">{item.title}</h3>
            )}
            {item.subtitle && <p className="text-gray-600">{item.subtitle}</p>}
            {item.date && (
              <p className="text-sm text-gray-500">
                {new Date(item.date).toLocaleDateString()}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
});

export default List;
