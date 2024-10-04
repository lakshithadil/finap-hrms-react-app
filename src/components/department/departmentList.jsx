import React from "react";
import { Link } from "react-router-dom";

const DepartmentList = ({ departments, onDelete }) => {
  return (
    <div className="table-responsive">
      <table className="table" style={{ minWidth: "800px", overflowX: "auto" }}>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Department Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.departmentId}>
              <td>{department.departmentName}</td>
              <td>{department.departmentCode}</td>
              <td>
                <Link
                  to={`/main/departments/view?id=${department.departmentId}`}
                  className="btn btn-info btn-sm me-2"
                >
                  <i className="bi bi-eye me-2"></i>
                  View
                </Link>
                <Link
                  to={`/main/departments/edit/${department.departmentId}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  <i className="bi bi-pencil me-2"></i>
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(department.departmentId)}
                  className="btn btn-danger btn-sm"
                >
                  <i className="bi bi-trash me-2"></i>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentList;
