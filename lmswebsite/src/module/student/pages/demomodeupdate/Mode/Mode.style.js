// import styled from "styled-components";
// import { theme, media} from "../../../../../style/theme/theme";

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #f8f9fa;
//   padding: 50px 20px;
//   min-height: 100vh;
//   width: 80%;
//   margin: auto;
// `;

// export const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: 80%;
//   max-width: 1200px;

 
// `;

// export const TextSection = styled.div`
//   flex: 1;
//   padding-right: 20px;

 

//   h1{
//   font-weight: bold;
//   margin-bottom: 20px;
//   line-height: 1.2;
//   width: 100%;
//   font-family: ${theme.typography.fontFamily};
//   font-size: 2.5rem;
//   }

//   p{
//   font-size: 1rem;
//   color: ${theme.colors.black};
//   margin-bottom: 20px;
//   line-height: 1.5;
//   width: 400px;
//   }


//   button {
//   padding: 10px;
//   border-radius: 5px;
//   color: #fff;
//     margin-top: 20px;
//     background-color: ${theme.colors.blueone};
//   }
// ${media.md`
//     padding: 10px;  
//     font-size: 1rem;
//   `}
//   ${media.sm`
//     padding: 10px;
//     font-size: 1rem;
//   `}
  
// `;

// export const StyledButton = styled.button`
//   background-color: #fff;
//   color: #000;
//   border: 2px solid #000;
//   padding: 10px 30px;
//   font-size: 1rem;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// export const ImagesSection = styled.div`
//  flex: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   ${media.md`
//     padding: 10px;  
//   `}
//   ${media.sm`
//     padding: 10px;
//   `}
// `;

// export const Circle = styled.div`
//   position: absolute;
//   width: 400px;
//   height: 400px;
//   background-color: #7ebaff;
//   border-radius: 50%;
//   margin-top: -27%;
//   /* top: -12%; */
//   right: 16%;
//   z-index: 0;

//   ${media.md`
//     padding: 10px;  
//   `}

//   ${media.sm`
//     padding: 10px;
//     `}
// `;

// export const MeetingImage = styled.img`
//   padding: 20px;
//   width: 401px;
//   height: 400px;
//   position: absolute;
//   right: -26%;
//   z-index: 1;

//   ${media.md`
//     padding: 10px;  
//   `}
//   ${media.sm`
//     padding: 10px;
//   `}
// `;

// export const JoinMeetingImage = styled.img`
//   padding: 20px;
//   width: 300px;
//   height: 300px;
//   top: 20%;
//   right: 10%;
//   position: absolute;
//   z-index: 1;

//   ${media.md`
//     padding: 10px;  
//   `}
//   ${media.sm`
//     padding: 10px;
//   `}
// `;

// export const SlideWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 20px;
//   padding: 30px 20px;
//   background-color: #ddedff;
//   width: 80%;
//   margin: auto;

//   ${media.md`
//     padding: 10px;  
//   `}
//   ${media.sm`
//     padding: 10px;
//   `}
// `;

// export const Slide = styled.div`
//   flex: 1 1 30%;
//   background-color: white;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 4px 4px 0px #7ebaff;
//   text-align: center;
//   height: 150px;

//   .slideDescription {
//     font-size: 1rem;
//     line-height: 1.5;
//     color: #333;


//   }

//   ${media.md`
//     padding: 10px;
//   `}
//   ${media.sm`
//     padding: 10px;
//   `}
// `;

// export const SmallCircle = styled.div`
//   width: 40px;
//   height: 40px;
//   background-color: #fff;
//   border: 2px solid #ccc;

//   border-radius: 50%;
//   margin-top: -40px;

//   ${media.md`
//     padding: 10px;  
//   `}
//   ${media.sm`
//     padding: 10px;
//   `}
// `;




import styled from "styled-components";
import { theme, media } from "../../../../../style/theme/theme";

// Wrapper Component
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 50px 20px;
  min-height: 100vh;
  width: 80%;
  margin: auto;

  ${media.md`
    padding: 30px 10px;
    width: 90%;
  `}

  ${media.sm`
    padding: 20px 5px;
    width: 95%;
  `}
`;

// Content Component
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1200px;

  ${media.md`
    flex-direction: column;
    width: 100%;
  `}

  ${media.sm`
    padding: 0 10px;
  `}
`;

// TextSection Component
export const TextSection = styled.div`
  flex: 1;
  padding-right: 20px;

  h1 {
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.2;
    width: 100%;
    font-family: ${theme.typography.fontFamily};
    font-size: 2.5rem;

    ${media.md`
      font-size: 2rem;
    `}

    ${media.sm`
      font-size: 1.8rem;
    `}
  }

  p {
    font-size: 1rem;
    color: ${theme.colors.black};
    margin-bottom: 20px;
    line-height: 1.5;
    width: 400px;

    ${media.md`
      width: 100%;
      font-size: 0.95rem;
    `}

    ${media.sm`
      font-size: 0.9rem;
    `}
  }

  button {
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    margin-top: 20px;
    background-color: ${theme.colors.blueone};
    font-size: 1rem;

    ${media.md`
      width: 100%;
      font-size: 0.95rem;
    `}

    ${media.sm`
      font-size: 0.9rem;
    `}
  }
`;

// StyledButton Component
export const StyledButton = styled.button`
  background-color: #fff;
  color: #000;
  border: 2px solid #000;
  padding: 10px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  ${media.md`
    padding: 8px 25px;
    font-size: 0.95rem;
  `}

  ${media.sm`
    padding: 6px 20px;
    font-size: 0.9rem;
  `}
`;

// ImagesSection Component
export const ImagesSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${media.md`
    margin-top: 100px;
  `}

  ${media.sm`
    margin-top: 150px;
  `}
`;

// Circle Component
export const Circle = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background-color: ${theme.colors.one};
  border-radius: 50%;
  // margin-top: -27%;
  // right: 16%;

  ${media.md`
    width: 300px;
    height: 300px;
    right: 10%;
    // margin-top: -20%;
  `}

  ${media.sm`
    width: 300px;
    height: 300px;
    right: 5%;
    // margin-top: -15%;
  `}
`;

// MeetingImage Component
export const MeetingImage = styled.img`
  padding: 20px;
  width: 401px;
  height: 400px;
  position: absolute;
  right: -26%;
  z-index: 1;

  ${media.md`
    width: 300px;
    height: 300px;
    right: -20%;
    padding: 10px;
  `}

  ${media.sm`
    width: 200px;
    height: 200px;
    right: -15%;
    padding: 5px;
  `}
`;

// JoinMeetingImage Component
export const JoinMeetingImage = styled.img`
  padding: 20px;
  width: 300px;
  height: 300px;
  top: 20%;
  right: 10%;
  position: absolute;
  z-index: 1;

 ${media.md`
    width: 300px;
    height: 300px;
    right: -20%;
    padding: 10px;
  `}

  ${media.sm`
    width: 200px;
    height: 200px;
    right: -15%;
    padding: 5px;
  `}

`;
export const SlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px 20px;
  background-color: #ddedff;
  width: 80%;
  margin: auto;
 
  @media (max-width: 990px) {
    width: 90%;
  }
 
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 10px;
  }
 
  @media (max-width: 480px) {
    gap: 10px;
  }
`;
 
export const Slide = styled.div`
  flex: 1 1 30%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 4px 4px 0px #7ebaff;
  text-align: center;
  height: 150px;
 
  .slideDescription {
    font-size: 1rem;
    line-height: 1.5;
    color: #333;
  }
 
  @media (max-width: 990px) {
    flex: 1 1 45%;
  }
 
  @media (max-width: 768px) {
    flex: 1 1 100%;
    height: auto;
  }
 
  @media (max-width: 480px) {
    .slideDescription {
      font-size: 0.9rem;
    }
  }
`;
 
export const SmallCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
  margin-top: -40px;
 
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-top: -30px;
  }
 
  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    margin-top: -25px;
  }
`;