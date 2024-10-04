import React, { useEffect, useState } from "react";
import DepartmentForm from "../../components/department/departmentForm";
import { useNavigate, useParams } from "react-router-dom";
import {
  get_department_by_department_id_api,
  put_department_api,
} from "../../services/departmentService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import LoadingSpinner from "../../components/common/loadingSpinner/loadingSpinner";

const EditDepartment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [department, setDepartment] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await get_department_by_department_id_api(id);
        setDepartment(response.data.result);
      } catch (error) {
        console.log("Error fetching department:", error);
      }
    };
    fetchDepartment();
  }, [id]);

  const handleUpdate = async (updatedDepartment) => {
    await put_department_api(id, updatedDepartment);
    navigate("/main/departments");
  };

  return (
    <div>
      <Breadcrumbs />
      <h1>Edit Department</h1>
      {department ? (
        <DepartmentForm initialData={department} onSubmit={handleUpdate} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default EditDepartment;
