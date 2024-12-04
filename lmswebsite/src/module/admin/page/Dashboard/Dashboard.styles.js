import styled from "styled-components";
import { media } from "../../../../style/theme/theme";

export const DashboardScreenWrap = styled.main`
  .area-row {
    display: flex;
    gap: 24px;
    width: 100%;

    &.ar-two {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      height: 380px; /* Set a specific height */
      margin-top: 20px;
    }

    &.ar-three {
    padding-top: 20px;
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
