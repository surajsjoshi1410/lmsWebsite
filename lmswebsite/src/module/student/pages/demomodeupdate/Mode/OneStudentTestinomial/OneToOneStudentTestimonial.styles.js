import styled from "styled-components";

export const StudentTestimonialWarp = styled.div`
  width: 80%;
  margin: 50px auto;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StudentTestimonialHeader = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const StudentTestimonialSubtitle = styled.p`
  font-size: 1rem;
  text-align: center;
  margin: 10px auto 20px;
  max-width: 600px;
  color: #000;

  @media (max-width: 480px) {
    font-size: 14px;
    text-align: center;
    margin: 10px 20px;
    max-width: 600px;
    color: #000;
  }
`;

export const StudentTestimonialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const StudentTestimonialImagesLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }

  .leftimage1 {
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    border-radius: 50%;
    margin-left: 14vw;
  }
  .leftimage2 {
    width: 80px;
    height: 80px;
    border: 2px solid #000;
    border-radius: 50%;
    margin-left: 6vw;
  }
  .leftimage3 {
    width: 60px;
    height: 60px;
    border: 2px solid #000;
    border-radius: 50%;
    margin-left: 15vw;
  }
`;

export const StudentTestimonialImagesRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }

  .rightimage1 {
    width: 100px;
    height: 100px;
    border: 2px solid #000;
    border-radius: 50%;
  }
  .rightimage2 {
    width: 80px;
    height: 80px;
    border: 2px solid #000;
    border-radius: 50%;
    margin-left: 10vw;
  }
  .rightimage3 {
    width: 60px;
    height: 60px;
    border: 2px solid #000;
    border-radius: 50%;
    margin-left: 2vw;
  }
`;

export const StudentTestimonialDetails = styled.div`
  flex: 2;
  width: 30%;
  border-radius: 50px;
  margin-left: 20px;
  @media (max-width: 990px) {
    margin-left: 40px;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .testimonial-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 0px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 400px; /* Set fixed width for each testimonial card */
  }

  .testimonial-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-rating-name {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
  }

  .slick-dots {
    bottom: -30px;
  }

  @media (max-width: 768px) {
    width: 90%; /* Allow cards to take up almost full width */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for mobile */
  }
`;

export const StudentTestimonialDescription = styled.p`
  font-size: 1rem;
  color: #444;
  text-align: center;
`;

export const StudentTestimonialImage = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const StudentTestimonialName = styled.h3`
  font-size: 1.2rem;
  color: #222;
  margin-top: 10px;
`;

export const StudentTestimonialRating = styled.p`
  font-size: 1rem;
  color: #ff9800;
  font-weight: bold;
  margin-top: 5px;
  text-align: center;
`;

export const CarouselArrows = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    color: #000;
    font-size: 24px;
    border: none;

    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;

    &:hover {
      background-color: #666;
    }
  }
`;
