import { Button } from '@mui/material';
import { Popconfirm, ThemeProvider } from 'ct-mui';
import React from 'react';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Popconfirm title="确认删除吗">
        <Button variant="contained">Open Popconfirm</Button>
      </Popconfirm>
    </ThemeProvider>
  );
};

export default App;
