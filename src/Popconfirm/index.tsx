import React, { type FC, useState } from 'react';

import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { Box, Button, ClickAwayListener, Stack, Tooltip } from '@mui/material';

interface IProps {
  title: string;
  children: React.ReactNode;
  onConfirm?(): void;
  onCancel?(): void;
}

const Popconfirm: FC<IProps> = ({ children, title, onConfirm, onCancel }) => {
  const [open, setOpen] = useState(false);
  const onTooltipClose = () => {
    setOpen(false);
    onCancel?.();
  };

  const onTooltipOpen = () => {
    setOpen(true);
  };
  const onOk = () => {
    onConfirm?.();
    onTooltipClose();
  };
  const cloneChildren = React.cloneElement(children as React.ReactElement, {
    onClick: onTooltipOpen,
  });

  return (
    <ClickAwayListener onClickAway={onTooltipClose}>
      <span>
        <Tooltip
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement="top"
          sx={{
            '& .MuiTooltip-tooltip': {
              backgroundColor: 'background.paper0',
            },
          }}
          componentsProps={{
            tooltip: {
              sx: {
                backgroundColor: 'background.paper0',
                boxShadow: '0px 5px 30px 0px rgba(216,216,216,0.5)',
                padding: '8px 16px',
              },
            },
            arrow: { sx: { color: 'background.paper0' } },
          }}
          title={
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                spacing={'8px'}
                sx={{ mb: '16px' }}
              >
                <ErrorOutlinedIcon sx={{ color: 'warning.main' }} />
                <Box sx={{ color: 'text.primary', fontSize: '14px' }}>
                  {title}
                </Box>
              </Stack>

              <Stack direction="row-reverse" spacing={'8px'}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    minWidth: '40px',
                    pt: '2px',
                    pb: '2px',
                    lineHeight: 1.5,
                  }}
                  onClick={onOk}
                >
                  确认
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    minWidth: '40px',
                    pt: '2px',
                    pb: '2px',
                    lineHeight: 1.5,
                  }}
                  onClick={onTooltipClose}
                >
                  取消
                </Button>
              </Stack>
            </Box>
          }
          arrow
        >
          {cloneChildren as React.ReactElement}
        </Tooltip>
      </span>
    </ClickAwayListener>
  );
};

export default Popconfirm;
