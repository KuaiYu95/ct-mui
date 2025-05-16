import React, { type FC } from 'react';

import { Box, styled, Stack, type StackProps } from '@mui/material';
import DefaultEmptyImg from './empty';

interface EmptyProps extends StackProps {
  image?: React.ReactNode;
  description?: React.ReactNode;
  imageStyle?: React.CSSProperties;
}

const EmptyRoot = styled(Stack)(() => ({
  height: '100%',
}));

const Empty: FC<EmptyProps> = (props) => {
  const {
    image = <DefaultEmptyImg sx={{ fontSize: '100px' }} />,
    description = (
      <Box sx={{ color: 'text.auxiliary', fontSize: '14px' }}>暂无数据</Box>
    ),
    imageStyle,
    className = '',
    ...other
  } = props;

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
