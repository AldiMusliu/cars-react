import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BookNowModalContent = (props) => {
  
  return (
    <div className="bookNowModalContent">
      <h5 className="bookNowModalContent-title">Please choose you start and end date for your book</h5>
      <form >
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Start Date:</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>End Date:</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <div className="bookNowModalContent-buttons">
        <Button variant="warning" onClick={() => props.setModalShow(false)}>Cancel</Button>
        <Button variant="danger" onClick={()=>props.setModalShow(false)}>Save</Button>
      </div>
      </form>
    </div>
  );
};
export default BookNowModalContent;
