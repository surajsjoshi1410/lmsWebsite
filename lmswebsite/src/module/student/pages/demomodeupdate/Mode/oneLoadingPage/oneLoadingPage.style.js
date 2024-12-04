import styled, { keyframes } from "styled-components";
import { theme } from "../../../../../../style/theme/theme";

// Keyframes for pulsing dots
export const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.6);
    opacity: 0.4;
  }
`;

// Styled Components
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.white};
`;

export const CircleWrapper = styled.div`
  margin-left: 30px;
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: ${theme.colors.pink};
  border-radius: 50%;
  animation: ${pulse} 1.2s infinite ease-in-out;
  animation-delay: ${(props) => props.delay}s;
`;

export const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 18px;
  color: ${theme.colors.black};
  text-align: center;
`;
