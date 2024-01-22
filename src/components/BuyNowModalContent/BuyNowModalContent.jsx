import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BuyNowModalContent = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    address: '',
    creditCardNumber: '',
    expiration: '',
    cvv: '',
    country: '',
  });
  

  const [errorMessages, setErrorMessages] = useState({
    email: '',
    phoneNumber: '',
    address: '',
    creditCardNumber: '',
    expiration: '',
    cvv: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    
    // Clear the corresponding error message when the user starts typing
    setErrorMessages({
      ...errorMessages,
      [name]: '',
    });
  };
  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      expiration: date,
    });

    setErrorMessages({
        ...errorMessages,
        expiration: '',
      });
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData({
          ...formData,
          [name]: checked,
        });
    
        // Clear the corresponding error message when the user checks the checkbox
        setErrorMessages({
          ...errorMessages,
          [name]: '',
        });
      };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Custom validation logic
    const newErrorMessages = {};

    if (!/^\d{16}$/.test(formData.creditCardNumber)) {
      newErrorMessages.creditCardNumber = 'Invalid credit card number (must be 16 digits)';
    }

    if (!/^\+\d+$/.test(formData.phoneNumber)) {
      newErrorMessages.phoneNumber = 'Invalid phone number (must start with "+" and contain only numbers)';
    }

    if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrorMessages.cvv = 'Invalid CVV (must be 3 or 4 digits)';
    }

    if (!/^[a-zA-Z]+$/.test(formData.country)) {
      newErrorMessages.country = 'Invalid country (must contain only letters)';
    }

    // If there are errors, update the state and return early
    if (Object.keys(newErrorMessages).length > 0) {
      setErrorMessages(newErrorMessages);
      return;
    }

    // Log the form data
    console.log('Form submitted:', formData);

    // Close the modal or perform additional actions as needed
    props.setModalShow(false);
  };

  return (
    <div className="buyNowModalContent">
      <h5 className="buyNowModalContent-title">Please provide your information to complete the purchase</h5>
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group controlId="phoneNumber" className="mb-3">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
          {errorMessages.phoneNumber && (
            <Form.Text className="text-danger">{errorMessages.phoneNumber}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="address" className="mb-3">
          <Form.Label>Address:</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleInputChange} required />
        </Form.Group>

        <Form.Group controlId="creditCardNumber" className="mb-3">
          <Form.Label>Credit Card Number:</Form.Label>
          <Form.Control type="text" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleInputChange} required />
          {errorMessages.creditCardNumber && (
            <Form.Text className="text-danger">{errorMessages.creditCardNumber}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="expiration" className="mb-3">
          <Form.Label>Expiration Date:</Form.Label>
          <DatePicker
            selected={formData.expiration}
            onChange={handleDateChange}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="form-control"
          />
          {errorMessages.expiration && (
            <Form.Text className="text-danger">{errorMessages.expiration}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="cvv" className="mb-3">
          <Form.Label>CVV:</Form.Label>
          <Form.Control type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} required />
          {errorMessages.cvv && (
            <Form.Text className="text-danger">{errorMessages.cvv}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="country" className="mb-3">
          <Form.Label>Country:</Form.Label>
          <Form.Control type="text" name="country" value={formData.country} onChange={handleInputChange} required />
          {errorMessages.country && (
            <Form.Text className="text-danger">{errorMessages.country}</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="termsAndConditions" className="mb-3">
          <Form.Check
            type="checkbox"
            name="termsAndConditions"
            label="I agree with Terms and Conditions"
            checked={formData.termsAndConditions}
            onChange={handleCheckboxChange}
            required
          />
          {errorMessages.termsAndConditions && (
            <Form.Text className="text-danger">{errorMessages.termsAndConditions}</Form.Text>
          )}
        </Form.Group>

        <div className="buyNowModalContent-buttons">
          <Button variant="warning" onClick={() => props.setModalShow(false)}>Cancel</Button>
          <Button variant="danger" type="submit">Purchase Now</Button>
        </div>
      </form>
    </div>
  );
};

export default BuyNowModalContent;
