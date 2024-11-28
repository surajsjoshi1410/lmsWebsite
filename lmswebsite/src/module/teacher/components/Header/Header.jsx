import React, { useState, useEffect } from "react";
import { Layout, Menu, Dropdown, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.svg";

const { Header } = Layout;

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // Clear all items in localStorage
    navigate("/login"); // Redirect to the login page or desired route
  };

  // Close the mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 580) {
        // Adjust this breakpoint as needed
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="#">Course 1</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Course 2</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Course 3</a>
      </Menu.Item>
    </Menu>
  );

  const studyMaterialMenu = (
    <Menu>
      <Menu.Item>
        <a href="#">Material 1</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Material 2</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Material 3</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="header" style={{ padding: 0 }}>
      <div className="logo" style={{ float: "left", margin: "0 16px" }}>
        <a href="/">
          <img
            src={logo}
            alt="The Toppers Academy"
            className="logo-icon"
            style={{ width: 120 }}
          />
        </a>
      </div>

      {/* Desktop Menu */}
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ lineHeight: "64px", float: "right" }}
      >
        <Menu.Item key="courses">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Courses <DownOutlined />
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="studyMaterial">
          <Dropdown overlay={studyMaterialMenu} trigger={["click"]}>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Study Material <DownOutlined />
            </a>
          </Dropdown>
        </Menu.Item>
        <Menu.Item key="becomeTeacher">
          <a href="#">Become a Teacher</a>
        </Menu.Item>
        <Menu.Item key="createEnrollment">
          <a href="#">Create Your Enrollment</a>
        </Menu.Item>
        <Menu.Item key="aboutUs">
          <a href="#">About Us</a>
        </Menu.Item>
        <Menu.Item key="logout" style={{ marginLeft: "16px" }}>
          <Button type="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Menu.Item>
      </Menu>

      {/* Hamburger Icon for Mobile */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "64px",
            right: "0",
            background: "white",
            width: "100%",
          }}
        >
          <Menu mode="vertical" theme="light">
            <Menu.Item key="courses">Courses</Menu.Item>
            <Menu.Item key="studyMaterial">Study Material</Menu.Item>
            <Menu.Item key="becomeTeacher">Become a Teacher</Menu.Item>
            <Menu.Item key="createEnrollment">Create Your Enrollment</Menu.Item>
            <Menu.Item key="aboutUs">About Us</Menu.Item>
            <Menu.Item key="logout">
              <Button type="primary" onClick={handleLogout}>
                Logout
              </Button>
            </Menu.Item>
          </Menu>
        </div>
      )}
    </Header>
  );
};

export default HeaderComponent;
