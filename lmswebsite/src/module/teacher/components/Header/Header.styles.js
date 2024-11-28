import styled from "styled-components";
import { theme, media } from "../../../../style/theme/theme";

export const HeaderContainer = styled.header`
  background-color: ${theme.colors.backgroundDark};
  padding: 10px 20px;
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .logo-icon {
    height: 50px;
    width: auto;

    ${media.sm`
      height: 40px;
    `}
  }
`;

export const NavMenu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.black};

  ${media.sm`
    display: none; /* Hide on small screens */
  `}
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;

  li {
    position: relative;
  }

  a {
    color: ${theme.colors.black};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

export const DropdownContent = styled.ul`
  position: absolute;
  top: 100%;
  width: 112px;
  left: 0;
  background-color: ${theme.colors.backgroundLight};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  li {
    padding: 5px 10px;

    a {
      color: ${theme.colors.textPrimary};
      font-weight: normal;

      &:hover {
        color: ${theme.colors.primaryDark};
      }
    }
  }
`;

// Hamburger icon for mobile view
export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;

  span {
    display: block;
    height: 2px;
    width: 24px;
    background-color: ${theme.colors.black};
  }

  ${media.sm`
    display: flex;
  `}
`;

// Mobile menu styles
export const MobileMenu = styled.div`
  position: absolute;
  top: 60px; /* Adjust based on header height */
  left: 0;
  width: 100%;
  background-color: ${theme.colors.white};
  padding: 10px 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  ${NavLinks} {
    flex-direction: column;
    gap: 10px;

    li {
      text-align: left;
    }
  }
`;

export const SignUpButton = styled.button`
  background-color: #ff0080;
  color: white;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;

  &:hover {
    background-color: #e60073;
  }
`;
