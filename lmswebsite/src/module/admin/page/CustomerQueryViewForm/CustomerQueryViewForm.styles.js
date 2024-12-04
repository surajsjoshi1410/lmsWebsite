import styled from "styled-components";
import { theme, media } from "../../../../style/theme/theme";

export const CustomerQueryViewFormWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
  background: ${theme.colors.backgroundLight};
  width: 100%;
  max-width: 800px; /* Limits the width of the container */
  margin: 0 auto; /* Centers the container */

  ${media.md`
    max-width: 600px;
    padding: 15px;
  `}

  ${media.sm`
    max-width: 100%;
    padding: 10px;
  `}

  .queryForm-title {
    font-family: ${theme.typography.fontFamily};
    font-size: 2rem; /* Increased font size for the title */
    font-weight: bold;
    color: ${theme.colors.primary};
    margin-bottom: 20px;

    ${media.md`
      font-size: 1.8rem;
    `}

    ${media.sm`
      font-size: 1.6rem;
    `}
  }

  .error_message {
    color: ${theme.colors.error};
    text-align: center;
  }
`;

export const QueryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 

  ${media.md`
    padding: 1em;
  `}
`;

export const QueryFormField = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  label {
    width: 30%;
    font-size: 1.1rem; /* Increased font size for labels */
    font-weight: bold;
    color: ${theme.colors.textSecondary};

    ${media.md`
      width: 100%;
      font-size: 1rem;
      margin-bottom: 5px;
    `}

    ${media.sm`
      font-size: 0.95rem;
    `}
  }

  p {
    width: 70%;
    font-size: 1.1rem; /* Increased font size for text fields */
    color: ${theme.colors.textPrimary};

    ${media.md`
      width: 100%;
      font-size: 1rem;
    `}

    ${media.sm`
      font-size: 0.95rem;
    `}
  }

  ${media.md`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const StatusButton = styled.button`
  padding: 10px 18px; /* Slightly increased padding for larger appearance */
  font-size: 1rem; /* Increased font size for the button */
  border: 1px solid ${theme.colors.primary};
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) =>
    props.className === "solved" ? theme.colors.success : theme.colors.warning};
  color: ${theme.colors.pink4};
  max-width: 160px;
   align-self: center;

  &:hover {
    background-color: ${(props) =>
      props.className === "solved" ? theme.colors.successDark : theme.colors.warningDark};
  }

  ${media.md`
    width: 100%;
    font-size: 1rem; /* Adjusts font size for smaller screens */
  `}

  ${media.sm`
    font-size: 0.95rem;
  `}
`;
