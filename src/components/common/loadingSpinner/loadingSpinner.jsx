import React from "react";

const LoadingSpinner = ({ maxHeight = "80vh", color = "#7daf8a" }) => (
  <div
    className="d-flex justify-content-center align-items-center vh-100"
    style={{
      maxHeight,
    }}
  >
    <div
      className="spinner-border"
      role="status"
      style={{ width: "2rem", height: "2rem", color }}
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default LoadingSpinner;
