
import styled from 'styled-components';

export const QuizContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  min-height: 100vh;
`;

export const Header = styled.div`
  text-align: center;
  padding: 20px 0;
  background-color: #ffe4e6;

  img {
    height: 100px;
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const QuizTitle = styled.h1`
  font-size: 32px;
  color: #ff007a;
  margin: 20px 0;
  text-align: center;
`;

export const QuestionsContainer = styled.div`
  margin: 20px auto;
  padding: 20px;
  max-width: 100%;
  border: 1px solid #ff8fa3;
  border-radius: 10px;
  background-color: white;
`;

export const QuestionCard = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export const QuestionNumber = styled.h2`
  font-size: 18px;
  color: #555;
  margin-bottom: 5px;
`;

export const QuestionText = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  input {
    accent-color: green;
  }

  label {
    font-size: 14px;
    color: #333;
    cursor: pointer;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 30px;
  font-size: 16px;
  color: #fff;
  background-color: #ff007a;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6006a;
  }
`;
