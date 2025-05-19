import { Button } from '@mui/material';
import { Modal, ThemeProvider } from 'ct-mui';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCancel, setShowCancel] = useState(true);

  const showModal = () => {
    setIsModalOpen(true);
    setShowCancel(true);
    setTimeout(() => {
      setShowCancel(false);
    }, 2000);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClose = (e: any, r: any) => {
    console.log(e, r);
  };

  return (
    <ThemeProvider>
      <Button variant="contained" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        maskClosable
        onCancel={handleCancel}
        onClose={onClose}
        showCancel={showCancel}
        width={600}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </ThemeProvider>
  );
};

export default App;
