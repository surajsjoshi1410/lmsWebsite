




import styled from "styled-components";
import { BlockWrapStyles } from "../../../../style/DefaultStyles/DefaultStyles";
import { media } from "../../../../style/theme/theme";

export const TeacherdashBoardCardswrap = styled.div`
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;

    ${media.xxxl`
      gap: 10px;
    `}

    ${media.md`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${media.xs`
      grid-template-columns: 100%;
    `}
  }

  .card-item {
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &.card-misty-rose {
      .card-item-icon {
        background-color: #fce4ec; /* Light pink background */
      }
    }
  }

  .card-content {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .card-item-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: #fce4ec; /* Icon background color */

    img {
      width: 24px;
      height: 24px;
    }
  }

  .card-text-content {
    display: flex;
    flex-direction: column;
  }

  .card-item-text {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin: 0;
  }

  .card-item-value {
    font-size: 24px;
    font-weight: 700;
    color: #000;
    margin: 4px 0 0;
  }
`;
