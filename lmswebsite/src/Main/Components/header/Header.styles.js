import styled from "styled-components";
import { media, theme } from "../../../style/theme/theme";

export const Navbar = styled.nav`
  font-family: ${theme.typography.fontFamily};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 9rem;
  border-radius: 8px;
  position: relative;
  background-color: ${theme.colors.white};

  ${media.lg`
    padding: 0.5rem 1.5rem;
  `}

  ${media.md`
    flex-wrap: wrap;
    padding: 0.5rem 1rem;
  `}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 50px;
    margin-right: 10px;

    ${media.lg`
      height: 40px;
      margin-right: 5px;
    `}
  }

  ${media.md`
    justify-content: center;
    margin-bottom: 1rem;
    width: 100%;
  `}
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  ${media.lg`
    gap: 1rem;
    font-size: 0.9rem;
  `}

  ${media.md`
    display: none;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `}
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 500;
  margin-top: 0.5rem;

  &:hover {
    color: ${theme.colors.pink4};
  }

  ${media.xl`
    font-size: 14px;

  `}

  ${media.md`
    padding: 0.5rem 0;
    width: 100%;
    text-align: center;
  `}
`;

export const Dropdown = styled.div`
  position: relative;

  button {
    background: none;
    border: none;
    font-size: 16px;
    color: ${theme.colors.black};
    cursor: pointer;
    padding: 0.5rem;

    &:hover {
      color: ${theme.colors.pink4};
    }

    ${media.xl`
    font-size: 14px;

  `}

    ${media.md`
      width: 100%;
      text-align: center;
    `}
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.frenchGray};
    padding: 0.5rem;
    z-index: 10;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    a {
      display: block;
      text-decoration: none;
      color: ${theme.colors.black};
      margin: 0.5rem 0;

      &:hover {
        color: ${theme.colors.pink4};
      }
    }
  }

  &:hover .dropdown-content {
    display: block;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;

  ${media.md`
    /* align-items: center;
    gap: 1.5rem;
    width: 100%; */
    display: none;
  `}
`;

export const Button = styled.button`
  padding: 0.8vh 0.8vw;
  border: 1px solid ${theme.colors.pink4};
  background-color: ${theme.colors.white};
  color: ${theme.colors.pink4};
  cursor: pointer;
  border-radius: 4px;
  font-weight: 600;

  &.primary {
    background-color: ${theme.colors.pink4};
    color: ${theme.colors.white};
  }

  &:hover {
    background-color: ${theme.colors.pink3};
    color: ${theme.colors.white};
  }

  ${media.md`
  padding: 10px;
    width: 100%;
  `}
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background: ${theme.colors.black};
    margin: 4px 0;
    transition: 0.3s ease;
  }

  ${media.md`
    display: flex;
    position: absolute;
    right: 1rem;
    top: 1rem;
  `}
`;

export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  ${media.md`
    display: flex;
  `}
`;
