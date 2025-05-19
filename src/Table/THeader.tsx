'use client';
import { Checkbox, TableRow, TableSortLabel } from '@mui/material';
import React, { useContext, useMemo, useState } from 'react';
import TCell from './TCell';
import TableContext from './context';

const THeader = () => {
  const {
    defaultSort,
    rowKey,
    rowSelection,
    dataSource,
    expandable,
    loading,
    size,
    columns,
  } = useContext(TableContext);

  const [order, setOrder] = useState<'asc' | 'desc'>(
    defaultSort?.sortOrder ?? 'desc',
  );
  const [orderBy, setOrderBy] = useState(defaultSort?.sortOrderBy);
  const handleRequestSort = (
    property: string,
    defaultSortOrder: 'asc' | 'desc',
    callBack?: (order: 'asc' | 'desc', property: string) => void,
  ) => {
    if (orderBy === property) {
      let newOrder: 'desc' | 'asc' = order === 'asc' ? 'desc' : 'asc';
      setOrder(newOrder);
      callBack?.(newOrder, property);
    } else {
      setOrder(defaultSortOrder);
      setOrderBy(property);
      callBack?.(defaultSortOrder, property);
    }
  };

  const hasAllSelected = useMemo(() => {
    return rowSelection?.selectedRowKeys?.length === dataSource.length;
  }, [dataSource, rowSelection?.selectedRowKeys]);

  const indeterminate = useMemo(() => {
    return (
      !hasAllSelected &&
      rowSelection?.selectedRowKeys &&
      rowSelection?.selectedRowKeys?.length > 0
    );
  }, [hasAllSelected, rowSelection?.selectedRowKeys]);

  const hasExpandableCell = useMemo(() => {
    return dataSource.some((data: any) => {
      return expandable?.rowExpandable?.(data);
    });
  }, [dataSource, expandable]);

  const onSelectedAllRowKeysChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.checked) {
      const rowKeys = dataSource.map((data: any) => data[rowKey!]);
      rowSelection?.onChange?.(rowKeys, dataSource);
    } else {
      rowSelection?.onChange?.([], []);
    }
  };

  return (
    <TableRow>
      {hasExpandableCell && !loading && <TCell sx={{ width: 80 }} />}
      {rowSelection && !loading && dataSource.length !== 0 && (
        <TCell
          sx={{ width: 64, paddingInlineStart: 1 }}
          className="cx-selection-column"
          size={size}
        >
          <Checkbox
            size="small"
            sx={{ color: 'text.auxiliary' }}
            checked={hasAllSelected}
            indeterminate={indeterminate}
            onChange={onSelectedAllRowKeysChange}
          />
        </TCell>
      )}
      {columns.map((column) => (
        <TCell
          key={column.dataIndex}
          align={column.align || 'left'}
          sx={{ width: column.width, minWidth: column.minWidth }}
          size={size}
        >
          {column.sorter ? (
            <TableSortLabel
              active={orderBy === column.dataIndex}
              direction={
                orderBy === column.dataIndex
                  ? order
                  : column.defaultSortOrder || 'desc'
              }
              onClick={() => {
                handleRequestSort(
                  column.dataIndex,
                  column.defaultSortOrder || 'desc',
                  column.sorter,
                );
              }}
            >
              {column.title}
            </TableSortLabel>
          ) : (
            column.title
          )}
        </TCell>
      ))}
    </TableRow>
  );
};

export default THeader;
