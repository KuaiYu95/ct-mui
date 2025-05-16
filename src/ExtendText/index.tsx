import React, { type FC, useEffect, useRef, useState } from 'react';

import { Box, type SxProps } from '@mui/material';

interface ExtendTextProps {
  children: React.ReactNode;
  sx?: SxProps;
}

const ExtendText: FC<ExtendTextProps> = (props) => {
  const { children, sx = {} } = props;
  const content = useRef<HTMLSpanElement>(null);
  const [isSet, setIsSet] = useState<boolean>(false);
  const [ellipsis, setEllipsis] = useState<boolean>(true);

  //判断文字内容是否超出div宽度
  const onResize = () => {
    if (content.current) {
      setEllipsis(
        (content.current.parentNode! as HTMLDivElement).offsetWidth <
          content.current.offsetWidth + 30,
      );
      setIsSet(true);
    }
  };

  const onMore = () => {
    setEllipsis(false);
  };

  useEffect(() => {
    onResize();
  }, [children]);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: ellipsis ? 'hidden' : 'inherit',
        textOverflow: ellipsis ? 'ellipsis' : 'initial',
        whiteSpace: ellipsis ? 'nowrap' : 'normal',
        pr: '30px',
        ...sx,
      }}
    >
      <Box
        ref={content}
        component="span"
        sx={{ maxWidth: '100%', wordBreak: 'break-all' }}
      >
        {children as React.ReactElement}
      </Box>
      {ellipsis && (
        <Box
          component="span"
          sx={{
            position: 'absolute',
            right: 0,
            color: 'primary.main',
            cursor: 'pointer',
            fontSize: '13px',
            opacity: isSet ? 1 : 0,
          }}
          onClick={onMore}
        >
          展开
        </Box>
      )}
    </Box>
  );
};

export default ExtendText;
