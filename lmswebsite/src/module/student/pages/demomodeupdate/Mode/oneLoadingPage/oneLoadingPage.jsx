import React from "react";
import {
  LoadingContainer,
  CircleWrapper,
  Dot,
  LoadingText,
} from "./oneLoadingPage.style";

const oneLoadingPage = () => {
  const numberOfDots = 8; // Number of dots in the circle

  // Generate dots with calculated positions and delays
  const dots = Array.from({ length: numberOfDots }).map((_, index) => {
    const angle = (360 / numberOfDots) * index; // Angle for each dot
    const radians = (angle * Math.PI) / 180; // Convert angle to radians
    const x = 50 + 40 * Math.cos(radians); // X-coordinate (center + radius * cos)
    const y = 50 + 40 * Math.sin(radians); // Y-coordinate (center + radius * sin)
    return { x, y, delay: index * 0.15 }; // Position and animation delay
  });

  return (
    <LoadingContainer>
      <div>
        <CircleWrapper>
          {dots.map((dot, index) => (
            <Dot
              key={index}
              style={{
                top: `${dot.y}%`,
                left: `${dot.x}%`,
                transform: "translate(-50%, -50%)",
              }}
              delay={dot.delay}
            />
          ))}
        </CircleWrapper>
        <LoadingText>Loading, please wait...</LoadingText>
      </div>
    </LoadingContainer>
  );
};

export default oneLoadingPage;
    
