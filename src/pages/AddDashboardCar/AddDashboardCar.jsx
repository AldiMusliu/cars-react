import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { api, endpoints } from "../../lib/api/";

const AddDashboardCar = () => {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [seats, setSeats] = useState("");
  const [description, setDescription] = useState("");
  const [priceRent, setPriceRent] = useState("");
  const [images, setImages] = useState(null);
  const [available, setAvailable] = useState(false);

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
    await api.call(endpoints.addCar, config);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="model">
        <Form.Label>Model</Form.Label>
        <Form.Control
          type="text"
          placeholder="Model"
          name="model"
          onChange={(e) => setModel(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="seats">
        <Form.Label>Seats</Form.Label>
        <Form.Control
          type="number"
          rows={3}
          name="seats"
          onChange={(e) => setSeats(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="seats">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="rentalPrice">
        <Form.Label>Rental Price</Form.Label>
        <Form.Control
          type="number"
          rows={3}
          name="rentalPrice"
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
          name="available"
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default AddDashboardCar;
