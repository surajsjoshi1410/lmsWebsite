
import styled from 'styled-components';

// Container for the entire page
export const Container = styled.div`
  padding: 20px;
//   max-width: 1200px;
width: 80%; 
  margin: 0 auto;
`;

// Header for the page
export const Header = styled.h1`
  text-align: left;
  margin-bottom: 20px;
  color: #333;
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

// No packages message
export const NoPackagesMessage = styled.div`
  font-size: 1.2em;
  text-align: center;
  color: #777;
  margin: 20px 0;
`;

// Grid for package cards
export const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

// Individual package card
export const PackageCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

// Package title
export const PackageTitle = styled.h2`
  margin: 0 0 10px 0;
  color: #2c3e50;
`;

// Package image
export const PackageImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

// Package description
export const PackageDescription = styled.p`
  color: #555;
  margin-bottom: 10px;
`;

// Package features
export const PackageFeatures = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  color: #555;
`;

// Package price
export const PackagePrice = styled.p`
  color: #27ae60;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Package mode
export const PackageMode = styled.p`
  color: #2980b9;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Subjects list within a package
export const SubjectList = styled.ul`
  list-style-type: circle;
  padding-left: 20px;
  color: #555;
`;

// Individual subject item
export const SubjectItem = styled.li`
  margin-bottom: 5px;
`;

// Back button
export const BackButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    background-color: #2980b9;
  }
`;
