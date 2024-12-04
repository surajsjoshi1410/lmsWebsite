import { theme, media } from "../../../style/theme/theme";
import styled from "styled-components";

export const BenefitsContainerWarp = styled.div`
  font-family: ${theme.typography.fontFamily};
  width: 80%;
  margin: 2px auto;
  display: flex;
  flex-direction: row;

  ${media.md`
  width: 100%;
    flex-direction: column;
  `}
`;

export const BenefitsContiner = styled.div`
  width: 100%;
  margin-top: 20%;
  margin-left: 40px;

  ${media.xl`
    margin-left: 30px;
    `}

  ${media.lg`    
    margin-top: 15%;
    margin-left: 20px;
    `}

  ${media.md`
    margin: 5% auto;
  `}

  ${media.xs`
    margin-top: 10%;
  `}
`;

export const DetailsBenefits = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 20px;
  margin-left: 10px;

  ${media.md`
    margin-left: 10%;
 `}
`;

export const BenefitsHeader = styled.h2`
  width: 60%;
  font-size: 42px;
  font-weight: 800;

  ${media.xl`
    font-size: 36px;
  `}

  ${media.lg`    
font-size: 32px;
    `}
    
  ${media.md`
    margin-left: 20%;
    font-size: 30px;
 `}

  ${media.xs`
    font-size: 24px;
    text-align: center;
    width: 100%;
    margin: 0;
  `}
`;

export const BenefitsDetails = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const BenefitsColor = styled.div`
  .color {
    width: 30px;
    height: 30px;
    border: 2px solid ${theme.colors.frenchGray};
    border-radius: 50px;

    ${media.md`
      width: 20px;
      height: 20px;
    `}
  }
`;

export const BenefitsSubtitle = styled.h3`
  font-size: 20px;
  width: 50%;

  ${media.xl`
    font-size: 18px;
  `}

  ${media.lg`
    font-size: 16px;
  `}

  ${media.xs`
    font-size: 14px;
  `}
`;

export const BenefitsContent = styled.p`
  font-size: 18px;
  width: 70%;
  text-align: justify;

  ${media.xl`
    font-size: 16px;
  `}

  ${media.lg`
    font-size: 14px;
    `}

    ${media.md`
    width: 90%;
    `}

  ${media.xs`
    font-size: 12px;
    `}
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20%;
  flex-wrap: wrap;

  ${media.xl`
    margin-top: 15%;
  `}

  ${media.lg`
    margin-top: 20%;
  `}

  ${media.md`
  margin: 15% auto 0% auto;
  `}
`;

export const ImageDiv = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  margin-right: 20%;
  background-color: #7684ff;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.xl`
    width: 450px;
    height: 500px;
  `}

  ${media.lg`
    width: 350px;
    height: 430px;
  `}


  ${media.md`
    width: 350px;
    height: 400px;
    margin-right: 0;
  `}


  ${media.xs`
    width: 250px;
    height: 353px;
  `}
`;

export const StyledImage = styled.img`
  position: absolute;

  &:nth-child(1) {
    top: -20%;
    left: -5%;
    width: 40%;
    height: 230px;
    border-top-left-radius: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);

    @media (max-width: 1200px) {
      width: 35%;
      height: 200px;
    }

    @media (max-width: 990px) {
      width: 30%;
      height: 200px;
    }

    @media (max-width: 768px) {
      width: 30%;
      height: 180px;
    }

    @media (max-width: 480px) {
      width: 35%;
      height: 150px;
    }
  }

  &:nth-child(2) {
    top: -12%;
    left: 41%;
    width: 330px;
    height: 220px;
    border-top-right-radius: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);

    @media (max-width: 1200px) {
      width: 300px;
      height: 200px;
    }

    @media (max-width: 990px) {
      top: -12%;
      left: 30%;
      width: 300px;
      height: 180px;
    }
    @media (max-width: 768px) {
      top: -12%;
      left: 34%;
      width: 280px;
      height: 180px;
    }

    @media (max-width: 480px) {
      left: 35%;
      top: -12%;
      width: 78%;
      height: 150px;
    }
  }

  &:nth-child(3) {
    top: 28%;
    left: -10%;
    width: 30%;
    height: 250px;
    border-radius: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
    @media (max-width: 1200px) {
      top: 25%;
      width: 30%;
      height: 250px;
    }

    @media (max-width: 990px) {
      top: 30%;
      width: 30%;
      height: 180px;
    }

    @media (max-width: 480px) {
      top: 28%;
      width: 25%;
      height: 150px;
    }
  }

  &:nth-child(4) {
    top: 81%;
    left: -10%;
    width: 70%;
    height: 200px;
    border-bottom-left-radius: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);

    @media (max-width: 1200px) {
      top: 78%;
      width: 70%;
      height: 200px;
    }

    @media (max-width: 990px) {
      top: 74%;
      width: 70%;
      height: 150px;
    }

    @media (max-width: 768px) {
      top: 80%;
      width: 70%;
      height: 150px;
    }

    @media (max-width: 480px) {
      top: 75%;
      height: 120px;
    }
  }

  &:nth-child(5) {
    top: 40%;
    right: -35px;
    width: 40%;
    height: 350px;
    border-bottom-right-radius: 50px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);

    @media (max-width: 1200px) {
      width: 40%;
      top: 33%;
      right: -10%;
      height: 350px;
    }

    @media (max-width: 990px) {
      top: 35%;
      left: 70%;
      width: 50%;
      height: 290px;
    }

    @media (max-width: 768px) {
      top: 40%;
      left: 70%;
      width: 45%;
      height: 250px;
    }

    @media (max-width: 480px) {
      top: 44%;
      left: 75%;
      width: 35%;
      height: 200px;
    }
  }

  &:nth-child(6) {
    top: 35%;
    left: 30%;
    width: 29%;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);

    @media (max-width: 1200px) {
      width: 35%;
      height: 180px;
    }

    @media (max-width: 990px) {
      left: 25%;
      top: 35%;
      width: 40%;
      height: 150px;
    }

    @media (max-width: 768px) {
      left: 25%;
      top: 37%;
      width: 40%;
      height: 150px;
    }

    @media (max-width: 480px) {
      width: 40%;
      height: 120px;
    }
  }
`;
