import styled from "styled-components";
import { theme } from "../../../../../style/theme/theme";
 
export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: ${theme.colors.white};
  border-radius: 8px;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: ${theme.typography.fontFamily};
 
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: ${theme.colors.primary};
  }
 
  .ant-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
 
  .ant-form-item-label > label {
    // font-weight: bold;
    font-family: ${theme.typography.fontFamily};
    font-size: 16px;
    color: ${theme.colors.darkGrey};
  }
 
  .ant-input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid ${theme.colors.grey};
    border-radius: 4px;
  }
 
  .ant-btn-primary {
    background-color: ${theme.colors.pink4};
    border: none;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
 
      &:hover {
    background-color: ${theme.colors.pink4} !important;
    border-color: white !important;
  }
 
    &:disabled {
      background-color: ${theme.colors.lightGrey};
      cursor: not-allowed;
    }
  }
 
  .error-message {
    color: ${theme.colors.error};
    font-size: 14px;
    margin-bottom: 10px;
  }
 
  .success-message {
    color: ${theme.colors.success};
    font-size: 14px;
    margin-bottom: 10px;
  }
   
`;