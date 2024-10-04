import api from "../api/axiosInstance";

// Fetch all departments
export const get_departments_api = async () => {
  try {
    const response = await api.get("/departments");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch department by ID
export const get_department_by_department_id_api = async (departmentId) => {
  try {
    const response = await api.get(`/departments/${departmentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create a new department
export const post_department_api = async (departmentData) => {
  try {
    const response = await api.post("/departments", departmentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update a department
export const put_department_api = async (departmentId, departmentData) => {
  try {
    const response = await api.put(
      `/departments/${departmentId}`,
      departmentData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a department
export const delete_department_api = async (departmentId) => {
  try {
    const response = await api.delete(`/departments/${departmentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
