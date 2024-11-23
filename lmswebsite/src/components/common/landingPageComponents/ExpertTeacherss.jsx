import React from "react";
import Teacher1 from "../../../icons/LandingPageIcons/Teacher1.png";
import Teacher2 from "../../../icons/LandingPageIcons/Teacher2.png";
import Teacher3 from "../../../icons/LandingPageIcons/Teacher3.png";
import Teacher4 from "../../../icons/LandingPageIcons/Teacher4.png";
import HatImage from "../../../icons/LandingPageIcons/HatImage.png";
import BookImage from "../../../icons/LandingPageIcons/BooksImage.png";
import TimeImage from "../../../icons/LandingPageIcons/TimeImage.png";
import {
  TeacherContainer,
  TeacherTitle,
  TeacherSubtitle,
  TeacherCardContainer,
  TeacherCard,
  TeacherDetails,
  Experience,
  Name,
  Subject,
  TeacherContext,
  TeacherSection,
  ContextImage,
  ContextText,
} from "./ExpertTeacherss.style";

// Data for teachers
const teachers = [
  {
    id: 1,
    name: "Roopa",
    subject: "Physics",
    experience: "4 years",
    image: Teacher1,
  },
  {
    id: 2,
    name: "Meera",
    subject: "Chemistry",
    experience: "5 years",
    image: Teacher2,
  },
  {
    id: 3,
    name: "Arun",
    subject: "Biology",
    experience: "6 years",
    image: Teacher3,
  },
  {
    id: 4,
    name: "Sanvi",
    subject: "Mathematics",
    experience: "7 years",
    image: Teacher4,
  },
];

// Data for teacher context
const teacherContext = [
  {
    id: 1,
    image: HatImage,
    text: "With years of experience from top-tier colleges.",
  },
  {
    id: 2,
    image: BookImage,
    text: "Teachers specially trained to bring out the best in every student.",
  },
  {
    id: 3,
    image: TimeImage,
    text: "Over 4.5 crore hours of teaching experience, impacting 10 lakh students across 1,000+ cities in 57 countries.",
  },
];

const ExpertTeachers = () => {
  return (
    <TeacherContainer>
      <TeacherTitle>Learn from expert teachers</TeacherTitle>
      <TeacherSubtitle>
        "Learn from the Best, Achieve the Greatest"
      </TeacherSubtitle>

      {/* Render Teacher Cards in a single row */}
      <TeacherCardContainer>
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id}>
            <img src={teacher.image} alt={`Teacher ${teacher.name}`} />
            <TeacherDetails>
              <Experience>{teacher.experience}</Experience>
              <Name>{teacher.name}</Name>
              <Subject>{teacher.subject}</Subject>
            </TeacherDetails>
          </TeacherCard>
        ))}
      </TeacherCardContainer>

      {/* Render Teacher Context */}
      <TeacherContext>
        {teacherContext.map((context) => (
          <TeacherSection key={context.id}>
            <ContextImage src={context.image} alt="Context icon" />
            <ContextText>{context.text}</ContextText>
          </TeacherSection>
        ))}
      </TeacherContext>
    </TeacherContainer>
  );
};

export default ExpertTeachers;
