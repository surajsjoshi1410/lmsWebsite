import styled from "styled-components";
import { media } from "../../../../style/theme/theme";

export const ContactFormStylesWrap = styled.div`
  width: 100%;
  max-width: 350px;
  min-width: 240px;
  height: 100%; /* Fill available height */
  // margin: auto;
 margin:10px auto;
  .contact-forms {
    width: 100%;
    height: 100%; /* Ensure the component fills its container height */
    max-width: 90vw;
    padding: 1vh 1vw;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    ${media.md`
      padding: 2vh 3vw;
    `}

    ${media.sm`
      max-width: 95vw;
      padding: 1.5vh 4vw;
    `}
  }
  h2 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray700};

    ${media.md`
      font-size: 1rem;
    `}

    ${media.sm`
      font-size: 0.9rem;
    `}
  }

  .sub-heading {
    margin: 5px 0 0;
    color: #6b7280;
    font-size: 1rem;

    ${media.md`
      font-size: 0.9rem;
    `}

    ${media.sm`
      font-size: 0.85rem;
    `}
  }

  .contact-list {
    list-style-type: none;
    padding: 1vh 0; /* Responsive padding */
    margin: 0;
  }

  .contact-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-bottom: 2vh;
    padding-bottom: 1vh;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    ${media.sm`
      margin-bottom: 1.5vh;
      padding-bottom: 1vh;
    `}
  }

  .contact-info {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;

    .contact-name {
      font-weight: bold;
      font-size: 1rem;

      ${media.md`
        font-size: 0.9rem;
      `}

      ${media.sm`
        font-size: 0.85rem;
      `}
    }

    .contact-email {
      color: #6b7280;
      font-size: 0.9rem;

      ${media.md`
        font-size: 0.8rem;
      `}

      ${media.sm`
        font-size: 0.75rem;
      `}
    }
  }

  .view-link {
    color: #f472b6;
    font-weight: bold;
    text-decoration: none;
    font-size: 0.95rem;
    white-space: nowrap;

    ${media.md`
      font-size: 0.85rem;
    `}

    ${media.sm`
      font-size: 0.8rem;
    `}
  }

  .see-all {
    display: block;
    margin-top: 6px;
    text-align: left;
    color: ${(props) => props.theme.colors.gray700};
    font-size: 0.85rem;
    text-decoration: none;

    ${media.md`
      font-size: 0.75rem;
    `}

    ${media.sm`
      font-size: 0.7rem;
    `}
  }
`;
