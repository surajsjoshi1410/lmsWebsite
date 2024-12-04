import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "antd";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Importing left and right arrow icons
import {getStatisticsData }from "../../../api/statsApi"; // Import API configuration
import {
  BannerContainerWarp,
  BannerClip,
  CarouselWrapper,
  BannerImage,
  BannerPopularCourses,
  PopularCoursesHeader,
  PopularCourses,
  PopularCourseCard,
  PopularCoursesClass,
  PopularCoursesPrice,
  PopularCoursesName,
  BannerStats,
  StatsBatches,
  StatsBatchesIcon,
  TotalStatsBatches,
  ArrowButtonLeft,
  ArrowButtonRight,
} from "./Banner.styles";

const Banner = ({ data }) => {
  const { banners = [] } = data;
  const [stats, setStats] = useState({}); // State to hold stats data
  const { courses = [] } = data;
  const coursesRef = useRef(null); // Ref for the courses container

  // Fetch stats data
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getStatisticsData(); // Fetch stats
        console.log("Stats data:", response);
        setStats(response); // Update state with stats data
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  // Stats data for rendering
  const statsData = [
    {
      icon: <AiOutlineUsergroupAdd />,
      value: stats.totalBatches || 0,
      label: "Batches",
      bgColor: "#6cbaff", // Light blue
      boxShadow: "10px -10px 0px #6cbaff", // Blue shadow
    },
    {
      icon: <FaBookReader />,
      value: stats.totalCourses || 0,
      label: "Courses",
      bgColor: "#fffacd", // Light yellow
      boxShadow: "10px -10px 0px #fffacd", // Yellow shadow
    },
    {
      icon: <PiStudentBold />,
      value: stats.totalStudents || 0,
      label: "Students",
      bgColor: "#e0ffe0", // Light green
      boxShadow: "10px -10px 0px #e0ffe0", // Green shadow
    },
    {
      icon: <LiaChalkboardTeacherSolid />,
      value: stats.totalTeachers || 0,
      label: "Teachers",
      bgColor: "#ffe4e1", // Light pink
      boxShadow: "10px -10px 0px #ffe4e1", // Red shadow
    },
  ];

  // Colors for popular courses
  const backgroundColors = [
    "#FFD700", // Gold
    "#FF4500", // Orange Red
    "#00BFFF", // Deep Sky Blue
    "#32CD32", // Lime Green
    "#FF69B4", // Hot Pink
    "#8A2BE2", // Blue Violet
  ];

  // Generate a background color based on the index
  const getBackgroundColor = (index) =>
    backgroundColors[index % backgroundColors.length];

  // Scroll handler for left and right buttons with looping
  const scrollLeft = () => {
    if (coursesRef.current) {
      const maxScrollLeft = coursesRef.current.scrollWidth;
      if (coursesRef.current.scrollLeft === 0) {
        coursesRef.current.scrollLeft =
          maxScrollLeft - coursesRef.current.clientWidth;
      } else {
        coursesRef.current.scrollLeft -= 200; // Scroll left by 200px
      }
    }
  };

  const scrollRight = () => {
    if (coursesRef.current) {
      const maxScrollLeft = coursesRef.current.scrollWidth;
      if (
        coursesRef.current.scrollLeft + coursesRef.current.clientWidth >=
        maxScrollLeft
      ) {
        coursesRef.current.scrollLeft = 0;
      } else {
        coursesRef.current.scrollLeft += 200; // Scroll right by 200px
      }
    }
  };

  // Create a looped version of courses
  const loopedCourses = [...courses]; // Duplicate the courses list for looping

  return (
    <BannerContainerWarp>
      {banners?.length > 0 && (
        <CarouselWrapper>
          <Carousel autoplay dots>
            {banners.map((item, index) => (
              <div key={index}>
                <BannerImage
                  src={item.banner_image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Carousel>
        </CarouselWrapper>
      )}

      <BannerPopularCourses>
        <PopularCoursesHeader>Popular Courses</PopularCoursesHeader>
        <div style={{ position: "relative" }}>
          <ArrowButtonLeft onClick={scrollLeft}>
            <AiOutlineLeft /> {/* Left arrow icon */}
          </ArrowButtonLeft>
          <PopularCourses ref={coursesRef}>
            {loopedCourses.map((item, index) => (
              <PopularCourseCard
                key={index}
                style={{
                  backgroundColor: getBackgroundColor(index),
                }}
              >
                <PopularCoursesClass>{item.class}</PopularCoursesClass>
                <PopularCoursesPrice>{item.price}</PopularCoursesPrice>
                <PopularCoursesName>{item.name}</PopularCoursesName>
              </PopularCourseCard>
            ))}
          </PopularCourses>
          <ArrowButtonRight onClick={scrollRight}>
            <AiOutlineRight /> {/* Right arrow icon */}
          </ArrowButtonRight>
        </div>
      </BannerPopularCourses>

      <BannerStats>
        {statsData.map((stat, index) => (
          <StatsBatches key={index} boxShadow={stat.boxShadow}>
            <StatsBatchesIcon bgColor={stat.bgColor}>
              {stat.icon}
            </StatsBatchesIcon>
            <TotalStatsBatches>
              <span>{stat.value}</span> <br /> {stat.label}
            </TotalStatsBatches>
          </StatsBatches>
        ))}
      </BannerStats>

      <BannerClip />
    </BannerContainerWarp>
  );
};

export default Banner;
