import React from "react";
import {
  FooterContainer,
  FooterBottom,
  FooterText,
  FooterLinks,
  FooterLink,
  FooterSocial,
  SocialIcon,
} from "./Footer.styles";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBottom>
        <FooterText>© 2024. ToppersAcademy.com. All rights reserved</FooterText>
        <FooterLinks>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms and Conditions</FooterLink>
        </FooterLinks>
        <FooterSocial>
          <SocialIcon href="#">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="#">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="#">
            <FaTwitter />
          </SocialIcon>
        </FooterSocial>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
