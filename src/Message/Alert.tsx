'use client';
import React, { useEffect, useRef, type FC } from 'react';

import { Alert as MAlert, type AlertColor } from '@mui/material';

interface AlertProps {
  duration?: number;
  onClose?(key: React.Key): void;
  noticeKey: React.Key;
  content?: React.ReactNode;
  severity: AlertColor;
  icon?: boolean;
}

const Alert: FC<AlertProps> = (props) => {
  const { duration, severity, content, noticeKey, onClose, icon } = props;
  const closeTimer = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const close = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) {
      e.stopPropagation();
    }
    clearCloseTimer();
    if (onClose) {
      onClose(noticeKey);
    }
  };

  const startCloseTimer = () => {
    if (duration) {
      closeTimer.current = window.setTimeout(() => {
        close();
      }, duration * 1000);
    }
  };

  useEffect(() => {
    startCloseTimer();
    return () => clearCloseTimer();
  }, []);

  const alertConfig = {
    severity,
    sx: { mb: '10px' },
  };
  // @ts-ignore
  if (icon === false) alertConfig.icon = false;
  return <MAlert {...alertConfig}>{content}</MAlert>;
};

export default Alert;
