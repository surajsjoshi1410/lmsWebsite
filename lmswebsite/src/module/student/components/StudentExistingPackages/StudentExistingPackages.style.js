import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  position: relative;

  .clip-path-bg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 15rem;
    background: #ee1b7a;
    clip-path: polygon(0% 70%, 100% 0%, 100% 50%, 0% 100%);
    z-index: -1;
    transition: clip-path 0.3s ease, height 0.3s ease;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Header = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: 990px) {
      font-size: 40px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 20px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  .Price-Plans {
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  span {
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const ToggleSwitch = styled.input`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
  cursor: pointer;
  appearance: none;
  background: #ccc;
  border-radius: 34px;
  transition: 0.4s;

  &:checked {
    background: #ff4081;
  }

  &:checked::after {
    left: 26px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    top: 4px;
    left: 4px;
    background: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

export const PlanContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10vh;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Plan = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
  margin: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;

  display: flex; /* Flexbox for layout */
  flex-direction: column; /* Stack items vertically */
  justify-content: space-between; /* Spread items, button at the bottom */
  height: 100%; /* Full height ensures proper alignment */

  @media (max-width: 1200px) {
    max-width: 300px;
  }

  @media (max-width: 990px) {
    max-width: 200px;
    height: 600px;
  }

  @media (max-width: 768px) {
    max-width: 70%;
    height: auto;
  }

  @media (max-width: 480px) {
    max-width: 80%;
    padding: 15px;
  }
`;

export const PlanTitle = styled.h3`
  font-size: 22px;
  color: #ee1b7a;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const PlanPrice = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: #101828;
  margin: 10px 0;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 990px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

export const PlanDescription = styled.p`
  font-size: 16px;
  color: #667085;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const PlanFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 40px 0 10px 10px;
  text-align: left;

  @media (max-width: 768px) {
    margin: 20px 0 10px 10px; /* Adjust margins */
  }

  @media (max-width: 480px) {
    margin: 15px 0 10px 0;
  }
`;

export const Feature = styled.li`
  margin: 10px 0;

  @media (max-width: 480px) {
    margin: 8px 0;
  }
`;

export const GetStartedButton = styled.button`
  background-color: #ff4081;
  width: 80%;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  margin-top: auto; /* Push the button to the bottom */
  align-self: center; /* Center the button horizontally */

  &:hover {
    background-color: #e91e63;
  }

  @media (max-width: 768px) {
    padding: 8px 18px;
  }

  @media (max-width: 480px) {
    padding: 6px 16px;
  }
`;
