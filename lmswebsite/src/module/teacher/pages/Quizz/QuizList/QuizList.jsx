import React, { useEffect, useState } from 'react'

import { ViewButton, QuizCard, QuizzesContainer, QuizListWrap, Button } from './QuizList.Styles';
import { Link, useParams } from 'react-router-dom';
import { AiOutlineFileAdd } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { getUserByAuthId } from '../../../../../api/userApi';
import { getTeacherByAuthId } from '../../../../../api/teacherApi';
import { getQuizzesByTeacher } from '../../../../../api/quizApi';
import TeacherCreateQuizForm from '../TeacherCreateQuizForm/TeacherCreateQuizForm';
import { createQuiz } from '../../../../../api/quizApi';

export default function QuizList() {
    const [searchInput, setSearchInput] = useState("");
    const [showDialog, setShowDialog] = useState(false); // State to control dialog visibility
    const [quizzes, setQuizzes] = useState([]); // State to store quizzes
    const [loading, setLoading] = useState(false); // State for loading
    const [error, setError] = useState(null); // State for error messages
    const [success, setSuccess] = useState(null); // State for success messages
    const [teacherId, setTeacherId] = useState('');
    const [filterData, setFilterData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const param = useParams();
    const batchId = param.batchId;
    useEffect(() => {
        const apicaller = async () => {
            const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
            const teacherData = await getTeacherByAuthId(authId);
            console.log("Teacher Data:", teacherData);
            const data = await getQuizzesByTeacher({ teacher_id: teacherData.teacher._id, batch_id: batchId });
            console.log('Teacher ID:', data);
            setQuizzes(data.quizzes);
            setOriginalData(data.quizzes);
            setFilterData(data.quizzes);
            setTeacherId(teacherData.teacher._id);
        }
        apicaller();

    }, [])

    // Handle showing the dialog
    const handleAddQuiz = () => {
        setShowDialog(true); // Show dialog when the button is clicked
    };

    // Handle closing the dialog
    const handleCloseDialog = () => {
        setShowDialog(false); // Hide dialog when close is clicked
    };

    // Handle form submission (onSubmit function)
    const handleFormSubmit = async (formData) => {
        console.log('Form submitted with data: ', formData);

        setLoading(true);
        setError(null);
        setSuccess(null);

        // Prepare the data according to the backend requirements
        const responseData = {
            quiz_title: formData.title,
            teacher_id: teacherId, // Use the passed teacherId
            batch_index: formData.batch,
            class_level: formData.classLevel,
            subject: formData.subject,
            description: formData.description,
            // dueDate: formData.dueDate, // Uncomment if using dueDate
            questions: formData.questions.map((q, index) => ({
                question_number: index + 1,
                question_text: q.questionText,
                options: [
                    { option_id: 1, option_text: q.options.a },
                    { option_id: 2, option_text: q.options.b },
                    { option_id: 3, option_text: q.options.c },
                    { option_id: 4, option_text: q.options.d },
                ],
                correct_option_id: parseInt(q.correctOption, 10),
                is_answer_valid: true, // Assuming validation is done
            })),
        };
        try {
            const response = await createQuiz(formData);
            if (response && response.quiz) {
                // setQuizzes((prevQuizzes) => [...prevQuizzes, response.quiz]);
                setShowDialog(false); // Close the form dialog after submission
                setSuccess('Quiz created successfully!');
                setTimeout(() => setSuccess(null), 3000); // Clear success message after 3 seconds
            } else {
                setError('Failed to create quiz. Please try again.');
            }

        } catch (err) {
            setError('An error occurred while creating the quiz.');
        } finally {
            setLoading(false);
        }
    };
    // Filter data based on searchInput for "Quiz Name"
    useEffect(() => {
        if (searchInput) {
            const filtered = originalData.filter((item) =>
                item.quiz_title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilterData(filtered);
        } else {
            setFilterData(originalData); // Reset to original data if search is empty
        }
        console.log("filtered Data", filterData);
    }, [searchInput, originalData]);

    return (<QuizListWrap className="content-area">
        <div className="area-row ar-one">
            <div className="created-quizes-batches_nav">
                <div className='created-quizes-back-btn'>
                    <Link to={`/teacher/dashboard/quizz/assignedBatch`}><IoMdArrowRoundBack /></Link>
                </div>

                <h2 className="created-quizes-batch_title">Created Quizes</h2>
                <div className="create-quizes-search">
                    <form>
                        <div className="created-quizes-input-group">
                            <span className="input-icon">
                                <FaSearch />
                            </span>
                            <input
                                type="text"
                                className="created-quizes-input-control"
                                placeholder="Search by Quiz Title"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
                {/* Link replaced with button to open modal */}
                <button
                    onClick={handleAddQuiz} // Open modal on click
                    className="created-quizes-batch_btn"
                >
                    <AiOutlineFileAdd className="created-quizes-batch_icon" />
                    <span>Create Quizes</span>
                </button>
            </div>
        </div>
        <div className="area-row ar-two"></div>
        <div className="area-row ar-three">
            {loading && <p>Creating quiz...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <QuizzesContainer>
                {filterData.map((quiz, index) => (
                    <QuizCard key={quiz._id || index}>
                        <h2>{quiz.quiz_title}</h2>

                        <div className="batch">
                            <p className='red'>
                                <strong>Batch:</strong> {quiz.batch_index.batch_name} {/* Assuming populated */}
                            </p>
                        </div>


                        <div className='quizdisplay'>
                            <div className='subject'>
                                <p>
                                    <strong>Subject:</strong> {quiz.subject?.subject_name} {/* Assuming populated */}
                                </p>
                            </div>

                            <div className='class'>
                                <p>
                                    <strong>Class  :</strong> {quiz.class_level?.classLevel} {/* Assuming populated */}
                                </p>
                            </div>

                            <div className="description">
                                <p>
                                    <strong>Description:</strong> {quiz.description}
                                </p>
                            </div>
                        </div>
                    </QuizCard>
                ))}
            </QuizzesContainer>
            {/* Conditionally render the TeacherCreateQuizForm dialog */}
            {showDialog && (
                <TeacherCreateQuizForm
                    onSubmit={handleFormSubmit} // Pass the onSubmit function
                    onClose={handleCloseDialog} // Pass onClose for closing the dialog
                    teacherId={teacherId} // Pass the teacherId
                />
            )}
        </div>


    </QuizListWrap>
    );
}
