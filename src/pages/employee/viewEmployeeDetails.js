import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EmployeeDetail from "../../components/employee/employeeDetail";
import { get_employee_by_employee_id_api } from "../../services/employeeService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import LoadingSpinner from "../../components/common/loadingSpinner/loadingSpinner";
import ErrorMessage from "../../components/common/errorMessage/errorMessage";

const ViewEmployeeDetails = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await get_employee_by_employee_id_api(id);
        if (response.data.result) {
          setEmployee(response.data.result);
        } else {
          setError("Employee not found.");
        }
      } catch (error) {
        console.log("Error fetching employee:", error);
        setError("Error fetching employee details.");
      }
    };
    fetchEmployee();
  }, [id]);

  return (
    <div>
      <Breadcrumbs />
      <h1>Employee Details</h1>
      {error ? (
        <ErrorMessage message={error} />
      ) : employee ? (
        <EmployeeDetail employee={employee} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ViewEmployeeDetails;
