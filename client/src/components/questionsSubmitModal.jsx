import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import SubmitQuestion from './SubmitQuestion';

const QuestionsModal = (props) => {
  const [modal, setModal] = useState(false);
  const [modalNo, setModalNo] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNo = () => setModalNo(!modalNo);

  // eslint-disable-next-line react/prop-types
  const { modalOrAlert, bookId } = props;
  return (
    <div>
      {modalOrAlert === true ? <Button color="warning" onClick={toggle}>Submit a Question!</Button>
        : <Button color="warning" onClick={toggleNo}>Submit a Question!</Button>}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Submit your question!</ModalHeader>
        <ModalBody>
          <SubmitQuestion bookId={bookId} />
        </ModalBody>
      </Modal>
      <Modal isOpen={modalNo} toggle={toggleNo}>
        <ModalHeader toggle={toggleNo}>Oops! Looks like there was a problem...</ModalHeader>
        <ModalBody>
          You need to finish reading this book before you submit questions :D
        </ModalBody>
      </Modal>
    </div>
  );
};

export default QuestionsModal;
