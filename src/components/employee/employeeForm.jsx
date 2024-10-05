import React, { useState } from "react";
import { z } from "zod";

const employeeSchema = z.object({
  firstName: z
    .string()
    .min(1, "First Name is required")
    .max(50, "First Name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last Name is required")
    .max(50, "Last Name must be less than 50 characters"),
  emailAddress: z.string().email("Invalid email address"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  salary: z
    .number()
    .min(0, "Salary must be a positive number")
    .refine((val) => !isNaN(val), {
      message: "Salary is required",
    }), // Ensure salary is a number
  departmentId: z.string().min(1, "Department is required"),
});

const EmployeeForm = ({ initialData = {}, onSubmit, departments = [] }) => {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    dateOfBirth: "",
    salary: 0,
    departmentId: "",
    ...initialData,
    dateOfBirth: initialData?.dateOfBirth?.split("T")[0] ?? "",
    departmentId: initialData?.departmentId?.toString() ?? "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [validFields, setValidFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert salary to a number if the field name is 'salary'
    const newValue = name === "salary" ? parseFloat(value) : value;

    setEmployee({ ...employee, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Validate the form data using Zod
      employeeSchema.parse(employee);

      // If validation passes, clear errors and mark fields as valid
      setValidationErrors({});
      setValidFields({
        firstName: true,
        lastName: true,
        emailAddress: true,
        dateOfBirth: true,
        salary: true,
        departmentId: true,
      });
      onSubmit(employee);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        const validFieldsState = { ...validFields }; // Start with the current valid fields state

        err.errors.forEach((error) => {
          const fieldName = error.path[0];
          fieldErrors[fieldName] = error.message;
          validFieldsState[fieldName] = false; // Mark the invalid field as false
        });

        // Update valid fields for those that have no errors
        Object.keys(employee).forEach((field) => {
          if (!fieldErrors[field]) {
            validFieldsState[field] = true; // Mark valid fields as true
          }
        });

        setValidationErrors(fieldErrors);
        setValidFields(validFieldsState);
      }
    }
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
              className={`form-control ${
                validationErrors.firstName
                  ? "is-invalid"
                  : validFields.firstName
                  ? "is-valid"
                  : ""
              }`}
              id="firstName"
              name="firstName"
              value={employee.firstName}
              onChange={handleChange}
            />
            {validationErrors.firstName && (
              <div className="invalid-feedback">
                {validationErrors.firstName}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className={`form-control ${
                validationErrors.lastName
                  ? "is-invalid"
                  : validFields.lastName
                  ? "is-valid"
                  : ""
              }`}
              id="lastName"
              name="lastName"
              value={employee.lastName}
              onChange={handleChange}
            />
            {validationErrors.lastName && (
              <div className="invalid-feedback">
                {validationErrors.lastName}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className={`form-control ${
                validationErrors.emailAddress
                  ? "is-invalid"
                  : validFields.emailAddress
                  ? "is-valid"
                  : ""
              }`}
              id="emailAddress"
              name="emailAddress"
              value={employee.emailAddress}
              onChange={handleChange}
            />
            {validationErrors.emailAddress && (
              <div className="invalid-feedback">
                {validationErrors.emailAddress}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className={`form-control ${
                validationErrors.dateOfBirth
                  ? "is-invalid"
                  : validFields.dateOfBirth
                  ? "is-valid"
                  : ""
              }`}
              id="dateOfBirth"
              name="dateOfBirth"
              value={employee.dateOfBirth}
              onChange={handleChange}
            />
            {validationErrors.dateOfBirth && (
              <div className="invalid-feedback">
                {validationErrors.dateOfBirth}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="salary" className="form-label">
              Salary
            </label>
            <input
              type="number"
              step="0.01"
              className={`form-control ${
                validationErrors.salary
                  ? "is-invalid"
                  : validFields.salary
                  ? "is-valid"
                  : ""
              }`}
              id="salary"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
            />
            {validationErrors.salary && (
              <div className="invalid-feedback">{validationErrors.salary}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="departmentId" className="form-label">
              Department
            </label>
            <select
              className={`form-select ${
                validationErrors.departmentId
                  ? "is-invalid"
                  : validFields.departmentId
                  ? "is-valid"
                  : ""
              }`}
              id="departmentId"
              name="departmentId"
              value={employee.departmentId}
              onChange={handleChange}
            >
              <option value="">Select a department</option>
              {departments.map((dept) => (
                <option key={dept.departmentId} value={dept.departmentId}>
                  {dept.departmentName} ({dept.departmentCode})
                </option>
              ))}
            </select>
            {validationErrors.departmentId && (
              <div className="invalid-feedback">
                {validationErrors.departmentId}
              </div>
            )}
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
