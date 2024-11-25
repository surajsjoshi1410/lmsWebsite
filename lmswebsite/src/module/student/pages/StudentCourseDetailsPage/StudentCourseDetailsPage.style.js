import styled from "styled-components";

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const HeaderContainer = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  height: 60vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  /* Media Queries - Width */
  @media (max-width: 990px) {
    height: 50vh;
  }
  @media (max-width: 768px) {
    height: 45vh;
  }
  @media (max-width: 480px) {
    height: 30vh;
  }
`;

export const PCMBHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  position: relative;
  height: 60vh;

  /* Media Queries - Width */
  @media (max-width: 1200px) {
    padding: 15px;
  }
  @media (max-width: 990px) {
    height: 50vh;
    padding: 10px;
  }
  @media (max-width: 768px) {
    height: 45vh;
    flex-direction: column;
    padding: 5px;
  }
  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const HeaderText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 8vh 0vw 0vh 10vw;
  gap: 3vh;

  /* Media Queries - Width */
  @media (max-width: 1200px) {
    padding: 5vh 5vw 0 10vw;
  }
  @media (max-width: 990px) {
    padding: 13vh 5vw 0 10vw;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    padding: 8vh 5vw 0 11vw;
  }
`;

export const GirlImage = styled.img`
  width: 40%;
  height: 60vh;
  position: absolute;
  bottom: 0;
  right: 0;
  object-fit: contain;

  /* Media Queries - Width */
  @media (max-width: 1200px) {
    width: 45%;
  }
  @media (max-width: 990px) {
    width: 40%;
    height: 44vh;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const TitleCircle = styled.div`
  position: absolute;
  top: 15vh;
  left: 8vw;
  background-color: #aa8b70;
  color: #fff;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  z-index: 0;

  /* Media Queries - Width */
  @media (max-width: 1200px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 990px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 768px) {
    top: 13vh;
    left: 8vw;
    width: 60px;
    height: 60px;
  }
  @media (max-width: 480px) {
    top: 6vh;
    left: 7vw;
    width: 50px;
    height: 50px;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #000;
  font-weight: bold;
  margin: 0;
  position: relative;
  z-index: 1;

  /* Media Queries */
  @media (max-width: 1200px) {
    font-size: 4.5rem;
  }

  @media (max-width: 990px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #000;

  /* Media Queries */
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }

  @media (max-width: 990px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const EnrollButton = styled.button`
  background-color: #fff;
  color: #aa8b70;
  width: 20%;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid #aa8b70;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #e0486d;
  }

  /* Media Queries */

  @media (max-width: 990px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 38%;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 5px 10px;
    font-weight: 600;
    width: 35%;
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
