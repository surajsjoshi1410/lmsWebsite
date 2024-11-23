import styled from "styled-components";

// Container for the entire teacher section
export const TeacherContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 10%;

  @media (max-width: 990px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
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
    font-size: 20px;
  }
`;

// Subtitle for the teacher section
export const TeacherSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
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
  justify-content: space-evenly;

  @media (max-width: 990px) {
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CoursesTitle = styled.h2`
margin-left : 60px ;

`;


// Individual teacher card
export const TeacherCard = styled.div`
  flex: 0 0 250px; /* Fixed width for each card */
  text-align: center;
  padding: 15px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    height: 300px;

    @media (max-width: 990px) {
      height: 250px;
    }

    @media (max-width: 768px) {
      height: 200px;
    }

    @media (max-width: 480px) {
      height: 150px;
    }
  }

  @media (max-width: 990px) {
    flex: 0 0 160px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// Teacher details within the card
export const TeacherDetails = styled.div`
  margin-top: -10px;
  background-color: black;
  color: white;
  height: 125px;
  padding: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;

  @media (max-width: 990px) {
    height: 100px;
    padding: 15px;
    height: 80px;
  }

  @media (max-width: 768px) {
    height: 80px;
    padding: 10px;
    height: 80px;
  }

  @media (max-width: 480px) {
    height: 60px;
    padding: 5px;
    height: 80px;
  }
`;

// Experience text
export const Experience = styled.p`
  font-size: 16px;
  background-color: #fff;
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
  color: white;

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
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  justify-content: center;
  background: #f8f8f8;
  padding: 50px 0;
  margin-top: -15px;
  border-radius: 20px;

  @media (max-width: 990px) {
    margin-left: 50px;
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    margin-left: 30px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    margin-left: 20px;

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
    max-width: 250px;
  }

  @media (max-width: 768px) {
    max-width: 200px;
  }

  @media (max-width: 480px) {
    max-width: 150px;
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

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const ContextText = styled.p`
  font-size: 16px;
  color: #555;
  width: 300px;

  @media (max-width: 990px) {
    font-size: 14px;
    width: 250px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    width: 200px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    width: 150px;
  }
`;
