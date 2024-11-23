import styled from "styled-components";

export const StudyMaterialsContainer = styled.div`
  text-align: center;
  padding: 40px;
  background-color: white;
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  position: relative;
`;

export const HeadingUnderline = styled.div`
  width: 100px;
  height: 4px;
  background-color: #ff0080;
  margin: 8px auto 0;
`;

export const ClassButtons = styled.div`
  margin-top: 20px;
`;

export const ClassButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${(props) => (props.active ? "#ff0080" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff0080;
    color: #fff;
    border-color: #ff0080;
  }
`;

export const MaterialsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

export const MaterialCard = styled.div`
  width: 220px;
  padding: 20px;
  border-radius: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center align items horizontally */
  justify-content: center; /* Center align items vertically */
  text-align: center;

  &.previous-year {
    background-color: #fbe9e7;
  }
  &.ncert {
    background-color: #e0f7fa;
  }
  &.revision {
    background-color: #f3e5f5;
  }
  &.general {
    background-color: #e8f5e9;
  }
`;

export const MaterialImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;

  @media (max-width: 1280px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;
export const MaterialTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

export const MaterialDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

// Responsive Styles
export const responsiveStyles = `
  @media (max-width: 1280px) {
    ${Heading} {
      font-size: 32px;
    }
    ${ClassButton} {
      padding: 8px 16px;
    }
    ${MaterialCard} {
      width: 200px;
    }
    ${MaterialImage} {
      width: 70px;
      height: 70px;
    }
  }

  @media (max-width: 768px) {
    ${StudyMaterialsContainer} {
      padding: 20px;
    }
    ${Heading} {
      font-size: 28px;
    }
    ${ClassButton} {
      padding: 8px 12px;
      font-size: 14px;
    }
    ${MaterialsGrid} {
      gap: 15px;
    }
    ${MaterialCard} {
      width: 180px;
      padding: 15px;
    }
    ${MaterialImage} {
      width: 60px;
      height: 60px;
    }
    ${MaterialTitle} {
      font-size: 18px;
    }
    ${MaterialDescription} {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    ${StudyMaterialsContainer} {
      padding: 10px;
    }
    ${Heading} {
      font-size: 24px;
    }
    ${ClassButtons} {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    ${ClassButton} {
      padding: 6px 10px;
      font-size: 12px;
    }
    ${MaterialsGrid} {
      gap: 10px;
    }
    ${MaterialCard} {
      width: 160px;
      padding: 10px;
    }
    ${MaterialImage} {
      width: 50px;
      height: 50px;
    }
    ${MaterialTitle} {
      font-size: 16px;
    }
    ${MaterialDescription} {
      font-size: 12px;
    }
  }
`;

export default responsiveStyles;
