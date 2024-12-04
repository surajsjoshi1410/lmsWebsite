import styled from "styled-components";
import { Form, Select } from "antd";

// Wrapper for the entire chart container
export const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 3vh;

  @media (max-width: 768px) {
    margin-top: 71vh;
  }
`;

// Title in the chart container aligned to the left
export const ChartTitle = styled.h2`
  position: absolute;
  top: 20px;
  left: 0;
  font-size: 1rem;
  margin: 0;
  padding: 0 30px; // Add some padding for spacing from the left edge

  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    left: 0;
    font-size: 24px;
    margin: 0;
    padding: 0 30px;
  }
`;

// Button to control the month selector
export const MonthButton = styled.button`
  float: right;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border: 2px solid transparent; // Initially no border
  border-radius: 4px;
  transition: border-color 0.3s ease;
`;

// Wrapper for the month selection dropdown and icon
export const MonthSelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// Form item for select dropdown inside the button
export const FormItem = styled(Form.Item)`
  margin-left: 10px;
  margin-bottom: 0;
`;

// Customize the select dropdown
export const CustomSelect = styled(Select)`
  .ant-select-selector {
    border-color: #ee1b7a !important; // Pink border for the select box
    border-radius: 4px !important;
    box-shadow: 0px 0px 4px #ee1b7a;
    &:hover {
      border-color: #ee1b7a !important; // Pink border on hover
      box-shadow: 0px 0px 4px #ee1b7a;
    }
  }

  .ant-select-item-option {
    color: #ee1b7a; // Default color for options
    &:hover {
      background-color: #ee1b7a !important; // Pink on hover of option
      color: white !important; // Text color on hover
    }
  }

  .ant-select-item-option-selected {
    background-color: #ee1b7a !important; // Pink background for selected option
    color: white !important; // Text color for selected option
  }

  .ant-select-item-option-active {
    background-color: #ee1b7a !important; // Pink background on option active
    color: white !important; // Text color when option is active
  }
`;

// Wrapper to center the chart on the screen
export const ChartContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
`;

// Container for the chart with a fixed width and height
export const ChartContainer = styled.div`
  width: 1200px;
  height: 300px;
`;
