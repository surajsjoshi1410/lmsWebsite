import styled from "styled-components";
import { theme, media } from "../../../../../style/theme/theme"; // Adjust the path to your theme file

export const FormContainer = styled.div`
  background-color: ${theme.colors.white};
  padding: 40px;
  border-radius: 8px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto; /* Center the form horizontally */
  
  h2 {
    text-align: center;
    color: ${theme.colors.black};
    font-size: 1.8rem;
    font-family: ${theme.typography.fontFamily};
    margin-bottom: 30px;
  }

  ${media.sm`
    padding: 20px;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  `}
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5em;

  label {
    font-size: 1rem;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.primary};
    margin-bottom: 0.5em;
  }

  ${media.sm`
    label {
      font-size: 0.9rem;
    }
  `}
 
`;

export const Input = styled.input`
  padding: 0.5em;
  border: 1px solid ${theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};

  &:focus {
    outline: none;
    border-color: ${theme.colors.black};
    box-shadow: 0 0 5px ${theme.colors.black};
  }

  ${media.sm`
    font-size: 0.9rem;
  `}
`;

export const TextArea = styled.textarea`
  padding: 0.5em;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.black};
    box-shadow: 0 0 5px ${theme.colors.black};
  }

  ${media.sm`
    font-size: 0.9rem;
  `}
`;

export const Select = styled.select`
  padding: 0.5em;
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};
  background-color: ${theme.colors.red};

  &:focus {
    outline: none;
    border-color: ${theme.colors.black};
    box-shadow: 0 0 5px ${theme.colors.black};
  }

  &:placeholder {
    color: ${theme.colors.black};
    border-color: ${theme.colors.black};
  }

  ${media.sm`
    font-size: 0.9rem;
  `}
`;

export const Button = styled.button`
  background-color: ${theme.colors.pink4};
  color: ${theme.colors.white};
  padding: 0.7em 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  transition: background-color 0.3s;
  align-self: center; /* Center the button horizontally */

 &:hover {
    background-color: ${theme.colors.pink4};
  }

  // &:disabled {
  //   background-color: ${theme.colors.pink4};
  //   cursor: not-allowed;
  // }

  ${media.sm`
    padding: 0.6em 1.2em;
  `}
`;

export const FeatureInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 1em;

  input {
    flex: 1;
  }

  button {
    background-color: ${theme.colors.pink4};
    color: ${theme.colors.white};
    padding: 0.5em;
    font-size: 0.9rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${theme.colors.pink4};
    }
  }
`;

