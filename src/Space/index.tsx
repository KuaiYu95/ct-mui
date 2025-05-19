'use client';
import { Box, SxProps } from '@mui/material';
import React from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;
export type SpaceSize = SizeType | number;
export type SpaceProps = {
  size?: SpaceSize | [SpaceSize, SpaceSize];
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  direction?: 'horizontal' | 'vertical';
  wrap?: boolean;
  className?: string;
  sx?: SxProps;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Space = ({
  children = null,
  direction = 'horizontal',
  align,
  justify,
  className = '',
  size = 'middle',
  wrap = false,
  sx = {},
  onClick,
}: SpaceProps) => {
  const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
  };
  const justifyEnum = {
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    center: 'center',
  };

  function getNumberSize(size: SpaceSize) {
    return typeof size === 'string' ? spaceSize[size] : size || 0;
  }

  const [horizontalSize, verticalSize] = React.useMemo(
    () =>
      (
        (Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]
      ).map((item) => getNumberSize(item)),
    [size],
  );

  const internal_sx: SxProps = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: justify === undefined ? 'flex-start' : justifyEnum[justify],
    alignItems:
      align === undefined && direction === 'horizontal' ? 'center' : align,
  };

  if (direction === 'vertical') internal_sx.flexDirection = 'column';
  else if (wrap) internal_sx.flexWrap = 'wrap';

  internal_sx.columnGap = `${horizontalSize}px`;
  internal_sx.rowGap = `${verticalSize}px`;

  return (
    <Box
      sx={{ ...internal_sx, ...sx }}
      className={className}
      onClick={onClick && onClick}
    >
      {children}
    </Box>
  );
};

export default Space;
