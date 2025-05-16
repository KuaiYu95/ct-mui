import { type SxProps, type CheckboxProps } from '@mui/material';

import { type PaginationProps } from '../Pagination';
export interface ColumnType<RecordType> {
  dataIndex: string;
  title: string | React.ReactNode;
  minWidth?: number;
  width?: number;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  defaultSortOrder?: 'asc' | 'desc';
  sorter?(order: 'asc' | 'desc', property: string): void;
  render?: (value: any, record: RecordType, index: number) => React.ReactNode;
}

export type ColumnsType<RecordType = unknown> = ColumnType<RecordType>[];

export type SelectedRowKeys = string[] | number[];
export interface Expandable {
  rowExpandable: (record: any) => boolean;
  expandedRowRender: (record: any, index?: number) => React.ReactNode;
}

export type SelectionSelectFn<T> = (
  record: T,
  selected: boolean,
  selectedRows: T[],
  nativeEvent: Event,
) => void;

export interface TableRowSelection<T> {
  preserveSelectedRowKeys?: boolean;
  selectedRowKeys?: React.Key[];
  defaultSelectedRowKeys?: React.Key[];
  onChange?: (selectedRowKeys: React.Key[], selectedRows: T[]) => void;
  getCheckboxProps?: (
    record: T,
  ) => Partial<Omit<CheckboxProps, 'checked' | 'defaultChecked'>>;
  onSelect?: SelectionSelectFn<T>;
  onSelectNone?: () => void;
  // selections?: INTERNAL_SELECTION_ITEM[] | boolean;
  hideSelectAll?: boolean;
  // fixed?: FixedType;
  columnWidth?: string | number;
  columnTitle?: string | React.ReactNode;
  checkStrictly?: boolean;
  renderCell?: (
    value: boolean,
    record: T,
    index: number,
    originNode: React.ReactNode,
  ) => React.ReactNode;
}

export interface TableProps<T> {
  showHeader?: boolean;
  height?: string;
  virtual?: boolean | 'auto';
  columns: ColumnsType<T>;
  dataSource: any;
  loading?: boolean;
  pagination?: PaginationProps | false;
  rowKey?: string;
  sx?: SxProps;
  defaultSort?: { sortOrder?: 'asc' | 'desc'; sortOrderBy: string };
  rowSelection?: TableRowSelection<T>;
  onChange?: (pagination: any, filters?: any, sorter?: any) => void;
  expandable?: Expandable;
  renderEmpty?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  updateScrollTop?: boolean;
  PaginationProps?: Partial<PaginationProps>;
}
