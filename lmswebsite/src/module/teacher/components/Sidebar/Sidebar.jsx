import React, { useState, useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaLayerGroup } from "react-icons/fa6";
import { MdOutlineAssignment } from "react-icons/md";
import { AiTwotoneNotification, AiTwotoneSchedule } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { VscSignOut } from "react-icons/vsc";
import { FaUsersGear } from "react-icons/fa6";
import { SideBarwrap } from "./Sidebar.styles"; // Your styled component for sidebar

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    localStorage.clear(); // Clear all items in localStorage
    navigate("/login"); // Redirect to the login page or desired route
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <SideBarwrap isOpen={isOpen}>
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <span className="brand-logo">
              <img
                src="https://www.logoai.com/oss/icons/2021/10/27/rA73APprj8wskQ0.png"
                alt="Logo"
                className="logo"
              />
            </span>
            <div className="sidebar-logo">
              <IconButton onClick={() => setIsOpen(!isOpen)}>
                {isCollapsed ? <CloseIcon /> : <AiTwotoneSchedule />}
              </IconButton>
            </div>
          </div>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-menu">
            <ul className="menu-list">
              <li className="menu-item">
                <NavLink
                  to="/teacher/dashboard"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <RxDashboard />
                  </span>
                  {!isCollapsed && (
                    <span className="menu-link-text">Dashboard</span>
                  )}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/teacher/dashboard/batches"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <FaLayerGroup />
                  </span>
                  {!isCollapsed && (
                    <span className="menu-link-text">Manage Batches</span>
                  )}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/teacher/dashboard/quizz/assignedBatch"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <MdOutlineAssignment />
                  </span>
                  {!isCollapsed && (
                    <span className="menu-link-text">Task Management</span>
                  )}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/teacher/dashboard/circular"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <AiTwotoneNotification />
                  </span>
                  {!isCollapsed && (
                    <span className="menu-link-text">Circulars</span>
                  )}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/teacher/dashboard/meetings"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <AiTwotoneSchedule />
                  </span>
                  {!isCollapsed && (
                    <span className="menu-link-text">Schedule</span>
                  )}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/teacher/dashboard/teacherAttendance"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <AiTwotoneSchedule />
                  </span>
                  {!isCollapsed && (
                    <span className="menu-link-text">Attendance</span>
                  )}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/teacher/dashboard/meetingReschedule"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <AiTwotoneSchedule />
                  </span>
                  {!isCollapsed && (
                    <span className="menu-link-text">Reschedule Meeting</span>
                  )}
                </NavLink>
              </li>

             
              <li className="menu-item">
                <NavLink
                  to="/teacher/dashboard/setting"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <MdOutlineSettings />
                  </span>
                  {!isCollapsed && (
                    <span className="menu-link-text">Settings</span>
                  )}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/login"
                  className="menu-link"
                  onClick={handleLogout}
                >
                  <span className="menu-link-icon">
                    <VscSignOut />
                  </span>
                  {!isCollapsed && (
                    <span className="menu-link-text">Sign Out</span>
                  )}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </SideBarwrap>
    </>
  );
};

export default Sidebar;
