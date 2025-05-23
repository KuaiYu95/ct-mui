'use client';
import React, { useEffect, useState, type FC } from 'react';

import { Tab, Tabs, type SxProps } from '@mui/material';

interface ListItem {
  label: React.ReactNode;
  value: string | number;
  disabled?: boolean;
}

interface RadioButtonProps {
  list: ListItem[];
  defatValue?: ListItem['value'];
  onChange?(value: ListItem['value']): void;
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps;

  // 希望父组件控制
  change?(value: ListItem['value']): void;
  value?: ListItem['value'];
}

const CusTabs: FC<RadioButtonProps> = ({
  list,
  defatValue,
  onChange,
  change,
  sx,
  value: v,
}) => {
  const [value, setValue] = useState<string | number>(
    v || defatValue || list[0].value,
  );
  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    id: any,
  ) => {
    if (id !== null) {
      setValue(id);
      onChange?.(id);
    }
  };

  useEffect(() => {
    if (v) setValue(v);
  }, [v]);

  return (
    <Tabs
      value={value}
      onChange={
        change
          ? (event: React.SyntheticEvent<Element, Event>, value: any) =>
              change(value)
          : handleChange
      }
      sx={{
        display: 'inline-flex',
        p: '5px',
        border: '1px solid',
        borderColor: 'divider',
        minHeight: 36,
        height: 36,
        backgroundColor: 'background.paper',
        borderRadius: '4px',

        '.MuiTabs-indicator': {
          top: 0,
          bottom: 0,
          height: 'auto',
          borderRadius: '4px',
        },
        ...sx,
      }}
    >
      {list.map((item) => (
        <Tab
          sx={{
            zIndex: 1,
            p: '4px 12px',
            minHeight: 0,
            minWidth: 0,
            fontSize: '12px',
            '&.Mui-selected': {
              color: '#fff',
            },
          }}
          key={item.value}
          value={item.value}
          label={item.label}
          disabled={item.disabled}
        />
      ))}
    </Tabs>
  );
};

export default CusTabs;
