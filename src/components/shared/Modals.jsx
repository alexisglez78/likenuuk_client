import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { AiOutlineClose } from "react-icons/ai";


import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%'
    }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

const Modals = ({ openModal, modalIsOpen, afterOpenModal, closeModal, childs }) => {
    return (
        <>
            <div>
                {/* <button onClick={openModal}>Open Modal</button> */}
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <div className="row justify-content-end ">
                        <div className="col-md-1 text-end" style={{marginTop:'-15px'}}>
                            <button className="noButton" onClick={closeModal}><AiOutlineClose /></button>
                        </div>
                    </div>
                    <div>{childs}</div>
                </Modal>
            </div>
        </>
    );
}

export default Modals;