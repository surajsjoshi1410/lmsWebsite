import styled from "styled-components";
import { media } from "../../../../style/theme/theme";

export const StudentDashboardScreenWrap = styled.main`
  .area-row {
    display: flex;
    gap: 24px;
    width: 100%;

    &.ar-two {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 380px; /* Set a specific height */
    }

    &.ar-three {
      display: block;
    }

    ${media.md`
      flex-direction: column;
      .ar-two {
        height: auto; /* Allow auto height on smaller screens */
      }
    `}
  }

  /* Specific styling for the 60-40 layout */
  .user-engagement-container {
    flex: 3; /* 60% */
    height: 100%; /* Fill parent height */
  }

  .contact-forms-container {
    flex: 2; /* 40% */
    height: 100%; /* Fill parent height */
  }
`;

export const WelcomeTitle = styled.h1`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.pink8};
  margin-bottom: 10px;
  font-weight: bold;
`;

export const WelcomeMessage = styled.p`
  font-size: 18px;
  color: ${({theme})=>theme.colors.cadet};
  margin: 0;
  margin-bottom: 20px;
  font-weight: 600;
`;
