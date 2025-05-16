import React, { cloneElement, useState, type FC } from 'react';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SxProps
} from '@mui/material';

interface Item {
  label: React.ReactNode;
  icon?: React.ReactNode;
  extra?: React.ReactNode;
  selected?: boolean;
  show?: boolean;
  textSx?: SxProps;
  key: number | string;
  onClick?: () => void;
}

interface MenuSelectProps {
  list: Item[];
  children?: React.ReactNode;
  context?: React.ReactElement;
  trigger?: 'hover' | 'click';
  type?: 'button' | 'icon';
}

const MenuSelect: FC<MenuSelectProps> = ({
  list,
  children,
  context,
  type = 'button',
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {context && cloneElement(context, { onClick: handleClick })}
      {children && (
        <>
          {type === 'button' && (
            <Button
              size="small"
              component="div"
              onClick={handleClick}
              endIcon={
                <ArrowBackIosNewIcon
                  sx={{
                    transform: 'rotate(-90deg)',
                    fontSize: '14px !important',
                  }}
                />
              }
            >
              {children}
            </Button>
          )}
          {type === 'icon' && (
            <IconButton size="small" onClick={handleClick}>
              {children}
            </IconButton>
          )}
        </>
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {list.map((item) => {
          if (item.show === false) return null;
          if (typeof item.label === 'object') {
            return item.label;
          } else {
            return (
              <MenuItem
                key={item.key}
                onClick={item.onClick}
                selected={item.selected}
              >
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText sx={item.textSx}>{item.label}</ListItemText>
                {item.extra}
              </MenuItem>
            );
          }
        })}
      </Menu>
    </>
  );
};

export default MenuSelect;
