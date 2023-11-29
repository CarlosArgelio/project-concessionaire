import React, { useState } from 'react';
import { Button, Flex, Modal } from 'antd';
import FormComponent from '../FormConcessionaire';

const ModalComponent: React.FC = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Flex vertical gap="small" style={{ width: '100%' }}>
        <Button onClick={showModal} block>
            Comprame ya!
        </Button>
      </Flex>

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <FormComponent {...props} />
      </Modal>
    </>
  );
};

export default ModalComponent;