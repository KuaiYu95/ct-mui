import React from 'react';

import { type AlertColor } from '@mui/material';

import Notification from './Message';

type MessageStaticFunctions = Record<
  AlertColor,
  (context: React.ReactNode, duration?: number, icon?: boolean) => void
>;

const Message = {} as MessageStaticFunctions;

let notification: any = null;
// @ts-ignore
Notification.newInstance({}, (n: any) => {
  notification = n;
});

const commonOpen =
  (type: AlertColor) =>
  (content: React.ReactNode, duration: number = 3, icon: boolean = true) => {
    notification.notice({
      duration,
      severity: type,
      content,
      icon,
    });
  };

(['success', 'warning', 'info', 'error'] as const).forEach((type) => {
  Message[type] = commonOpen(type);
});

export default Message;
