import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import EmployeeDetail from "../../components/employee/employeeDetail";
import { get_employee_by_employee_id_api } from "../../services/employeeService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import LoadingSpinner from "../../components/common/loadingSpinner/loadingSpinner";

const ViewEmployeeDetails = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await get_employee_by_employee_id_api(id);
        setEmployee(response.data.result);
      } catch (error) {
        console.log("Error fetching employee:", error);
      }
    };
    fetchEmployee();
  }, [id]);

  return (
    <div>
      <Breadcrumbs />
      <h1>Employee Details</h1>
      {employee ? <EmployeeDetail employee={employee} /> : <LoadingSpinner />}
    </div>
  );
};

export default ViewEmployeeDetails;
