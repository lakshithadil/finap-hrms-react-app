import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DepartmentDetail from "../../components/department/departmentDetail";
import { get_department_by_department_id_api } from "../../services/departmentService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import LoadingSpinner from "../../components/common/loadingSpinner/loadingSpinner";
import ErrorMessage from "../../components/common/errorMessage/errorMessage";

const ViewDepartmentDetails = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
  const [department, setDepartment] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await get_department_by_department_id_api(id);
        if (response.data.result) {
          setDepartment(response.data.result);
        } else {
          setError("Department not found.");
        }
      } catch (error) {
        console.log("Error fetching department:", error);
        setError("Error fetching department details.");
      }
    };
    fetchDepartment();
  }, [id]);

  return (
    <div>
      <Breadcrumbs />
      <h1>Department Details</h1>
      {error ? (
        <ErrorMessage message={error} />
      ) : department ? (
        <DepartmentDetail department={department} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ViewDepartmentDetails;
