// src/AccountSettings/style.js
import styled from "styled-components";
import { media } from "../../../../../style/theme/theme";

export const IconInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;

  ${media.sm`
    padding: 5px;
  `}
  ${media.md`
    padding: 5px;
  `}
  ${media.lg`
    padding: 5px;
  `}
  ${media.xl`
    padding: 5px;
  `}
`;

export const Icon = styled.span`
  margin-right: 8px;
  color: #fa5a7d;
  ${media.sm`
    margin-right: 5px;
  `}
  ${media.md`
    margin-right: 5px;
  `}
  ${media.lg`
    margin-right: 5px;
  `}
  ${media.xl`
    margin-right: 5px;
  `}
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  background-color: white;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  h2 {
    grid-column: span 2;
    font-size: 28px;
    font-weight: 500;
    color: #555555;
    margin-bottom: 20px;
  }

  ${media.md`
     padding: 0px 10px;
    grid-template-columns: 1fr 1fr;
    display: flex;
    flex-direction: column;
    // gap: 15px;
  `}

  ${media.lg`
     padding: 0px 10px;
    grid-template-columns: 1fr 1fr;
    display: flex;
    flex-direction: column;
    // gap: 15px;
  ` }

  ${media.xl`
     padding: 0px 10px;
    grid-template-columns: 1fr 1fr;
    display: flex;
    flex-direction: column;
    // gap: 15px;
  `}

  ${media.sm`
     padding: 0px 10px;
     grid-template-columns: 1fr 1fr;
     display: flex;
     flex-direction: column;
     // gap: 15px;
     `

  }
 
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;


`;

export const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;

  ${media.sm`
    width: 100%;
    padding: 0px 10px;
  `}
  ${media.md`
    width: 100%;
    padding: 0px 10px;
  `}
  ${media.lg`
    width: 100%;
    padding: 0px 10px;`}
`;

export const Input = styled.input`
  font-size: 14px;
  color: #333;
  background-color: transparent;
  border: 1px solid #ccc;
  outline: none;
  flex: 1;
  padding: 8px;
  border-radius: 5px;

  &:focus {
    border: 2px solid #ff007a;
  }

 ${media.sm`
    width: 100%;
    padding: 0px 10px;
  `}

  ${media.md`
    width: 100%;
    padding: 0px 10px;
  `}

  ${media.lg`
    width: 100%;
    padding: 0px 10px;`}
  }
`;


