// SignUpPage.style.js

import styled from "styled-components";
import { theme, media } from "../../style/theme/theme"; // Adjust the path as needed

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
  box-sizing: border-box;

  @media (max-width: 990px) {
    flex-direction: row;
    // padding: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
  }

  @media (max-width: 480px) {
    flex-direction: column;

  }
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
 width: 100%;
  img {
    width: 100%;
      height: 100vh;
    border-radius: 8px;
    object-fit: cover; /* Ensures the image covers its container */
  }

  @media (max-width: 990px) {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
   
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
    
  }
`;

export const FormSection = styled.div`
  flex: 1;
  background: white;
  padding: 10vh 3vw;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  align-content: center;
  height: 100vh; /* Adjust based on requirements */

  @media (max-width: 990px) {
    padding: 8vh 3vw;
    // margin-bottom: auto;
    height:100vh;
  }

  @media (max-width: 768px) {
    padding: 5vh 3vw;
    height: 80vh; /* Ensure height is consistent */
    margin-bottom: 3vh;
  }

  @media (max-width: 480px) {
    padding: 5vh 3vw;
    height: 100vh; /* Ensure height is consistent */
    margin-bottom: 2vh;
  }
`;

export const ScrollableForm = styled.div`
  overflow-y: auto;
  flex: 1; /* Allows the form to take up available space and scroll when necessary */
  padding-right: 10px; /* Adds space for scrollbar */
  
  /* Optional: Customize scrollbar appearance for Webkit browsers */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const RoleSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 5vh;
  text-align: center;

  .line-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    position: relative;
  }

  .line-wrapper::before,
  .line-wrapper::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 1px;
    background-color: #ddd;
  }

  .line-wrapper::before {
    left: 0;
  }

  .line-wrapper::after {
    right: 0;
  }

  .line-wrapper span {
    padding: 0 1rem;
    font-weight: 500;
    color: #555;
    background-color: white;
    z-index: 1;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 5vh;

  @media (max-width: 1200px) {
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: row; /* Keep buttons side by side on smaller screens */
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: row; /* Keep buttons side by side on extra small screens */
    gap: 1rem;
  }

  button {
    min-width: 120px; /* Ensures buttons have a minimum width */
  }
`;

export const LinkText = styled.a`
  color: ${(props) => props.theme.colors.pink4};
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const StudentSelects = styled.div`
  margin-bottom: 30px;
`;
