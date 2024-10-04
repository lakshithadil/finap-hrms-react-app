import React from "react";
import DepartmentForm from "../../components/department/departmentForm";
import { useNavigate } from "react-router-dom";
import { post_department_api } from "../../services/departmentService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";

const CreateDepartment = () => {
  const navigate = useNavigate();

  const handleCreate = async (department) => {
    await post_department_api(department);
    navigate("/main/departments");
  };

  return (
    <div>
      <Breadcrumbs />
      <h1>Create Department</h1>
      <DepartmentForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateDepartment;
