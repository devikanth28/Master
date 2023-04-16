import React, { useState } from 'react';
import { Button} from 'reactstrap';
import { ModalBody,ModalHeader,ModalFooter,Modal} from 'reactstrap';
const Practice = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <React.Fragment>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <ModalHeader closeButton>
              Modal Heading
          </ModalHeader>
          <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </ModalFooter>
        </Modal>
        </React.Fragment>
    );
}

export default Practice