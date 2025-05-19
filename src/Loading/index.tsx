'use client';
import React, { type FC } from 'react';

import { Box, CircularProgress, type SxProps } from '@mui/material';

interface LoadingProps {
  loading?: boolean;
  children?: React.ReactNode;
  sx?: SxProps;
}
const Loading: FC<LoadingProps> = (props) => {
  const { loading, children, sx } = props;
  return (
    <Box sx={{ position: 'relative', ...sx }}>
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 999,
          }}
        >
          <CircularProgress
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              ml: '-20px',
              mt: '-20px',
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          position: 'relative',
          transition: 'opacity .3s',
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 10,
            width: '100%',
            height: ' 100%',
            background: '#000',
            opacity: loading ? 0.4 : 0,
            transition: 'all .3s',
            pointerEvents: loading ? 'auto' : 'none',
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Loading;
