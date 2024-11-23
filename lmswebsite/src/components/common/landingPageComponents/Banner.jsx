import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BannerContainer,
  InnerContainer,
  SliderItem,
  BannerImage,
  BannerText,
  CoursesBackground,
  CoursesTitle,
  CoursesSection,
  Card,
  StatsSection,
  CardContainer,
  CardStatistics,
  Wave,
  StyledSliderDots,
} from "./Banner.styles";

const Banner = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const fallbackBannerImage =
    "https://firebasestorage.googleapis.com/v0/b/lmseducationplaform.appspot.com/o/44c95419-42cb-4ce6-a40f-abf0a9ab12cd.jpg?alt=media";

  const dummyCourses = [
    { _id: "1", title: "PCM Courses", bgColor: "#ffe4e1" },
    { _id: "2", title: "PCB Courses", bgColor: "#e6ffe9" },
    { _id: "3", title: "4-6 STD Courses", bgColor: "#e7f0ff" },
    { _id: "4", title: "7-10 STD Courses", bgColor: "pink" },
    { _id: "5", title: "One to One classes", bgColor: "#f6eaff" },
  ];

  const dummyStats = {
    totalTeachers: 5,
    totalStudents: 3,
    totalCourses: 6,
  };

  return (
    <BannerContainer>
      <InnerContainer>
        <StyledSliderDots>
          <Wave />
          <Slider {...sliderSettings}>
            {data?.banners?.length > 0
              ? data.banners.map((banner, index) => (
                  <SliderItem key={index}>
                    <BannerImage
                      src={banner.banner_image || fallbackBannerImage}
                      alt={banner.title || "Default Banner Title"}
                    />
                    <BannerText>
                      {banner.title || "Default Banner Title"}
                    </BannerText>
                  </SliderItem>
                ))
              : Array.from({ length: 5 }).map((_, index) => (
                  <SliderItem key={index}>
                    <BannerImage
                      src={fallbackBannerImage}
                      alt="Default Banner"
                    />
                  </SliderItem>
                ))}
          </Slider>
        </StyledSliderDots>

        <CoursesBackground>
          <CoursesTitle>Popular Courses</CoursesTitle>
          <CoursesSection>
            {data?.courses?.length > 0
              ? data.courses.map((course) => (
                  <Card key={course._id} bgColor={course.bgColor}>
                    <p>{course.title}</p>
                    <p>{course.price}</p>
                  </Card>
                ))
              : dummyCourses.map((course) => (
                  <Card key={course._id} bgColor={course.bgColor}>
                    <p>{course.title}</p>
                    <p>{course.price}</p>
                  </Card>
                ))}
          </CoursesSection>
        </CoursesBackground>

        <StatsSection>
          {data?.stats ? (
            <CardContainer>
              <CardStatistics>
                Total Teachers: {data.stats.totalTeachers}
              </CardStatistics>
              <CardStatistics>
                Total Students: {data.stats.totalStudents}
              </CardStatistics>
              <CardStatistics>
                Total Courses: {data.stats.totalCourses}
              </CardStatistics>
            </CardContainer>
          ) : (
            <CardContainer>
              <CardStatistics>
                Total Teachers: {dummyStats.totalTeachers}
              </CardStatistics>
              <CardStatistics>
                Total Students: {dummyStats.totalStudents}
              </CardStatistics>
              <CardStatistics>
                Total Courses: {dummyStats.totalCourses}
              </CardStatistics>
            </CardContainer>
          )}
        </StatsSection>
      </InnerContainer>
    </BannerContainer>
  );
};

export default Banner;
