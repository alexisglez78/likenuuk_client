import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import {Modal,ModalBackground,ModalContent,ModalClose,Title} from 'bloomer'

const Modal = ({isActive,children,title,handleClose}) => {
    return (
        <>
        <Modal isActive={isActive}>
            <ModalBackground onClick={handleClose}>
                <ModalContent>
                    
                </ModalContent>
            </ModalBackground>
        </Modal>
        </>
    );
}

export default Modal;