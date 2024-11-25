import styled from "styled-components";
import { Menu as AntMenu } from "antd";
import {theme} from "../../../../../style/theme/theme"

export const StyledMenuItem = styled(AntMenu.Item)`
  &.ant-menu-item-selected {
    background-color: #ff007a !important; /* Pink background for selected items */
    color: white !important; /* White text for contrast */
  }

  // &:hover {
  //   background-color: #ff007a !important; /* Pink background on hover */
  //   color: white !important; /* White text for contrast */
  // }

  &:focus {
    background-color: #ff007a !important; /* Pink background on focus */
    color: white !important; /* White text for contrast */
  }
`;

export const Layout = styled.div`
font-family: ${theme.typography.fontFamily};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.colors.gray100};
`;
