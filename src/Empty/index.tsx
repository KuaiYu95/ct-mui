'use client';
import React, { type FC } from 'react';

import { Box, Stack, styled, type StackProps } from '@mui/material';
import useDefaultProps from '../hooks/useDefaultProps';
import DefaultEmptyImg from './empty';

export interface EmptyProps extends StackProps {
  image?: React.ReactNode;
  description?: React.ReactNode;
  imageStyle?: React.CSSProperties;
  labelEmpty?: string;
}

const EmptyRoot = styled(Stack)(() => ({
  height: '100%',
}));

const Empty: FC<EmptyProps> = (inProps) => {
  const props = useDefaultProps(inProps, 'CuiEmpty');
  const { labelEmpty, ...omitLabelEmptyProps } = props;
  const {
    image = <DefaultEmptyImg sx={{ fontSize: '100px' }} />,
    description = (
      <Box sx={{ color: 'text.auxiliary', fontSize: '14px' }}>{labelEmpty}</Box>
    ),
    imageStyle,
    className = '',
    ...other
  } = omitLabelEmptyProps;

  let imageNode: React.ReactNode = null;
  const alt = typeof description === 'string' ? description : 'empty';
  if (typeof image === 'string') {
    imageNode = (
      <Box component="img" alt={alt} src={image} style={imageStyle} />
    );
  } else {
    imageNode = image;
  }
  return (
    <EmptyRoot
      className={`${className} cx-empty`}
      direction="column"
      justifyContent="center"
      alignItems="center"
      {...other}
    >
      {imageNode}
      {description}
    </EmptyRoot>
  );
};

export default Empty;
