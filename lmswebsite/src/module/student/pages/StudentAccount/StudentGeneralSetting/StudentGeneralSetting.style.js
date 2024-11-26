import styled from "styled-components";
import { Input, DatePicker } from "antd";

export const StyledInput = styled(Input)`
 font-size: 14px;
  // color: #333;
  background-color: transparent;
  // border: 1px solid #ccc;
  // outline: none;
  flex: 1;
  padding: 8px;
  border-radius: 5px;

  &:focus {
    border: 2px solid #ff007a;
  }


  &:hover {
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
  background-color: #f52754;
  color: white;
  font-size: 13px;
  font-weight: 500;
  padding: 10px 20px;
  border-color:white !important;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;

  

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

export const StyledDatePicker = styled(DatePicker)`
  border-color: #f52754 !important;

  &:focus,
  &.ant-picker-focused {
    border-color: #ff007a !important;
    border:2px solid #ff007a !important;
  }

   &:hover {
    border-color: #ff007a !important;
      border:2px solid #ff007a !important;
  }
`;
