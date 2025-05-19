'use client';
import React, { forwardRef, useContext } from 'react';

import { Table as MuiTable, TableContainer, TableHead } from '@mui/material';
import TBody from './TBody';
import THeader from './THeader';
import TableContext from './context';

const NTable = forwardRef<HTMLDivElement>((props, ref) => {
  const { height, showHeader } = useContext(TableContext);

  return (
    <TableContainer ref={ref} sx={{ height }}>
      <MuiTable stickyHeader sx={{ tableLayout: 'fixed' }}>
        {showHeader && (
          <TableHead>
            <THeader />
          </TableHead>
        )}
        <TBody />
      </MuiTable>
    </TableContainer>
  );
});

export default NTable;
