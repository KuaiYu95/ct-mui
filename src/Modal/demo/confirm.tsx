import { Button, Stack } from '@mui/material';
import { Modal } from 'ct-mui';
import React from 'react';

const { confirm } = Modal;

const showConfirm = () => {
  confirm({
    title: 'Do you Want to delete these items?',

    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const showPromiseConfirm = () => {
  let modal = confirm({
    title: 'Do you want to delete these items?',

    content:
      'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          modal.update({ cancelButtonProps: { disabled: true } });
          setTimeout(Math.random() > 0.5 ? resolve : reject, 2000);
        });
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() { },
  });
};

const showDeleteConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',

    content: 'Some descriptions',
    okText: 'Yes',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const showPropsConfirm = () => {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const App: React.FC = () => (
  <Stack direction="row" spacing={2}>
    <Button onClick={showConfirm} variant="contained">
      Confirm
    </Button>
    <Button onClick={showPromiseConfirm} variant="contained">
      With promise
    </Button>
    <Button onClick={showDeleteConfirm} variant="contained" color="error">
      Delete
    </Button>
    <Button onClick={showPropsConfirm} variant="contained">
      With extra props
    </Button>
  </Stack>
);

export default App;
