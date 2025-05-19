'use client';
import { styled, TableCell, TableCellProps } from '@mui/material';
import React from 'react';

interface TCellRootProps {
  ownerState?: {
    size?: 'small' | 'medium' | 'large';
  };
}

interface TCellProps extends Omit<TableCellProps, 'size'> {
  size?: 'small' | 'medium' | 'large';
}

const TCellRoot = styled(TableCell)<TCellRootProps>(({ theme, ownerState }) => {
  return {
    ...(ownerState?.size === 'large' && {
      padding: theme.spacing(2),
    }),
    ...(ownerState?.size === 'medium' && {
      padding: theme.spacing(1.5),
    }),
    ...(ownerState?.size === 'small' && {
      padding: theme.spacing(1),
    }),
  };
});

const TCell: React.FC<TCellProps> = (props) => {
  const { size, ...rest } = props;
  const ownerState = {
    size,
  };
  return <TCellRoot ownerState={ownerState} {...rest} />;
};

export default TCell;
