
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import styled from 'styled-components';
import { 
  QuizContainer, 
  Header, 
  QuizTitle, 
  QuestionsContainer, 
  QuestionCard, 
  QuestionNumber, 
  QuestionText, 
  OptionsContainer, 
  Option, 
  SubmitButton 
} from './StudentResponseQuiz.style';
import quizLogo from '../../../../../src/assets/quizLogo.jpg';

const dummyQuestions = [
  {
    question: "When we create a new design we need to choose ...",
    options: ["slice", "rectangle", "frame", "place image"],
    correctAnswer: "frame",
  },
  {
    question: "What frame do we need to create a web ...",
    options: ["Tablet", "Presentation", "Desktop", "Paper"],
    correctAnswer: "Desktop",
  },
  {
    question: "When we want to import a picture to our web, we need to use ...",
    options: ["slice", "place image", "rectangle", "move"],
    correctAnswer: "place image",
  },
];

const StudentResponseQuiz = () => {
  const location = useLocation(); // Get the passed quiz data
  const quiz = location.state?.quiz; // Access the quiz passed in the state

  return (
    <QuizContainer>
      {/* Header */}
      <Header>
        <img src={quizLogo} alt="Quiz Logo" />
      </Header>

      {/* Title Below Header */}
      <QuizTitle>{quiz?.title || 'Quiz Title'}</QuizTitle> {/* Display the quiz title */}

      {/* Questions Section */}
      <QuestionsContainer>
        {dummyQuestions.map((item, index) => (
          <QuestionCard key={index}>
            <QuestionNumber>{index + 1}</QuestionNumber> {/* Display only question number */}
            
            <div>
              <QuestionText>{item.question}</QuestionText>
              <OptionsContainer>
                {item.options.map((option, optionIndex) => (
                  <Option key={optionIndex}>
                    <input type="radio" name={`question-${index}`} id={`q${index}-opt${optionIndex}`} />
                    <label htmlFor={`q${index}-opt${optionIndex}`}>{option}</label>
                  </Option>
                ))}
              </OptionsContainer>
            </div>
          </QuestionCard>
        ))}
      </QuestionsContainer>

      {/* Submit Button */}
      <SubmitButton>Submit</SubmitButton>
    </QuizContainer>
  );
};

export default StudentResponseQuiz;
