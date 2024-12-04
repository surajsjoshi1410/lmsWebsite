import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 80%;
  margin: 0 auto;
  background-color: black;
  color: white;
  padding: 40px 20px;
  position: relative;
  text-align: left;
  z-index: 1;
  overflow: hidden;
  clip-path: ellipse(131% 82% at 50% 82%);

  @media (max-width: 990px) {
    top: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid #444;
  padding-top: 10px;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterLink = styled.a`
  color: white;
  margin-right: 15px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4081;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIcon = styled.a`
  color: white;
  margin-left: 10px;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4081;
  }
`;
