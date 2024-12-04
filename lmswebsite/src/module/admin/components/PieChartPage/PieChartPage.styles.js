// StyledComponents.js
import styled from "styled-components";
 
export const StyledPieChartWrapper = styled.div`
  width: 100%;
  max-width: 400px; /* Set maximum size */
  margin: 0 auto; /* Center horizontally */
  display: flex;
  justify-content: center;
  align-items: center;
 
  @media (max-width: 768px) {
    max-width: 100%; /* Adjust for smaller screens */
    padding: 10px;
  }
`;
 
// Wrapper for the entire chart container
export const ChartWrapper = styled.div`
  width: 100%;
  height: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Adds shadow effect
  border-radius: 8px; // Optional: adds rounded corners
  position: relative;
`;
 
// Title for the chart, placed at the top
export const ChartTitle = styled.h2`
  margin: 30px;
  font-size: 1rem;
  position: absolute;
  top: 0;
  left: 20%;
  transform: translateX(-50%);
 
  @media (max-width: 768px) {
    padding: 30px;
    font-size: 24px;
    position: absolute;
    top: 0;
    margin: 2px auto;
  }
`;
 
// Legend wrapper for the paid and unpaid sections
export const LegendWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 40px;
  margin-top: -20%;
 
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin-left: 46px;
    margin-top: -11%;
  }
`;
 
// Individual legend item
export const LegendItem = styled.p`
  margin-right: 40px;
  display: flex;
  align-items: center;
`;
 
// Legend colored box
export const LegendColorBox = styled.div`
  background-color: ${({ color }) => color};
  padding: 5px;
  display: inline-block;
  height: 15px; // Adjust height for the colored box
  width: 15px; // Adjust width for the colored box
  margin-right: 5px;
`;
 