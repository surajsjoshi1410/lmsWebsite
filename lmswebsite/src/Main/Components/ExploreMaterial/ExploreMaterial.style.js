import { theme } from "../../../style/theme/theme";
import styled from "styled-components";

export const ExploreMaterialWarp = styled.div`
  font-family: ${theme.typography.fontFamily};
  width: 80%;
  margin: 100px auto;
  padding: 20px;
  text-align: center;

  @media (max-width: 990px) {
    margin-top: 5%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 15% auto 0 auto;
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin-top: 10%;
    padding: 10px;
  }
`;

export const ExploreMaterialHeader = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;

  @media (max-width: 990px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ExploreMaterialSingleClass = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ExploreMaterialClass = styled.button`
  margin: 10px;
  padding: 10px 20px;
  color: ${(props) =>
    props.isSelected
      ? theme.colors.white // Corrected to access theme colors through props
      : theme.colors.black}; // Dynamic text color
  background-color: ${(props) =>
    props.isSelected
      ? theme.colors.pink4 // Corrected to access theme colors through props
      : theme.colors.frenchGray}; // Dynamic background color
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, color 0.3s ease; // Smooth transition

  &:hover {
    background-color: ${(props) =>
      props.isSelected
        ? theme.colors.pink3 // Corrected to access theme colors through props
        : theme.colors.gray700}; // Hover effect
  }

  @media (max-width: 990px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 6px 12px;
  }
`;

export const ExploreMaterialCard = styled.div`
  display: flex;
  flex-wrap: wrap; // Ensure cards wrap on smaller screens
  justify-content: space-between; // Space out the cards evenly
  gap: 20px; // Gap between cards
  margin: 0 auto; // Center the content
  width: 100%; // Allow the cards to take up full width

  @media (max-width: 990px) {
    gap: 15px; // Smaller gap on medium screens
  }

  @media (max-width: 768px) {
    gap: 10px; // Even smaller gap on small screens
  }

  @media (max-width: 480px) {
    gap: 10px; // Same gap for mobile
    flex-direction: column; // Stack the cards vertically on very small screens
  }
`;

export const MaterialCard = styled.div`
  display: flex;
  flex-direction: column; // Align content vertically
  justify-content: space-between;
  width: calc(
    25% - 20px
  ); // Calculate card width dynamically based on 4 per row
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 990px) {
    width: calc(33.33% - 15px); // 3 cards per row on medium screens
    padding: 18px;
  }

  @media (max-width: 768px) {
    width: calc(50% - 10px); // 2 cards per row on small screens
    padding: 15px;
    img {
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    width: 100%; // 1 card per row on very small screens
    padding: 12px;
  }
`;

export const MaterialTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;

  @media (max-width: 990px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const MaterialSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 10px;

  @media (max-width: 990px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
