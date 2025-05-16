import React, { type FC, useRef } from 'react';

import { Box } from '@mui/material';

import Ellipsis from '../Ellipsis';

interface MultipleEllipsisProps {
  children: React.ReactNode;
}

/** 感觉这个不用往里面写吧 */
const MultipleEllipsis: FC<MultipleEllipsisProps> = (props) => {
  const { children } = props;
  const content = useRef<HTMLSpanElement>(null);

  return (
    <Box
      ref={content}
      component="span"
      sx={{ maxWidth: '100%', display: 'flex' }}
    >
      {Array.isArray(children) &&
        children.map((d, index) => (
          <Ellipsis key={index} sx={{ width: 'auto' }}>
            {d}
          </Ellipsis>
        ))}
    </Box>
  );
};

export default MultipleEllipsis;
