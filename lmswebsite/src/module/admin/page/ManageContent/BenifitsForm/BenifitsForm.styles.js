import styled from "styled-components";
import { theme } from "../../../../../style/theme/theme"; // Ensure this path is correct
 
export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: ${theme.typography.fontFamily};
 
  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-family: ${theme.typography.fontFamily};
  }
 
  .ant-form-item-label > label {
    // font-weight: bold;
    color: ${theme.colors.primary};
  }
 
  .ant-btn-primary {
    background-color: ${theme.colors.pink4};
    border-color: ${theme.colors.pink4};

          &:hover {
    background-color: ${theme.colors.pink4} !important;
    border-color: white !important;
  }
  }
 
  .ant-btn-primary:disabled {
    background-color: ${theme.colors.grey};
  }
 
  .ant-alert {
    margin-bottom: 1em;
  }
`;