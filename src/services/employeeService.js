import api from "../api/axiosInstance";

// Fetch all employees
export const get_employees_api = async () => {
  try {
    const response = await api.get("/employees");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch employee by ID
export const get_employee_by_employee_id_api = async (employeeId) => {
  try {
    const response = await api.get(`/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create a new employee
export const post_employee_api = async (employeeData) => {
  try {
    const response = await api.post("/employees", employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update an employee
export const put_employee_api = async (employeeId, employeeData) => {
  try {
    const response = await api.put(`/employees/${employeeId}`, employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete an employee
export const delete_employee_api = async (employeeId) => {
  try {
    const response = await api.delete(`/employees/${employeeId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
