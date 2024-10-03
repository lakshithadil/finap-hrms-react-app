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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Outlet />}>
          <Route element={<Layout />}>
            <Route path="" element={<Main />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
