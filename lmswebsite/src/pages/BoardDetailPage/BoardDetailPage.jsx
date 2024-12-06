// src/pages/ClassDetailPage/ClassDetailPage.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import { getClassesByBoardId } from "../../api/classApi";
import {
  Container,
  Header,
  LoadingMessage,
  ErrorMessage,
  NoClassesMessage,
  ClassGrid,
  ClassCard,
  ClassTitle,
  ClassLevel,
  BoardName,
  BoardDescription,
} from "./BoardDetailPage.style";

const BoardDetailPage = () => {
//   const { boardId } = useParams(); // Get the board ID from the URL parameters
  const navigate = useNavigate(); // Initialize useNavigate
  const [classes, setClasses] = useState([]);
  const [loadingClasses, setLoadingClasses] = useState(true);
  const [classesError, setClassesError] = useState(null);
  const [boardInfo, setBoardInfo] = useState(null); // Board info state

  const boardId = "67515aa074d2a39e7a44ac48";
  useEffect(() => {
    if (!boardId) {
      setClassesError(new Error("No board ID provided"));
      setLoadingClasses(false);
      return;
    }

    const fetchClasses = async () => {
      try {
        const classesData = await getClassesByBoardId(boardId);
        setClasses(classesData);
        setLoadingClasses(false);

        if (classesData.length > 0) {
          // Extract board info from the first class's curriculum
          const { name, description } = classesData[0].curriculum;
          setBoardInfo({ name, description });
        }
      } catch (error) {
        setClassesError(error);
        setLoadingClasses(false);
      }
    };

    fetchClasses();
  }, [boardId]);

  const handleClassClick = (classId) => {
    // Navigate to SubjectDetailsPage with the classId
    navigate(`/testing/${classId}`);
  };

  if (loadingClasses) {
    return (
      <Container>
        <LoadingMessage>Loading classes...</LoadingMessage>
      </Container>
    );
  }

  if (classesError) {
    return (
      <Container>
        <ErrorMessage>Error loading classes: {classesError?.message}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      {boardInfo && (
        <>
          <Header>{boardInfo.name}</Header>
          <BoardDescription>{boardInfo.description}</BoardDescription>
        </>
      )}

      {classes.length === 0 ? (
        <NoClassesMessage>No classes found for this board.</NoClassesMessage>
      ) : (
        <ClassGrid>
          {classes.map((classItem) => (
            <ClassCard
              key={classItem._id}
              onClick={() => handleClassClick(classItem._id)} // Add onClick handler
            >
              <ClassTitle>{classItem.className}</ClassTitle>
              <ClassLevel>Level: {classItem.classLevel}</ClassLevel>
              <BoardName>Board: {classItem.curriculum?.name || "N/A"}</BoardName>
            </ClassCard>
          ))}
        </ClassGrid>
      )}
    </Container>
  );
};

export default BoardDetailPage;
