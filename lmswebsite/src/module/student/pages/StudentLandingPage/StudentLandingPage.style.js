import styled from "styled-components";
import { Button } from "antd";

// Container for the application form
export const ApplicationContainer = styled.div`
  display: flex;
  gap: 2em;
  margin: 2em;
  padding: 1em;

  @media (max-width: 1200px) {
    gap: 1.5em;
    margin: 1.5em;
  }

  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.2em;
    margin: 1em;
  }

  @media (max-width: 480px) {
    gap: 1em;
    margin: 0.5em;
    padding: 0.5em;
  }
`;

// Image section
export const ApplicationImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

  @media (max-width: 1200px) {
    margin-bottom: 1.5em;
  }

  @media (max-width: 768px) {
    margin-bottom: 1em;
  }
`;

export const TeacherFormImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

// Details section
export const ApplicationDetails = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  @media (max-width: 1200px) {
    gap: 1.2em;
  }

  @media (max-width: 990px) {
    width: 100%;
    gap: 1em;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 0.8em;
  }

  @media (max-width: 480px) {
    gap: 0.6em;
  }
`;

export const UploadButton = styled(Button)`
  color: #000;
  border: 1px solid #d9d9d9;
  width: 100%;
  padding: 0 150px;

  &:hover {
    background-color: #357abd;
  }

  &:focus {
    background-color: #4a90e2;
    border: none;
  }

  @media (max-width: 990px) {
    padding: 0 100px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 768px) {
    padding: 0 100px; /* Adjust padding for smaller screens */
  }

  @media (max-width: 480px) {
    padding: 0 50px; /* Further adjustment for very small screens */
  }
`;

// Styled Rows for fields
export const StyledRow = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

// Styled Column for individual fields
export const StyledCol = styled.div`
  flex: 1;
`;

// Styled container for available slots
export const AvailableSlotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;

  @media (max-width: 768px) {
    gap: 6px;
    padding: 6px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Slot = styled.div`
  padding: 8px;
  background-color : ${(props) =>(props.isSelected ? "#EE1B7A" : "#fff")};
  color:${(props) =>(props.isSelected ? "#fff" : "#000")};
  border: 1px solid #dcdcdc;
  border-radius: 50px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;k
  cursor: pointer;


  &:hover {
    background-color: #ffc1cd;
    color: #fff;
  }
`;

export const CustomPackageStatus = styled.h2`
text-align: center;
font-size: 42px;
font-weight: 800;
display: flex;
align-items: center;
justify-content: center;
height:400px;
width:100%;
margin:0px;
`;