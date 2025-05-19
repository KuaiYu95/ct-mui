'use client';
import { createContext } from 'react';

import { type TableProps } from './type';

interface TableContextProps<T> extends TableProps<T> {
  rowKey: string;
}

const TableContext = createContext<TableContextProps<Record<PropertyKey, any>>>(
  {
    columns: [],
    dataSource: [],
    rowKey: 'key',
  },
);

export default TableContext;
