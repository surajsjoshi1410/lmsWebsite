import React, { useState, useEffect } from "react";
import logo from "../../../../assets/LOGO.png";
import {
  HeaderContainer,
  Logo,
  NavMenu,
  NavLinks,
  DropdownContent,
  HamburgerMenu,
  MobileMenu,
  SignUpButton,
} from "./oneHeader.style";
import { useNavigate } from "react-router-dom";

const oneHeader = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isStudyMaterialOpen, setIsStudyMaterialOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate= useNavigate();
  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
    setIsStudyMaterialOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const toggleStudyMaterialDropdown = () => {
    setIsStudyMaterialOpen(!isStudyMaterialOpen);
    setIsCoursesOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 580) { // Adjust this breakpoint as needed
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer>
      <Logo>
        <a href="/">
          <img src={logo} alt="The Toppers Academy" className="logo-icon" />
        </a>
      </Logo>
      
      {/* Desktop Nav Menu */}
      <NavMenu>
        <NavLinks>
          <li className="dropdown">
            <a href="#!" onClick={toggleCoursesDropdown}>
              Courses
            </a>
            <DropdownContent isOpen={isCoursesOpen}>
              <li><a href="">Course 1</a></li>
              <li><a href="">Course 2</a></li>
              <li><a href="">Course 3</a></li>
            </DropdownContent>
          </li>
          <li className="dropdown">
            <a href="#!" onClick={toggleStudyMaterialDropdown}>
              Study Material
            </a>
            <DropdownContent isOpen={isStudyMaterialOpen}>
              <li><a href="">Material 1</a></li>
              <li><a href="">Material 2</a></li>
              <li><a href="">Material 3</a></li>
            </DropdownContent>
          </li>
          <li><a href="">Become a Teacher</a></li>
          <li><a href="">Create Your Enrollment</a></li>
          <li><a href="">About Us</a></li>
        </NavLinks>
      </NavMenu>

      {/* Hamburger Icon for Mobile */}
      <HamburgerMenu onClick={toggleMobileMenu}>
        <span />
        <span />
        <span />
      </HamburgerMenu>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <MobileMenu>
          <NavLinks>
            <li><a href="">Courses</a></li>
            <li><a href="">Study Material</a></li>
            <li><a href="">Become a Teacher</a></li>
            <li><a href="">Create Your Enrollment</a></li>
            <li><a href="">About Us</a></li>
          </NavLinks>
        </MobileMenu>
      )}
      <SignUpButton onClick={handleLogout}>Logout</SignUpButton>
    </HeaderContainer>
  );
};

export default oneHeader;
