import React, { useState } from "react";
import DepartmentForm from "../../components/department/departmentForm";
import { useNavigate } from "react-router-dom";
import { post_department_api } from "../../services/departmentService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import { toast } from "react-toastify";

const CreateDepartment = () => {
  const navigate = useNavigate();

  const handleCreate = async (department) => {
    try {
      const response = await post_department_api(department);
      if (response.status === 201) {
        toast.success("Department created successfully!");
        navigate("/main/departments");
      }
    } catch (error) {
      toast.error(error.message || "Error creating department");
    }
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
