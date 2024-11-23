import React, { useState } from "react";
import logo from "../../../icons/LandingPageIcons/logo.svg";
import {
  HeaderContainer,
  Logo,
  LogoImage,
  MenuIcon,
  Hamburger,
  NavMenu,
  NavLinks,
  NavLinkItem,
  DropdownContent,
  AuthButtons,
  SignInButton,
  SignUpButton,
} from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isStudyMaterialOpen, setIsStudyMaterialOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleCoursesDropdown = () => {
    setIsCoursesOpen(!isCoursesOpen);
    setIsStudyMaterialOpen(false);
  };

  const toggleStudyMaterialDropdown = () => {
    setIsStudyMaterialOpen(!isStudyMaterialOpen);
    setIsCoursesOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo href="/">
        <LogoImage src={logo} alt="The Toppers Academy" />
      </Logo>

      <MenuIcon onClick={toggleMenu}>
        <Hamburger className={isMenuOpen ? "open" : ""} />
      </MenuIcon>

      <NavMenu className={isMenuOpen ? "open" : ""}>
        <NavLinks>
          <NavLinkItem>
            <a href="#!" onClick={toggleCoursesDropdown}>Courses</a>
            {isCoursesOpen && (
              <DropdownContent>
                <li><a href="/">Course 1</a></li>
                <li><a href="/">Course 2</a></li>
                <li><a href="/">Course 3</a></li>
              </DropdownContent>
            )}
          </NavLinkItem>
          <NavLinkItem>
            <a href="#!" onClick={toggleStudyMaterialDropdown}>Study Material</a>
            {isStudyMaterialOpen && (
              <DropdownContent>
                <li><a href="/">Material 1</a></li>
                <li><a href="/">Material 2</a></li>
                <li><a href="/">Material 3</a></li>
              </DropdownContent>
            )}
          </NavLinkItem>
          <NavLinkItem><a href="/">Become a Teacher</a></NavLinkItem>
          <NavLinkItem><a href="/">Create Your Enrollment</a></NavLinkItem>
          <NavLinkItem><a href="/">About Us</a></NavLinkItem>
        </NavLinks>
        <AuthButtons>
          <Link to="/login">
            <SignInButton>Sign In</SignInButton>
          </Link>
          <Link to="/signup">
            <SignUpButton>Sign Up</SignUpButton>
          </Link>
        </AuthButtons>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
