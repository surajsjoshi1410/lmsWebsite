// BecomeTeacherApplicationForm.styles.js

import styled from "styled-components";
import { theme, media } from "../../../../style/theme/theme";

export const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 40px;
  background-color: ${theme.colors.backgroundLight};

  ${media.md`
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    background-color: ${theme.colors.backgroundLight};
  `}

  .applicationImage {
    text-align: center;

    .teacherformImage {
      width: 100%;
      height: 100%;
      border-radius: 8px;

      ${media.sm`
        max-width: 100%;
      `}
    }
  }

  .applicationDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.white};
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    width: 100%;

    ${media.md`
      padding: 15px;
    `}

    ${media.sm`
      padding: 10px;
    `}
  }

  .applicationFormTitle {
    font-family: ${theme.typography.fontFamily};
    font-size: 2rem;
    font-weight: bold;
    color: ${theme.colors.primary};
    margin-bottom: 10px;
    text-align: center;

    ${media.md`
      font-size: 1.8rem;
    `}

    ${media.sm`
      font-size: 1.6rem;
    `}
  }

  .applicationFormSubtitle {
    font-size: 1.1rem;
    color: ${theme.colors.textSecondary};
    margin-bottom: 20px;
    text-align: center;

    ${media.md`
      font-size: 1rem;
    `}

    ${media.sm`
      font-size: 0.95rem;
    `}
  }
`;

// Rename the styled Form to avoid conflict with antd's Form
export const StyledForm = styled.div`
  width: 100%;

  .ant-form-item {
    margin-bottom: 16px;
  }

  .applicationRowOne,
  .applicationRowTwo,
  .applicationRowThree {
   
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 15px;
    

    ${media.sm`
      flex-direction: column;
      gap: 12px;
    `}
  }
     .applicationRowThree  div{
       width: 100%;
       gap: 20px;
     }
    
     

  .ant-input,
  .ant-select-selector,
  .ant-upload {
    width: 100%;
  }

  button {
    width: 100%;
  }
   
`;

export const UploadWrapper = styled.div`
  .ant-upload {
    width: 100%;
  }
`;

export const Processing = styled.div`
  height: 30vh;
  display: ${({ visible }) => (visible ? "block" : "none")};
  font-family: ${theme.typography.fontFamily};
  font-size: 2rem;
  color: ${theme.colors.primary};
  text-align: center;
  padding-top: 5%;
  margin-bottom: 20px;

  ${media.md`
    font-size: 1.8rem;
  `}

  ${media.sm`
    font-size: 1.6rem;
  `}
`;
