// AssignedTeacherBatches.style.js

import styled from "styled-components";
import { theme, media } from "../../../../../style/theme/theme";

export const QuizBatcheswrap = styled.div`

  .AssignedTeacherBatch-batches_nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;



    ${media.md`
      flex-direction: column;
      align-items: stretch;
      padding: 1em;
    `}
  }
.quizBatches-batchNotFound{
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
height:100vh;
gap:20px;}

  .AssignedTeacherBatch-batch_title {
    font-family: ${theme.typography.fontFamily};
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    flex:1;
  }

  .AssignedTeacherBatch-search {
    max-width: 320px;
    width: 100%;
    
display: flex;
    align-items: center; 

    ${media.md`
      max-width: 100%;
      margin-top: 1em;
    `}

    .input-group {
      width: 100%;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 6px;
      height: 40px; 
      padding-right:10px;
      display: flex;
      align-items: center;
      padding: 4px 12px;
      position: relative;

      ${media.lg`
        height: 40px;
      `}

      .input-icon {
        width: 20px;
        display: inline-flex;
        align-items: center;
      }

      .input-control {
        // flex: 1;
        border: none;
        outline: 0;
        font-size: 15px;
        color: ${(props) => props.theme.colors.gray700};
        padding-left: 12px;
        background-color: transparent;

        &::placeholder {
          color: ${(props) => props.theme.colors.gray700};
        }
      }
    }
  }

  .area-row {
    display: flex;
    gap: 24px;

    &.ar-one {
      display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    

    input {
      width: 300px;
    }
    }

    &.ar-two {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &.ar-three {
    
      display: flex;
      flex-direction: column;
      margin-top: 6vh;
    }

    ${media.md`
      flex-direction: column;
    `}
  }

  /* Backdrop Styles */
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 999; /* Should be lower than modal container */
  }

  /* Modal Container Styles */
  .assignedBatch-table-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    width: 100%;
    max-width: 800px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    z-index: 1000; /* Should be higher than backdrop */
    overflow-y: auto;
    max-height: 80vh;

    ${media.md`
      width: 80%;
      max-width: 500px;
    `}
    ${media.xs`
      width: 95%;
      max-width: 400px;
    `}
  }

  /* Close Button Styles */
  .assignedBatch-close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: transparent;
    cursor: pointer;
    border-radius: 3px;
    font-size: 1.2rem;
    color: #555;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #000;
      transform: rotate(90deg);
      transition: all 0.3s ease;
    }
  }

  .assignedBatch-close-button:focus {
    outline: none;
  }


  

 

  /* Scrollable Table on Small Screens */
  @media (max-width: 768px) {
    .assignedBatch-table-container {
      padding: 15px;
      width: 95%;
      max-width: 600px;
    }

    /* Ensure the table can scroll horizontally */
    .assignedBatch-table-container {
      overflow-x: auto;
    }

  
  }

  button{
  border-radius: 4px;
  padding: 6px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.pink4};}

`;
