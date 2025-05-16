import React, { forwardRef, useContext, useMemo, useRef } from 'react';

import {
  Table as MuiTable,
  Skeleton,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import TableContext from './context';

import TEmpty from './TEmpty';
import THeader from './THeader';

import {
  TableComponents,
  TableVirtuoso,
  TableVirtuosoHandle,
} from 'react-virtuoso';
import Row from './RowContent';
import TCell from './TCell';

const VTable = forwardRef<TableVirtuosoHandle>((props, ref) => {
  const { height, columns, dataSource, loading, size, showHeader } =
    useContext(TableContext);

  const data = useMemo(() => {
    if (loading) {
      return [...new Array(Math.min(dataSource.length || 0, 40) || 10).keys()];
    } else {
      if (dataSource.length === 0) {
        return [0];
      }
      return dataSource;
    }
  }, [loading, dataSource]);

  const VirtuosoTableComponents = useRef<TableComponents<any>>({
    Scroller: forwardRef<HTMLDivElement>((props, ref) => (
      <TableContainer {...props} ref={ref} />
    )),
    Table: (props: any) => (
      <MuiTable {...props} sx={{ tableLayout: 'fixed' }} />
    ),
    TableHead: forwardRef<HTMLTableSectionElement>((props, ref) => (
      <TableHead {...props} ref={ref} />
    )),
    TableRow,
    TableBody: forwardRef<HTMLTableSectionElement>((props, ref) =>
      dataSource.length === 0 && !loading ? (
        <TEmpty />
      ) : (
        <TableBody {...props} ref={ref} />
      ),
    ),
  });

  const rowContent = (_index: number, row: any) => {
    return loading ? (
      columns.map((column) => {
        return (
          <TCell
            key={column.dataIndex}
            size={size}
            sx={{ width: column.width, minWidth: column.minWidth }}
          >
            <Skeleton variant="text" />
          </TCell>
        );
      })
    ) : (
      <Row index={_index} row={row} />
    );
  };

  return (
    <TableVirtuoso
      style={{ height }}
      data={data}
      ref={ref}
      components={VirtuosoTableComponents.current}
      fixedHeaderContent={showHeader ? THeader : null}
      itemContent={rowContent}
    />
  );
});

export default VTable;
