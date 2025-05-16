import React, { useContext, forwardRef } from 'react';

import { Table as MuiTable, TableContainer, TableHead } from '@mui/material';
import TableContext from './context';
import THeader from './THeader';
import TBody from './TBody';

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
