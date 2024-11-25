// PaymentSuccess.style.js

import styled from "styled-components";
import { theme,media } from "../../../../style/theme/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertical centering */
  align-items: center; /* Horizontal centering */
  height: 100vh; /* Full viewport height */
  text-align: center;
  background-color:  ${(props)=>props.theme.colors.darkwhite}; /* Light background color for contrast */
 ${
    media.md`
     padding: 20px; /* Padding for smaller screens */
    `
 }
 
`;

export const Message = styled.h1`
  font-size: 2.5rem;
  color: ${(props)=>props.theme.colors.malachite}; /* Ant Design's success green color */
  margin-bottom: 2rem;

  ${
    media.md`
     font-size: 2rem;
    `
 }
 ${
    media.xs`
      font-size: 1.5rem;
    `
 }

 
`;

export const ButtonContainer = styled.div`
  /* Additional styling can be added here if needed */
`;
