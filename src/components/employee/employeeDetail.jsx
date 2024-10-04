import React from "react";

const EmployeeDetail = ({ employee }) => {
  return (
    <div className="mt-4 row">
      <div className="col-md-5">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>First Name</th>
              <td>{employee.firstName}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{employee.lastName}</td>
            </tr>
            <tr>
              <th>Email Address</th>
              <td>{employee.emailAddress}</td>
            </tr>
            <tr>
              <th>Date of Birth</th>
              <td>{new Date(employee.dateOfBirth).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{employee.age}</td>
            </tr>
            <tr>
              <th>Salary</th>
              <td>{employee.salary}</td>
            </tr>
            <tr>
              <th>Department</th>
              <td>{employee.department}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDetail;
