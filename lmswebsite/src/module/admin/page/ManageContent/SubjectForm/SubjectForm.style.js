import styled from "styled-components";
import { media, theme } from "../../../../../style/theme/theme";
 
 
export const FormContainer = styled.div`
  padding: 40px;
  border-radius: 8px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  font-family: ${theme.typography.fontFamily};
 
  h2 {
    text-align: center;
    color: ${theme.colors.black};
    margin-bottom: 30px;
    font-size: 1.8rem;
    font-family: "Arial", sans-serif;
  }
 
  .ant-form-item-label > label {
    font-size: 1rem;
    // font-weight: 600;
  }
 
  .ant-form-item {
    margin-bottom: 1.5rem;
  }
 
  .ant-btn-primary {
    border-color: white;
    border-radius: 5px;
    background-color: ${theme.colors.pink4};
    margin: auto;
    display: block;
 
 
       &:hover {
    background-color: ${theme.colors.pink4} !important;
    border-color: white !important;
  }
  }
`;