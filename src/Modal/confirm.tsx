'use client';
import React from 'react';
import { render as reactRender } from '../utils';
import ConfirmDialog, { type ConfirmDialogProps } from './ConfirmDialog';

type ConfigUpdate =
  | ConfirmDialogProps
  | ((prevConfig: ConfirmDialogProps) => ConfirmDialogProps);
export default function confirm(config: ConfirmDialogProps) {
  const container = document.createDocumentFragment();
  const { onCancel: propCancel, onOk: propOk } = config;

  const onCancel = async () => {
    await propCancel?.();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    close();
  };
  const onOk = async () => {
    await propOk?.();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    close();
  };
  let currentConfig = { ...config, open: true, onCancel, onOk } as any;

  function render(props: ConfirmDialogProps) {
    setTimeout(() => {
      reactRender(<ConfirmDialog {...props} />, container);
    });
  }

  function close() {
    currentConfig = {
      ...currentConfig,
      open: false,
    };
    render(currentConfig);
  }

  function update(configUpdate: ConfigUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate,
      };
    }
    render(currentConfig);
  }

  render(currentConfig);

  return {
    destroy: close,
    update,
  };
}
