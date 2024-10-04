import React, { useState, useEffect } from "react";

const EmployeeForm = ({ initialData = {}, onSubmit, departments = [] }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    dateOfBirth: "",
    salary: "",
    departmentId: "",
    ...initialData,
    dateOfBirth: initialData?.dateOfBirth?.split("T")[0] ?? "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(employee);
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailAddress"
              name="emailAddress"
              value={employee.emailAddress}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="salary" className="form-label">
              Salary
            </label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              id="salary"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="departmentId" className="form-label">
              Department
            </label>
            <select
              className="form-select"
              id="departmentId"
              name="departmentId"
              value={employee.departmentId}
              onChange={handleChange}
              required
            >
              <option value="">Select a department</option>
              {departments.map((dept) => (
                <option key={dept.departmentId} value={dept.departmentId}>
                  {dept.departmentName} ({dept.departmentCode})
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            <i className="bi bi-save me-2"></i>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
