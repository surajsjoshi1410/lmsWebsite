import styled from "styled-components";
import { theme } from "../../../style/theme/theme";

export const Button = styled.button`
  background-color: ${theme.colors.pink4};
  width: 100%;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${theme.colors.pink}; /* Adjust hover color */
  }
`;
