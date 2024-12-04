import React from "react";
import { Carousel } from "antd";
import {
  StudentTestimonialWarp,
  StudentTestimonialHeader,
  StudentTestimonialSubtitle,
  StudentTestimonialContainer,
  StudentTestimonialImagesLeft,
  StudentTestimonialDetails,
  StudentTestimonialImagesRight,
  StudentTestimonialDescription,
  StudentTestimonialImage,
  StudentTestimonialName,
  StudentTestimonialRating,
} from "./StudentTestimonial.styles";

import StudentTestimonialimage1 from "../../assets/STimage1.jpeg";
import StudentTestimonialimage2 from "../../assets/STimage2.jpeg";
import StudentTestimonialimage3 from "../../assets/STimage3.jpeg";

const StudentTestimonial = ({ data }) => {
  const { testimonials = [] } = data;
  const renderStars = (rating) => {
    const fullStars = "⭐".repeat(rating);
    const emptyStars = "⭐".repeat(5 - rating);
    return fullStars + emptyStars;
  };

  return (
    <StudentTestimonialWarp>
      <StudentTestimonialHeader>Student Testimonial</StudentTestimonialHeader>
      <StudentTestimonialSubtitle>
        A student testimonial can be a powerful tool for attracting new
        students, showcasing the value of your program, and building trust with
        potential applicants.
      </StudentTestimonialSubtitle>
      <StudentTestimonialContainer>
        <StudentTestimonialImagesLeft>
          <img
            src={StudentTestimonialimage1}
            alt="Side Image 1"
            className="leftimage1"
          />
          <img
            src={StudentTestimonialimage2}
            alt="Side Image 2"
            className="leftimage2"
          />
          <img
            src={StudentTestimonialimage3}
            alt="Side Image 3"
            className="leftimage3"
          />
        </StudentTestimonialImagesLeft>
        <StudentTestimonialDetails>
          <Carousel autoplay dots={false}>
            {testimonials.map((testimonial) => (
              <div key={testimonial._id} className="testimonial-card">
                <StudentTestimonialDescription>
                  {testimonial.review || "No review provided."}
                </StudentTestimonialDescription>
                <div className="image-rating-name">
                  <div className="rating">
                    <StudentTestimonialRating>
                      {testimonial.rating} / 5 {renderStars(testimonial.rating)}
                    </StudentTestimonialRating>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </StudentTestimonialDetails>
        <StudentTestimonialImagesRight>
          <img
            src={StudentTestimonialimage1}
            alt="Side Image 4"
            className="rightimage1"
          />
          <img
            src={StudentTestimonialimage2}
            alt="Side Image 5"
            className="rightimage2"
          />
          <img
            src={StudentTestimonialimage3}
            alt="Side Image 6"
            className="rightimage3"
          />
        </StudentTestimonialImagesRight>
      </StudentTestimonialContainer>
    </StudentTestimonialWarp>
  );
};

export default StudentTestimonial;
