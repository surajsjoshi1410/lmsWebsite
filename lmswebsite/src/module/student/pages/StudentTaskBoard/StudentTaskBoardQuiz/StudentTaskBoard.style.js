import styled from 'styled-components';

export const QuizCard = styled.div`
    .ant-card {
        // transition: all 0.3s ease; /* Add a smooth transition */
transition: transform 0.3s ease;
padding: 20px;
        background-color: #fafbc;
         box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1);
         border:1px solid transparent;
        
        &:hover {
            background-color: #fafbc; /* Cream background */
            border-color: #e91e63; /* Pink border */
            box-shadow: 0 0px 15px pink;
            transform:translateY(-5px);
            
        }
    }
`;

export const Container = styled.div`
    padding: 20px;
`;

export const QuizTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
`;

export const QuizDescription = styled.p`
    font-size: 16px;
    color: #555;
`;


export const QuizScore = styled.div`
  font-size: 1rem;
  color: #4caf50;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;