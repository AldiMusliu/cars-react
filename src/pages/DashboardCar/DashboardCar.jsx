import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { api } from "../../lib/api/";

const DashboardCar = () => {
  const { carId } = useParams();
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [seats, setSeats] = useState("");
  const [priceRent, setPriceRent] = useState("");
  const [images, setImages] = useState(null);
  const [available, setAvailable] = useState(false);

  const [imagePath, setImagePath] = useState("");
  const [succes, setSucces] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("model", model);
    formData.append("description", description);
    formData.append("seats", seats);
    formData.append("priceRent", priceRent);
    formData.append("available", available);
    formData.append("images", images);
    const config = {
      data: formData,
    };
    const result=await api.call({ url: `/car/${carId}`, method: "POST" }, config);
    if (result.success) {
      setSucces(true);
    }
    setTimeout(()=>{
      getCar();
      setSucces(false)
    },3000)
  };
  const getCar = async () => {
    const result = await api.call({ url: `/car/${carId}`, method: "GET" });
    if (result.success) {
      setName(result.data.name);
      setModel(result.data.model);
      setSeats(result.data.seats);
      setPriceRent(result.data.priceRent);
      setAvailable(result.data.available);
      setDescription(result.data.description);
      setImagePath(result.data.images);
      
    }
  };
  React.useEffect(() => {
    getCar();
  }, []);
  return (
    <div className="dashboardCar">
      <div className="dashboardCar-img">
        <img src={imagePath} alt="" height={200} width={200} />
      </div>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Model"
            defaultValue={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            defaultValue={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="seats">
          <Form.Label>Seats</Form.Label>
          <Form.Control
            type="number"
            rows={3}
            defaultValue={seats}
            onChange={(e) => setSeats(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rentalPrice">
          <Form.Label>Rental Price</Form.Label>
          <Form.Control
            type="number"
            rows={3}
            defaultValue={priceRent}
            onChange={(e) => setPriceRent(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="images">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="images"
            onChange={(e) => setImages(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="available">
          <Form.Check
            type="checkbox"
            label="Is available?"
            checked={available}
            name="available"
            onChange={(e) => setAvailable(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {succes && (
        <Alert key="success" variant="success" className="mt-3">
          You changes are done successfully!
        </Alert>
      )}
    </div>
  );
};
export default DashboardCar;
