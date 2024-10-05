import React, { useState } from "react";
import { z } from "zod";

const departmentSchema = z.object({
  departmentName: z
    .string()
    .min(1, "Department Name is required")
    .max(50, "Department Name must be less than 50 characters"),
  departmentCode: z
    .string()
    .min(1, "Department Code is required")
    .max(20, "Department Code must be less than 20 characters"),
});

const DepartmentForm = ({ initialData = {}, onSubmit }) => {
  const [department, setDepartment] = useState({
    departmentName: "",
    departmentCode: "",
    ...initialData,
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [validFields, setValidFields] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Validate the form data using Zod
      departmentSchema.parse(department);

      // If validation passes, clear errors and mark fields as valid
      setValidationErrors({});
      setValidFields({
        departmentName: true,
        departmentCode: true,
      });
      onSubmit(department);
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
        Object.keys(department).forEach((field) => {
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
            <label htmlFor="departmentName" className="form-label">
              Department Name
            </label>
            <input
              type="text"
              className={`form-control ${
                validationErrors.departmentName
                  ? "is-invalid"
                  : validFields.departmentName
                  ? "is-valid"
                  : ""
              }`}
              id="departmentName"
              name="departmentName"
              value={department.departmentName}
              onChange={handleChange}
            />
            {validationErrors.departmentName && (
              <div className="invalid-feedback">
                {validationErrors.departmentName}
              </div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="departmentCode" className="form-label">
              Department Code
            </label>
            <input
              type="text"
              className={`form-control ${
                validationErrors.departmentCode
                  ? "is-invalid"
                  : validFields.departmentCode
                  ? "is-valid"
                  : ""
              }`}
              id="departmentCode"
              name="departmentCode"
              value={department.departmentCode}
              onChange={handleChange}
            />
            {validationErrors.departmentCode && (
              <div className="invalid-feedback">
                {validationErrors.departmentCode}
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

export default DepartmentForm;
