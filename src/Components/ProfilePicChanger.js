
import React, {Component, useState} from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';

function ProfilePicChanger()
{
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };


    // render(){
        return (
            <>
            <div className="ProfilePicChanger">
              
       
     
            <Button type="primary" onClick={showModal}>
              Open Modal
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            </div>
          </>
        )
    // }
}

export default ProfilePicChanger;