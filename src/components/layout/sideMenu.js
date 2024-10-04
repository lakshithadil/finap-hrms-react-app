import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
        <Link
          to="/main"
          onClick={() => {
            isSmallScreen && toggleSidebar();
          }}
        >
          <img
            src={HRMSLogo}
            alt="HRMS Logo"
            style={{ height: "32px", width: "auto" }} // Adjust logo size as needed
          />
        </Link>
        <button
          className="btn btn-link text-decoration-none text-dark"
          type="button"
          onClick={toggleSidebar}
        >
          <i className={`bi ${isSmallScreen ? "bi-x" : "bi-list"} fs-4`}></i>
        </button>
      </div>
      <div className="list-group list-group-flush flex-grow-1">
        <NavLink
          to="/main/departments"
          className={({ isActive }) =>
            `list-group-item list-group-item-action ${
              isActive ? "active" : "bg-light"
            }`
          }
          onClick={() => {
            isSmallScreen && toggleSidebar();
          }}
        >
          <i className="bi bi-building me-2"></i>
          Departments
        </NavLink>
        <NavLink
          to="/main/employees"
          className={({ isActive }) =>
            `list-group-item list-group-item-action ${
              isActive ? "active" : "bg-light"
            }`
          }
          onClick={() => {
            isSmallScreen && toggleSidebar();
          }}
        >
          <i className="bi bi-person-circle me-2"></i>
          Employees
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
