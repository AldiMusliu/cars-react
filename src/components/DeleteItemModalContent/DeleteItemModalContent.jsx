import Button from 'react-bootstrap/Button';

const DeleteItemModalContent = (props) => {
  
  return (
    <div className="deleteItemModalContent">
      <h5 className="deleteItemModalContent-title">Are you sure that you want to delete this item?</h5>
      <p className="deleteItemModalContent-subtitle">If you delete this, you will be unable to undone this action.</p>
      <div className="deleteItemModalContent-buttons">
        <Button variant="warning" onClick={() => props.setModalShow(false)}>No</Button>
        <Button variant="danger" onClick={()=>props.deleteFunction()}>Yes</Button>
      </div>
    </div>
  );
};
export default DeleteItemModalContent;
