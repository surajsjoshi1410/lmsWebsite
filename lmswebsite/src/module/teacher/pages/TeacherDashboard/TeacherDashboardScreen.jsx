import React, { useState, useEffect } from 'react';
import { TeacherDashBoardCardswrap } from './TeacherDashboardScreen.styles'; 
import { getBatchesCount, getStudentsCount } from '../../../../api/teachDashboardApi';
import { getTeacherByAuthId } from '../../../../api/teacherApi';
import TeacherdashBoardCards from '../../components/TeacherdashBoardCards/TeacherdashBoardCards'; 
import { ImUser } from 'react-icons/im';
import { MdLiveTv } from 'react-icons/md';
import { getRecentQuizForTeacher } from '../../../../api/teachDashboardApi'; // Correct API import
import TeacherdashBoardQuizCard from '../../components/TeacherDashboardQuizCard/TeacherDashboardQuizCard';

const iconMap = {
  'Total students': <ImUser />,
  'Total Batches': <MdLiveTv />,
  'Recent Quiz': <MdLiveTv />  // You can replace with a more relevant icon if you have one
};

const TeacherDashBoardScreen = () => {
  const [batchesCount, setBatchesCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [teacherData, setTeacherData] = useState(null);
  const [teacherId, setTeacherId] = useState(null);
  const [dashboardCards, setDashboardCards] = useState([]); 
  const [recentQuiz, setRecentQuiz] = useState(null); // State to store recent quiz data
  const [quizCardData, setQuizCardData] = useState(null);  // State to store quiz card data

  // Fetch teacher data and set teacherId
  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const sessionData = JSON.parse(localStorage.getItem('sessionData'));
        if (!sessionData || !sessionData.userId) {
          throw new Error('User is not authenticated.');
        }

        const teacherData = await getTeacherByAuthId(sessionData.userId);
        setTeacherData(teacherData);
        setTeacherId(teacherData.teacher?._id); // Set teacherId
        console.log('Teacher Data:', teacherData);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeacherData();
  }, []);

  // Fetch batch and student counts when teacherId is available
  useEffect(() => {
    if (!teacherId) return;

    const fetchCounts = async () => {
      try {
        const batchCount = await getBatchesCount(teacherId);
        const studentCount = await getStudentsCount(teacherId);

        setBatchesCount(batchCount.count || 0);
        setStudentsCount(studentCount.totalStudents || 0);

        // Set up dashboard cards data for batches and students
        setDashboardCards([
          {
            title: 'Total students',
            icon: iconMap['Total students'],
            count: studentCount.totalStudents || 0,
          },
          {
            title: 'Total Batches',
            icon: iconMap['Total Batches'],
            count: batchCount.count || 0,
          },
        ]);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, [teacherId]); // Trigger when teacherId changes

  // Fetch recent quiz for the teacher once teacherId is available
  useEffect(() => {
    if (!teacherId) return;

    const fetchRecentQuiz = async () => {
      try {
        const recentQuizData = await getRecentQuizForTeacher(teacherId);
        setRecentQuiz(recentQuizData);
        console.log('Recent Quiz:', recentQuizData);

        // Set up quiz card data
        setQuizCardData({
          title: 'Recent Quiz',
          icon: iconMap['Recent Quiz'],
          count: recentQuizData.quiz_title || 'No recent quiz available', // If there's no recent quiz, show a fallback message
        });
      } catch (error) {
        console.error('Error fetching recent quiz:', error);
      }
    };

    fetchRecentQuiz();
  }, [teacherId]); 

  

  if (!teacherId) {
    return <div>Loading...</div>; 
  }
console.log('Recent Quiz:', quizCardData);
  return (
    <TeacherDashBoardCardswrap className="content-area">
      <div>
        {/* Pass the cards data to TeacherdashBoardCards component */}
        <TeacherdashBoardCards cardsData={dashboardCards} />
      </div>
      <div className="area-row ar-two">
       <TeacherdashBoardQuizCard cardsdata={quizCardData} />
      </div>
      <div className="area-row ar-three">
        {/* Additional UI components */}
      </div>
    </TeacherDashBoardCardswrap>
  );
};

export default TeacherDashBoardScreen;
