import styled from "styled-components";

// Wrapper for the entire chart
export const ChartWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;

  @media (max-width: 768px) {
    height: 500px;
  }
`;

// Title for the chart
export const ChartTitle = styled.h2`
  position: absolute;
  top: 20px;
  padding: 0 30px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 30px;
  }
`;

// Container for the chart content
export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    height: 450px;
  }
`;

export const ChartWarpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; // Ensure the height of the parent container is set
`;

// Wrapper for the BarChart itself
export const BarChartWrapper = styled.div`
  width: 600px;
  height: 300px;

  @media (max-width: 768px) {
    margin: 2px auto;
    width: 100%;
  }
`;
