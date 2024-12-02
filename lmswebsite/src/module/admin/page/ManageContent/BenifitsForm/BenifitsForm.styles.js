import styled from "styled-components";
import { theme } from "../../../../../style/theme/theme";

export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: ${theme.colors.white};
  border-radius: 4px;
  position: relative;

  h2 {
    font-family: ${theme.typography.fontFamily};
    text-align: center;
  }
`;
export const StyledButton = styled.button`
  background-color: ${theme.colors.pink};
  border:${theme.colors.pink};
  color: #fff !important;
  font-size: 16px;
  font-weight: bold;
  width: 150px;
  height: 40px;
  display: block;
  margin: 20px auto 0 auto;
  border-radius: 4px;
  text-align: center;

 
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
box-shadow:${theme.colors.primary}
  border-radius: 4px;
  font-size: 16px;

   &:focus {
    border-color: ${theme.colors.red}; /* Customize the border color when focused */
    box-shadow: 0 0 5px ${theme.colors.red}; /* Optional: Add a glow effect */
    // outline: none; /* Remove default blue outline */
  }
`;
