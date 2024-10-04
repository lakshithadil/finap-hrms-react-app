import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import NotFound from "./components/notFound/notFound";
import Layout from "./components/layout/layout";
import Main from "./components/main/main";
import ViewDepartments from "./pages/department/viewDepartments";
import CreateDepartment from "./pages/department/createDepartment";
import EditDepartment from "./pages/department/editDepartment";
import ViewDepartmentDetails from "./pages/department/viewDepartmentDetails";
import ViewEmployees from "./pages/employee/viewEmployees";
import CreateEmployee from "./pages/employee/createEmployee";
import EditEmployee from "./pages/employee/editEmployee";
import ViewEmployeeDetails from "./pages/employee/viewEmployeeDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Outlet />}>
          <Route element={<Layout />}>
            <Route path="" element={<Main />} />
            <Route path="departments" element={<ViewDepartments />} />
            <Route path="departments/create" element={<CreateDepartment />} />
            <Route path="departments/edit/:id" element={<EditDepartment />} />
            <Route
              path="departments/view"
              element={<ViewDepartmentDetails />}
            />
            <Route path="employees" element={<ViewEmployees />} />
            <Route path="employees/create" element={<CreateEmployee />} />
            <Route path="employees/edit/:id" element={<EditEmployee />} />
            <Route path="employees/view" element={<ViewEmployeeDetails />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
