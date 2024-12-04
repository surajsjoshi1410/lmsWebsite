import React from "react";
import Benefit1 from "../../assets/Benefit1.jpg";
import Benefit2 from "../../assets/Benefit2.jpeg";
import Benefit3 from "../../assets/Benefit3.jpg";
import Benefit4 from "../../assets/Benefit4.jpeg";
import Benefit5 from "../../assets/Benefit5.jpg";
import Benefit6 from "../../assets/Benefit6.jpeg";
import {
  BenefitsContainerWarp,
  BenefitsContiner,
  BenefitsHeader,
  BenefitsColor,
  BenefitsSubtitle,
  BenefitsContent,
  ImageContainer,
  ImageDiv,
  StyledImage,
  BenefitsDetails,
  DetailsBenefits,
} from "./Benefits.styles"; // Import your styled components

const Benefits = ({ data }) => {
  // Destructure benefits from data with a default empty array to prevent errors
  const { benefits = [] } = data || {};
  const images = [
    { src: Benefit1, alt: "Image 1" },
    { src: Benefit2, alt: "Image 2" },
    { src: Benefit3, alt: "Image 3" },
    { src: Benefit4, alt: "Image 4" },
    { src: Benefit5, alt: "Image 5" },
    { src: Benefit6, alt: "Image 6" },
  ];

  return (
    <BenefitsContainerWarp>
      <BenefitsContiner>
        {/* Header for the benefits section */}
        <BenefitsHeader>Benefits from our website</BenefitsHeader>

        {/* Map through the API-provided benefits data */}
        {benefits.slice(-3).map((benefit, index) => (
          <DetailsBenefits key={index}>
            <BenefitsColor>
              <div
                style={{
                  backgroundColor: benefit.color || "#ccc", // Use color from API, fallback to #ccc
                }}
                className="color"
              ></div>
            </BenefitsColor>
            <BenefitsDetails>
              {/* Dynamically render subtitle and content from the API */}
              <BenefitsSubtitle>{benefit.title}</BenefitsSubtitle>
              <BenefitsContent>{benefit.description}</BenefitsContent>
            </BenefitsDetails>
          </DetailsBenefits>
        ))}
      </BenefitsContiner>

      {/* Render the images */}
      <ImageContainer>
        <ImageDiv>
          {images.map((image, index) => (
            <StyledImage
              key={index}
              src={image.src}
              alt={image.alt}
              className={`image${index + 1}`}
            />
          ))}
        </ImageDiv>
      </ImageContainer>
    </BenefitsContainerWarp>
  );
};

export default Benefits;
