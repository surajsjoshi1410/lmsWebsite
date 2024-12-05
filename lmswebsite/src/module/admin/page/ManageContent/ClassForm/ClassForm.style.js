// src/module/teacher/pages/BecomeTeacherApplicationForm/TaskBoard/ClassForm.style.js

import styled from 'styled-components';
import {theme,media} from '../../../../../style/theme/theme';
// Container for the entire form
export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto; /* Center the form horizontally */

  h2 {
    text-align: center;
    color: ${theme.colors.black};
    margin-bottom: 30px;
    font-size: 1.8rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  /* Responsive Design */
  @media (max-width: 600px) {
    padding: 20px;

    h2 {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
  }
`;

// Container for each form item (label + input/select)
export const InlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    margin-bottom: 8px;
    font-weight: 600;
    color: ${theme.colors.black};
    font-size: 1rem;
  }

  input,
  select {
    padding: 10px 15px;
    border: 1px solid ${theme.colors.black};
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

  
  }

  /* Responsive Design */
  @media (max-width: 600px) {
    margin-bottom: 15px;

    label {
      font-size: 0.95rem;
    }

    input,
    select {
      padding: 8px 12px;
      font-size: 0.95rem;
    }
  }
`;

// Styled input field
export const Input = styled.input`
  /* Additional styling if needed */
`;

// Styled label
export const Label = styled.label`
  /* Additional styling if needed */
`;

// Styled submit button
export const Button = styled.button`
  padding: 12px 20px;
  // color:${theme.colors.pink};
  color:${theme.colors.white};
  background-color:${theme.colors.pink};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  // &:hover:not(:disabled) {
  //   background-color: #ff4757;
  // }

  &:disabled {
    background-color: #ff6b6b80;
    cursor: not-allowed;
  }

  /* Responsive Design */
  @media (max-width: 600px) {
    padding: 10px 18px;
    font-size: 0.95rem;
  }
`;
