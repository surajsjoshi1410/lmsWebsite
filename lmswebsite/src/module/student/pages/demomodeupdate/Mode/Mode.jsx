import React from "react";
import { useNavigate } from "react-router-dom";
import { getStudentByAuthId, updateMode } from "../../../../../api/studentApi";
import styled from "styled-components";
import MeetingHeaderImage from "../../../assets/one-to-one-join-meeting1.jpeg";
import JoinMeetingHeaderImage from "../../../assets/one-to-one-join-meeting2.jpeg";
import {
  Wrapper,
  Content,
  TextSection,
  ImagesSection,
  Circle,
  StyledButton,
  MeetingImage,
  JoinMeetingImage,
  SlideWrapper,
  Slide,
  SmallCircle
} from "./Mode.style";

const slideData = [
  {
    id: 1,
    description:
      "Personalized Course Plans for Students by Academic Counselors. Our team of academic counselors evaluates each student to design a tailored curriculum that addresses their unique needs.",
  },
  {
    id: 2,
    description:
      "Live interactive sessions with expert mentors to help you grasp concepts and clear doubts instantly.",
  },
  {
    id: 3,
    description:
      "Regular performance analysis to ensure consistent progress and improvement in academics.",
  },
];

const Mode = () => {

    const navigate = useNavigate();

        const handleClick = () => {
        const apicaller= async () =>{
            const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
            const studentData= await getStudentByAuthId(authId);
            const response= await updateMode(studentData.student._id);
            if(response){
                navigate("/student/personal"); 
            }
        }
        apicaller();

      
    };

  return (
    <>
      <Wrapper>
        <Content>
          <TextSection>
            <h1 className="one-to-oneHeader">One to one live sessions</h1>
            <p className="one-to-oneSubtitle">
              Experience personalized learning with one-on-one live sessions.
              Get expert guidance tailored to your individual needs!
            </p>
            <button onClick={handleClick}>Join us</button>
          </TextSection>
          <ImagesSection>
            <Circle />
            <MeetingImage src={MeetingHeaderImage} alt="Meeting Header" />
            <JoinMeetingImage
              src={JoinMeetingHeaderImage}
              alt="Join Meeting Header"
            />
          </ImagesSection>
        </Content>
      </Wrapper>
      <SlideWrapper>
        {slideData.slice(0, 3).map((slide) => (
          <Slide key={slide.id}>
            <SmallCircle />
            <p className="slideDescription">{slide.description}</p>
          </Slide>
        ))}
      </SlideWrapper>
    </>
  );
};

export default Mode;
