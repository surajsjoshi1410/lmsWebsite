import React from "react";
import { AppBarWrap } from "./Navbar.Styles";
import { MdNotificationsNone } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { MdOutlineMenu } from "react-icons/md";
// import profileIcon from "/path/to/profile-icon.png"; // Replace with your profile icon path
// // import logoIcon from "/path/to/logo-icon.png"; // Replace with your logo icon path

function NavBar() {
  return (
    <AppBarWrap>
      <div className="appbar-content">
        <div className="appbar-left">
          <button type="button" className="sidebar-open-btn">
            <MdOutlineMenu size={24} />
          </button>
          <h3 className="appbar-title">Dashboard</h3>
        </div>
        <div className="appbar-right">
          <div className="appbar-search"></div>

          {/* Notification Bell Icon */}
          <button className="notification-bell">
            <MdNotificationsNone size={24} />
            {/* {unreadCount > 0 && (
              <span className="unread-count">{unreadCount}</span>
            )} */}
          </button>
        </div>
      </div>
    </AppBarWrap>
  );
}

export default NavBar;
