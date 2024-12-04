import styled from "styled-components";
import { theme } from "../../../style/theme/theme";

export const ChooseUsWarp = styled.div`
  font-family: ${theme.typography.fontFamily};
  width: 80%;
  margin: 50px auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ChooseUsHeader = styled.h2`
  font-size: 32px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ChooseUsCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ChooseUsCardWrapper = styled.div`
  width: 300px; /* Consistent width for all cards */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
  background-color: #fff;

  @media (max-width: 1200px) {
    width: 250px;
  }

  @media (max-width: 990px) {
    width: 200px;
  }

  @media (max-width: 768px) {
    width: 30%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    box-shadow: 0 0 2px #0000009c;
  }
`;

export const ChooseUsIcons = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px auto;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    margin: 10px auto;
    border-radius: 50%;
  }
`;

export const ChooseUsTitle = styled.h3`
  font-size: 20px;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ChooseUsDescription = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
