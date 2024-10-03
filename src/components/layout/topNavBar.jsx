import React from "react";
import HRMSLogo from "../../assets/images/hrms_logo.svg";

const TopNavBar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-light fixed-top ps-1 pe-1 bg-light">
      <span className="navbar-brand mb-0 h1 ms-3">
        {" "}
        <div>
          <img src={HRMSLogo} width={80} alt="Company Logo" />
        </div>
      </span>
      <button
        className="btn btn-link text-decoration-none text-dark"
        onClick={toggleSidebar}
      >
        <i className="bi bi-list fs-4"></i>
      </button>
    </nav>
  );
};

export default TopNavBar;
