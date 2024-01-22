import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../lib/api/";
import React from "react";

const BookNowModalContent = (props) => {
  const { carId } = useParams();
  const [car, setCar] = React.useState();
  const getCar = async () => {
    const result = await api.call({ url: `/car/${carId}`, Method: "POST" });
    if (result.success) {
      setCar(result.data);
    }
  };
  React.useEffect(() => {
    getCar();
  }, []);
  
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
        <Button variant="danger" onClick={()=>props.setModalShow(false)} disabled={!car?.available }>Save
        </Button>
      </div>
      </form>
      
    </div>         
      
  );
  
};
export default BookNowModalContent;
