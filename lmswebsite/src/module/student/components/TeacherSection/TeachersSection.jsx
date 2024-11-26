import React, { useEffect, useState } from "react";
import { getTeachersByExperience } from "../../../../api/teacherApi";
import {
  TeachersSectionContainer,
  SectionTitle,
  TeachersGrid,
  TeacherCard,
  TeacherImage,
  TeacherInfo,
} from "./TeacherSection.styles";

const TeachersSection = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await getTeachersByExperience();
        setTeachers(response.slice(0, 4)); // Get the top 3 experienced teachers
        setLoading(false);
      } catch (err) {
        console.error("Error fetching teachers:", err);
        setError("Failed to load teachers data");
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  console.log("teachers", teachers);  
  return (
   
    <>hello</>
    // <TeachersSectionContainer>
    //   <SectionTitle>Meet Our Experienced Teachers</SectionTitle>
    //   <TeachersGrid>
    //     {teachers.map((teacher, index) => (
    //       <TeacherCard key={index}>
    //         <TeacherImage
    //           src={teacher.profile_image || 'default-image-path.jpg'}
    //           alt={teacher.name}
    //         />
    //         <TeacherInfo>
    //           <h3 className="teacher-name">{teacher.name}</h3>
    //           <p className="teacher-subject">{teacher.subject}</p>
    //           <p className="teacher-experience">
    //             Experience: {teacher.experience} years
    //           </p>
    //         </TeacherInfo>
    //       </TeacherCard>
    //     ))}
    //   </TeachersGrid>
    // </TeachersSectionContainer>
  
  );
};

export default TeachersSection;
