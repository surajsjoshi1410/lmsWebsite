import styled from "styled-components";

import { theme, media } from "../../../../../style/theme/theme";

export const FormContainer = styled.div`
    background-color: ${theme.colors.seasalt};
    padding: 2em;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    max-width: 800px;
    // width: 100%;
    margin: 0 auto; /* Center the container */
    // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto; /* Enable vertical scrolling if content overflows */

    .buttonboard{
    display: flex;
    justify-content: center;
    align-items: center;
    }
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

export const InlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-start;
    gap: 1em;
    color: ${theme.colors.primary};
    margin-top: 1.5em;
    width: 100%;
font-family: ${theme.typography.fontFamily};


textarea{
 padding: 0.5em;
     margin-bottom: 1em;
     border: 1px solid ${theme.colors.primary};
     border-radius: 4px;
     border-color: ${theme.colors.primary};
     border:solid 1px ${theme.colors.primary};
     font-size: 1rem;
     font-family: ${theme.typography.fontFamily};
     color: ${theme.colors.black};
     
     &:focus {
     outline: none;
     border-color: ${theme.colors.primary};
     box-shadow: 0 0 5px ${theme.colors.primary};
   
   }
 

    ${media.sm`
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5em;
    `}
`;

export const Label = styled.label`
    width: 100%;
    text-align: left;
    font-weight: bold;
    color: ${theme.colors.primary};
    font-family: ${theme.typography.fontFamily};
    font-size: 1rem;   

    ${media.sm`
        font-size: 0.9rem;
    `}

    ${media.xs`
        font-size: 0.8rem;
    `}
`;

export const Input = styled.input`
    flex: 1;
    padding: 0.5em .8em;
    border: 2px solid ${theme.colors.primary};
    border-radius: 4px;
    border-color: ${theme.colors.primary};
    border:solid 1px ${theme.colors.primary};
    font-size: 1rem;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.black};
   
    &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 5px ${theme.colors.primary};
  }

    ${media.sm`
        font-size: 0.9rem;
    `}

    ${media.xs` 
        font-size: 0.8rem;
    `}
`;

export const Button = styled.button`
display: flex;
// flex-direction: row;
justify-content: center;
align-items: center;
    background-color: ${theme.colors.pink};
    color: ${theme.colors.white};
    padding: 0.7em 1.5em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-family: ${theme.typography.fontFamily};
    transition: background-color 0.3s;

   

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

export const spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;


export const Textarea = styled.textarea`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    flex:1;
    padding: 0.5em;
    border: 2px solid ${theme.colors.gray700};
    border-radius: 5px;
    font-size: 1rem;
    font-family: ${theme.typography.fontFamily};
    color: ${theme.colors.black};

    ${media.sm`
        font-size: 0.9rem;
    `}

    ${media.xs` 
        font-size: 0.8rem;
    `}
`;

