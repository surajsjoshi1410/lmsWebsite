// src/components/QuizModel/TeacherAddQuestionModel.jsx

import React, { useState } from "react";
import {
  Container,
  QuestionContainer,
  Textarea,
  OptionsContainer,
  OptionRow,
  // Input,
  CorrectOptionSelect,
  ButtonContainer,
  AddButton,
  ApplyButton,
  QuestionInput,
} from "./TeacherAddQuestionModel.style";
import { Form, Input, Select, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const TeacherAddQuestionModel = ({ onSave }) => {

  const [form] = Form.useForm();
  form.resetFields();
  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionNumber: 1,
      questionText: "",
      options: { a: "", b: "", c: "", d: "" },
      correctOption: "",
    },
  ]);

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      questionNumber: questions.length + 1,
      questionText: "",
      options: { a: "", b: "", c: "", d: "" },
      correctOption: "",
    };
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  // const handleApply = (values) => {
  //   // Validate questions before applying
  //   console.log("values", values);
  //   console.log("questions", questions);
  //   const isValid = questions.every(
  //     (q) =>
  //       q.questionText.trim() !== "" &&
  //       Object.values(q.options).every((opt) => opt.trim() !== "") &&
  //       q.correctOption.trim() !== ""
  //   );

  //   if (!isValid) {
  //     alert("Please fill out all fields for all questions.");
  //     return;
  //   }

  //   // Transform questions to desired format
  //   const transformedQuestions = questions.map((q) => {
  //     const optionIdMap = { a: 1, b: 2, c: 3, d: 4 };
  //     // console.log("optionIdMap", optionIdMap[q.correctOption]);
  //     const data={
  //       question_number: q.questionNumber,
  //       question_text: q.questionText,
  //       options: [
  //         { option_id: 1, option_text: q.options.a },
  //         { option_id: 2, option_text: q.options.b },
  //         { option_id: 3, option_text: q.options.c },
  //         { option_id: 4, option_text: q.options.d },
  //       ],
  //       correct_option_id: optionIdMap[q.correctOption],
  //     }
  //     console.log("inner data", data);
  //     return data;
  //   });

  //   // Pass transformed questions back to parent
  //   if (onSave) {
  //     onSave(transformedQuestions);
  //   }
  // };
  const handleApply = (values) => {
    const { questions } = values;

    // Ensure there is at least one question
    if (!questions || questions.length === 0) {
      alert("Please add at least one question.");
      return;
    }

    // Transform questions to the desired format
    const transformedQuestions = questions.map((q, index) => ({
      question_number: index + 1,
      question_text: q.questionText,
      options: [
        { option_id: 1, option_text: q.options.a },
        { option_id: 2, option_text: q.options.b },
        { option_id: 3, option_text: q.options.c },
        { option_id: 4, option_text: q.options.d },
      ],
      correct_option_id: { a: 1, b: 2, c: 3, d: 4 }[q.correctOption],
    }));

    // Pass the transformed questions to the parent component
    if (onSave) {
      onSave(transformedQuestions);
    }
    form.resetFields(); 
  };


  const handleQuestionTextChange = (e, id) => {
    const { value } = e.target;
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, questionText: value } : question
      )
    );
  };

  const handleOptionChange = (e, id, option) => {
    const { value } = e.target;
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id
          ? { ...question, options: { ...question.options, [option]: value } }
          : question
      )
    );
  };

  const handleCorrectOptionChange = (e, id) => {
    const { value } = e.target;
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, correctOption: value } : question
      )
    );
  };

  return (

    <>
      {/* <Container> */}
      <Form
        form={form}
        layout="vertical"
        onFinish={handleApply}
      >
        <h4>Quiz Questions</h4>

        <Form.List name="questions">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <div
                  key={key}
                  style={{
                    border: '1px solid #ccc',
                    padding: '1em',
                    marginBottom: '1em',
                    borderRadius: '5px',
                  }}
                >
                  {/* Question Text */}
                  <Form.Item
                    {...restField}
                    name={[name, 'questionText']}
                    label="Question Text"
                    rules={[{ required: true, message: 'Please enter the question text' }]}
                  >
                    <Input placeholder="Enter question text" />
                  </Form.Item>

                  {/* Options */}
                  <div style={{ marginBottom: '1em' }}>
                    <Form.Item
                      {...restField}
                      name={[name, 'options', 'a']}
                      label="Option A"
                      rules={[{ required: true, message: 'Please enter option A' }]}
                    >
                      <Input placeholder="Enter option A" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, 'options', 'b']}
                      label="Option B"
                      rules={[{ required: true, message: 'Please enter option B' }]}
                    >
                      <Input placeholder="Enter option B" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, 'options', 'c']}
                      label="Option C"
                      rules={[{ required: true, message: 'Please enter option C' }]}
                    >
                      <Input placeholder="Enter option C" />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      name={[name, 'options', 'd']}
                      label="Option D"
                      rules={[{ required: true, message: 'Please enter option D' }]}
                    >
                      <Input placeholder="Enter option D" />
                    </Form.Item>
                  </div>

                  {/* Correct Option Select */}
                  <Form.Item
                    {...restField}
                    name={[name, 'correctOption']}
                    label="Select Correct Option"
                    rules={[{ required: true, message: 'Please select the correct option' }]}
                  >
                    <Select placeholder="--Select--">
                      <Option value="a">A</Option>
                      <Option value="b">B</Option>
                      <Option value="c">C</Option>
                      <Option value="d">D</Option>
                    </Select>
                  </Form.Item>

                  <Button type="link" danger onClick={() => remove(name)}>
                    Remove Question
                  </Button>
                </div>
              ))}
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
                style={{ marginTop: '10px' }}
              >
                Add Question
              </Button>
            </>
          )}
        </Form.List>

        <Button
          type="primary"
          htmlType="submit"
          style={{ marginTop: '20px' }}
        >
          Apply
        </Button>
      </Form>

      {/* <h4>Quiz Questions</h4>
      {questions.map((question) => (
        <QuestionContainer key={question.id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span>{question.questionNumber}. </span>
            <QuestionInput
              type="text"
              placeholder="Enter question text"
              value={question.questionText}
              onChange={(e) => handleQuestionTextChange(e, question.id)}
              style={{ flex: 1, marginLeft: "0.5em" }}
              required
            />
          </div>

          <OptionsContainer>
            <OptionRow>
              <span>a. </span>
              <Input
                type="text"
                placeholder="Enter option A"
                value={question.options.a}
                onChange={(e) => handleOptionChange(e, question.id, "a")}
                style={{ flex: 1, marginLeft: "0.5em" }}
                required
              />
            </OptionRow>
            <OptionRow>
              <span>b. </span>
              <Input
                type="text"
                placeholder="Enter option B"
                value={question.options.b}
                onChange={(e) => handleOptionChange(e, question.id, "b")}
                style={{ flex: 1, marginLeft: "0.5em" }}
                required
              />
            </OptionRow>
            <OptionRow>
              <span>c. </span>
              <Input
                type="text"
                placeholder="Enter option C"
                value={question.options.c}
                onChange={(e) => handleOptionChange(e, question.id, "c")}
                style={{ flex: 1, marginLeft: "0.5em" }}
                required
              />
            </OptionRow>
            <OptionRow>
              <span>d. </span>
              <Input
                type="text"
                placeholder="Enter option D"
                value={question.options.d}
                onChange={(e) => handleOptionChange(e, question.id, "d")}
                style={{ flex: 1, marginLeft: "0.5em" }}
                required
              />
            </OptionRow>

            <div>
              <label>Select Correct Option:</label>
              <CorrectOptionSelect
                value={question.correctOption}
                onChange={(e) => handleCorrectOptionChange(e, question.id)}
                required
              >
                <option value="">--Select--</option>
                {["a", "b", "c", "d"].map((option) => (
                  <option key={option} value={option}>
                    {option.toUpperCase()}
                  </option>
                ))}
              </CorrectOptionSelect>
            </div>
          </OptionsContainer>
        </QuestionContainer>
      ))}
      <ButtonContainer>
        <AddButton type="button" onClick={handleAddQuestion}>
          + Add Question
        </AddButton>
        <ApplyButton type="button" onClick={handleApply}>
          Apply
        </ApplyButton>
      </ButtonContainer> */}
      {/* </Container> */}
    </>
  );
};

export default TeacherAddQuestionModel;
