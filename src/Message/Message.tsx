import React, { useState, forwardRef, useImperativeHandle } from 'react';

import { Snackbar, Box, type AlertColor } from '@mui/material';

import ThemeProvider from '../ThemeProvider';
import { render, unmount } from '../utils';

import Alert from './Alert';

export interface Notice {
  key?: React.Key;
  icon?: boolean;
  content?: React.ReactNode;
  severity: AlertColor;
  onClose?: () => void;
}

type MessageProps = Record<string, unknown>;

let seed = 0;
const now = Date.now();

function getUuid() {
  const id = seed;
  seed += 1;
  return `ctMessage_${now}_${id}`;
}

const Message = forwardRef<any, MessageProps>((props, ref) => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const add = (notice: Notice) => {
    const key = notice.key ?? getUuid();
    setNotices((state) => {
      state.push({ ...notice, key });
      return [...state];
    });
  };

  const remove = (key: React.Key) => {
    setNotices((state) => state.filter((s) => s.key !== key));
  };

  useImperativeHandle(ref, () => ({
    add,
    remove,
  }));

  return (
    <ThemeProvider>
      <Snackbar open anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Box>
          {notices.map((item) => {
            const alertProps = {
              ...item,
              noticeKey: item.key!,
              onClose: (noticeKey: React.Key) => {
                remove(noticeKey);
              },
            };
            // eslint-disable-next-line react/jsx-key
            return <Alert {...alertProps}></Alert>;
          })}
        </Box>
      </Snackbar>
    </ThemeProvider>
  );
});

// @ts-ignore
Message.newInstance = (properties: MessageProps, callback) => {
  const { ...props } = properties || {};
  const div = document.createElement('div');
  document.body.appendChild(div);
  let called = false;
  function ref(notification: any) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice(noticeProps: MessageProps) {
        notification.add(noticeProps);
      },
      removeNotice(key: React.Key) {
        notification.remove(key);
      },
      component: notification,
      destroy() {
        unmount(div);
        if (div.parentNode) {
          div.parentNode.removeChild(div);
        }
      },
    });
  }
  render(<Message {...props} ref={ref} />, div);
};

export default Message;
