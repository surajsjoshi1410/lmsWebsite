import styled from "styled-components";
import { media, theme } from "../../../../../style/theme/theme";
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
    font-weight: bold;
    margin-bottom: 5px;
    display: flex;
  }


  input {
  display: flex;
  justify-content: center;
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
  display: flex;
  align-items: center;
  justify-content: center;
    padding: 10px 15px;
    background-color: #007bff;
    color:${theme.colors.white};
    background-color:${theme.colors.pink};
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;


    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }

  p {
    margin-top: 10px;
  }
`;
