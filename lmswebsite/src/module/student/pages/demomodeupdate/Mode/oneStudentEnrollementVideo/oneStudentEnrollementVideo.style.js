// src/components/FeaturedSection/style.js
import styled from "styled-components";
import { PlayCircleOutlined } from "@ant-design/icons";
import { theme, media} from "../../../../../../style/theme/theme";

// Container for the whole section
export const Container = styled.div`
  padding: 2em;
`;

// Featured section wrapper with a responsive layout
export const FeaturedSection = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.seasalt};
  border-radius: 10px;
  padding: 2rem;
  gap: 2em;
  margin-bottom: 3em;

  @media (max-width: 1200px) {
    padding: 1.5rem;
    gap: 1.5em;
  }

  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1em;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 0.8em;
  }
`;

// Text section inside the featured section
export const TextSection = styled.div`
  text-align: left;
  font-family:${theme.typography.fontFamily};
  background-color: ${theme.colors.seasalt};
  width: 35%;
  height: 400px;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 990px) {
    width: 80%;
    height: auto;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// Title with an arc below the text
export const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 1em;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 120px;
    height: 5px;
    background-color: ${theme.colors.blueone};
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    border-radius: 50% 50% 0 0;
  }

  @media (max-width: 1200px) {
    font-size: 38px;
  }

  @media (max-width: 990px) {
    font-size: 34px;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

// Highlighted quote section
export const HighlightQuote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  color: #333;
  margin: 0 5vw 5vh 5vw;
  margin-top: 50px;
  text-align: center;

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 990px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    font-size: 0.9rem;
  }
`;

// Subtitle positioned relative to the title
export const Subtitle = styled.span`
  font-size: 4rem;
  color: #000;
  font-style: italic;
  position: relative;
  left: 200px;

  @media (max-width: 1200px) {
    font-size: 3.8rem;
    top: 70px;
    left: 150px;
  }

  @media (max-width: 990px) {
    font-size: 3.5rem;
    top: 60px;
    left: 100px;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    left: 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

// Paragraph with details for the featured section
export const Details = styled.p`
  font-weight: bold;
  color: #555;
  text-align: center;

  @media (max-width: 1200px) {
    margin-left: 300px;
  }

  @media (max-width: 990px) {
    margin-left: 200px;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

// Video section that contains the thumbnail
export const VideoSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 990px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// Video thumbnail container
export const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  background: url("https://via.placeholder.com/400x400") no-repeat center center;
  background-size: cover;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 1200px) {
    height: 350px;
  }

  @media (max-width: 990px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

// Play icon centered on the video thumbnail
export const PlayIcon = styled(PlayCircleOutlined)`
  font-size: 3rem;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1200px) {
    font-size: 2.8rem;
  }

  @media (max-width: 990px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Section to hold all cards with horizontal scrolling
export const CardsSection = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5em;
  padding-bottom: 1em;
  scrollbar-width: none;
  background: ${theme.colors.seasalt};

  @media (max-width: 1200px) {
    gap: 1.2em;
  }

  @media (max-width: 990px) {
    gap: 1em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }

  @media (max-width: 480px) {
    gap: 0.8em;
  }
`;

// Individual card styling
export const Card = styled.div`
  background: ${theme.colors.seasalt};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s;
  height: 300px;
  display: flex;
  flex-shrink: 0;
  padding: 1em;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 1200px) {
    height: 280px;
  }

  @media (max-width: 990px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;

// Card thumbnail with a fixed aspect ratio
export const CardThumbnail = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background: url("https://via.placeholder.com/150") no-repeat center center;
  background-size: cover;
  border-radius: 10px;
`;

// Content section within the card
export const CardContent = styled.div`
  flex: 1;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Quote text inside the card content
export const Quote = styled.p`
  font-size: 1rem;
  color: ${theme.colors.black};
  margin-bottom: 0.5em;
`;

// Name of the person associated with the quote
export const Name = styled.h4`
  margin-top: 0.5em;
  font-weight: bold;
`;

// Sub-text under the name in the card
export const SubText = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.black};
`;

// Additional details in the card
export const Detail = styled.p`
  font-size: 0.9rem;
  color: #777;
`;
