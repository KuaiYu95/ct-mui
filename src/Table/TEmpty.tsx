'use client';
import { TableRow } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import Empty from '../Empty';
import TCell from './TCell';
import TableContext from './context';

const TEmpty = () => {
  const { dataSource, columns, size, renderEmpty, loading } =
    useContext(TableContext);

  const empty = useMemo(() => {
    if (dataSource.length === 0 && !loading) {
      return (
        <TableRow className="cx-table-empty-row">
          <TCell
            colSpan={columns.length}
            className="cx-table-empty-td"
            size={size}
            sx={{ border: 'none' }}
          >
            {renderEmpty ? (
              renderEmpty
            ) : (
              <Empty
                className="cx-table-empty"
                sx={{
                  height: 200,
                  color: 'text.disabled',
                }}
              />
            )}
          </TCell>
        </TableRow>
      );
    }
    return null;
  }, [dataSource, loading, renderEmpty]);

  return <>{empty}</>;
};

export default TEmpty;
