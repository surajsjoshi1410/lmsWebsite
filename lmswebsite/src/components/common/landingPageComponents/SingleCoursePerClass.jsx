import React, { useEffect, useState } from "react";
import {
  MainContainer,
  Heading,
  HeadingUnderline,
  SubHeading,
  CoursesContainer,
  SingleCourseSection,
  CourseTitle,
  CourseDetail,
} from "./SingleCoursePerClass.styles";

const SingleCoursePerClass = () => {
  const [singleCourseData, setSingleCourseData] = useState([]);

  const dummyData = [
    {
      _id: { $oid: "66fe9a52fc472c1dea01ba87" },
      className: "Science",
      classLevel: 10,
      curriculum: "CBSE",
      created_at: { $date: "2024-10-03T13:21:22.364Z" },
      courseTitle: "Introduction to Science",
      coursePrice: 200,
    },
    {
      _id: { $oid: "66ffc909f9acfb728162bdb8" },
      className: "Chemistry",
      classLevel: 11,
      curriculum: "CBSE",
      created_at: { $date: "2024-10-04T10:52:57.481Z" },
      courseTitle: "Advanced Chemistry",
      coursePrice: 250,
    },
  ];

  useEffect(() => {
    fetch("http://localhost:5000/courses/singleCoursePerClass")
      .then((response) => response.json())
      .then((data) => {
        const repeatedData = data.courses && data.courses[0]
          ? Array(3).fill(data.courses[0])
          : dummyData;
        setSingleCourseData(repeatedData);
      })
      .catch((error) => {
        console.error("Error fetching single course data:", error);
        setSingleCourseData(dummyData);
      });
  }, []);

  return (
    <MainContainer>
      <Heading>Explore our programs</Heading>
      <HeadingUnderline />
      <SubHeading>
        Discover the many benefits you will enjoy when you add us to your online platform
      </SubHeading>
      <SubHeading> <b>Grades Class 4 - Class 10</b></SubHeading>
      <CoursesContainer>
        {singleCourseData.length > 0 ? (
          singleCourseData.map((course, index) => (
            <SingleCourseSection key={index}>
              <CourseTitle>{course.courseTitle}</CourseTitle>
              <CourseDetail>Class Name: {course.className}</CourseDetail>
              <CourseDetail>Class Level: {course.classLevel}</CourseDetail>
              <CourseDetail>Curriculum: {course.curriculum}</CourseDetail>
              <CourseDetail>Price: ${course.coursePrice}</CourseDetail>
            </SingleCourseSection>
          ))
        ) : (
          <CourseDetail>No Data Available for Single Course Per Class</CourseDetail>
        )}
      </CoursesContainer>

      <SubHeading> <b>Online Live School Tuitions</b> </SubHeading>
      <CoursesContainer>
        {singleCourseData.length > 0 ? (
          singleCourseData.map((course, index) => (
            <SingleCourseSection key={index}>
              <CourseTitle>{course.courseTitle}</CourseTitle>
              <CourseDetail>Class Name: {course.className}</CourseDetail>
              <CourseDetail>Class Level: {course.classLevel}</CourseDetail>
              <CourseDetail>Curriculum: {course.curriculum}</CourseDetail>
              <CourseDetail>Price: ${course.coursePrice}</CourseDetail>
            </SingleCourseSection>
          ))
        ) : (
          <CourseDetail>No Data Available for Single Course Per Class</CourseDetail>
        )}
      </CoursesContainer>

      <SubHeading><b> Class 11 - Class 12</b></SubHeading>
      <CoursesContainer>
        {singleCourseData.length > 0 ? (
          singleCourseData.map((course, index) => (
            <SingleCourseSection key={index}>
              <CourseTitle>{course.courseTitle}</CourseTitle>
              <CourseDetail>Class Name: {course.className}</CourseDetail>
              <CourseDetail>Class Level: {course.classLevel}</CourseDetail>
              <CourseDetail>Curriculum: {course.curriculum}</CourseDetail>
              <CourseDetail>Price: ${course.coursePrice}</CourseDetail>
            </SingleCourseSection>
          ))
        ) : (
          <CourseDetail>No Data Available for Single Course Per Class</CourseDetail>
        )}
      </CoursesContainer>
    </MainContainer>
  );
};

export default SingleCoursePerClass;
