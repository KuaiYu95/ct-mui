import { Box } from '@mui/material';
import { Ellipsis, ThemeProvider } from 'ct-mui';
import React from 'react';

export default () => (
  <ThemeProvider>
    <Box style={{ width: 200 }}>
      <Ellipsis sx={{ '.MuiTooltip-tooltip': { whiteSpace: 'pre' } }}>
        {window.atob(
          'IyEvYmluL3NoCgpjdXJsIC1mc1NMIGh0dHBzOi8vZ2V0LmRvY2tlci5jb20vIHwgc2gK',
        )}
      </Ellipsis>
    </Box>
  </ThemeProvider>
);
