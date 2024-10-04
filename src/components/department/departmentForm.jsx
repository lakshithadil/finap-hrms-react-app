import React, { useState, useEffect } from "react";

const DepartmentForm = ({ initialData = {}, onSubmit }) => {
  const [department, setDepartment] = useState({
    departmentName: "",
    departmentCode: "",
    ...initialData,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(department);
  };

  return (
    <div className="row">
      <div className="col-md-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="departmentName" className="form-label">
              Department Name
            </label>
            <input
              type="text"
              className="form-control"
              id="departmentName"
              name="departmentName"
              value={department.departmentName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="departmentCode" className="form-label">
              Department Code
            </label>
            <input
              type="text"
              className="form-control"
              id="departmentCode"
              name="departmentCode"
              value={department.departmentCode}
              onChange={handleChange}
              required
            />
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

export default DepartmentForm;
