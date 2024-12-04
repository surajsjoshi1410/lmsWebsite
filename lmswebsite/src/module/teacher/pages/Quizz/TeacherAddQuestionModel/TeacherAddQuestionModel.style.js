// src/components/QuizModel/TeacherAddQuestionModel.styles.js
 
import styled from "styled-components";
import { media, theme } from "../../../../../style/theme/theme"; // Adjust the path as needed
 
// Container for the entire model
export const Container = styled.div`
  background-color: ${theme.colors.seasalt};
  padding: 2em;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow-x: scroll;
  height: 500px;
  scrollbar-width: none;
  max-width: 800px;
  /* margin: 0 auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); */
  overflow-y: auto; /* Enable vertical scrolling if content overflows */
 
  ${media.md`
    padding: 1.5em;
    max-width: 95%;
  `}
 
  ${media.sm`
    padding: 1em;
  `}
 
  ${media.xs`
    padding: 0.8em;
  `}
`;
 
// Title of the model
export const Title = styled.h4`
  text-align: center;
  margin-bottom: 1.5em;
  color: ${theme.colors.black};
  font-family: ${theme.typography.fontFamily};
  font-size: 1.5rem;
 
  ${media.sm`
    font-size: 1.3rem;
  `}
 
  ${media.xs`
    font-size: 1.1rem;
  `}
`;
 
// Container for each question
export const QuestionContainer = styled.div`
  background-color: ${theme.colors.white};
  padding: 1.5em;
  border-radius: 8px;
  margin-bottom: 1.5em;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
 
  ${media.md`
    padding: 1em;
  `}
`;
 
// Flex container for question number and text input
export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1em;
 
  ${media.xs`
    flex-direction: column;
    align-items: flex-start;
  `}
`;
 
// Styled component for question number
export const QuestionNumber = styled.span`
  font-weight: bold;
  margin-right: 0.5em;
  color: ${theme.colors.primary};
  font-size: 1.1rem;
 
  ${media.sm`
    font-size: 1rem;
  `}
`;
 
// Styled input for question text
export const QuestionInput = styled.input`
  flex: 1;
  padding: 0.5em;
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};
  margin-bottom: 1em;
 
  &:focus {
    border-color: ${theme.colors.black};
    outline: none;
  }
 
  &::placeholder {
    color: ${theme.colors.black};
  }
 
  ${media.sm`
    font-size: 0.9rem;
  `}
 
  ${media.xs`
    font-size: 0.8rem;
  `}
`;
 
// Container for options
export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
 
// Container for each option row
export const OptionRow = styled.div`
  display: flex;
  align-items: center;
 
  span {
    width: 20px;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.black};
    font-size: 1rem;
  }
 
  ${media.sm`
    span {
      font-size: 0.9rem;
    }
  `}
 
  ${media.xs`
    span {
      font-size: 0.8rem;
    }
  `}
`;
 
// Styled input for options
export const OptionInput = styled.input`
  flex: 1;
  padding: 0.5em;
  margin-left: 0.5em;
  border: 2px solid ${theme.colors.gray700};
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};
 
  &:focus {
    border-color: ${theme.colors.black};
    outline: none;
  }
 
  &::placeholder {
    color: ${theme.colors.black};
  }
 
  ${media.sm`
    font-size: 0.9rem;
  `}
 
  ${media.xs`
    font-size: 0.8rem;
  `}
`;
 
// Container for correct option selection
export const CorrectOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  label {
    margin-right: 0.5em;
    font-weight: bold;
    color: ${theme.colors.gray700};
    font-size: 1rem;
 
    ${media.sm`
      font-size: 0.9rem;
    `}
 
    ${media.xs`
      font-size: 0.8rem;
    `}
  }
 
  select {
    flex: 1;
  }
 
  ${media.xs`
    flex-direction: column;
    align-items: flex-start;
 
    label {
      margin-bottom: 0.5em;
    }
 
    select {
      width: 100%;
    }
  `}
`;
 
// Styled select for correct option
export const CorrectOptionSelect = styled.select`
  padding: 0.5em;
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
 
  ${media.sm`
    font-size: 0.9rem;
  `}
 
  ${media.xs`
    font-size: 0.8rem;
  `}
`;
 
// Container for buttons
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  margin-top: 1.5em;
  width: 100%;
 
  ${media.sm`
    flex-direction: column;
    align-items: stretch;
  `}
`;
 
// Styled button for adding questions
export const AddButton = styled.button`
  background-color: ${theme.colors.pink4};
  color: ${theme.colors.white};
  padding: 0.7em 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  transition: background-color 0.3s;
 
  &:hover {
    background-color: ${theme.colors.pink4};
  }
 
  ${media.sm`
    width: 100%;
    padding: 0.6em 1.2em;
    font-size: 0.9rem;
  `}
 
  ${media.xs`
    font-size: 0.8rem;
    padding: 0.5em 1em;
  `}
`;
 
// Styled button for applying questions
export const ApplyButton = styled.button`
  background-color: ${theme.colors.pink4};
  color: ${theme.colors.white};
  padding: 0.7em 1.5em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  transition: background-color 0.3s;
 
  &:hover {
    background-color: ${theme.colors.pink4};
  }
 
  ${media.sm`
    width: 100%;
    padding: 0.6em 1.2em;
    font-size: 0.9rem;
  `}
 
  ${media.xs`
    font-size: 0.8rem;
    padding: 0.5em 1em;
  `}
`;
 
// General input styling (if needed elsewhere)
export const Input = styled.input`
  padding: 0.5em;
  border: 1px solid ${theme.colors.black};
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};
 
  &:focus {
    border-color: ${theme.colors.black};
    outline: none;
  }
 
  &::placeholder {
    color: ${theme.colors.black};
  }
 
  ${media.sm`
    font-size: 0.9rem;
  `}
 
  ${media.xs`
    font-size: 0.8rem;
  `}
`;
 
// General textarea styling (if needed elsewhere)
export const Textarea = styled.textarea`
  padding: 0.5em;
  border: 1px solid ${theme.colors.gray700};
  border-radius: 5px;
  font-size: 1rem;
  font-family: ${theme.typography.fontFamily};
  color: ${theme.colors.black};
 
  &:focus {
    border-color: ${theme.colors.black};
    outline: none;
  }
 
  &::placeholder {
    color: ${theme.colors.gray700};
  }
 
  ${media.sm`
    font-size: 0.9rem;
  `}
 
  ${media.xs`
    font-size: 0.8rem;
  `}
`;
 