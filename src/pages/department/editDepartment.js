import React, { useEffect, useState } from "react";
import DepartmentForm from "../../components/department/departmentForm";
import { useNavigate, useParams } from "react-router-dom";
import {
  get_department_by_department_id_api,
  put_department_api,
} from "../../services/departmentService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import LoadingSpinner from "../../components/common/loadingSpinner/loadingSpinner";
import { toast } from "react-toastify";

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
    try {
      const response = await put_department_api(id, updatedDepartment);
      if (response.status === 200) {
        toast.success("Department updated successfully!");
        navigate("/main/departments");
      }
    } catch (error) {
      toast.error(error.message || "Error updating department");
    }
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
