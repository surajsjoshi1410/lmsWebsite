// src/components/QuizForm/TeacherCreateQuizForm.jsx
import React, { useState, useEffect } from 'react';
import {
  ModalOverlay,
  ModalContent,
  // Button,
  FormTitle,
  Label,
  // Input,
  // TextArea,
  CreateButton,
  AddQuestionLink,
  FormRow,
} from './TeacherCreateQuizForm.style';
import TeacherAddQuestionModel from '../TeacherAddQuestionModel/TeacherAddQuestionModel';
import { getBatchesByTeacherId } from '../../../../../api/batchApi';
// import {getSingleTeacherApplicationUsingUserId} from '../../../../../../api/teachersApplicationApi';
import { getUserProfile } from '../../../../../api/userApi';
import { getTeacherByAuthId } from '../../../../../api/teacherApi';
import { getTeacherById } from '../../../../../api/teacherApi';
import {
  Form,
  Input,
  Select,
  Button,
  Typography,
  Modal,
  List,
  Divider,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ModalBody } from '../../../../../style/PrimaryStyles/PrimaryStyles';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;


const TeacherCreateQuizForm = ({ onSubmit, onClose, teacherId }) => { // Receive teacherId as a prop
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    title: '',
    batch: '',
    subject: '',
    classLevel: '',
    description: '',
    questions: [],
  });


  const [selectedBatchIndex, setSelectedBatchIndex] = useState(null);
  const [subjectData, setSubjectData] = useState([]);
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  const [classData, setClassData] = useState(null);
  const [teacherIdData, setTeacherIdData] = useState(null);
  const [batches, setBatches] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    console.log("Selected Batch Index:", selectedBatchIndex);
    if (selectedBatchIndex !== null) {
      setSubjectData(batches.filter((batch, index) => {

        if (batch._id === selectedBatchIndex) {
          return (batch.subject_id);
        }
      }));

      let classD;
      batches.map((batch, index) => {
        if (batch._id === selectedBatchIndex) {


          classD = { id: batch.class_id._id, name: batch.class_id.classLevel };
        }
      })
      setFormData((prevFormData) => ({
        ...prevFormData,
        classLevel: classD._id,
      }));
      // Update the form field with class name
      form.setFieldsValue({ ClassLevel: classD.name });

      setClassData(classD);
      console.log("Class Data:", classD);
    }
  }, [selectedBatchIndex])



  // Fetch batches, subjects, and class levels on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {

        const authId = JSON.parse(localStorage.getItem("sessionData")).userId;
        const teacherData = await getTeacherByAuthId(authId);
        console.log("Teacher Data:", teacherData);
        const fetchedBatches = await getBatchesByTeacherId(teacherData.teacher._id);
        // console.log("Fetched Batches:", fetchedBatches);

        setTeacherIdData(teacherData.teacher._id)
        setBatches(fetchedBatches);

        let batchesData = fetchedBatches;

        // Attempt to extract batches from known keys
        if (fetchedBatches.batches && Array.isArray(fetchedBatches.batches)) {
          batchesData = fetchedBatches.batches;
        } else if (fetchedBatches.data && Array.isArray(fetchedBatches.data)) {
          batchesData = fetchedBatches.data;
        }

        const sessionData = localStorage.getItem('sessionData');
        const userData = await getUserProfile(sessionData.userId);
        // console.log('User Data:', userData.user._id);

        // Fetch all subjects
        // const subjectsData = await getTeacherById(userData.user._id);
        // // console.log('Subjects Data:', subjectsData);
        // setSubjects(Array.isArray(subjectsData) ? subjectsData : []);

        // // Fetch all class levels
        // const classLevelsData = await fetchClassLevels();
        // setClassLevels(Array.isArray(classLevelsData) ? classLevelsData : []);

        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load form data. Please try again.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log("gg", formData);
  };

  const openQuizDialog = () => setShowQuizDialog(true);
  const closeQuizDialog = () => setShowQuizDialog(false);

  const handleSaveQuestions = (questionsData) => {
    console.log("questionsData", questionsData);
    setFormData({
      ...formData,
      questions: questionsData,
    });
    setShowQuizDialog(false);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (formData.questions.length === 0) {
      alert('Please add at least one question.');
      return;
    }

    setFormData({
      ...formData,
      classLevel: classData.id,
    });

    if (onSubmit) {
      const submissionData = {

        quiz_title: formData.title,
        teacher_id: teacherIdData,  // Replace with a valid teacher ObjectId from your database
        batch_index: formData.batch,
        class_level: classData.id,
        subject: formData.subject,  // Replace with a valid subject ObjectId from your database
        description: formData.description,
        // dueDate: "2024-11-30T23:59:59.000Z",
        questions: formData.questions,


      }
      console.log("submitting data", submissionData);
      onSubmit(submissionData);
    }
  };

  if (loading) {
    return (
      <ModalOverlay>
        <ModalContent>
          <p>Loading...</p>
        </ModalContent>
      </ModalOverlay>
    );
  }

  if (error) {
    return (
      <ModalOverlay>
        <ModalContent>
          <p style={{ color: 'red' }}>{error}</p>
          <Button onClick={onClose}>Close</Button>
        </ModalContent>
      </ModalOverlay>
    );
  }

  return (
    // <ModalOverlay>
    <>
      {/* <ModalContent> */}
      {/* <Button onClick={onClose}>X</Button> */}

      <Form
        form={form}
        name="create_quiz"
        layout="vertical"
        onFinish={handleSubmit}
        // onFinishFailed={onFinishFailed}
        initialValues={formData}
        style={{ maxWidth: '600px', margin: '0 auto', padding: '40px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Form Title */}
        <Form.Item>
          <Title level={2} style={{ textAlign: 'center', color: '#ff0080' }}>
            Create a New Quiz
          </Title>
        </Form.Item>

        {/* Title Input */}
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter the quiz title' }]}
        >
          <Input
            placeholder="Enter quiz title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Item>

        {/* Batch Select */}
        <Form.Item
          label="Batch"
          name="batch"
          rules={[{ required: true, message: 'Please select a batch' }]}
        >
          <Select
            placeholder="Select Batch"
            value={formData.batch}
            onChange={(value) => {
              setSelectedBatchIndex(value);
              console.log("Selected Batch Index:", value);
              handleChange({ target: { name: 'batch', value } });
            }}
          >
            {batches.map((batch) => (
              <Option key={batch._id} value={batch._id}>
                {batch.batch_name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Subject Select */}
        <Form.Item
          label="Subject"
          name="subject"
          rules={[{ required: true, message: 'Please select a subject' }]}
        >
          <Select
            placeholder="Select Subject"
            value={formData.subject}
            onChange={(value) => handleChange({ target: { name: 'subject', value } })}
          >
            {subjectData?.map((subject) => {
              return (

                <Option key={subject?.subject_id?._id} value={subject?.subject_id._id}>
                  {subject?.subject_id.subject_name}
                </Option>
              )
            })}
          </Select>
        </Form.Item>

        {/* Description TextArea */}
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please enter the description' }]}
        >
          <TextArea
            rows={4}
            placeholder="Enter quiz description"
             name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Item>

        {/* Conditional Class Level Select */}
        {classData && (
          <Form.Item
            label="Class Level"
            name="ClassLevel"
            rules={[{ required: true, message: 'Please enter the class level' }]}
          >
            <Input placeholder="Class level" readOnly />
          </Form.Item>

        )}
        {/* <Form.Item
          label="Class Level"
          name="ClassLevel"
          rules={[{ required: true, message: 'Please enter the class level' }]}

        >

          <Input
            placeholder="Enter class level"
            name="ClassLevel"
            value={classData.name}
            onChange={handleChange}
            readOnly
          />
        </Form.Item> */}
        {/* Quiz Questions */}
        <Form.Item>
          <Button
            type="dashed"
            onClick={openQuizDialog}
            block
            icon={<PlusOutlined />}
            style={{ borderColor: '#ff0080', color: '#ff0080' }}
          >
            Add Questions
          </Button>
        </Form.Item>

        {/* Display number of questions added */}
        {formData.questions.length > 0 && (
          <Form.Item>
            <Text>
              {formData.questions.length} question
              {formData.questions.length > 1 ? 's' : ''} added.
            </Text>
          </Form.Item>
        )}

        {/* Create Quiz Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{ backgroundColor: '#ff0080', borderColor: '#ff0080' }}
          >
            Create Quiz
          </Button>
        </Form.Item>
      </Form>
      {/* <form onSubmit={handleSubmit}>
          <FormTitle>Create a New Quiz</FormTitle>

          <FormRow>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </FormRow>

          <FormRow>
            <Label>Batch</Label>
            <select
              name="batch"
              value={formData.batch}
              onChange={(e) => { setSelectedBatchIndex(e.target.value); handleChange(e); }}
              required
              style={{
                width: '70%',
                padding: '0.5em',
                borderRadius: '5px',
                border: '2px solid #ccc',
              }}
            >
              <option value="">Select Batch</option>
              {batches.map((batch, index) => (
                <option key={batch._id} value={batch._id}>
                  {batch.batch_name}
                </option>
              ))}
            </select>
          </FormRow>

         
          <FormRow>
            <Label>Subject</Label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: '70%',
                padding: '0.5em',
                borderRadius: '5px',
                border: '2px solid #ccc',
              }}
            >
              <option value="">Select Subject</option>
              {subjectData.map((subject,index) => (
                <option key={subject?._id} value={subject?._id||index}>
                  {subject?.subject_name} 
                </option>
              ))}
            </select>
          </FormRow>

         
          <FormRow>
            <Label>Description</Label>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormRow>
          {classData &&
            <FormRow>
              <Label>ClassLevel</Label>
              <TextArea
                name="ClassLevel"
                value={classData.name}
                onChange={handleChange}
                required
              />
            </FormRow>}

         
          <FormRow>
            <Label>Quiz Questions</Label>
            <AddQuestionLink type="button" onClick={openQuizDialog}>
              Add Questions
            </AddQuestionLink>
          </FormRow>

         
          {formData.questions.length > 0 && (
            <p>{formData.questions.length} question(s) added.</p>
          )}

       
          <CreateButton type="submit">Create Quiz</CreateButton>
        </form> */}
      {/* </ModalContent> */}

      {/* TeacherAddQuiz dialog/modal */}
      <Modal
        title={`Add Questions to ${formData.title}`}
        open={showQuizDialog}
        onCancel={() => {  setShowQuizDialog(false) }  }
        footer={null}
      >
        <ModalBody >
          <TeacherAddQuestionModel onSave={handleSaveQuestions} />
        </ModalBody>

      </Modal>
      {/* {showQuizDialog && (
        <ModalOverlay>
          <ModalContent>
            <TeacherAddQuestionModel onSave={handleSaveQuestions} />
            <Button onClick={closeQuizDialog}>Close</Button>
          </ModalContent>
        </ModalOverlay>
      )} */}

      {/* </ModalOverlay> */}
    </>
  );
};

export default TeacherCreateQuizForm;
