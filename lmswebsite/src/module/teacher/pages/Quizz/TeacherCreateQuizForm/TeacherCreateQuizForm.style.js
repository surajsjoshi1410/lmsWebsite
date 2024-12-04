// src/components/QuizModel/TeacherCreateQuizForm.styles.js

import styled from "styled-components";
import { media, theme } from "../../.././../../style/theme/theme"; // Adjust the path as needed

// Overlay for modal
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the modal overlays other content */

  /* Responsive adjustments */
  ${media.sm`
    padding: 1em;
  `}

  ${media.xs`
    padding: 0.5em;
  `}
`;

// Modal content styling
export const ModalContent = styled.div`
  background: ${theme.colors.white};
  padding: 2em;
  border-radius: 8px;
  width: 50%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);

  /* Responsive adjustments */
  ${media.md`
    width: 70%;
    padding: 1.5em;
  `}

  ${media.sm`
    width: 90%;
    padding: 1em;
  `}

  ${media.xs`
    width: 95%;
    padding: 0.8em;
  `}
`;

// Form Title
export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1em;
  color: ${theme.colors.pink4};
  font-family: ${theme.typography.fontFamily};
  font-size: 1.8rem;

  /* Responsive adjustments */
  ${media.sm`
    font-size: 1.6rem;
  `}

  ${media.xs`
    font-size: 1.4rem;
  `}
`;

// Container for label-input pairs
export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1em;

  /* Responsive adjustments */
  ${media.sm`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

// Label styling
export const Label = styled.label`
  width: 30%;
  text-align: left;
  font-weight: bold;
  color: ${theme.colors.black};
  font-family: ${theme.typography.fontFamily};
  font-size: 0.9rem;

  /* Responsive adjustments */
  ${media.sm`
    width: 100%;
    margin-bottom: 0.5em;
    font-size: 0.9rem;
  `}

  ${media.xs`
    font-size: 0.8rem;
  `}
`;

// Input styling
export const Input = styled.input`
  width: 70%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};

  &:focus {
    border-color: ${theme.colors.black};
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.black};
  }

  /* Responsive adjustments */
  ${media.sm`
    width: 100%;
    font-size: 0.9rem;
  `}

  ${media.xs`
    font-size: 0.8rem;
  `}
`;

// TextArea styling
export const TextArea = styled.textarea`
  width: 70%;
  padding: 0.5em;
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  margin-bottom: 1em;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  resize: vertical; /* Allow vertical resizing */

  &:focus {
    border-color: ${theme.colors.black};
    outline: none;
  }

  &::placeholder {
    color: ${theme.colors.black};
  }

  /* Responsive adjustments */
  ${media.sm`
    width: 100%;
    font-size: 0.9rem;
  `}

  ${media.xs`
    font-size: 0.8rem;
  `}
`;

// Styled Select Component for Batch and Subject
export const Select = styled.select`
  width: 70%;
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};

  &:focus {
    border-color: ${theme.colors.black};
    outline: none;
  }

  /* Responsive adjustments */
  ${media.sm`
    width: 100%;
    font-size: 0.9rem;
  `}

  ${media.xs`
    font-size: 0.8rem;
  `}
`;

// Add Question Link
export const AddQuestionLink = styled.span`
  width: 70%;
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  padding: 0.5em;
  color: ${theme.colors.pink6};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-family: ${theme.typography.fontFamily};
  font-size: 1rem;

  &:hover {
    color: ${theme.colors.pink4};
    border-color: ${theme.colors.pink4};
  }

  /* Responsive adjustments */
  ${media.sm`
    width: 100%;
    font-size: 0.9rem;
    padding: 0.4em;
  `}

  ${media.xs`
    font-size: 0.8rem;
    padding: 0.3em;
  `}
`;

// Button styling (Cancel Button)
export const Button = styled.button`
  background: ${theme.colors.pink4};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  padding: 0.5em 1em;
  align-self: flex-end;
  margin-bottom: 1em;
  font-family: ${theme.typography.fontFamily};
  transition: background-color 0.3s;


  /* Responsive adjustments */
  ${media.sm`
    font-size: 0.9rem;
    padding: 0.4em 0.8em;
  `}

  ${media.xs`
    font-size: 0.8rem;
    padding: 0.3em 0.6em;
  `}
`;

// Create Quiz Button with 100% width
export const CreateButton = styled.button`
  background: ${theme.colors.pink4};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  padding: 1em;
  width: 100%;
  margin-top: 1em;
  font-family: ${theme.typography.fontFamily};
  transition: background-color 0.3s;

  // &:hover {
  //   background: ${theme.colors.pink4};
  // }

  /* Responsive adjustments */
  ${media.sm`
    font-size: 0.9rem;
    padding: 0.8em;
  `}

  ${media.xs`
    font-size: 0.8rem;
    padding: 0.6em;
  `}
`;

// Container for buttons
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 1em;
  width: 100%;

  /* Responsive adjustments */
  ${media.sm`
    flex-direction: column;
    align-items: stretch;
  `}

  ${media.xs`
    gap: 0.5em;
  `}
`;
