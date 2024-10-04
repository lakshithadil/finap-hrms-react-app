import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/main">Home</Link>
        </li>
        {/* Adjust to start from index 1 to skip "main" */}
        {pathnames.slice(1).map((value, index) => {
          const path = `/${pathnames.slice(0, index + 2).join("/")}`; // Adjust index to include the next path
          const isLast = index === pathnames.length - 2; // Check if it's the last item
          const formattedValue = value.charAt(0).toUpperCase() + value.slice(1);

          return isLast ? (
            <li
              className="breadcrumb-item active"
              aria-current="page"
              key={path}
            >
              {formattedValue}
            </li>
          ) : (
            <li className="breadcrumb-item" key={path}>
              <Link to={path}>{formattedValue}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
