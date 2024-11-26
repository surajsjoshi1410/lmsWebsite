// src/AccountSettings/style.js
import styled from "styled-components";

export const IconInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
`;

export const Icon = styled.span`
  margin-right: 8px;
  color: #fa5a7d;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  h2 {
    grid-column: span 2;
    font-size: 24px;
    font-weight: 500;
    color: #333;
    margin-bottom: 20px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    padding: 10px;
  }
  @media (max-width: 768px) {
    padding: 15px;
    grid-template-columns: 1fr 1fr;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
      text-align: center; /* Center the heading */
    }

    .button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 15px;
    }
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 540px) {
    flex-direction: column; /* Stack label and input in a column */
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;

  @media (max-width: 480px) {
    text-align: left; /* Align label to the left */
  }
`;

export const Input = styled.input`
  font-size: 14px;
  color: #333;
  background-color: transparent;
  border: 1px solid #ccc;
  outline: none;
  flex: 1;
  padding: 8px;
  border-radius: 5px;

  &:focus {
    border: 2px solid #ff007a;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    padding: 5px 10px;
  }
`;

export const Button = styled.button`
  width: 40%;
  float: right;
  background-color: #fa5a7d;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #d80067;
  }

  @media (max-width: 1200px) {
    width: 40%;
    font-size: 13px;
    padding: 8px 16px;
  }

  @media (max-width: 768px) {
    width: 30%;
    font-size: 12px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for smaller screens */
    font-size: 11px;
    padding: 5px 10px;
  }
`;
