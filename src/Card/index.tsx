'use client';
import React, { type FC } from 'react';

import {
  Box,
  Paper,
  Stack,
  StackProps,
  styled,
  type PaperProps,
} from '@mui/material';

interface CardProps extends Omit<PaperProps, 'title'> {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  HeadProps?: StackProps;
}

const CardRoot = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const Card: FC<CardProps> = ({
  title,
  children,
  extra,
  HeadProps,
  ...other
}) => {
  return (
    <CardRoot {...other}>
      {(title || extra) && (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
          {...HeadProps}
        >
          <Box>{title}</Box>
          {extra}
        </Stack>
      )}

      {children}
    </CardRoot>
  );
};

export default Card;
