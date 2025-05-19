'use client';
import React, { type FC } from 'react';

import { Box } from '@mui/material';

import Popconfirm from '../Popconfirm';

interface Item {
  key: string;
  label: React.ReactNode;
  type?: 'error' | 'primary';
  popConfirmConfig?: {
    title: string;
    onConfirm?: () => void;
  };
  onClick?: () => void;
}

interface IProps {
  list: Item[];
}

const Operate: FC<IProps> = ({ list }) => {
  return (
    <>
      {list.map((item) => {
        const { type = 'primary', onClick, key, popConfirmConfig } = item;
        let Component = popConfirmConfig
          ? Popconfirm
          : ({ children }: { children: React.ReactNode }) => <>{children}</>;
        return (
          <Component
            key={key}
            title={popConfirmConfig?.title || ''}
            onConfirm={popConfirmConfig?.onConfirm}
          >
            <Box
              key={key}
              component="span"
              sx={{
                color: `${type}.main`,
                mr: '16px',
                cursor: 'pointer',
                '&:hover': {
                  color: type === 'primary' ? 'primary.200' : 'error.light',
                },
              }}
              onClick={onClick}
            >
              {item.label}
            </Box>
          </Component>
        );
      })}
    </>
  );
};

export default Operate;
