import styled from "styled-components";
import { theme, media } from "../../../style/theme/theme";

export const FAQWarp = styled.div`
  width: 80%;
  margin: 50px auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FAQHeader = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;

  ${media.lg`
    font-size: 1.8rem;`}

  ${media.md`
    font-size: 1.5rem;
    `}


  ${media.xs`
    font-size: 24px;
  `}
`;

export const FAQContainer = styled.div`
  width: 90%;
  margin: 0 auto; /* Centers the container */
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 990px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const FAQCard = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column; /* Ensure the question and answer are vertically aligned */
  justify-content: center; /* Ensures content inside card is centered */
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 990px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ToggleIcon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 10px;
  color: ${theme.colors.pink4};

  @media (max-width: 990px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const FAQSign = styled.p`
  font-size: 1rem;
  padding: 10px;
  margin-top: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;

  @media (max-width: 990px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const FAQQueryContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const FAQQuerySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 90%;
  border-radius: 20px;
  background-color: ${theme.colors.pink4};

  /* Ensures the image stays on the right and content on the left */
  flex-direction: row; /* Image on the right, content on the left */

  @media (max-width: 768px) {
    gap: 15px; /* Reduces the gap */
    padding: 15px;
    flex-direction: column; /* Image goes on top, content below */
    align-items: center; /* Align content to the center */
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 10px;
  }

  img {
    width: 30%; /* Adjust the image width */
    height: auto;
    border-radius: 5px;

    @media (max-width: 990px) {
      max-width: 80%;
    }

    @media (max-width: 768px) {
      max-width: 70%;
    }

    @media (max-width: 480px) {
      max-width: 60%;
    }
  }
`;

export const FAQQueryDetails = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    flex: 2;
  }

  @media (max-width: 480px) {
    flex: 1;
  }
`;

export const FAQQueryTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const FAQQuerySubtitle = styled.p`
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const FAQQueryButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1rem;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

export const FAQQUeryImage = styled.div`
  flex: 1; /* Ensures the image takes 1 part of the space */
  img {
    width: 60%; /* Adjust the image width */
    height: auto;
    border-radius: 20px;
  }

  @media (max-width: 990px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 70%;
  }

  @media (max-width: 480px) {
    max-width: 60%;
  }
`;
