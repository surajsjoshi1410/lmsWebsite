import styled from "styled-components";
import { theme } from "../../../style/theme/theme";

export const BannerContainerWarp = styled.div`
  font-family: ${theme.typography.fontFamily};
  background-color: ${theme.colors.pink4};
  height: 100vh;
  width: 80%;
  position: relative;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${theme.breakpoints.xxl}) {
    height: 95vh;
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    height: 90vh;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    height: 85vh;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    background-color: ${theme.colors.pink3};
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    height: 125vh;
  }
`;

export const BannerClip = styled.div`
  position: absolute;
  background: #ffc1cd; /* Light pink color */
  width: 100%;
  height: 95vh;
  top: 0;
  clip-path: path(
    "M0,0 L1200,0 L1200,350 C1020,200 1000,900 800,600 C500,100 280,600 0,250 L0,0 Z"
  );

  @media (max-width: ${theme.breakpoints.xl}) {
    height: 90vh;
    clip-path: path(
      "M0,0 L1000,0 L1000,400 C850,150 800,750 700,680 C450,80 350,700 0,300 L0,0 Z"
    );
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    height: 85vh;
    clip-path: path(
      "M0,0 L1200,0 L1200,400 C980 300 1000,800 800,700 C543,200 200,600 0,300 L0,0 Z"
    );
  }

  @media (max-width: ${theme.breakpoints.md}) {
    height: auto;
    clip-path: path(
      "M0,0 L1200,0 L1200,400 C1200,100 840,950 800,650 C480,20 240,600 0,300 L0,0 Z"
    );
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    display: none;
    clip-path: path(
      "M0,0 L1200,0 L1200,180 C960,90 840,350 720,250 C480,30 240,200 0,100 L0,0 Z"
    );
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    display: none;
    clip-path: path(
      "M0,0 L400,0 L400,150 C300,70 250,250 200,180 C150,20 80,150 0,80 L0,0 Z"
    );
  }
`;

export const CarouselWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  z-index: 2;

  .slick-list {
    border-radius: 20px;
  }

  @media (max-width: ${theme.breakpoints.xxl}) {
    width: 80%;
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    width: 85%;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 90%;
  }
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.xl}) {
    height: 300px;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    height: 250px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    height: 230px;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    height: 200px;
  }
`;

export const BannerPopularCourses = styled.div`
  width: 68%;
  margin: 0 auto;
  z-index: 2;
  margin-top: -20px;
  padding: 20px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.xxl}) {
    width: 75%;
  }

  @media (max-width: ${theme.breakpoints.xl}) {
    width: 80%;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 85%;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 90%;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    padding: 15px;
  }
`;

export const PopularCoursesHeader = styled.h2`
  margin: 10px 40px;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 18px;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    text-align: center;
    font-size: 16px;
  }
`;

export const PopularCourses = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 40px;
  margin-right: 40px;
  overflow-x: auto; /* Enable horizontal scrolling */
  padding: 10px; /* Add some padding for better spacing */
  scroll-behavior: smooth; /* Smooth scrolling effect */
  white-space: nowrap; /* Ensure items are displayed in a single row */
  scrollbar-width: none;

  @media (max-width: ${theme.breakpoints.md}) {
    gap: 15px;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    margin: 0;
    gap: 10px;
  }
`;

export const PopularCourseCard = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px; /* Fixed width of each card */
  flex-shrink: 0; /* Prevent the card from shrinking when scrolling */

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 150px; /* Keep the card width consistent on large screens */
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 150px; /* Keep the card width consistent on medium screens */
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    width: 100%; /* Full width for small screens */
    padding: 10px;
  }
`;

export const PopularCoursesClass = styled.h3`
  font-size: 14px;
  text-align: center;

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 12px;
  }
`;

export const PopularCoursesPrice = styled.p`
  font-size: 14px;
  text-align: center;

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 12px;
  }
`;

export const PopularCoursesName = styled.p`
  font-size: 14px;
  text-align: center;

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 12px;
  }
`;

export const BannerStats = styled.div`
  width: 70%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
  bottom: 0;
  /* Pink box-shadow */

  @media (max-width: ${theme.breakpoints.xl}) {
    width: 80%;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    margin: 50px;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin: 40px auto;
    gap: 20px;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    gap: 15px;
  }
`;

export const StatsBatches = styled.div`
  // Default white background if not provided
  box-shadow: ${(props) =>
    props.boxShadow || "0 4px 8px rgba(0, 0, 0, 0.2)"}; // Default box shadow
  display: flex;
  width: 20%;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.white};
  border-radius: 10px;
  padding: 1rem;
  border: 2px solid #000;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 20%; // Adjust width for medium devices
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    width: 100%; // Full width for small devices
    padding: 0.5rem;
  }
`;

export const StatsBatchesIcon = styled.div`
  background-color: ${(props) =>
    props.bgColor || theme.colors.pink}; // Dynamic background color
  font-size: 2.5rem;
  color: ${(props) => props.color || theme.colors.black}; // Dynamic icon color
  margin-bottom: 0.5rem;
  padding: 10px 15px;
  border-radius: 50%; // Circular shape

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2rem;
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1.5rem;
  }
`;

export const TotalStatsBatches = styled.div`
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: ${theme.colors.navy};

  span {
    font-size: 1.2rem;
    color: ${theme.colors.black};

    @media (max-width: ${theme.breakpoints.xs}) {
      font-size: 1rem;
    }
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 0.9rem;
  }
`;

export const ArrowButtonLeft = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${theme.colors.pink3};
  border: none;
  padding: 10px;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: ${theme.colors.pink};
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1.2rem;
  }
`;

export const ArrowButtonRight = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${theme.colors.pink3};
  border: none;
  padding: 10px;
  border-radius: 50%;
  font-size: 14px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: ${theme.colors.pink};
  }

  @media (max-width: ${theme.breakpoints.xs}) {
    font-size: 1.2rem;
  }
`;
