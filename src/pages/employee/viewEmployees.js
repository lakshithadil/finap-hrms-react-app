import React, { useEffect, useState } from "react";
import EmployeeList from "../../components/employee/employeeList";
import { Link } from "react-router-dom";
import {
  get_employees_api,
  delete_employee_api,
} from "../../services/employeeService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await get_employees_api();
        setEmployees(response.data.result);
      } catch (error) {
        console.log("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  const handleDelete = async (employeeId) => {
    try {
      await delete_employee_api(employeeId);
      setEmployees(employees.filter((employee) => employee.id !== employeeId));
    } catch (error) {
      console.log("Error deleting employee:", error);
    }
  };

  return (
    <div>
      <Breadcrumbs />
      <h1>Employees</h1>
      <Link
        to="/main/employees/create"
        className="btn btn-primary btn-sm mb-3 mt-3"
      >
        <i className="bi bi-plus-circle me-2"></i>
        Create
      </Link>
      <EmployeeList employees={employees} onDelete={handleDelete} />
    </div>
  );
};

export default ViewEmployees;
