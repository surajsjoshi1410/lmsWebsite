// QuizQuestionPage.jsx

import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Radio, Button, message } from 'antd';
import { submitResponse, getResponsesByQuiz } from '../../../../../api/responseApi';
import { IoArrowBackCircleOutline } from "react-icons/io5";

const QuizQuestionPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { quiz, studentId } = state || {};

  useEffect(() => {
    const checkIfSubmitted = async () => {
      try {
        const response = await getResponsesByQuiz(quiz._id);
        const responses = response.responses || [];
        const studentResponse = responses.find((res) => res.student_id._id === studentId);
        if (studentResponse) {
          message.warning('You have already submitted responses for this quiz.');
          navigate('/student/dashboard/taskBoard');
        }
      } catch (error) {
        console.error('Error checking if student has submitted responses:', error);
      }
    };

    if (!quiz || !studentId) {
      message.error('No quiz or student data found.');
      navigate('/student/dashboard/taskBoard');
    } else {
      checkIfSubmitted();
    }
  }, [quiz, studentId, navigate]);

  if (!quiz || !studentId) {
    return null;
  }

  const handleSubmitAnswers = async (values) => {
    const responses = quiz.questions.map((question, index) => ({
      question_number: question.question_number,
      selected_option_id: values[`question_${index}`],
    }));

    const responseData = {
      student_id: studentId,
      quiz_id: quiz._id,
      responses,
    };

    try {
      const result = await submitResponse(responseData);
      console.log('Response submitted successfully:', result);

      if (result && result.response) {
        message.success(`Your score is: ${result.response.score}/${quiz.questions.length}`);
      }

      navigate('/student/dashboard/taskBoard'); // Navigate back to the Task Board after submission
    } catch (error) {
      if (error.response?.status === 400 && error.response?.data?.error === 'Response already submitted for this quiz.') {
        message.error('You have already submitted a response for this quiz.');
        navigate('/student/dashboard/taskBoard');
      } else {
        console.error('Error submitting response:', error.response?.data || error.message);
        message.error('An error occurred while submitting your responses.');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button
        onClick={() => navigate(-1)}
        style={{ fontSize: '30px', top: '10px', left: '10px' }}
      >
        <IoArrowBackCircleOutline />
      </button>
      <h1 style={{ textAlign: 'center', paddingBottom: '30px' }}>{quiz.quiz_title}</h1>

      <Form onFinish={handleSubmitAnswers}>
        {quiz.questions.map((question, index) => (
          <div key={question._id} style={{ marginBottom: '20px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
              Question {index + 1}: {question.question_text}
            </div>

            <Form.Item
              name={`question_${index}`}
              rules={[{ required: true, message: 'Please select an option' }]}
            >
              <Radio.Group style={{ display: 'block' }}>
                {question.options.map((option) => (
                  <div key={option.option_id} style={{ marginBottom: '8px' }}>
                    <Radio value={option.option_id}>{option.option_text}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </Form.Item>
          </div>
        ))}

        <Form.Item style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: '#e91e63',
              borderColor: '#e91e63',
              width: 'auto',
              padding: '10px 20px',
            }}
          >
            Submit Answers
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default QuizQuestionPage;
