// StudentTaskBoard.jsx

import React, { useEffect, useState } from 'react';
import { getQuizBySubjectId } from '../../../../../api/quizApi';
import { getBatchesByStudentId } from '../../../../../api/batchApi';
import { Card, Button } from 'antd';
import { Container, QuizCard, QuizTitle, QuizDescription } from './StudentTaskBoard.style';
import { getStudentByAuthId } from '../../../../../api/studentApi';
import { getscoreforstudent } from '../../../../../api/responseApi';
import { useNavigate } from 'react-router-dom';
import { BodyText, Heading, PageContainer, PrimaryButton, Subheading } from '../../../../../style/PrimaryStyles/PrimaryStyles';
const StudentTaskBoard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [responses, setResponses] = useState({}); // This will map quiz IDs to scores
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentId, setStudentId] = useState(null);
  const navigate = useNavigate();

  // Fetch quizzes and responses
  useEffect(() => {
    const fetchTaskBoardData = async () => {
      try {
        // Fetching student data from localStorage
        const sessionData = JSON.parse(localStorage.getItem('sessionData'));
        if (!sessionData || !sessionData.userId) {
          console.error('User is not authenticated.');
          throw new Error('User is not authenticated.');
        }
        const authId = sessionData.userId;

        const studentData = await getStudentByAuthId(authId);

        if (!studentData.student || !studentData.student._id) {
          console.error('Student data is incomplete.');
          throw new Error('Student data is incomplete.');
        }

        const studentId = studentData.student._id;
        setStudentId(studentId);

        // Fetch batches based on student ID
        const fetchedBatches = await getBatchesByStudentId(studentId);

        // Extract unique subject IDs from the batches
        const subjectIds = fetchedBatches.map((batch) => batch.subject_id._id);
        const uniqueSubjectIds = [...new Set(subjectIds)];

        // Fetch quizzes for each unique subject ID
        const quizzesData = await Promise.all(
          uniqueSubjectIds.map((subjectId) => getQuizBySubjectId(subjectId))
        );

        // Flatten the quizzes array
        const allQuizzes = quizzesData.flatMap((data) => data.quizzes);
        setQuizzes(allQuizzes);

        // Fetch scores for each quiz for the student
        const responseMap = {};
        await Promise.all(
          allQuizzes.map(async (quiz) => {
            const scoreResponse = await getscoreforstudent(studentId, quiz._id);
            console.log("Score Response for Quiz ID", quiz._id, ":", scoreResponse);
            if (scoreResponse && scoreResponse.data && scoreResponse.data.length > 0) {
              responseMap[quiz._id] = scoreResponse.data[0].score;
              console.log('Response Map Updated for Quiz ID:', quiz._id, 'Score:', scoreResponse.data[0].score);
            }
          })
        );

        setResponses(responseMap);
        console.log('Final Response Map:', responseMap);
      } catch (error) {
        setError('Failed to load quizzes');
        console.error('Error in fetchTaskBoardData:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTaskBoardData();
  }, []);

  // Handle navigation to the quiz answering page
  const handleNavigateToQuiz = (quiz) => {
    navigate(`/student/dashboard/taskBoard/quiz/${quiz._id}`, { state: { quiz, studentId } });
  };

  // Loading and error states
  if (loading) {
    return <PageContainer>
      <BodyText>Loading...</BodyText>
    </PageContainer>;
  }

  if (error) {
    return <PageContainer>
      <BodyText>{error}</BodyText>
    </PageContainer>;
  }

  return (
    <PageContainer>
      <Heading> Task Board</Heading>
      {quizzes.length > 0 ? (
        quizzes.map((quiz) => {
          const score = responses[quiz._id];
          const studentHasAnswered = quiz.answered_by.some(
            (entry) => entry.student_id === studentId
          );

          return (
            <QuizCard key={quiz._id}>
              <Card
                // title={quiz.quiz_title}
                extra={
                  studentHasAnswered ? (
                    <BodyText style={{ color: 'green', fontWeight: 'bold' }}>
                      Your score is: {score}/{quiz.questions.length}
                    </BodyText>
                  ) : (
                    <PrimaryButton
                      type="primary"
                      onClick={() => handleNavigateToQuiz(quiz)}
                      style={{ backgroundColor: '#e91e63', borderColor: '#e91e63' }}
                    >
                      Answer
                    </PrimaryButton>
                  )
                }
                style={{ width: '100%', marginBottom: '20px' }}
                hoverable
              >
                <Subheading>{quiz.quiz_title}</Subheading>
                <BodyText>{quiz.description}</BodyText>
              </Card>
            </QuizCard>
          );
        })
      ) : (
        <div>No quizzes available for this student.</div>
      )}
    </PageContainer>
  );
};

export default StudentTaskBoard;
