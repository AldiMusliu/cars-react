import Modal from "react-bootstrap/Modal";

const CostumModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        {props.modalBody}
      </div>
    </Modal>
  );
};
export default CostumModal;
