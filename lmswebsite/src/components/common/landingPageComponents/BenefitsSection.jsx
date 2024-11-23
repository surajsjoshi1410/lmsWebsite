import React, { useState } from "react";
import {
  BenefitsSectionContainer,
  Title,
  SubTitle,
  FlexContainer,
  BenefitCard,
  BenefitContent,
  Dot,
  BenefitTitle,
  BenefitDescription,
  BenefitImage,
  Image,
} from "./BenefitsSection.styles";
import Group2 from "../../../icons/LandingPageIcons/Group2.png"; // Updated import

const BenefitsSection = () => {
  const [data] = useState({
    message: "Benefits fetched successfully",
    benefits: [
      {
        _id: "6718a9a4cf2def953e2b5d46",
        title: "Gamification element",
        description:
          "Some online courses use gamification elements, such as points, badges, and leader boards, to motivate learners.",
        color: "#FF5733",
        createdAt: "2024-10-23T07:45:40.902Z",
        updatedAt: "2024-10-23T07:45:40.902Z",
      },
      {
        _id: "6718aa84f826a013f6e1ba08",
        title: "Interactivity",
        description:
          "Many online courses use interactive elements, such as quizzes, simulations, and discussion forums, to keep learners engaged. This can help to make the learning experience more enjoyable and effective.",
        color: "#FF5733",
        createdAt: "2024-10-23T07:49:24.165Z",
        updatedAt: "2024-10-23T07:49:24.165Z",
      },
      {
        _id: "6718aa84f826a013f6e1ba08",
        title: "Learn with expert",
        description:
          "There are a number of online forums where you can ask questions about using expert details in your online course mentor.",
        color: "#FF5733",
        createdAt: "2024-10-23T07:49:24.165Z",
        updatedAt: "2024-10-23T07:49:24.165Z",
      },
    ],
  });

  return (
    <BenefitsSectionContainer>
      <Title>Benefits from our</Title>
      <SubTitle>website</SubTitle>
      <FlexContainer>
        <div>
          {data.benefits.length > 0 ? (
            data.benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitContent>
                  <Dot />
                  <div>
                    <BenefitTitle>{benefit.title}</BenefitTitle>
                    <BenefitDescription>{benefit.description}</BenefitDescription>
                  </div>
                </BenefitContent>
              </BenefitCard>
            ))
          ) : (
            <p>No Benefits Available at the moment. Please check back later.</p>
          )}
        </div>
        <BenefitImage>
          <Image src={Group2} alt="Benefit Illustration" /> {/* Updated source */}
        </BenefitImage>
      </FlexContainer>
    </BenefitsSectionContainer>
  );
};

export default BenefitsSection;
