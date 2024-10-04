import React, { useEffect, useState } from "react";
import EmployeeForm from "../../components/employee/employeeForm";
import { useNavigate } from "react-router-dom";
import { post_employee_api } from "../../services/employeeService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import { get_departments_api } from "../../services/departmentService";

const CreateEmployee = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  const handleCreate = async (employee) => {
    await post_employee_api(employee);
    navigate("/main/employees"); // Redirect to the employee list after creation
  };

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await get_departments_api();
        setDepartments(response.data.result);
      } catch (error) {
        console.log("Error fetching departments:", error);
      }
    };
    fetchDepartments();
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <h1>Create Employee</h1>
      <EmployeeForm onSubmit={handleCreate} departments={departments} />
    </div>
  );
};

export default CreateEmployee;
