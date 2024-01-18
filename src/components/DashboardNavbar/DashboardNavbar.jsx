import React from "react";
import {Icons} from '../Icons/Icons'
import { NavLink } from "react-router-dom";

const DashboardNavbar = ({ setNavbarShow }) => {
  const handleCloseNavabr = () => {
    setNavbarShow(false);
  };
  return (
    <div className="dashboardNavbar">
      <Icons.Close
        onClick={handleCloseNavabr}
        className="dashboardLayout-navbarHideButton"
      >
      </Icons.Close>
      <NavLink to="" end>Dashboard</NavLink>
      <NavLink to="users">Users</NavLink>
      <NavLink to="cars">Cars</NavLink>
    </div>
  );
};

export default DashboardNavbar;
