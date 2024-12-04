import styled from "styled-components";
import { theme } from "../../../../../style/theme/theme"; // Adjusted the import to match theme usage
 
export const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: ${theme.typography.fontFamily};
 
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
 
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
 
  label {
    font-family: ${theme.typography.fontFamily};
    // font-weight: bold;
    margin-bottom: 5px;
    display: flex;
  }
 
  .ant-btn-primary {
    background-color: ${theme.colors.pink4};
    border-color: ${theme.colors.pink4};

          &:hover {
    background-color: ${theme.colors.pink4} !important;
    border-color: white !important;
  }
  }
 
  .ant-btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
 
  p {
    margin-top: 10px;
  }
`;
 
 
 