// import React, { useState } from 'react';
// import { CiFilter } from 'react-icons/ci';
// import { MdCalendarToday, MdNotifications } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import {
//   QuizContainer,
//   Header,
//   SearchBar,
//   QuizList,
//   QuizCard,
//   BatchName,
//   QuizTitle,
//   QuizInfo,
//   QuizDescription,
// } from './StudentQuiz.style';
// import quizLogo from '../../../../../src/assets/quizLogo.jpg';
// import Ellipse from '../../../../../src/assets/Ellipse.jpg';

// const StudentQuiz = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredQuizzes, setFilteredQuizzes] = useState([]);
//   const navigate = useNavigate(); // Hook to navigate

//   const quizData = [
//     {
//       batch: 'Batch A',
//       title: 'Math Quiz 1',
//       subject: 'Math',
//       class: 'Class 10',
//       questions: '20 questions',
//       description: 'Basic math concepts.',
//     },
//     {
//       batch: 'Batch B',
//       title: 'Science Quiz',
//       subject: 'Science',
//       class: 'Class 8',
//       questions: '15 questions',
//       description: 'Physics and Chemistry basics.',
//     },
//     {
//       batch: 'Batch C',
//       title: 'History Quiz',
//       subject: 'History',
//       class: 'Class 9',
//       questions: '25 questions',
//       description: 'World history and events.',
//     },
//     {
//       batch: 'Batch A',
//       title: 'Geography Quiz',
//       subject: 'Geography',
//       class: 'Class 10',
//       questions: '30 questions',
//       description: 'Maps and global features.',
//     },
//   ];

//   const handleSearch = (event) => {
//     const term = event.target.value.toLowerCase();
//     setSearchTerm(term);

//     const filtered = quizData.filter(
//       (quiz) =>
//         quiz.batch.toLowerCase().includes(term) ||
//         quiz.title.toLowerCase().includes(term) ||
//         quiz.subject.toLowerCase().includes(term) ||
//         quiz.class.toLowerCase().includes(term) ||
//         quiz.description.toLowerCase().includes(term)
//     );
//     setFilteredQuizzes(filtered);
//   };

//   const displayedQuizzes = searchTerm ? filteredQuizzes : quizData;

//   // Function to navigate to the quiz response page
//   const handleQuizClick = (quiz) => {
//     // You can pass the quiz data to the response quiz page using route state or URL params
//     navigate('/student/dashboard/assignedBatch/questions', { state: { quiz } });
//   };

//   return (
//     <QuizContainer>
//       {/* Icons Section */}
//       <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', padding: '10px' }}>
//         <div style={{ position: 'relative', marginRight: '20px' }}>
//           <MdCalendarToday size={24} style={{ color: '#ff007a' }} />
//           <span
//             style={{
//               position: 'absolute',
//               top: '-5px',
//               right: '-10px',
//               backgroundColor: '#ff007a',
//               color: '#fff',
//               borderRadius: '50%',
//               fontSize: '12px',
//               padding: '2px 6px',
//             }}
//           >
//             2
//           </span>
//         </div>
//         <MdNotifications size={24} style={{ marginRight: '20px', color: '#000' }} />
//         <img
//           src={Ellipse}
//           alt="User Profile"
//           style={{ borderRadius: '50%', width: '30px', height: '30px', marginRight: '20px' }}
//         />
//       </div>

//       <Header>
//         <img src={quizLogo} alt="Quiz Logo" />
//       </Header>

//       <SearchBar>
//         <input
//           type="text"
//           placeholder="Type to search"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <button>
//           <CiFilter size={20} />
//         </button>
//       </SearchBar>

//       <QuizList>
//         {displayedQuizzes.length > 0 ? (
//           displayedQuizzes.map((quiz, index) => (
//             <QuizCard key={index} onClick={() => handleQuizClick(quiz)}> {/* Make the card clickable */}
//               <BatchName>{quiz.batch}</BatchName>
//               <QuizTitle>{quiz.title}</QuizTitle>
//               <QuizInfo>
//                 <span>{quiz.subject}</span>
//                 <span>{quiz.class}</span>
//                 <span>{quiz.questions}</span>
//               </QuizInfo>
//               <QuizDescription>{quiz.description}</QuizDescription>
//             </QuizCard>
//           ))
//         ) : (
//           <p>No quizzes found for the given search term.</p>
//         )}
//       </QuizList>
//     </QuizContainer>
//   );
// };

// export default StudentQuiz;




import React, { useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import {
  QuizContainer,
  Header,
  SearchBar,
  QuizList,
  QuizCard,
  BatchName,
  QuizTitle,
  QuizInfo,
  QuizDescription,
} from './StudentQuiz.style';
import quizLogo from '../../../../../src/assets/quizLogo.jpg';

const StudentQuiz = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const navigate = useNavigate(); // Hook to navigate

  const quizData = [
    {
      batch: 'Batch A',
      title: 'Math Quiz 1',
      subject: 'Math',
      class: 'Class 10',
      questions: '20 questions',
      description: 'Basic math concepts.',
    },
    {
      batch: 'Batch B',
      title: 'Science Quiz',
      subject: 'Science',
      class: 'Class 8',
      questions: '15 questions',
      description: 'Physics and Chemistry basics.',
    },
    {
      batch: 'Batch C',
      title: 'History Quiz',
      subject: 'History',
      class: 'Class 9',
      questions: '25 questions',
      description: 'World history and events.',
    },
    {
      batch: 'Batch A',
      title: 'Geography Quiz',
      subject: 'Geography',
      class: 'Class 10',
      questions: '30 questions',
      description: 'Maps and global features.',
    },
  ];

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = quizData.filter(
      (quiz) =>
        quiz.batch.toLowerCase().includes(term) ||
        quiz.title.toLowerCase().includes(term) ||
        quiz.subject.toLowerCase().includes(term) ||
        quiz.class.toLowerCase().includes(term) ||
        quiz.description.toLowerCase().includes(term)
    );
    setFilteredQuizzes(filtered);
  };

  const displayedQuizzes = searchTerm ? filteredQuizzes : quizData;

  // Function to navigate to the quiz response page
  const handleQuizClick = (quiz) => {
    // You can pass the quiz data to the response quiz page using route state or URL params
    navigate('/student/dashboard/assignedBatch/questions', { state: { quiz } });
  };

  return (
    <QuizContainer>
      <Header>
        <img src={quizLogo} alt="Quiz Logo" />
      </Header>

      <SearchBar>
        <input
          type="text"
          placeholder="Type to search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button>
          <CiFilter size={20} />
        </button>
      </SearchBar>

      <QuizList>
        {displayedQuizzes.length > 0 ? (
          displayedQuizzes.map((quiz, index) => (
            <QuizCard key={index} onClick={() => handleQuizClick(quiz)}> {/* Make the card clickable */}
              <BatchName>{quiz.batch}</BatchName>
              <QuizTitle>{quiz.title}</QuizTitle>
              <QuizInfo>
                <span>{quiz.subject}</span>
                <span>{quiz.class}</span>
                <span>{quiz.questions}</span>
              </QuizInfo>
              <QuizDescription>{quiz.description}</QuizDescription>
            </QuizCard>
          ))
        ) : (
          <p>No quizzes found for the given search term.</p>
        )}
      </QuizList>
    </QuizContainer>
  );
};

export default StudentQuiz;
