import styled from "styled-components";
export const SideBarwrap = styled.div`
  background: ${(props) => props.theme.colors.mistyRose};
  padding: 20px 16px;
  box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
  width: ${(props) =>
    props.isOpen ? "260px" : "90px"}; /* Dynamically adjust width */
  display: flex;
  flex-direction: column;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 1000;
  transition: width 300ms ease-in-out; /* Focus on width transition */
  left: 0;
  top: 0;
  height: 100vh; /* Ensures full-height sidebar */

  .sidebar-top {
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sidebar-brand {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 12px;
  }

  .brand-logo {
    background: ${(props) => props.theme.colors.cadet};
    border-radius: 8px;
    width: 50px;
    height: 40px;
    display: flex;
    place-content: center;
    img {
      width: 44px;
    }
  }

  .brand-text {
    font-size: 24px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.cadet};
    display: ${(props) =>
      props.isOpen ? "inline" : "none"}; /* Control visibility */
  }

  .menu-link-text {
    color: ${(props) => props.theme.colors.gray700};
    display: ${(props) =>
      props.isOpen ? "inline" : "none"}; /* Control visibility of text */
  }

  .menu-link-icon {
    width: ${(props) => (props.isOpen ? "20px" : "24px")};
  }

  .menu-list {
    display: grid;
    row-gap: 6px;
  }

  .menu-item {
    list-style: none;
  }

  .menu-link {
    height: 44px;
    display: flex;
    align-items: center;
    column-gap: 14px;
    padding: 2px 20px;
    font-weight: 500;
    border-radius: 8px;
    transition: background 0.3s, box-shadow 0.3s;
  }

  .menu-link:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .menu-link.active {
    background: ${(props) => props.theme.colors.pink};
    border-radius: 8px;
    padding: 2px 20px;
    // box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
  }
`;
