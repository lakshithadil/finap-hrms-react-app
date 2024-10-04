import React, { useState, useEffect } from "react";
import SideMenu from "./sideMenu";
import { Outlet } from "react-router-dom";
import TopNavBar from "./topNavBar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSmallScreen) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isSmallScreen]);

  return (
    <div className="">
      {/* Top navbar */}
      {isSmallScreen && <TopNavBar toggleSidebar={toggleSidebar} />}

      {/* Sidebar */}
      <SideMenu
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        isSmallScreen={isSmallScreen}
      />

      {/* Overlay */}
      {sidebarOpen && isSmallScreen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          onClick={toggleSidebar}
          style={{ zIndex: 1030 }}
        ></div>
      )}

      {/* Page Content */}
      <div
        id="page-content-wrapper"
        className={` ${
          sidebarOpen
            ? !isSmallScreen
              ? "sidebar-open"
              : ""
            : "sidebar-closed"
        }`}
        // style={{ transition: "margin-left 0.3s ease" }}
        style={{ marginTop: isSmallScreen ? "56px" : "0" }} // Adjusting top margin
      >
        <div className="container-fluid p-3">
          {/* Toggle Button Screens */}
          {!sidebarOpen && (
            <button
              className="btn btn-link text-decoration-none text-dark position-fixed top-0 end-0 mt-3 me-3 d-block "
              type="button"
              onClick={toggleSidebar}
            >
              <i
                className={`bi ${sidebarOpen ? "bi-list" : "bi-list"} fs-4`}
              ></i>
            </button>
          )}
          {/* Router Outlet for Rendering Child Routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
