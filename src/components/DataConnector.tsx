import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ListItem } from './List';

export interface DataConnectorConfig {
  url: string;
  mapper: (data: any) => any[];
  debounceTime?: number;
}

export interface DataConnectorProps {
  config: DataConnectorConfig;
  children: React.ReactNode;
}

export interface DataConnectorContextValue {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  limit: number;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  items: ListItem[];
  isLoading: boolean;
}

const DataConnector: React.FC<DataConnectorProps> = ({ config, children }) => {
  const { url, mapper, debounceTime = 300 } = config;
  const [query, setQuery] = useState<string>('');
  const [debouncedQuery, setDebouncedQuery] = useState<string>('');
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [items, setItems] = useState<ListItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setDebouncedQuery(query);
      setPage(1);
    }, debounceTime);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query, debounceTime]);
  const fetchData = useCallback(async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    try {
      setIsLoading(true);
      const params = new URLSearchParams({
        query: debouncedQuery,
        limit: limit.toString(),
        page: page.toString(),
      });
      const response = await fetch(`${url}?${params}`, {
        signal: abortControllerRef.current.signal,
      });
      const data = await response.json();
      setTotal(data.total || 0);
      setItems(mapper(data.data));
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Error fetching data:', error);
        setItems([]);
        setTotal(0);
      }
    } finally {
      setIsLoading(false);
    }
  }, [url, debouncedQuery, limit, page, mapper]);

  useEffect(() => {
    fetchData();
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  const contextValue: DataConnectorContextValue = {
    query,
    setQuery,
    limit,
    setLimit,
    page,
    setPage,
    total,
    items,
    isLoading,
  };

  return (
    <DataConnectorContext.Provider value={contextValue}>
      {children}
    </DataConnectorContext.Provider>
  );
};

export const DataConnectorContext =
  React.createContext<DataConnectorContextValue | null>(null);
export default DataConnector;
