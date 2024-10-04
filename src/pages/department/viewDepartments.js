import React, { useEffect, useState } from "react";
import DepartmentList from "../../components/department/departmentList";
import { Link } from "react-router-dom";
import {
  get_departments_api,
  delete_department_api,
} from "../../services/departmentService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";

const ViewDepartments = () => {
  const [departments, setDepartments] = useState([]);

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

  const handleDelete = async (departmentId) => {
    try {
      await delete_department_api(departmentId);
      setDepartments(
        departments.filter((department) => department.id !== departmentId)
      );
    } catch (error) {
      console.log("Error deleting department:", error);
    }
  };

  return (
    <div>
      <Breadcrumbs />
      <h1>Departments</h1>
      <Link
        to="/main/departments/create"
        className="btn btn-primary btn-sm mb-3 mt-3"
      >
        <i className="bi bi-plus-circle me-2"></i>
        Create
      </Link>
      <DepartmentList departments={departments} onDelete={handleDelete} />
    </div>
  );
};

export default ViewDepartments;
