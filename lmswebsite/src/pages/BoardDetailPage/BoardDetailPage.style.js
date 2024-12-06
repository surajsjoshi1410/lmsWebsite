// src/pages/ClassDetailPage/ClassDetailPage.style.js

import styled from 'styled-components';

// Container for the entire page
export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Header for the board name
export const Header = styled.h1`
  text-align: center;
  margin-bottom: 10px;
  color: #333;
`;

// Board description
export const BoardDescription = styled.p`
  text-align: center;
  color: #555;
  margin-bottom: 30px;
  font-size: 1.1em;
`;

// Loading message
export const LoadingMessage = styled.div`
  font-size: 1.2em;
  text-align: center;
  color: #555;
`;

// Error message
export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
`;

// No classes message
export const NoClassesMessage = styled.div`
  font-size: 1.2em;
  text-align: center;
  color: #777;
  margin: 20px 0;
`;

// Grid for class cards
export const ClassGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

// Individual class card
export const ClassCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer; /* Indicate that the card is clickable */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

// Class title
export const ClassTitle = styled.h2`
  margin: 0 0 10px 0;
  color: #2c3e50;
`;

// Class level
export const ClassLevel = styled.p`
  margin: 0 0 10px 0;
  color: #34495e;
  font-weight: bold;
`;

// Board name within class card
export const BoardName = styled.p`
  margin: 0 0 10px 0;
  color: #7f8c8d;
  font-style: italic;
`;
