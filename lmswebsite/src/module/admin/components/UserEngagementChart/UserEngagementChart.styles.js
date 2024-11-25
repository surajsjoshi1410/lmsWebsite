import styled from "styled-components";
import { media } from "../../../../style/theme/theme";

export const UserEngagementChartWrap = styled.div`
   width: 100%;
  max-width: 60vw;
  height: 100%; /* Ensure full height */
  margin:10px auto;

  .chart-wrapper {
    position: relative;
    width: 100%;
    height: 100%; /* Ensure full height */
    margin: 0 auto;
    background-color: #fff;
    border-radius: 0.8rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 1vh 1vw;

    ${media.md`
      padding: 0.8vh 1vw;
    `}

    ${media.sm`
      padding: 0.5vh 1vw;
    `}
  }
  }

  .filter-button {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1vh;

    ${media.sm`
      margin-bottom: 0.8vh;
    `}
  }

  .filters-dropdown {
    display: flex;
    justify-content: flex-end;
    gap: 1vw;
    margin-bottom: 1vh;
    background-color: white !important;
    padding: 1vh 1vw;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    ${media.md`
      padding: 0.8vh 0.8vw;
    `}

    ${media.sm`
      gap: 0.8vw;
      padding: 0.5vh 0.5vw;
    `}
  }

  .filter-dropdown {
    background-color: white !important;
    max-width: 15vw;
    overflow-y: auto;

    ${media.md`
      max-width: 18vw;
    `}

    ${media.sm`
      max-width: 25vw;
    `}
  }

  /* Hide scrollbar in Webkit browsers (Chrome, Safari, Edge) */
  .filter-dropdown::-webkit-scrollbar {
    width: 0;
  }

  /* Hide scrollbar for Firefox */
  .filter-dropdown {
    scrollbar-width: none;
  }

  .clear-button {
    align-self: center;
  }

  .user-engagement-chart {
    margin-top: 2vh;
    height: 80%;
  }
`;
