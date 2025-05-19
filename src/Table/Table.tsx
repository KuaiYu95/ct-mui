'use client';
import { styled } from '@mui/material';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { TableVirtuosoHandle } from 'react-virtuoso';
import TableContext from './context';

import Pagination from '../Pagination';
import NTable from './NTable';
import VTable from './VTable';
import type { TableProps } from './type';

interface TableWrapProps {
  ownerState: {
    height?: string;
    maxHeight?: string;
  };
}

type RefType = Partial<TableVirtuosoHandle> & Partial<HTMLDivElement>;

export type RefTable = <RecordType extends object = any>(
  props: React.PropsWithChildren<TableProps<RecordType>> & {
    ref?: RefType;
  },
) => React.ReactElement;

const TableWrap = styled('div', {
  name: 'MuiTableWrap',
  slot: 'Root',
})<TableWrapProps>(({ ownerState }) => ({
  height: ownerState?.height,
  maxHeight: ownerState?.maxHeight,
}));

type AnyObject = Record<PropertyKey, any>;

const InternalTable = <RecordType extends AnyObject = any>(
  props: TableProps<RecordType>,
  ref: React.MutableRefObject<RefType>,
) => {
  const {
    height,
    columns,
    dataSource,
    rowKey = 'key',
    pagination: paginationProps = false,
    loading,
    defaultSort,
    rowSelection,
    expandable,
    size = 'medium',
    onChange,
    renderEmpty,
    virtual = 'auto',
    showHeader = true,
    updateScrollTop = true,
    PaginationProps,
    ...other
  } = props;

  if (virtual === true && height === void 0) {
    console.error('virtual table need height');
  }

  const isVirtual = useMemo(() => {
    if (virtual === true && height) {
      return true;
    }
    if (virtual === 'auto' && height && dataSource.length > 100) {
      return true;
    }
    return false;
  }, [virtual, height, dataSource]);

  const wrapRef = useRef<RefType | null>(null);

  const tableHeight = useMemo(() => {
    return `calc(100% - ${
      paginationProps && dataSource.length !== 0 ? '54px' : '0px'
    })`;
  }, [paginationProps]);

  const onPaginationChange = (page: number, pageSize: number) => {
    onChange?.({ current: page, pageSize });
  };

  useEffect(() => {
    if (updateScrollTop) {
      wrapRef.current?.scrollTo?.({ top: 0, behavior: 'smooth' });
    }
  }, [dataSource, updateScrollTop]);

  const contextValue = {
    dataSource,
    columns,
    rowKey,
    loading,
    defaultSort,
    rowSelection,
    expandable,
    size,
    height: tableHeight,
    renderEmpty,
    showHeader,
    updateScrollTop,
  };

  useImperativeHandle(ref, () => wrapRef.current!);
  return (
    <TableContext.Provider value={contextValue}>
      <TableWrap {...other} ownerState={{ height }}>
        {isVirtual ? (
          <VTable ref={wrapRef as React.Ref<TableVirtuosoHandle>} />
        ) : (
          <NTable ref={wrapRef as React.Ref<HTMLDivElement>} />
        )}
        {paginationProps && dataSource.length !== 0 && (
          <Pagination
            onChange={onPaginationChange}
            {...paginationProps}
            sx={{ pt: 2 }}
            {...PaginationProps}
          />
        )}
      </TableWrap>
    </TableContext.Provider>
  );
};

// @ts-ignore
const Table = forwardRef(InternalTable) as unknown as RefTable;

export default Table;
