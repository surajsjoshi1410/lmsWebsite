import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Adding box-shadow */
  margin: 0 auto; /* Centers the container horizontally */
  text-align: left; /* Ensures text is aligned to the left */

  @media (max-width: 768px) {
    width: 90%; /* Increase width on smaller screens */
    padding: 15px; /* Adjust padding for better spacing */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width on very small screens */
    padding: 10px; /* Reduce padding for small screens */
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem; /* Adjust font size for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 1.1rem; /* Adjust font size for smaller screens */
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  text-align: justify;
  color: #666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem; /* Slightly smaller font size for medium screens */
  }

  @media (max-width: 480px) {
    font-size: 0.85rem; /* Smaller font size for very small screens */
  }
`;
