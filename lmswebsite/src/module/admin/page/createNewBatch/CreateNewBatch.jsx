import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Select, Button, DatePicker, Upload, message, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createBatch } from "../../../../api/batchApi";
import { getClasses, getSubjects, getTeachersBySubjectAndClass } from "../../../../services/createBatch";
import { getStudentsByClassId, getStudentsForBatchBySubjectId } from "../../../../api/studentApi";
import { uploadFileToFirebase } from "../../../../utils/uploadFileToFirebase";
import { CreateNewBatchWrap } from "./CreateNewBatch.Styles"; // Import styles

const { Option } = Select;

const CreateNewBatch = ({ open, closeModal }) => {
  const [form] = Form.useForm();
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const[mode, setMode] = useState("normal");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchClasses = async () => {
      const classData = await getClasses();
      setClasses(classData || []);
    };
    fetchClasses();
  }, []);

  const handleClassChange = async (value) => {
    const subjectData = await getSubjects(value);
    // const studentData = await getStudentsByClassId(value);
    setSubjects(subjectData || []);
    // setStudents(studentData.students || []);
    form.setFieldsValue({
      subject: undefined,
      teachers: undefined,
      students: undefined,
    });
  };

  const handleSubjectChange = async (value) => {
    const teacherData = await getTeachersBySubjectAndClass(value, form.getFieldValue("class"));
    const studentData = await getStudentsForBatchBySubjectId(value, mode);
   
  
    setStudents(studentData.students || []);
    setTeachers(teacherData || []);
    form.setFieldsValue({ teachers: undefined });
  };

  const handleFileUpload = async (info) => {

    const url = await uploadFileToFirebase(info.file, "batchImages");
    console.log("url", url);

    form.setFieldsValue({ batchImage: url });
    message.success("File uploaded successfully!");

  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const batchData = {
        ...values,
        date: values.date.format("YYYY-MM-DD"),
        teachers: values.teachers?.map((teacher) => teacher) || [],
        students: values.students?.map((student) => student) || [],
      };
      const submissionData = {
        batch_name: batchData.batchName,
        batch_image: batchData.batchImage,
        teacher_id: batchData.teachers,
        class_id: batchData.class,
        students: batchData.students,
        subject_id: batchData.subject,
        date: batchData.date,

      }

      const response = await createBatch(submissionData);
      if (response?.message) {
        message.success("Batch created successfully!");
        form.resetFields();
        closeModal(); // Close modal on success
      }
    } catch (error) {
      message.error("Failed to create batch. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CreateNewBatchWrap>
      <Modal
        title="Create New Batch"
        open={open}
        onCancel={closeModal}
        footer={null}
        centered
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="batchName"
            label="Batch Name"
            rules={[{ required: true, message: "Please enter the batch name" }]}
          >
            <Input placeholder="Enter batch name" />
          </Form.Item>

          <Form.Item
          name="batchMode"
          label="Batch Mode"
          rules={[{ required: true, message: "Please select a batch mode" }]}
          >
            <Radio.Group onChange={(e) => setMode(e.target.value)}>
              <Radio value="normal">Normal</Radio>
              <Radio value="personal">Personal</Radio>
            </Radio.Group>
            
          </Form.Item>

          <Form.Item
            name="class"
            label="Class"
            rules={[{ required: true, message: "Please select a class" }]}
          >
            <Select placeholder="Select class" onChange={handleClassChange}>
              {classes.map((cls) => (
                <Option key={cls._id} value={cls._id}>
                  {cls.classLevel}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: "Please select a subject" }]}
          >
            <Select
              placeholder="Select subject"
              onChange={handleSubjectChange}
              disabled={!subjects.length}
            >
              {subjects.map((subj) => (
                <Option key={subj._id} value={subj._id}>
                  {subj.subject_name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="teachers"
            label="Teachers"
            rules={[{ required: true, message: "Please select teachers" }]}
          >
            <Select
              mode="multiple"
              placeholder="Select teachers"
              options={teachers?.map((teacher) => ({
                label: teacher.user_id.name,
                value: teacher._id,
              }))}
              disabled={!teachers.length}
            />
          </Form.Item>
          {students &&
            <Form.Item name="students" label="Students">
              <Select
                mode="multiple"
                placeholder="Select students"
                options={students?.map((student) => ({
                  label: student?.user?.name,
                  value: student?._id,
                }))}
                disabled={!students.length}
              />
            </Form.Item>
          }

          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="batchImage" label="Upload Batch Image" valuePropName="file">
            <Upload
              name="file"
              accept="image/*"
              customRequest={handleFileUpload}
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{ background: "#EE1B7A", borderColor: "#EE1B7A" }}
            >
              {loading ? "Creating..." : "Create Batch"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </CreateNewBatchWrap>
  );
};

export default CreateNewBatch;
