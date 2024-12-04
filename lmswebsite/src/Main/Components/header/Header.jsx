import React, { useState } from "react";
import LogoImage from "../../assets/logo.svg";
import {
  Navbar,
  Logo,
  NavLinks,
  NavLink,
  Dropdown,
  ButtonGroup,
  Button,
  HamburgerMenu,
  MobileMenu,
} from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Navbar>
      <Logo>
        <img src={LogoImage} alt="Logo" />
      </Logo>

      <HamburgerMenu onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerMenu>

      <NavLinks menuOpen={menuOpen}>
        <Dropdown>
          <button>Courses</button>
          <div className="dropdown-content">
            <a href="#">Course 1</a>
            <a href="#">Course 2</a>
          </div>
        </Dropdown>

        <Dropdown>
          <button>Study Material</button>
          <div className="dropdown-content">
            <a href="#">Material 1</a>
            <a href="#">Material 2</a>
          </div>
        </Dropdown>

        <NavLink href="#">Become a Teacher</NavLink>
        <NavLink href="#">Create Your Enrollment</NavLink>
        <NavLink href="#">About Us</NavLink>
      </NavLinks>
      <ButtonGroup>
        <Link to={"/login"}>
          <Button>Sign In</Button>
        </Link>
        <Link
          to={"/signup"}
        >
          <Button>Sign Up</Button>
        </Link>
      </ButtonGroup>

      {menuOpen && (
        <MobileMenu>
          <NavLink href="#">Courses</NavLink>
          <NavLink href="#">Study Material</NavLink>
          <NavLink href="#">Become a Teacher</NavLink>
          <NavLink href="#">Create Your Enrollment</NavLink>
          <NavLink href="#">About Us</NavLink>
          <Link to={"/login"}>
            <Button>Sign In</Button>
          </Link>
          <Link
            to={"/signup"}
          >
            <Button>Sign Up</Button>
          </Link>

        </MobileMenu>
      )}
    </Navbar>
  );
};

export default Header;
