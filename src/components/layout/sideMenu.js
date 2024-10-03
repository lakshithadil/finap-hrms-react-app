import React from "react";
import { Link } from "react-router-dom";
import HRMSLogo from "../../assets/images/hrms_logo.svg";

const SideMenu = ({ sidebarOpen, toggleSidebar, isSmallScreen }) => {
  return (
    <div
      className={`bg-light border-end vh-100 d-flex flex-column position-fixed`}
      style={{
        width: "280px",
        top: 0,
        bottom: 0,
        left: sidebarOpen ? 0 : "-280px", // Adjust left position to hide/show sidebar
        transition: "left 0.3s ease", // Smooth transition for hiding/showing sidebar
        zIndex: 1040,
      }}
    >
      <div className="p-3 d-flex justify-content-between align-items-center mb-4">
        <img
          src={HRMSLogo}
          alt="HRMS Logo"
          style={{ height: "32px", width: "auto" }} // Adjust logo size as needed
        />
        <button
          className="btn btn-link text-decoration-none text-dark"
          type="button"
          onClick={toggleSidebar}
        >
          <i className={`bi ${isSmallScreen ? "bi-x" : "bi-list"} fs-4`}></i>
        </button>
      </div>
      <div className="list-group list-group-flush flex-grow-1">
        <Link
          to="/main/departments"
          className="list-group-item list-group-item-action bg-light"
        >
          Departments
        </Link>
        <Link
          to="/main/employees"
          className="list-group-item list-group-item-action bg-light"
        >
          Employees
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
