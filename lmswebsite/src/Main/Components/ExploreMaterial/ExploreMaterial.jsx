import React, { useState } from "react";
import {
  ExploreMaterialWarp,
  ExploreMaterialHeader,
  ExploreMaterialSingleClass,
  ExploreMaterialClass,
  ExploreMaterialCard,
  MaterialCard,
  MaterialTitle,
  MaterialSubtitle,
} from "./ExploreMaterial.style";

const ExploreMaterial = () => {
  // Set the first class as the default selected class
  const [selectedClass, setSelectedClass] = useState("Class 6");

  // Static data for classes
  const classes = [
    { name: "Class 6" },
    { name: "Class 7" },
    { name: "Class 8" },
    { name: "Class 9" },
    { name: "Class 10" },
  ];

  // Handle click on a class and update the selected class
  const handleClassClick = (className) => {
    setSelectedClass(className); // Update the selected class
  };

  // Static data for courses
  const courses = [
    {
      name: "Mathematics",
      detail: "Learn algebra, geometry, and more.",
      image:
        "https://img.freepik.com/premium-photo/science-background-illustration-scientific-design-flasks-glass-chemistry-physics-elements_839051-3762.jpg?w=2000",
    },
    {
      name: "Science",
      detail: "Explore physics, chemistry, and biology.",
      image: "https://via.placeholder.com/300x200?text=Science",
    },
    {
      name: "English",
      detail: "Improve your grammar and comprehension.",
      image: "https://via.placeholder.com/300x200?text=English",
    },
    {
      name: "History",
      detail: "Dive into the past and learn history.",
      image: "https://via.placeholder.com/300x200?text=History",
    },
  ];

  return (
    <ExploreMaterialWarp>
      <ExploreMaterialHeader>Explore Study Material</ExploreMaterialHeader>
      <ExploreMaterialSingleClass>
        {classes.map((classItem, index) => (
          <ExploreMaterialClass
            key={index}
            isSelected={selectedClass === classItem.name} // Check if the button is selected
            onClick={() => handleClassClick(classItem.name)} // Update selected class on click
          >
            {classItem.name}
          </ExploreMaterialClass>
        ))}
      </ExploreMaterialSingleClass>
      <ExploreMaterialCard>
        {courses.map((course, index) => (
          <MaterialCard key={index}>
            <MaterialTitle>{course.name}</MaterialTitle>
            <MaterialSubtitle>{course.detail}</MaterialSubtitle>
            <img src={course.image} alt={course.name} />
          </MaterialCard>
        ))}
      </ExploreMaterialCard>
    </ExploreMaterialWarp>
  );
};

export default ExploreMaterial;
