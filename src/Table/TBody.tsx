'use client';
import { Skeleton, TableBody, TableRow } from '@mui/material';
import React, { useContext } from 'react';
import RowContent from './RowContent';
import TCell from './TCell';
import TableContext from './context';

import TEmpty from './TEmpty';

const TBody = () => {
  const { loading, dataSource, columns, size, rowKey } =
    useContext(TableContext);

  return (
    <TableBody>
      {loading &&
        // @ts-ignore
        [...new Array(Math.min(dataSource.length || 0, 40) || 10).keys()].map(
          (item) => (
            <TableRow key={`${item}_skeleton`}>
              {columns.map((column) => {
                return (
                  <TCell
                    key={column.dataIndex}
                    size={size}
                    sx={{ width: column.width, minWidth: column.minWidth }}
                  >
                    <Skeleton key={column.dataIndex} variant="text" />
                  </TCell>
                );
              })}
            </TableRow>
          ),
        )}
      {!loading &&
        dataSource.map((data: any, index: number) => {
          const key = data[rowKey!] ?? index;
          return (
            <TableRow key={key}>
              <RowContent index={index} row={data} />
            </TableRow>
          );
        })}

      <TEmpty />
    </TableBody>
  );
};

export default TBody;
