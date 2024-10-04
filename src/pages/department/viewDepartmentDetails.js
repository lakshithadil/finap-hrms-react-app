import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DepartmentDetail from "../../components/department/departmentDetail";
import { get_department_by_department_id_api } from "../../services/departmentService";
import Breadcrumbs from "../../components/common/breadcrumbs/breadcrumbs";
import LoadingSpinner from "../../components/common/loadingSpinner/loadingSpinner";

const ViewDepartmentDetails = () => {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id");
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

  return (
    <div>
      <Breadcrumbs />
      <h1>Department Details</h1>
      {department ? (
        <DepartmentDetail department={department} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default ViewDepartmentDetails;
