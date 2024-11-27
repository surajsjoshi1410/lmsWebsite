
import styled from 'styled-components';

export const QuizContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffe4e6;

  img {
    height: 80px;
    width: 100%;
    object-fit: cover;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;

  input {
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #ff007a;
    }
  }

  button {
    margin-left: 10px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;

    svg {
      color: #555;
    }

    &:hover {
      svg {
        color: #ff007a;
      }
    }
  }
`;

export const QuizList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const QuizCard = styled.div`
  background: #fffaf5;
  border: 2px solid #f9c2cf;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: #ff8fa3;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const BatchName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #f06fb1;
  background-color: #fff0f5;
  padding: 5px 10px;
  border-radius: 15px;
  display: inline-block;
  margin-bottom: 10px;
`;

export const QuizTitle = styled.h2`
  font-size: 20px;
  color: #333;
  margin: 10px 0;
`;

export const QuizInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;

  span {
    color: #ffa931;
    font-weight: bold;
  }
`;

export const QuizDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin-top: 5px;
  line-height: 1.5;
`;
