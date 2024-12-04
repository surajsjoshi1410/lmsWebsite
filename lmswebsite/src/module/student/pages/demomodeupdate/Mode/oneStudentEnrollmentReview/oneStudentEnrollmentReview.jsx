import React from "react";
import {
  TestimonialSection,
  SectionTitle,
  TestimonialsContainerMain,
  TestimonialContainer,
  StudentImage,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  AuthorName,
  AuthorCompany,
  Rating,
} from "./oneStudentEnrollmentReview.style";
import studentImage from "../../../../assets/student-image.svg"; // Replace with your student image path

const oneStudentEnrollmentReview = () => {
  return (
    <TestimonialSection>
      <SectionTitle>What Our Student Says</SectionTitle>
      <TestimonialsContainerMain>
        <TestimonialContainer>
          <StudentImage src={studentImage} alt="Student" />
          <TestimonialCard>
            <TestimonialText>
              We move at a fast space, I’m always for working on something I am
              excited about!
            </TestimonialText>
          </TestimonialCard>
          <TestimonialAuthor>
            <AuthorName>Victoria Wotton</AuthorName>
            <AuthorCompany>Fementum Odio Co.</AuthorCompany>
            <Rating>⭐⭐⭐⭐⭐</Rating>
          </TestimonialAuthor>
        </TestimonialContainer>
        <TestimonialContainer>
          <TestimonialCard>
            <TestimonialText>
              We move at a fast space, I’m always for working on something I am
              excited about!
            </TestimonialText>
          </TestimonialCard>
          <TestimonialAuthor>
            <AuthorName>Victoria Wotton</AuthorName>
            <AuthorCompany>Fementum Odio Co.</AuthorCompany>
            <Rating>⭐⭐⭐⭐⭐</Rating>
          </TestimonialAuthor>
          <StudentImage src={studentImage} alt="Student" />
        </TestimonialContainer>
      </TestimonialsContainerMain>
    </TestimonialSection>
  );
};

export default oneStudentEnrollmentReview;
