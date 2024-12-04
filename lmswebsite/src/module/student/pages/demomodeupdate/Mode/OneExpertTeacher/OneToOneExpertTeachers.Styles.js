import styled from "styled-components";
import { theme } from "../../../style/theme/theme";

// Container for the entire teacher section
export const TeacherContainer = styled.div`
  font-family: ${theme.typography.fontFamily};
  width: 80%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;

  @media (max-width: 990px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 576px) {
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

// Title for the teacher section
export const TeacherTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;

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

// Subtitle for the teacher section
export const TeacherSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
  font-style: italic;
  color: #555;
  text-align: center;

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

// Container for teacher cards
export const TeacherCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 2%;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
  }
`;

// Individual teacher card
export const TeacherCard = styled.div`
  flex: 0 0 300px;
  text-align: center;
  padding: 15px;
  /* transition: transform 0.3s; */

  img {
    width: 75%;
    height: 200px;
    margin: auto;
    position: relative;
    border-radius: 10px;

    @media (max-width: 990px) {
      height: 200px;
    }

    @media (max-width: 768px) {
      height: 400px;
    }
  }

  @media (max-width: 1400px) {
    text-align: center;
  }

  @media (max-width: 1200px) {
    flex: 0 0 250px;
  }

  @media (max-width: 990px) {
    flex: 0 0 220px;
  }

  @media (max-width: 768px) {
    margin-top: 10%;
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// Teacher details within the card
export const TeacherDetails = styled.div`
  width: 20%;
  position: absolute;
  background-color: ${theme.colors.pink3};
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: 82%;
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

// Experience text
export const Experience = styled.p`
  font-size: 16px;
  background-color: #fff;
  text-align: center;
  padding: 2px;
  width: 100px;
  border-radius: 10px;
  color: #000;

  @media (max-width: 990px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    width: 80px;
  }
`;

// Teacher name
export const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;

  @media (max-width: 990px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

// Teacher subject
export const Subject = styled.p`
  font-size: 16px;
  color: #000;

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

// Context container
export const TeacherContext = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
  padding: 50px 0;
  margin-top: 12%;
  border-radius: 20px;
  @media (max-width: 1200px) {
    margin-top: 12%;
  }

  @media (max-width: 990px) {
    padding: 30px 0;
    margin-top: 15%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 576px) {
    gap: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-top: 12%;
    gap: 10px;
  }
`;

// Context section
export const TeacherSection = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  text-align: left;

  @media (max-width: 990px) {
    max-width: 200px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContextImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;

  @media (max-width: 990px) {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const ContextText = styled.p`
  font-size: 16px;
  color: #555;
  width: 100%;

  @media (max-width: 990px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
