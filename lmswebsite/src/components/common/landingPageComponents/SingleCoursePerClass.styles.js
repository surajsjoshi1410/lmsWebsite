import styled from "styled-components";

export const MainContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  background-color: white;

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    width: 95%;
  }
`;

export const HeadingUnderline = styled.div`
  width: 100px;
  height: 4px;
  background-color: #ff0080;
  margin: 8px auto 0;
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  position: relative;
`;

export const SubHeading = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
  font-weight: 500;
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SingleCourseSection = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: calc(33% - 20px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1200px) {
    width: calc(45% - 20px);
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CourseTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;
`;

export const CourseDetail = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 5px 0;
`;
