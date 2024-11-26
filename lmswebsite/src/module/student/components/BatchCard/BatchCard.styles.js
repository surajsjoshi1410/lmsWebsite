// src/components/BatchCard.styles.js

// import styled from "styled-components";
// import { media } from "../../../../style/theme/theme";

// export const BatchCardWrap = styled.div`
//   .batch-card {
//     display: flex;
//     flex-direction: row;
//     border: 1px solid ${(props) => props.theme.colors.frenchGray};
//     border-radius: 8px;
//     overflow: hidden;
//     background-color: ${(props) => props.theme.colors.white};
//     transition: box-shadow 0.3s ease;
//     width: 100%; /* Take full width of the parent */
//     height: 300px; /* Increased height */
//     max-width: 100%;
//      ${media.md`
//     flex-direction: column;
//       height: auto;
//              `
//     }
//   }

//   .batch-card:hover {
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   }

//   .batch-image-container {
//     flex: 1 1 40%;
//     max-width: 40%;
//     margin: 2vh;
//     border-radius: 20px;
//     height: 90%;
//     overflow: hidden;
//      ${media.md`
//      max-width: 100%;
//       flex: 1 1 100%;
//        height: 200px;
//              `
//     }
//   }

//   .batch-image {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .batch-content {
//     flex: 1 1 60%;
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//      ${media.md`
//      max-width: 100%;
//       flex: 1 1 100%;
//        padding: 16px;
//              `
//     }
//   }

//   .batch-name {
//     font-size: 20px;
//     margin: 0 0 16px 0;
//     color: ${(props) => props.theme.colors.black};
//      ${media.md`
//     font-size: 1.5rem;
//       margin-bottom: 12px;
//              `
//     }
//   }

//   .batch-details {
//     display: flex;
//     flex-direction: column;
//     gap: 12px;
//     flex-grow: 1;
//   }

//   .detail-item {
//     display: flex;
//     align-items: center;
//   }

//     .detail-item-date {
//     margin-right: 10px;
//     float: right;
//   }

//   .detail-icon {
//     margin-right: 10px;
//     font-size: 12px;

//      ${media.md`
//    font-size: 1.2rem;
//       margin-right: 8px;
//              `
//     }
//   }

//   .detail-text {
//     font-size: 1.1rem;
//     color: ${(props) => props.theme.colors.black};
//     ${media.md`
//         font-size: 1rem;
//                  `
//         }
//   }

//   .no-teacher {
//     color:${(props) => props.theme.colors.red}; /* Red color for "No Teacher Assigned" */
//   }

 
// `;


// src/components/BatchCard.styles.js

import styled from "styled-components";
import { media } from "../../../../style/theme/theme";

export const BatchCardWrap = styled.div`
  .batch-card {
    display: flex;
    flex-direction: row;
    border: 1px solid ${(props) => props.theme.colors.frenchGray};
    border-radius: 8px;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.white};
    transition: box-shadow 0.3s ease;
    width: 100%; /* Take full width of the parent */
    height: 300px; /* Increased height */
    max-width: 100%;
    position: relative;
     margin-bottom: 20px;
    ${media.md`
      flex-direction: column;
      height: auto;
    `}
  }

  .batch-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .batch-image-container {
    flex: 1 1 40%;
    max-width: 40%;
    margin: 2vh;
    border-radius: 20px;
    height: 90%;
    overflow: hidden;

    ${media.md`
      max-width: 100%;
      flex: 1 1 100%;
      height: 200px;
    `}
  }

  .batch-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .batch-content {
    flex: 1 1 60%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    ${media.md`
      max-width: 100%;
      flex: 1 1 100%;
      padding: 16px;
    `}
  }

  /* Header Styles */
  .batch-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    ${media.md`
      margin-bottom: 12px;
    `}
  }

  .batch-name {
    font-size: 20px;
    margin: 0;
    color: ${(props) => props.theme.colors.black};

    ${media.md`
      font-size: 1.5rem;
    `}
  }

  .batch-date {
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.gray};
    display: flex;
    margin-top: 8px;
    align-items: center;

    ${media.md`
      font-size: 1rem;
    `}
  }

  /* Batch Details */
  .batch-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-grow: 1;
  }

  .detail-item {
    display: flex;
    align-items: center;
  }

  .detail-icon {
    margin-right: 10px;
    font-size: 12px;

    ${media.md`
      font-size: 1.2rem;
      margin-right: 8px;
    `}
  }

  .detail-text {
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.black};

    ${media.md`
      font-size: 1rem;
    `}
  }

  .no-teacher {
    color: ${(props) => props.theme.colors.red}; /* Red color for "No Teacher Assigned" */
  }

  /* Footer Styles */
  .batch-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${media.md`
      margin-top: 12px;
    `}
  }

  .action-text {
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.black};
    display: flex;
    align-items: center;

    ${media.md`
      font-size: 1rem;
    `}
  }
`;
