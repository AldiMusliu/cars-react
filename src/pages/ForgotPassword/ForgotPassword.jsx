import { useState } from "react";
import ForgotPasswordForm from "../../components/ForgotPassword/ForgotPassword";
import { api, endpoints } from "../../lib/api";
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";

const ForgotPassword = () => {
  const [message, setMessage] = useState();
  const [variant, setVariant] = useState("danger");

  const submitForm = async (data) => {
    const config = {
      data,
    };
    const result = await api.call(endpoints.forgotPassword, config);
    if (!result.success) {
      setMessage([result.data]);
      return;
    }

    setVariant("success");
    setMessage("An email was sent to you with further instructions!");
  };

  return (
    <div className="forgotPassword">
      <div className="forgotPasswordComponent">
        <h1>Forgot Password</h1>
        <ErrorAlert variant={variant}>{message}</ErrorAlert>
        {variant !== "success" && (
          <ForgotPasswordForm setMessage={setMessage} submit={submitForm} />
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
