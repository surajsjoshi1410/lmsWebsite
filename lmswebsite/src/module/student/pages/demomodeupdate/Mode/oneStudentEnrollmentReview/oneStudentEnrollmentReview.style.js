import styled from "styled-components";
import {theme, media} from "../../../../../../style/theme/theme";

export const TestimonialSection = styled.section`
  padding: 40px 20px;
  width: 80%;
  margin-left: 10%;

  @media (max-width: 1200px) {
    width: 90%;
    margin-left: 5%;
  }

  @media (max-width: 990px) {
    width: 95%;
    margin-left: 2.5%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #000;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const TestimonialsContainerMain = styled.div`
  display: grid;
  grid-template-areas:
    "child1"
    "child2";
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  height: 100%; /* Ensures the container spans full height for proper positioning */
  position: relative; /* Enable absolute positioning for children */

  & > :first-child {
    position: absolute;
    top: 0;
    left: 0;
  }

  & > :last-child {
    position: absolute;
    bottom: -500px;
    right: 0;
  }

  @media (max-width: 1200px) {
    grid-template-areas:
      "child1"
      "child2";
    grid-gap: 50px;
  }

  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    margin-top: 0;

    & > :first-child,
    & > :last-child {
      position: static; /* Reset positioning for stacking */
    }
  }
`;

export const TestimonialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 990px) {
    margin: 50px;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically */
    align-items: center; /* Center elements */
    gap: 15px; /* Add spacing between elements */
    margin: 0 auto;
    border: 2px solid #ccc;
    padding: 20px;
  }
`;

export const StudentImage = styled.img`
  position: relative;
  width: 200px;
  border-radius: 10px;
  margin-left: -50px;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 180px;
  }

  @media (max-width: 768px) {
    width: 150px; /* Reduce image size */
    margin: 0 auto; /* Center the image */
  }
`;

export const TestimonialCard = styled.div`
  background-color: ${theme.colors.one};
  border-radius: 80px;
  padding: 20px;
  max-width: 400px;
  text-align: left;
  margin-left: -120px;

  @media (max-width: 1200px) {
    max-width: 90%;
    padding: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto;
    padding: 15px;
  }
`;

export const TestimonialText = styled.p`
  font-size: 16px;
  color:${theme.colors.primary};
  
  width: 300px;
  margin: 0px 30px;
  text-align: center;
  line-height: 25px;

  @media (max-width: 1200px) {
    width: 90%;
    margin-left: 50px;
  }

  @media (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
    font-size: 14px;
    margin: 10px auto; /* Center the text */
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const TestimonialAuthor = styled.div`
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.blueone};
  color: ${theme.colors.white};
  padding: 10px;
  border-radius: 80px;
  margin-top: 150px;
  margin-left: -400px;
  width: 250px;
  z-index: 1;

  @media (max-width: 1200px) {
    margin-left: -350px;
    margin-top: 120px;
  }

  @media (max-width: 768px) {
    margin: 10px auto; /* Center the author section */
    width: 100%; /* Make it responsive */
    padding: 15px; /* Adjust padding */
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const AuthorName = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color:${theme.colors.white};
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const AuthorCompany = styled.p`
  font-size: 12px;
  color: ${theme.colors.gray700};
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const Rating = styled.div`
  font-size: 14px;
  color: ${theme.colors.white};
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    text-align: center;
  }
`;
