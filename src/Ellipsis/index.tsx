'use client';
import React, { useRef, useState, type FC } from 'react';

import {
  Box,
  BoxProps,
  Tooltip,
  styled,
  type TooltipProps,
} from '@mui/material';

interface EllipsisProps extends Omit<TooltipProps, 'children' | 'title'> {
  children: React.ReactNode;
  ellipsisProps?: BoxProps;
}

const EllipsisRoot = styled('div', {
  name: 'Ellipsis',
  slot: 'Root',
})(() => ({
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

const Ellipsis: FC<EllipsisProps> = (props) => {
  const { children, ellipsisProps, ...other } = props;
  const content = useRef<HTMLSpanElement>(null);
  const childrenRef = useRef<React.ReactNode>(null);
  const [ellipsis, setEllipsis] = useState<boolean>(false);

  //判断文字内容是否超出div宽度
  const onResize = () => {
    if (content.current && childrenRef.current !== children) {
      childrenRef.current = children;
      setEllipsis(
        (content.current.parentNode! as HTMLDivElement).offsetWidth <
          content.current.offsetWidth,
      );
    }
  };

  return (
    <Tooltip title={ellipsis ? children : null} {...other}>
      <EllipsisRoot>
        <Box
          ref={content}
          component="span"
          onMouseEnter={onResize}
          {...ellipsisProps}
        >
          {children}
        </Box>
      </EllipsisRoot>
    </Tooltip>
  );
};

export default Ellipsis;
