import React from "react";
import HRMSImage from "../../assets/images/human-resource-management.webp";

const Main = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 text-center"
      style={{ maxHeight: "85vh" }}
    >
      <div>
        <img
          src={HRMSImage}
          alt="HRMSImage"
          style={{ width: "400px", height: "auto" }}
        />
        <h2 className="mt-3">Welcome to HRMS</h2>
        <p>Revolutionizing Human Resource Management System</p>
      </div>
    </div>
  );
};

export default Main;
