'use client';
import React, { type FC } from 'react';

import { styled, SvgIconProps } from '@mui/material';

interface IconProps extends SvgIconProps {
  type: string;
}

const IconRoot = styled('svg', {
  name: 'Icon',
  slot: 'Root',
})(() => ({
  width: '1em',
  height: '1em',
  fill: 'currentColor',
}));

const Icon: FC<IconProps> = ({ type, ...other }) => {
  return (
    <IconRoot {...other}>
      <use xlinkHref={`#${type}`} />
    </IconRoot>
  );
};
export default Icon;
