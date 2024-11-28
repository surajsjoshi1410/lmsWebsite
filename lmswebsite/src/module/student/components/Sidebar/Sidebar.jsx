import React, { useState, useEffect } from "react";
import { RxDashboard } from "react-icons/rx";
import CloseIcon from "@mui/icons-material/Close";
// import { IconButton } from "@mui/material";

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Dashboard,
  AddBox,
  Assignment,
  AccessTime,
  Person,
  Mail,
  Description,
  Settings,
  Menu as MenuIcon,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { SideBarwrap } from "./Sidebar.styles";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaLayerGroup } from "react-icons/fa6";
import { MdOutlineAssignment } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { RiCustomerServiceLine } from "react-icons/ri";
import { AiTwotoneSchedule } from "react-icons/ai";
// import { MdOutlineAssignment } from "react-icons/md";
import { FaWpforms } from "react-icons/fa6";
import { AiTwotoneNotification } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { VscSignOut } from "react-icons/vsc";
import { MdPayment } from "react-icons/md";

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

  return (
    <>
      <div className="sidebar-toggle-btn"></div>
      <SideBarwrap isOpen>
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
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </div>
          </div>
        </div>
        <div className="sidebar-body">
          <div className="sidebar-menu">
            <ul className="menu-list">
              <li className="menu-item">
                <NavLink
                  to="/student/dashboard"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <RxDashboard />
                  </span>
                  <span className="menu-link-text">DashBoard</span>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/student/dashboard/assignedBatches"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <FaLayerGroup />
                  </span>
                  <span className="menu-link-text">Manage Batches</span>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/student/dashboard/assignedBatch"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <MdOutlineAssignment />
                  </span>
                  <span className="menu-link-text">Task Management</span>
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink
                  to="/student/dashboard/circular"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <AiTwotoneNotification />
                  </span>
                  <span className="menu-link-text">Circulars</span>
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  to="/student/dashboard/meetings"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <AiTwotoneNotification />
                  </span>
                  <span className="menu-link-text">Meeting</span>
                </NavLink>
              </li>
              
              
              <li className="menu-item">
                <NavLink
                  to="/student/dashboard/setting"
                  activeClassName="active"
                  className="menu-link"
                >
                  <span className="menu-link-icon">
                    <MdOutlineSettings />
                  </span>
                  <span className="menu-link-text">Settings</span>
                </NavLink>
              </li>
             
             
            
            
            

             
              <li className="menu-item">
                <NavLink
                  to="/login" // Optional: Redirect route after logout
                  className="menu-link"
                  onClick={handleLogout} // Logout function attached here
                >
                  <span className="menu-link-icon">
                    <VscSignOut />
                  </span>
                  <span className="menu-link-text">Sign Out</span>
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
