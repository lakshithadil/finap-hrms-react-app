import React from "react";

const DepartmentDetail = ({ department }) => {
  return (
    <div className="mt-4 row">
      <div className="col-md-5">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Department Name</th>
              <td>{department.departmentName}</td>
            </tr>
            <tr>
              <th>Department Code</th>
              <td>{department.departmentCode}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentDetail;
