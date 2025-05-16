import React, { type FC } from 'react';

import ErrorIcon from '@mui/icons-material/Error';
import { Box } from '@mui/material';

import ThemeProvider from '../ThemeProvider';

import Modal, { type ModalProps } from './Modal';

export interface ConfirmDialogProps extends ModalProps {
  content?: React.ReactNode;
  icon?: React.ReactNode;
}

const ConfirmDialog: FC<ConfirmDialogProps> = (props) => {
  const { title = '提示', content, width = 480, icon, ...rest } = props;
  return (
    <ThemeProvider>
      <Modal
        title={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              lineHeight: '22px',
              color: 'text.main',
              fontWeight: 500,
            }}
          >
            {icon ? (
              icon
            ) : (
              <ErrorIcon
                sx={{ color: '#FFBF00', mr: '16px', fontSize: '24px' }}
              />
            )}

            {title}
          </Box>
        }
        closable={false}
        keyboard={false}
        width={width}
        {...rest}
      >
        <Box sx={{ color: 'text.secondary', pl: '40px' }}>{content}</Box>
      </Modal>
    </ThemeProvider>
  );
};

export default ConfirmDialog;
