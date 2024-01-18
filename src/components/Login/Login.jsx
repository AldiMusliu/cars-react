import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { emailRegex } from "../../lib/constants";

const Login = ({ submit, setMessage }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const localErrors = [];
    setMessage("");

    if (!emailRegex.test(email)) {
      localErrors.push("Email is not valid!");
    }
    if (!password) {
      localErrors.push("Password cannot be empty!");
    }
    if (localErrors.length) {
      setMessage(localErrors[0]);
      return;
    }

    const data = {
      email,
      password,
    };
    submit(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="input">
          <Form.Label>Email</Form.Label>
          <input
            type="email"
            required
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="input">
          <Form.Label>Password</Form.Label>
          <input
            type="password"
            required
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
        </Form.Group>

        <div className="submit">
          <Button type="submit" className="btnSubmit">
            Submit
          </Button>
          <Link to={"/forgot-password"} className="link">or ForgotPassword?</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
