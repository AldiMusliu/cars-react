import { useState } from 'react';
import RegisterForm from '../../components/Register/Register';
import { api, endpoints } from '../../lib/api/';
import ErrorAlert from '../../components/ErrorAlert/ErrorAlert';

const Register = () => {
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('danger');

  const submitRegister = async (data) => {
    setVariant('danger');

    // Check minimum character length for the first name
    if (data.firstName.length < 6) {
      setMessage('First name must be at least 6 characters long.');
      return;
    }

    // Check password complexity
    const passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    if (!passwordRegex.test(data.password)) {
      setMessage('Password must contain at least one number, one uppercase letter, one symbol, and must have at least 8 characters.');
      return;
    }

    const config = {
      data,
    };
    const result = await api.call(endpoints.register, config);
    
    if (!result.success) {
      setMessage([result.data]);
      return;
    }

    setVariant('success');
    setMessage('Please verify your account');
  };

  return (
    <div className="register">
      <div className="registerComponent">
        <h1>Register</h1>
        <ErrorAlert variant={variant}>{message}</ErrorAlert>
        {variant !== 'success' && <RegisterForm setMessage={setMessage} submit={submitRegister} />}
      </div>
    </div>
  );
};

export default Register;
