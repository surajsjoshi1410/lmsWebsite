import React from "react";
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
} from "./OneToOneExpertTeachers.Styles";

import HatImage from "../../assets/HatImage.png";
import BookImage from "../../assets/BooksImage.png";
import TimeImage from "../../assets/TimeImage.jpeg";

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

const OneToOneExpertTeachers = ({ data }) => {
  return (
    <TeacherContainer>
      <TeacherTitle>Learn from Expert Teachers</TeacherTitle>
      <TeacherSubtitle>
        "Learn from the Best, Achieve the Greatest"
      </TeacherSubtitle>

      {/* Render Teacher Cards in a single row */}
      <TeacherCardContainer>
        {data?.slice(-3).map((teacher) => (
          <TeacherCard key={teacher._id}>
            <img src={teacher.profile_image} alt={`Teacher ${teacher.name}`} />
            <TeacherDetails>
              <Experience>{teacher.experience} Years</Experience>
              <Name>{teacher.user_id.name}</Name>
              <Subject>{teacher.qualifications}</Subject>
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

export default OneToOneExpertTeachers;
