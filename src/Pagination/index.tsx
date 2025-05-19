'use client';
import React, { useState } from 'react';

import {
  Box,
  MenuItem,
  Pagination as MuiPagination,
  Select,
  Stack,
  TextField,
  styled,
  type PaginationProps as MuiPaginationProps,
  type StackProps,
} from '@mui/material';
import useDefaultProps from '../hooks/useDefaultProps';

export interface PaginationProps extends Omit<StackProps, 'onChange'> {
  total: number;
  page: number;
  pageSize: number;
  pageSizeOptions?: number[];
  onChange?: (page: number, pageSize: number) => void;
  PaginationProps?: MuiPaginationProps;
  getLabelPerPage?(value: string | number): string;
  labelPages?: string;
  labelGoTo?: string;
}

const PaginationRoot = styled(Stack, {
  name: 'pagination',
  slot: 'root',
})(() => ({
  fontSize: '14px',
}));

const Pagination: React.FC<PaginationProps> = (inProps) => {
  const props = useDefaultProps(inProps, 'CuiPagination');
  const [push, setPush] = useState<string>('');
  const {
    total,
    page = 1,
    pageSize = 20,
    pageSizeOptions = [10, 20, 50, 100],
    onChange,
    PaginationProps,
    getLabelPerPage = (value) => `items per page, total ${value} items`,
    labelPages = 'pages',
    labelGoTo = 'Go to',
    ...other
  } = props;

  return (
    <PaginationRoot
      justifyContent="space-between"
      alignItems="center"
      direction="row"
      {...other}
    >
      <Box>
        <Select
          size="small"
          value={pageSize}
          onChange={(e) => props.onChange?.(1, e.target.value as number)}
        >
          {pageSizeOptions.map((size) => (
            <MenuItem value={size} key={size}>
              {size}
            </MenuItem>
          ))}
        </Select>
        <Box sx={{ ml: '12px', color: 'text.auxiliary' }} component="span">
          {getLabelPerPage(total)}
        </Box>
      </Box>
      <Stack alignItems="center" direction="row" spacing={'12px'}>
        <MuiPagination
          count={Math.ceil(total / pageSize)}
          page={page}
          onChange={(e, v) => onChange?.(v, pageSize)}
          color="primary"
          {...PaginationProps}
        />
        <Stack
          alignItems="center"
          direction="row"
          sx={{
            color: 'text.auxiliary',
          }}
        >
          <span className="pre-input-text">{labelGoTo}</span>
          <TextField
            autoComplete="off"
            value={push}
            size="small"
            onChange={(v) => setPush(v.target.value.replace(/[^0-9]/g, ''))}
            onKeyUp={(v) =>
              v.code === 'Enter' ? onChange?.(Number(push), pageSize) : null
            }
            sx={{
              width: '59px',
              margin: ' 0 8px',
              '& .MuiInputBase-root': {
                borderRadius: '8px',
              },
            }}
          />
          <span className="aft-input-text">
            / {Math.ceil(total / pageSize)} {labelPages}
          </span>
        </Stack>
      </Stack>
    </PaginationRoot>
  );
};

export default Pagination;
