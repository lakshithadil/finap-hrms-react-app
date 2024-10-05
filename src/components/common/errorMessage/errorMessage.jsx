import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <div className="alert alert-danger" role="alert">
        {message}
      </div>
    </div>
  );
};

export default ErrorMessage;
