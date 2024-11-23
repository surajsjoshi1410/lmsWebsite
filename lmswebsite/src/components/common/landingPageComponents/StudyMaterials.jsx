import React, { useState } from "react";
import {
  StudyMaterialsContainer,
  Heading,
  HeadingUnderline,
  ClassButtons,
  ClassButton,
  MaterialsGrid,
  MaterialCard,
  MaterialTitle,
  MaterialDescription,
  MaterialImage,
} from "./StudyMaterials.styles";
import material1 from "../../../icons/LandingPageIcons/material1.svg";
import material2 from "../../../icons/LandingPageIcons/material2.svg";
import material3 from "../../../icons/LandingPageIcons/material3.svg";
import material4 from "../../../icons/LandingPageIcons/material4.svg";

const StudyMaterials = () => {
  const [activeButton, setActiveButton] = useState(0);

  const classes = [
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <StudyMaterialsContainer>
      <Heading>Explore study materials</Heading>
      <HeadingUnderline />
      <ClassButtons>
        {classes.map((className, index) => (
          <ClassButton
            key={index}
            active={index === activeButton}
            onClick={() => handleButtonClick(index)}
          >
            {className}
          </ClassButton>
        ))}
      </ClassButtons>
      <MaterialsGrid>
        <MaterialCard className="previous-year">
          <MaterialTitle>Previous year</MaterialTitle>
          <MaterialDescription>question paper</MaterialDescription>
          <MaterialImage src={material1} alt="Previous Year" />
        </MaterialCard>
        <MaterialCard className="ncert">
          <MaterialTitle>NCERT</MaterialTitle>
          <MaterialDescription>books</MaterialDescription>
          <MaterialImage src={material2} alt="NCERT" />
        </MaterialCard>
        <MaterialCard className="revision">
          <MaterialTitle>Revision</MaterialTitle>
          <MaterialDescription>notes</MaterialDescription>
          <MaterialImage src={material3} alt="Revision" />
        </MaterialCard>
        <MaterialCard className="general">
          <MaterialTitle>General</MaterialTitle>
          <MaterialDescription>knowledge</MaterialDescription>
          <MaterialImage src={material4} alt="General Knowledge" />
        </MaterialCard>
      </MaterialsGrid>
    </StudyMaterialsContainer>
  );
};

export default StudyMaterials;
