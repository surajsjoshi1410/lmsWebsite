
import styled from "styled-components";
import { media, theme } from "../../../../../style/theme/theme";

export const QuizListWrap = styled.div`

.created-quizes-batches_nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2em;
    margin: 0;

    ${media.md`
      flex-direction: column;
      align-items: stretch;
      padding: 1em;
    `}
  }

  .created-quizes-batch_title {
    font-family: ${theme.typography.fontFamily};
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    flex:1;
  }

  .create-quizes-search {
    max-width: 320px;
    width: 100%;
    margin-right:25px;
   
      flex: 0 0 auto;
      align-items: center; 

    ${media.md`
      max-width: 100%;
      margin-top: 1em;
    `}

   

      .created-quizes-input-control {
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
      justify-content: space-between;
    }

    &.ar-two {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    &.ar-three {
      display: flex;
    }

    ${media.md`
      flex-direction: column;
    `}
  }

  
/* Navigation Section row1 */
.created-quizes-batches_nav {
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 2em;
     ${media.md`
      
      padding-right: 2rem !important;
    `}
   }

.created-quizes-batch_title {
    font-family: ${theme.typography.fontFamily}
    font-size: 1.5rem;
    font-weight: bold;
}

.created-quizes-batch_btn {
    width: 150px;
    height: 40px;
    background: ${theme.colors.pink}!important;
    color: ${theme.colors.white}!important;
    border: 2px solid ${theme.colors.white};
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
      flex: 0 0 auto;
}

.created-quizes-batch_icon {
    font-size: 1.3rem;
    margin-right: 5px;
}

.created-quizes-batch_icon span {
    font-size: 1rem;
    font-weight: 500;
}

.created-quizes-back-btn{
  text-decoration: none;
  margin-right: 30px;
  margin-left: 0px;
  font-size: 1.5rem;
}
    
`;


/* ----------------------------------------------------
   QuizzesContainer
   ---------------------------------------------------- */
   export const QuizzesContainer = styled.div`
//    display: grid;
//    gap: 20px; /* Spacing between cards */
   padding: 20px;
   width: 100%;
   grid-template-columns: repeat(
     auto-fill,
     minmax(300px, 1fr)
   ); /* Automatically adjust cards per row with a minimum card width of 300px */
 
   /* Responsive adjustments using media helper */
   ${media.xxl`
     grid-template-columns: repeat(4, 1fr); /* 4 cards per row on larger screens */
   `}
 
   ${media.lg`
     grid-template-columns: repeat(3, 1fr); /* 3 cards per row on medium screens */
   `}
 
   ${media.md`
     grid-template-columns: repeat(2, 1fr); /* 2 cards per row on small screens */
     padding: 15px;
   `}
 
   ${media.xs`
     grid-template-columns: 1fr; /* 1 card per row on very small screens */
     padding: 10px;
   `}
 `;
 
 /* ----------------------------------------------------
    ButtonContainer
    ---------------------------------------------------- */
 export const ButtonContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   width: 100%;
   margin-bottom: 20px;
 
   /* Responsive adjustments using media helper */
   ${media.md`
     justify-content: center;
     margin-bottom: 15px;
   `}
 
   ${media.xs`
     justify-content: center;
     margin-bottom: 10px;
   `}
 `;
 
 /* ----------------------------------------------------
    ViewButton
    ---------------------------------------------------- */
 export const ViewButton = styled.button`
   border: none;
   padding: 10px 20px;
   border-radius: 5px;
   background-color: ${theme.colors.dodgerBlue};
   color: ${theme.colors.white};
   font-family: ${theme.typography.fontFamily};
   font-size: 1em;
   cursor: pointer;
   transition: background-color 0.3s;
 
   &:hover {
     background-color: ${theme.colors.blue};
   }
 
   /* Responsive adjustments using media helper */
   ${media.md`
     padding: 8px 16px;
   `}
 
   ${media.xs`
     padding: 6px 12px;
   `}
 `;
 
 /* ----------------------------------------------------
    General Button
    ---------------------------------------------------- */
 export const Button = styled.button`
   background-color: ${theme.colors.pink4};
   color: ${theme.colors.white};
   border: none;
   border-radius: 5px;
   cursor: pointer;
   padding: 10px 20px;
   margin-right: 5vw;
   margin-top: 5vh;
   font-family: ${theme.typography.fontFamily};
   font-size: 1em;
   transition: background-color 0.3s;
 
   &:hover {
     background-color: ${theme.colors.pink4};
   }
 
   /* Responsive adjustments using media helper */
   ${media.md`
     padding: 8px 16px;
     margin-right: 4vw;
   `}
 
   ${media.xs`
     padding: 6px 12px;
     margin-right: 3vw;
   `}
 `;
 
 /* ----------------------------------------------------
    QuizCard
    ---------------------------------------------------- */
    export const QuizCard = styled.div`
    width: 100%;
    margin-bottom:20px;
    border: 1px solid transaparent;
   
    padding: 20px;
    border-radius: 8px;
    background-color: ${theme.colors.darkwhite};
    box-shadow: 0 8px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
   
    &:hover {
      transform: translateY(-5px);
      //  box-shadow: 0 8px 6px ${theme.colors.pink10};
       box-shadow: 0 0 10px ${theme.colors.pink4};
    }
   
    .quizdisplay{
    dispaly:flex;
    flex-direction: column;
    }
   
    /* Quiz Title */
    h2 {
      text-align: left; /* Center the title */
      color: ${theme.colors.black};
      font-size: 1.5rem;
      margin-bottom: 10px;
      text-transform: uppercase;
      font-family: ${theme.typography.fontFamily};
    }
   
    /* Batch and Subject Info */
    .batch {
      display: flex;
      flex-direction: column;
      border-radius:10px;
      flex-wrap: wrap;
      width:50%;
      margin-bottom: 15px;
      align-items: flex-start;
      text-align: justify;
      font-size: 1rem;
      color: ${theme.colors.pink6};
      font-family: ${theme.typography.fontFamily};
    }
   
  .red{
  background-color: ${theme.colors.latte};
  border-radius:10px;
  padding:0.2em;
  }
   
   
   .subject{
   display:flex;
   flex_direction:column;
    margin-bottom: 15px;
      font-size: 1rem;
      color: ${theme.colors.blue};
      font-family: ${theme.typography.fontFamily};
   
   }
   
   .class{
   display:flex;
   flex_direction:column;
    margin-bottom: 15px;
      font-size: 1rem;
      color: ${theme.colors.green};
      font-family: ${theme.typography.fontFamily};
   
   }
    .description {
     display:flex;
    flex_direction:column;
      margin-bottom: 15px;
      font-size: 1rem;
      color: ${theme.colors.black};
      font-family: ${theme.typography.fontFamily};
    }
   
    /* Due Date and View */
    .due-view {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
      color: ${theme.colors.gray700};
      margin-top: auto;
      font-family: ${theme.typography.fontFamily};
    }
   
    /* Responsive adjustments using media helper */
    ${media.md`
      padding: 15px;
    `}
   
    ${media.xs`
      padding: 10px;
    `}
  `;

   
  