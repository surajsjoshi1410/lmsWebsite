import React, { useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import {
  Container,
  FeaturedSection,
  TextSection,
  Title,
  HighlightQuote,
  Details,
  VideoSection,
  VideoThumbnail,
  PlayIcon,
  CardsSection,
  Card,
  CardThumbnail,
  CardContent,
  Quote,
  Detail,
  Name,
  SubText,
  Subtitle,
} from "./oneStudentEnrollementVideo.style"; // Importing the styled components from style.js

const OneStudentEnrollmentVideoView = () => {
  const [selectedVideo, setSelectedVideo] = useState({
    url: "https://example.com/video1.mp4",
    quote:
      "After I joined the PCMB batch at Topper Academy, I cracked with 98% result and discovered my true potential.",
    details: "CBSE | 98%",
  });

  const videoData = [
    {
      id: 1,
      url: "https://example.com/video1.mp4",
      thumbnail: "https://via.placeholder.com/150",
      name: "Naina Kulkarni",
      class: "11th std",
      school: "[SCHOOL NAME]",
      quote:
        "After I joined the PCMB batch at Topper Academy, I cracked with 98% result and discovered my true potential.",
      details: "CBSE | 98%",
    },
    {
      id: 2,
      url: "https://example.com/video2.mp4",
      thumbnail: "https://via.placeholder.com/150",
      name: "Anjali Sharma",
      class: "12th std",
      school: "[SCHOOL NAME]",
      quote:
        "Joining the academy boosted my confidence and helped me achieve my goals.",
      details: "CBSE | 97%",
    },
    {
      id: 3,
      url: "https://example.com/video3.mp4",
      thumbnail: "https://via.placeholder.com/150",
      name: "Rahul Verma",
      class: "10th std",
      school: "[SCHOOL NAME]",
      quote:
        "With the guidance of amazing teachers, I scored beyond my expectations!",
      details: "CBSE | 95%",
    },
  ];

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Container>
      {/* Featured Video Section */}
      <FeaturedSection>
        <TextSection>
          <Title>Stories that inspire</Title>
          <Subtitle>"</Subtitle>
          <HighlightQuote>"{selectedVideo.quote}"</HighlightQuote>
          <Details>{selectedVideo.details}</Details>
        </TextSection>
        <VideoSection>
          <VideoThumbnail>
            <PlayIcon />
          </VideoThumbnail>
        </VideoSection>
      </FeaturedSection>

      {/* Video Cards Section */}
      <CardsSection>
        {videoData.map((video) => (
          <Card key={video.id} onClick={() => handleVideoClick(video)}>
            <CardThumbnail>
              <PlayIcon />
            </CardThumbnail>
            <CardContent>
              <Quote>"{video.quote}"</Quote>
              <Detail>{video.details}</Detail>
              <Name>{video.name}</Name>
              <SubText>{video.class}</SubText>
              <SubText>{video.school}</SubText>
            </CardContent>
          </Card>
        ))}
      </CardsSection>
    </Container>
  );
};

export default OneStudentEnrollmentVideoView;
