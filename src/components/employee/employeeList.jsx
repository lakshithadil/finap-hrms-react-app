import React from "react";
import { Link } from "react-router-dom";

const EmployeeList = ({ employees, onDelete }) => {
  return (
    <div className="table-responsive">
      <table
        className="table"
        style={{ minWidth: "1000px", overflowX: "auto" }}
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Address</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.employeeId}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailAddress}</td>
              <td>{employee.department}</td>
              <td>
                <Link
                  to={`/main/employees/view?id=${employee.employeeId}`}
                  className="btn btn-info btn-sm me-2"
                >
                  <i className="bi bi-eye me-2"></i>
                  View
                </Link>
                <Link
                  to={`/main/employees/edit/${employee.employeeId}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  <i className="bi bi-pencil me-2"></i>
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(employee.employeeId)}
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

export default EmployeeList;
