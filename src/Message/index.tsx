'use client';
import React from 'react';

import { type AlertColor } from '@mui/material';

import Notification from './Message';

type MessageStaticFunctions = Record<
  AlertColor,
  (context: React.ReactNode, duration?: number, icon?: boolean) => void
>;

const message = {} as MessageStaticFunctions;

let notification: any = null;

const commonOpen =
  (type: AlertColor) =>
  (content: React.ReactNode, duration: number = 3, icon: boolean = true) => {
    if (!notification) {
      Notification.newInstance({}, (n: any) => {
        notification = n;
      });
    }
    const notice = () => {
      if (!notification) {
        setTimeout(() => {
          notice();
        });
        return;
      }
      notification.notice({
        duration,
        severity: type,
        content,
        icon,
      });
    };
    notice();
  };

(['success', 'warning', 'info', 'error'] as const).forEach((type) => {
  message[type] = commonOpen(type);
});

export default message;
