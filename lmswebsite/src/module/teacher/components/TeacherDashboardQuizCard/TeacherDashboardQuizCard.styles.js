import styled from "styled-components";
import { media, theme } from "../../../../style/theme/theme";
 
export const TeacherDashboardQuizCardwrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Increased gap for spacing between card items */
  padding: 20px;
  border-radius: 12px;
  background-color: ${theme.colors.backgroundLight};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
   margin:10px 0px 10px 0px;
  transition: all 0.3s ease-in-out;
  width: 50%;
  font-family: ${theme.typography.fontFamily};
 
  @media (max-width: ${media.breakpoint}) {
    padding: 15px;
    gap: 15px;
  }
 
  .card {
    display: flex;
    flex-direction: column; /* Ensures all content stacks vertically */
    width: 100%; /* Makes sure the child spans the full width */
  }
 
  .card-content {
    display: flex;
    flex-direction: column;
    
    gap: 10px; /* Space between elements */
    width: 100%; /* Ensure full width for alignment */
  }
 
  .card-title {
    font-weight: bold;
    font-size: 1.1rem;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.cadet};
  }
 
  .card-icon {
    width: 200px;
    height: 130px;
    border-radius: 8px;
    margin: auto;
  }
 
  /* Table for batch, subject, and class */
  .info-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
 
  .info-table td {
    padding: 5px 10px;
    text-align: left;
  }
 
  .label {
    font-weight: bold;
    color: ${theme.colors.secondaryText};
    width: 200px;
  }
 
  .value {
    color: ${theme.colors.secondaryText};
    text-align: right;
  }
 
  .card-value {
    font-weight: 500;
    color: ${theme.colors.orange};
    margin-left: auto; /* Pushes this element to the right */
    text-align: right; /* Ensures text aligns to the right */
    align-self: flex-end; /* Aligns within its container */
  }

  .view-button{
  padding: 5px 30px;
margin-left: auto;
background-color: ${theme.colors.pink4};
border-radius: 5px;
// height: 30px;
// width: 100px;
color: ${theme.colors.white};
font-weight: 500;
border: none;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover{
  background-color: ${theme.colors.black};
  transition: all 0.3s ease-in-out;
   
}

  }

  
`;
 
