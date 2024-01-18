import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { emailRegex } from '../../lib/constants'

const ForgotPassword = ({ submit, setMessage }) => {
  const [email, setEmail] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!emailRegex.test(email)) {
      setMessage('Email is not valid')
    }

    const data = {
      email,
    }
    submit(data)
  }

  return (
    <div >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="input">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                required
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="Email"
              />
            </Form.Group>
            <div className="submit">
              <Button type="submit" className="btnSubmit">Submit</Button>
            </div>
          </Form>
      </div>
  )
}

export default ForgotPassword
