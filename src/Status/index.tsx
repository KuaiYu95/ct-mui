import React from 'react';

import { Box, styled, type BoxProps, alpha } from '@mui/material';

interface StatusProps extends BoxProps {
  children?: React.ReactNode;
  color: 'success' | 'error' | 'warning' | 'info' | string;
}

const StatusRoot = styled(Box)<StatusProps>(({ theme, color }) => {
  const textColor =
    color in theme.palette
      ? theme.palette[color as 'success' | 'error' | 'warning' | 'info'].main
      : color;
  const backgroundColor = alpha(textColor, 0.12);
  return {
    display: 'inline-flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    borderRadius: 12,
    backgroundColor,
    color: textColor,
    lineHeight: 2,
  };
});

const Status: React.FC<StatusProps> = ({ children, color, ...props }) => (
  <StatusRoot color={color} {...props}>
    {children}
  </StatusRoot>
);

export default Status;
